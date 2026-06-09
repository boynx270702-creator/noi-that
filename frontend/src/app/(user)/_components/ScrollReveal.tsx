'use client';
import React from 'react';
import { motion, useInView } from 'framer-motion';

type ScrollRevealProps = {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right' | 'zoom-in';
  delay?: number; // Delay in milliseconds
  duration?: number; // Duration in milliseconds
  className?: string;
  threshold?: number;
  once?: boolean;
};

export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 800,
  className = '',
  threshold = 0.2,
  once = true,
}: ScrollRevealProps) {
  
  // Convert ms to seconds for framer-motion
  const delaySec = delay / 1000;
  const durationSec = duration / 1000;

  const getVariants = () => {
    switch (animation) {
      case 'fade-up':
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        };
      case 'fade-in':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
      case 'fade-left':
        return {
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 }
        };
      case 'fade-right':
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        };
      case 'zoom-in':
        return {
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1 }
        };
      default:
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        };
    }
  };

  return (
    <motion.div
      className={className}
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: once, margin: "0px 0px -50px 0px", amount: threshold }}
      transition={{
        duration: durationSec,
        delay: delaySec,
        type: "spring",
        bounce: 0.2, // Subtle bounce for a premium feel
        stiffness: 100,
        damping: 15
      }}
    >
      {children}
    </motion.div>
  );
}
