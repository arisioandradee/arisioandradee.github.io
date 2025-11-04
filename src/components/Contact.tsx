import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
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
    <section ref={sectionRef} id="contact" className="py-24 relative">
      <div className="container px-4">
        <div
          className={`max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Cabeçalho */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              Entre em contato
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Deseja fazer um projeto? Mande mensagem pra tirar suas dúvidas!
            </p>
          </div>

          {/* Conteúdo */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Informações de contato */}
            <div className="space-y-8">
              <div className="glass-card p-6 rounded-xl flex items-start gap-4">
                <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">arisiosaf@gmail.com</p>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl flex items-start gap-4">
                <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Telefone</h3>
                  <p className="text-muted-foreground">+55 (88) 9 9987-6936</p>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl flex items-start gap-4">
                <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Localização</h3>
                  <p className="text-muted-foreground">Ceará, Brasil</p>
                </div>
              </div>
            </div>

            {/* Formulário funcional via FormSubmit */}
            <form
              action="https://formsubmit.co/arisiosaf@gmail.com"
              method="POST"
              className="glass-card p-8 rounded-2xl space-y-6"
              onSubmit={() => toast.success("Mensagem enviada com sucesso! 🚀")}
            >
              {/* Configurações do FormSubmit */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://arisioandrade.vercel.app/" />
              <input type="hidden" name="_subject" value="Nova mensagem do site!" />
              <input type="hidden" name="_template" value="table" />
              <input type="text" name="_honey" style={{ display: "none" }} />

              {/* Campos do formulário */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Nome
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Seu nome"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Assunto
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Ex: Dúvida sobre orçamento"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  E-mail
                </label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Seu e-mail"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Sua mensagem..."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Enviar mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
