"use client";

const Portfolio = () => {
  const projects = [
    {
      title: "EcoTech Solutions",
      category: "Complete Brand Transformation",
      description: "Transformed a local eco-friendly startup into a nationally recognized sustainable tech brand",
      tags: ["Brand Strategy", "Web Design"],
      image: "from-[#E8FF01]/20 to-[#E8FF01]/5",
      stats: "250%",
      statsLabel: "Growth",
      results: ["$2M Revenue in Year 1", "50K+ Active Users", "Featured in TechCrunch"],
      featured: true,
      icon: (
        <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "HealthFirst Clinic",
      category: "Healthcare Branding",
      description: "Modernized medical practice with patient-friendly digital presence",
      tags: ["Medical Branding", "UI/UX"],
      image: "from-[#E8FF01]/15 to-black",
      stats: "180%",
      statsLabel: "Patient Growth",
      results: ["5-Star Reviews", "Digital Booking System"],
      featured: false,
      icon: (
        <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "FitFlow App",
      category: "Mobile App Design",
      description: "Created an engaging fitness tracking experience that users love",
      tags: ["App Design", "UX"],
      image: "from-black to-[#E8FF01]/10",
      stats: "100K+",
      statsLabel: "Downloads",
      results: ["4.8 App Store Rating", "Featured App"],
      featured: false,
      icon: (
        <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="12" y1="18" x2="12.01" y2="18" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Artisan Coffee Co.",
      category: "Food & Beverage Branding",
      description: "Elevated a local coffee shop into a premium lifestyle brand",
      tags: ["Branding", "Packaging"],
      image: "from-[#E8FF01]/10 to-black",
      stats: "300%",
      statsLabel: "Sales Increase",
      results: ["5 New Locations", "Retail Partnerships"],
      featured: false,
      icon: (
        <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="6" y1="1" x2="6" y2="4" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="10" y1="1" x2="10" y2="4" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="14" y1="1" x2="14" y2="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "TechStart Accelerator",
      category: "B2B Platform",
      description: "Built a comprehensive platform connecting startups with investors",
      tags: ["Web Platform", "Branding"],
      image: "from-[#E8FF01]/12 to-black",
      stats: "$50M+",
      statsLabel: "Funding Facilitated",
      results: ["200+ Startups", "500+ Investors"],
      featured: false,
      icon: (
        <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="12 6 12 12 16 14" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "LuxeHome Interiors",
      category: "Luxury Brand Design",
      description: "Created an upscale brand identity for premium interior design services",
      tags: ["Luxury Branding", "Portfolio"],
      image: "from-black to-[#E8FF01]/15",
      stats: "500%",
      statsLabel: "Lead Generation",
      results: ["High-End Clients", "Award-Winning Projects"],
      featured: false,
      icon: (
        <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="7" height="7" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="14" y="3" width="7" height="7" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="14" y="14" width="7" height="7" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="3" y="14" width="7" height="7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="section-padding bg-black relative overflow-hidden" id="work">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 px-4 leading-tight">
            How we transformed{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8FF01] to-[#c4d900]">small businesses</span>
            <br className="hidden sm:block" />
            into design powerhouses
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl md:rounded-3xl overflow-hidden card-hover border-2 border-[#222] hover:border-[#E8FF01]/60"
            >
              {/* Project Image */}
              <div
                className={`bg-gradient-to-br ${project.image} relative h-80 md:h-96 p-4 md:p-6 flex flex-col justify-between`}
              >
                {/* Placeholder Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id={`pattern-${index}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="20" cy="20" r="2" fill="currentColor" className="text-[#E8FF01]" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#pattern-${index})`} />
                  </svg>
                </div>

                {/* Center Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <div className="text-[#E8FF01]">
                    {project.icon}
                  </div>
                </div>

                {/* Top badge */}
                <div className="flex justify-between items-start">
                  <div className="bg-black/60 backdrop-blur-sm rounded-full px-3 md:px-4 py-1.5 md:py-2 border-2 border-[#E8FF01]/30">
                    <span className="text-[#E8FF01] text-[10px] md:text-xs font-semibold">{project.category}</span>
                  </div>

                  {/* Hover Arrow */}
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-[#E8FF01] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Bottom Content */}
                <div>
                  {/* Stats Badge */}
                  <div className="bg-black/70 backdrop-blur-md rounded-xl p-3 md:p-4 mb-3 md:mb-4 border border-[#E8FF01]/30 inline-block">
                    <div className="text-[#E8FF01] text-2xl md:text-3xl font-black">
                      {project.stats}
                    </div>
                    <div className="text-white text-xs font-semibold">{project.statsLabel}</div>
                  </div>

                  {/* Project Info */}
                  <div className="bg-black/60 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-[#E8FF01]/30">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-xs md:text-sm mb-3 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 md:px-3 py-1 bg-[#E8FF01]/20 rounded-full text-[#E8FF01] text-xs border border-[#E8FF01]/40 font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
