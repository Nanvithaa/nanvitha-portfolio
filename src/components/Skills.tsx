import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Section } from './Section';
import { 
  Cpu, 
  Layers, 
  Database, 
  Cloud, 
  Binary,
  Zap,
  ChevronRight,
  Target
} from 'lucide-react';

const SKILL_DATA = [
  {
    id: 'ai',
    title: 'AI / ML / NLP',
    shortTitle: 'AI / ML',
    icon: <Cpu className="w-5 h-5" />,
    applied: 'SEFR AI Assistant, Local RAG System, Disaster Risk NLP Pipeline',
    skills: ['Python', 'LangChain', 'ChromaDB', 'Transformers', 'LLM Systems', 'Computer Vision', 'TensorFlow', 'PyTorch', 'SBERT'],
    previewSkills: ['Python', 'LangChain', 'LLMs'],
    color: 'from-cyan-400 to-blue-500',
    glow: 'rgba(34, 211, 238, 0.5)',
    angle: -90 // Top
  },
  {
    id: 'web',
    title: 'Full Stack Development',
    shortTitle: 'Full Stack',
    icon: <Layers className="w-5 h-5" />,
    applied: 'Internship Management System, SEO Reports SaaS, Portfolio Website',
    skills: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Flask', 'Java', 'REST APIs', 'SQL'],
    previewSkills: ['React', 'Next.js', 'Node.js'],
    color: 'from-blue-400 to-indigo-500',
    glow: 'rgba(59, 130, 246, 0.5)',
    angle: -18 // Top Right-ish
  },
  {
    id: 'data',
    title: 'Data & Geospatial Systems',
    shortTitle: 'Data Systems',
    icon: <Database className="w-5 h-5" />,
    applied: 'SEFR Flood Simulation, Risk Narrative Portal, Geospatial Dashboards',
    skills: ['PostgreSQL', 'MongoDB', 'Azure Data Factory', 'Geospatial Analytics', 'OpenStreetMap', 'Graph Analysis'],
    previewSkills: ['PostgreSQL', 'Geospatial', 'Azure'],
    color: 'from-teal-400 to-emerald-500',
    glow: 'rgba(20, 184, 166, 0.5)',
    angle: 54 // Bottom Right-ish
  },
  {
    id: 'cloud',
    title: 'Cloud / DevOps / Tooling',
    shortTitle: 'Cloud/DevOps',
    icon: <Cloud className="w-5 h-5" />,
    applied: 'Deployment workflows, CI/CD pipelines, API testing, observability',
    skills: ['Git', 'GitHub', 'CI/CD', 'Postman', 'Caddy', 'Azure', 'Docker', 'Observability'],
    previewSkills: ['Git', 'Docker', 'Azure'],
    color: 'from-sky-400 to-cyan-500',
    glow: 'rgba(56, 189, 248, 0.5)',
    angle: 126 // Bottom Left-ish
  },
  {
    id: 'eng',
    title: 'Engineering Foundations',
    shortTitle: 'Foundations',
    icon: <Binary className="w-5 h-5" />,
    applied: 'Scalable backend systems, algorithms, distributed workflows',
    skills: ['Data Structures', 'Algorithms', 'Distributed Systems', 'Microservices', 'SDLC', 'Testing/Automation', 'Design Patterns'],
    previewSkills: ['DSA', 'Systems', 'Patterns'],
    color: 'from-indigo-400 to-purple-500',
    glow: 'rgba(129, 140, 248, 0.5)',
    angle: 198 // Top Left-ish
  }
];

const ConnectionLine = ({ angle, isActive, color }: { angle: number, isActive: boolean, color: string, key?: string }) => {
  const length = 160;
  const x2 = Math.cos((angle * Math.PI) / 180) * length;
  const y2 = Math.sin((angle * Math.PI) / 180) * length;

  return (
    <svg className="absolute overflow-visible pointer-events-none" width="1" height="1">
      <motion.line
        x1="0"
        y1="0"
        x2={x2}
        y2={y2}
        stroke={isActive ? "currentColor" : "rgba(255,255,255,0.05)"}
        strokeWidth={isActive ? "2" : "1"}
        className={isActive ? `text-primary` : ""}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      />
      {isActive && (
        <motion.circle
          cx={x2}
          cy={y2}
          r="3"
          fill="currentColor"
          className="text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </svg>
  );
};

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(SKILL_DATA[0].id);

  const activeData = SKILL_DATA.find(c => c.id === activeCategory) || SKILL_DATA[0];

  return (
    <Section id="skills" className="overflow-visible py-24">
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 tracking-tight">
              Technical <span className="text-gradient">Universe</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              A connected map of the tools, systems, and engineering foundations I use to build intelligent, scalable products.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
        {/* Constellation Side */}
        <div className="relative aspect-square flex items-center justify-center order-2 lg:order-1">
          {/* Background Elements */}
          <div className="absolute inset-0 flex items-center justify-center" />

          {/* Connection Lines */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {SKILL_DATA.map((cat) => (
              <ConnectionLine 
                key={`line-${cat.id}`} 
                angle={cat.angle} 
                isActive={activeCategory === cat.id}
                color={cat.color}
              />
            ))}
          </div>

          {/* Central Hub */}
          <motion.div 
            className="relative z-30 group"
            animate={{ scale: [0.98, 1.02, 0.98] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full glass border-2 border-primary/20 flex flex-col items-center justify-center text-center p-4 relative glow-primary">
              <Zap className="text-primary mb-2" size={28} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white leading-tight">
                Full-Stack<br/>AI Engineer
              </span>
              
              {/* Pulsing rings */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping opacity-20" />
            </div>
          </motion.div>

          {/* Skill Nodes */}
          {SKILL_DATA.map((cat) => {
            const isActive = activeCategory === cat.id;
            const radius = 170; // Adjust for spacing
            const x = Math.cos((cat.angle * Math.PI) / 180) * radius;
            const y = Math.sin((cat.angle * Math.PI) / 180) * radius;

            return (
              <motion.div
                key={cat.id}
                className="absolute z-40"
                style={{ x, y }}
                initial={false}
                animate={{ scale: isActive ? 1.1 : 1 }}
              >
                <button
                  onClick={() => setActiveCategory(cat.id)}
                  className={`group relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full glass border-2 transition-all duration-500 ${
                    isActive ? `border-transparent bg-gradient-to-br ${cat.color} shadow-[0_0_25px_${cat.glow}]` : 'border-white/10 hover:border-primary/50'
                  }`}
                >
                  <div className={`transition-colors duration-500 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-primary'}`}>
                    {cat.icon}
                  </div>

                  {/* Title Label */}
                  <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-bold uppercase tracking-widest transition-all duration-500 ${
                    isActive ? 'text-primary' : 'text-slate-500'
                  }`}>
                    {cat.shortTitle}
                  </div>

                  {/* Preview Skill Chips (Visual noise filler) */}
                  {!isActive && (
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                      {cat.previewSkills.map((s, idx) => (
                        <div 
                          key={s} 
                          className="absolute text-[8px] text-primary/60 font-bold whitespace-nowrap"
                          style={{
                            top: `${50 + Math.sin(idx * 2) * 50}%`,
                            left: `${50 + Math.cos(idx * 2) * 50}%`,
                          }}
                        >
                          {s}
                        </div>
                      ))}
                    </div>
                  )}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Detail Side */}
        <div className="order-1 lg:order-2 h-full flex flex-col justify-center px-4 md:px-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="glass p-8 md:p-12 rounded-[2.5rem] border-primary/20 glow-primary relative overflow-hidden h-full group"
            >

              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${activeData.color} text-white shadow-lg`}>
                    {activeData.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-1">Sub-System {activeData.id.toUpperCase()}</div>
                    <h3 className="text-3xl md:text-5xl font-display font-bold leading-tight">{activeData.title}</h3>
                  </div>
                </div>

                <div className="mb-12 glass border-white/5 p-6 rounded-2xl">
                  <div className="flex items-center gap-2 mb-4">
                    <Target size={14} className="text-primary" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Deployed In Production</span>
                  </div>
                  <p className="text-lg md:text-xl text-slate-200 font-medium leading-relaxed italic border-l-2 border-primary/30 pl-4">
                    "{activeData.applied}"
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {activeData.skills.map((skill, i) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="group/skill"
                    >
                      <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/5 text-sm font-semibold text-slate-300 group-hover/skill:bg-primary/10 group-hover/skill:text-primary group-hover/skill:border-primary/20 transition-all">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover/skill:bg-primary group-hover/skill:scale-125 transition-all" />
                        {skill}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer Metadata */}
                <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-6 items-center">
                  <div className="flex flex-col">
                    <span className="text-[8px] uppercase tracking-widest text-slate-500 mb-1">Architecture</span>
                    <span className="text-xs font-mono text-slate-300">Distributed Microservices</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] uppercase tracking-widest text-slate-500 mb-1">Optimized For</span>
                    <span className="text-xs font-mono text-slate-300">Performance & Scalability</span>
                  </div>

                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Adaptation */}
      <div className="lg:hidden mt-20 px-4">
         <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar">
           {SKILL_DATA.map(cat => (
             <button
               key={`mob-${cat.id}`}
               onClick={() => setActiveCategory(cat.id)}
               className={`flex-shrink-0 px-6 py-4 rounded-2xl glass border transition-all ${
                 activeCategory === cat.id ? 'border-primary bg-primary/10' : 'border-white/5'
               }`}
             >
               <div className="flex items-center gap-3">
                 <div className={activeCategory === cat.id ? 'text-primary' : 'text-slate-400'}>
                   {cat.icon}
                 </div>
                 <span className={`text-xs font-bold uppercase tracking-widest ${
                   activeCategory === cat.id ? 'text-white' : 'text-slate-500'
                 }`}>
                   {cat.shortTitle}
                 </span>
               </div>
             </button>
           ))}
         </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[50%] bg-gradient-to-t from-primary/5 to-transparent -z-10 pointer-events-none" />
    </Section>
  );
};
