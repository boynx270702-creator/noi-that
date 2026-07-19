'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface FlowLinesProps {
  color?: string;
  opacity?: number;
}

export const FlowLines: React.FC<FlowLinesProps> = ({ 
  color = '#4FFAFF', 
  opacity = 0.1 
}) => {
  return (
    <div 
      className="absolute inset-0 pointer-events-none z-10 overflow-hidden mix-blend-screen"
      style={{ opacity }}
    >
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          d="M -10 50 C 20 20, 80 80, 110 50"
          fill="none"
          stroke={color}
          strokeWidth="0.1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", repeatType: "reverse" }}
        />
        <motion.path
          d="M -10 30 C 30 70, 70 10, 110 60"
          fill="none"
          stroke={color}
          strokeWidth="0.1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", repeatType: "reverse", delay: 2 }}
        />
        <motion.path
          d="M -10 80 C 40 40, 60 90, 110 20"
          fill="none"
          stroke={color}
          strokeWidth="0.05"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.8 }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", repeatType: "reverse", delay: 5 }}
        />
      </svg>
    </div>
  );
};
