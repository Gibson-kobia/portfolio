'use client';

import { useRef, useEffect, useState } from 'react';
import { useStagePrototypeAnimation } from '@/hooks/useStagePrototypeAnimation';
import { motion, useScroll } from 'framer-motion';

const placeholderCards = [
  { id: 'A', label: 'PROJECT A', accent: '#00f3ff' },
  { id: 'B', label: 'PROJECT B', accent: '#00d1ff' },
  { id: 'C', label: 'PROJECT C', accent: '#33ffda' },
];

export const ProjectStagePrototype = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { cardsRef } = useStagePrototypeAnimation(containerRef);

  // Scroll tracking for active index
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
      const step = 1 / placeholderCards.length;
      const index = Math.min(
        Math.floor(latest / (step * 1.5)), // Adjust for total timeline duration
        placeholderCards.length - 1
      );
      setActiveIndex(index);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  if (isMobile) {
    return (
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto space-y-12">
          {placeholderCards.map((card) => (
            <div
              key={card.id}
              className="w-full aspect-video rounded-3xl bg-[#121212] border border-white/5 flex items-center justify-center shadow-xl"
            >
              <span className="text-4xl font-black text-white/10">{card.label}</span>
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
      {/* Background Frame / Grid (Subtle Stage Frame) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="relative w-full h-full flex items-center justify-center px-8">
        {placeholderCards.map((card, index) => (
          <div
            key={card.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`absolute w-[80vw] max-w-5xl aspect-video rounded-3xl bg-[#121212] border border-white/10 shadow-2xl transition-all duration-700 flex items-center justify-center overflow-hidden ${
              activeIndex === index 
                ? 'z-50 border-white/20 shadow-[0_0_80px_rgba(0,243,255,0.05)]' 
                : 'z-0 border-white/5 opacity-50 scale-95 grayscale'
            }`}
          >
            {/* Minimal Placeholder Content */}
            <div className="relative z-10 text-center">
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white opacity-20">
                {card.label}
              </h2>
            </div>

            {/* Subtle Accent Glow for ACTIVE card only */}
            {activeIndex === index && (
              <div 
                className="absolute inset-0 opacity-[0.15] blur-[120px] pointer-events-none"
                style={{ 
                  background: `radial-gradient(circle at center, ${card.accent}, transparent 70%)` 
                }}
              />
            )}

            {/* Stage Bezel / Depth Effect */}
            <div className="absolute inset-0 border-[2px] border-white/5 rounded-3xl pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Progress Dots (Optional but helpful for prototype) */}
      <div className="absolute bottom-16 flex gap-4 z-[100]">
        {placeholderCards.map((_, index) => (
          <div
            key={index}
            className={`h-1 transition-all duration-500 rounded-full ${
              activeIndex === index ? 'w-16 bg-[#00f3ff]' : 'w-4 bg-white/10'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
