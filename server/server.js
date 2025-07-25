import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// connect to the database
connectDB()

// import routes

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
