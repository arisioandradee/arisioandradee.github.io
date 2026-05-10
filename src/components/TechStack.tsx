import React from 'react';
import { motion } from 'motion/react';
import { Database, Layout, Cpu, Server, Zap, Terminal } from 'lucide-react';

const techGroups = [
  {
    title: 'Frontend',
    description: 'Criação de interfaces modernas e responsivas com as tecnologias fundamentais e frameworks de alta performance.',
    icon: Layout,
    techs: [
      { name: 'React', icon: 'react', color: '61DAFB' },
      { name: 'TypeScript', icon: 'typescript', color: '3178C6' },
      { name: 'HTML5', icon: 'html5', color: 'E34F26' },
      { name: 'CSS3', icon: 'css3', color: '1572B6' },
      { name: 'JavaScript', icon: 'javascript', color: 'F7DF1E' },
      { name: 'Tailwind', icon: 'tailwindcss', color: '06B6D4' }
    ],
    gradient: 'from-blue-600/20 via-cyan-600/10 to-transparent',
    colSpan: 'md:col-span-7'
  },
  {
    title: 'Backend',
    description: 'Desenvolvimento de APIs robustas e gerenciamento de servidores escaláveis com testes rigorosos.',
    icon: Server,
    techs: [
      { name: 'Node.js', icon: 'nodedotjs', color: '339933' },
      { name: 'PostgreSQL', icon: 'postgresql', color: '4169E1' },
      { name: 'Supabase', icon: 'supabase', color: '3ECF8E' },
      { name: 'Postman', icon: 'postman', color: 'FF6C37' },
      { name: 'Firebase', icon: 'firebase', color: 'FFCA28' }
    ],
    gradient: 'from-emerald-600/20 via-teal-600/10 to-transparent',
    colSpan: 'md:col-span-5'
  },
  {
    title: 'Automação & Dados',
    description: 'Processamento de grandes volumes de dados e criação de dashboards inteligentes para tomada de decisão.',
    icon: Zap,
    techs: [
      { name: 'Python', icon: 'python', color: '3776AB' },
      { name: 'Pandas', icon: 'pandas', color: '150458' },
      { name: 'NumPy', icon: 'numpy', color: '013243' },
      { name: 'Power BI', icon: 'microsoftpowerbi', color: 'F2C811' },
      { name: 'ETL Pipelines', icon: 'python', color: '3776AB' }
    ],
    gradient: 'from-purple-600/20 via-indigo-600/10 to-transparent',
    colSpan: 'md:col-span-5'
  },
  {
    title: 'DevOps',
    description: 'Padronização de ambientes de desenvolvimento e automação de deploy contínuo em nuvem.',
    icon: Terminal,
    techs: [
      { name: 'Docker', icon: 'docker', color: '2496ED' },
      { name: 'Git', icon: 'git', color: 'F05032' },
      { name: 'Vercel', icon: 'vercel', color: 'FFFFFF' },
      { name: 'GitHub Actions', icon: 'githubactions', color: '2088FF' },
      { name: 'Linux', icon: 'linux', color: 'FCC624' }
    ],
    gradient: 'from-orange-600/20 via-amber-600/10 to-transparent',
    colSpan: 'md:col-span-7'
  }
];

export default function TechStack() {
  return (
    <section id="tech" className="py-32 px-8 bg-stone-950/20 relative overflow-hidden">
      {/* Soft Bottom Gradient to transition back to black */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />

      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white font-headline tracking-tighter leading-tight">
              Ferramentas & <span className="bg-gradient-to-r from-stone-100 via-stone-400 to-stone-600 bg-clip-text text-transparent opacity-90 italic">Especialidades.</span>
            </h2>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {techGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`${group.colSpan} group relative overflow-hidden rounded-[2.5rem] bg-stone-900/40 backdrop-blur-xl border border-white/5 hover:border-white/10 transition-all duration-500 p-8 flex flex-col justify-between min-h-[260px]`}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${group.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500">
                  <group.icon size={24} />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{group.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed max-w-sm font-medium">
                  {group.description}
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap gap-3 mt-8">
                {group.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2.5 px-4 py-2 bg-black/50 rounded-full border border-white/5 group-hover:border-white/10 transition-colors"
                  >
                    <img
                      src={
                        tech.name === 'CSS3'
                          ? 'https://img.icons8.com/color/48/css3.png'
                          : tech.name === 'Power BI'
                            ? 'https://img.icons8.com/color/48/power-bi.png'
                            : `https://cdn.simpleicons.org/${tech.icon}/${tech.color}`
                      }
                      alt={tech.name}
                      className="w-4 h-4 grayscale group-hover:grayscale-0 transition-all"
                    />
                    <span className="text-[10px] font-bold text-stone-400 group-hover:text-white uppercase tracking-widest">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subtle Divider for next section */}
        <div className="mt-32 w-full h-px bg-gradient-to-r from-transparent via-stone-800 to-transparent relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-stone-800 border border-stone-700" />
        </div>
      </div>
    </section>
  );
}
