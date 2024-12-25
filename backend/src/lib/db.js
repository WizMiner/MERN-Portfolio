import mongoose from "mongoose";

/**
 * Connects to the MongoDB database using the MONGODB_URI
 * environment variable
 * @returns {Promise<void>}
 */
export const connectDB = async () => {
  try {
    /**
     * Connects to the MongoDB database
     * @type {Promise<MongoDB.Connection>}
     */
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    /**
     * Logs the MongoDB connection host to the console
     * @type {String}
     */
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    /**
     * Logs any MongoDB connection errors to the console
     * @type {Error}
     */
    console.log("MongoDB connection error:", error);
  }
};
