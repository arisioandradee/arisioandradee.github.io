import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Code, Terminal, Briefcase, User } from 'lucide-react';

export default function Projects() {
  const [category, setCategory] = useState<'pessoal' | 'empresarial'>('pessoal');

  const projects = [
    {
      title: 'Melhor Lead',
      description: 'Sistema inteligente de prospecção e validação de leads, desenvolvido para otimizar a busca por clientes potenciais a partir de dados oficiais e confiáveis da Receita Federal.\n\nA plataforma integra múltiplas APIs especializadas — como Assertiva, Asaas e Casa dos Dados — permitindo a coleta, enriquecimento e verificação de informações empresariais em escala nacional. Com isso, o sistema é capaz de identificar leads qualificados, fornecendo dados atualizados como CNPJ, razão social, situação cadastral e contatos validados.\n\nAlém da coleta de dados, o Melhor Lead foi projetado para garantir maior assertividade nas estratégias comerciais, reduzindo retrabalho e aumentando a eficiência na prospecção. A aplicação possibilita centralizar informações relevantes em um único ambiente, facilitando a análise e tomada de decisão.\n\nO projeto também contempla integração entre front-end e back-end, organização de dados e automação de processos, demonstrando na prática habilidades em consumo de APIs, manipulação de dados e desenvolvimento de soluções voltadas para o mercado.',
      tags: ['RECEITA FEDERAL', 'ASSERTIVA', 'ASAAS', 'API'],
      colSpan: 'md:col-span-6',
      category: 'empresarial',
      isPrivate: true
    },
    {
      title: 'Dibai Academy',
      description: 'Landing page desenvolvida com foco na captação de novos alunos para a Dibai Academy, com estrutura voltada para conversão e apresentação clara dos serviços oferecidos.\n\nA página foi projetada seguindo boas práticas de design e experienciar do usuário, organizando informações de forma estratégica para despertar interesse e incentivar o contato. Conta com seções como apresentação institucional, benefícios, propostas de valor e chamadas para ação (CTAs), direcionando o visitante ao próximo passo no funil de vendas.\n\nO projeto demonstra habilidades em desenvolvimento front-end, estruturação de layout responsivo e criação de interfaces voltadas para objetivos comerciais, utilizando HTML, CSS e conceitos de design moderno.',
      tags: ['WEB', 'CAPTAÇÃO', 'CONVERSÃO', 'MARKETING'],
      colSpan: 'md:col-span-6',
      category: 'empresarial',
      isPrivate: true
    },
    {
      title: 'Central Dibai Sales',
      description: 'Plataforma web centralizada para gestão e automação de processos comerciais, com foco na validação de dados e otimização da operação de vendas.\n\nA aplicação foi desenvolvida para reunir, em um único ambiente, diferentes ferramentas de validação e enriquecimento de informações, permitindo maior agilidade e organização no fluxo comercial. Com isso, é possível reduzir tarefas manuais e aumentar a eficiência na análise de leads.\n\nNo back-end, foi utilizada uma arquitetura baseada em microserviços com FastAPI, aliada a processamento assíncrono para garantir rapidez nas requisições e validações em tempo real. A integração com serviços externos permite centralizar dados e automatizar etapas importantes do processo de vendas.\n\nO projeto demonstra habilidades em desenvolvimento de APIs, integração de sistemas, processamento assíncrono e construção de soluções escaláveis voltadas para o contexto comercial.',
      tags: ['FASTAPI', 'IA', 'VALIDADORES', 'ASYNC'],
      colSpan: 'md:col-span-6',
      category: 'empresarial',
      isPrivate: true
    },
    {
      title: 'Dibai P.A.',
      description: 'Sistema web desenvolvido para o gerenciamento de PAs operacionais, com foco no acompanhamento de métricas e análise de performance em tempo real.\n\nA plataforma permite visualizar e organizar dados operacionais de forma centralizada, facilitando o monitoramento de indicadores importantes e apoiando a tomada de decisões. A interface foi pensada para oferecer clareza nas informações e agilidade no uso diário.\n\nA aplicação foi construída seguindo uma arquitetura modular, aplicando boas práticas de desenvolvimento para garantir escalabilidade, organização do código e facilidade de manutenção. O sistema também foi otimizado para lidar com processamento de dados de forma eficiente, assegurando respostas rápidas mesmo com maior volume de informações.\n\nO projeto demonstra habilidades em desenvolvimento de sistemas web, organização de arquitetura, manipulação de dados e construção de soluções voltadas para cenários reais de operação.',
      tags: ['MÉTRICAS', 'DADOS', 'REAL-TIME'],
      colSpan: 'md:col-span-6',
      category: 'empresarial',
      isPrivate: true
    },
    {
      title: 'Nutr.IA',
      description: 'Aplicação web desenvolvida para geração de planos alimentares personalizados utilizando inteligência artificial, com base no modelo Gemini.\n\nA plataforma permite criar dietas adaptadas a diferentes perfis e objetivos, organizando informações de forma clara e prática para o usuário. O sistema considera variáveis como preferências, restrições e metas, buscando gerar sugestões coerentes e aplicáveis no dia a dia.\n\nA solução utiliza técnicas de engenharia de prompt para obter respostas mais precisas dos modelos de linguagem, aliadas à validação de dados nutricionais por meio de APIs externas, garantindo maior consistência nas informações geradas.\n\nO projeto demonstra habilidades no uso de inteligência artificial aplicada, integração com APIs, manipulação de dados e desenvolvimento de soluções voltadas para personalização de conteúdo.',
      tags: ['GEMINI', 'AI', 'PROMPT ENGINE'],
      github: 'https://github.com/arisioandradee/nutria-diet-planner',
      colSpan: 'md:col-span-6',
      category: 'pessoal'
    },
    {
      title: 'AutoStore Hub',
      description: 'Aplicação web desenvolvida como projeto prático para uma loja de veículos, com o objetivo de simular uma solução moderna de presença digital e gestão de estoque.\n\nA plataforma foi construída com foco em design moderno e estratégias de conversão, utilizando chamadas para ação (CTAs) bem posicionadas. Além da interface pública, o sistema conta com um catálogo integrado onde funcionários podem gerenciar veículos disponíveis.\n\nUm dos diferenciais é a integração com WhatsApp, permitindo que o cliente envie uma mensagem personalizada diretamente sobre um veículo específico, agilizando o atendimento e a conversão.\n\nO projeto demonstra habilidades em sistemas dinâmicos, integração com banco de dados e construção de interfaces voltadas para experiência do usuário.',
      tags: ['WEB', 'WHATSAPP', 'DB', 'CONVERSÃO'],
      colSpan: 'md:col-span-6',
      category: 'pessoal',
      isPrivate: true,
      privateLabel: 'Projeto pessoal privado'
    },
    {
      title: 'HelpDesk',
      description: 'Aplicação full-stack desenvolvida para gerenciamento de chamados de suporte técnico, com foco na organização, acompanhamento e resolução de solicitações.\n\nA plataforma permite o controle completo dos chamados, organizando informações como status, prioridade e histórico de interações. A interface foi pensada para facilitar o fluxo de atendimento e melhorar a comunicação entre usuários e equipe.\n\nNo back-end, foi utilizado Spring Boot para construção de uma API robusta, enquanto o front-end utiliza Angular com Signals para gerenciamento de estado reativo, proporcionando atualizações dinâmicas e melhor experiência em tempo real.',
      tags: ['SPRING BOOT', 'ANGULAR', 'SIGNALS'],
      github: 'https://github.com/arisioandradee/helpdesk-project',
      colSpan: 'md:col-span-6',
      category: 'pessoal'
    },
    {
      title: 'Sistema de Aprendizagem',
      description: 'Plataforma web interativa desenvolvida para conectar estudantes e professores, permitindo a criação e acesso a cursos práticos de forma organizada e acessível.\n\nA aplicação possibilita o gerenciamento de conteúdos educacionais, facilitando a distribuição de materiais, acompanhamento de atividades e interação entre os usuários. A estrutura foi pensada para oferecer uma navegação simples e intuitiva.\n\nO sistema foi desenvolvido com uma arquitetura modular, aplicando boas práticas para garantir organização, escalabilidade e facilidade de manutenção.',
      tags: ['WEB', 'EDUCAÇÃO', 'MODULAR'],
      github: 'https://github.com/arisioandradee/sistema-aprendizagem',
      colSpan: 'md:col-span-6',
      category: 'pessoal'
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
          className="grid grid-cols-1 md:grid-cols-12 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`${project.colSpan} flex flex-col group relative overflow-hidden rounded-[2.5rem] bg-stone-900 transition-all duration-500 hover:shadow-2xl hover:shadow-stone-900/50 border border-stone-800 p-2`}
              >
                {project.image && (
                  <div className="bg-black rounded-[2rem] overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-80"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                )}
                
                <div className="p-8 pt-6 flex flex-col h-full">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-stone-800 text-stone-400 text-[10px] font-bold px-3 py-1 rounded-full tracking-wider border border-stone-700 uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-headline text-3xl font-bold text-white mb-3 tracking-tight group-hover:text-stone-300 transition-colors">{project.title}</h3>
                  <p className="text-stone-400 mb-8 max-w-xl text-base leading-relaxed font-medium whitespace-pre-line text-sm md:text-base">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    {project.isPrivate ? (
                      <div className="flex-1 flex items-center justify-center gap-2 bg-stone-800 text-stone-500 py-4 rounded-2xl font-bold cursor-default border border-stone-700/50">
                        <Briefcase size={18} />
                        {project.privateLabel || 'Projeto Empresarial'}
                      </div>
                    ) : (
                      <>
                        <a href={project.github || "#"} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-white text-black py-4 rounded-2xl font-bold hover:bg-stone-200 transition-all shadow-lg">
                          <Eye size={18} />
                          Ver Projeto
                        </a>
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-stone-800 text-stone-400 rounded-2xl hover:bg-stone-700 transition-colors">
                            <Code size={20} />
                          </a>
                        )}
                      </>
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
