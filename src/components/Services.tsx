import { motion } from "framer-motion";
import { Layers, Hammer, ParkingCircle, WrenchIcon, HardHat } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Structural Slabs & Podium Decks",
    description:
      "Multi-level post-tension and conventional slabs over parking. Built to inspection standards with coordinated MEP blocking.",
  },
  {
    icon: Hammer,
    title: "Foundations & Retaining Walls",
    description:
      "Grade beams, mat slabs, drilled piers, and engineered retaining systems for new construction and additions.",
  },
  {
    icon: ParkingCircle,
    title: "Parking Structures & Ramps",
    description:
      "Precast, post-tension, and conventional parking decks. Experience with tight urban sites and phased construction.",
  },
  {
    icon: WrenchIcon,
    title: "Seismic Retrofit & Structural Repair",
    description:
      "Shear wall installation, foundation underpinning, and structural upgrades for existing buildings and portfolios.",
  },
  {
    icon: HardHat,
    title: "Shoring & Temporary Works",
    description:
      "Temporary shoring systems for excavation support and structural reinforcement during construction phases.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 relative bg-slate-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            What Outlier Structures connects you with
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            High-value structural concrete work that requires coordinated
            schedules, inspection readiness, and experienced crews
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 40px rgba(34, 211, 238, 0.3)"
              }}
              className="glass-card rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-cyan-400" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-slate-50">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
