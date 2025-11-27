"use client";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Awake's expertise transformed our digital presence with creativity, precision, and a deep understanding of our goals.",
      author: "Sarah Miller",
      role: "CEO, TechFlow",
      rating: 5,
      highlight: "91%",
      highlightText: "clients recommend our design services",
    },
    {
      quote: "Their creativity and attention to detail transformed our brand completely!",
      author: "James Wilson",
      role: "Founder, StartupXYZ",
      rating: 5,
    },
    {
      quote: "Awake Design Agency brought our ideas to life with exceptional creativity and precision, exceeding all our expectations.",
      author: "Michael Chen",
      role: "Marketing Director, InnovateCo",
      rating: 5,
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
          {/* Main Testimonial */}
          <div className="bg-[#0a0a0a] rounded-3xl p-8 lg:col-span-2 border border-[#222] hover:border-[#E8FF01]/30 transition-colors">
            <div className="flex items-start gap-6">
              <div className="flex-1">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[0].rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#E8FF01] fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl font-medium text-white mb-6 leading-relaxed">
                  &ldquo;{testimonials[0].quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#E8FF01]/20 border border-[#E8FF01]/30 rounded-full" />
                  <div>
                    <p className="font-semibold text-white">{testimonials[0].author}</p>
                    <p className="text-sm text-gray-500">{testimonials[0].role}</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="hidden md:flex flex-col items-center justify-center bg-black rounded-2xl p-6 min-w-[140px] border border-[#E8FF01]/30">
                <span className="text-4xl font-bold text-[#E8FF01] mb-2">
                  {testimonials[0].highlight}
                </span>
                <span className="text-sm text-gray-500 text-center">
                  {testimonials[0].highlightText}
                </span>
              </div>
            </div>
          </div>

          {/* Secondary Testimonials */}
          {testimonials.slice(1).map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#E8FF01] rounded-3xl p-8 text-black"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-black fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-lg font-medium mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-black/20 rounded-full" />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-black/60">{testimonial.role}</p>
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
