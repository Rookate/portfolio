'use client';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useTheme } from "../context/themeProvider";
import WhatIDo from "@/components/WhatIDo";
import Experiences from "@/components/Experiences";
import { useAbout } from "../context/aboutContext";
import { motion } from "framer-motion";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function AboutPage() {
  const { isDarkMode } = useTheme();
  const { scrollToRef } = useAbout();

  useEffect(() => {
    scrollToRef();
  }, []);

  return (
    <div className="mx-width">
      <Header />
      <main className=" pt-32 sm:pt-40 pb-20 relative min-h-screen z-10 rounded-br-[3.5rem] rounded-bl-[3.5rem]">
        <motion.section
          className="mx-width"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <div className="flex flex-col">
            <div className="flex justify-center">
              <div>
                <p className={`h2 font-semibold ${isDarkMode ? 'text-neutral-300' : 'text-neutral-800'} `}>
                  I see development as a balance between performance and aesthetics, where every detail matters.
                </p>
                <div className="flex flex-col gap-4 text-neutral-400 text-xl font-medium mt-24 w-full text-pretty">
                  <p className={`${isDarkMode ? 'text-neutral-50' : 'text-neutral-600'} text-4xl border-b p-4 pl-0`}>About me</p>
                  <p>
                    I mainly work with Next.js, Tailwind, and React, both for the frontend and backend. I love how this stack allows me to build fast, scalable, and maintainable applications while keeping the development process smooth and efficient. That being said, I also enjoy working with Go and always look for opportunities to explore and improve my backend skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <WhatIDo />
          <Experiences />
        </motion.section>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}