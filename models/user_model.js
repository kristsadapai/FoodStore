const mongoose = require("../db");
const schema = new mongoose.Schema(
  {
    email: {
      desc: "The user's email address.",
      trim: true,
      type: String,
      index: true,
      unique: true,
      required: false,
    },
    password: {
      desc: "user password",
      trim: true,
      type: String,
      required: false,
      select: false,
    },
    name: {
      desc: "The user's name.",
      trim: true,
      type: String,
      required: false,
    },
    age: {
      desc: "The users's age.",
      type: Number,
      required: false,
    },
    gender: {
      desc: "user gender.",
      trim: true,
      type: String,
      enum: ["Male", "Female", "Others"],
      default: "Others",
      required: false,
    },
    isActive: {
      desc: "is Active.",
      type: Boolean,
      default: true,
      required: false,
    },
    userType: {
      desc: "user rloes.",
      trim: true,
      type: String,
      enum: ["Admin", "User"],
      default: "User",
      required: false,
    },
  },
  {
    strict: true,
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

module.exports = mongoose.model("Users", schema);
