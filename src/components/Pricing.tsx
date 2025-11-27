"use client";

const Pricing = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "2500",
      period: "mo",
      description: "Perfect for startups and small businesses",
      features: [
        "Brand Strategy Development",
        "Logo & Identity Design",
        "3 Design Revisions",
        "Digital Brand Guidelines",
        "Social Media Templates",
      ],
      highlighted: false,
      cta: "Get Started",
    },
    {
      name: "Premium Plan",
      price: "3500",
      period: "mo",
      description: "For growing companies needing comprehensive branding",
      features: [
        "Everything in Basic",
        "Full Website Design",
        "Unlimited Revisions",
        "Marketing Collateral",
        "Priority Support",
        "Monthly Strategy Calls",
      ],
      highlighted: true,
      cta: "Get Started",
      badge: "Most Popular",
    },
  ];

  return (
    <section className="section-padding bg-[#0a0a0a]" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Pick the{" "}
            <span className="script-font font-normal text-[#E8FF01]">plan</span> that fits
            <br />
            <span className="text-gray-500">your startup</span>
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 ${
                plan.highlighted
                  ? "bg-[#E8FF01] text-black"
                  : "bg-black border border-[#222] hover:border-[#E8FF01]/50 transition-colors"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-black text-[#E8FF01] px-4 py-1 rounded-full text-sm font-medium border border-[#E8FF01]">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <div className="mb-6">
                <h3 className={`text-lg font-semibold mb-2 ${plan.highlighted ? "text-black" : "text-white"}`}>{plan.name}</h3>
                <p className={`text-sm ${plan.highlighted ? "text-black/60" : "text-gray-500"}`}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className={`text-5xl font-bold ${plan.highlighted ? "text-black" : "text-white"}`}>${plan.price}</span>
                <span className={`text-lg ${plan.highlighted ? "text-black/60" : "text-gray-500"}`}>
                  /{plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.highlighted ? "bg-black" : "bg-[#E8FF01]"
                      }`}
                    >
                      <svg className={`w-3 h-3 ${plan.highlighted ? "text-[#E8FF01]" : "text-black"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className={plan.highlighted ? "text-black/80" : "text-gray-400"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-4 rounded-full font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-black text-[#E8FF01] hover:bg-black/90"
                    : "bg-[#E8FF01] text-black hover:shadow-[0_0_30px_rgba(232,255,1,0.3)]"
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
