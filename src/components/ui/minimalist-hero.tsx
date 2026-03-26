import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/src/lib/utils';

// Define the props interface for type safety and reusability
interface MinimalistHeroProps {
  logoText?: string;
  navLinks: { label: string; href: string }[];
  mainText: string;
  readMoreLink: string;
  imageSrc: string;
  imageAlt: string;
  overlayText?: {
    part1: string;
    part2: string;
  };
  socialLinks: { icon: LucideIcon; href: string }[];
  locationText: string;
  className?: string;
}

// Helper component for navigation links
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-sm font-medium tracking-widest text-stone-100/60 transition-colors hover:text-white"
  >
    {children}
  </a>
);

// Helper component for social media icons
const SocialIcon = ({ href, icon: Icon }: { href: string; icon: LucideIcon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-stone-100/60 transition-colors hover:text-white">
    <Icon className="h-5 w-5" />
  </a>
);

// The main reusable Hero Section component
export const MinimalistHero = ({
  logoText,
  navLinks,
  mainText,
  readMoreLink,
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  className,
}: MinimalistHeroProps) => {
  return (
    <div
      className={cn(
        'relative flex h-screen w-full flex-col items-center justify-between overflow-hidden bg-black p-8 font-sans md:p-12',
        className
      )}
    >
      {/* Header */}
      <header className="z-30 flex w-full max-w-7xl items-center justify-between">
        {logoText && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold tracking-wider text-stone-100"
          >
            {logoText}
          </motion.div>
        )}
        <div className={cn("hidden items-center space-x-8 md:flex", !logoText && "flex-grow justify-end")}>
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-1.5 md:hidden"
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-6 bg-stone-100"></span>
          <span className="block h-0.5 w-6 bg-stone-100"></span>
          <span className="block h-0.5 w-5 bg-stone-100"></span>
        </motion.button>
      </header>

      {/* Main Content Area */}
      <div className="relative grid w-full max-w-7xl flex-grow grid-cols-1 items-center md:grid-cols-3">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="z-20 order-2 md:order-1 text-center md:text-left"
        >
          <p className="mx-auto max-w-xs text-sm leading-relaxed text-stone-100/80 md:mx-0">{mainText}</p>
          <a href={readMoreLink} className="mt-4 inline-block text-sm font-medium text-stone-100 underline decoration-from-font">
            Saiba Mais
          </a>
        </motion.div>

        {/* Center Vertical Band & Image */}
        <div className="relative order-1 md:order-2 flex justify-center items-end h-[600px] md:h-[700px] lg:h-[800px] w-full max-w-[420px] mx-auto">
          {/* Vertical Band (The "Faixa") */}
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-y-[-10%] w-[280px] md:w-[360px] lg:w-[420px] bg-gradient-to-b from-transparent via-stone-800/30 to-transparent z-0 origin-top"
          />
          
          {/* Main Photo */}
          <div className="relative z-10 w-full h-full flex justify-center items-end overflow-hidden">
            <motion.img
              src={imageSrc}
              alt={imageAlt}
              className="w-auto h-[100%] max-w-none object-contain origin-bottom grayscale hover:grayscale-0 transition-all duration-700 translate-x-[5%]"
              style={{
                maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            />
          </div>

          {/* Signature Text - Horizontal Premium Style */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute -right-24 md:-right-48 lg:-right-96 bottom-[15%] z-20 pointer-events-none"
          >
            <p className="text-4xl md:text-6xl lg:text-7xl font-headline font-black tracking-tighter uppercase whitespace-normal leading-[0.85] bg-gradient-to-r from-stone-100 to-stone-500 bg-clip-text text-transparent">
              Portfolio <br /> Arisio <br /> Andrade
            </p>
          </motion.div>
        </div>

        {/* Right Text */}
        {overlayText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="z-20 order-3 flex items-center justify-center text-center md:justify-start"
          >
            <h1 className="text-7xl font-extrabold text-stone-100 md:text-8xl lg:text-9xl">
              {overlayText.part1}
              <br />
              {overlayText.part2}
            </h1>
          </motion.div>
        )}
      </div>

      {/* Footer Elements */}
      <footer className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex items-center space-x-4"
        >
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="text-sm font-medium text-stone-100/80"
        >
          {locationText}
        </motion.div>
      </footer>
    </div>
  );
};
