import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, MapPin, CheckCircle2 } from "lucide-react";

const ServiceAreas = () => {
  const coreAreas = [
    { name: "Ventura", county: "Ventura County" },
    { name: "Oxnard", county: "Ventura County" },
    { name: "Camarillo", county: "Ventura County" },
    { name: "Thousand Oaks", county: "Conejo Valley" },
    { name: "Newbury Park", county: "Conejo Valley" },
    { name: "Westlake Village", county: "Conejo Valley" },
    { name: "Simi Valley", county: "Ventura County" },
    { name: "Moorpark", county: "Ventura County" },
    { name: "Agoura Hills", county: "West San Fernando Valley" },
    { name: "Calabasas", county: "West San Fernando Valley" },
    { name: "Woodland Hills", county: "West San Fernando Valley" },
  ];

  const hillsideAreas = [
    { name: "Malibu", specialty: "Hillside foundations & retaining walls" },
    { name: "Topanga", specialty: "Hillside stabilization & structural support" },
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
          <p className="text-xs font-semibold uppercase tracking-[0.7em] text-white/40">Coverage</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-6xl">
            Where we <span className="highlight-pill">serve</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Focused structural concrete matching across Ventura County, Conejo Valley, West San Fernando Valley, and select hillside communities.
          </p>
        </section>

        {/* Service Radius Section */}
        <section className="relative mx-auto max-w-5xl px-4 pb-16 sm:px-6">
          <div className="rounded-[48px] border border-white/10 bg-black/30 p-3">
            <div className="paper-surface rounded-[40px] p-8 sm:p-12">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 size-8 shrink-0 text-[hsl(var(--primary))]" />
                <div>
                  <h2 className="text-2xl font-semibold text-black sm:text-3xl">
                    Our service radius
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-black/70">
                    Outlier Structures focuses on a roughly 30–45 minute radius from Thousand Oaks, covering the heart of Ventura County, Conejo Valley, and the West San Fernando Valley. This geographic focus allows us to work with structural concrete crews who know the local building departments, soil conditions, and permitting workflows.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-black/70">
                    For hillside projects in Malibu and Topanga, we connect clients with specialized crews experienced in retaining walls, hillside stabilization, and challenging site access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Service Areas */}
        <section className="relative mx-auto max-w-5xl px-4 pb-16 sm:px-6">
          <div className="rounded-[48px] border border-white/10 bg-gradient-to-b from-[#141414] to-[#050505] p-8 sm:p-12">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Core service areas</h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Cities and communities where we regularly match structural concrete projects:
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {coreAreas.map((area) => (
                <div
                  key={area.name}
                  className="flex items-start gap-3 rounded-[24px] border border-white/10 bg-black/30 p-5 transition hover:border-primary"
                >
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[hsl(var(--primary))]" />
                  <div>
                    <p className="text-lg font-semibold text-white">{area.name}</p>
                    <p className="text-sm text-white/60">{area.county}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hillside Specialty Areas */}
        <section className="relative mx-auto max-w-5xl px-4 pb-16 sm:px-6">
          <div className="rounded-[48px] border border-white/10 bg-black/30 p-3">
            <div className="paper-surface rounded-[40px] p-8 sm:p-12">
              <h2 className="text-2xl font-semibold text-black sm:text-3xl">
                High-value hillside areas
              </h2>
              <p className="mt-4 text-base leading-relaxed text-black/70">
                Specialized structural concrete work for challenging hillside and coastal sites:
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {hillsideAreas.map((area) => (
                  <div
                    key={area.name}
                    className="rounded-[28px] border border-black/10 bg-white/80 p-6 transition hover:border-primary"
                  >
                    <h3 className="text-xl font-semibold text-black">{area.name}</h3>
                    <p className="mt-2 text-base leading-relaxed text-black/70">
                      {area.specialty}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Project Types by Region */}
        <section className="relative mx-auto max-w-5xl px-4 pb-16 sm:px-6">
          <div className="rounded-[48px] border border-white/10 bg-gradient-to-b from-[#141414] to-[#050505] p-8 sm:p-12">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Common project types by region
            </h2>
            <div className="mt-8 space-y-6">
              <div className="rounded-[24px] border border-white/10 bg-black/30 p-6">
                <h3 className="text-lg font-semibold text-white">
                  Ventura County & Conejo Valley
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  Custom home foundations, ADU slabs, major additions, residential retaining walls, podium slabs for mixed-use projects
                </p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-black/30 p-6">
                <h3 className="text-lg font-semibold text-white">West San Fernando Valley</h3>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  Large-scale residential foundations, hillside retaining systems, structural flatwork, parking structures
                </p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-black/30 p-6">
                <h3 className="text-lg font-semibold text-white">Malibu & Topanga</h3>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  Hillside stabilization, complex retaining wall systems, custom home foundations on challenging terrain, seismic upgrades
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative mx-auto max-w-5xl px-4 pb-32 sm:px-6">
          <div className="rounded-[48px] border border-white/10 bg-black/30 p-3">
            <div className="paper-surface rounded-[40px] p-8 text-center sm:p-16">
              <h2 className="text-3xl font-semibold text-black sm:text-4xl">
                Project in our service area?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-black/70">
                Whether you're in the core coverage zone or working on a specialized hillside project, we'll connect you with the right structural concrete crews.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/bid"
                  className="inline-flex items-center gap-2 rounded-lg bg-black px-8 py-4 text-base font-bold uppercase tracking-[0.3em] text-white transition hover:scale-[1.02]"
                >
                  Get a structural bid <ArrowUpRight className="size-5" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center gap-2 rounded-lg border border-black/20 px-8 py-4 text-base font-semibold uppercase tracking-[0.3em] text-black/80 transition hover:border-primary"
                >
                  How it works <ArrowUpRight className="size-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceAreas;

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
