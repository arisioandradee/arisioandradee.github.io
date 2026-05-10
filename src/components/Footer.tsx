import { Github, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Jornada', href: '#about' },
    { name: 'Stack', href: '#tech' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/arisioandrade_/', name: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/arisioandrade', name: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/arisioandradee', name: 'GitHub' },
  ];

  return (
    <footer className="bg-black w-full py-12 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
          {/* Brand and Copyright */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src="/AA_logo.png" alt="Logo" className="w-8 h-8 object-contain" />
              <span className="text-2xl font-black text-white font-headline tracking-tighter">ARISIO ANDRADE</span>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed max-w-xs font-medium">
              Desenvolvedor Full Stack especializado em transformar dados em soluções inteligentes.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-6">
            <span className="text-xs font-bold text-stone-300 uppercase tracking-[0.2em]">Navegação</span>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-stone-500 hover:text-white transition-colors text-sm font-medium w-fit"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-6">
            <span className="text-xs font-bold text-stone-300 uppercase tracking-[0.2em]">Redes Sociais</span>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-stone-900 flex items-center justify-center text-stone-400 hover:bg-white hover:text-black transition-all duration-300 shadow-lg"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-stone-600 text-xs font-medium tracking-wide">
            © {new Date().getFullYear()} Arisio Andrade. Todos os direitos reservados.
          </p>
          <p className="text-stone-500 text-xs font-bold uppercase tracking-widest">
            Desenvolvido por <span className="text-stone-300">Arisio Andrade</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
