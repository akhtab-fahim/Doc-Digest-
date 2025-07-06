import {Router} from "express"
import { verifyToken } from "../middleware/auth.js";
import { chatWithDocument, deleteChat, getAllDocChats, getAllUserChats } from "../controller/chat.controller.js";


const router = Router()

router.route("/:documentId").post(verifyToken,chatWithDocument)

router.route("/getDocChats/:documentId").get(verifyToken,getAllDocChats)

router.route("/getUserChats").get(verifyToken,getAllUserChats)

router.route("/delete/:chatId").delete(verifyToken,deleteChat)

export default router;