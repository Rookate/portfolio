"use client";

import Link from 'next/link';
import { motion } from "framer-motion";

const AboutSummary = () => {


  return (
    <section className="py-20">
      <div className="mx-width">
        <motion.h2
          className="font-accent text-4xl mb-12"
          id="about-me"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About me
        </motion.h2>

        <div className="max-w-4xl">
          <motion.p
            className="h2 font-accent mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            I see development as a balance between performance and aesthetics, where every detail matters.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <Link href="/about" className="btn-footer inline-flex items-center">
              More about me
              <svg className="ml-2" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSummary;