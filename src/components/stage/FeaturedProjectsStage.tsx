'use client';

import { useRef, useEffect, useState } from 'react';
import { featuredProjects } from '@/data/featuredProjects';
import { ProjectCard } from './ProjectCard';
import { useProjectStageAnimation } from '@/hooks/useProjectStageAnimation';
import { motion, useScroll, useTransform } from 'framer-motion';

export const FeaturedProjectsStage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { cardsRef } = useProjectStageAnimation(containerRef);

  // Scroll tracking for active card state
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

  // Update active index based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      const step = 1 / featuredProjects.length;
      const index = Math.min(
        Math.floor(latest / step),
        featuredProjects.length - 1
      );
      setActiveIndex(index);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  if (isMobile) {
    return (
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Featured <span className="text-[#00f3ff]">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A selection of my most impactful work, ranging from AI-driven dashboards to complex commerce engines.
            </p>
          </motion.div>

          <div className="space-y-12">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <ProjectCard project={project} isActive={true} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={containerRef} 
      className="relative bg-black overflow-hidden h-screen flex flex-col items-center justify-center"
    >
      {/* Background Text / Accents */}
      <div className="absolute top-12 left-12 opacity-5 select-none pointer-events-none">
        <h2 className="text-[12rem] font-black text-white leading-none">PROJECTS</h2>
      </div>

      <div className="relative w-full h-full flex items-center justify-center px-8">
        {featuredProjects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="absolute w-full max-w-6xl"
          >
            <ProjectCard 
              project={project} 
              isActive={activeIndex === index} 
            />
          </div>
        ))}
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-12 flex gap-3 z-50">
        {featuredProjects.map((_, index) => (
          <div
            key={index}
            className={`h-1 transition-all duration-500 rounded-full ${
              activeIndex === index ? 'w-12 bg-[#00f3ff]' : 'w-4 bg-white/20'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
