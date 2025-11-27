"use client";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Grow Goat transformed our digital presence with exceptional creativity and strategic thinking. The results exceeded all expectations!",
      author: "Sarah Miller",
      role: "CEO, TechFlow Solutions",
      rating: 5,
      company: "TechFlow",
      highlight: "95%",
      highlightText: "clients recommend our services",
      featured: true,
    },
    {
      quote: "Their attention to detail and innovative approach helped us stand out in a crowded market. Best investment we've made!",
      author: "James Wilson",
      role: "Founder, StartupXYZ",
      company: "StartupXYZ",
      rating: 5,
      featured: false,
    },
    {
      quote: "Grow Goat brought our vision to life with precision and creativity. The team's dedication is unmatched!",
      author: "Michael Chen",
      role: "Marketing Director",
      company: "InnovateCo",
      rating: 5,
      featured: false,
    },
    {
      quote: "Working with Grow Goat was seamless. They understood our brand and delivered beyond what we imagined possible.",
      author: "Emily Rodriguez",
      role: "Creative Director",
      company: "BrandCraft",
      rating: 5,
      featured: false,
    },
    {
      quote: "The strategic insights and design excellence from Grow Goat helped us achieve 3x growth in just 6 months!",
      author: "David Park",
      role: "Co-Founder",
      company: "GrowthLabs",
      rating: 5,
      featured: false,
    },
  ];

  return (
    <section className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            What our{" "}
            <span className="script-font font-normal text-[#E8FF01]">satisfied customers</span>
            <br />
            <span className="text-gray-500">are saying about us</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Testimonial */}
          <div className="bg-[#0a0a0a] rounded-3xl p-8 lg:col-span-2 border border-[#222] hover:border-[#E8FF01]/30 transition-all card-hover">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-1">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#E8FF01] fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl font-medium text-white mb-6 leading-relaxed">
                  &ldquo;{testimonials[0].quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#E8FF01]/30 to-[#E8FF01]/10 border-2 border-[#E8FF01]/30 rounded-full flex items-center justify-center">
                    <span className="text-[#E8FF01] font-bold text-lg">{testimonials[0].author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonials[0].author}</p>
                    <p className="text-sm text-gray-400">{testimonials[0].role}</p>
                  </div>
                </div>
              </div>

              {/* Stats Badge */}
              <div className="bg-gradient-to-br from-[#E8FF01] to-[#c4d900] rounded-2xl p-6 min-w-[140px] text-center shadow-lg">
                <span className="text-5xl font-bold text-black mb-2 block">
                  {testimonials[0].highlight}
                </span>
                <span className="text-xs text-black/70 font-medium">
                  {testimonials[0].highlightText}
                </span>
              </div>
            </div>
          </div>

          {/* Secondary Testimonials */}
          {testimonials.slice(1).map((testimonial, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 card-hover border transition-all ${
                index % 2 === 0
                  ? "bg-[#0a0a0a] border-[#222] hover:border-[#E8FF01]/30 text-white"
                  : "bg-[#E8FF01] border-[#E8FF01] hover:shadow-[0_0_40px_rgba(232,255,1,0.3)] text-black"
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-4 h-4 fill-current ${index % 2 === 0 ? "text-[#E8FF01]" : "text-black"}`} viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-base font-medium mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  index % 2 === 0
                    ? "bg-[#E8FF01]/20 border-2 border-[#E8FF01]/30"
                    : "bg-black/20 border-2 border-black/30"
                }`}>
                  <span className={`font-bold ${index % 2 === 0 ? "text-[#E8FF01]" : "text-black"}`}>
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.author}</p>
                  <p className={`text-xs ${index % 2 === 0 ? "text-gray-400" : "text-black/60"}`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
