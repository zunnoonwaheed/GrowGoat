"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const shuffle = (array: any[]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400&h=400&fit=crop",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=400&fit=crop",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1600132806608-231446b2e7af?w=400&h=400&fit=crop",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=400&h=400&fit=crop",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=400&h=400&fit=crop",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=400&h=400&fit=crop",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=400&fit=crop",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full rounded-lg"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[400px] sm:h-[450px] md:h-[500px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative w-full bg-black overflow-hidden pt-28 pb-12 sm:pt-32 lg:pt-24 sm:pb-16 lg:pb-20">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="relative z-10 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-[#E8FF01]/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E8FF01]"></span>
              <span className="text-[#E8FF01] text-xs sm:text-sm font-semibold tracking-wide uppercase">Now Accepting New Clients</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            We Build <span className="text-transparent bg-clip-text bg-linear-to-r from-[#E8FF01] to-[#c4d900]">Growth Systems</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-400 mb-8 leading-relaxed max-w-xl">
            Stop managing scattered tactics and underperforming agencies. Deploy a complete Shopify growth infrastructure—website, SEO, email, conversion optimization—guaranteed to deliver results in 90 days.

            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
              {/* Main CTA */}
              <div className="relative inline-flex items-center justify-center group">
                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-linear-to-r from-[#E8FF01] to-[#c4d900] group-hover:shadow-lg group-hover:shadow-[#E8FF01]/50"></div>
                <a
                  href="#contact"
                  className="relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-black bg-[#E8FF01] rounded-full hover:bg-[#c4d900] transition-colors"
                >
                  Get Started Free
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-linear-to-br from-[#E8FF01] to-[#c4d900] border-2 border-black flex items-center justify-center text-sm font-bold text-black"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-0.5 mb-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-4 h-4 text-[#E8FF01] fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-white text-sm font-semibold">200+ Happy Clients</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Shuffle Grid */}
          <div className="relative">
            <ShuffleGrid />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
