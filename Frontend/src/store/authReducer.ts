import { createSlice, type Slice } from "@reduxjs/toolkit";
// import axios from "axios";




const initialState :Object = {}

const authSlice :Slice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        // usernameExist : () => usernameExist
    }
})

export default authSlice.reducer;