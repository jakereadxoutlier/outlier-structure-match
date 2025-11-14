import { BarChart3, Clock, DollarSign, Star } from "lucide-react";

const stats = [
  {
    icon: BarChart3,
    value: "500+",
    label: "Local SoCal projects supported behind our network",
  },
  {
    icon: Clock,
    value: "<24hrs",
    label: "Average first response time",
  },
  {
    icon: DollarSign,
    value: "$50k+",
    label: "High-value projects only, no low-ticket noise",
  },
  {
    icon: Star,
    value: "40+ Years",
    label: "Combined structural concrete experience",
  },
];

const testimonials = [
  {
    quote: "Outlier connected us with a structural crew who understood our podium timeline and inspection sequencing. Saved us weeks of back-and-forth.",
    name: "Michael Torres",
    title: "Project Manager, Torres Construction Group",
  },
  {
    quote: "Fast response, realistic pricing, and direct communication with the concrete team. No middleman runaround. Exactly what we needed for our parking structure retrofit.",
    name: "Jennifer Park",
    title: "Development Director, Coastal Properties",
  },
  {
    quote: "We needed a crew that could handle complex shoring and tight urban access. Outlier matched us with the right team on the first try.",
    name: "David Chen",
    title: "Principal, Chen & Associates GC",
  },
];

export const ResultsProof = () => {
  return (
    <section className="py-16 sm:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats band */}
        <div className="glass-card p-8 sm:p-12 rounded-2xl mb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Trusted by Construction Professionals
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="glass-card p-6 rounded-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-primary text-5xl mb-4">"</div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {testimonial.quote}
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
