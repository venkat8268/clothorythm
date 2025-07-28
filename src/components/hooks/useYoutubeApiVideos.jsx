import { YOUTUBE_API_URL } from "../../utils/constants";

const useYoutubeApiVideos = async () => {

    const api_url = YOUTUBE_API_URL;

    const params = new URLSearchParams({
        part: "snippet",
        type: "video",
        maxResults: "20",
        videoDuration: "medium",
        order: "viewCount",
        q: "Best cargos outfit",
        key: process.env.REACT_APP_YOUTUBE_API_KEY
    });

    const responseJson = await fetch(`${api_url}?${params.toString()}`);
    const response = await responseJson.json();

    console.log(response);
}

export default useYoutubeApiVideos;