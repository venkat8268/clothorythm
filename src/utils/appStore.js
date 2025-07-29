import { configureStore } from "@reduxjs/toolkit";
import UserSliceReducer from "./userSlice"
import VideoSliceReducer from "./videosSlice"

const appStore = configureStore({
    reducer : {
        user  : UserSliceReducer,
        videos : VideoSliceReducer
    }
})

export default appStore