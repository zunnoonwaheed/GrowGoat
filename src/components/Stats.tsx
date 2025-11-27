"use client";

const Stats = () => {
  const stats = [
    { value: "40", suffix: "+", label: "Years Experience" },
    { value: "15", suffix: "+", label: "Team Members" },
    { value: "12", suffix: "+", label: "Awards Won" },
  ];

  const badges = [
    { label: "Creativity", icon: "✨", color: "badge-neon" },
    { label: "Innovation", icon: "💡", color: "badge-neon" },
    { label: "Strategy", icon: "🎯", color: "badge-neon" },
  ];

  return (
    <section className="section-padding bg-black" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Crafting exceptional,{" "}
              <span className="text-gray-500">
                well-experienced & technology-driven strategies to drive impactful results with
              </span>
            </h2>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              {badges.map((badge, index) => (
                <span key={index} className={`badge ${badge.color}`}>
                  <span>{badge.icon}</span>
                  {badge.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                  <span className="text-[#E8FF01]">+</span>
                  {stat.value}
                </div>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
