import app from "./app.js";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("Connected to database");
        
        const port = process.env.PORT || 3000;
        app.listen(port, ()=>{
            console.log(`Server is listing on port ${port}`)
        })
    })
    .catch(err => console.log(err))