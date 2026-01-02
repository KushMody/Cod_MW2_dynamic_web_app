
import { motion } from 'framer-motion';

const Features = () => {
    const features = [
        {
            title: "Campaign",
            description: "From small-scale, high-stakes infiltration tactical specs to highly classified missions, deploy alongside TF141 in a globe-trotting single-player campaign.",
            icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M6 16.5V2.25A2.25 2.25 0 018.25 0h3.75a2.25 2.25 0 012.25 2.25v13.5A2.25 2.25 0 0112 18h2.25M15 5.25v15M12 18v-2.25a2.25 2.25 0 012.25-2.25h3.75A2.25 2.25 0 0120.25 15.75V18M15 18a2.25 2.25 0 01-2.25 2.25H3.75a2.25 2.25 0 01-2.25-2.25V5.25m4.5 9h12"
        },
        {
            title: "Multiplayer",
            description: "Infinity Ward brings you state-of-the-art gameplay, with all-new gun handling, advanced AI system, a new Gunsmith and a suite of other gameplay and graphical innovations.",
            icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        },
        {
            title: "Special Ops",
            description: "Experience an evolved, narrative-driven Special Ops game mode featuring tactical co-op gameplay. Join forces with your team and take on the enemy.",
            icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <div className="py-20 px-5 md:px-12  h-[60vh] bg-[#050505] relative z-10 border-t border-[rgba(255,255,255,0.05)]">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10"
            >
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="group p-6 hover:bg-white/5 transition-colors duration-300 border-l border-white/10 hover:border-[var(--neon-green)] pl-8"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-[var(--neon-green)] mb-6 group-hover:scale-110 transition-transform duration-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                        </svg>
                        <h3 className="text-3xl font-['Teko'] text-white uppercase mb-4 group-hover:text-[var(--neon-green)] transition-colors">{feature.title}</h3>
                        <p className="text-gray-400 font-sans leading-relaxed text-sm md:text-base">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Features;

