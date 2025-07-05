import { Router } from "express";
import { uploadDocument } from "../../controller/upload.controller.js";
import { upload } from "../middleware/multer";

const router = Router()

router.route("/").post(upload.single("file").uploadDocument)

export default router