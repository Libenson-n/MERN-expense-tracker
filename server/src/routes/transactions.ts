import express, { Request, Response } from "express";
import TransactionModel from "../schema/transaction";

const router = express.Router();

router.get("/getAllByUserID/:userId", async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const transactions = await TransactionModel.find({ userId: userId }).sort({
      date: -1,
    });
    console.log(userId);
    if (transactions.length === 0) {
      return res.status(404).send("No transactions found for the user.");
    }
    res.status(200).send(transactions);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/getFive", async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const transactions = await TransactionModel.find({ userId: userId });
    console.log(userId);
    if (transactions.length === 0) {
      return res.status(404).send("No transactions found for the user.");
    }
    res.status(200).send(transactions);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const newRecordBody = req.body;
    const newRecord = new TransactionModel(newRecordBody);
    const savedRecord = await newRecord.save();

    res.status(200).send(savedRecord);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const newRecordBody = req.body;
    const record = await TransactionModel.findByIdAndUpdate(id, newRecordBody, {
      new: true,
    });

    if (!record) return res.status(404).send();

    res.status(200).send(record);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const transaction = await TransactionModel.findByIdAndDelete(id);
    if (!transaction) return res.status(404).send();
    res.status(200).send(transaction);
  } catch (err) {
    res.status(500).send(err);
  }
});

export { router as transactionsRouter };
