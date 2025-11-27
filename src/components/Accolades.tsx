"use client";

import { Award, Star, Medal } from "lucide-react";

const Accolades = () => {
  const awards = [
    {
      icon: <Award className="w-12 h-12 text-[#E8FF01]" />,
      title: "Awarded Webflow Excellence for innovative, type-centric UX/UI design.",
      year: "2024",
    },
    {
      icon: <Star className="w-12 h-12 text-[#E8FF01]" />,
      title: "Recognized for top-notch marketing strategies and creative solutions.",
      year: "2023",
    },
    {
      icon: <Medal className="w-12 h-12 text-[#E8FF01]" />,
      title: "Honored for outstanding HR and analytics innovation in our team.",
      year: "2023",
    },
  ];

  return (
    <section className="section-padding bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Accolades{" "}
            <span className="text-gray-500">and achievements</span>
            <br />
            <span className="text-gray-500">Our top recognitions</span>
          </h2>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-black rounded-3xl p-8 card-hover border border-[#222] hover:border-[#E8FF01]/50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-[#E8FF01]/10 border border-[#E8FF01]/30 rounded-2xl flex items-center justify-center shrink-0">
                  {award.icon}
                </div>
                <div>
                  <p className="text-white font-medium leading-relaxed mb-3">
                    {award.title}
                  </p>
                  <span className="text-sm text-[#E8FF01] font-semibold">
                    {award.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accolades;
