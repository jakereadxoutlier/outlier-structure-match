import { FileText, Users, CheckCircle } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: FileText,
    title: "Tell us about your structural package",
    description: "Complete our intake form or schedule a quick call. Share plans, scope, timeline, and budget parameters.",
  },
  {
    number: 2,
    icon: Users,
    title: "We match you with vetted structural crews",
    description: "We review your project requirements and connect you with pre-qualified contractors who fit your schedule and scope.",
  },
  {
    number: 3,
    icon: CheckCircle,
    title: "You get a fast, clear bid and schedule",
    description: "The contractor reaches out directly with competitive pricing, sequencing plan, and transparent timelines.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How Outlier Structures Works on Your Project
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            A streamlined process to connect you with the right structural concrete partner
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Progress line - desktop only */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 via-primary to-primary/30" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative">
                  {/* Step number badge */}
                  <div className="flex flex-col items-center lg:items-start mb-6">
                    <div className="glass-card w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 border-primary glow-primary relative z-10">
                      <span className="text-2xl font-bold text-primary">{step.number}</span>
                    </div>
                    <div className="bg-secondary/50 w-14 h-14 rounded-xl flex items-center justify-center">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-center lg:text-left">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-center lg:text-left">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#main-form"
            className="text-primary hover:text-primary-glow font-semibold inline-flex items-center gap-2 transition-colors"
          >
            Start your project →
          </a>
        </div>
      </div>
    </section>
  );
};
