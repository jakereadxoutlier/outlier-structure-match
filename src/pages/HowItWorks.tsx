import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CheckCircle2, FileText, Users, ThumbsUp, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "You submit your project details",
      description:
        "Share your project scope, location, budget range, and timeline through our structured intake form. The more detail you provide, the better we can match you with the right crews.",
      icon: FileText,
    },
    {
      number: "02",
      title: "We match you with vetted structural concrete crews",
      description:
        "Outlier Structures reviews your project and routes it to qualified structural concrete contractors in our network. All crews are licensed, insured, and have proven track records on similar scopes.",
      icon: Users,
    },
    {
      number: "03",
      title: "You review bids and choose who to work with",
      description:
        "Receive detailed bids with pricing, timelines, and approaches. Interview contractors, check references, and make your own hiring decision. You maintain full control over your project.",
      icon: ThumbsUp,
    },
    {
      number: "04",
      title: "We stay in the loop at a high level",
      description:
        "Throughout your project, we check in to ensure things are on track. If issues arise, we're here to help facilitate communication and problem-solving between you and your chosen contractor.",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <div className="pointer-events-none fixed inset-0 opacity-60" aria-hidden>
        <div className="grain-surface absolute inset-0 rounded-none" />
      </div>

      <SiteHeader />

      <div className="relative">
        {/* Hero Section */}
        <section className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.7em] text-white/40">Process</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-6xl">
            How <span className="highlight-pill">Outlier Structures</span> works
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            A visible, documented process from intake through turnover. No guesswork, no vibe-coded chaos.
          </p>
        </section>

        {/* Steps Section */}
        <section className="relative mx-auto max-w-5xl px-4 pb-24 sm:px-6">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="rounded-[48px] border border-white/10 bg-black/30 p-3 transition-all hover:border-white/20"
              >
                <div className="paper-surface rounded-[40px] p-8 sm:p-12">
                  <div className="grid gap-8 lg:grid-cols-[auto,1fr]">
                    <div className="flex items-center gap-6 lg:flex-col lg:items-start">
                      <div className="flex size-20 shrink-0 items-center justify-center rounded-[28px] bg-gradient-to-br from-[hsl(22_96%_60%)] to-[hsl(32_95%_72%)] text-2xl font-bold text-[hsl(23_30%_12%)]">
                        {step.number}
                      </div>
                      <step.icon className="size-12 text-black/40 lg:mt-4" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-black sm:text-3xl">
                        {step.title}
                      </h2>
                      <p className="mt-4 text-lg leading-relaxed text-black/70">
                        {step.description}
                      </p>
                      {index < steps.length - 1 && (
                        <div className="mt-6 flex items-center gap-2 text-black/40">
                          <ArrowRight className="size-5" />
                          <span className="text-sm uppercase tracking-[0.3em]">Next step</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative mx-auto max-w-5xl px-4 pb-32 sm:px-6">
          <div className="rounded-[48px] border border-white/10 bg-gradient-to-b from-[#141414] to-[#050505] p-8 text-center sm:p-16">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
              Share your project details and we'll connect you with qualified structural concrete contractors in your area.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/bid"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[hsl(22_96%_60%)] to-[hsl(32_95%_72%)] px-8 py-4 text-base font-bold uppercase tracking-[0.3em] text-[hsl(23_30%_12%)] shadow-[0_12px_32px_hsl(22_96%_40%_/_0.35)] transition hover:scale-[1.02]"
              >
                Get a structural bid <ArrowUpRight className="size-5" />
              </Link>
              <Link
                to="/service-areas"
                className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-8 py-4 text-base font-semibold uppercase tracking-[0.3em] text-white/90 transition hover:border-primary hover:bg-white/10"
              >
                View service areas <ArrowUpRight className="size-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowItWorks;

const SiteHeader = () => (
  <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f0f0d]/98 backdrop-blur-md">
    <div className="relative flex items-center justify-between px-4 py-6 text-sm font-medium uppercase tracking-[0.3em] text-white/70 sm:px-6 lg:px-8">
      <Link to="/" className="flex items-center gap-4 text-white/80 transition hover:text-white">
        <ArrowLeft className="size-6" />
        <span>Back to home</span>
      </Link>
      <Link to="/" className="absolute left-1/2 -translate-x-1/2 text-base font-semibold text-white/95">
        OUTLIER STRUCTURES
      </Link>
      <Link
        to="/bid"
        className="rounded-lg bg-gradient-to-r from-[hsl(22_96%_60%)] to-[hsl(32_95%_72%)] px-7 py-3.5 text-sm font-bold uppercase tracking-[0.35em] text-[hsl(23_30%_12%)] shadow-[0_12px_32px_hsl(22_96%_40%_/_0.35)] transition hover:scale-[1.02]"
      >
        Get Bid
      </Link>
    </div>
  </header>
);
