import { configureStore } from "@reduxjs/toolkit";
import userReducer from './Slices/UseSlice'
export default configureStore({
    reducer:{
        user:userReducer
    }
})