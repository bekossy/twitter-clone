import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import {config} from 'dotenv';
import tweetRoutes from "./routes/tweetRoutes";
import authRoutes from "./routes/authRoutes";
config();
const app = express();

app.use(cors({
    origin: "*"
}))

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tweets", tweetRoutes);

mongoose.connect(process.env.MONGO_URI!)
        .then(() => {
            app.listen(process.env.PORT, () => {
                console.log(`server running on port:${process.env.PORT}`)
            })
        })
        .catch((err) => console.log(err))