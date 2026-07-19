'use client';
import React, { useEffect, useRef } from 'react';

interface PerspectiveGridProps {
  color?: string;
  opacity?: number;
  speed?: number; // In seconds for a full loop
}

export const PerspectiveGrid: React.FC<PerspectiveGridProps> = ({ 
  color = '#4FFAFF', 
  opacity = 0.18,
  speed = 10 
}) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let startTime: number | null = null;
    
    // Smooth custom transform animation via requestAnimationFrame
    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;
      
      // Calculate progress (0 to 1) based on speed
      // 1 full cycle is equivalent to moving the grid down by 1 cell size (e.g., 100px)
      // Since it's perspective, we move it along the Y axis of the transformed plane
      const progress = (elapsed % (speed * 1000)) / (speed * 1000);
      const yOffset = progress * 100; // Assuming cell size is 100px
      
      if (gridRef.current) {
        // Move upward by translating Y negatively
        gridRef.current.style.transform = `translateY(${yOffset}px)`;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [speed]);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" style={{ perspective: '800px' }}>
      {/* The grid container, rotated to create perspective */}
      <div 
        className="absolute w-[200vw] h-[200vh] left-[-50vw] top-[30vh]"
        style={{
          transform: 'rotateX(75deg)',
          transformOrigin: 'top center',
          opacity
        }}
      >
        {/* The actual moving grid */}
        <div 
          ref={gridRef}
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, ${color} 1px, transparent 1px),
              linear-gradient(to bottom, ${color} 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            backgroundPosition: 'center top',
            willChange: 'transform'
          }}
        />
        
        {/* Fading mask at the distant horizon */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 40%)',
            pointerEvents: 'none'
          }}
        />
      </div>
    </div>
  );
};
