import mongoose from "mongoose";

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.mongodb_url);
    console.log("database connected successfully");
  } catch (error) {
    console.log("database connection failed", error);
  }
};

export default connectdb;
