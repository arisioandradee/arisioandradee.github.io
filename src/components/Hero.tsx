import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Desenvolvedor Full Stack";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 90); // velocidade levemente mais suave

    return () => clearInterval(timer);
  }, []);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-background animate-gradient" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl text-muted-foreground font-medium">
              Olá, eu sou o
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gradient">
              Arisio Andrade
            </h1>
            <p className="text-2xl md:text-4xl font-semibold text-foreground min-h-[3rem]">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          {/* Botões principais */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="group"
              onClick={() => handleScrollToSection("projects")}
            >
              Visualizar projetos
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group"
              onClick={() => handleScrollToSection("contact")}
            >
              Entrar em contato
              <Mail className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            </Button>
          </div>

          {/* Ícones sociais */}
          <div className="flex items-center justify-center gap-4 pt-8">
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary transition-colors"
              asChild
            >
              <a
                href="https://github.com/arisioandradee"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary transition-colors"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/arisioandrade"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary transition-colors"
              asChild
            >
              <a href="mailto:arisiosaf@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Indicador de rolagem */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}
