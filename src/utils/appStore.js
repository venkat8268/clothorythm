import { configureStore } from "@reduxjs/toolkit";
import UserSliceReducer from "./userSlice"
import VideoSliceReducer from "./userSlice"

const appStore = configureStore({
    reducer : {
        user  : UserSliceReducer,
        video : VideoSliceReducer
    }
})

export default appStore