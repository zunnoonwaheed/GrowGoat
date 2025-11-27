"use client";

const CTA = () => {
  return (
    <section className="section-padding bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E8FF01] rounded-full blur-3xl opacity-5" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E8FF01] rounded-full blur-3xl opacity-5" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Innovative So
          <span className="script-font font-normal text-[#E8FF01]">lutions for real brands</span>
        </h2>
        
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Ready to transform your brand? Let&apos;s collaborate to create something extraordinary that resonates with your audience.
        </p>

        <button className="bg-[#E8FF01] text-black px-8 py-4 rounded-full font-semibold hover:shadow-[0_0_40px_rgba(232,255,1,0.4)] transition-all hover:scale-105 inline-flex items-center gap-2">
          Let&apos;s Collaborate Now
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default CTA;
