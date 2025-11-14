import { Building, Layers, CarFront, Wrench, HardHat } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Structural Slabs & Podium Decks",
    benefit: "Post-tension and conventional systems for multi-level residential and mixed-use projects.",
  },
  {
    icon: Building,
    title: "Foundations & Retaining Walls",
    benefit: "Deep foundations, grade beams, shotcrete, and engineered earth retention for complex sites.",
  },
  {
    icon: CarFront,
    title: "Parking Structures & Ramps",
    benefit: "Above and below-grade parking with coordinated sequencing for phased construction.",
  },
  {
    icon: Wrench,
    title: "Seismic Retrofit & Structural Repair",
    benefit: "Code-compliant upgrades, carbon fiber strengthening, and concrete restoration for existing buildings.",
  },
  {
    icon: HardHat,
    title: "Shoring & Temporary Works",
    benefit: "Engineered temporary support systems for excavations and adjacent structure protection (expanding soon).",
  },
];

export const ServicesGrid = () => {
  return (
    <section id="services" className="py-16 sm:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Structural Concrete Services
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized crews for every phase of structural concrete work
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="glass-card p-6 rounded-xl hover:shadow-2xl hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="bg-secondary w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.benefit}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="#main-form"
            className="text-primary hover:text-primary-glow font-semibold inline-flex items-center gap-2 transition-colors"
          >
            Get a bid for your structural project →
          </a>
        </div>
      </div>
    </section>
  );
};
