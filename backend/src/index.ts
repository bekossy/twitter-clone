import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import {config} from 'dotenv';
import tweetRoutes from "./routes/tweetRoutes";
import authRoutes from "./routes/authRoutes";
config();
const app = express();

app.use(cors({
    origin: ["https://twitter-clone-frontend-uij1.onrender.com",
            "https://twitter-clone-frontend-uij1.onrender.com/login",
            "https://twitter-clone-frontend-uij1.onrender.com/signup",
            "http://127.0.0.1:5173/", 
            "http://127.0.0.1:5173/login", 
            "http://127.0.0.1:5173/signup"]
}))

app.use(express.json());

app.get("/", (req:Request,res:Response) => {
    res.status(200).json({mssg: "Welcome to my twitter clone server"})
})

app.use("/api/auth", authRoutes);
app.use("/api/tweets", tweetRoutes);

mongoose.connect(process.env.MONGO_URI!)
        .then(() => {
            app.listen(process.env.PORT, () => {
                console.log(`server running on port:${process.env.PORT}`)
            })
        })
        .catch((err) => console.log(err))