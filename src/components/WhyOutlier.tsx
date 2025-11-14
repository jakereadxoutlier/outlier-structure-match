import { motion } from "framer-motion";
import { Target, Shield, Clock, MessageSquare, Quote } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Structural-only focus",
    description:
      "We don't dilute expertise across flatwork or landscaping. Just serious structural concrete.",
  },
  {
    icon: Shield,
    title: "Vetted crews & safety-minded operations",
    description:
      "Every crew verified for insurance, safety record, and past project performance.",
  },
  {
    icon: Clock,
    title: "Schedule & inspection driven",
    description:
      "Crews who understand inspections, coordination, and the cost of delays.",
  },
  {
    icon: MessageSquare,
    title: "Transparent, direct communication",
    description:
      "No runarounds. Realistic timelines, clear pricing, and responsive project managers.",
  },
];

const testimonials = [
  {
    quote:
      "We've used Outlier Structures on three podium decks now. Every crew they've matched us with knows how to handle inspections and stay on schedule.",
    author: "Mike Torrente",
    role: "VP of Construction, Pacific Coast Builders",
  },
  {
    quote:
      "Finally, a way to get realistic structural bids without chasing down five contractors who ghost you or don't understand post-tension work.",
    author: "Sarah Chen",
    role: "Project Manager, Westside Development",
  },
  {
    quote:
      "The seismic retrofit crew Outlier connected us with was professional, coordinated, and finished ahead of schedule. Our tenants barely noticed the work.",
    author: "David Ramirez",
    role: "Asset Manager, Heritage Properties REIT",
  },
];

export const WhyOutlier = () => {
  return (
    <section id="why-outlier" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Why Outlier Structures instead of just calling another contractor
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            We're not a general directory. We match you with structural concrete
            crews who can actually handle your project.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 border border-slate-700/50"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <pillar.icon className="w-6 h-6 text-cyan-400" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-slate-50">
                {pillar.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 border border-slate-700/50"
              >
                <Quote className="w-8 h-8 text-cyan-400/30 mb-4" />
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-slate-700/50 pt-4">
                  <p className="font-semibold text-slate-50">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
