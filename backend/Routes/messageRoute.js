import express from "express";
const router = express.Router();
import {
  senderMessage,
  getMessages,
} from "../Controllers/messageController.js";
import isAuthentication from "../middleware/isAuthentication.js";

router.post("/send/:id", isAuthentication, senderMessage);
router.get("/:id", isAuthentication, getMessages);
export default router;
