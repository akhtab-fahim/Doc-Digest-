import { Router } from "express";
import { deleteDocument, getAllDocument, getDocument, uploadDocument } from "../controller/upload.controller.js";
import { upload } from "../middleware/multer.js";
import { verifyToken } from "../middleware/auth.js";

const router = Router()

router.route("/").post(verifyToken,upload.single("file"),uploadDocument)
router.route("/getDoc/:documentId").get(verifyToken,getDocument)
router.route("/getAllDoc").get(verifyToken,getAllDocument)
router.route("/delete/:documentId").delete(verifyToken,deleteDocument)

export default router