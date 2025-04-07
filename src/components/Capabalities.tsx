'use client';
import { motion } from "framer-motion";

const capabilities = [
    'Fullstack Development',
    'Backend Fundamentals',
    'Frontend Building',
    'Deployment & Hosting',
    'Learning & Problem-Solving'
];

export default function Capabilities() {
    return (
        <motion.div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-0 p-6 sm:p-10 md:px-36 w-full justify-between border-b border-neutral-300 rounded-b-[2rem] md:rounded-b-[3.5rem] text-center md:text-left">

            {/* Titre */}
            <motion.span className="font-accent text-3xl sm:text-4xl">
                Capabilities
            </motion.span>

            {/* Liste */}
            <motion.ul className="flex flex-col gap-3">
                {capabilities.map((cap, index) => (
                    <li
                        className="text-2xl sm:text-3xl md:text-4xl font-light transition-transform duration-500 hover:-translate-x-6 md:hover:-translate-x-12 cursor-default"
                        key={index}
                    >
                        {cap}
                    </li>
                ))}
            </motion.ul>
        </motion.div>
    );
}