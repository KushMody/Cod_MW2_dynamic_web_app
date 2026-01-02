import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

// Images passed as props or imported here if they are static assets
// Importing here to match the user's setup
import img1 from '../Data/Gameplay Images/img1.jpg'
import img2 from '../Data/Gameplay Images/img2.jpg'
import img3 from '../Data/Gameplay Images/img3.jpg'
import img4 from '../Data/Gameplay Images/img4.jpg'
import img5 from '../Data/Gameplay Images/img5.jpg'
import img6 from '../Data/Gameplay Images/img7.jpg'
import img7 from '../Data/Gameplay Images/img8.jpg'
import img8 from '../Data/Gameplay Images/img9.jpg'
import img9 from '../Data/Gameplay Images/img10.jpg'
import trailer from '../Data/Gameplay Images/MWII PC Trailer ｜ Call of Duty： Modern Warfare II.mp4'

const HorizontalScroll = () => {
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
    })

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-90%"])

    const cards = [
        { type: 'video', src: trailer },
        { type: 'image', src: img1 },
        { type: 'image', src: img2 },
        { type: 'image', src: img3 },
        { type: 'image', src: img4 },
        { type: 'image', src: img5 },
        { type: 'image', src: img6 },
        { type: 'image', src: img7 },
        { type: 'image', src: img8 },
        { type: 'image', src: img9 },
    ]

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-black">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-10 pl-20">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="relative h-[500px] min-w-[800px] overflow-hidden rounded-xl border-2 border-white/10 shadow-2xl transition-all duration-300 hover:border-[var(--neon-green)] group"
                        >
                            {card.type === 'video' ? (
                                <video
                                    src={card.src}
                                    autoPlay
                                    muted
                                    loop
                                    controls
                                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            ) : (
                                <img
                                    src={card.src}
                                    alt={`Gameplay ${index}`}
                                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-110"
                                />
                            )}
                            <div className="absolute top-4 left-4 font-['Teko'] text-6xl text-white/20 group-hover:text-[var(--neon-green)] transition-colors">
                                0{index + 1}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default HorizontalScroll
