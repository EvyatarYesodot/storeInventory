import mongoose from "mongoose";
import { config } from "./config.js";

export const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(config.mongoUri);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connectiog to MondoDB: ${error}`);
    process.exit(1);
  }
};
