'use client';

import React from 'react';
import { motion } from "framer-motion";
import StagePropsLeft from './StagePropsLeft';
import StagePropsRight from './StagePropsRight';
import StageBeacon from './StageBeacon';
import StagePerformer from './StagePerformer';

const ProjectsStageShell = () => {
  return (
    <section
      id="projects"
      className="relative w-full h-screen overflow-hidden bg-gray-900 isolate"
    >
      {/* Stage Backdrop & Lighting */}
      <div className="absolute inset-0 w-full h-full bg-[#0A0A0A]" />
      {/* Center Spotlight */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(29,78,216,0.12),transparent_70%)]"
        />
      </motion.div>
      {/* Edge Illumination */}
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[rgba(29,78,216,0.04)] to-transparent opacity-40" />
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[rgba(29,78,216,0.04)] to-transparent opacity-40" />
      {/* Top Corner Haze */}
      <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-[radial-gradient(ellipse_at_top_left,rgba(29,78,216,0.08),transparent_80%)]" />
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-[radial-gradient(ellipse_at_top_right,rgba(29,78,216,0.08),transparent_80%)]" />

      {/* Peripheral Props */}
      <StagePropsLeft />
      <StagePropsRight />

      {/* Center Performance Zone (Reserved) */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <StageBeacon />
        <StagePerformer />
      </div>

      {/* Bottom Visual Separation - Fades to deep black to transition to next section */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      {/* Top Visual Separation - Fades to deep black to transition from previous section */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent pointer-events-none" />
    </section>
  );
};

export default ProjectsStageShell;
