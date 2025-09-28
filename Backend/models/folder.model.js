import mongoose from "mongoose";

const folderSchema = new mongoose.Schema(
  {
    folderId: {
      type: mongoose.Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
      unique: true,
      required: true,
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
    folderName: {
      type: String,
      required: true,
      trim: true,
    },
    childrenFiles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "File",
      },
    ],
    childrenFolders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Folder",
      },
    ],
    subject: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true });

const Folder =
  mongoose.models.Folder || mongoose.model("Folder", folderSchema);

export default Folder;