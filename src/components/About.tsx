import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code, 
  Database, 
  Zap, 
  Layout, 
  Terminal, 
  Palette, 
  GitBranch, 
  Atom,
  FileCode,
  Briefcase,
  GraduationCap,
  Calendar,
  ChevronDown,
  MapPin
} from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

export default function About() {
  const [expandedExp, setExpandedExp] = useState<number | null>(null);
  const [expandedEdu, setExpandedEdu] = useState<number | null>(null);

  const toggleExp = (idx: number) => setExpandedExp(expandedExp === idx ? null : idx);
  const toggleEdu = (idx: number) => setExpandedEdu(expandedEdu === idx ? null : idx);

  const techStack = [
    { name: 'Python', icon: "python", color: "3776ab" },
    { name: 'PostgreSQL', icon: "postgresql", color: "4169e1" },
    { name: 'Supabase', icon: "supabase", color: "3ecf8e" },
    { name: 'Git', icon: "git", color: "f05032" },
    { name: 'HTML5', icon: "html5", color: "e34f26" },
    { name: 'CSS', icon: "css3", color: "1572b6" },
    { name: 'JavaScript', icon: "javascript", color: "f7df1e" },
    { name: 'React', icon: "react", color: "61dafb" },
    { name: 'Figma', icon: "figma", color: "f24e1e" },
  ];

  const expertiseData = [
    { subject: 'Back-end', A: 90, fullMark: 100 },
    { subject: 'Front-end', A: 65, fullMark: 100 },
    { subject: 'Dados', A: 85, fullMark: 100 },
    { subject: 'Automação', A: 95, fullMark: 100 },
    { subject: 'IA', A: 60, fullMark: 100 },
    { subject: 'DevOps', A: 75, fullMark: 100 },
  ];

  const experiences = [
    {
      role: 'Estagiário de TI',
      company: 'Dibai Sales',
      period: 'out de 2025 - Presente',
      location: 'Remota',
      duration: '5 meses',
      tags: ['MICROSOFT EXCEL', 'PYTHON', 'AUTOMAÇÃO', 'PROCESSAMENTO DE DADOS']
    },
    {
      role: 'Assessor',
      company: 'Câmara Municipal de Morada Nova',
      period: 'mar de 2025 - Presente',
      location: 'Presencial',
      duration: '1 ano',
      tags: ['POWER BI', 'MICROSOFT OFFICE', 'ANÁLISE DE DADOS']
    },
    {
      role: 'Assistente administrativo',
      company: 'Hiper Morada Nova',
      period: 'abr de 2024 - mar de 2025',
      location: 'Presencial • Morada Nova, Ceará, Brasil',
      duration: '1 ano',
      tags: ['PROCESSOS ADMINISTRATIVOS', 'TECNOLOGIA DA INFORMAÇÃO']
    },
    {
      role: 'Estagiário de TI',
      company: 'Alvoar Lácteos',
      period: 'jun de 2020 - dez de 2020',
      location: 'Presencial • Morada Nova, Ceará, Brasil',
      duration: '7 meses',
      tags: ['REDES DE COMPUTADORES', 'MICROSOFT OFFICE', 'SUPORTE TÉCNICO']
    }
  ];

  const education = [
    {
      degree: 'Bacharelado em Sistemas de Informação',
      institution: 'Unicatólica - Centro Universitário Católica de Quixadá',
      period: '2024 - 2026',
      tags: ['FIGMA', 'JAVA', 'PYTHON', 'SQL', 'SPRING BOOT', 'METODOLOGIAS ÁGEIS', 'BANCO DE DADOS']
    },
    {
      degree: 'Bacharelado em Sistemas de Informação',
      institution: 'Universidade Federal do Ceará (UFC)',
      period: '2021 - 2023',
      note: 'Transferência de Universidade',
      tags: ['PROGRAMAÇÃO', 'MATEMÁTICA', 'LÓGICA DE PROGRAMAÇÃO', 'ARQUITETURA DE INFO']
    },
    {
      degree: 'Técnico em Redes de Computadores',
      institution: 'EEEP Osmira Eduardo de Castro',
      period: '2018 - 2020',
      tags: ['TCP/IP', 'SEGURANÇA DE REDE', 'ADMINISTRAÇÃO DE REDES', 'LAN-WAN']
    }
  ];

  return (
    <section id="about" className="py-16 px-6 bg-surface-off-white text-on-surface-off-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Centered */}
        <header className="text-center mb-10 space-y-2">
          <span className="text-xs font-headline font-bold tracking-[0.4em] text-stone-400 uppercase">Sobre Mim</span>
          <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-stone-900">
            Minha <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-900 to-stone-500">Jornada</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Text & Stack */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-base leading-relaxed text-stone-700">
              <p>
                Sou técnico em <span className="font-bold text-stone-900">Redes de Computadores</span> e atualmente curso <span className="font-bold text-stone-900">Sistemas de Informação</span>. Desenvolvi uma forte afinidade com o back-end, focando em arquitetura de dados e automação de processos.
              </p>
              <p>
                Acredito que a disciplina e o aprendizado contínuo são as chaves para a excelência na tecnologia. Meu objetivo é criar soluções práticas que não apenas funcionem, mas que sejam <span className="font-bold text-stone-900">escaláveis e eficientes</span>.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-headline font-bold text-stone-900 tracking-tight">Stack de Tecnologias</h3>
              <div className="relative overflow-hidden group">
                {/* Gradient Masks for fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-surface-off-white to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-surface-off-white to-transparent z-10" />
                
                <motion.div 
                  className="flex gap-4 w-max py-4"
                  animate={{
                    x: ["0%", "-50%"]
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 30,
                      ease: "linear",
                    },
                  }}
                >
                  {/* First set of icons */}
                  {[...techStack, ...techStack].map((tech, idx) => (
                    <div
                      key={`${tech.name}-${idx}`}
                      className="px-6 py-3 bg-white rounded-2xl flex items-center gap-3 border border-stone-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-stone-200 transition-all cursor-default min-w-[170px]"
                    >
                      <div className="w-6 h-6 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
                        <img 
                          src={`https://cdn.simpleicons.org/${tech.icon}/${tech.color}`} 
                          alt={tech.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-sm font-headline font-bold text-stone-600">{tech.name}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Column: Radar Chart Card */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-stone-50 p-6 rounded-3xl shadow-[0px_20px_40px_rgba(0,0,0,0.02)] border border-stone-200 flex flex-col items-center"
            >
              <h3 className="text-xl font-headline font-bold text-stone-900 mb-6">Expertise Técnica</h3>
              <div className="w-full aspect-square max-w-[320px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={expertiseData}>
                    <PolarGrid stroke="#e5e7eb" />
                    <PolarAngleAxis 
                      dataKey="subject" 
                      tick={{ fill: '#78716c', fontSize: 12, fontWeight: 600 }}
                    />
                    <Radar
                      name="Expertise"
                      dataKey="A"
                      stroke="#1c1917"
                      fill="#1c1917"
                      fillOpacity={0.2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Separator */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Experiência Profissional */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-stone-100 rounded-2xl border border-stone-200">
                <Briefcase className="text-stone-900" size={24} />
              </div>
              <h2 className="text-2xl font-headline font-bold text-stone-900">Experiência Profissional</h2>
            </div>

            <div className="h-[550px] overflow-y-auto pr-4 space-y-6 relative before:absolute before:left-[1.15rem] before:top-2 before:bottom-2 before:w-px before:bg-stone-200 scrollbar-thin scrollbar-thumb-stone-200 hover:scrollbar-thumb-stone-300 scrollbar-track-transparent">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-12">
                  <div className="absolute left-3 top-2 w-3 h-3 rounded-full bg-stone-400 border-4 border-surface-off-white ring-1 ring-stone-200" />
                  <div className="space-y-2">
                    <button 
                      onClick={() => toggleExp(idx)}
                      className="w-full text-left flex flex-wrap items-center justify-between gap-2 group/btn"
                    >
                      <h3 className="text-lg font-headline font-bold text-stone-900 group-hover:text-stone-600 transition-colors">{exp.role}</h3>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-stone-400 flex items-center gap-1.5 bg-stone-100 px-2 py-1 rounded">
                          <Calendar size={14} /> {exp.period}
                        </span>
                        <motion.div
                          animate={{ rotate: expandedExp === idx ? 180 : 0 }}
                          className="text-stone-400 group-hover/btn:text-stone-900 transition-colors"
                        >
                          <ChevronDown size={20} />
                        </motion.div>
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {expandedExp === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-3 pt-1 pb-2">
                            <p className="text-stone-600 font-bold">{exp.company}</p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-stone-500">
                              <span className="flex items-center gap-1"><MapPin size={14} /> {exp.location}</span>
                              <span>• {exp.duration}</span>
                            </div>
                            <div className="flex flex-wrap gap-2 pt-2">
                              {exp.tags.map(tag => (
                                <span key={tag} className="px-2 py-1 bg-stone-100 text-[10px] font-bold text-stone-500 rounded border border-stone-200 uppercase tracking-tighter">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formação Acadêmica */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-stone-100 rounded-2xl border border-stone-200">
                <GraduationCap className="text-stone-900" size={24} />
              </div>
              <h2 className="text-2xl font-headline font-bold text-stone-900">Formação Acadêmica</h2>
            </div>

            <div className="h-[550px] overflow-y-auto pr-4 space-y-6 relative before:absolute before:left-[1.15rem] before:top-2 before:bottom-2 before:w-px before:bg-stone-200 scrollbar-thin scrollbar-thumb-stone-200 hover:scrollbar-thumb-stone-300 scrollbar-track-transparent">
              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-12">
                  <div className="absolute left-3 top-2 w-3 h-3 rounded-full bg-stone-400 border-4 border-surface-off-white ring-1 ring-stone-200" />
                  <div className="space-y-2">
                    <button 
                      onClick={() => toggleEdu(idx)}
                      className="w-full text-left flex flex-wrap items-center justify-between gap-2 group/btn"
                    >
                      <h3 className="text-lg font-headline font-bold text-stone-900 group-hover:text-stone-600 transition-colors">{edu.degree}</h3>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-stone-400 flex items-center gap-1.5 bg-stone-100 px-2 py-1 rounded">
                          <Calendar size={14} /> {edu.period}
                        </span>
                        <motion.div
                          animate={{ rotate: expandedEdu === idx ? 180 : 0 }}
                          className="text-stone-400 group-hover/btn:text-stone-900 transition-colors"
                        >
                          <ChevronDown size={20} />
                        </motion.div>
                      </div>
                    </button>

                    <AnimatePresence>
                      {expandedEdu === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-3 pt-1 pb-2">
                            <p className="text-stone-600 font-bold">{edu.institution}</p>
                            {edu.note && (
                              <p className="text-xs italic text-stone-500 flex items-center gap-1">
                                <Zap size={12} className="text-stone-400" /> {edu.note}
                              </p>
                            )}
                            <div className="flex flex-wrap gap-2 pt-2">
                              {edu.tags.map(tag => (
                                <span key={tag} className="px-2 py-1 bg-stone-100 text-[10px] font-bold text-stone-500 rounded border border-stone-200 uppercase tracking-tighter">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
