const Navbar = () => {
    return (
        <nav className="flex justify-between items-center py-8 px-5 md:px-12 z-10 uppercase w-full">
            <div className="font-['Teko'] text-4xl font-bold tracking-[2px] text-white">
                MW<span className="text-[var(--neon-green)]">II</span>
            </div>
            <div className="hidden md:block">
                <ul className="flex gap-10 list-none">
                    {['Intel', 'Operators', 'Battle Pass', 'Store'].map((item) => (
                        <li key={item}>
                            <a
                                href="#"
                                className="text-white text-lg font-semibold tracking-wider transition-colors duration-300 relative group hover:text-[var(--neon-green)]"
                            >
                                {item}
                                <span className="absolute bottom-[-5px] left-0 w-0 h-[3px] bg-[var(--neon-green)] transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
