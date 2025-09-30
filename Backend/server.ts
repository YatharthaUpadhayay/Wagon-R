/**
 * @author: Yatharth Upadhayay
 * github: https://github.com/YatharthaUpadhayay 
 */

import app from "./app.js";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { resetColor, selectColor } from "./utils/consoleColorSelector.js";

dotenv.config();

if(process.env.MONGODB_URI){
    mongoose
    .connect(process.env.MONGODB_URI!)
    .then(()=>{
        console.log(selectColor("Yellow") + "> 📂 Connected to Database" + resetColor());
        
        const port :number = parseInt(process.env.SERVER_PORT || '3000');
        app.listen(port, ()=>{
            console.log(selectColor("Cyan") + `> 🌐 Server is listening on port ${port}` + resetColor());
        })
    })
    .catch(err => console.log(selectColor("red") + err + resetColor()));
}
else {
    console.log(selectColor("red") + "MONGODB_URI not found" + resetColor());
}
    