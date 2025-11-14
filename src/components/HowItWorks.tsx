import { motion } from "framer-motion";
import { ClipboardList, Users2, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Tell us about your structural package",
    description:
      "Quick intake form or 15-minute call. Share your plans, timeline, and budget range. No long discovery meetings.",
  },
  {
    number: "02",
    icon: Users2,
    title: "We match you with vetted structural crews",
    description:
      "We review scope, plans, and timing. Match you with crews who have done similar work and can meet your schedule.",
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "You get a fast, clear bid and schedule",
    description:
      "Contractor connects directly with you. Realistic pricing, clear timeline, and straightforward communication.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            How Outlier Structures works on your project
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Simple process, serious results
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/50 via-cyan-500 to-cyan-500/50" 
              style={{ width: 'calc(100% - 8rem)', left: '4rem' }} 
            />

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Number Circle */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/10 border-2 border-cyan-400 flex items-center justify-center relative z-10">
                    <span className="text-2xl font-bold text-cyan-400">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div className="glass-card rounded-xl p-6 border border-slate-700/50 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-slate-50">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
