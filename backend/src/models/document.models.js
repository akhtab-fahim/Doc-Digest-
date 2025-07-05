import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({
    originalFile : {
        type : String,
    },
    extractedText:{
        type : String,
        require : true
    },
    summary : {
        type : String,
        default : ""
    },
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        require : true
    }
},{timestamps : true})

export const Document = mongoose.model("Document",documentSchema)