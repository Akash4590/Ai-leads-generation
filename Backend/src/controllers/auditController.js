import asyncHandler from "express-async-handler";
import Project from "../models/Project.js";
import Audit from "../models/Audit.js";

// @desc    Run a real website audit using Google PageSpeed Insights
// @route   POST /api/audits/:projectId
// @access  Private
export const runAudit = asyncHandler(async (req, res) => {
  const project = await Project.findOne({
    _id: req.params.projectId,
    owner: req.user._id,
  });

  if (!project) {
    res.status(404);
    throw new Error("Project not found");
  }

  const targetUrl = project.businessWebsite;

  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
    targetUrl
  )}&key=${process.env.PAGESPEED_API_KEY}&category=performance&category=seo&category=accessibility&category=best-practices`;

  const response = await fetch(apiUrl);
  const data = await response.json();

  if (!response.ok) {
    res.status(400);
    throw new Error(
      data.error?.message || "Failed to run audit for this website"
    );
  }

  const categories = data.lighthouseResult.categories;

  const performanceScore = Math.round((categories.performance?.score || 0) * 100);
  const seoScore = Math.round((categories.seo?.score || 0) * 100);
  const accessibilityScore = Math.round((categories.accessibility?.score || 0) * 100);
  const bestPracticesScore = Math.round(
    (categories["best-practices"]?.score || 0) * 100
  );

  const overallScore = Math.round(
    (performanceScore + seoScore + accessibilityScore + bestPracticesScore) / 4
  );

  const audit = await Audit.create({
    project: project._id,
    owner: req.user._id,
    url: targetUrl,
    overallScore,
    performanceScore,
    seoScore,
    accessibilityScore,
    bestPracticesScore,
    rawData: data.lighthouseResult,
  });

  res.status(201).json({
    success: true,
    message: "Audit completed successfully",
    audit: {
      _id: audit._id,
      url: audit.url,
      overallScore: audit.overallScore,
      performanceScore: audit.performanceScore,
      seoScore: audit.seoScore,
      accessibilityScore: audit.accessibilityScore,
      bestPracticesScore: audit.bestPracticesScore,
      createdAt: audit.createdAt,
    },
  });
});

// @desc    Get all audits for a specific project
// @route   GET /api/audits/:projectId
// @access  Private
export const getAuditsByProject = asyncHandler(async (req, res) => {
  const project = await Project.findOne({
    _id: req.params.projectId,
    owner: req.user._id,
  });

  if (!project) {
    res.status(404);
    throw new Error("Project not found");
  }

  const audits = await Audit.find({ project: project._id })
    .select("-rawData")
    .sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    count: audits.length,
    audits,
  });
});

// @desc    Get the latest audit for a project
// @route   GET /api/audits/:projectId/latest
// @access  Private
export const getLatestAudit = asyncHandler(async (req, res) => {
  const project = await Project.findOne({
    _id: req.params.projectId,
    owner: req.user._id,
  });

  if (!project) {
    res.status(404);
    throw new Error("Project not found");
  }

  const audit = await Audit.findOne({ project: project._id }).sort({
    createdAt: -1,
  });

  if (!audit) {
    res.status(404);
    throw new Error("No audits found for this project yet");
  }

  res.status(200).json({
    success: true,
    audit,
  });
});