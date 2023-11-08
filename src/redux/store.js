import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slice/userSlice";
import  heroReducer  from "./slice/heroSlice";
import priceReducer from "./slice/priceSlice";




export default configureStore({
    reducer:{
        user: userReducer,
        hero: heroReducer,
        price: priceReducer,
    },
})