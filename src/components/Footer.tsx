"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { ArrowRight } from 'lucide-react';
import { useAbout } from '@/app/context/aboutContext';

const Footer = () => {
  const [time, setTime] = useState('');
  const { scrollToRef } = useAbout();

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const timeString = date.toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZoneName: 'short',
      });
      setTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer id="footer">
      {/* CTA section */}
      <div className="p-6 sm:px-10 md:px-36 mt-10">
        <Link
          href={'/about'}
          onClick={scrollToRef}
          className="group flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 rounded-full py-10 px-6 transition-all duration-300 sm:hover:bg-accent"
        >
          <span className="text-2xl sm:text-3xl text-muted-foreground group-hover:text-primary group-hover:translate-x-2 sm:group-hover:translate-x-5 transition-transform duration-300">
            About me
          </span>
          <span className="text-center sm:text-left text-muted-foreground group-hover:text-foreground transition-colors duration-300">
            Learn about me and read my resumé
          </span>
          <ArrowRight
            size={40}
            className={`
    transition-transform duration-300
    group-hover:-translate-x-2 sm:group-hover:-translate-x-5
    text-background bg-foreground rounded-full p-2
    sm:text-foreground sm:bg-transparent sm:rounded-none sm:p-0
  `}
          />
        </Link>
      </div>

      {/* Main footer */}
      <div className="relative">
        <div className="mx-width py-16 sm:py-24 px-6 sm:px-10">
          <h2 className="h1 text-center font-accent mt-6 leading-tight">
            LET'S CREATE<br />
            GREAT&nbsp;THINGS
            <span className="italic"> together.</span>
          </h2>
          <div className="flex justify-center mt-10">
            <a
              href="mailto:kopoinGabriel@gmail.com"
              className="btn-footer"
              id="contact"
            >
              Keep in touch
            </a>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="mx-width border-t border-gray-200 py-6 px-6 sm:px-10">

        {/* Info + Links */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
          {/* Location + Time */}
          <div className="flex items-center justify-start sm:justify-start space-x-6">
            <div className="flex justify-start md:justify-start">
              <a href="mailto:kopoinGabriel@gmail.com" aria-label="Send me an email">
                <svg width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.5L18 16L35 5.5M5 1H31C33.2091 1 35 2.79086 35 5V27C35 29.2091 33.2091 31 31 31H5C2.79086 31 1 29.2091 1 27V5C1 2.79086 2.79086 1 5 1Z"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            <p className="h4">✽&nbsp;France</p>
            <p className="h4 whitespace-nowrap">{time}</p>
          </div>

          {/* Socials */}
          <div className="flex items-center justify-between sm:justify-end space-x-6">
            <a
              href="https://www.linkedin.com/in/gabriel-kopoin-3575b9239/"
              className="h4 footer-link flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin />
              LinkedIn
            </a>
            <a
              href="https://github.com/Rookate"
              className="h4 footer-link flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub />
              Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
