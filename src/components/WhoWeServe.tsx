import { Building2, Briefcase, Home } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "General Contractors",
    description: "Get matched with reliable structural concrete crews for your project schedules. Fast turnaround on bids with crews who understand coordination and timelines.",
  },
  {
    icon: Briefcase,
    title: "Developers",
    description: "Connect with vetted teams for podium decks, parking structures, and foundation packages. Budget-conscious crews with proven track records on complex builds.",
  },
  {
    icon: Home,
    title: "Property Owners & Asset Managers",
    description: "Access structural expertise for seismic retrofits, repairs, and capital improvements. Direct communication with specialists who prioritize safety and minimal disruption.",
  },
];

export const WhoWeServe = () => {
  return (
    <section className="py-16 sm:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Who We Serve
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Connecting the right structural concrete professionals with the right projects
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {audiences.map((audience) => {
            const Icon = audience.icon;
            return (
              <div
                key={audience.title}
                className="glass-card p-6 sm:p-8 rounded-xl hover:shadow-2xl hover:glow-primary transition-all duration-300 group"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">{audience.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {audience.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
