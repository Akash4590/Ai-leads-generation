import express from "express";
import rateLimit from "express-rate-limit";
import {
  signup,
  login,
  logout,
  getMe,
  forgotPassword,
  resetPassword,
  uploadAvatar,
} from "../controllers/authController.js";
import { googleAuth } from "../controllers/googleAuthController.js";
import { protect } from "../middleware/authMiddleware.js";
import upload from "../config/multer.js";

const router = express.Router();

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: {
    success: false,
    message: "Too many attempts, please try again later",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

router.post("/signup", authLimiter, signup);
router.post("/login", authLimiter, login);
router.post("/google", authLimiter, googleAuth);
router.post("/logout", protect, logout);
router.get("/me", protect, getMe);
router.post("/forgot-password", authLimiter, forgotPassword);
router.post("/reset-password/:token", authLimiter, resetPassword);
router.post("/upload-avatar", protect, upload.single("avatar"), uploadAvatar);

export default router;