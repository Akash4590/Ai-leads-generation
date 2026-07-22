import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    projectName: {
      type: String,
      required: [true, "Project name is required"],
      trim: true,
      maxlength: 100,
    },
    businessWebsite: {
      type: String,
      required: [true, "Business website is required"],
      trim: true,
    },
    industry: {
      type: String,
      trim: true,
      default: "",
    },
    country: {
      type: String,
      trim: true,
      default: "",
    },
    companySize: {
      type: String,
      trim: true,
      default: "",
    },
    targetAudience: {
      type: String,
      trim: true,
      default: "",
    },
    monthlyLeadGoal: {
      type: Number,
      default: 0,
    },
    aiModules: {
      websiteAudit: { type: Boolean, default: true },
      leadDiscovery: { type: Boolean, default: true },
      aiEmailWriter: { type: Boolean, default: true },
      crmPipeline: { type: Boolean, default: true },
    },
    status: {
      type: String,
      enum: ["Active", "Paused", "Completed"],
      default: "Active",
    },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;