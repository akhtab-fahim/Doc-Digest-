import express from "express";
import { connectDB } from "./db/index.js";
import cors from "cors"

const app = express();
app.use(cors({
    origin: "http://localhost:5173"
}))
app.use(express.json())

app.use(express.urlencoded({extended:true}))


import userRouter from "./routes/user.routes.js"
import uploadRouter from "./routes/upload.routes.js"
import chatRouter from "./routes/chat.routes.js"

app.use("/auth",userRouter)
app.use("/upload",uploadRouter)
app.use("/chat",chatRouter)

connectDB()
.then(()=>{
    app.listen(5000,()=>{
        console.log("Server running on port 5000");
    })
})
.catch((err)=>{
    console.log(err);
})