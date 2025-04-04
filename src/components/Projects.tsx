"use client";

import { motion, useInView } from 'framer-motion';
import { useTheme } from '@/app/context/themeProvider';
import { useEffect, useRef, useState } from 'react';
import { InteractiveHoverButton } from './ui/interactive-hover-button';

const projects = [
  {
    id: 1,
    title: 'Space Invaders - A Modern Remake',
    content: 'A modern take on the classic Space Invaders game, built with optimized rendering and smooth animations for an engaging arcade experience.',
    stack: ['JavaScript', 'CSS', 'Go', 'HTML'],
    link: 'https://github.com/Rookate/Make-Your-Game',
    site: 'https://make-your-game-production.up.railway.app/'
  },
  {
    id: 2,
    title: 'Graph QL',
    content: 'Leveraging the power of GraphQL, this project dynamically fetches and displays my academic and personal data, offering a seamless and efficient way to interact with structured information.',
    stack: ['NextJs', 'Tailwind', 'TypeScript', 'React'],
    link: 'https://github.com/Rookate/graph_QL',
  },
  {
    id: 3,
    title: 'Forum',
    content: "Built from the ground up, this forum enables users to create posts, comment, send private messages, and interact seamlessly. With an intuitive admin panel, it ensures smooth content moderation and user management.",
    stack: ['Go', 'HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/Rookate/real-time-forum',
  },
  {
    id: 4,
    title: 'Deplo',
    content: 'Deplo simplifies deployment by bringing together multiple cloud providers like Vercel, Netlify, and Railway in one place. Deploy your projects effortlessly with a unified experience.',
    stack: ['NextJs', 'Tailwind', 'TypeScript', 'React', 'Prisma', 'AuthJs'],
    link: 'https://github.com/Rookate/Deplo',
  },
  {
    id: 5,
    title: 'Lem-In',
    content: 'Lem-in is a virtual ant farm simulation that utilizes an optimized algorithm to determine the shortest path for efficiently guiding a colony of ants from a starting room to a destination within a complex network of interconnected rooms.',
    stack: ['Go'],
    link: 'https://github.com/Rookate/lem-in',
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.4 });
  const { toggleDarkMode } = useTheme();
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    if (isInView && !hasBeenInView) {
      toggleDarkMode();
      setHasBeenInView(true);
    } else if (!isInView) {
      setHasBeenInView(false);
    }
  }, [isInView]);

  const handleGithubLink = (link: string) => {
    window.location.href = link;
  };

  const disabled = project.id === 4; // Ton condition pour désactiver un bouton

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="flex flex-col gap-4 items-center max-w-[44rem]"
    >
      <span className="text-3xl font-bold">{project.title}</span>
      <p className="text-center">{project.content}</p>
      <div ref={project.id === 4 ? ref : null} className="flex flex-wrap justify-center gap-2 w-full">
        {project.stack?.map((stack, index) => (
          <div key={index} className="border border-neutral-400 p-2 rounded-sm text-center">
            {stack}
          </div>
        ))}
      </div>

      {/* Rendu conditionnel du bouton */}
      {disabled ? (
        <InteractiveHoverButton
          disabled
          className="mt-4 border-neutral-400"
          text="Private"
          onClick={() => handleGithubLink(project.link)}
        />
      ) : (
        <div className='flex gap-2'>
          <InteractiveHoverButton
            className="mt-4 border-neutral-400"
            text="Github"
            onClick={() => handleGithubLink(project.link)}
          />
          {project.id === 1 && project.site && (
            <InteractiveHoverButton
              className="mt-4 border-neutral-400"
              text="Try me"
              onClick={() => handleGithubLink(project.site)}
            />
          )}
        </div>
      )
      }
    </motion.div >
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 pt-10 z-10">
      <div className="mx-width">
        <div className="flex items-center flex-col gap-40">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;