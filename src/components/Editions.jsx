import { motion } from 'framer-motion';

const Editions = () => {
    return (
        <div className="py-20 px-5 md:px-12 bg-black/80 relative z-10">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-7xl font-['Teko'] text-white text-center mb-16 uppercase font-bold tracking-wider"
            >
                Choose Your <span className="text-[var(--neon-green)]">Edition</span>
            </motion.h2>

            <div className="flex flex-col md:flex-row justify-center gap-10 max-w-7xl mx-auto">
                {/* Cross-Gen Bundle */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-1 bg-neutral-900 border border-neutral-800 p-8 flex flex-col group hover:border-[var(--neon-green)] transition-all duration-300"
                >
                    <h3 className="text-3xl font-['Teko'] text-white uppercase mb-2">Cross-Gen Bundle</h3>
                    <p className="text-gray-400 mb-6 text-sm">Includes PS4™ / PS5™ or Xbox One / Xbox Series X|S versions</p>
                    <div className="text-4xl font-['Teko'] text-[var(--neon-green)] mb-8">$69.99</div>

                    <ul className="flex-1 space-y-4 mb-8 text-gray-300 font-sans text-sm md:text-base">
                        <li className="flex items-start gap-3">
                            <span className="text-[var(--neon-green)]">✓</span> Call of Duty®: Modern Warfare® II
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-[var(--neon-green)]">✓</span> Cross-Gen Bundle
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-[var(--neon-green)]">✓</span> Early Access to Open Beta
                        </li>
                    </ul>

                    <button className="w-full py-3 border border-white text-white font-['Teko'] text-xl uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                        Select
                    </button>
                </motion.div>

                {/* Vault Edition */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex-1 bg-neutral-900 border-2 border-[var(--neon-green)] p-8 flex flex-col relative overflow-hidden transform md:scale-105 shadow-[0_0_30px_rgba(182,255,0,0.1)]"
                >
                    <div className="absolute top-0 right-0 bg-[var(--neon-green)] text-black font-['Teko'] px-4 py-1 text-lg font-bold uppercase">
                        Best Value
                    </div>

                    <h3 className="text-4xl font-['Teko'] text-[var(--neon-green)] uppercase mb-2">Vault Edition</h3>
                    <p className="text-gray-400 mb-6 text-sm">The Ultimate Experience</p>
                    <div className="text-5xl font-['Teko'] text-white mb-8">$99.99</div>

                    <ul className="flex-1 space-y-4 mb-8 text-gray-300 font-sans text-sm md:text-base">
                        <li className="flex items-start gap-3">
                            <span className="text-[var(--neon-green)]">✓</span> Everything in Cross-Gen Bundle
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-[var(--neon-green)]">✓</span> Red Team 141 Operator Pack
                            <span className="text-xs text-gray-500 block ml-auto">(Ghost, Soap, Farah, Price)</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-[var(--neon-green)]">✓</span> FJX Cinder Weapon Vault
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-[var(--neon-green)]">✓</span> Battle Pass (1 Season) + 50 Tier Skips
                        </li>
                    </ul>

                    <button className="w-full py-4 bg-[var(--neon-green)] text-black font-['Teko'] text-2xl uppercase tracking-widest font-bold hover:shadow-[0_0_20px_var(--neon-green)] transition-all duration-300">
                        Pre-Order Now
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default Editions;
