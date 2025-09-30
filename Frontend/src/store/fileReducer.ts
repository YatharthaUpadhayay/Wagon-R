/**
 * @author: Yatharth Upadhayay
 * github: https://github.com/YatharthaUpadhayay 
 */

import {createSlice, type Slice} from "@reduxjs/toolkit";

const initialState :Object = {
    loading: false,
	error: null,
	files: [],
}


const fileSlice : Slice = createSlice({
    name: "file",
    initialState,
    reducers: {
        sayHello: () => {
            console.log("hello world");
        }
    }
})

export default fileSlice.reducer;