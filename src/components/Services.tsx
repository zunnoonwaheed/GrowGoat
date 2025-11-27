"use client";

const Services = () => {
  const services = [
    {
      title: "Brand Strategy",
      description: "Strategic brand positioning and identity development",
      icon: "🎨",
    },
    {
      title: "Web Design",
      description: "Beautiful, conversion-focused website design",
      icon: "🌐",
    },
    {
      title: "Logo Identity",
      description: "Memorable logo and visual identity systems",
      icon: "✦",
    },
    {
      title: "Marketing Materials",
      description: "Cohesive marketing collateral design",
      icon: "📊",
    },
    {
      title: "Creative Building",
      description: "End-to-end creative development solutions",
      icon: "🏗️",
    },
    {
      title: "Corporate Branding",
      description: "Comprehensive corporate identity solutions",
      icon: "💼",
    },
  ];

  return (
    <section className="section-padding bg-[#0a0a0a]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Where <span className="script-font font-normal text-[#E8FF01]">exceptional</span>
            <br />
            meets analytics
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black rounded-2xl p-6 card-hover border border-[#222] hover:border-[#E8FF01]/50 text-center group"
            >
              <div
                className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#E8FF01]/10 border border-[#E8FF01]/30 flex items-center justify-center text-2xl transform group-hover:scale-110 group-hover:bg-[#E8FF01]/20 transition-all"
              >
                {service.icon}
              </div>
              <h3 className="font-semibold text-white text-sm mb-2 group-hover:text-[#E8FF01] transition-colors">
                {service.title}
              </h3>
              <p className="text-xs text-gray-500 hidden md:block">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 bg-[#E8FF01] rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">
                See Our Work in Action
              </h3>
              <p className="text-black/70">
                Start Your Creative Journey with Us!
              </p>
            </div>
            <button className="bg-black text-[#E8FF01] px-8 py-3 rounded-full font-semibold hover:bg-black/90 transition-colors flex items-center gap-2 whitespace-nowrap">
              View Portfolio
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
