import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  Clock,
  ChevronDown,
  Download
} from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

export default function About() {
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

  const skillsData = [
    { subject: 'Back-end', A: 90, fullMark: 100 },
    { subject: 'Front-end', A: 65, fullMark: 100 },
    { subject: 'Dados', A: 85, fullMark: 100 },
    { subject: 'Automação', A: 95, fullMark: 100 },
    { subject: 'IA', A: 60, fullMark: 100 },
    { subject: 'DevOps', A: 75, fullMark: 100 },
  ];

  const journeyItems = [
    {
      type: 'exp',
      title: 'Estagiário Full Stack',
      subtitle: 'Dibai Sales',
      period: 'OUT DE 2025 - PRESENTE',
      location: 'Remota',
      duration: '5 meses',
      description: 'Como Estagiário Full Stack na Dibai Sales, atuo no ciclo completo de desenvolvimento de software, desde a criação de landing pages modernas com HTML e CSS até o desenvolvimento de ferramentas internas e soluções para o time de vendas. Utilizo Python para criar automações robustas e processamento de dados, transformando demandas operacionais em ferramentas tecnológicas que otimizam a performance comercial.'
    },
    {
      type: 'exp',
      title: 'Assessor',
      subtitle: 'Câmara Municipal de Morada Nova',
      period: 'MAR DE 2025 - PRESENTE',
      location: 'Morada Nova, Ceará',
      duration: '1 ano',
      description: 'Atuo de forma multidisciplinar, combinando análise de dados, administração e criatividade. Sou responsável pelo controle de planilhas e dashboards no Power BI, organização de documentos e criação de ofícios institucionais. Além disso, participo da gestão de mídias e produção de artes, garantindo uma comunicação visual clara e eficiente para a Câmara Municipal.'
    },
    {
      type: 'edu',
      title: 'Bacharel em Sistemas de Informação',
      subtitle: 'Universidade Federal do Ceará (UFC)',
      period: '2021 - 2023',
      location: 'Quixadá, Ceará',
      description: 'Período cursado na Universidade Federal do Ceará, focado em fundamentos sólidos de computação e sistemas, antes de realizar a transferência externa para continuidade dos estudos em outra instituição.'
    },
    {
      type: 'exp',
      title: 'Assistente administrativo',
      subtitle: 'Hiper Morada Nova',
      period: 'ABR DE 2024 - MAR DE 2025',
      location: 'Morada Nova, Ceará',
      duration: '1 ano',
      description: 'Atuou como Assistente Administrativo, onde tive a oportunidade de unir processos administrativos tradicionais com soluções de Tecnologia da Informação. Fui responsável por modernizar fluxos internos, gerenciar inventários digitais e carregar a infraestrutura tecnológica para as demandas operacionais.'
    },
    {
      type: 'exp',
      title: 'Estagiário de TI',
      subtitle: 'Alvoar Lácteos',
      period: 'JUL DE 2020 - DEZ DE 2020',
      location: 'Morada Nova, Ceará',
      duration: '5 meses',
      description: 'Iniciei minha trajetória técnica na Alvoar Lácteos, focando no suporte a sistemas e infraestrutura. Desenvolvi habilidades práticas na resolução de incidentes tecnológicos, manutenção de hardware e software, e apoio aos usuários, garantindo a continuidade operacional das ferramentas de TI.'
    },
    {
      type: 'edu',
      title: 'Técnico em Redes de Computadores',
      subtitle: 'EEEP Osmira Eduardo de Castro',
      period: '2018 - 2020',
      location: 'Morada Nova, Ceará',
      description: 'Formação como Técnico em Redes de Computadores, onde adquiri conhecimentos essenciais em infraestrutura de TI, protocolos de comunicação, configuração de servidores e segurança de redes. Foi o ponto de partida para minha carreira na computação.'
    }
  ];

  function TimelineItem({ item, isLeft }: { item: any, isLeft: boolean }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const isEdu = item.type === 'edu';

    return (
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`relative flex items-center justify-between mb-20 px-4 sm:px-0 w-full ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'}`}
      >
        {/* Timeline Line (Center) */}
        <div className="absolute left-[24px] md:left-1/2 md:-translate-x-1/2 w-px h-[calc(100%+80px)] bg-stone-200 group-last:hidden" />
        
        {/* Marker */}
        <div className={`absolute left-[5px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-2xl flex items-center justify-center border-2 border-white shadow-xl z-20 transition-all duration-500 hover:scale-125 ${isEdu ? 'bg-stone-50 text-stone-500' : 'bg-stone-900 text-white'}`}>
           {isEdu ? <GraduationCap size={20} /> : <Briefcase size={20} />}
        </div>

        {/* Content Card (Half width on desktop) */}
        <div className={`w-full md:w-[42%] flex flex-col pl-14 md:pl-0 ${isLeft ? 'md:text-right md:items-end' : 'md:text-left md:items-start'}`}>
          {/* Card Wrapper */}
          <div className={`w-full bg-stone-50 hover:bg-white p-8 rounded-[2.5rem] border transition-all duration-700 hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] flex flex-col gap-6 ${isEdu ? 'border-stone-200' : 'border-stone-900/10'}`}>
            <div className={`flex flex-col gap-4 ${isLeft ? 'md:items-end' : 'md:items-start'}`}>
              <div className={`shrink-0 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border ${isEdu ? 'bg-white text-stone-500 border-stone-200 shadow-sm' : 'bg-stone-900 text-white border-stone-800 shadow-lg'}`}>
                {item.period}
              </div>
              
              <div className="space-y-1">
                <h3 className="text-2xl font-headline font-black text-stone-900 tracking-tight">
                  {item.title}
                </h3>
                <p className={`text-sm font-bold uppercase tracking-widest ${isEdu ? 'text-stone-400' : 'text-stone-600'}`}>
                  {item.subtitle}
                </p>
              </div>
            </div>

            <div className={`flex flex-wrap gap-4 text-xs font-bold text-stone-400 ${isLeft ? 'md:justify-end' : 'md:justify-start'} items-center w-full`}>
               <span className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-stone-100/80 shadow-sm">
                 <MapPin size={14} className="text-stone-300" /> {item.location}
               </span>
               <button 
                 onClick={() => setIsExpanded(!isExpanded)}
                 className={`flex items-center gap-2 px-4 py-1.5 rounded-lg border transition-all duration-300 text-[10px] font-black uppercase tracking-widest ${isExpanded ? 'bg-stone-900 text-white border-stone-800' : 'bg-white text-stone-900 border-stone-200 hover:bg-stone-100 active:scale-95 shadow-sm'}`}
               >
                 <ChevronDown size={14} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                 {isExpanded ? 'Fechar atividades' : 'Ver atividades'}
               </button>
            </div>

            <AnimatePresence>
              {isExpanded && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className={`mt-2 p-6 rounded-3xl bg-stone-100/30 border border-stone-200/50 relative ${isLeft ? 'md:text-right text-stone-600' : 'md:text-left text-stone-600'}`}>
                    <p className="text-sm leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Empty space for the other side on desktop */}
        <div className="hidden md:block w-[42%]" />
      </motion.div>
    );
  }

  return (
    <section id="about" className="py-32 bg-surface-off-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <header className="mb-32 text-center max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-headline font-bold tracking-[0.4em] text-stone-400 uppercase">Jornada</span>
          <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tighter text-stone-900 leading-none">
            Minha <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-900 to-stone-500 transition-all duration-700 hover:from-stone-500 hover:to-stone-900">Jornada</span>
          </h2>
          <p className="text-stone-500 text-lg font-medium leading-relaxed">
            Explorando as fronteiras entre dados, desenvolvimento e inovação através de uma trajetória de aprendizado contínuo.
          </p>
        </header>

        <div className="max-w-6xl mx-auto relative px-0 md:px-10">
          <div className="relative">
            {journeyItems.map((item, idx) => (
              <TimelineItem 
                key={`${item.title}-${idx}`} 
                item={item} 
                isLeft={idx % 2 === 0}
              />
            ))}
          </div>
        </div>


        <div className="mt-32 p-px bg-stone-200"></div>

        <div className="mt-20 flex flex-col items-center text-center">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6 text-stone-900 tracking-tighter">
            Quer conhecer mais da minha <br />
            <span className="text-stone-500 italic">Trajetória</span>?
          </h2>
          <p className="text-stone-500 mb-12 max-w-md font-medium text-lg">
            Você pode baixar a versão completa do meu currículo para conferir todos os detalhes técnicos e acadêmicos.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Profile.pdf"
            download
            className="group flex items-center gap-3 bg-stone-900 px-12 py-5 rounded-[2rem] font-bold hover:shadow-2xl transition-all text-white text-lg"
          >
            <Download size={20} />
            Baixar Currículo
          </motion.a>
        </div>
      </div>
    </section>
  );
}
