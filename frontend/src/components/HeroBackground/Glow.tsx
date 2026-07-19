'use client';
import React from 'react';

interface GlowProps {
  opacity?: number;
}

export const Glow: React.FC<GlowProps> = ({ opacity = 1 }) => {
  return (
    <div 
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity }}
    >
      {/* Layer 01: White radial gradient from top left fading naturally */}
      <div 
        className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] opacity-30 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%)',
        }}
      />

      {/* Layer 02: Dark cyan overlay from bottom */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[50%]"
        style={{
          background: 'linear-gradient(to top, rgba(8, 54, 61, 0.8) 0%, rgba(8, 54, 61, 0) 100%)',
        }}
      />

      {/* Layer 10: Ambient Glow - Large blurred cyan glows */}
      <div 
        className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full opacity-40 mix-blend-screen blur-[120px]"
        style={{ backgroundColor: '#00C8FF' }}
      />
      
      <div 
        className="absolute bottom-[-10%] left-[10%] w-[60%] h-[50%] rounded-full opacity-30 mix-blend-screen blur-[150px]"
        style={{ backgroundColor: '#27D6FF' }}
      />
    </div>
  );
};
