import express from 'express';
import cors from 'cors';
import { connectDB } from "./config/db.js";
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import orderRouter from './routes/orderRoute.js';
import cartRouter from './routes/cartRoute.js';

import dotenv from 'dotenv';
dotenv.config();

// console.log("Stripe Secret Key from .env:", process.env.STRIPE_SECRET_KEY);

//appconfig
const app=express();
const port=process.env.PORT || 4000;

//middleware
app.use(cors());
app.use(express.json());

//db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static("uploads"))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API WORKInG");
})



app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});

//mongodb+srv://doodlesquash:aditya123@cluster0.kzknr.mongodb.net/food-app