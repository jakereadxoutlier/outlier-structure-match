import projectParking from "@/assets/project-parking.jpg";
import projectPodium from "@/assets/project-podium.jpg";
import projectFoundation from "@/assets/project-foundation.jpg";

const projects = [
  {
    name: "Oceanview Podium Deck",
    city: "Ventura, CA",
    scope: "Three-level podium deck over parking",
    size: "$1.2M - $2.5M structural package",
    result: "Delivered on schedule while navigating tight inspection windows.",
    image: projectPodium,
  },
  {
    name: "Downtown Parking Structure",
    city: "Oxnard, CA",
    scope: "Five-level above-grade parking with retail podium",
    size: "$3M - $5M structural package",
    result: "Post-tension slab system completed with zero safety incidents.",
    image: projectParking,
  },
  {
    name: "Coastal Foundation & Retaining",
    city: "Camarillo, CA",
    scope: "Deep foundations with engineered shotcrete walls",
    size: "$500k - $1M structural package",
    result: "Complex site conditions resolved through coordination with structural engineer.",
    image: projectFoundation,
  },
];

export const ProjectsGallery = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Structural concrete work across Ventura County and Southern California
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="glass-card rounded-xl overflow-hidden hover:shadow-2xl hover:glow-primary transition-all duration-300 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{project.name}</h3>
                <p className="text-sm text-primary mb-3">{project.city}</p>
                <p className="text-sm text-muted-foreground mb-2">{project.scope}</p>
                <p className="text-sm font-semibold text-foreground mb-3">{project.size}</p>
                <p className="text-sm text-muted-foreground leading-relaxed border-t border-border pt-3">
                  {project.result}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#main-form"
            className="text-primary hover:text-primary-glow font-semibold inline-flex items-center gap-2 transition-colors"
          >
            Get pricing for your structural project →
          </a>
        </div>
      </div>
    </section>
  );
};
