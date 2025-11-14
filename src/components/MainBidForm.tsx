import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle } from "lucide-react";

export const MainBidForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1
    projectType: "",
    buildType: "",
    budget: "",
    city: "",
    timing: "",
    // Step 2
    name: "",
    company: "",
    role: "",
    email: "",
    phone: "",
    hearAbout: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Main form submitted:", formData);
    setIsSubmitted(true);
  };

  const progressPercentage = (step / 2) * 100;

  if (isSubmitted) {
    return (
      <section id="main-form" className="py-16 sm:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto glass-card p-8 sm:p-12 rounded-2xl text-center">
            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Thank You for Your Interest
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              A project coordinator from Outlier Structures will review your project details and reach out within one business day.
            </p>
            <p className="text-sm text-muted-foreground">
              Have an urgent need? Call us directly at <span className="text-primary font-semibold">(805) 555-0100</span>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="main-form" className="py-16 sm:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Get a Structural Concrete Bid
            </h2>
            <p className="text-lg text-muted-foreground">
              We'll connect you to a vetted structural contractor. No spam or mass emailing.
            </p>
          </div>

          {/* Progress indicator */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-foreground">Step {step} of 2</span>
              <span className="text-sm text-muted-foreground">{progressPercentage}% Complete</span>
            </div>
            <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <div className="flex justify-between mt-4">
              <div className={`flex items-center gap-2 ${step >= 1 ? 'text-primary' : 'text-muted-foreground'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
                  1
                </div>
                <span className="text-sm font-medium hidden sm:inline">Project Basics</span>
              </div>
              <div className={`flex items-center gap-2 ${step >= 2 ? 'text-primary' : 'text-muted-foreground'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
                  2
                </div>
                <span className="text-sm font-medium hidden sm:inline">Contact Details</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 rounded-2xl">
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Project Basics</h3>

                <div>
                  <Label htmlFor="main-project-type">Project Type *</Label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) =>
                      setFormData({ ...formData, projectType: value })
                    }
                    required
                  >
                    <SelectTrigger id="main-project-type" className="bg-background/50">
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
                  <Label className="mb-3 block">New Build or Retrofit? *</Label>
                  <RadioGroup
                    value={formData.buildType}
                    onValueChange={(value) =>
                      setFormData({ ...formData, buildType: value })
                    }
                    required
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="new-build" id="new-build" />
                      <Label htmlFor="new-build" className="cursor-pointer font-normal">
                        New Build
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="retrofit" id="retrofit" />
                      <Label htmlFor="retrofit" className="cursor-pointer font-normal">
                        Retrofit / Repair
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="main-budget">Approximate Structural Budget *</Label>
                  <Select
                    value={formData.budget}
                    onValueChange={(value) =>
                      setFormData({ ...formData, budget: value })
                    }
                    required
                  >
                    <SelectTrigger id="main-budget" className="bg-background/50">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="50k-250k">$50k - $250k</SelectItem>
                      <SelectItem value="250k-1m">$250k - $1M</SelectItem>
                      <SelectItem value="1m-3m">$1M - $3M</SelectItem>
                      <SelectItem value="3m+">$3M+</SelectItem>
                      <SelectItem value="not-sure">Not sure yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="main-city">Project City *</Label>
                  <Input
                    id="main-city"
                    placeholder="e.g., Ventura, Oxnard, Camarillo"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    className="bg-background/50"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="main-timing">Estimated Start Window *</Label>
                  <Select
                    value={formData.timing}
                    onValueChange={(value) =>
                      setFormData({ ...formData, timing: value })
                    }
                    required
                  >
                    <SelectTrigger id="main-timing" className="bg-background/50">
                      <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-3">0-3 months</SelectItem>
                      <SelectItem value="3-6">3-6 months</SelectItem>
                      <SelectItem value="6-12">6-12 months</SelectItem>
                      <SelectItem value="12+">12+ months</SelectItem>
                      <SelectItem value="planning">Planning phase</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-semibold"
                >
                  Next: Contact Details
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Contact Details</h3>

                <div>
                  <Label htmlFor="main-name">Name *</Label>
                  <Input
                    id="main-name"
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
                  <Label htmlFor="main-company">Company Name *</Label>
                  <Input
                    id="main-company"
                    placeholder="Your company"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="bg-background/50"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="main-role">Your Role *</Label>
                  <Select
                    value={formData.role}
                    onValueChange={(value) =>
                      setFormData({ ...formData, role: value })
                    }
                    required
                  >
                    <SelectTrigger id="main-role" className="bg-background/50">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gc">General Contractor</SelectItem>
                      <SelectItem value="developer">Developer</SelectItem>
                      <SelectItem value="owner">Property Owner</SelectItem>
                      <SelectItem value="pm">Project Manager</SelectItem>
                      <SelectItem value="engineer">Engineer</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="main-email">Email *</Label>
                  <Input
                    id="main-email"
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
                  <Label htmlFor="main-phone">Phone *</Label>
                  <Input
                    id="main-phone"
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

                <div>
                  <Label htmlFor="main-hear-about">How did you hear about Outlier Structures?</Label>
                  <Input
                    id="main-hear-about"
                    placeholder="Optional"
                    value={formData.hearAbout}
                    onChange={(e) =>
                      setFormData({ ...formData, hearAbout: e.target.value })
                    }
                    className="bg-background/50"
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    onClick={() => setStep(1)}
                    variant="outline"
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-primary hover:bg-primary-glow text-primary-foreground font-semibold glow-primary"
                  >
                    Request a Structural Bid
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
