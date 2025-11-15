import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";

type FormStep = 1 | 2 | "success";

interface FormData {
  // Step 1
  projectType: string;
  buildType: string;
  budget: string;
  city: string;
  timeline: string;
  // Step 2
  name: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  notes: string;
}

export const LeadForm = () => {
  const [step, setStep] = useState<FormStep>(1);
  const [formData, setFormData] = useState<FormData>({
    projectType: "",
    buildType: "",
    budget: "",
    city: "",
    timeline: "",
    name: "",
    company: "",
    role: "",
    email: "",
    phone: "",
    notes: "",
  });

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setStep("success");
  };

  const progress = step === 1 ? 50 : step === 2 ? 100 : 100;

  return (
    <section id="lead-form" className="py-24 relative bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Get a structural concrete bid for your project
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            No spam. Real person follow-up. Response within one business day.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-8 md:p-12 border border-slate-700/50 relative overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <AnimatePresence mode="wait">
                {step !== "success" && (
                  <motion.div
                    key="progress"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mb-8"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-400">
                        Step {step} of 2
                      </span>
                      <span className="text-sm font-medium text-cyan-400">
                        {progress}% Complete
                      </span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 1: Project Basics */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-2xl font-bold mb-2">
                        Project basics
                      </h3>
                      <p className="text-slate-400 text-sm">
                        Tell us about your structural concrete package
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="projectType" className="text-slate-200">
                        Project Type
                      </Label>
                      <Select
                        value={formData.projectType}
                        onValueChange={(value) =>
                          updateFormData("projectType", value)
                        }
                      >
                        <SelectTrigger className="bg-slate-900/50 border-slate-700">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="podium">
                            Podium Deck / Post-Tension Slab
                          </SelectItem>
                          <SelectItem value="parking">
                            Parking Structure
                          </SelectItem>
                          <SelectItem value="foundation">
                            Foundation / Retaining Walls
                          </SelectItem>
                          <SelectItem value="retrofit">
                            Seismic Retrofit
                          </SelectItem>
                          <SelectItem value="other">
                            Other Structural Concrete
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-slate-200">Build Type</Label>
                      <RadioGroup
                        value={formData.buildType}
                        onValueChange={(value) =>
                          updateFormData("buildType", value)
                        }
                        className="flex gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="new" id="new" />
                          <Label htmlFor="new" className="text-slate-300 cursor-pointer">
                            New build
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="retrofit" id="retrofit" />
                          <Label htmlFor="retrofit" className="text-slate-300 cursor-pointer">
                            Retrofit / Repair
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-slate-200">
                        Approximate Structural Budget
                      </Label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) =>
                          updateFormData("budget", value)
                        }
                      >
                        <SelectTrigger className="bg-slate-900/50 border-slate-700">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="50k-150k">$50k - $150k</SelectItem>
                          <SelectItem value="150k-500k">
                            $150k - $500k
                          </SelectItem>
                          <SelectItem value="500k-1m">$500k - $1M</SelectItem>
                          <SelectItem value="1m-3m">$1M - $3M</SelectItem>
                          <SelectItem value="3m+">$3M+</SelectItem>
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
                        onChange={(e) => updateFormData("city", e.target.value)}
                        className="bg-slate-900/50 border-slate-700"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timeline" className="text-slate-200">
                        Project Timeline
                      </Label>
                      <Select
                        value={formData.timeline}
                        onValueChange={(value) =>
                          updateFormData("timeline", value)
                        }
                      >
                        <SelectTrigger className="bg-slate-900/50 border-slate-700">
                          <SelectValue placeholder="When do you need to start?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">
                            Immediate (1-2 weeks)
                          </SelectItem>
                          <SelectItem value="month">Within a month</SelectItem>
                          <SelectItem value="quarter">This quarter</SelectItem>
                          <SelectItem value="6months">Next 6 months</SelectItem>
                          <SelectItem value="planning">
                            Planning stage
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      onClick={handleNext}
                      className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold py-6 text-base"
                    >
                      Continue to contact details
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>
                )}

                {/* Step 2: Contact Details */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">
                          Contact details
                        </h3>
                        <p className="text-slate-400 text-sm">
                          How should we reach you?
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-slate-200">
                            Your Name *
                          </Label>
                          <Input
                            id="name"
                            required
                            placeholder="John Smith"
                            value={formData.name}
                            onChange={(e) =>
                              updateFormData("name", e.target.value)
                            }
                            className="bg-slate-900/50 border-slate-700"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company" className="text-slate-200">
                            Company Name *
                          </Label>
                          <Input
                            id="company"
                            required
                            placeholder="ABC Construction"
                            value={formData.company}
                            onChange={(e) =>
                              updateFormData("company", e.target.value)
                            }
                            className="bg-slate-900/50 border-slate-700"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="role" className="text-slate-200">
                          Your Role
                        </Label>
                        <Select
                          value={formData.role}
                          onValueChange={(value) =>
                            updateFormData("role", value)
                          }
                        >
                          <SelectTrigger className="bg-slate-900/50 border-slate-700">
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="gc">
                              General Contractor
                            </SelectItem>
                            <SelectItem value="developer">Developer</SelectItem>
                            <SelectItem value="owner">Owner</SelectItem>
                            <SelectItem value="pm">Project Manager</SelectItem>
                            <SelectItem value="asset">
                              Asset Manager
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-slate-200">
                            Email *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            placeholder="you@company.com"
                            value={formData.email}
                            onChange={(e) =>
                              updateFormData("email", e.target.value)
                            }
                            className="bg-slate-900/50 border-slate-700"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-slate-200">
                            Phone *
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            required
                            placeholder="Your phone number"
                            value={formData.phone}
                            onChange={(e) =>
                              updateFormData("phone", e.target.value)
                            }
                            className="bg-slate-900/50 border-slate-700"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="notes" className="text-slate-200">
                          Project Notes (Optional)
                        </Label>
                        <Textarea
                          id="notes"
                          placeholder="Any additional details about your project..."
                          value={formData.notes}
                          onChange={(e) =>
                            updateFormData("notes", e.target.value)
                          }
                          className="bg-slate-900/50 border-slate-700 min-h-[100px]"
                        />
                      </div>

                      <div className="flex gap-4">
                        <Button
                          type="button"
                          onClick={handleBack}
                          variant="outline"
                          className="flex-1 border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
                        >
                          <ArrowLeft className="mr-2 w-5 h-5" />
                          Back
                        </Button>
                        <Button
                          type="submit"
                          className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold py-6 text-base"
                        >
                          Submit Project
                        </Button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {/* Success State */}
                {step === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.2,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-cyan-500/20 mb-6"
                    >
                      <CheckCircle2 className="w-10 h-10 text-cyan-400" />
                    </motion.div>

                    <h3 className="text-3xl font-bold mb-4">
                      Thanks for reaching out
                    </h3>
                    <p className="text-slate-300 text-lg mb-2">
                      A project coordinator from Outlier Structures will review
                      your project and reach out within one business day.
                    </p>
                    <p className="text-slate-400 text-sm">
                      Check your email for confirmation.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
