'use client';

import React from 'react';
import { motion } from "framer-motion";

const StageBeacon = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 2 }}
      className="absolute flex items-center justify-center top-1/2 -translate-y-1/2"
    >
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-3 h-3 rounded-full bg-cyan-400/70 shadow-[0_0_12px_rgba(0,255,255,0.5)]"
      />
    </motion.div>
  );
};

export default StageBeacon;
