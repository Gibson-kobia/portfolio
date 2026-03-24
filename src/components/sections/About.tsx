'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Award, Zap, Target, Users } from 'lucide-react';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const stats = [
    { label: 'Years Depth', value: '08', icon: <Award size={20} /> },
    { label: 'Products Launched', value: '24', icon: <Zap size={20} /> },
    { label: 'System Uptime', value: '99.9', icon: <Target size={20} /> },
    { label: 'Global Users', value: '2M+', icon: <Users size={20} /> },
  ];

  return (
    <section ref={containerRef} id="about" className="relative py-32 px-6 md:px-12 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Text Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-accent font-mono text-xs uppercase tracking-[0.4em] mb-6 block">
                The Philosophy
              </span>
              <h2 className="text-4xl md:text-7xl font-black mb-12 uppercase tracking-tighter leading-none">
                Bridging the gap between <span className="text-transparent border-text stroke-white/20">Aesthetics</span> and <span className="text-accent">Architecture</span>.
              </h2>
              
              <div className="space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
                <p>
                  I don&apos;t just build websites; I engineer digital products that demand attention. 
                  My approach combines the precision of high-performance backend systems 
                  with the cinematic elegance of modern frontend motion design.
                </p>
                <p>
                  Every pixel is intentional, every interaction is weighted, and every line of code 
                  is optimized for scale. I specialize in turning complex technical requirements 
                  into seamless, high-impact user experiences.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="lg:col-span-5 relative">
            <motion.div style={{ y }} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="glass-card p-10 flex flex-col items-start gap-6 border-white/5 hover:border-accent/30 transition-colors group"
                >
                  <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-accent/10 group-hover:text-accent transition-all">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-black mb-1 flex items-baseline gap-1">
                      {stat.value}
                      <span className="text-accent text-sm font-bold uppercase tracking-tighter">Metric</span>
                    </div>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-bold">
                      {stat.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Background Accent */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 blur-[120px] rounded-full" />
          </div>

        </div>
      </div>
    </section>
  );
}
