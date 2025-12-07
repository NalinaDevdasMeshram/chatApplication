import express from "express";
const router = express.Router();
import isAuthenticated from "../Middleware/isAuthentication.js";
import {
  registerUser,
  login,
  Logout,
  getOtherUser,
} from "../Controllers/userController.js";

router.post("/register", registerUser);
router.post("/login", login);
router.get("/logout", Logout);
router.get("/", isAuthenticated, getOtherUser);

export default router;
