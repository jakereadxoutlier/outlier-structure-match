import { useState } from "react";
import { Building2, CheckCircle2, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import heroImage from "@/assets/hero-construction.jpg";

export const Hero = () => {
  const [formData, setFormData] = useState({
    projectType: "",
    city: "",
    startWindow: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Hero form submitted:", formData);
    alert("Thank you! We'll review your project and contact you within 24 hours.");
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Structural concrete construction"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Serious structural concrete crews for{" "}
              <span className="text-primary text-glow">complex projects</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              We connect general contractors, developers, and property owners with vetted structural concrete teams for podium decks, parking structures, seismic retrofits, and high-value work in Ventura County and beyond.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-foreground">
                  Fast, realistic bids from vetted structural crews
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-foreground">
                  Projects sized from $50k to multi-million budgets
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-foreground">
                  Built around schedules, inspections, and safety
                </p>
              </div>
            </div>

            {/* Credibility badges - visible on mobile at bottom, on desktop here */}
            <div className="hidden lg:flex flex-wrap gap-3 justify-center lg:justify-start">
              <div className="glass-card px-4 py-2 rounded-full text-sm text-muted-foreground">
                <Shield className="inline h-4 w-4 mr-2 text-primary" />
                40+ years of structural concrete experience
              </div>
              <div className="glass-card px-4 py-2 rounded-full text-sm text-muted-foreground">
                <Building2 className="inline h-4 w-4 mr-2 text-primary" />
                Focused on Ventura County & SoCal
              </div>
              <div className="glass-card px-4 py-2 rounded-full text-sm text-muted-foreground">
                <Clock className="inline h-4 w-4 mr-2 text-primary" />
                No spam, direct contact only
              </div>
            </div>
          </div>

          {/* Right side - Hero form */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">Get a Project Review</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Tell us about your structural concrete needs
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="hero-project-type">Project Type</Label>
                <Select
                  value={formData.projectType}
                  onValueChange={(value) =>
                    setFormData({ ...formData, projectType: value })
                  }
                >
                  <SelectTrigger id="hero-project-type" className="bg-background/50">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="podium">Podium Deck</SelectItem>
                    <SelectItem value="parking">Parking Structure</SelectItem>
                    <SelectItem value="foundation">Foundation & Retaining</SelectItem>
                    <SelectItem value="seismic">Seismic Retrofit</SelectItem>
                    <SelectItem value="other">Other Structural</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="hero-city">Project City</Label>
                <Input
                  id="hero-city"
                  placeholder="e.g., Ventura, Oxnard"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  className="bg-background/50"
                />
              </div>

              <div>
                <Label htmlFor="hero-start-window">Estimated Start Window</Label>
                <Select
                  value={formData.startWindow}
                  onValueChange={(value) =>
                    setFormData({ ...formData, startWindow: value })
                  }
                >
                  <SelectTrigger id="hero-start-window" className="bg-background/50">
                    <SelectValue placeholder="Select timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-3">0-3 months</SelectItem>
                    <SelectItem value="3-6">3-6 months</SelectItem>
                    <SelectItem value="6+">6+ months</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="hero-name">Name</Label>
                <Input
                  id="hero-name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-background/50"
                  required
                />
              </div>

              <div>
                <Label htmlFor="hero-email">Email</Label>
                <Input
                  id="hero-email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-background/50"
                  required
                />
              </div>

              <div>
                <Label htmlFor="hero-phone">Phone</Label>
                <Input
                  id="hero-phone"
                  type="tel"
                  placeholder="(805) 555-0100"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="bg-background/50"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-semibold glow-primary"
              >
                Get a Project Review
              </Button>
            </form>
          </div>

          {/* Credibility badges - mobile version */}
          <div className="lg:hidden flex flex-col gap-3 col-span-full">
            <div className="glass-card px-4 py-2 rounded-full text-sm text-muted-foreground text-center">
              <Shield className="inline h-4 w-4 mr-2 text-primary" />
              40+ years of structural concrete experience
            </div>
            <div className="glass-card px-4 py-2 rounded-full text-sm text-muted-foreground text-center">
              <Building2 className="inline h-4 w-4 mr-2 text-primary" />
              Focused on Ventura County & SoCal
            </div>
            <div className="glass-card px-4 py-2 rounded-full text-sm text-muted-foreground text-center">
              <Clock className="inline h-4 w-4 mr-2 text-primary" />
              No spam, direct contact only
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
