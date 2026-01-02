import { motion } from 'framer-motion';
const DURATION = 0.3;
const STAGGER = 0.04;
const text = "GOING DARK";
const Hero = () => {
    return (
        <div className="flex-1 flex flex-col justify-center px-5 md:px-12 z-[5] max-w-4xl h-[100vh]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[var(--neon-green)] font-['Teko'] text-2xl mb-2.5 flex items-center gap-2.5"
            >
                <div className="w-2.5 h-2.5 bg-[var(--neon-green)] rounded-full shadow-[0_0_10px_var(--neon-green)] animate-pulse"></div>
                SERVER ONLINE // SEASON 03 RELOADED
            </motion.div>


            <motion.h1
                initial="initial"
                whileHover="hovered"
                className="relative overflow-hidden text-6xl md:text-8xl leading-[0.9] uppercase mb-5 font-bold
                 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)] cursor-pointer"
            >
                <div>
                    {text.split("").map((char, i) => (
                        <motion.span
                            key={i}
                            className="inline-block"
                            variants={{
                                initial: { y: 0 },
                                hovered: { y: "-102%" },
                            }}
                            transition={{
                                duration: DURATION,
                                ease: "easeInOut",
                                delay: i * STAGGER,
                            }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </div>

                <div className="absolute inset-0">
                    {text.split("").map((char, i) => (
                        <motion.span
                            key={i}
                            className="inline-block"
                            variants={{
                                initial: { y: "100%" },
                                hovered: { y: 0 },
                            }}
                            transition={{
                                duration: DURATION,
                                ease: "easeInOut",
                                delay: i * STAGGER,
                            }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </div>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl leading-relaxed mb-10 border-l-[4px] border-[var(--neon-green)] pl-5 bg-gradient-to-r from-[rgba(0,0,0,0.6)] to-transparent"
            >
                Task Force 141 makes its massive return with a global squad of iconic veterans.
                New weapons. New maps. Total warfare. The ultimate weapon is team.
            </motion.p>

            <motion.a
                href="#"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-transparent border-2 border-[var(--neon-green)] text-[var(--neon-green)] text-2xl font-['Teko'] uppercase cursor-pointer transition-colors duration-300 w-fit relative overflow-hidden inline-block hover:bg-[var(--neon-green)] hover:text-black hover:shadow-[0_0_20px_var(--neon-green)] decoration-0"
            >
                Deploy Now
            </motion.a>
        </div>
    );
};

export default Hero;
