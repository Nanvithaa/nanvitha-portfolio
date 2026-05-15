import React from 'react';
import { motion } from 'motion/react';
import { Section } from './Section';
import { EDUCATION, CERTIFICATIONS } from '../constants';
import { GraduationCap, Award, MapPin, Calendar, Mail, Linkedin, Github, Send } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <Section id="education">
      <div className="grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12">Academic <span className="text-gradient">Foundations</span></h2>
          <div className="space-y-8">
            {EDUCATION.map((edu, index) => (
              <div key={edu.school} className="glass p-8 rounded-3xl border-white/5 glow-primary hover:border-primary/30 transition-all duration-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white">{edu.school}</h3>
                    <p className="text-primary font-medium">{edu.degree}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {edu.period}</span>
                  <span className="flex items-center gap-1"><MapPin size={14} /> {edu.location}</span>
                  <span className="flex items-center gap-1 font-bold text-secondary">GPA: {edu.gpa}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12">Professional <span className="text-gradient">Certifications</span></h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {CERTIFICATIONS.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass p-6 rounded-2xl border-white/5 glow-secondary hover:border-secondary/30 transition-all duration-300 flex items-center gap-3"
              >
                <Award className="text-secondary shrink-0" size={20} />
                <span className="text-xs font-semibold text-slate-300 leading-tight">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export const Contact: React.FC = () => {
  return (
    <Section id="contact" className="mb-24">
      <div className="glass p-12 md:p-20 rounded-[3rem] border-white/5 glow-primary relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] -z-10" />

        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight text-center">
            Let's Build Something <span className="text-gradient">Extraordinary</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed text-center">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            <a href="mailto:nanvithachalla03@gmail.com" className="flex items-center gap-4 text-lg text-slate-300 hover:text-primary transition-colors group">
              <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                <Mail size={24} />
              </div>
              <span className="hidden sm:inline">nanvithachalla03@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/nanvitha-challa/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg text-slate-300 hover:text-primary transition-colors group">
              <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                <Linkedin size={24} />
              </div>
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a href="https://github.com/Nanvithaa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg text-slate-300 hover:text-primary transition-colors group">
              <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                <Github size={24} />
              </div>
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 text-center">
      <p className="text-sm text-slate-400">
        © {new Date().getFullYear()} Nanvitha Challa. Crafted with passion & intelligence.
      </p>
    </footer>
  );
};
