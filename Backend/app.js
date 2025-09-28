import express from "express";
import fileRouter from "./routes/file.route.js";
import folderRouter from "./routes/folder.route.js";
import userRouter from "./routes/user.route.js";
import cors from "cors";

const app = express();

// Global middleware
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

// Health Check
app.get("/", (req, res)=>{ res.send("Working!"); });

// Routes
app.use("/file", fileRouter);
app.use("/folder", folderRouter);
app.use("/user", userRouter);

// Centralized Error Handling

export default app;