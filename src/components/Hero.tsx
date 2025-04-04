"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const scrollRef = useRef<HTMLButtonElement>(null);

  const handleScroll = () => {
    if (typeof window !== "undefined" && window.lenis) {
      window.lenis.scrollTo("#projects", {
        duration: 1.5,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
      });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 z-10">
      <div className="max-width grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* TITRE PRINCIPAL ANIMÉ */}
        <div className="flex-col col-span-1 md:col-span-2 flex gap-4 justify-center relative">
          <motion.h1
            className="display-title text-center font-boldonse text-6xl md:text-left lg:text-8xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            PORTFOLIO
          </motion.h1>

          <motion.p
            className="text-right"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          >
            By Gabriel Kopoin
          </motion.p>
        </div>

        {/* TEXTE INTRODUCTION ANIMÉ */}
        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
        >
          <p className="flex flex-col text-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            >
              Hello, welcome to my portfolio website.
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
            >
              I'm a passionate Full-Stack Developer with a love for building modern, dynamic web experiences.
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1.4 }}
            >
              I specialize in backend technologies and strive to create visually stunning and functional interfaces.
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1.6 }}
            >
              Let's connect and create something amazing together!
            </motion.span>
          </p>
        </motion.div>
      </div>

      {/* BOUTON SCROLL ANIMÉ */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 2 }}
      >
        <button
          ref={scrollRef}
          className="flex flex-col items-center space-y-2 opacity-70 hover:opacity-100 transition-opacity"
          onClick={handleScroll}
        >
          <span className="h4">Scroll to explore</span>
          <motion.svg
            initial={{ y: 0 }}
            animate={{ y: 10 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5L12 19M12 19L19 12M12 19L5 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;