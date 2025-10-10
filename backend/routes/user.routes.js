import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar , getProfile,  updateProfile } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);
router.get("/profile", protectRoute, getProfile);
router.put("/update", protectRoute, updateProfile);

export default router;
