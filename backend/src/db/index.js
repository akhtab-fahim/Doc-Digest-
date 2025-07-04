import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()




export const connectDB = async()=>{
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connected :: ",connectionInstance.connection.host)
    } catch (error) {
        console.log("Failed to connect ",error);
        
    }
}