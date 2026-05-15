import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Section } from './Section';
import { EXPERIENCES } from '../constants';
import { Calendar, MapPin, ChevronRight, RotateCcw } from 'lucide-react';
import { Experience as ExperienceType } from '../types';

const ExperienceCard: React.FC<{ exp: ExperienceType; index: number }> = ({ exp, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="perspective-1000 w-full min-h-[500px] cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-500 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden">
          <div className="glass-dark h-full rounded-[2.5rem] overflow-hidden border border-white/5 group-hover:border-primary/30 transition-colors duration-500 flex flex-col">
            {/* Video/Image Container */}
            <div className="relative h-64 w-full overflow-hidden bg-slate-900">
              {exp.videoUrl ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                  onError={(e) => {
                    const video = e.currentTarget;
                    video.style.display = 'none';
                    if (video.parentElement) {
                      video.parentElement.classList.add('bg-gradient-to-br', 'from-slate-800', 'to-slate-900');
                    }
                  }}
                >
                  <source src={exp.videoUrl} type="video/mp4" />
                </video>
              ) : exp.imageUrl ? (
                <img
                  src={exp.imageUrl}
                  alt={exp.company}
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 animate-pulse" />
                </div>
              )}
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              
              {/* Flip Hint */}
              <div className="absolute top-6 right-6 px-4 py-2 rounded-full glass border-white/10 text-[10px] uppercase tracking-widest font-bold text-primary flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Click to Flip</span>
                <ChevronRight size={14} />
              </div>
            </div>

            {/* Content Area */}
            <div className="p-8 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 leading-tight">
                  {exp.role} <span className="text-primary">—</span> {exp.company.split(',')[0]}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-slate-400 mb-6">
                  <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                    <Calendar size={14} className="text-primary" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                    <MapPin size={14} className="text-accent opacity-70" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <div className="space-y-3 opacity-60">
                {exp.highlights.slice(0, 3).map((h, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <p className="text-xs text-slate-400 line-clamp-1">{h}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 backface-hidden"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="glass h-full rounded-[2.5rem] border-primary/30 p-8 md:p-12 overflow-y-auto glow-primary relative flex flex-col bg-slate-900/40">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                  <RotateCcw size={18} />
                </div>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">Detailed Case Study</span>
              </div>
            </div>

            <h3 className="text-3xl font-display font-bold text-white mb-6 leading-tight border-b border-white/5 pb-6">
              Impact & <span className="text-gradient">Deliverables</span>
            </h3>

            <div className="space-y-6 text-slate-300">
              {exp.detailedHighlights?.map((text, i) => (
                <p key={i} className="text-sm md:text-base leading-relaxed">
                  {text}
                </p>
              )) || exp.highlights.map((text, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
                  <p className="text-sm md:text-base leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-8 flex items-center gap-2 text-primary/60 text-[10px] font-bold uppercase tracking-widest">
              <div className="w-4 h-[1px] bg-primary/30" />
              Click to return
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const Experience: React.FC = () => {
  return (
    <Section id="experience" className="relative">
      <div className="text-center mb-24">
        <div className="inline-block px-4 py-2 rounded-full glass border-white/5 mb-6">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Professional Timeline</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight">
          Career <span className="text-gradient">Matrix</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          A blueprint of the systems I’ve architected, the research I’ve led, and the professional impact generated across the computing landscape.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto px-4">
        {EXPERIENCES.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} index={index} />
        ))}
      </div>
    </Section>
  );
};


