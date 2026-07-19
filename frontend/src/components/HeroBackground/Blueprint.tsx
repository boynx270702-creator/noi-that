'use client';
import React from 'react';

interface BlueprintProps {
  color?: string;
  opacity?: number;
}

export const Blueprint: React.FC<BlueprintProps> = ({ 
  color = '#4FFAFF', 
  opacity = 0.4 
}) => {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex justify-between px-10 items-end overflow-hidden">
      {/* Left Blueprint Building */}
      <svg 
        width="400" 
        height="600" 
        viewBox="0 0 400 600" 
        className="opacity-60"
        style={{ opacity }}
      >
        <g stroke={color} strokeWidth="0.5" fill="none">
          {/* Main Structure */}
          <path d="M 50 600 L 50 200 L 150 150 L 150 600" />
          <path d="M 150 600 L 150 300 L 250 250 L 250 600" />
          <path d="M 250 600 L 250 100 L 350 50 L 350 600" />
          
          {/* Perspective Lines & Windows */}
          {Array.from({ length: 20 }).map((_, i) => (
            <React.Fragment key={i}>
              <line x1="50" y1={580 - i * 20} x2="150" y2={580 - i * 20} strokeDasharray="2 4" opacity="0.5" />
              <line x1="150" y1={580 - i * 15} x2="250" y2={580 - i * 15} strokeDasharray="2 4" opacity="0.5" />
              <line x1="250" y1={580 - i * 25} x2="350" y2={580 - i * 25} strokeDasharray="2 4" opacity="0.5" />
            </React.Fragment>
          ))}

          {/* Antennas / Tech Details */}
          <line x1="100" y1="175" x2="100" y2="100" />
          <circle cx="100" cy="100" r="3" />
          <line x1="300" y1="75" x2="300" y2="20" />
          <circle cx="300" cy="20" r="2" />
        </g>
      </svg>

      {/* Right Blueprint Building */}
      <svg 
        width="500" 
        height="700" 
        viewBox="0 0 500 700" 
        className="opacity-60 transform scale-x-[-1]" // Flip horizontally for variation
        style={{ opacity }}
      >
        <g stroke={color} strokeWidth="0.5" fill="none">
          {/* Main Structure */}
          <path d="M 100 700 L 100 250 L 200 200 L 200 700" />
          <path d="M 200 700 L 200 150 L 350 100 L 350 700" />
          <path d="M 350 700 L 350 350 L 450 300 L 450 700" />
          
          {/* Perspective Lines & Windows */}
          {Array.from({ length: 25 }).map((_, i) => (
            <React.Fragment key={`right-${i}`}>
              <line x1="100" y1={680 - i * 18} x2="200" y2={680 - i * 18} strokeDasharray="1 3" opacity="0.4" />
              <line x1="200" y1={680 - i * 22} x2="350" y2={680 - i * 22} strokeDasharray="3 3" opacity="0.6" />
              <line x1="350" y1={680 - i * 12} x2="450" y2={680 - i * 12} strokeDasharray="1 5" opacity="0.3" />
            </React.Fragment>
          ))}

          {/* Tech Nodes */}
          <rect x="250" y="80" width="40" height="20" />
          <line x1="270" y1="80" x2="270" y2="40" />
          <circle cx="270" cy="40" r="4" fill={color} fillOpacity="0.2" />
        </g>
      </svg>
    </div>
  );
};
