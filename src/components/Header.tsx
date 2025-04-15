"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAbout } from '@/app/context/aboutContext';
import { useMediaQuery } from '@/lib/useMediaQuery';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [heightWindow, setHeightWindow] = useState(0);
  const { scrollToRef } = useAbout()
  const isMobile = useMediaQuery('(max-width: 640px)')

  useEffect(() => {
    const updateHeight = () => setHeightWindow(document.body.offsetHeight);
    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    setHeightWindow(document.body.offsetHeight)
  }, [])

  useEffect(() => {
    if (isMobile) {
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);


  const handleScroll = () => {
    if (typeof window !== "undefined" && window.lenis) {
      window.lenis.scrollTo(heightWindow, {
        duration: 1.5,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
      });
    }
  };

  return (
    <header id="header" className={`header fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${isScrolled ? 'py-3 bg-[var(--foreground)] backdrop-blur-sm' : 'py-6'} 
      ${isMobile ? 'bg-background' : ''}`}
    >
      <nav className="mx-width flex items-center justify-between md:grid md:grid-cols-4">
        {/* Logo */}
        <div>
          <Link href="/" className="h4 nav-link" onClick={scrollToRef}>
            Gabriel Kopoin
          </Link>
        </div>

        {/* Menu links - only visible on md and above */}
        <div className="hidden md:flex col-span-2 ml-10 items-center justify-center space-x-8">
          <Link href={"/about"} className="h4 nav-link" onClick={scrollToRef}>
            About
          </Link>
          <a
            href="https://drive.google.com/file/d/1SwdYb1cBDbHjlnaDmgplM1_Jm292V36I/view?usp=sharing"
            className="h4 nav-link flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé
            <span className="ml-1">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>

        {/* Contact - only visible on md and above */}
        <div className="hidden md:block text-right" onClick={handleScroll}>
          <span className="h4 nav-link cursor-pointer">Contact</span>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            className="p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <div className={`w-6 h-0.5 bg-foreground mb-1.5 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 bg-foreground mb-1.5 transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-foreground transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-background z-40 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="relative mx-width h-full flex flex-col justify-center items-start space-y-8 py-20">
          {/* Close Button for mobile */}
          <button
            className="absolute top-4 right-4 p-2"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Menu"
          >
            <svg
              className="w-6 h-6 text-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <Link
            href="/about"
            className="h1 font-accent"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <a
            href="https://drive.google.com/file/d/1SwdYb1cBDbHjlnaDmgplM1_Jm292V36I/view?usp=sharing"
            className="h1 font-accent flex items-center"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
          >
            Résumé
            <span className="ml-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
          <button
            className="h1 font-accent"
            onClick={() => {
              setIsMenuOpen(false);
              // Add a small delay to allow the menu to close before scrolling
              setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }, 300);
            }}
          >
            Contact
          </button>
          <div className="flex space-x-6 mt-8">
            <a
              href="https://www.linkedin.com/in/gabriel-kopoin/"
              className="body"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Rookate"
              className="body"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
