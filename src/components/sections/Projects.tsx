'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, GitCommit, Layout, Users } from 'lucide-react';
import ProjectCard from '@/components/ui/ProjectCard';
import { projects } from '@/data/projects';

interface GitHubStats {
  stars: number;
  commits: number;
  repos: number;
  followers: number;
}

export default function Projects() {
  const [githubStats, setGithubStats] = useState<GitHubStats | null>(null);

  useEffect(() => {
    fetch('/api/github')
      .then((res) => res.json())
      .then((data) => setGithubStats(data))
      .catch((err) => console.error(err));
  }, []);

  const stats = [
    { label: 'GitHub Stars', value: githubStats?.stars || 0, icon: <Star className="text-accent" /> },
    { label: 'Recent Commits', value: githubStats?.commits || 0, icon: <GitCommit className="text-accent" /> },
    { label: 'Public Repos', value: githubStats?.repos || 0, icon: <Layout className="text-accent" /> },
    { label: 'Followers', value: githubStats?.followers || 0, icon: <Users className="text-accent" /> },
  ];

  return (
    <section id="projects" className="max-w-7xl mx-auto py-24 px-6 md:px-12 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase">
          FEATURED <span className="neon-text">PROJECTS</span>
        </h2>
        <p className="max-w-2xl text-muted-foreground text-lg md:text-xl">
          A selection of my recent work, ranging from complex dashboards to high-performance e-commerce platforms.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      {/* GitHub Stats */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        className="glass-card p-12 border-accent/10"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase">GitHub <span className="neon-text">Metrics</span></h3>
            <p className="text-muted-foreground max-w-sm">
              Live data from my open-source contributions and personal repositories.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center gap-2">
                <div className="p-3 bg-accent/10 rounded-xl mb-2">{stat.icon}</div>
                <span className="text-3xl font-black text-white">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
