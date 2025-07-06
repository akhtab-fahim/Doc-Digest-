import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    documentID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Document",
        require : true
    },
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        require : true
    },
    question:{
        type : String,
        require : true,
        default : ""
    },
    answer : {
        type : String,
        default : ""
    },
},{timestamps : true})

export const Chat = mongoose.model("Chat",chatSchema)