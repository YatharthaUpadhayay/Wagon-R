/**
 * @author: Yatharth Upadhayay
 * github: https://github.com/YatharthaUpadhayay 
 */

import { Router, type Response, type Request } from "express";
import folderController from "../controllers/folder.controller.js";

const folderRoute = Router();

// Health Endpoint
folderRoute.get("/", (req :Request, res :Response)=>res.send("Folder endpoint working fine"));

export default folderRoute;