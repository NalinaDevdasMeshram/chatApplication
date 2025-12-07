import express from "express";
const router = express.Router();
import {
  senderMessage,
  getMessages,
} from "../Controllers/messageController.js";
import isAuthenticated from "../Middleware/isAuthentication.js";
router.post("/send/:id", isAuthenticated, senderMessage);
router.get("/:id", isAuthenticated, getMessages);
export default router;
