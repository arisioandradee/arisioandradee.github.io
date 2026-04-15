import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Lock, Code, Terminal, Briefcase, User, Globe } from 'lucide-react';

export default function Projects() {
  const [category, setCategory] = useState<'pessoal' | 'empresarial'>('pessoal');

  const projects = [
    {
      title: 'Melhor Lead',
      description: 'Sistema inteligente de prospecção e validação de leads com dados da Receita Federal, integrado às APIs Casa dos Dados e Assertiva. Enriquece informações com redes sociais e dados dos sócios, além de contar com integração ao Asaas para gestão de pagamentos.',
      colSpan: 'md:col-span-8',
      category: 'empresarial',
      isPrivate: true,
      image: '/melhorLead.png',
      imagePosition: 'object-top',
      gradient: 'from-blue-600/20 via-indigo-600/10 to-transparent'
    },
    {
      title: 'Dibai Academy',
      description: 'Landing page desenvolvida com foco na captação de novos alunos para a Dibai Academy, com estrutura voltada para conversão.',
      colSpan: 'md:col-span-4',
      category: 'empresarial',
      isPrivate: true,
      image: '/dibaiAcademy.png',
      gradient: 'from-emerald-600/20 via-teal-600/10 to-transparent'
    },
    {
      title: 'Central Dibai Sales',
      description: 'Plataforma web centralizada que reúne ferramentas essenciais do dia a dia, como conversores, validadores de e-mail e WhatsApp, além de um transcritor, otimizando tarefas e aumentando a produtividade.',
      colSpan: 'md:col-span-6',
      category: 'empresarial',
      isPrivate: true,
      image: '/centralDibai.png',
      gradient: 'from-orange-600/20 via-red-600/10 to-transparent'
    },
    {
      title: 'Dibai P.A.',
      description: 'Sistema web desenvolvido para o gerenciamento de PAs operacionais, com foco no acompanhamento de métricas e análise de performance em tempo real.',
      colSpan: 'md:col-span-6',
      category: 'empresarial',
      isPrivate: true,
      image: '/pa.png',
      gradient: 'from-stone-600/20 via-stone-800/10 to-transparent'
    },
    {
      title: 'Site Oficial - Melhor Lead',
      description: 'Landing page estratégica desenvolvida para apresentar a plataforma Melhor Lead, focada em conversão de leads qualificados e demonstração clara das funcionalidades core da ferramenta.',
      colSpan: 'md:col-span-4',
      category: 'empresarial',
      isPrivate: true,
      image: '/lpmelhorlead.png',
      gradient: 'from-blue-500/20 via-indigo-500/10 to-transparent'
    },
    {
      title: 'Portal HRFGO',
      description: 'Plataforma de gestão hospitalar integrada desenvolvida para o Hospital Regional Francisco Galvão de Oliveira. O sistema centraliza o controle de dados operacionais e administrativos, otimizando fluxos de trabalho e garantindo a integridade da informação em uma infraestrutura em constante expansão.',
      colSpan: 'md:col-span-8',
      category: 'empresarial',
      isPrivate: true,
      image: '/portalhrfgo.png',
      imagePosition: 'object-top',
      gradient: 'from-slate-600/20 via-gray-600/10 to-transparent'
    },
    {
      title: 'Nutr.IA',
      description: 'Aplicação web desenvolvida para geração de planos alimentares personalizados utilizando inteligência artificial, com base no modelo Gemini.',
      github: 'https://github.com/arisioandradee/nutria-diet-planner',
      colSpan: 'md:col-span-7',
      category: 'pessoal',
      image: '/nutria.avif',
      imagePosition: 'object-top',
      gradient: 'from-fuchsia-600/20 via-pink-600/10 to-transparent'
    },
    {
      title: 'Catálogo de Carros',
      description: 'Aplicação web desenvolvida para uma loja de veículos, simulando uma solução moderna de presença digital e gestão de estoque.',
      colSpan: 'md:col-span-5',
      category: 'pessoal',
      isPrivate: true,
      image: '/catalogoCarros.png',
      gradient: 'from-cyan-600/20 via-blue-600/10 to-transparent'
    },
    {
      title: 'HelpDesk',
      description: 'Aplicação full-stack desenvolvida para gerenciamento de chamados de suporte técnico, com foco na organização e resolução.',
      github: 'https://github.com/arisioandradee/helpdesk-project',
      colSpan: 'md:col-span-4',
      category: 'pessoal',
      image: '/helpdesks.png',
      gradient: 'from-indigo-600/20 via-blue-600/10 to-transparent'
    },
    {
      title: 'Sistema de Aprendizagem',
      description: 'Plataforma web interativa desenvolvida para conectar estudantes e professores, permitindo a criação e acesso a cursos práticos.',
      github: 'https://github.com/arisioandradee/sistema-aprendizagem',
      colSpan: 'md:col-span-4',
      category: 'pessoal',
      image: '/sistemaAprendizagem.jpg',
      imagePosition: 'object-top',
      gradient: 'from-amber-600/20 via-yellow-600/10 to-transparent'
    },
    {
      title: 'FinanceApp',
      description: 'Plataforma web avançada para controle financeiro pessoal. O sistema permite a gestão completa de receitas e despesas, definição de metas de economia e criação de "cofrinhos" virtuais.',
      link: 'https://arisioandradefinance.vercel.app/',
      colSpan: 'md:col-span-4',
      category: 'pessoal',
      image: '/financeApp.png',
      imagePosition: 'object-top',
      gradient: 'from-emerald-600/20 via-green-600/10 to-transparent'
    },
  ];

  const filteredProjects = projects.filter(p => p.category === category);

  return (
    <section id="projects" className="py-24 px-8 bg-black text-white relative overflow-hidden">
      {/* Background Accent to match Hero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-stone-900/20 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-20 flex flex-col items-center text-center space-y-4">
          <div className="space-y-2">
            <span className="text-xs font-headline font-bold tracking-[0.4em] text-stone-500 uppercase">Projetos</span>
            <h1 className="text-5xl md:text-7xl font-headline font-black tracking-tighter text-white leading-none">
              Vamos explorar meus <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-100 to-stone-500">Projetos Recentes</span>?
            </h1>
          </div>
          
          <p className="text-stone-400 text-lg max-w-2xl font-medium leading-relaxed">
            Estou sempre aberto a novos desafios e oportunidades de colaboração técnica.
          </p>

          <div className="pt-10">
            <div className="inline-flex p-1.5 bg-stone-900 rounded-[2rem] border border-stone-800 shadow-sm">
              <button
                onClick={() => setCategory('pessoal')}
                className={`flex items-center gap-2 px-8 py-3 rounded-[1.5rem] text-sm font-bold transition-all duration-300 ${
                  category === 'pessoal' 
                    ? 'bg-white text-black shadow-xl scale-105' 
                    : 'text-stone-500 hover:text-stone-300'
                }`}
              >
                <User size={18} />
                Pessoal
              </button>
              <button
                onClick={() => setCategory('empresarial')}
                className={`flex items-center gap-2 px-8 py-3 rounded-[1.5rem] text-sm font-bold transition-all duration-300 ${
                  category === 'empresarial' 
                    ? 'bg-white text-black shadow-xl scale-105' 
                    : 'text-stone-500 hover:text-stone-300'
                }`}
              >
                <Briefcase size={18} />
                Empresarial
              </button>
            </div>
          </div>
        </header>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: any, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`${project.colSpan} group relative overflow-hidden rounded-[2.5rem] bg-stone-900/40 backdrop-blur-2xl transition-all duration-700 hover:shadow-[0_0_50px_rgba(255,255,255,0.05)] border border-white/10 hover:border-white/20 flex flex-col`}
              >
                {/* Image Placeholder / Tech Visual */}
                <div className="relative h-48 overflow-hidden bg-stone-950/50">
                   {project.image ? (
                     <>
                       <img 
                         src={project.image} 
                         alt={project.title} 
                         className={`absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 origin-top ${project.imagePosition || 'object-center'}`}
                       />
                       <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700 pointer-events-none`} />
                     </>
                   ) : (
                     <>
                       <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-700`} />
                       <div className="absolute inset-0 bg-grid opacity-[0.05]" />
                       
                       {/* Project Index Number */}
                       <div className="absolute bottom-4 left-6">
                         <span className="text-6xl font-black text-white/5 tracking-tighter select-none">
                           0{idx + 1}
                         </span>
                       </div>
                     </>
                   )}
                   
                   {/* Shimmer Effect */}
                   <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 ease-in-out" />
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="space-y-4 mb-8">
                    <h3 className="font-headline text-2xl font-bold text-white tracking-tight group-hover:text-glow transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-stone-400 text-sm leading-relaxed font-medium transition-all duration-500">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    {project.isPrivate ? (
                      <div className="w-full flex items-center justify-center gap-3 bg-white/5 text-stone-500 py-4 rounded-2xl font-bold border border-white/5 cursor-default text-xs uppercase tracking-widest grayscale hover:grayscale-0 transition-all">
                        <Lock size={16} />
                        Projeto Privado
                      </div>
                    ) : (
                      <a 
                        href={project.link || project.github || "#"} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-full flex items-center justify-center gap-3 bg-white text-black py-4 rounded-2xl font-bold hover:bg-stone-100 transition-all shadow-[0_10px_30px_rgba(255,255,255,0.1)] group/btn text-xs uppercase tracking-widest overflow-hidden relative"
                      >
                        <div className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-45 -translate-x-full group-hover/btn:animate-shimmer" />
                        {project.link ? (
                          <Globe size={18} className="transition-transform group-hover/btn:scale-110" />
                        ) : (
                          <Github size={18} className="transition-transform group-hover/btn:scale-110" />
                        )}
                        Ver Projeto
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-32 p-px bg-stone-800"></div>
        
        <div className="mt-20 flex flex-col items-center text-center">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6 text-white tracking-tighter">
            Pronto para construir algo <br />
            <span className="text-stone-500 italic">Extraordinário</span>?
          </h2>
          <p className="text-stone-400 mb-12 max-w-md font-medium text-lg">
            Atualmente disponível para oportunidades selecionadas de freelance e consultoria arquitetural.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="group flex items-center gap-3 bg-white px-12 py-5 rounded-[2rem] font-bold hover:shadow-2xl transition-all text-black text-lg"
          >
            Vamos Conversar
            <span className="transition-transform group-hover:translate-x-2">→</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
