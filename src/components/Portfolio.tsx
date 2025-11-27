"use client";

const Portfolio = () => {
  const projects = [
    {
      title: "FreshSalon",
      category: "Branding",
      tags: ["Logo Design", "Brand Identity"],
      image: "from-[#E8FF01]/20 to-[#E8FF01]/5",
      stats: "$300,125",
      featured: true,
    },
    {
      title: "Academyize",
      category: "Web Design",
      tags: ["UI/UX", "Development"],
      image: "from-[#E8FF01]/15 to-black",
      featured: false,
    },
    {
      title: "Genome",
      category: "App Design",
      tags: ["Mobile App", "UX Design"],
      image: "from-black to-[#E8FF01]/10",
      featured: false,
    },
    {
      title: "Forge",
      category: "Branding",
      tags: ["Brand Strategy", "Identity"],
      image: "from-[#E8FF01]/10 to-black",
      featured: false,
    },
  ];

  return (
    <section className="section-padding bg-black" id="work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            How we transformed a{" "}
            <span className="text-gray-500">small</span>
            <br />
            <span className="text-gray-500">business into a design startup</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl overflow-hidden card-hover border border-[#222] hover:border-[#E8FF01]/50 ${
                project.featured ? "md:row-span-2" : ""
              }`}
            >
              {/* Project Image */}
              <div
                className={`bg-gradient-to-br ${project.image} aspect-square md:aspect-auto ${
                  project.featured ? "md:h-full" : "md:h-64"
                } p-8 flex items-end`}
              >
                {/* Mock UI Elements */}
                <div className="w-full">
                  {project.featured && (
                    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 mb-4 border border-[#E8FF01]/20">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-[#E8FF01]/20 rounded-full border border-[#E8FF01]/30" />
                        <div>
                          <div className="h-3 w-24 bg-[#E8FF01]/30 rounded mb-2" />
                          <div className="h-2 w-16 bg-white/20 rounded" />
                        </div>
                      </div>
                      <div className="text-[#E8FF01] text-3xl font-bold">
                        {project.stats}
                      </div>
                    </div>
                  )}
                  
                  {/* Phone mockups */}
                  <div className="flex gap-4 justify-center">
                    <div className="w-32 h-56 bg-black/40 backdrop-blur-sm rounded-3xl border border-[#E8FF01]/30" />
                    {project.featured && (
                      <div className="w-32 h-56 bg-black/40 backdrop-blur-sm rounded-3xl border border-[#E8FF01]/30 translate-y-4" />
                    )}
                  </div>
                </div>
              </div>

              {/* Project Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{project.category}</p>
                  </div>
                  <div className="flex gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#E8FF01]/10 backdrop-blur-sm rounded-full text-[#E8FF01] text-xs border border-[#E8FF01]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-[#E8FF01] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
