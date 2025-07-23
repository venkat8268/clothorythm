import { configureStore } from "@reduxjs/toolkit";
import UserSliceReducer from "./userSlice"

const appStore = configureStore({
    reducer : {
        user : UserSliceReducer
    }
})

export default appStore