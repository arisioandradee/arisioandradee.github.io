import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, User } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "5588921908043";
  const message = "Olá Arisio, gostaria de falar sobre um projeto!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-6 w-[calc(100vw-2rem)] max-w-[320px] overflow-hidden rounded-[2rem] bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="bg-[#25D366] p-6 text-white relative">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 hover:bg-black/10 p-1 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
                  <User size={24} />
                </div>
                <div>
                  <h3 className="font-black text-lg tracking-tight leading-none uppercase">Arisio Andrade</h3>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span className="text-[10px] font-bold tracking-widest uppercase opacity-90">Online Agora</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-8">
              <div className="bg-stone-100 p-4 rounded-2xl rounded-tl-none relative mb-8">
                <p className="text-stone-800 text-sm leading-relaxed font-medium">
                  Olá! 👋 Gostaria de falar diretamente comigo para tirar suas dúvidas sobre projetos?
                </p>
                {/* Bubble tail */}
                <div className="absolute top-0 -left-2 w-4 h-4 bg-stone-100 [clip-path:polygon(100%_0,0_0,100%_100%)]" />
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-[0_10px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_15px_30px_rgba(37,211,102,0.4)] hover:-translate-y-1"
              >
                <img src="https://cdn.simpleicons.org/whatsapp/white" alt="WhatsApp" className="w-5 h-5" />
                Enviar Mensagem
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)] transition-all relative"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
            >
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
            >
              <img src="https://cdn.simpleicons.org/whatsapp/white" alt="WhatsApp" className="w-8 h-8" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Notification Dot */}
        {!isOpen && (
          <div className="absolute top-0 right-0 w-5 h-5 bg-red-500 rounded-full border-4 border-black flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
          </div>
        )}
      </motion.button>
    </div>
  );
}
