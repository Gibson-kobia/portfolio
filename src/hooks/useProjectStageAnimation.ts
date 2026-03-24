'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useProjectStageAnimation = (containerRef: React.RefObject<HTMLDivElement | null>) => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    if (!containerRef.current || cardsRef.current.length === 0) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter((card): card is HTMLDivElement => !!card);
      const totalCards = cards.length;

      // Initial state: first card center, others off-screen left
      gsap.set(cards.slice(1), {
        xPercent: -150,
        opacity: 0,
        scale: 0.8,
        rotate: -10,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${totalCards * 100}%`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, index) => {
        if (index === 0) return; // Skip the first card as it's already centered

        const prevCard = cards[index - 1];

        // 1. Move previous card out (RIGHT + DOWN + SCALE DOWN)
        tl.to(prevCard, {
          xPercent: 120,
          yPercent: 15,
          scale: 0.85,
          opacity: 0.4,
          filter: 'blur(4px)',
          rotate: 5,
          duration: 1,
          ease: 'power2.inOut',
        }, index - 1);

        // 2. Move current card in (LEFT -> CENTER with CURVED/WAVY PATH)
        tl.fromTo(card, 
          { 
            xPercent: -150, 
            yPercent: -10, // Start slightly up for curved entry
            opacity: 0, 
            scale: 0.8, 
            rotate: -5 
          },
          {
            xPercent: 0,
            yPercent: 0,
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 1.2,
            ease: 'elastic.out(1, 0.75)', // Spring-like settle
          }, 
          index - 0.9 // Overlap slightly with previous card exit
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);

  return { cardsRef };
};
