'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const usePerformanceStageAnimation = (containerRef: React.RefObject<HTMLDivElement | null>) => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const glowRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!containerRef.current || cardsRef.current.length === 0) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter((card): card is HTMLDivElement => !!card);
      const totalCards = cards.length;

      // Initial state: all cards off-screen above
      gsap.set(cards, {
        yPercent: -120,
        opacity: 0,
        scale: 0.9,
        rotate: -5,
      });

      // Main ScrollTrigger Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${totalCards * 200}%`,
          pin: true,
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, index) => {
        const startTime = index * 2;

        // 1. Entry Animation (FROM TOP)
        tl.to(card, {
          yPercent: 0,
          opacity: 1,
          rotate: 0,
          scale: 1,
          duration: 1.5,
          ease: 'power3.out',
        }, startTime);

        // 2. Impact (Landing on Stage)
        // Squash
        tl.to(card, {
          scaleY: 0.95,
          scaleX: 1.05,
          duration: 0.2,
          ease: 'power2.out',
        }, startTime + 1.2);

        // Bounce back and Settle
        tl.to(card, {
          scaleY: 1,
          scaleX: 1,
          duration: 0.8,
          ease: 'elastic.out(1, 0.6)',
        }, startTime + 1.4);

        // 3. Spotlight/Glow Activation
        if (glowRef.current) {
          tl.fromTo(glowRef.current, 
            { opacity: 0, scale: 0.5 },
            { opacity: 0.2, scale: 1, duration: 1, ease: 'power2.out' },
            startTime + 1.2
          );
        }

        // 4. Idle Motion (Performance State)
        // Note: Using separate infinite animation for idle to avoid breaking timeline flow
        // but here we can add a small "active" range in the scroll timeline too
        tl.to(card, {
          y: '-=15', // Float
          rotate: 1,  // Subtle swing
          duration: 1,
          ease: 'sine.inOut',
        }, startTime + 2);

        // 5. Takeover / Transition (Displace to RIGHT)
        if (index < totalCards - 1) {
          tl.to(card, {
            xPercent: 120,
            yPercent: 10,
            scale: 0.9,
            opacity: 0,
            rotate: 5,
            duration: 1.5,
            ease: 'power2.inOut',
          }, startTime + 2.5);
        }
      });

      // Add infinite idle animation for the currently active card
      // This is handled by a separate function that monitors active state
      // or simply added as a CSS class or local state animation.
      // For this prototype, we'll use a GSAP set to handle basic idle motion
      // triggered when a card is in the center.
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);

  return { cardsRef, glowRef };
};
