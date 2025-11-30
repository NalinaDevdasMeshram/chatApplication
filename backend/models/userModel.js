import mongoose from "mongoose";
const userModel = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },

    profilePhoto: {
      type: String,
      default: "",
    },

    gender: {
      type: String,
      enum: ["male", "female"],
    },
  },
  { timestamps: true }
); // when the user is created and updated time will be stored in the database

export const User = mongoose.model("User", userModel);
