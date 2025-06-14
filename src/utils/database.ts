// src/utils/database.ts
import mongoose from "mongoose";

export const connectDb = async () => {
  console.log("MONGODB_URI:", process.env.MONGODB_URI);
  if (mongoose.connection.readyState !== 0) return;
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("DB接続成功");
  } catch (e) {
    console.error("DB接続に失敗しました", e);
    throw e;
  }
};
