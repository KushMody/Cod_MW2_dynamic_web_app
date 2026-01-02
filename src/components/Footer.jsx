
const Footer = () => {
    return (
        <div className="py-5 px-5 md:px-12 flex gap-5 z-10">
            {['Instagram', 'Twitter', 'Discord', 'Twitch'].map((social) => (
                <a
                    key={social}
                    href="#"
                    className="text-[rgba(255,255,255,0.5)] no-underline text-sm uppercase transition-colors duration-300 hover:text-[var(--neon-green)]"
                >
                    {social}
                </a>
            ))}
        </div>
    );
};

export default Footer;
