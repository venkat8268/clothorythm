import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
    name: 'videos',
    initialState: null,
    reducers: {
        addVideos: (state, action) => {
            return action.payload
        },
        removeVideos: (state, action) => {

        }
    }
}) 

    export const { addVideos, removeVideos } = videosSlice.actions
export default videosSlice.reducer