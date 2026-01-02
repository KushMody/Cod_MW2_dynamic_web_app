import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = () => setCursorVariant("hover");
        const handleMouseLeave = () => setCursorVariant("default");

        const targets = document.querySelectorAll("a, button, input, .interactive");
        targets.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            targets.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    const reticleVariants = {
        default: {
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
            scale: 1,
            rotate: 0,
            opacity: 0.8,
            borderColor: "#B6FF00",
        },
        hover: {
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
            scale: 1.4,
            rotate: 45,
            opacity: 1,
            borderColor: "#B6FF00",
            backgroundColor: "rgba(182, 255, 0, 0.1)",
        },
    };

    const dotVariants = {
        default: {
            x: mousePosition.x - 3,
            y: mousePosition.y - 3,
        },
        hover: {
            x: mousePosition.x - 3,
            y: mousePosition.y - 3,
        },
    };

    return (
        <>
            {/* OUTER RETICLE (Square Box) */}
            <motion.div
                variants={reticleVariants}
                animate={cursorVariant}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    mass: 0.5,
                }}
                // Tailwind Classes:
                // fixed, pointer-events-none, z-index high, neon border, glow shadow
                className="fixed top-0 left-0 w-6 h-6 border-2 border-[#B6FF00] rounded-sm pointer-events-none z-[9999] shadow-[0_0_10px_rgba(182,255,0,0.4)]"
            />

            {/* INNER DOT (Center Point) */}
            <motion.div
                variants={dotVariants}
                animate="default"
                transition={{ type: "tween", ease: "linear", duration: 0 }}
                // Tailwind Classes:
                // fixed, center dot, neon bg, strong glow
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#B6FF00] rounded-full pointer-events-none z-[10000] shadow-[0_0_5px_#B6FF00]"
            />
        </>
    );
};

export default Cursor;
