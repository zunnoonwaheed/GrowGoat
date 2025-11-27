"use client";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "1,999",
      period: "mo",
      description: "Perfect for new startups getting started",
      features: [
        "Logo Design (3 concepts)",
        "Brand Color Palette",
        "Typography Selection",
        "2 Design Revisions",
        "Basic Brand Guidelines",
        "Email Support",
      ],
      highlighted: false,
      cta: "Get Started",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: "Growth",
      price: "3,499",
      period: "mo",
      description: "For growing companies scaling their brand",
      features: [
        "Everything in Starter",
        "Complete Brand Identity",
        "Website Design (5 pages)",
        "Social Media Kit",
        "Unlimited Revisions",
        "Priority Support",
        "Bi-weekly Strategy Calls",
      ],
      highlighted: true,
      cta: "Get Started",
      badge: "Most Popular",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 20V10M12 20V4M6 20v-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: "Scale",
      price: "5,999",
      period: "mo",
      description: "For established businesses ready to dominate",
      features: [
        "Everything in Growth",
        "Advanced Web Development",
        "Custom Illustrations",
        "Marketing Campaign Design",
        "Video & Motion Graphics",
        "24/7 Priority Support",
        "Weekly Strategy Sessions",
        "Dedicated Account Manager",
      ],
      highlighted: false,
      cta: "Get Started",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 2 7 12 12 22 7 12 2" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="2 17 12 22 22 17" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="2 12 12 17 22 12" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      features: [
        "Everything in Scale",
        "Custom Solution Design",
        "Multi-brand Management",
        "API Integrations",
        "White-label Options",
        "Dedicated Team",
        "SLA Guarantee",
        "Quarterly Business Reviews",
      ],
      highlighted: false,
      cta: "Contact Sales",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="12" y1="22.08" x2="12" y2="12" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section-padding bg-[#0a0a0a] relative overflow-hidden" id="pricing">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 px-4">
            Pick the{" "}
            <span className="script-font font-normal text-[#E8FF01]">plan</span> that fits
            <br className="hidden sm:block" />
            <span className="text-gray-400">your startup</span>
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl md:rounded-3xl p-5 md:p-6 card-hover transition-all ${
                plan.highlighted
                  ? "bg-gradient-to-br from-[#E8FF01] to-[#c4d900] text-black sm:scale-105 lg:scale-110 shadow-[0_0_60px_rgba(232,255,1,0.4)]"
                  : "bg-black border-2 border-[#222] hover:border-[#E8FF01]/60"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-black text-[#E8FF01] px-3 py-1.5 rounded-full text-xs font-bold border-2 border-[#E8FF01] shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`w-11 h-11 md:w-12 md:h-12 rounded-xl mb-4 flex items-center justify-center ${
                plan.highlighted
                  ? "bg-black text-[#E8FF01]"
                  : "bg-[#E8FF01]/10 border-2 border-[#E8FF01]/40 text-[#E8FF01]"
              }`}>
                {plan.icon}
              </div>

              {/* Plan Name */}
              <div className="mb-5 md:mb-6">
                <h3 className={`text-lg md:text-xl font-bold mb-2 ${plan.highlighted ? "text-black" : "text-white"}`}>
                  {plan.name}
                </h3>
                <p className={`text-xs md:text-sm ${plan.highlighted ? "text-black/70" : "text-gray-400"}`}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-5 md:mb-6">
                <div className="flex items-baseline gap-1">
                  {plan.price !== "Custom" && (
                    <span className={`text-2xl md:text-3xl font-bold ${plan.highlighted ? "text-black" : "text-white"}`}>
                      $
                    </span>
                  )}
                  <span className={`text-3xl md:text-4xl font-black ${plan.highlighted ? "text-black" : "text-white"}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-sm ${plan.highlighted ? "text-black/70" : "text-gray-400"}`}>
                      /{plan.period}
                    </span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-2.5 md:space-y-3 mb-5 md:mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? "bg-black" : "bg-[#E8FF01]"
                      }`}
                    >
                      <svg className={`w-2.5 h-2.5 ${plan.highlighted ? "text-[#E8FF01]" : "text-black"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className={`text-xs md:text-sm ${plan.highlighted ? "text-black/80" : "text-gray-300"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3 md:py-3.5 rounded-full font-bold transition-all text-sm md:text-base ${
                  plan.highlighted
                    ? "bg-black text-[#E8FF01] hover:bg-black/90 border-2 border-black"
                    : "bg-[#E8FF01] text-black hover:shadow-[0_0_30px_rgba(232,255,1,0.5)] border-2 border-[#E8FF01]"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
