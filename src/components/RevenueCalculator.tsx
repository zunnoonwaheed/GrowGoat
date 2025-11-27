"use client";

import { useState } from "react";

const RevenueCalculator = () => {
  const [revenue, setRevenue] = useState(180000);
  const [industry, setIndustry] = useState("Shopify E-Commerce");
  const [visitors, setVisitors] = useState(21000);
  const [conversionRate, setConversionRate] = useState(2.5);

  const industries = [
    "Shopify E-Commerce",
    "SaaS",
    "Healthcare",
    "Real Estate",
    "Food & Beverage",
    "Education",
    "Consulting",
  ];

  const calculateImpact = () => {
    const revenueIncrease = revenue * 0.35; // 35% average increase
    return Math.round(revenueIncrease);
  };

  const calculateROI = () => {
    const investment = 3499; // Average monthly plan
    const annualRevenue = calculateImpact() * 12;
    return Math.round((annualRevenue / (investment * 12)) * 100);
  };

  return (
    <section className="section-padding bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Left Content */}
          <div className="mb-8 lg:mb-0">
            <div className="inline-flex items-center gap-2 bg-[#E8FF01]/10 border border-[#E8FF01]/30 rounded-full px-4 py-2 mb-4 md:mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E8FF01]"></span>
              <span className="text-[#E8FF01] text-xs sm:text-sm font-semibold">ROI Calculator</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 md:mb-6">
              Find Your{" "}
              <span className="script-font font-normal text-[#E8FF01]">Revenue Leaks</span>
              <br className="hidden sm:block" />
              in 60 Seconds
            </h2>

            <p className="text-gray-300 text-base md:text-lg mb-6 md:mb-8 leading-relaxed max-w-xl">
              See exactly what you're leaving on the table. Our calculator shows your potential revenue growth with professional branding and design.
            </p>

            <div className="space-y-3 md:space-y-4">
              {["Based on 200+ client success stories","Industry-specific benchmarks","Real-time calculations"].map((text,i)=>(
                <div key={i} className="flex items-center gap-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#E8FF01]/20 border border-[#E8FF01]/40 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#E8FF01]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm md:text-base">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="bg-black rounded-2xl md:rounded-3xl p-6 md:p-8 border border-[#222] relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-5" />

            <div className="relative z-10 space-y-5 md:space-y-6">

              {/* Monthly Revenue */}
              <div>
                <label className="block text-white text-sm md:text-base font-semibold mb-3">Monthly Revenue</label>
                <div className="relative">
                  <span className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-2xl md:text-3xl font-bold text-[#E8FF01]">$</span>
                  <input
                    type="number"
                    value={revenue}
                    onChange={(e) => setRevenue(Number(e.target.value))}
                    className="w-full bg-[#0a0a0a] border border-[#333] rounded-xl pl-10 md:pl-12 pr-4 py-3 md:py-4 text-white text-2xl md:text-3xl font-bold focus:outline-none focus:border-[#E8FF01] transition-colors"
                  />
                </div>

                <input
                  type="range"
                  min="10000"
                  max="1000000"
                  step="10000"
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="w-full mt-3 h-2 bg-[#1a1a1a] rounded-lg appearance-none cursor-pointer slider"
                />
              </div>

              {/* Industry */}
              <div>
                <label className="block text-white text-sm md:text-base font-semibold mb-3">Industry</label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full bg-[#0a0a0a] border border-[#333] rounded-xl px-4 py-3 text-white text-base md:text-lg font-medium focus:outline-none focus:border-[#E8FF01] transition-colors appearance-none cursor-pointer"
                  style={{
                    backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%23E8FF01' d='M13.293 5.293L8 10.586 2.707 5.293A1 1 0 001.293 6.707l6 6a1 1 0 001.414 0l6-6a1 1 0 10-1.414-1.414z'/%3E%3C/svg%3E")`,
                    backgroundRepeat:"no-repeat",
                    backgroundPosition:"right 1rem center",
                  }}
                >
                  {industries.map((ind) => (
                    <option key={ind} value={ind} className="bg-[#111111] text-white">{ind}</option>
                  ))}
                </select>
              </div>

              {/* Visitors */}
              <div>
                <label className="block text-white text-sm md:text-base font-semibold mb-3">Monthly Visitors</label>
                <div className="bg-[#0a0a0a] border border-[#333] rounded-xl px-4 py-3">
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {visitors.toLocaleString()} <span className="text-base md:text-lg text-gray-400">visitors</span>
                  </div>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={visitors}
                  onChange={(e) => setVisitors(Number(e.target.value))}
                  className="w-full mt-3 h-2 bg-[#1a1a1a] rounded-lg appearance-none cursor-pointer slider"
                />
              </div>

              {/* Conversion */}
              <div>
                <label className="block text-white text-sm md:text-base font-semibold mb-3">Current Conversion Rate</label>
                <div className="bg-[#0a0a0a] border border-[#333] rounded-xl px-4 py-3">
                  <div className="text-2xl md:text-3xl font-bold text-white">{conversionRate}%</div>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="10"
                  step="0.1"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full mt-3 h-2 bg-[#1a1a1a] rounded-lg appearance-none cursor-pointer slider"
                />
              </div>

              {/* Result Box */}
              <div className="bg-gradient-to-br from-[#E8FF01] via-[#E8FF01] to-[#c4d900] rounded-2xl p-5 md:p-6 mt-6 md:mt-8 shadow-2xl shadow-[#E8FF01]/20">
                <div className="text-black text-xs md:text-sm font-bold mb-2 uppercase tracking-wide">Potential Monthly Impact</div>
                <div className="text-black text-4xl md:text-5xl font-black mb-1">+${calculateImpact().toLocaleString()}</div>
                <div className="text-black/80 text-xs md:text-sm mb-4 font-medium">Average revenue increase with our services</div>

                <div className="flex items-center justify-between pt-4 border-t-2 border-black/20">
                  <span className="text-black/80 text-sm md:text-base font-semibold">Estimated ROI</span>
                  <span className="text-black text-xl md:text-2xl font-black">{calculateROI()}%</span>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-[#E8FF01] text-black py-3.5 md:py-4 rounded-xl font-bold hover:bg-[#c4d900] transition-colors flex items-center justify-center gap-2 text-sm md:text-base">
                <span>Get Your Custom Strategy</span>
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* ---- FIXED YELLOW CIRCLE ---- */}
      <style jsx>{`
        .slider::-webkit-slider-thumb,
        .slider::-moz-range-thumb {
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #E8FF01 !important; /* FULL YELLOW */
          cursor: pointer;
          border: none !important;       /* BORDER REMOVED SO YELLOW SHOWS */
          box-shadow: 0 0 10px #E8FF01AA;
          transition: transform 0.2s ease;
        }

        .slider::-webkit-slider-thumb:hover,
        .slider::-moz-range-thumb:hover {
          transform: scale(1.1);
        }

        .slider::-webkit-slider-track,
        .slider::-moz-range-track {
          background: #1a1a1a;
          height: 6px;
          border-radius: 3px;
        }
      `}</style>
    </section>
  );
};

export default RevenueCalculator;
