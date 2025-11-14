import { Link } from "react-router-dom";
import { ArrowUpRight, Target, Shield, Users, TrendingUp } from "lucide-react";
import { SharedHeader } from "@/components/SharedHeader";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Focused expertise",
      description:
        "We only do structural concrete. No general contracting, no jack-of-all-trades. This focus means we know the right crews, the right questions to ask, and the right approach for your scope.",
    },
    {
      icon: Shield,
      title: "Neutral matchmaking",
      description:
        "We're not the contractor — we're the connection layer. All crews in our network are licensed, insured, and independently verified. You choose who to hire and negotiate directly.",
    },
    {
      icon: Users,
      title: "Relationship-driven",
      description:
        "We've built relationships with reputable structural concrete contractors across Ventura County and the West Valley. These aren't random leads — they're crews we'd recommend to our own family.",
    },
    {
      icon: TrendingUp,
      title: "High-level oversight",
      description:
        "Once you're matched and moving forward, we stay in touch to ensure things progress smoothly. If challenges arise, we facilitate communication and problem-solving.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <div className="pointer-events-none fixed inset-0 opacity-60" aria-hidden>
        <div className="grain-surface absolute inset-0 rounded-none" />
      </div>

      <SharedHeader />

      <div className="relative">
        {/* Hero Section */}
        <section className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.7em] text-white/40">About us</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-6xl">
            Elite matchmaking for <span className="highlight-pill">ultra-luxury</span> structural concrete
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Outlier Structures connects ultra-luxury custom home projects and major commercial developments with elite structural concrete contractors specializing in $200k-$5M structural packages.
          </p>
        </section>

        {/* Story Section */}
        <section className="relative mx-auto max-w-5xl px-4 pb-16 sm:px-6">
          <div className="rounded-[48px] border border-white/10 bg-black/30 p-3">
            <div className="paper-surface rounded-[40px] p-8 sm:p-12">
              <h2 className="text-2xl font-semibold text-black sm:text-3xl">Our story</h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-black/70 sm:text-lg">
                <p>
                  Outlier Structures was founded to solve a specific problem in the ultra-luxury and commercial structural concrete market: finding elite contractors capable of executing high-complexity $200k-$5M structural packages is difficult and time-consuming.
                </p>
                <p>
                  We leverage deep experience and established relationships with elite structural concrete contractors across Ventura County, Conejo Valley, West San Fernando Valley, Malibu, and Topanga. These aren't random leads — they're licensed, insured crews with proven track records on ultra-luxury custom homes, complex hillside projects, and major commercial developments.
                </p>
                <p>
                  Our role is simple: we're a neutral matchmaking and coordination layer for high-value projects. We don't sell leads, we don't take a cut of your bid, and we don't pressure you into working with anyone. We connect projects with elite crews capable of handling the complexity and scale of your scope.
                </p>
                <p>
                  If you're planning an ultra-luxury custom home, complex hillside project, or commercial development and need access to elite structural concrete contractors, we're here to help.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="relative mx-auto max-w-5xl px-4 pb-16 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              What sets us apart
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">
              We're not just another lead generation service. Here's what makes Outlier Structures different:
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-[48px] border border-white/10 bg-gradient-to-b from-[#141414] to-[#050505] p-8 transition-all hover:border-white/20"
              >
                <value.icon className="size-10 text-[hsl(var(--primary))]" />
                <h3 className="mt-4 text-xl font-semibold text-white">{value.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Who We Work With */}
        <section className="relative mx-auto max-w-5xl px-4 pb-16 sm:px-6">
          <div className="rounded-[48px] border border-white/10 bg-black/30 p-3">
            <div className="paper-surface rounded-[40px] p-8 sm:p-12">
              <h2 className="text-2xl font-semibold text-black sm:text-3xl">Who we work with</h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                <div className="space-y-3">
                  <div className="flex size-14 items-center justify-center rounded-[20px] bg-[hsl(var(--primary))] text-2xl font-bold text-white">
                    GC
                  </div>
                  <h3 className="text-lg font-semibold text-black">General Contractors</h3>
                  <p className="text-sm leading-relaxed text-black/70">
                    Building custom homes, managing renovations, or coordinating commercial projects that need reliable structural concrete crews.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex size-14 items-center justify-center rounded-[20px] bg-[hsl(var(--primary))] text-2xl font-bold text-white">
                    D
                  </div>
                  <h3 className="text-lg font-semibold text-black">Developers</h3>
                  <p className="text-sm leading-relaxed text-black/70">
                    Managing multi-unit residential, mixed-use, or commercial developments that require structural concrete work.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex size-14 items-center justify-center rounded-[20px] bg-[hsl(var(--primary))] text-2xl font-bold text-white">
                    H
                  </div>
                  <h3 className="text-lg font-semibold text-black">Ultra-Luxury Homeowners</h3>
                  <p className="text-sm leading-relaxed text-black/70">
                    Building ultra-luxury custom homes with complex structural requirements, hillside challenges, or high-end architectural concrete elements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ideal Project Size */}
        <section className="relative mx-auto max-w-5xl px-4 pb-16 sm:px-6">
          <div className="rounded-[48px] border border-white/10 bg-gradient-to-b from-[#141414] to-[#050505] p-8 text-center sm:p-16">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Ideal project size: $200k–$5M
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
              We specialize in large structural concrete scopes for ultra-luxury custom homes, complex hillside sites, and commercial developments. Foundation packages, major retaining systems, podium slabs, and high-complexity structural work where execution quality is paramount.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/60">
              Smaller residential projects (under $200k structural scope) are typically better served by general contractors. Our network specializes in high-complexity, high-value work.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative mx-auto max-w-5xl px-4 pb-32 sm:px-6">
          <div className="rounded-[48px] border border-white/10 bg-black/30 p-3">
            <div className="paper-surface rounded-[40px] p-8 text-center sm:p-16">
              <h2 className="text-3xl font-semibold text-black sm:text-4xl">
                Let's connect your project
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-black/70">
                Ready to get serious structural concrete bids without the chaos? Share your project details and we'll take it from there.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/bid"
                  className="inline-flex items-center gap-2 rounded-lg bg-black px-8 py-4 text-base font-bold uppercase tracking-[0.3em] text-white transition hover:scale-[1.02]"
                >
                  Get a structural bid <ArrowUpRight className="size-5" />
                </Link>
                <Link
                  to="/service-areas"
                  className="inline-flex items-center gap-2 rounded-lg border border-black/20 px-8 py-4 text-base font-semibold uppercase tracking-[0.3em] text-black/80 transition hover:border-primary"
                >
                  View service areas <ArrowUpRight className="size-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
