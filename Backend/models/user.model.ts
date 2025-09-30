/**
 * @author: Yatharth Upadhayay
 * github: https://github.com/YatharthaUpadhayay 
 */

import mongoose, {type Schema} from "mongoose";

const userScehema :Schema = new mongoose.Schema({
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

// Statics for user
userScehema.statics.usernameExist = async function(username){
  try {
    const user = await this.findOne({username : username});
    return user ? true : false;
  } catch (error) {
    throw error;
  }
}

const User = mongoose.model("User", userScehema);


export default User;