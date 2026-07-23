import express from "express";
import {
  runAudit,
  getAuditsByProject,
  getLatestAudit,
} from "../controllers/auditController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(protect);

router.post("/:projectId", runAudit);
router.get("/:projectId", getAuditsByProject);
router.get("/:projectId/latest", getLatestAudit);

export default router;