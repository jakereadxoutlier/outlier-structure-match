import { motion } from "framer-motion";
import { Award, MapPin } from "lucide-react";

export const TrustedStrip = () => {
  return (
    <section className="relative py-12 border-y border-slate-800/50 bg-slate-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
        >
          <div className="flex items-center gap-3 text-slate-400">
            <Award className="w-6 h-6 text-cyan-400" />
            <p className="text-sm">
              Backed by decades of structural concrete experience
            </p>
          </div>
          <div className="hidden md:block w-px h-8 bg-slate-700" />
          <div className="flex items-center gap-3 text-slate-400">
            <MapPin className="w-6 h-6 text-cyan-400" />
            <p className="text-sm">
              Serving Ventura County and Southern California
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
