'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface HUDRadarProps {
  color?: string;
  opacity?: number;
  size?: number;
}

export const HUDRadar: React.FC<HUDRadarProps> = ({ 
  color = '#4FFAFF', 
  opacity = 0.6,
  size = 300 
}) => {
  return (
    <div 
      className="absolute bottom-10 right-10 pointer-events-none z-20 flex items-center justify-center mix-blend-screen"
      style={{ width: size, height: size, opacity }}
    >
      <svg width={size} height={size} viewBox="0 0 300 300" className="absolute inset-0">
        <defs>
          <radialGradient id="radarGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={color} stopOpacity="0.2" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer Glow */}
        <circle cx="150" cy="150" r="140" fill="url(#radarGlow)" />

        {/* Concentric Circles */}
        <circle cx="150" cy="150" r="140" fill="none" stroke={color} strokeWidth="1" strokeOpacity="0.2" />
        <circle cx="150" cy="150" r="100" fill="none" stroke={color} strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 6" />
        <circle cx="150" cy="150" r="60" fill="none" stroke={color} strokeWidth="1" strokeOpacity="0.4" />
        <circle cx="150" cy="150" r="20" fill="none" stroke={color} strokeWidth="2" strokeOpacity="0.6" />

        {/* Crosshair */}
        <line x1="150" y1="0" x2="150" y2="300" stroke={color} strokeWidth="1" strokeOpacity="0.2" />
        <line x1="0" y1="150" x2="300" y2="150" stroke={color} strokeWidth="1" strokeOpacity="0.2" />
        
        {/* Inner Crosshair Details */}
        <line x1="150" y1="140" x2="150" y2="160" stroke={color} strokeWidth="1" strokeOpacity="0.8" />
        <line x1="140" y1="150" x2="160" y2="150" stroke={color} strokeWidth="1" strokeOpacity="0.8" />

        {/* Tick Marks */}
        <g stroke={color} strokeWidth="2" strokeOpacity="0.5">
          <line x1="150" y1="10" x2="150" y2="20" />
          <line x1="150" y1="280" x2="150" y2="290" />
          <line x1="10" y1="150" x2="20" y2="150" />
          <line x1="280" y1="150" x2="290" y2="150" />
        </g>
      </svg>

      {/* Rotating Scan Ring */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 4, ease: "linear", repeat: Infinity }}
      >
        <svg width={size} height={size} viewBox="0 0 300 300">
          <defs>
            <linearGradient id="scanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.8" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path 
            d="M 150 150 L 150 10 A 140 140 0 0 1 249 51 Z" 
            fill="url(#scanGradient)" 
          />
        </svg>
      </motion.div>

      {/* Animated Pulse */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center rounded-full border border-cyan-400"
        initial={{ width: 40, height: 40, opacity: 0.8 }}
        animate={{ width: size, height: size, opacity: 0 }}
        transition={{ duration: 2, ease: "easeOut", repeat: Infinity, repeatDelay: 1 }}
      />
    </div>
  );
};
