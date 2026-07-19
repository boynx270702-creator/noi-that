'use client';
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

import { PerspectiveGrid } from './PerspectiveGrid';
import { HUDRadar } from './HUDRadar';
import { EnergyRibbon } from './EnergyRibbon';
import { Blueprint } from './Blueprint';
import { Particles } from './Particles';
import { Glow } from './Glow';
import { Noise } from './Noise';
import { FlowLines } from './FlowLines';

export const HeroBackground: React.FC = () => {
  // Layer 12: Mouse Interaction Setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement
  const smoothOptions = { damping: 50, stiffness: 400 };
  const smoothX = useSpring(mouseX, smoothOptions);
  const smoothY = useSpring(mouseY, smoothOptions);

  // Calculate parallax transforms
  // Rotate slightly around X and Y axis based on mouse position
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [2, -2]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-2, 2]);
  
  // Shift grid slightly
  const translateX = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const translateY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);

  // Handle global mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to -0.5 to 0.5
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#020b0d]">
      {/* Base Hero Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: "url('/images/image_hero.png')" }}
      />
      {/* Dark gradient overlay to blend image into the background below */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020b0d] via-transparent to-transparent opacity-90" />
      
      <Noise />
      <Glow />

      {/* 3D Parallax Container */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1000,
          transformStyle: "preserve-3d"
        }}
      >
        {/* Layer 03: Perspective Grid with 10px shift parallax */}
        <motion.div
          className="absolute inset-0"
          style={{ x: translateX, y: translateY }}
        >
          <PerspectiveGrid />
        </motion.div>

        {/* Other layers inside the parallax context but with less/no shift, 
            creating depth */}
        
        <FlowLines />
        <Blueprint />
        <Particles />
        <EnergyRibbon />
        
        {/* HUD element floating slightly in front */}
        <motion.div
          className="absolute inset-0"
          style={{ 
            x: useTransform(smoothX, [-0.5, 0.5], [-20, 20]),
            y: useTransform(smoothY, [-0.5, 0.5], [-20, 20])
          }}
        >
          <HUDRadar />
        </motion.div>
      </motion.div>

      {/* Cursor Glow Effect */}
      <CursorGlow mouseX={smoothX} mouseY={smoothY} />
    </div>
  );
};

// Extracted CursorGlow for cleanliness
const CursorGlow = ({ mouseX, mouseY }: { mouseX: any, mouseY: any }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Map normalized coordinates back to pixels
  const pxX = useTransform(mouseX, [-0.5, 0.5], [0, dimensions.width]);
  const pxY = useTransform(mouseY, [-0.5, 0.5], [0, dimensions.height]);
  
  const finalX = useTransform(pxX, x => x - 200);
  const finalY = useTransform(pxY, y => y - 200);

  if (dimensions.width === 0) return null;

  return (
    <motion.div
      className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full mix-blend-screen pointer-events-none blur-[100px]"
      style={{
        background: 'radial-gradient(circle, rgba(0, 200, 255, 0.15) 0%, rgba(0, 200, 255, 0) 70%)',
        x: finalX,
        y: finalY,
      }}
    />
  );
};
