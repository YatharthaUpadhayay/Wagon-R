import mongoose from "mongoose";

const userScehema = mongoose.Schema({
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId()
  },
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  gmail: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  userType: {
    type: String,
    enum: ["admin", "student", "teacher"],
    default: "student",
  },
  name: {
    type: String,
    trim: true,
  },
  documentCreated: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "File",
    },
  ],
  profilePhoto: {
    type: String, // URL
    default: null,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  history: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "History",
    },
  ],
  passwordResetQuestion: {
    type: String,
    default: null,
  },
  passwordResetAnswerHash: {
    type: String,
    default: null,
  },
}, { timestamps: true });

const User = mongoose.model("User", userScehema);

export default User;