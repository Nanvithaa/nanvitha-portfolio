import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, Github, Linkedin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-block"
        >
          <span className="px-4 py-2 rounded-full glass text-[10px] md:text-xs font-bold tracking-widest uppercase text-primary border border-primary/40 glow-primary">
            Open to Software Engineering, AI/ML, and Full Stack Roles
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight"
        >
          Nanvitha <span className="text-gradient">Challa</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Full Stack Developer and AI/ML Engineer building scalable web platforms, intelligent automation systems, and data-driven applications across product engineering, NLP, and cloud-backed analytics.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-primary rounded-xl font-semibold flex items-center gap-2 hover:bg-primary/80 transition-all glow-primary"
          >
            View Projects <ArrowRight size={18} />
          </a>
          <a
            href="https://drive.google.com/file/d/1JJ5DNrTSPp-iun84WQawSqD0dImkhA-X/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 glass rounded-xl font-semibold flex items-center gap-2 hover:bg-white/10 transition-all"
          >
            Resume <ExternalLink size={18} />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 glass rounded-xl font-semibold flex items-center gap-2 hover:bg-white/10 transition-all"
          >
            Contact
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex justify-center gap-8 text-slate-500"
        >
          <a href="https://github.com/Nanvithaa" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/nanvitha-challa/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
        </motion.div>
      </div>

      {/* Floating UI Elements (Decorative) */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-10 hidden lg:block"
      >
        <div className="glass p-4 rounded-2xl border-white/10 w-48 rotate-12 glow-secondary">
          <div className="h-2 w-12 bg-secondary/40 rounded-full mb-3" />
          <div className="h-1 w-full bg-white/10 rounded-full mb-2" />
          <div className="h-1 w-2/3 bg-white/10 rounded-full mb-2" />
          <div className="flex justify-between mt-4">
            <div className="h-4 w-4 rounded-full bg-primary/40" />
            <div className="h-4 w-4 rounded-full bg-secondary/40" />
            <div className="h-4 w-4 rounded-full bg-accent/40" />
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 left-10 hidden lg:block"
      >
        <div className="glass p-4 rounded-2xl border-white/10 w-56 -rotate-6 glow-primary">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold">AI</div>
            <div className="h-2 w-20 bg-white/10 rounded-full" />
          </div>
          <div className="space-y-2">
            <div className="h-1 w-full bg-white/5 rounded-full" />
            <div className="h-1 w-full bg-white/5 rounded-full" />
            <div className="h-1 w-4/5 bg-white/5 rounded-full" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
