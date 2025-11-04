import { useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Sistema de Aprendizagem",
      description:
        "Plataforma completa que conecta estudantes e professores, facilitando o aprendizado e o gerenciamento de atividades.",
      tags: ["Python", "PostgreSQL", "Jupyter"],
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1532",
      demo: "https://github.com/arisioandradee/sistema-aprendizagem",
    },
    {
      title: "Nutr.IA",
      description:
        "Aplicação web que utiliza Inteligência Artificial para gerar planos alimentares personalizados e saudáveis.",
      tags: ["HTML", "CSS", "JavaScript", "Gemini"],
      image:
        "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?auto=format&fit=crop&q=80&w=1170",
      demo: "https://github.com/arisioandradee/nutria-diet-planner",
    },
    {
      title: "HelpDesk",
      description:
        "Sistema de suporte técnico com gerenciamento de chamados, autenticação e controle de usuários.",
      tags: ["Java", "Angular", "H2 Database", "MySQL"],
      image:
        "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&q=80&w=1170",
      demo: "https://github.com/arisioandradee/helpdesk-project",
    },
  ];

  // 🔁 Funções para mudar o projeto
  const nextProject = () =>
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () =>
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const project = projects[currentIndex];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-32 md:py-36 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />

      <div className="container px-4 relative z-10">
        <div
          className={`max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center space-y-4 mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              Meus Projetos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore meus projetos navegando com as setas abaixo.
            </p>
          </div>

          <div className="relative flex items-center justify-center">
            {/* seta esquerda */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevProject}
              className="absolute left-0 top-1/2 -translate-y-1/2 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            {/* card do projeto */}
            <Card
              key={currentIndex}
              className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-glow group w-full max-w-lg"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button asChild className="flex-1">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver Projeto
                  </a>
                </Button>
              </CardFooter>
            </Card>

            {/* seta direita */}
            <Button
              variant="ghost"
              size="icon"
              onClick={nextProject}
              className="absolute right-0 top-1/2 -translate-y-1/2 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* indicador (bolinhas) */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "bg-primary scale-110" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
