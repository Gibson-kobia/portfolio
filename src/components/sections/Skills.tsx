'use client';

import { motion } from 'framer-motion';
import { skillCategories } from '@/data/skills';
import { Terminal, Cpu, Layout, Layers, Globe, Server } from 'lucide-react';

const iconMap: { [key: string]: any } = {
  'Frontend Engineering': <Layout size={24} />,
  'Backend & Infrastructure': <Server size={24} />,
  'Experience Design': <Globe size={24} />,
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 md:px-12 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="text-accent font-mono text-xs uppercase tracking-[0.4em] mb-4 block">
            The Arsenal
          </span>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">
            Core <span className="text-transparent border-text stroke-white/20">Capabilities</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 1 }}
              className="glass-card p-12 border-white/5 flex flex-col group hover:border-accent/30 transition-all duration-500"
            >
              <div className="p-5 bg-white/5 rounded-2xl mb-8 group-hover:bg-accent/10 group-hover:text-accent transition-all w-fit">
                {iconMap[category.title] || <Cpu size={24} />}
              </div>
              
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">
                {category.title}
              </h3>
              
              <p className="text-muted-foreground mb-10 text-sm font-medium leading-relaxed">
                {category.description}
              </p>

              <div className="space-y-6 mt-auto">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className="text-xs font-black uppercase tracking-widest text-foreground/80">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-accent font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-[2px] w-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 + idx * 0.1 }}
                        className="h-full bg-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
