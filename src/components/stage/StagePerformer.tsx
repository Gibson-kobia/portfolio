'use client';

import React from 'react';
import { motion } from 'framer-motion';

const StagePerformer = () => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative z-20 w-[45vw] max-w-[900px] min-w-[320px] max-h-[72vh] aspect-[16/9] rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.45)] overflow-hidden"
      style={{ minHeight: '280px' }}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 rounded-3xl pointer-events-none"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-900/40 to-slate-950/70" />
      <div className="absolute inset-0 border-[1px] border-white/10 rounded-3xl pointer-events-none" />
      <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-400/10 px-3 py-1 text-[11px] uppercase tracking-widest text-cyan-200">
            Featured Project
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">Volthub</h2>
          <p className="max-w-lg text-sm md:text-base text-slate-200/90">
            Modern gadget ecommerce with a sharper retail-tech identity.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-slate-100">Sleek product previews</span>
            <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-slate-100">Conversion-first flow</span>
          </div>
        </div>

        <div className="flex gap-3">
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-cyan-300/35 bg-cyan-500/20 px-4 py-2 text-xs font-semibold text-cyan-200 transition hover:bg-cyan-500/40 hover:text-white"
            aria-label="Visit Volthub live site"
          >
            Live
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-white/90 transition hover:bg-white/20"
            aria-label="View Volthub source code"
          >
            Source
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default StagePerformer;
