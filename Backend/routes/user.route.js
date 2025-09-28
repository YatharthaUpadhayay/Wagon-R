import { Router } from "express";
import userController from "../controllers/user.controller.js";

const userRoute = Router();

userRoute.put("/createUser", userController.createUser);
userRoute.get("/usernameExist/:username", userController.usernameExist);

export default userRoute;