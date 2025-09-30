/**
 * @author: Yatharth Upadhayay
 * github: https://github.com/YatharthaUpadhayay 
 */

import { Router, type Response, type Request } from "express";
import userController from "../controllers/user.controller.js";

const userRoute :Router = Router();

// Health Endpoint
userRoute.get("/", (req :Request, res : Response) =>res.send("User endpoint working fine"));

userRoute.get("/username-exist/:username", userController.usernameExist);

export default userRoute;