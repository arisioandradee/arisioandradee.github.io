import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LucideIcon, Download, FileText } from 'lucide-react';
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
  stats?: { value: string; label: string }[];
  techStack?: { name: string; icon: string; color: string }[];
  cvLink?: string;
  videoSrc?: string;
}

// Helper component for navigation links
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-sm font-medium tracking-widest text-stone-300 transition-colors hover:text-white"
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
  stats,
  techStack,
  cvLink,
  videoSrc,
}: MinimalistHeroProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={cn(
        'relative flex min-h-[100dvh] w-full flex-col items-center justify-between overflow-hidden bg-black p-6 font-sans md:p-12',
        className
      )}
    >
       {/* Background Grid or Video */}
       {videoSrc ? (
         <>
           <video
             autoPlay
             loop
             muted
             playsInline
             className="absolute top-0 left-0 right-0 z-0 h-[50vh] md:inset-0 md:h-full w-full object-cover object-[25%_10%] md:object-[center_10%]"
           >
             <source src={videoSrc} type="video/mp4" />
           </video>
           <div className="absolute top-0 left-0 right-0 z-0 h-[50vh] bg-gradient-to-b from-black/60 via-transparent to-black md:hidden" />
           <div className="hidden md:block absolute inset-0 z-0 bg-gradient-to-r from-black/20 via-black/60 to-black/90" />
         </>
       ) : (
         <div 
           className="absolute inset-0 z-0 opacity-[0.15]" 
           style={{ 
             backgroundImage: `linear-gradient(#262626 1px, transparent 1px), linear-gradient(90deg, #262626 1px, transparent 1px)`,
             backgroundSize: 'clamp(30px, 5vw, 60px) clamp(30px, 5vw, 60px)',
             maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
             WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)'
           }} 
         />
       )}
      {/* Header */}
      <header className={cn("z-50 flex w-full max-w-7xl items-center relative justify-between", videoSrc && "md:justify-center")}>
        {logoText && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
              "text-lg md:text-2xl font-bold tracking-wider text-stone-100 relative z-50 flex items-center gap-3",
              videoSrc && "md:hidden"
            )}
          >
            <img src="/AA_logo.png" alt="Logo" className="w-8 h-8 object-contain brightness-200" />
            <span>{logoText}</span>
          </motion.div>
        )}
        <div className={cn("hidden items-center space-x-8 md:flex", (!videoSrc || !logoText) && "flex-grow justify-end")}>
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-50 flex flex-col items-center justify-center w-8 h-8 md:hidden"
          aria-label="Open menu"
        >
          <span className={cn("absolute block h-0.5 w-6 bg-stone-100 transition-all duration-300", isMenuOpen ? "rotate-45" : "-translate-y-2")}></span>
          <span className={cn("absolute block h-0.5 w-6 bg-stone-100 transition-all duration-300", isMenuOpen ? "opacity-0" : "opacity-100")}></span>
          <span className={cn("absolute block h-0.5 w-6 bg-stone-100 transition-all duration-300", isMenuOpen ? "-rotate-45" : "translate-y-2")}></span>
        </motion.button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-black tracking-widest text-stone-100 uppercase hover:text-stone-300"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div className={cn(
        "relative w-full max-w-7xl flex-grow items-center",
        videoSrc ? "flex flex-col md:flex-row justify-end mt-[40vh] md:mt-0" : "grid grid-cols-1 md:grid-cols-3 mt-12 md:mt-0"
      )}>
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className={cn(
            "z-20 w-full",
            videoSrc 
              ? "flex flex-col items-center text-center md:w-1/2 lg:w-5/12 md:p-10 space-y-5 md:space-y-8 md:bg-black/30 md:backdrop-blur-xl md:rounded-3xl md:border md:border-white/10" 
              : "order-2 md:order-1 text-center md:text-left md:pr-12 pt-6 md:pt-0"
          )}
        >
          {videoSrc && (
            <div className="pointer-events-none w-full flex flex-col items-center gap-3 mb-2">
              <img src="/AA_logo.png" alt="Logo" className="w-14 h-14 object-contain brightness-200" />
              <div className="w-12 h-[1px] bg-white/20 my-1" />
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-stone-100 to-stone-400 tracking-tighter">
                ARISIO ANDRADE
              </h2>
            </div>
          )}

          {!videoSrc && overlayText && (
            <div className="pointer-events-none text-right w-full">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white/90 leading-[0.85] tracking-tighter">
                {overlayText.part1}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-100 to-stone-500">{overlayText.part2}</span>
              </h1>
            </div>
          )}

          <p className={cn("max-w-md text-base md:text-lg leading-relaxed font-medium whitespace-pre-line", videoSrc ? "text-stone-300" : "mx-auto text-stone-100/70 md:mx-0 mb-8")}>{mainText}</p>
          
          <div className={cn("flex flex-row w-full justify-center gap-2 md:gap-4", videoSrc ? "justify-center" : "justify-center md:justify-start")}>
            <motion.a 
              href={readMoreLink} 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 md:px-8 py-3 bg-white text-black text-[10px] md:text-xs font-black uppercase tracking-[0.2em] rounded-full hover:bg-stone-200 transition-colors shadow-[0_10px_30px_rgba(255,255,255,0.1)] inline-flex items-center justify-center gap-2 flex-1 md:flex-none whitespace-nowrap"
            >
              Saiba Mais
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>

            {cvLink && (
              <motion.a 
                href={cvLink} 
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 md:px-8 py-3 bg-white/5 text-white text-[10px] md:text-xs font-black uppercase tracking-[0.2em] rounded-full border border-white/10 hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2 flex-1 md:flex-none whitespace-nowrap"
              >
                <Download size={14} />
                Baixar CV
              </motion.a>
            )}
          </div>

          {/* Compact Stats */}
          {stats && (
            <div className={cn("flex flex-row items-start justify-between w-full gap-2 md:gap-6 lg:gap-8 border-t border-stone-800/50 pt-8", videoSrc ? "" : "mt-12 md:justify-start pt-10")}>
              {stats.map((stat, idx) => (
                <div key={idx} className={cn("flex-1 flex flex-col space-y-1", videoSrc ? "items-center text-center" : "items-center md:items-start text-center md:text-left")}>
                  <div className="text-2xl md:text-3xl font-black text-stone-100 tracking-tighter">{stat.value}</div>
                  <p className="text-[8px] md:text-[10px] font-bold text-stone-500 uppercase tracking-widest leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          )}

          {/* Socials inside Card */}
          {videoSrc && socialLinks && (
            <div className="flex items-center justify-center space-x-6 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/5 mt-4">
              {socialLinks.map((link, index) => (
                <SocialIcon key={index} href={link.href} icon={link.icon} />
              ))}
            </div>
          )}
        </motion.div>

        {/* Center Vertical Band & Image */}
        {!videoSrc && (
          <div className="relative order-1 md:order-2 flex justify-center items-end h-[450px] md:h-[700px] lg:h-[800px] w-full max-w-[420px] mx-auto">
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

        </div>
        )}

        {/* Right Text Content - Aligned exactly right of the photo background */}
        {!videoSrc && (
          <div className="z-20 order-3 hidden md:flex flex-col justify-center items-start pl-8 lg:pl-16 h-full gap-12">
          {overlayText && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none text-left"
            >
              <h1 className="text-7xl lg:text-[10rem] font-black text-stone-100/5 leading-[0.85] tracking-tighter mix-blend-plus-lighter">
                {overlayText.part1}
                <br />
                {overlayText.part2}
              </h1>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="pointer-events-none text-left pl-2 mt-4"
          >
            <p className="text-2xl lg:text-4xl font-headline font-black tracking-tighter uppercase whitespace-normal leading-[0.85] bg-gradient-to-r from-stone-100 to-stone-500 bg-clip-text text-transparent opacity-80">
              Portfolio <br /> Arisio <br /> Andrade
            </p>
          </motion.div>
        </div>
        )}
      </div>

      {/* Tech Marquee & Socials (Absolute Bottom on Desktop, Flow on Mobile) */}
      <div className={cn("relative md:absolute bottom-0 md:bottom-16 left-0 right-0 z-30 flex-col items-center gap-8 md:mt-0 md:mb-0", videoSrc ? "hidden md:flex" : "flex mt-16 mb-12")}>
        {!videoSrc && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex items-center space-x-6 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/5"
          >
            {socialLinks.map((link, index) => (
              <SocialIcon key={index} href={link.href} icon={link.icon} />
            ))}
          </motion.div>
        )}

        {techStack && (
          <div className="w-full pointer-events-none opacity-40 hover:opacity-100 transition-opacity hidden md:block">
            <div className="relative overflow-hidden group">
              <motion.div 
                className="flex gap-16 w-max py-2"
                animate={{ x: ["0%", "-33.33%"] }}
                transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 50, ease: "linear" } }}
              >
                {[...techStack, ...techStack, ...techStack].map((tech, idx) => (
                  <div key={`${tech.name}-${idx}`} className="flex items-center gap-2 grayscale brightness-200">
                    <img src={`https://cdn.simpleicons.org/${tech.icon}/${tech.color}`} alt={tech.name} className="w-4 h-4" />
                    <span className="text-[10px] font-black text-stone-300 uppercase tracking-widest">{tech.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Elements */}
      <footer className="z-30 hidden md:flex w-full max-w-7xl items-center justify-between">
        <div /> {/* Spacer for left side */}
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
