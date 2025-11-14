import { motion } from "framer-motion";
import { MapPin, Layers, DollarSign } from "lucide-react";

const projects = [
  {
    name: "Harbor Terrace Podium",
    city: "Ventura, CA",
    scope: "Three-level post-tension podium deck over parking",
    budget: "$1.2M - $1.8M structural package",
    result:
      "Delivered on schedule while navigating tight inspections and coordinated MEP blocking.",
    image: "/placeholder.svg",
  },
  {
    name: "Westside Parking Structure",
    city: "Oxnard, CA",
    scope: "Five-level precast parking structure with ramps",
    budget: "$2.5M - $3.5M structural package",
    result:
      "Phased construction allowed ground-floor retail to stay operational throughout build.",
    image: "/placeholder.svg",
  },
  {
    name: "Channel Islands Foundation",
    city: "Camarillo, CA",
    scope: "Mat slab foundation and retaining walls for mixed-use",
    budget: "$400K - $600K structural package",
    result:
      "Complex soil conditions handled with engineered pier system and waterproofing coordination.",
    image: "/placeholder.svg",
  },
  {
    name: "Downtown Seismic Retrofit",
    city: "Ventura, CA",
    scope: "Shear wall installation and foundation underpinning",
    budget: "$800K - $1.2M structural package",
    result:
      "Building remained partially occupied during retrofit. Zero tenant disruption incidents.",
    image: "/placeholder.svg",
  },
  {
    name: "Pacific View Mixed-Use",
    city: "Port Hueneme, CA",
    scope: "Two-level podium with commercial at grade",
    budget: "$900K - $1.3M structural package",
    result:
      "Fast-track schedule met. Residential framing started two weeks ahead of baseline.",
    image: "/placeholder.svg",
  },
  {
    name: "Heritage Plaza Expansion",
    city: "Thousand Oaks, CA",
    scope: "Foundation and structural frame tie-in to existing building",
    budget: "$650K - $950K structural package",
    result:
      "Complex connection details coordinated with structural engineer. Passed all inspections first try.",
    image: "/placeholder.svg",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative bg-slate-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured projects</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Real structural concrete work matched through Outlier Structures
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-slate-50 mb-1">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <MapPin className="w-4 h-4" />
                    <span>{project.city}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-2">
                  <Layers className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-300">{project.scope}</p>
                </div>

                <div className="flex items-start gap-2">
                  <DollarSign className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-300">{project.budget}</p>
                </div>

                <div className="pt-4 border-t border-slate-700/50">
                  <p className="text-sm text-slate-400 italic">
                    "{project.result}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
