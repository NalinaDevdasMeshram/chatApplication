import express from "express";
const app = express();
import dotenv from "dotenv";
import userRoutes from "./Routes/userRoutes.js";
import messageRoutes from "./Routes/messageRoute.js";
import connectdb from "./config/database.js";
import cookieParser from "cookie-parser";
dotenv.config();

app.use(cookieParser());

//middleware to parse json data
app.use(express.json());

//user routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/message", messageRoutes);
//database connection
connectdb();

app.listen(process.env.PORT, () => {
  console.log(`server running on the ${process.env.PORT} port `);
});
