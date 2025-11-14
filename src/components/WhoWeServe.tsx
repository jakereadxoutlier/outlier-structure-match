import { motion } from "framer-motion";
import { Building2, Users, Briefcase } from "lucide-react";

const clients = [
  {
    icon: Building2,
    title: "General Contractors",
    description:
      "Fast, clear bids on structural packages. We coordinate with your schedule and handle inspections professionally.",
  },
  {
    icon: Users,
    title: "Developers & Owners",
    description:
      "Direct access to vetted structural crews. Skip the middleman and get realistic pricing with transparent communication.",
  },
  {
    icon: Briefcase,
    title: "Asset Managers & REITs",
    description:
      "Portfolio-scale structural work and seismic retrofits. Coordinated scheduling across multiple properties.",
  },
];

export const WhoWeServe = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Who we work with</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Outlier Structures connects serious players who need structural
            concrete done right
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card rounded-xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <client.icon className="w-7 h-7 text-cyan-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-50">
                {client.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {client.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
