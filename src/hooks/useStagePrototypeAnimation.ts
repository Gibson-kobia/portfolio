'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useStagePrototypeAnimation = (containerRef: React.RefObject<HTMLDivElement | null>) => {
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
        yPercent: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${totalCards * 150}%`, // Longer scroll distance for smoother motion
          pin: true,
          scrub: 1.5, // Slightly higher scrub for momentum feel
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, index) => {
        if (index === 0) {
          // Outgoing logic for first card
          tl.to(card, {
            xPercent: 130, // Move RIGHT
            yPercent: 20,  // Slightly DOWN
            scale: 0.8,    // Scale down
            opacity: 0,    // Fade out
            rotate: 5,     // Slight rotation on impact
            duration: 1.5,
            ease: 'power2.inOut',
          }, 0.5); // Start after some scrolling
          return;
        }

        // Incoming logic for subsequent cards
        const startTime = index * 1.5;

        // Curved/Wavy Entry from LEFT
        tl.fromTo(card, 
          { 
            xPercent: -150, 
            yPercent: -15, // Start slightly higher for curve
            opacity: 0, 
            scale: 0.8, 
            rotate: -8 
          },
          {
            xPercent: 0,
            yPercent: 0,
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 2,
            ease: 'elastic.out(1, 0.8)', // Spring-like settle
          }, 
          startTime - 0.5 // Overlap with previous outgoing card
        );

        // Outgoing logic for current card (except the last one)
        if (index < totalCards - 1) {
          tl.to(card, {
            xPercent: 130,
            yPercent: 20,
            scale: 0.8,
            opacity: 0,
            rotate: 5,
            duration: 1.5,
            ease: 'power2.inOut',
          }, startTime + 1.5);
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);

  return { cardsRef };
};
