import asyncHandler from "express-async-handler";
import Project from "../models/Project.js";

// @desc    Create a new project
// @route   POST /api/projects
// @access  Private
export const createProject = asyncHandler(async (req, res) => {
  const {
    projectName,
    businessWebsite,
    industry,
    country,
    companySize,
    targetAudience,
    monthlyLeadGoal,
    aiModules,
  } = req.body;

  if (!projectName || !businessWebsite) {
    res.status(400);
    throw new Error("Project name and business website are required");
  }

  const project = await Project.create({
    owner: req.user._id,
    projectName,
    businessWebsite,
    industry,
    country,
    companySize,
    targetAudience,
    monthlyLeadGoal,
    aiModules,
  });

  res.status(201).json({
    success: true,
    message: "Project created successfully",
    project,
  });
});

// @desc    Get all projects belonging to the logged-in user
// @route   GET /api/projects
// @access  Private
export const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find({ owner: req.user._id }).sort({
    createdAt: -1,
  });

  res.status(200).json({
    success: true,
    count: projects.length,
    projects,
  });
});

// @desc    Get a single project by ID
// @route   GET /api/projects/:id
// @access  Private
export const getProjectById = asyncHandler(async (req, res) => {
  const project = await Project.findOne({
    _id: req.params.id,
    owner: req.user._id,
  });

  if (!project) {
    res.status(404);
    throw new Error("Project not found");
  }

  res.status(200).json({
    success: true,
    project,
  });
});

// @desc    Update a project
// @route   PUT /api/projects/:id
// @access  Private
export const updateProject = asyncHandler(async (req, res) => {
  const project = await Project.findOne({
    _id: req.params.id,
    owner: req.user._id,
  });

  if (!project) {
    res.status(404);
    throw new Error("Project not found");
  }

  const updatableFields = [
    "projectName",
    "businessWebsite",
    "industry",
    "country",
    "companySize",
    "targetAudience",
    "monthlyLeadGoal",
    "aiModules",
    "status",
  ];

  updatableFields.forEach((field) => {
    if (req.body[field] !== undefined) {
      project[field] = req.body[field];
    }
  });

  await project.save();

  res.status(200).json({
    success: true,
    message: "Project updated successfully",
    project,
  });
});

// @desc    Delete a project
// @route   DELETE /api/projects/:id
// @access  Private
export const deleteProject = asyncHandler(async (req, res) => {
  const project = await Project.findOne({
    _id: req.params.id,
    owner: req.user._id,
  });

  if (!project) {
    res.status(404);
    throw new Error("Project not found");
  }

  await project.deleteOne();

  res.status(200).json({
    success: true,
    message: "Project deleted successfully",
  });
});