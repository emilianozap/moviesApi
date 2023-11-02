import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slice/userSlice";
import  heroReducer  from "./slice/heroSlice";




export default configureStore({
    reducer:{
        user: userReducer,
        hero: heroReducer,
    },
})