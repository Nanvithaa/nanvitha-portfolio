import React from 'react';
import { motion } from 'motion/react';
import { Section } from './Section';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, ArrowUpRight, TrendingUp } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <Section id="projects">
      <div className="mb-20">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Featured <span className="text-gradient">Projects</span></h2>
        <p className="text-slate-300 max-w-2xl">A selection of my most impactful work, ranging from AI-native platforms to large-scale data systems.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {PROJECTS.filter(p => p.featured).map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group relative"
          >
            <div className="glass overflow-hidden rounded-3xl border-white/5 glow-primary hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
              {/* Media Preview Area */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-900/50">
                {project.videoUrl ? (
                  <video
                    src={project.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                  />
                ) : project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="h-full w-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-primary/20">
                    <TrendingUp size={48} />
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                
                <div className="absolute top-6 right-6 flex gap-3 z-10">
                  {project.github && (
                    <a href={project.github} className="p-2 rounded-full glass hover:bg-primary/20 text-white transition-colors">
                      <Github size={18} />
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} className="p-2 rounded-full glass hover:bg-primary/20 text-white transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-8 pt-2 flex flex-col flex-grow">
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">{project.description}</p>

                {project.metrics && (
                  <div className="space-y-2 mb-6">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-secondary">
                        <div className="h-1 w-1 rounded-full bg-secondary" />
                        {metric}
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold uppercase tracking-widest text-slate-400 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="text-primary" size={24} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Secondary Projects */}
      <div className="mt-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass overflow-hidden rounded-2xl border-white/5 glow-secondary hover:border-secondary/30 transition-all duration-300 flex flex-col"
            >
              {project.imageUrl && (
                <div className="h-32 w-full overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              )}
              <div className="p-6">
                <h4 className="font-display font-bold text-lg mb-3">{project.title}</h4>
                <p className="text-slate-400 text-xs mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-bold uppercase tracking-widest text-secondary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
