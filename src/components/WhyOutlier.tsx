import { Target, Shield, Calendar, MessageSquare } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Structural-Only Focus",
    description: "We don't spread thin across all trades. Our entire network is built around structural concrete expertise, from foundations to post-tension decks.",
  },
  {
    icon: Shield,
    title: "Pre-Vetted Crews",
    description: "Every contractor in our network is pre-qualified for licensing, insurance, and proven performance on complex projects. No random directory listings.",
  },
  {
    icon: Calendar,
    title: "Schedule & Inspection Driven",
    description: "We match you with teams who understand critical path sequencing, inspection coordination, and the realities of phased construction timelines.",
  },
  {
    icon: MessageSquare,
    title: "Transparent, Direct Communication",
    description: "No black-box bidding or endless layers. You communicate directly with the structural contractor after our initial match and introduction.",
  },
];

export const WhyOutlier = () => {
  return (
    <section id="why-outlier" className="py-16 sm:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose Outlier Structures
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            A modern approach to structural concrete project matching
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="glass-card p-6 sm:p-8 rounded-xl hover:shadow-2xl hover:glow-primary transition-all duration-300 group"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="#main-form"
            className="text-primary hover:text-primary-glow font-semibold inline-flex items-center gap-2 transition-colors text-lg"
          >
            Get started with Outlier Structures →
          </a>
        </div>
      </div>
    </section>
  );
};
