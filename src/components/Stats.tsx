"use client";

import { useState, useEffect, useRef } from "react";

interface Stat {
  value: number;
  label: string;
  description: string;
  prefix?: string;
  suffix?: string;
  icon: JSX.Element;
}

const stats: Stat[] = [
  {
    value: 5,
    suffix: "-10x",
    label: "Faster Execution",
    description: "Accelerated delivery",
    icon: (
      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#E8FF01]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    value: 90,
    suffix: " Days",
    label: "To Results",
    description: "Proven timeline",
    icon: (
      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#E8FF01]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: 300,
    prefix: "$",
    suffix: "K+",
    label: "R&D Investment",
    description: "Continuous innovation",
    icon: (
      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#E8FF01]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-4 0-6 2-6 6s2 6 6 6 6-2 6-6-2-6-6-6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </svg>
    ),
  },
];

const StatsCard: React.FC<{ stat: Stat; count: number; delay: number }> = ({ stat, count, delay }) => (
  <div
    className="group relative bg-gradient-to-b from-[#0a0a0a] to-black rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 border border-[#1a1a1a] hover:border-[#E8FF01]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#E8FF01]/10 hover:-translate-y-2"
    style={{ animation: `fadeInUp 0.6s ease-out ${delay}s both` }}
  >
    <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#E8FF01]/0 to-[#E8FF01]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10 text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#E8FF01]/10 border border-[#E8FF01]/30 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
        {stat.icon}
      </div>
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 sm:mb-4 leading-none">
        {stat.prefix && <span className="text-[#E8FF01]">{stat.prefix}</span>}
        <span className="tabular-nums">{count}</span>
        {stat.suffix && <span className="text-[#E8FF01]">{stat.suffix}</span>}
      </div>
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 uppercase tracking-wide">{stat.label}</h3>
      <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{stat.description}</p>
    </div>
  </div>
);

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && !isVisible && setIsVisible(true),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;

    stats.forEach((stat, index) => {
      let start: number | null = null;

      const animate = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        setCounts((prev) => {
          const next = [...prev];
          next[index] = Math.ceil(stat.value * progress);
          return next;
        });
        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    });
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="relative bg-black overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
          Special Offer
        </h2>
        <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Get your 4th month free in our exclusive 6-month contract. Experience premium service with unmatched value.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatsCard key={index} stat={stat} count={counts[index]} delay={index * 0.1} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Stats;
