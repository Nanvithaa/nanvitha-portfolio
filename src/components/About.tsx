import React from 'react';
import { motion } from 'motion/react';
import { Section } from './Section';
import { GraduationCap, MapPin, Briefcase, Code } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 relative group"
          >
            <div className="aspect-square rounded-full overflow-hidden glass p-2 border-white/10 glow-primary relative z-10">
              <img
                src="/Headshot.png"
                alt="Nanvitha Challa"
                className="w-full h-full object-cover object-[center_20%] rounded-full transition-all duration-700 group-hover:scale-105"
              />
            </div>
            {/* Decorative background glow */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl -z-10 group-hover:bg-primary/30 transition-colors" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Building the <span className="text-gradient">Intelligent</span> Future
            </h2>
            <p className="text-xl text-slate-200 mb-6 leading-relaxed font-medium">
              I’m Nanvitha Challa, a Software Engineer focused on full-stack development, AI/ML, and LLM-powered applications.
            </p>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              At the TRICS Lab, I develop research-focused web platforms and AI systems that help transform transportation, disaster-risk, and infrastructure data into usable tools for researchers and administrators. My current work includes building full-stack web applications, integrating LLMs trained on curated research data, and developing an LLM-powered assistant for the SPTC (Southern Plains Transportation Center) Report Management System to support report review, feedback, and knowledge discovery.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-lg text-slate-300 leading-relaxed">
            I enjoy turning complex technical ideas into clean, reliable, and user-friendly applications. To learn more about how I build and contribute through technology, take a look at my professional experience and projects they reflect the problems I’ve solved, the systems I’ve created, and the impact I hope to keep building.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed italic border-l-2 border-primary/30 pl-6 py-2 bg-white/5 pr-6 rounded-r-xl max-w-4xl">
            When I’m not building systems or debugging something that “worked yesterday,” you’ll probably find me reading fiction and thriller novels. If you have a book that made you forget sleep, question everyone, or stare at the wall after the ending please send it my way.🤗
          </p>
        </motion.div>
      </div>
    </Section>
  );
};
