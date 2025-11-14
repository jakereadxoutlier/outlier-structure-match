import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SharedHeader } from "@/components/SharedHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type FormData = {
  // Contact info
  name: string;
  role: string;
  email: string;
  phone: string;
  // Project basics
  projectAddress: string;
  zipCode: string;
  projectTypes: string[];
  projectStage: string;
  // Budget and timing
  budgetRange: string;
  startWindow: string;
  flexibility: string;
  // Plans and notes
  plansLink: string;
  additionalNotes: string;
};

const Bid = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    role: "",
    email: "",
    phone: "",
    projectAddress: "",
    zipCode: "",
    projectTypes: [],
    projectStage: "",
    budgetRange: "",
    startWindow: "",
    flexibility: "",
    plansLink: "",
    additionalNotes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Scroll to top to show success message
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleProjectTypeChange = (type: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      projectTypes: checked
        ? [...prev.projectTypes, type]
        : prev.projectTypes.filter((t) => t !== type),
    }));
  };

  if (submitted) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
        <div className="pointer-events-none fixed inset-0 opacity-60" aria-hidden>
          <div className="grain-surface absolute inset-0 rounded-none" />
        </div>

        <SharedHeader />

        <div className="relative">
          <div className="mx-auto max-w-3xl px-4 py-32 sm:px-6">
            <div className="rounded-[48px] border border-white/10 bg-black/30 p-3">
              <div className="paper-surface rounded-[40px] p-10 text-center sm:p-16">
                <CheckCircle2 className="mx-auto size-16 text-[hsl(var(--primary))]" />
                <h1 className="mt-6 text-4xl font-semibold text-black sm:text-5xl">
                  Thanks for sharing your project
                </h1>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-black/70">
                  We typically respond within 1 business day with next steps. One of our project coordinators will review your details and connect you with the right structural concrete crews for your scope.
                </p>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 rounded-lg bg-black px-8 py-4 text-base font-bold uppercase tracking-[0.3em] text-white transition hover:scale-[1.02]"
                  >
                    <ArrowLeft className="size-5" />
                    Back to home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <div className="pointer-events-none fixed inset-0 opacity-60" aria-hidden>
        <div className="grain-surface absolute inset-0 rounded-none" />
      </div>

      <SiteHeader />

      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
            {/* Left Column - Form */}
            <div className="rounded-[48px] border border-white/10 bg-black/30 p-3">
              <div className="paper-surface rounded-[40px] p-8 sm:p-12">
                <div className="mb-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.7em] text-black/40">
                    Project intake
                  </p>
                  <h1 className="mt-3 text-4xl font-semibold text-black sm:text-5xl">
                    Get a structural concrete bid
                  </h1>
                  <p className="mt-4 text-base leading-relaxed text-black/70">
                    Outlier Structures connects ultra-luxury custom home projects and commercial developments with elite structural concrete contractors across Ventura County, Conejo Valley, West San Fernando Valley, Malibu, and Topanga. Ideal for high-complexity structural packages from $200k to $5M.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Contact Info */}
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-black">Contact information</h2>
                    
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-black/80">
                        Name <span className="text-[hsl(var(--primary))]">*</span>
                      </Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="border-black/20 bg-white/80"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="role" className="text-black/80">
                        Role <span className="text-[hsl(var(--primary))]">*</span>
                      </Label>
                      <Select
                        required
                        value={formData.role}
                        onValueChange={(value) => setFormData({ ...formData, role: value })}
                      >
                        <SelectTrigger id="role" className="border-black/20 bg-white/80">
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="homeowner">Ultra-Luxury Homeowner</SelectItem>
                          <SelectItem value="gc">General Contractor</SelectItem>
                          <SelectItem value="developer">Developer / Owner's Rep</SelectItem>
                          <SelectItem value="architect">Architect / Engineer</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-black/80">
                          Email <span className="text-[hsl(var(--primary))]">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="border-black/20 bg-white/80"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-black/80">
                          Phone <span className="text-[hsl(var(--primary))]">*</span>
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="border-black/20 bg-white/80"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Basics */}
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-black">Project basics</h2>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="address" className="text-black/80">
                          Project address or nearest city <span className="text-[hsl(var(--primary))]">*</span>
                        </Label>
                        <Input
                          id="address"
                          required
                          value={formData.projectAddress}
                          onChange={(e) => setFormData({ ...formData, projectAddress: e.target.value })}
                          className="border-black/20 bg-white/80"
                          placeholder="e.g., Thousand Oaks"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zip" className="text-black/80">
                          Zip code <span className="text-[hsl(var(--primary))]">*</span>
                        </Label>
                        <Input
                          id="zip"
                          required
                          value={formData.zipCode}
                          onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                          className="border-black/20 bg-white/80"
                          placeholder="91360"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-black/80">
                        Project type (select all that apply) <span className="text-[hsl(var(--primary))]">*</span>
                      </Label>
                      <div className="space-y-3">
                        {[
                          { id: "ultra-luxury-home", label: "Ultra-luxury custom home foundation & structural package" },
                          { id: "hillside-complex", label: "Hillside / complex site retaining & stabilization" },
                          { id: "commercial", label: "Commercial structural concrete" },
                          { id: "podium-slab", label: "Podium slab / parking structure" },
                          { id: "mixed-use", label: "Large-scale mixed-use or multi-family" },
                        ].map((type) => (
                          <div key={type.id} className="flex items-center space-x-2">
                            <Checkbox
                              id={type.id}
                              checked={formData.projectTypes.includes(type.id)}
                              onCheckedChange={(checked) =>
                                handleProjectTypeChange(type.id, checked as boolean)
                              }
                            />
                            <label
                              htmlFor={type.id}
                              className="text-sm leading-none text-black/80 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {type.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="stage" className="text-black/80">
                        Project stage <span className="text-[hsl(var(--primary))]">*</span>
                      </Label>
                      <Select
                        required
                        value={formData.projectStage}
                        onValueChange={(value) => setFormData({ ...formData, projectStage: value })}
                      >
                        <SelectTrigger id="stage" className="border-black/20 bg-white/80">
                          <SelectValue placeholder="Select project stage" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="exploring">Just exploring pricing</SelectItem>
                          <SelectItem value="design">In design</SelectItem>
                          <SelectItem value="plans-ready">Have stamped structural plans</SelectItem>
                          <SelectItem value="permit">In permit or construction</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Budget and Timing */}
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-black">Budget and timing</h2>

                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-black/80">
                        Budget range <span className="text-[hsl(var(--primary))]">*</span>
                      </Label>
                      <Select
                        required
                        value={formData.budgetRange}
                        onValueChange={(value) => setFormData({ ...formData, budgetRange: value })}
                      >
                        <SelectTrigger id="budget" className="border-black/20 bg-white/80">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-200k">Under $200k</SelectItem>
                          <SelectItem value="200k-500k">$200k – $500k</SelectItem>
                          <SelectItem value="500k-1m">$500k – $1M</SelectItem>
                          <SelectItem value="1m-3m">$1M – $3M</SelectItem>
                          <SelectItem value="3m-5m">$3M – $5M</SelectItem>
                          <SelectItem value="5m-plus">$5M+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="start" className="text-black/80">
                        Ideal start window
                      </Label>
                      <Input
                        id="start"
                        value={formData.startWindow}
                        onChange={(e) => setFormData({ ...formData, startWindow: e.target.value })}
                        className="border-black/20 bg-white/80"
                        placeholder="e.g., Q2 2025, Spring 2025, ASAP"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label className="text-black/80">Scheduling flexibility</Label>
                      <RadioGroup
                        value={formData.flexibility}
                        onValueChange={(value) => setFormData({ ...formData, flexibility: value })}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="fixed" id="fixed" />
                          <Label htmlFor="fixed" className="text-black/80 font-normal">
                            Fixed
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="somewhat" id="somewhat" />
                          <Label htmlFor="somewhat" className="text-black/80 font-normal">
                            Somewhat flexible
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="very" id="very" />
                          <Label htmlFor="very" className="text-black/80 font-normal">
                            Very flexible
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  {/* Plans and Notes */}
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-black">Plans and notes</h2>

                    <div className="space-y-2">
                      <Label htmlFor="plans" className="text-black/80">
                        Link to plans / shared folder
                      </Label>
                      <Input
                        id="plans"
                        type="url"
                        value={formData.plansLink}
                        onChange={(e) => setFormData({ ...formData, plansLink: e.target.value })}
                        className="border-black/20 bg-white/80"
                        placeholder="Dropbox, Google Drive, etc."
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes" className="text-black/80">
                        Anything else we should know?
                      </Label>
                      <Textarea
                        id="notes"
                        value={formData.additionalNotes}
                        onChange={(e) =>
                          setFormData({ ...formData, additionalNotes: e.target.value })
                        }
                        className="min-h-32 border-black/20 bg-white/80"
                        placeholder="Site access, timeline concerns, specific requirements..."
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full rounded-lg bg-black py-6 text-base font-bold uppercase tracking-[0.3em] text-white transition hover:scale-[1.02]"
                  >
                    Submit project
                    <ArrowUpRight className="ml-2 size-5" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Right Column - Info */}
            <div className="space-y-6">
              <div className="rounded-[48px] border border-white/10 bg-gradient-to-b from-[#141414] to-[#050505] p-8 text-white">
                <h3 className="text-2xl font-semibold">Why Outlier Structures?</h3>
                <ul className="mt-6 space-y-4">
                  {[
                    "Elite structural crews for ultra-luxury & commercial",
                    "Optimized for $200k–$5M structural packages",
                    "Ultra-luxury homes, hillside, and commercial projects",
                    "High-complexity foundations, retaining, and podium work",
                    "Local to Ventura, Conejo, West Valley, Malibu, Topanga",
                    "You keep control over contractor selection",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[hsl(var(--primary))]" />
                      <span className="text-base leading-relaxed text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[48px] border border-white/10 bg-black/30 p-8 text-white">
                <h3 className="text-xl font-semibold">Service coverage</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  <strong className="text-white/90">Core areas:</strong> Ventura, Oxnard, Camarillo, Thousand Oaks, Newbury Park, Westlake Village, Simi Valley, Moorpark, Agoura Hills, Calabasas, Woodland Hills
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  <strong className="text-white/90">High-value hillside:</strong> Malibu, Topanga
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bid;
