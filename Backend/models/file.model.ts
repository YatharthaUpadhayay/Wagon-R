/**
 * @author: Yatharth Upadhayay
 * github: https://github.com/YatharthaUpadhayay 
 */

import mongoose from "mongoose";

const fileSchema = new mongoose.Schema(
  {
    documentId: {
      type: mongoose.Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(), 
      required: true,
      unique: true
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    parentFolderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Folder",
      default: null,
    },
    fileName: {
      type: String,
      required: true,
      trim: true,
    },
    thumbnail: {
      type: String, // URL
      trim: true,
    },
    fileType: {
      type: String,
      enum: ["pdf", "docx", "pptx"],
      required: true,
    },
    subject: {
      type: String,
      trim: true,
    },
    document: {
      type: Buffer, // Storing the document in mongodb (Max size: 10mb)
      required: true,
    },
  },
  { timestamps: true, });

const File = mongoose.model("File", fileSchema);

export default File;
