/**
 * @author: Yatharth Upadhayay
 * github: https://github.com/YatharthaUpadhayay 
 */

import {configureStore, type Store} from "@reduxjs/toolkit";
import fileReducer from "./fileReducer";
// import authReducer from "../store/authReducer";


export const store : Store = configureStore({
    reducer: {
        file : fileReducer
    },
    devTools: true
});