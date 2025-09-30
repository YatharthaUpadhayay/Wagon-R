/**
 * @author: Yatharth Upadhayay
 * github: https://github.com/YatharthaUpadhayay 
 */

import express, {type Request, type Response, type Application} from "express";
import fileRouter from "./routes/file.route.js";
import folderRouter from "./routes/folder.route.js";
import userRouter from "./routes/user.route.js";
import cors from "cors";

const app :Application = express();

// Global middleware
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

// Health Check
app.get("/", (req :Request, res :Response) :void =>{ res.send("Root endpoint working fine"); });

// Routes
app.use("/api/file", fileRouter);
app.use("/api/folder", folderRouter);
app.use("/api/user", userRouter);

// Centralized Error Handling

export default app;