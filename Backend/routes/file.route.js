import { Router } from "express";
import fileController from "../controllers/file.controller.js";

const fileRoute = Router();

fileRoute.get("/health", fileController.checkHealth);

export default fileRoute;