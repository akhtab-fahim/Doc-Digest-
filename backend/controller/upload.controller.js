import { extractText } from "../src/utils/mammoth.js"

const uploadDocument = async(req,res)=>{
    if(!req.file){
        return res.status(400).json({message : "No File has Been given"})
    }

    const filePath = req.file.path
    const response = extractText(filePath)
}

export {uploadDocument}