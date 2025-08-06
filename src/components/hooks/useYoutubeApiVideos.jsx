import { YOUTUBE_API_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addVideos } from "../../utils/videosSlice";
import { useEffect } from "react";

const useYoutubeApiVideos = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchVideos = async () => {
            let youtubeVideosArray = JSON.parse(localStorage.getItem("youtubeVideosArray"));

            if (youtubeVideosArray == null) {
                const api_url = YOUTUBE_API_URL;

                const params = new URLSearchParams({
                    part: "snippet",
                    type: "video",
                    maxResults: "20",
                    videoDuration: "medium",
                    order: "viewCount",
                    q: "Street Wear Outfits",
                    key: process.env.REACT_APP_YOUTUBE_API_KEY
                });

                const responseJson = await fetch(`${api_url}?${params.toString()}`);
                const response = await responseJson.json();

                const videosArray = []
                response.items.map((video) => {
                    videosArray.push({
                        title: video.snippet.title,
                        description: video.snippet.description,
                        videoId: video.id.videoId,
                        channelTitle: video.snippet.channelTitle
                    })
                });

                localStorage.setItem("youtubeVideosArray", JSON.stringify(videosArray));
                youtubeVideosArray = videosArray;
            }

            dispatch(addVideos(youtubeVideosArray));
        }

        fetchVideos();
    }, []);

}

export default useYoutubeApiVideos;