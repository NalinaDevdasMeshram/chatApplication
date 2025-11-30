import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
  try {
    const { fullname, username, password, confirmPassword, gender } = req.body;
    if (!fullname || !username || !password || !confirmPassword || !gender) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json("Password and confirm password should be same");
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json("Username already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const maleProfilePhoto = `https://avatar.iran.liara.run/public/boy?username=${username}&background=random&gender=male`;
    const femaleProfilePhoto = `https://avatar.iran.liara.run/public/girl?username=${username}&background=random&gender=female`;

    await User.create({
      fullname,
      username,
      password: hashedPassword,
      confirmPassword,
      profilePhoto: gender === "male" ? maleProfilePhoto : femaleProfilePhoto,
      gender,
    });
    return res
      .status(201)
      .json({ message: "User Account created successfully", success: true });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }
    if (username === password) {
      return res.status(400).json({
        message: "Username and password should not be same",
        success: false,
      });
    }
    const user = await User.findOne({ username });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found", success: false });
    }
    if (user.username !== username) {
      return res
        .status(404)
        .json({ message: "Invalid username", success: false });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(404)
        .json({ message: "Invalid password", success: false });
    }

    const tokenData = {
      userId: user._id,
      username: user.username,
    };

    const token = await jwt.sign(tokenData, process.env.jwt_secret_key, {
      expiresIn: "7d",
    });
    return res.status(200).cookie("token", token, { httpOnly: true }).json({
      message: "User logged in successfully",
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      profilePhoto: user.profilePhoto,
      success: true,
      token,
    });
  } catch (err) {
    console.log(err);
    return res
      .status(404)
      .json({ message: "something went wrong", success: false });
  }
};

// logout user
export const Logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "User Logged out successfully",
      success: true,
    });
  } catch {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

// other user profile
export const getOtherUser = async (req, res) => {
  try {
    const isUserLoggedIn = req.id;
    const otherUser = await User.find({
      _id: { $ne: isUserLoggedIn },
    }).select("-password -confirmPassword");
    return res.status(200).json({
      message: "user profile fetched successfully",
      otherUser,
      success: true,
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};
