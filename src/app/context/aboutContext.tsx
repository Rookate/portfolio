'use client';
import { createContext, useRef, useContext, ReactNode } from 'react';

type AboutContextType = {
    scrollToRef: () => void;
};

const AboutContext = createContext<AboutContextType | undefined>(undefined);

export const useAbout = () => {
    const context = useContext(AboutContext);
    if (!context) {
        throw new Error('useAbout must be used within an AboutProvider');
    }
    return context;
};

export const AboutProvider = ({ children }: { children: ReactNode }) => {
    const ref = useRef<HTMLElement>(null);

    const scrollToRef = () => {
        if (typeof window !== "undefined" && window.lenis) {
            window.lenis.scrollTo(0, {
                duration: 1.2,
                easing: (t: number) => 1 - Math.pow(1 - t, 3),
            });
        }
    };

    return (
        <AboutContext.Provider value={{ scrollToRef }}>
            {children}
        </AboutContext.Provider>
    );
};