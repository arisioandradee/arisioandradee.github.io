import React from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';
import { MinimalistHero } from './ui/minimalist-hero';

export default function Hero() {
  const navLinks = [
    { label: 'INÍCIO', href: '#home' },
    { label: 'SOBRE MIM', href: '#about' },
    { label: 'PROJETOS', href: '#projects' },
    { label: 'CONTATO', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/arisioandrade_/' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/arisioandrade' },
    { icon: Github, href: 'https://github.com/arisioandradee' },
  ];

  const techStack = [
    { name: 'Python', icon: "python", color: "3776ab" },
    { name: 'PostgreSQL', icon: "postgresql", color: "4169e1" },
    { name: 'Supabase', icon: "supabase", color: "3ecf8e" },
    { name: 'Git', icon: "git", color: "f05032" },
    { name: 'HTML5', icon: "html5", color: "e34f26" },
    { name: 'CSS', icon: "css", color: "1572b6" },
    { name: 'JavaScript', icon: "javascript", color: "f7df1e" },
    { name: 'React', icon: "react", color: "61dafb" },
    { name: 'Node.js', icon: "nodedotjs", color: "5FA04E" },
    { name: 'Vite', icon: "vite", color: "646CFF" },
    { name: 'Pandas', icon: "pandas", color: "150458" },
    { name: 'Docker', icon: "docker", color: "2496ED" },
    { name: 'Figma', icon: "figma", color: "f24e1e" },
  ];

  const stats = [
    { value: '10+', label: 'PROJETOS' },
    { value: '05+', label: 'ANOS DE ESTUDO' },
    { value: '03+', label: 'AUTOMAÇÕES REAIS' },
  ];

  return (
    <section id="home">
      <MinimalistHero
        logoText="ARISIO ANDRADE"
        navLinks={navLinks}
        mainText="Desenvolvedor Full Stack & Especialista em Automação de Dados. Transformando complexidade em sistemas eficientes e escaláveis."
        readMoreLink="#about"
        imageSrc="/fotoHero.png"
        imageAlt="Arisio Andrade"
        overlayText={{
          part1: 'FULL',
          part2: 'STACK'
        }}
        socialLinks={socialLinks}
        locationText=""
        stats={stats}
        techStack={techStack}
        cvLink="/Profile.pdf"
      />
    </section>
  );
}
