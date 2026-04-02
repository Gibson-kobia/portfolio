'use client';

import { motion } from 'framer-motion';

export default function AvailabilityIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
      className="flex items-center gap-2 px-3 py-1.5 bg-black/40 backdrop-blur-sm border border-white/10 rounded-md hover:bg-black/60 hover:border-white/20 transition-all duration-300"
    >
      {/* Live status dot */}
      <motion.div
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="w-2 h-2 bg-accent rounded-full"
      />

      {/* Text */}
      <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
        OPEN FOR SELECT PROJECTS
      </span>
    </motion.div>
  );
}