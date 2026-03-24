'use client';

import { useRef, useEffect, useState } from 'react';
import { featuredProjects } from '@/data/featuredProjects';
import { usePerformanceStageAnimation } from '@/hooks/usePerformanceStageAnimation';
import { motion, useScroll } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

export const ProjectPerformanceStage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { cardsRef, glowRef } = usePerformanceStageAnimation(containerRef);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      const step = 1 / featuredProjects.length;
      const index = Math.min(
        Math.floor(latest / (step * 1.5)), 
        featuredProjects.length - 1
      );
      setActiveIndex(index);
    });
    return () => unsubscribe();
  }, [scrollYProgress, featuredProjects.length]);

  if (isMobile) {
    return (
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto space-y-24">
          {featuredProjects.map((project) => (
            <div key={project.id} className="flex flex-col gap-8">
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </div>
              <div>
                <span className="text-xs font-mono tracking-[0.3em] uppercase mb-2 block" style={{ color: project.accentTheme }}>{project.tagline}</span>
                <h3 className="text-4xl font-black text-white mb-4 uppercase">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 text-[10px] font-bold bg-white/5 border border-white/10 rounded-full text-white/60">{t}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-black font-bold rounded-full text-sm">Demo</a>
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/5 text-white font-bold rounded-full text-sm border border-white/10">Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={containerRef} 
      className="relative bg-[#080808] overflow-hidden h-screen flex flex-col items-center justify-center"
    >
      {/* Spotlight Glow */}
      <div 
        ref={glowRef}
        className="absolute inset-0 opacity-0 pointer-events-none select-none"
        style={{ 
          background: `radial-gradient(circle at center, ${featuredProjects[activeIndex]?.accentTheme}, transparent 65%)`,
          filter: 'blur(120px)'
        }}
      />

      {/* Technical Stage Backdrop */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative w-full h-full flex items-center justify-center">
        {featuredProjects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`absolute w-[85vw] max-w-6xl aspect-[16/9] rounded-[3.5rem] bg-[#121212] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.9)] overflow-hidden transition-all duration-1000 ${
              activeIndex === index 
                ? 'z-50 opacity-100' 
                : 'z-0 opacity-0 scale-90 grayscale pointer-events-none'
            }`}
          >
            <div className="flex h-full">
              {/* Visual Preview Area */}
              <div className="relative w-1/2 h-full overflow-hidden group">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-transparent to-transparent" />
                
                {/* Active Indicator Overlay */}
                <div className="absolute top-8 left-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: project.accentTheme }} />
                    <span className="text-[10px] font-mono tracking-[0.4em] text-white/40 uppercase">Featured Reveal 0{index + 1}</span>
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="w-1/2 p-16 flex flex-col justify-center relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={activeIndex === index ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  <span 
                    className="text-[10px] font-mono tracking-[0.5em] uppercase mb-4 block font-bold"
                    style={{ color: project.accentTheme }}
                  >
                    {project.tagline}
                  </span>
                  <h3 className="text-6xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
                    {project.title.split(' ').map((word, i) => (
                      <span key={i} className="block">{word}</span>
                    ))}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-12">
                    {project.tech.map((tag) => (
                      <span 
                        key={tag}
                        className="px-4 py-1.5 text-[10px] font-bold rounded-full bg-white/5 border border-white/10 text-gray-300 uppercase tracking-widest"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-4 mb-12">
                    {project.keyHighlights.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-4 text-sm text-gray-400">
                        <ChevronRight className="w-4 h-4 flex-shrink-0" style={{ color: project.accentTheme }} />
                        <span className="font-medium tracking-wide">{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-6">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-white text-black font-black text-xs uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-transform"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-white/5 border border-white/10 text-white font-black text-xs uppercase tracking-[0.2em] rounded-full hover:bg-white/10 transition-all"
                    >
                      Source Code
                    </a>
                  </div>
                </motion.div>

                {/* Performance Backdrop Label */}
                <div className="absolute bottom-8 right-12 opacity-[0.03] select-none pointer-events-none">
                  <span className="text-9xl font-black">{index + 1}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stage Footer Status */}
      <div className="absolute bottom-12 w-full flex justify-between px-20 items-center z-[100]">
        <div className="flex flex-col">
          <span className="text-[10px] font-mono tracking-[0.4em] text-white/20 uppercase mb-3">Showcase Navigation</span>
          <div className="flex gap-3">
            {featuredProjects.map((_, index) => (
              <div
                key={index}
                className={`h-[2px] transition-all duration-700 rounded-full ${
                  activeIndex === index ? 'w-24 bg-white' : 'w-6 bg-white/10'
                }`}
              />
            ))}
          </div>
        </div>
        
        <div className="text-right">
          <span className="text-[10px] font-mono tracking-[0.4em] text-white/20 uppercase block mb-1">Current Performance</span>
          <span className="text-sm font-black text-white/60 tracking-widest uppercase">
            {featuredProjects[activeIndex]?.title}
          </span>
        </div>
      </div>
    </section>
  );
};
