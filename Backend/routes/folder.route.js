import { Router } from "express";
import folderController from "../controllers/folder.controller.js";

const folderRoute = Router();

folderRoute.get("/health", folderController.checkHealth);

export default folderRoute;