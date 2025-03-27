import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://doodlesquash:aditya123@cluster0.kzknr.mongodb.net/food-app").then(() => console.log("MongoDB connected"));   

}