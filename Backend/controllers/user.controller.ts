/**
 * @author: Yatharth Upadhayay
 * github: https://github.com/YatharthaUpadhayay 
 */

import { type Request, type Response } from "express";
import User from "../models/user.model.js";

const usernameExist = async (req :Request, res :Response) => {
    try{
        const answer = await User.usernameExist(req.params.username);
        res.json({exist: answer})
    }
    catch(err){
        res.send(err);
    }
}

const userController = {
    usernameExist
}

export default userController;