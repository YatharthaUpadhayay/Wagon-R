/**
 * @author: Yatharth Upadhayay
 * github: https://github.com/YatharthaUpadhayay 
 */

import { Router, type Response, type Request } from "express";
import fileController from "../controllers/file.controller.js";

const fileRoute :Router = Router();

// Health Endpoint
fileRoute.get("/", (req :Request, res :Response)=>res.send("File endpoint working fine"));

export default fileRoute;