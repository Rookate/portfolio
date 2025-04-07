'use client';

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { useMediaQuery } from "@/lib/useMediaQuery";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const handleScroll = () => {
        if (typeof window !== "undefined" && window.lenis) {
            window.lenis.scrollTo(0, {
                duration: 1.5,
                easing: (t: number) => 1 - Math.pow(1 - t, 3),
            });
        }
    };
    const isMobile = useMediaQuery('(max-width: 640px)');
    const iconSize = isMobile ? 15 : 30;

    return (
        <button
            onClick={handleScroll}
            className={`z-10 fixed bottom-6 right-6 p-3 rounded-full bg-foreground text-background shadow-lg transition-opacity ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            aria-label="Scroll to top"
        >
            <ArrowUp size={iconSize} />
        </button>
    );
};

export default ScrollToTopButton;