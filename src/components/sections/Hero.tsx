'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import ParticlesBackground from '@/components/ui/ParticlesBackground';
import MagneticButton from '@/components/ui/MagneticButton';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4"
      >
        <motion.p
          variants={itemVariants}
          className="text-accent font-mono tracking-widest uppercase mb-4 text-sm md:text-base"
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-8xl font-black mb-6"
        >
          SOLO <span className="neon-text">BUILDER</span>
        </motion.h1>
        
        <motion.div
          variants={itemVariants}
          className="text-xl md:text-3xl text-muted-foreground mb-12 h-12"
        >
          <TypeAnimation
            sequence={[
              'Full-Stack Developer',
              2000,
              'UI/UX Designer',
              2000,
              'Problem Solver',
              2000,
              'Creative Coder',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="inline-block"
          />
        </motion.div>
        
        <motion.p
          variants={itemVariants}
          className="max-w-xl mx-auto text-muted-foreground mb-12 text-lg md:text-xl leading-relaxed"
        >
          Building scalable digital products with high-performance UI/UX and polished motion design.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-center gap-6">
          <MagneticButton
            onClick={scrollToProjects}
            className="px-8 py-4 bg-accent text-accent-foreground font-bold rounded-full hover:bg-accent/90 transition-all"
          >
            View Projects
          </MagneticButton>
          
          <MagneticButton
            onClick={() => document.getElementById('contact')?.scrollIntoView()}
            className="px-8 py-4 border border-accent text-accent font-bold rounded-full hover:bg-accent/10 transition-all"
          >
            Say Hello
          </MagneticButton>
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hidden md:block"
      >
        <ChevronDown size={32} className="opacity-50" />
      </motion.div>
    </section>
  );
}
