const HeroBackground = ({ title, videoId }) => {
    console.log(videoId);

    return (
        <div className="pointer-events-none overflow-hidden">
            <iframe
                className="w-screen h-screen"
                src={`https://www.youtube.com/embed/${videoId}?start=60&autoplay=1&mute=1&controls=0&modestbranding=0&showinfo=0&rel=0`} 
                title="hi"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                >
            </iframe>
        </div>
    )
}

export default HeroBackground