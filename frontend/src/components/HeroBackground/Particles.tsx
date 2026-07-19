'use client';
import React, { useEffect, useRef } from 'react';

interface ParticlesProps {
  color?: string;
  count?: number;
  connectionDistance?: number;
}

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  blinkSpeed: number;

  constructor(width: number, height: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    // Extremely slow movement
    this.vx = (Math.random() - 0.5) * 0.2;
    this.vy = (Math.random() - 0.5) * 0.2;
    // Random size
    this.size = Math.random() * 2 + 0.5;
    // Random blinking
    this.alpha = Math.random();
    this.targetAlpha = Math.random();
    this.blinkSpeed = 0.01 + Math.random() * 0.02;
  }

  update(width: number, height: number) {
    this.x += this.vx;
    this.y += this.vy;

    // Wrap around
    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;

    // Blinking logic
    if (Math.abs(this.alpha - this.targetAlpha) < 0.05) {
      this.targetAlpha = Math.random();
    }
    this.alpha += (this.targetAlpha - this.alpha) * this.blinkSpeed;
  }

  draw(ctx: CanvasRenderingContext2D, baseColor: string) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    // Parse hex to rgba for alpha application
    ctx.fillStyle = baseColor.replace(')', `, ${this.alpha})`).replace('rgb', 'rgba');
    // Simple hex to rgba if needed, assuming color is in hex format, 
    // but for simplicity we'll set globalAlpha
    ctx.globalAlpha = this.alpha;
    ctx.fill();
    ctx.globalAlpha = 1.0;
  }
}

export const Particles: React.FC<ParticlesProps> = ({ 
  color = '#4FFAFF', 
  count = 250,
  connectionDistance = 100
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Re-initialize particles on resize to distribute them correctly
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    window.addEventListener('resize', resize);
    resize();

    // Parse color to RGB components for alpha manipulation
    // Assuming color is '#4FFAFF'
    const hex2rgb = (hex: string) => {
      const match = hex.match(/\w\w/g);
      if (match) {
        const [r, g, b] = match.map(x => parseInt(x, 16));
        return `${r},${g},${b}`;
      }
      return '79,250,255'; // Fallback to #4FFAFF
    };
    
    const rgbColor = hex2rgb(color);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Layer 07: Neon Nodes (Connections)
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = 1 - (dist / connectionDistance);
            ctx.strokeStyle = `rgba(${rgbColor}, ${opacity * 0.3})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Layer 06: Floating Particles
      ctx.fillStyle = color;
      particles.forEach(p => {
        p.update(canvas.width, canvas.height);
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        // Add a glow effect occasionally
        if (p.alpha > 0.8) {
           ctx.shadowBlur = 10;
           ctx.shadowColor = color;
        } else {
           ctx.shadowBlur = 0;
        }
        
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1.0;
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [count, connectionDistance, color]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none z-20 mix-blend-screen"
    />
  );
};
