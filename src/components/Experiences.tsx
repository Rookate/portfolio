'use client';
import { useTheme } from "@/app/context/themeProvider";
import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
    { title: 'Zone 01 Rouen', period: 'June 2024 - Present', image: '/assets/Zone01.png' },
    { title: 'La Poste Evreux', period: 'April 2023 - February 2024', image: '/assets/la-post-icon.png' },
    { title: 'Assurance Maladie', period: 'December 2021 - December 2022', image: '/assets/assurance-maladie.png' },
    { title: 'Bac STI2D - ITEC', period: 'June 2021', image: '/assets/education.png' },
];

export default function Experiences() {
    const { isDarkMode } = useTheme();

    return (
        <div className="border-b">
            <motion.h2
                className={`${isDarkMode ? 'text-neutral-50' : 'text-neutral-600'} text-4xl border-b p-4 pl-0 mt-14`}
            >
                Experiences
            </motion.h2>

            <motion.div className="flex justify-end mt-20">
                <motion.div className="flex flex-col gap-12 w-full md:w-1/2">
                    {experiences.map((experience, index) => (
                        <div
                            key={index}
                            className="border-b last:border-b-0 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                        >
                            <div className="flex items-center gap-4">
                                <Image
                                    src={experience.image}
                                    alt={experience.title}
                                    width={60}
                                    height={60}
                                    className="rounded-lg"
                                />
                                <p className="text-lg font-medium">{experience.title}</p>
                            </div>
                            <p className="text-sm text-muted-foreground sm:text-right">{experience.period}</p>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}