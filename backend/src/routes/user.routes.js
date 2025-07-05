import { Router } from "express";
import { getUser, loginUser, registerUser } from "../controller/user.controller.js";
import { verifyToken } from "../middleware/auth.js";

const router = Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/fetch/:userId").get(verifyToken,getUser)

export default router;