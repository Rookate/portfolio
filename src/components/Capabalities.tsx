'use client';
import { motion } from "framer-motion";

const capabilities = ['Fullstack Development', 'Backend Fundamentals', 'Frontend Building', 'Deployment & Hosting', 'Learning & Problem-Solving']

export default function Capabilities() {
    return (
        <motion.div className="flex p-10 px-36 w-full justify-between border-b border-neutral-300 rounded-b-[3.5rem]">
            <motion.span className="font-accent text-4xl">
                Capabilities
            </motion.span>
            <motion.ul className="flex flex-col gap-3">
                {capabilities.map((cap, index) => (
                    <li className="text-4xl font-light transition-transform duration-500 hover:-translate-x-12 cursor-default" key={index}>{cap}</li>
                ))}
            </motion.ul>
        </motion.div>
    )
}