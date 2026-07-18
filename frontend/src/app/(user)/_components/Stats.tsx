'use client';
import SectionStarryMotif from './SectionStarryMotif';
import React, { useEffect, useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { useInView } from 'react-intersection-observer';

const DEFAULT_STATS = [
  {
    id: 1,
    icon: '/images/stats/icon-projects.png',
    value: 30,
    suffix: '+',
    title: 'Đơn vị đối tác'
  },
  {
    id: 2,
    icon: '/images/stats/icon-clients.png',
    value: 5,
    suffix: '%',
    title: 'Giảm giá thiết kế thi công'
  },
  {
    id: 3,
    icon: '/images/stats/icon-awards.png',
    value: 100,
    suffix: '%',
    title: 'Minh bạch báo giá'
  },
  {
    id: 4,
    icon: '/images/stats/icon-staff.png',
    value: 0,
    suffix: 'đ',
    title: 'Chi phí kết nối tư vấn'
  }
];

function Counter({ end, suffix }: { end: number, suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  const { ref } = useInView({
    threshold: 0.5,
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !started) {
        setStarted(true);
        let startTimestamp: number | null = null;
        const duration = 2000;
        const step = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          setCount(Math.floor(progress * end));
          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            setCount(end);
          }
        };
        window.requestAnimationFrame(step);
      }
    },
  });

  return (
    <span ref={ref} className="text-5xl md:text-[60px] font-bold text-white">
      {count}
      <span className="text-[#D3AE3E] ml-1">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  const [stats, setStats] = useState(DEFAULT_STATS);

  useEffect(() => {
    const fetchUnits = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:3001/api/v1'}/units`);
        if (!res.ok) throw new Error('API error');
        const text = await res.text();
        if (!text || text.startsWith('<')) throw new Error('Invalid JSON');
        const data = JSON.parse(text);
        if (Array.isArray(data)) {
          const unitCount = data.length;
          setStats(prev => prev.map(s => s.id === 1 ? { ...s, value: unitCount } : s));
        }
      } catch (error) {
        console.warn("Failed to fetch units", error);
      }
    };
    fetchUnits();
  }, []);

  return (
    <section className="overflow-hidden relative py-24 bg-[#0a0a0a] border-y border-white/5">
      <SectionStarryMotif />
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.id} animation="fade-up" delay={index * 150} className="flex flex-col items-center pt-8 sm:pt-0 group">
              {/* Icon */}
              <div className="mb-6 h-16 flex items-center justify-center">
                <img 
                  src={stat.icon} 
                  alt={stat.title} 
                  className="w-14 h-auto object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-2"
                />
              </div>
              
              {/* Counter */}
              <div className="mb-2">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              
              {/* Title */}
              <div className="text-[15px] font-medium tracking-wide text-[#888] uppercase mt-2">
                {stat.title}
              </div>
            </ScrollReveal>
          ))}

        </div>
      </div>
    </section>
  );
}
