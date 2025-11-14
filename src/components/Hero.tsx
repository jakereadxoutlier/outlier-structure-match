import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
import { CheckCircle2, Zap, Shield } from "lucide-react";

export const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

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
    // Scroll to main lead form
    const element = document.getElementById("lead-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated Background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Serious structural concrete crews for{" "}
                <span className="text-cyan-400">complex projects</span>
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl">
                We match general contractors, developers, and owners with vetted
                structural concrete crews for podium decks, parking structures,
                seismic retrofits, and other high-value work in Ventura County
                and Southern California.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-100 font-medium">
                    Fast, realistic bids from vetted structural crews
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-100 font-medium">
                    Projects from $50k to multi-million packages
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-100 font-medium">
                    Built around schedules, inspections, and safety
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Hero Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card rounded-2xl p-8 shadow-2xl border border-slate-700/50">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-50">
                    Get a project review
                  </h3>
                  <p className="text-sm text-slate-400">
                    Tell us about your structural package
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="projectType" className="text-slate-200">
                      Project Type
                    </Label>
                    <Select
                      value={formData.projectType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, projectType: value })
                      }
                    >
                      <SelectTrigger className="bg-slate-900/50 border-slate-700">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="podium">Podium Deck</SelectItem>
                        <SelectItem value="parking">Parking Structure</SelectItem>
                        <SelectItem value="foundation">Foundation</SelectItem>
                        <SelectItem value="retrofit">Seismic Retrofit</SelectItem>
                        <SelectItem value="other">Other Structural</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-slate-200">
                      Project City
                    </Label>
                    <Input
                      id="city"
                      placeholder="e.g., Ventura, Oxnard, Camarillo"
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      className="bg-slate-900/50 border-slate-700"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="startWindow" className="text-slate-200">
                      Start Window
                    </Label>
                    <Select
                      value={formData.startWindow}
                      onValueChange={(value) =>
                        setFormData({ ...formData, startWindow: value })
                      }
                    >
                      <SelectTrigger className="bg-slate-900/50 border-slate-700">
                        <SelectValue placeholder="When do you need to start?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate (1-2 weeks)</SelectItem>
                        <SelectItem value="month">Within a month</SelectItem>
                        <SelectItem value="quarter">This quarter</SelectItem>
                        <SelectItem value="planning">Planning stage</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-200">
                        Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="bg-slate-900/50 border-slate-700"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-200">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="bg-slate-900/50 border-slate-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-200">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(805) 555-0100"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="bg-slate-900/50 border-slate-700"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold py-6 text-base"
                  >
                    Get a project review
                  </Button>

                  <p className="text-xs text-slate-400 text-center">
                    No spam or mass list - direct contact only
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
