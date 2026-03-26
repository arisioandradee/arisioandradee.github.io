import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    // We don't preventDefault fully if using target="hidden_iframe", 
    // but we can trigger the UI state change.
    setTimeout(() => {
      setSubmitted(true);
      if (formRef.current) formRef.current.reset();
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 500);
  };
  return (
    <section id="contact" className="py-24 px-6 bg-stone-50 text-stone-900">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 text-center space-y-4">
          <span className="font-headline text-stone-400 text-xs tracking-[0.4em] uppercase font-bold block">Contato</span>
          <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tighter text-stone-900 leading-tight">
            Vamos conversar sobre seu <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-900 to-stone-400">Próximo Projeto</span>?
          </h1>
          <p className="text-stone-500 text-lg font-medium">
            Estou sempre aberto a novos desafios e oportunidades de colaboração.
          </p>
        </header>

        <div className="bg-white p-8 md:p-16 rounded-[3rem] border border-stone-100 shadow-2xl shadow-stone-200/50 relative overflow-hidden">
          {/* Success Overlay */}
          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-50 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8"
              >
                <CheckCircle className="text-green-500 mb-4" size={64} />
                <h3 className="text-2xl font-headline font-bold text-stone-900">Mensagem Enviada!</h3>
                <p className="text-stone-500 mt-2">Obrigado pelo contato. Retornarei em breve.</p>
              </motion.div>
            )}
          </AnimatePresence>

          <form 
            ref={formRef}
            className="space-y-8"
            action="https://docs.google.com/forms/d/e/1FAIpQLSfEb-TaOI0PeXblNmn5KOivQgTGzRniZCjvmcUR0PzsPH8Tvg/formResponse"
            method="POST"
            target="hidden_iframe"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-bold text-stone-900 ml-1">Nome</label>
                <input
                  name="entry.1187891360"
                  className="w-full bg-stone-50 border border-stone-100 text-stone-900 placeholder:text-stone-400 py-5 px-6 rounded-2xl focus:ring-2 focus:ring-stone-900/10 transition-all duration-300 outline-none font-medium"
                  placeholder="Como posso te chamar?"
                  type="text"
                  required
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-stone-900 ml-1">Email</label>
                <input
                  name="entry.1030660310"
                  className="w-full bg-stone-50 border border-stone-100 text-stone-900 placeholder:text-stone-400 py-5 px-6 rounded-2xl focus:ring-2 focus:ring-stone-900/10 transition-all duration-300 outline-none font-medium"
                  placeholder="seu@email.com"
                  type="email"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="text-sm font-bold text-stone-900 ml-1">Assunto</label>
              <input
                name="entry.917003457"
                className="w-full bg-stone-50 border border-stone-100 text-stone-900 placeholder:text-stone-400 py-5 px-6 rounded-2xl focus:ring-2 focus:ring-stone-900/10 transition-all duration-300 outline-none font-medium"
                placeholder="No que posso te ajudar?"
                type="text"
                required
              />
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold text-stone-900 ml-1">Mensagem</label>
              <textarea
                name="entry.155359387"
                className="w-full bg-stone-50 border border-stone-100 text-stone-900 placeholder:text-stone-400 py-5 px-6 rounded-2xl focus:ring-2 focus:ring-stone-900/10 transition-all duration-300 outline-none resize-none font-medium"
                placeholder="Conte-me um pouco mais..."
                rows={6}
                required
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-center space-x-3 bg-stone-900 text-white font-bold text-lg py-6 px-10 rounded-2xl w-full transition-all duration-300 shadow-xl shadow-stone-900/20 hover:bg-black"
              type="submit"
            >
              <span>Enviar Mensagem</span>
              <Send className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
            </motion.button>
          </form>
          {/* Hidden iframe to handle Google Form response without redirection */}
          <iframe 
            name="hidden_iframe" 
            id="hidden_iframe" 
            style={{ display: 'none' }}
            onLoad={() => {
              // Note: This trigger might fire on initial load too, 
              // but since 'submitted' is false, it's safe.
            }}
          />
        </div>


      </div>
    </section>
  );
}
