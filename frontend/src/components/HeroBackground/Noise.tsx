'use client';
import React from 'react';

interface NoiseProps {
  opacity?: number;
}

export const Noise: React.FC<NoiseProps> = ({ opacity = 0.015 }) => {
  return (
    <div 
      className="absolute inset-0 pointer-events-none z-10 opacity-100 mix-blend-overlay"
      style={{ opacity }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="noiseFilter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.8" 
            numOctaves="3" 
            stitchTiles="stitch" 
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
};
