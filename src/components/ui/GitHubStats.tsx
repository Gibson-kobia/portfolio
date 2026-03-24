'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, GitCommit, Layout, Users } from 'lucide-react';

interface GitHubStatsData {
  stars: number;
  commits: number;
  repos: number;
  followers: number;
}

export default function GitHubStats() {
  const [stats, setStats] = useState<GitHubStatsData | null>(null);

  useEffect(() => {
    fetch('/api/github')
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error('Failed to fetch GitHub stats:', err));
  }, []);

  const statItems = [
    { label: 'Global Stars', value: stats?.stars || 0, icon: <Star size={16} /> },
    { label: 'Annual Commits', value: stats?.commits || 0, icon: <GitCommit size={16} /> },
    { label: 'Open Source', value: stats?.repos || 0, icon: <Layout size={16} /> },
    { label: 'Collaborators', value: stats?.followers || 0, icon: <Users size={16} /> },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
      {statItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="flex flex-col items-center md:items-start gap-3"
        >
          <div className="flex items-center gap-3 text-accent">
            {item.icon}
            <span className="text-2xl font-black tracking-tighter">
              {item.value}
            </span>
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
            {item.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
