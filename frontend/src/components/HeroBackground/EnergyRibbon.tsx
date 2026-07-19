'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface EnergyRibbonProps {
  color?: string;
  opacity?: number;
}

export const EnergyRibbon: React.FC<EnergyRibbonProps> = ({ 
  color = '#27D6FF', 
  opacity = 0.8 
}) => {
  return (
    <div 
      className="absolute bottom-0 left-0 w-full h-[200px] pointer-events-none z-30 mix-blend-screen overflow-hidden"
      style={{ opacity }}
    >
      <svg 
        viewBox="0 0 1440 200" 
        preserveAspectRatio="none" 
        className="w-full h-full drop-shadow-[0_0_15px_rgba(39,214,255,0.8)]"
      >
        <defs>
          <linearGradient id="ribbonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor={color} />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* Path 1: Fast moving */}
        <motion.path
          d="M-200,100 C100,20 300,180 600,100 C900,20 1100,180 1400,100 C1700,20 1900,180 2200,100"
          fill="none"
          stroke="url(#ribbonGradient)"
          strokeWidth="2"
          initial={{ x: -760 }}
          animate={{ x: 0 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        {/* Path 2: Medium moving, higher amplitude */}
        <motion.path
          d="M-200,120 C150,200 250,0 700,120 C1150,240 1250,0 1600,120 C1950,240 2050,0 2400,120"
          fill="none"
          stroke="url(#ribbonGradient)"
          strokeWidth="1.5"
          opacity="0.6"
          initial={{ x: -800 }}
          animate={{ x: 0 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />

        {/* Path 3: Slow moving, dash array animation */}
        <motion.path
          d="M0,150 C400,100 800,200 1440,150"
          fill="none"
          stroke={color}
          strokeWidth="1"
          strokeDasharray="10 20"
          opacity="0.4"
          animate={{ strokeDashoffset: [0, -300] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
};
