import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre mim', href: '#about' },
    { name: 'Projetos', href: '#projects' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass-panel rounded-full border border-outline-variant/20 px-2 py-2 flex items-center gap-2 md:gap-6 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center px-4">
        <div className="text-xl font-black text-primary tracking-tighter font-headline">
          Vini.
        </div>
      </div>
      
      <div className="hidden md:flex items-center space-x-6 font-headline font-bold tracking-tight text-sm">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-on-surface opacity-70 hover:text-primary hover:opacity-100 transition-all duration-300"
          >
            {link.name}
          </a>
        ))}
      </div>

      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-secondary text-on-primary-fixed px-6 py-2.5 rounded-full font-bold text-sm shadow-[0px_0px_15px_rgba(213,117,255,0.3)]"
      >
        Contato
      </motion.a>
    </nav>
  );
}
