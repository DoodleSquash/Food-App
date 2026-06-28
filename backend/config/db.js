import mongoose from "mongoose";
import dns from "dns";

// Force Node.js to use Google and Cloudflare DNS to resolve MongoDB Atlas SRV records
dns.setServers(["8.8.8.8", "1.1.1.1"]);

export const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI).then(() => console.log("MongoDB connected"));   

}