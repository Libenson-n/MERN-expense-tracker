import express, { Express } from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { transactionsRouter } from "./routes/transactions";
dotenv.config();
import cors from "cors";

const app: Express = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

const MONGO_URI = process.env.MONGO_URI as string;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("CONNECTED TO MONGO DB!"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

app.use("/transactions", transactionsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
