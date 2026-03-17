'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const socials = [
  { icon: <Github size={20} />, href: 'https://github.com', label: 'GitHub' },
  { icon: <Linkedin size={20} />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <Twitter size={20} />, href: 'https://twitter.com', label: 'Twitter' },
  { icon: <Mail size={20} />, href: 'mailto:hello@solobuilder.dev', label: 'Email' },
];

export default function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 1 }}
      className="fixed left-6 bottom-0 z-50 hidden md:flex flex-col items-center gap-6 after:content-[''] after:w-[1px] after:h-24 after:bg-white/20 after:mt-4"
    >
      {socials.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          whileHover={{ y: -5, color: '#00f3ff', scale: 1.2 }}
          className="text-muted-foreground transition-colors p-2"
        >
          {social.icon}
        </motion.a>
      ))}
    </motion.div>
  );
}
