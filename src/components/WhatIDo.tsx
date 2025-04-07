'use client';
import { useTheme } from "@/app/context/themeProvider";
import { motion } from "framer-motion";

const skills = [
    { title: 'Frontend Development', techs: ['React', 'NextJs', 'Tailwind', 'CSS'] },
    { title: 'Backend Development', techs: ['Golang', 'MySQL', 'TypeScript', 'Vercel'] },
    { title: 'DevOps', techs: ['Git', 'Vercel', 'Docker'] },
    { title: 'Additional Tech', techs: ['HTML', 'JavaScript', 'Figma'] },
    { title: 'Database Management', techs: ['MySQL', 'Neon', 'Sqlite', 'Prisma'] },
    { title: 'Testing', techs: ['Postman'] },
];

export default function WhatIDo() {
    const { isDarkMode } = useTheme();
    return (
        <motion.div className="flex flex-col w-full mt-24">
            <motion.h2 className={`${isDarkMode ? 'text-neutral-50' : 'text-neutral-600'} text-4xl border-b p-4 pl-0 mb-12`}>What I do</motion.h2>

            <motion.div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-32">
                {skills.map((skill, index) => (
                    <motion.div key={index} className="space-y-4">
                        <motion.h3 className={`text-3xl ${isDarkMode ? "text-neutral-300" : " text-neutral-900"} font-light mb-4`}>{`${skill.title}`}</motion.h3>
                        <motion.ul className="space-y-2">
                            {skill.techs.map((tech, idx) => (
                                <motion.li
                                    key={idx}
                                    className={`w-2/3 text-2xl text-neutral-500 font-[400px] transition-all duration-500 hover:-translate-x-12 hover:text-neutral-800 dark:hover:text-neutral-50 hover:font-semibold cursor-default`}
                                >
                                    {tech}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}