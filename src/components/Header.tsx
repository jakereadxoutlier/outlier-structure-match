import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("main-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-card border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-xl sm:text-2xl font-bold text-foreground hover:text-primary transition-colors"
          >
            Outlier Structures
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#projects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#why-outlier" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Why Outlier
            </a>
            <a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex items-center gap-2 border-primary/50 hover:border-primary hover:bg-primary/10"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden md:inline">(805) 555-0100</span>
            </Button>
            <Button
              onClick={scrollToForm}
              className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold glow-primary transition-all text-sm sm:text-base px-3 sm:px-6"
            >
              Get a Bid
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
