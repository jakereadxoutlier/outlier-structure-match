import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { SharedHeader } from "@/components/SharedHeader";

const Bid = () => {
  // Load HighLevel form embed script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <div className="pointer-events-none fixed inset-0 opacity-60" aria-hidden>
        <div className="grain-surface absolute inset-0 rounded-none" />
      </div>

      <SharedHeader />

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

                {/* HighLevel Form Embed */}
                <div className="relative w-full" style={{ minHeight: '1100px' }}>
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/4E6H1BSzxG81pl1jsiKs"
                    style={{
                      width: '100%',
                      height: '1100px',
                      border: 'none',
                      borderRadius: '8px',
                    }}
                    id="inline-4E6H1BSzxG81pl1jsiKs"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Form 1"
                    data-height="1081"
                    data-layout-iframe-id="inline-4E6H1BSzxG81pl1jsiKs"
                    data-form-id="4E6H1BSzxG81pl1jsiKs"
                    title="Form 1"
                  />
                </div>
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

/* ========================================
   OLD FORM CODE - KEPT FOR REFERENCE
   ======================================== 

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowUpRight, ArrowLeft } from "lucide-react";

type FormData = {
  name: string;
  role: string;
  email: string;
  phone: string;
  projectAddress: string;
  zipCode: string;
  projectTypes: string[];
  projectStage: string;
  budgetRange: string;
  startWindow: string;
  flexibility: string;
  plansLink: string;
  additionalNotes: string;
};

// OLD FORM COMPONENT
const OldBidForm = () => {
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
                <form onSubmit={handleSubmit} className="space-y-8">
      // Contact Info
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

        // ... rest of form fields ...

                  </div>

                  <Button
                    type="submit"
                    className="w-full rounded-lg bg-black py-6 text-base font-bold uppercase tracking-[0.3em] text-white transition hover:scale-[1.02]"
                  >
                    Submit project
                    <ArrowUpRight className="ml-2 size-5" />
                  </Button>
                </form>
  );
};

======================================== */
