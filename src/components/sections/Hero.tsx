'use client';

import { useRef } from 'react';
import dynamic from 'next/dynamic';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDownRight, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';

const ParticlesBackground = dynamic(() => import('@/components/ui/ParticlesBackground'), {
  ssr: false,
});

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const socials = [
    { icon: <Github size={20} />, href: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <Mail size={20} />, href: 'mailto:hello@solobuilder.dev', label: 'Email' },
  ];

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      <ParticlesBackground />
      
      {/* Social Links - Vertical on Desktop */}
      <div className="fixed left-8 bottom-0 z-50 hidden md:flex flex-col items-center gap-8 after:content-[''] after:w-[1px] after:h-32 after:bg-white/10 after:mt-4">
        {socials.map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            whileHover={{ y: -5, color: '#00f3ff', scale: 1.1 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 + index * 0.1, duration: 0.8 }}
            className="text-muted-foreground transition-colors p-1"
          >
            {social.icon}
          </motion.a>
        ))}
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="text-accent font-mono tracking-[0.4em] uppercase text-xs md:text-sm font-bold inline-block mb-4 border-b border-accent/20 pb-2">
            Independent Software Architect
          </span>
          <h1 className="text-6xl md:text-9xl font-black mb-8 uppercase tracking-tighter leading-[0.85]">
            GIBSON <br />
            <span className="text-transparent border-text stroke-white/20">KOBIA</span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-3xl text-muted-foreground mb-12 font-medium"
        >
          Crafting{' '}
          <TypeAnimation
            sequence={[
              'Scalable Architectures',
              2000,
              'Immersive Interfaces',
              2000,
              'Interactive Products',
              2000,
              'High-Performance UI/UX',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-foreground font-bold border-b-2 border-accent"
          />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-muted-foreground mb-12 text-lg md:text-xl leading-relaxed font-medium"
        >
          Specializing in high-end digital products that combine 
          cinematic motion design with production-grade engineering.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-center justify-center gap-8"
        >
          <MagneticButton
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-5 bg-accent text-accent-foreground font-black text-xs uppercase tracking-widest rounded-full hover:shadow-[0_0_30px_rgba(0,243,255,0.3)] transition-all flex items-center gap-3 group"
          >
            Explore Stage <ArrowDownRight size={16} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
          </MagneticButton>
          
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-5 border border-white/10 text-white font-black text-xs uppercase tracking-widest rounded-full hover:bg-white/5 transition-all"
          >
            Connect Now
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">Scroll to Enter</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
}
