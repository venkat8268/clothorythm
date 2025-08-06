import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { TextPlugin } from "gsap/TextPlugin";


const Hero = () => {

    const typingText = useRef(null)

    gsap.registerPlugin(TextPlugin);
    useGSAP(() => {
        const timeline = gsap.timeline();
        timeline.from(typingText.current, {
            duration: 2,
            text: " ",
            onComplete: () => {
                typingText.current.classList.add("!bg-orange-50", "!text-orange-950", "!h-[30vh]", "pt-24" ,"text-[9vw]");
                typingText.current.classList.remove("absolute");
            },
        })

    }, [])

    return (
        <>
            <div className='relative bg-orange-50 h-screen'>
                <div ref={typingText} className='absolute bg-orange-950 text-orange-50 w-screen h-screen flex items-center justify-center z-200 text-[6vw] font-extrabold transition-all duration-1000'>Street Wear Outfits</div>
            </div>
        </>
    )
}

export default Hero;