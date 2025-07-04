import express from "express";
import { connectDB } from "./db/index.js";

const app = express();

app.use(express.json())

app.use(express.urlencoded({extended:true}))


import userRouter from "./routes/user.routes.js"
import uploadRouter from "./routes/upload.routes.js"

app.use("/auth",userRouter)
app.use("/upload",uploadRouter)

connectDB()
.then(()=>{
    app.listen(5000,()=>{
        console.log("Server running on port 5000");
    })
})
.catch((err)=>{
    console.log(err);
})