import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const connectDB = async () => {
  mongoose
    .connect(process.env.MONGO_DB_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));
};

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World").status(200);
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
