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
    const response = await extractText(filePath)
    const summary = await getSummary(response)

    const document = await Document.create({
        originalFile : req.file.originalname,
        extractedText : response,
        summary : summary,
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

export {uploadDocument}