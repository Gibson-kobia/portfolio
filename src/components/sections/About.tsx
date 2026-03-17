'use client';

import { motion } from 'framer-motion';

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
  };

  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '40+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Cups of Coffee', value: '∞' },
  ];

  return (
    <section id="about" className="max-w-7xl mx-auto py-24 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            ABOUT <span className="neon-text">ME</span>
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              I am a passionate Full-Stack Developer with a focus on creating immersive and high-performance digital experiences. 
              My journey in tech is driven by a desire to bridge the gap between complex engineering and elegant design.
            </p>
            <p>
              With over 5 years of experience, I&apos;ve worked on a wide range of projects, from scalable SaaS platforms to 
              interactive marketing sites. I thrive on challenges and am constantly exploring new technologies to push 
              the boundaries of what&apos;s possible on the web.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring the latest UI trends, experimenting with 3D web animations, 
              or contributing to open-source projects.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="grid grid-cols-2 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="glass-card p-8 flex flex-col items-center justify-center text-center border-accent/20 hover:border-accent/50 transition-colors"
            >
              <span className="text-4xl md:text-5xl font-black text-accent mb-2">{stat.value}</span>
              <span className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
