import { useSelector } from "react-redux"
import HeroBackground from "./HeroBackground"
import { useEffect, useState } from "react"

const Home = () => {

    const [backgroundVideo, setBackgroundVideo] = useState(null);
    const videos = useSelector((store) => store.videos)

    useEffect(() => {
        const videoOrder = Math.floor(Math.random() * 20);
        if (videos && videos.length != 0) {
            setBackgroundVideo(videos[videoOrder])
        }
    }, [videos])

    return (
        <>
            {
                backgroundVideo &&
                <HeroBackground {...backgroundVideo} />
            }
            {/* And Overlay Text */}
        </>
    )
}

export default Home