import { Document } from "../models/document.models.js"
import { getSummary } from "../utils/getSummary.js"
import { extractText } from "../utils/extractText.js"
import fs from "fs"
import path from "path"


const uploadDocument = async(req,res)=>{
    if(!req.file){
        return res.status(400).json({message : "No File has Been given"})
    }

    const filePath = req.file.path
    //console.log(filePath);
    
    const response = await extractText(filePath)
    const summary = await getSummary(response)

    const document = await Document.create({
        originalFile : req.file.originalname,
        extractedText : response,
        summary,
        userID : req.user.id

    })

    try {
        if(!document) return res.status(400).json({message : "Error Document didnt created "})
        res.status(200).json({document,message : "Document created"})

    } catch (error) {
        res.status(400).json(error)
    }finally{
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
    }
}

const getDocument = async(req,res)=>{
    const {documentId} = req.params
    const document = await Document.findById(documentId)

    if(!document){
        return res.status(400).json({message : "No document corresponding to documentId"})
    }

    res.status(200).json({document,message : "Document fetched"})

}

const getAllDocument = async(req,res)=>{
    const documents = await Document.find({ userID: req.user.id }).sort({ createdAt: -1 });


    if(!documents || documents.length == 0){
        return res.status(400).json({message : "No document corresponding to documentId"})
    }

    res.status(200).json({documents,message : "All Documents fetched"})
} 

const deleteDocument = async(req,res)=>{
    const {documentId} = req.params
    const document = await Document.findById(documentId)

    if(!document){
        return res.status(400).json({message : "No document corresponding to documentId"})
    }

    await Document.deleteOne(document._id)

    res.status(200).json({message : "Document deleted"})
}

export {uploadDocument,getAllDocument,getDocument,deleteDocument}