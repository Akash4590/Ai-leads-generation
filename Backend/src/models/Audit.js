import mongoose from "mongoose";

const auditSchema = new mongoose.Schema(
  {
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    overallScore: {
      type: Number,
      default: 0,
    },
    performanceScore: {
      type: Number,
      default: 0,
    },
    seoScore: {
      type: Number,
      default: 0,
    },
    accessibilityScore: {
      type: Number,
      default: 0,
    },
    bestPracticesScore: {
      type: Number,
      default: 0,
    },
    rawData: {
      type: mongoose.Schema.Types.Mixed,
    },
  },
  { timestamps: true }
);

const Audit = mongoose.model("Audit", auditSchema);

export default Audit;