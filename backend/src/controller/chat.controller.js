import mongoose from "mongoose";
import { Chat } from "../models/chat.models.js";
import { Document } from "../models/document.models.js";
import { chatWithAi } from "../utils/chatWithAI.js";

const chatWithDocument = async (req, res) => {
        const { question } = req.body;
        if(!question) return res.status(404).json({ message: "Question field is empty" });
        const { documentId } = req.params;

        const document = await Document.findById(documentId);
        if (!document) {
            return res.status(404).json({ message: "Document not found" });
        }

        const context = document.summary;
        const answer = await chatWithAi(question, context);

        const chat = await Chat.create({
            documentID: documentId,
            userID: req.user.id,
            question,
            answer
        });

        if (!chat) return res.status(400).json({ message: "Something went wrong" });

        res.status(200).json({ chat, message: "Chat created" });
}


const getAllUserChats = async(req,res)=>{
    const chats = await Chat.find({ userID: req.user.id }).sort({ createdAt: -1 });
    if(!chats || chats.length == 0){
        return res.status(400).json({message : "No chats corresponding to userID"})
    }

    res.status(200).json({chats,message : "All Chats fetched"})
}

const getAllDocChats = async(req,res)=>{
    const {documentId} = req.params
    const chats = await Chat.find({
        userID: req.user.id ,
        documentID: documentId
    }).sort({ createdAt: -1 });

    if(!chats || chats.length == 0){
        return res.status(400).json({message : "No chats corresponding to userID"})
    }

    res.status(200).json({chats,message : "All Chats fetched"})
}

const deleteChat = async(req,res)=>{
    const {chatId} = req.params

    const chat = await Chat.findById(chatId)
    if(!chat) return res.json({message : "No chat found corresponding to chatId"})

    await Chat.deleteOne(chat._id)    

    res.status(200).json({message : "Chat Deleted"})   
    
}

export { chatWithDocument,getAllDocChats,getAllUserChats,deleteChat }