import mongoose from "mongoose";
import "dotenv/config";

const dbName = process.env.MONGODB_NAME as string;
const dbPort = process.env.MONGODB_PORT;

const mongoDbInit = () => {
  console.log("[mongodb] Trying to connect to MongoDB");

  mongoose
    .connect(`mongodb://localhost:${dbPort}/${dbName}`, {})
    .then(() => {
      console.log("[mongodb] Connected to MongoDB database");
    })
    .catch((err) => {
      console.error("[mongodb] An error was caught", err);
    });
};

export { mongoDbInit };
