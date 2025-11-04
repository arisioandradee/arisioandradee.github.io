import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="relative py-6 border-t border-border/40">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-2">
              Desenvolvido por Arisio Andrade
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
