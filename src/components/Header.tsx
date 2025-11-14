import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Square } from "lucide-react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-lg border-b border-slate-800/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Square className="w-6 h-6 text-cyan-400" strokeWidth={2.5} />
            <span className="text-xl font-bold text-slate-50">
              Outlier Structures
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-sm text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("why-outlier")}
              className="text-sm text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Why Outlier
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm text-slate-300 hover:text-cyan-400 transition-colors"
            >
              FAQ
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="hidden lg:flex items-center gap-2 border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
            >
              <Phone className="w-4 h-4" />
              <span>(805) 555-0100</span>
            </Button>
            <Button
              onClick={() => scrollToSection("lead-form")}
              size="sm"
              className="bg-cyan-500 text-slate-950 hover:bg-cyan-400 font-semibold"
            >
              Get a structural bid
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
