"use client";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 bg-black overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#E8FF01]/10 via-[#E8FF01]/5 to-transparent blur-3xl animate-pulse-slow" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Glowing rings - centered properly */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-[#E8FF01]/10 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-[#E8FF01]/5 rounded-full pointer-events-none" />

      {/* Corner decorative dots */}
      <div className="absolute top-24 left-16 w-3 h-3 bg-[#E8FF01] rounded-full opacity-60 hidden lg:block" />
      <div className="absolute top-36 right-24 w-2 h-2 bg-[#E8FF01] rounded-full opacity-40 hidden lg:block" />
      <div className="absolute bottom-48 left-24 w-2 h-2 bg-[#E8FF01] rounded-full opacity-50 hidden lg:block" />
      <div className="absolute bottom-36 right-16 w-3 h-3 bg-[#E8FF01] rounded-full opacity-40 hidden lg:block" />

      {/* Main Content - Perfectly Centered */}
      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-transparent border border-[#E8FF01] rounded-full px-5 py-2 mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-[#E8FF01]"></span>
          <span className="text-[#E8FF01] text-sm font-semibold">Now accepting new clients</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-in-up stagger-1">
          Building bold brands
          <br />
          <span className="text-white">with </span>
          <span className="script-font font-normal text-[#E8FF01] relative inline-block">
            thoughtful design
            <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 300 15" fill="none" preserveAspectRatio="none">
              <path 
                d="M5 12C30 8 60 5 100 7C140 9 180 6 220 8C260 10 280 7 295 9" 
                stroke="#E8FF01" 
                strokeWidth="3" 
                strokeLinecap="round" 
                className="animate-draw"
                style={{ filter: 'drop-shadow(0 0 8px rgba(232, 255, 1, 0.5))' }}
              />
            </svg>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up stagger-2 leading-relaxed">
          At Grow Goat, we help small startups tackle the world&apos;s biggest challenges with tailored solutions, guiding you from strategy to success in a competitive market.
        </p>

        {/* CTA Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up stagger-3">
          {/* Get Started Button */}
          <button className="group flex items-center bg-[#E8FF01] text-black px-3 py-3 rounded-full font-semibold overflow-hidden">
            <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center group-hover:bg-black/20 transition-all duration-500 ease-out group-hover:-translate-x-2">
              <svg className="w-5 h-5 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <span className="pl-3 pr-5 transition-all duration-500 ease-out group-hover:translate-x-2">Get Started</span>
          </button>

          {/* Avatars + Rating */}
          <div className="flex items-center gap-4">
            {/* Avatars */}
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-11 h-11 rounded-full bg-gradient-to-br from-[#E8FF01]/30 to-[#E8FF01]/10 border-2 border-black flex items-center justify-center text-xs font-bold text-[#E8FF01]"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>

            {/* Rating */}
            <div className="text-left">
              <div className="flex items-center gap-1 mb-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-[#E8FF01] fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-400 text-sm">Trusted by 200+ clients</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity"
      >
        <span className="text-white text-xs">Scroll</span>
        <div className="w-5 h-8 border-2 border-[#333] rounded-full flex justify-center pt-1.5 hover:border-[#E8FF01]/50 transition-colors">
          <div className="w-1 h-2 bg-[#E8FF01] rounded-full animate-scroll-down" />
        </div>
      </button>
    </section>
  );
};

export default Hero;
