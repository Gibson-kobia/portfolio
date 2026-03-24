'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { FeaturedProject } from '@/data/featuredProjects';
import { useRef, useState } from 'react';

interface ProjectCardProps {
  project: FeaturedProject;
  isActive?: boolean;
}

export const ProjectCard = ({ project, isActive = false }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isActive || !cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20; // Subtle tilt
    const rotateY = (centerX - x) / 20;
    
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4, // Wait for card to settle
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden bg-[#121212] border border-white/10 shadow-2xl transition-all duration-500 ${
        isActive ? 'z-50 shadow-[0_0_50px_rgba(0,243,255,0.1)]' : 'z-0'
      }`}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
    >
      <div className="flex flex-col md:flex-row h-full min-h-[500px]">
        {/* Left Side: Project Preview */}
        <div className="relative w-full md:w-[55%] h-64 md:h-auto overflow-hidden group">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-transparent to-transparent hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent md:hidden" />
          
          {/* Subtle Overlay Glow */}
          {isActive && (
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{ background: `radial-gradient(circle at center, ${project.accentTheme}, transparent 70%)` }}
            />
          )}
        </div>

        {/* Right Side: Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          className="w-full md:w-[45%] p-8 md:p-12 flex flex-col justify-center"
        >
          <motion.div variants={itemVariants} className="mb-2">
            <span 
              className="text-sm font-medium tracking-widest uppercase"
              style={{ color: project.accentTheme }}
            >
              {project.tagline}
            </span>
          </motion.div>

          <motion.h3 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            {project.title}
          </motion.h3>

          <motion.p 
            variants={itemVariants}
            className="text-gray-400 text-lg leading-relaxed mb-8"
          >
            {project.description}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-3 mb-10">
            {project.keyHighlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-gray-400">
                <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: project.accentTheme }} />
                <span>{highlight}</span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white text-black font-semibold flex items-center gap-2 hover:bg-opacity-90 transition-colors"
            >
              Live Demo <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-semibold flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              <Github className="w-4 h-4" /> Source
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
