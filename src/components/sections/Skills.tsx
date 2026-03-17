'use client';

import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Framer, 
  Layout, 
  Layers, 
  Server, 
  Smartphone, 
  Terminal, 
  Wind, 
  Zap,
  Globe,
  Cpu
} from 'lucide-react';

const skills = [
  { name: 'React / Next.js', icon: <Code2 className="text-accent" />, level: 'Expert' },
  { name: 'TypeScript', icon: <Terminal className="text-accent" />, level: 'Advanced' },
  { name: 'Tailwind CSS', icon: <Wind className="text-accent" />, level: 'Expert' },
  { name: 'Framer Motion', icon: <Framer className="text-accent" />, level: 'Advanced' },
  { name: 'Node.js / Express', icon: <Server className="text-accent" />, level: 'Advanced' },
  { name: 'PostgreSQL / MongoDB', icon: <Database className="text-accent" />, level: 'Intermediate' },
  { name: 'Three.js / WebGL', icon: <Zap className="text-accent" />, level: 'Intermediate' },
  { name: 'Redux / Zustand', icon: <Layers className="text-accent" />, level: 'Advanced' },
  { name: 'Responsive Design', icon: <Smartphone className="text-accent" />, level: 'Expert' },
  { name: 'UI/UX Design', icon: <Layout className="text-accent" />, level: 'Advanced' },
  { name: 'API Design', icon: <Globe className="text-accent" />, level: 'Advanced' },
  { name: 'Performance Optimization', icon: <Cpu className="text-accent" />, level: 'Expert' },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <section id="skills" className="max-w-7xl mx-auto py-24 px-6 md:px-12 bg-muted/5">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase">
          MY <span className="neon-text">SKILLS</span>
        </h2>
        <p className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl">
          I&apos;ve mastered a diverse set of technologies to build modern, high-performance web applications.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            className="glass-card p-6 flex flex-col items-center justify-center text-center gap-4 group cursor-default"
          >
            <div className="p-4 bg-accent/10 rounded-2xl group-hover:bg-accent/20 transition-colors">
              {skill.icon}
            </div>
            <h3 className="text-lg font-bold group-hover:text-accent transition-colors">
              {skill.name}
            </h3>
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              {skill.level}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
