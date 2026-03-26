import React from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';
import { MinimalistHero } from './ui/minimalist-hero';

export default function Hero() {
  const navLinks = [
    { label: 'INÍCIO', href: '#home' },
    { label: 'SOBRE MIM', href: '#about' },
    { label: 'PROJETOS', href: '#projects' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/arisioandrade_/' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/arisioandrade' },
    { icon: Github, href: 'https://github.com/arisioandradee' },
  ];

  return (
    <section id="home">
      <MinimalistHero
        navLinks={navLinks}
        mainText="Sou técnico em Redes de Computadores e atualmente curso Sistemas de Informação. Desenvolvi uma forte afinidade com o back-end, focando em arquitetura de dados e automação de processos."
        readMoreLink="#about"
        imageSrc="/fotoHero.png"
        imageAlt="Arisio Andrade"
        socialLinks={socialLinks}
        locationText=""
      />
    </section>
  );
}
