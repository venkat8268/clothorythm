import { htmlDecode } from '../utils/constants'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

const HeroBackground = ({ title, videoId, description, channelTitle }) => {

    // const videoRef = useRef();

    // useGSAP(() => {
    //     gsap.from(videoRef.current, {
    //         x: 100,
    //         opacity: 0,
    //         duration: 2,
    //         delay: 1
    //     })
    // })

    return (
        <div className='overflow-hidden'>
            <div>

            </div>
            <div className="relative font-serif">
                <div className="z-10 w-1/3 absolute bg-gradient-to-r from-black from-30% to-transparent left-0 h-screen"></div>
                <div className="z-10 w-1/3 absolute bg-gradient-to-r from-transparent to-black to-70% right-0 h-screen"></div>
                <div className="absolute text-orange-50 bottom-0 z-100 px-14 py-20">
                    <div className="text-6xl font-bold">
                        {channelTitle}
                    </div>
                    <div className="text-lg font-light mt-3">
                        {htmlDecode(title)}
                    </div>

                    <div className="flex">
                        <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" className="px-5 py-4 mt-5 text-[16px] font-bold bg-orange-50 text-black rounded cursor-pointer">Play on Youtube</a>
                    </div>
                </div>
                <iframe
                    className="w-screen h-screen aspect-video pointer-events-none "
                    src={`https://www.youtube.com/embed/${videoId}?start=60&autoplay=1&mute=1&controls=0&modestbranding=0&showinfo=0&rel=0`}
                    title="hi"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                >
                </iframe>
            </div> 
        </div>
    )
}

export default HeroBackground