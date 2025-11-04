import { useEffect, useRef, useState } from "react";

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 md:py-36 relative overflow-hidden"
      id="about"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container px-4 relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-8">
            Sobre mim
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Sou técnico em Redes de Computadores e atualmente curso Sistemas de
              Informação. Desde cedo, desenvolvi afinidade com o back-end, em
              especial com as áreas de dados e automação. Atualmente, estou
              aprofundando meus conhecimentos em <strong>Python</strong>,{" "}
              <strong>SQL</strong>, <strong>Git</strong> e frameworks como{" "}
              <strong>Django</strong>.
            </p>

            <p>
              Também venho estudando tecnologias de <strong>front-end</strong>{" "}
              para compreender melhor o funcionamento completo das aplicações
              web e ampliar minha capacidade de desenvolver soluções
              integradas e eficientes.
            </p>

            <p>
              Acredito que <strong>disciplina</strong> e{" "}
              <strong>aprendizado contínuo</strong> são essenciais para crescer
              na área de tecnologia. Meu objetivo é transformar ideias em{" "}
              <strong>soluções práticas, escaláveis</strong> e que gerem{" "}
              <strong>impacto real</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
