'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="relative w-full group glass-card overflow-hidden"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-60"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm p-6 flex flex-col justify-end"
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <span key={tech} className="text-[10px] md:text-xs font-mono uppercase bg-accent/20 text-accent px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold text-white hover:text-accent transition-colors"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold text-white hover:text-accent transition-colors"
            >
              <Github size={16} /> Source
            </a>
          </div>
        </motion.div>
      </div>

      <div className="p-6">
        <h3 className="text-xl md:text-2xl font-black mb-2 group-hover:text-accent transition-colors uppercase">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm md:text-base mb-6 leading-relaxed">
          {project.description}
        </p>
        
        <ul className="space-y-2">
          {project.keyHighlights.slice(0, 2).map((highlight, i) => (
            <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
              <CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 text-accent/10 font-black text-6xl md:text-8xl select-none pointer-events-none group-hover:text-accent/20 transition-colors">
        0{project.id}
      </div>
    </motion.div>
  );
}
