import { Router } from "express";
import { uploadDocument } from "../controller/upload.controller.js";
import { upload } from "../middleware/multer.js";
import { verifyToken } from "../middleware/auth.js";

const router = Router()

router.route("/").post(verifyToken,upload.single("file"),uploadDocument)

export default router