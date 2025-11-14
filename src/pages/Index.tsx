import { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Calendar, Clock, Globe, Mail, Menu, Plus, ThumbsUp } from "lucide-react";

import { cn } from "@/lib/utils";

type HeadingChunk = string | { highlight: string };

type Service = {
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  expertise: string;
  image: string;
};

type ProcessStep = {
  number: string;
  title: string;
  copy: string;
};

type Project = {
  id: string;
  tag: string;
  title: string;
  location: string;
  scope: string;
  quote: string;
  image: string;
};

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  image: string;
};

const CONTACT_EMAIL = "hello@outlierstructures.com";
const CONTACT_LINK = `mailto:${CONTACT_EMAIL}?subject=Structural%20Bid%20Request`;
const heroImage = "https://framerusercontent.com/images/FVyQv90OMyWJQAyRfCesHadT8Q.png?width=2400";

const trustedLogos = [
  "https://framerusercontent.com/images/jNLKI8Afm3YrskaM6svaNTZoci0.png?width=1200",
  "https://framerusercontent.com/images/5zv3VvO3sBm9IGXX3o2abAD0LBI.png?width=1200",
  "https://framerusercontent.com/images/ZqAJwL1mPj1gL2AtITvubebNl8.png?width=1200",
  "https://framerusercontent.com/images/HduE0Z6XTGa3r4dCTGPpGoAFkBI.png?width=1600",
  "https://framerusercontent.com/images/bdSG1gTCDTSMHQAPVui8ujlcWkc.png?width=1600",
];

const statHighlights: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: Globe, value: "150M+", label: "Projects nationwide" },
  { icon: Clock, value: "98%", label: "On-time delivery" },
  { icon: Calendar, value: "12+", label: "Years experience" },
  { icon: ThumbsUp, value: "100%", label: "Client satisfaction" },
];

const services: Service[] = [
  {
    slug: "podium",
    number: "001",
    title: "Podium & Structural Slabs",
    category: "Urban mixed-use",
    description:
      "Post-tension and conventional slabs for podium decks, vehicle ramps, and transfer levels built for tight downtown envelopes.",
    expertise:
      "We choreograph embeds, MEP blocking, and inspection hold points so steel and framing trades keep moving without costly resets.",
    image: "https://framerusercontent.com/images/dImXQCCyieTCNnOOGH9tSqckO0.png?width=1600",
  },
  {
    slug: "foundations",
    number: "002",
    title: "Foundations & Retaining Systems",
    category: "Structural core",
    description:
      "Mat slabs, drilled piers, retaining walls, and grade beams executed with seismic resilience and waterproofing coordination.",
    expertise:
      "Pour breaks, engineered shoring, and QA/QC logs are prepared in advance so owners never worry about hidden issues later.",
    image: "https://framerusercontent.com/images/5f8pIe6jceTfDhrYmTvIbWcU6Q.png?width=1600",
  },
  {
    slug: "parking",
    number: "003",
    title: "Parking Structures & Ramps",
    category: "Mobility",
    description:
      "Multi-level parking decks and precast integrations designed for heavy load transfers and phased civic interfaces.",
    expertise:
      "We coordinate crane picks, shoring, and phased deliveries so retail or public frontage stays operational throughout.",
    image: "https://framerusercontent.com/images/9jSgyFhNM7HwVGIR8VBmInmKsAA.png?width=1600",
  },
  {
    slug: "retrofit",
    number: "004",
    title: "Seismic Retrofit & Repair",
    category: "Existing assets",
    description:
      "Shear walls, FRP wraps, underpinning, and structural repairs delivered while buildings remain partially occupied.",
    expertise:
      "Night pours, vibration monitoring, and tenant communication plans keep operations safe and predictable.",
    image: "https://framerusercontent.com/images/alizrf3Wt4MdRldkrhcVS2X1KM.png?width=1600",
  },
  {
    slug: "immersive",
    number: "005",
    title: "Immersive 3D & VR Planning",
    category: "Preconstruction",
    description:
      "High-fidelity 3D previsualization, logistics planning, and schedule modeling that compresses decision timelines.",
    expertise:
      "Stakeholders walk pours virtually, review crane swing paths, and sign off on every embed before crews mobilize.",
    image: "https://framerusercontent.com/images/ADTZ3vdyrEoaV3vHZUb6yuLtjkw.png?width=1600",
  },
];

const processSteps: ProcessStep[] = [
  {
    number: "001",
    title: "Survey",
    copy: "We pressure-test your plans, quantify risk, and scope the exact structural crew configuration you actually need.",
  },
  {
    number: "002",
    title: "Design",
    copy: "Architects, engineers, and detailers convert vision into build-ready models, logistics plans, and inspection workflows.",
  },
  {
    number: "003",
    title: "Build",
    copy: "Dedicated crews arrive with premium materials, refined sequencing, and inspection-ready documentation for every pour.",
  },
  {
    number: "004",
    title: "Deliver",
    copy: "Every embed is verified, QA/QC logs are complete, and owners receive a fully documented structural handoff.",
  },
];

const projects: Project[] = [
  {
    id: "ecohaus",
    tag: "Residential",
    title: "Ecohaus Residence",
    location: "Ventura, California",
    scope: "$1.2M structural podium deck over parking",
    quote: "Delivered on schedule while orchestrating eleven inspection hold points and back-to-back pours.",
    image: "https://framerusercontent.com/images/EKD4vt3mEzgUxiSxJs5zn6z0LA.png?width=2000",
  },
  {
    id: "westside",
    tag: "Renovation",
    title: "Westside Parking Hub",
    location: "Oxnard, California",
    scope: "$2.8M precast + cast-in-place hybrid parking structure",
    quote: "Phased construction allowed ground-floor retail to stay open the entire build.",
    image: "https://framerusercontent.com/images/zXEQOh2Nj8nmcHurMBrAYR1Q.png?width=2000",
  },
  {
    id: "heritage",
    tag: "Commercial",
    title: "Heritage Retrofit",
    location: "Santa Barbara, California",
    scope: "$900K seismic retrofit & structural repair",
    quote: "Zero tenant disruption incidents even while underpinning occupied wings and transferring load paths.",
    image: "https://framerusercontent.com/images/TwVV0BAWwyCZawRnyx5SAG5pw.png?width=2000",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Sarah Ahmed",
    role: "Project Executive, Pacific Coast Builders",
    quote:
      "Outlier kept every inspection window ahead of schedule. Their sequencing and communication made our podium build a zero-drama experience.",
    image: "https://framerusercontent.com/images/qh2KkLh9KwIAd0x2gqdeR4dzFs.png?width=1200",
  },
  {
    name: "Diego Martinez",
    role: "VP of Development, Harbor Collective",
    quote:
      "They choreographed night pours, vibration monitoring, and tenant updates without ever slowing us down.",
    image: "https://framerusercontent.com/images/11XJCHFB8cmqIzJaGCSzKLpngE0.png?width=1200",
  },
  {
    name: "Lauren Patel",
    role: "Asset Manager, Redwood REIT",
    quote:
      "Every embed, pour break, and crane pick was decided before mobilization. That level of rigor is rare.",
    image: "https://framerusercontent.com/images/lDgLNeLO5b1a3upzgUntcyIgbA.png?width=1200",
  },
];

const awards = [
  { year: "2023", title: "AIAG – Best Structural Delivery" },
  { year: "2022", title: "Boston Award for Architecture" },
  { year: "2021", title: "US Green – Top 5 Sustainable Design" },
];

const news = [
  {
    tag: "Architecture",
    date: "Aug 22, 2025",
    title: "Sustainable structural design for urban infill projects",
    image: "https://framerusercontent.com/images/hY7Zlj2aiyi3Y6c2FSSHSfGcn8.png?width=1800",
  },
  {
    tag: "Interior Design",
    date: "Aug 22, 2025",
    title: "Minimalist concrete interiors that stay warm & human",
    image: "https://framerusercontent.com/images/aASNkk3iBLFb3lP2kKUf9UE2Uw.png?width=1800",
  },
  {
    tag: "Construction",
    date: "Aug 22, 2025",
    title: "Innovative materials revolutionizing structural retrofits",
    image: "https://framerusercontent.com/images/w3LIieXF78eoZxIfwGghXLTIQ8.png?width=1800",
  },
];

const team = [
  { name: "Ava Michell", role: "Project Director" },
  { name: "Noah Bennett", role: "Structural Engineer" },
  { name: "Ella Monroe", role: "Field Operations" },
  { name: "Chloe Hartley", role: "Design Strategist" },
];

const footerLinks = {
  nav: ["Home", "About", "Services", "Projects", "Contact"],
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "Twitter", href: "https://x.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
};

const Index = () => {
  const [activeService, setActiveService] = useState(services[0].slug);
  const [projectIndex, setProjectIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const currentService = useMemo(() => services.find((service) => service.slug === activeService) ?? services[0], [activeService]);
  const currentProject = projects[projectIndex];
  const currentTestimonial = testimonials[testimonialIndex];

  const nextProject = (direction: number) => {
    setProjectIndex((prev) => (prev + direction + projects.length) % projects.length);
  };

  const nextTestimonial = (direction: number) => {
    setTestimonialIndex((prev) => (prev + direction + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <div className="pointer-events-none fixed inset-0 opacity-60" aria-hidden>
        <div className="grain-surface absolute inset-0 rounded-none" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-20 px-4 pb-24 pt-8 sm:px-6 lg:px-0 lg:pt-14">
        <HeroSection />
        <PartnerStrip />
        <ExperienceSection />
        <ServicesSection activeService={activeService} currentService={currentService} onChange={setActiveService} />
        <ProcessSection />
        <FeaturedProjects currentProject={currentProject} activeIndex={projectIndex} onNavigate={nextProject} />
        <TestimonialsSection testimonial={currentTestimonial} activeIndex={testimonialIndex} onNavigate={nextTestimonial} />
        <TeamSection />
        <AwardsSection />
        <NewsSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;

const HeroSection = () => (
  <section className="relative overflow-hidden rounded-[48px] border border-white/10 bg-black/80">
    <img src={heroImage} alt="Hero" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/95" />
    <div className="relative z-10 flex min-h-[600px] flex-col justify-between gap-8 p-8 sm:min-h-[700px] sm:p-12 lg:min-h-[750px] lg:p-16">
      {/* Top Meta Bar */}
      <div className="flex items-center justify-between gap-4 text-[0.65rem] font-medium uppercase tracking-[0.45em] text-white/60">
        <div className="flex items-center gap-2 text-white/70">
          <Menu className="size-4" />
          <span>Working Spaces</span>
        </div>
        <span className="text-white/90">OUTLIER STRUCTURES</span>
        <a href={CONTACT_LINK} className="flex items-center gap-2 text-white/80 transition hover:text-white">
          <Mail className="size-4" />
          <span className="hidden sm:inline">{CONTACT_EMAIL}</span>
        </a>
      </div>

      {/* Hero Content */}
      <div className="text-center text-white">
        <p className="text-[0.65rem] uppercase tracking-[0.9em] text-white/50">Shaping skylines with</p>
        <div className="mt-6 space-y-3">
          <h1 className="text-5xl font-semibold uppercase leading-[1.1] tracking-[0.12em] sm:text-6xl lg:text-7xl">
            SHAPING SKYLINES WITH
          </h1>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <span className="hero-highlight-box">BOLD</span>
            <span className="text-5xl font-semibold uppercase leading-[1.1] tracking-[0.12em] sm:text-6xl lg:text-7xl">VISION</span>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          We build more than structures—we craft timeless spaces that embody strength, inspire communities, reflect your vision, and stand as lasting legacies for generations.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-[1.02]"
          >
            Start project <ArrowUpRight className="size-4" />
          </a>
          <a
            href={CONTACT_LINK}
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white/90 transition hover:border-white hover:bg-white/10"
          >
            Get a structural bid <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>

      {/* Bottom Ticker */}
      <div className="flex items-center justify-center gap-8 text-[0.65rem] uppercase tracking-[0.85em] text-white/35">
        <span>Start project</span>
        <span className="text-white/20">Start project</span>
      </div>
    </div>
  </section>
);

const PartnerStrip = () => (
  <section className="rounded-[36px] border border-white/5 bg-black/30 px-4 py-4 sm:px-6">
    <div className="flex flex-wrap items-center justify-between gap-4">
      {trustedLogos.map((logo, index) => (
        <div key={logo} className="flex items-center gap-4 text-white/30">
          <img src={logo} alt="Trusted partner" className="h-6 w-auto opacity-60 grayscale" loading="lazy" />
          {index < trustedLogos.length - 1 && <span className="hidden h-4 w-px bg-white/15 sm:block" />}
        </div>
      ))}
    </div>
  </section>
);

const ExperienceSection = () => (
  <section className="rounded-[48px] border border-white/10 bg-black/30 p-2">
    <div className="paper-surface rounded-[40px] p-8 sm:p-12">
      <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
        <div>
          <SectionHeading
            eyebrow="Legacy concrete"
            title={["10+ years of quality", { highlight: "construction" }, "across every sector." ]}
            description="Trusted partners delivering structural concrete for podiums, parking structures, and seismic retrofits across Southern California."
            tone="dark"
          />
          <p className="mt-8 text-base text-black/70">
            We embed alongside your team from preconstruction to turnover—aligning schedules, inspection checkpoints, and safety protocols with the crews that actually pour the work.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-black text-white p-5">
              <p className="text-4xl font-semibold">50+</p>
              <p className="text-sm uppercase tracking-[0.35em] text-white/70">Engineers & builders</p>
              <p className="mt-3 text-sm text-white/70">People who only speak structural concrete, ready to drop into your precon calls.</p>
            </div>
            <div className="grid gap-4">
              <img src="https://framerusercontent.com/images/gQJjSNrLhYTUTDGcnrI63gYNc.png?width=1600" alt="Structure detail" className="grain-surface h-32 w-full rounded-3xl object-cover" />
              <img src="https://framerusercontent.com/images/ADTZ3vdyrEoaV3vHZUb6yuLtjkw.png?width=1600" alt="Modern building" className="grain-surface h-32 w-full rounded-3xl object-cover" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-8 rounded-[36px] border border-black/5 bg-white/70 p-6">
          <p className="text-base text-black/70">
            Structura offers more than just concrete—it’s thoughtful design, innovation, and schedule-aligned execution built for real-world constraints.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {statHighlights.map((stat) => (
              <div key={stat.label} className="flex items-start gap-3">
                <stat.icon className="mt-1 size-5 text-black/60" />
                <div>
                  <p className="text-2xl font-semibold text-black">{stat.value}</p>
                  <p className="text-sm uppercase tracking-[0.4em] text-black/50">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
          <PrimaryCTA label="Get a project review" dark />
        </div>
      </div>
    </div>
  </section>
);

type ServicesSectionProps = {
  activeService: string;
  currentService: Service;
  onChange: (value: string) => void;
};

const ServicesSection = ({ activeService, currentService, onChange }: ServicesSectionProps) => (
  <section id="services" className="rounded-[48px] border border-white/10 bg-black/30 p-6 sm:p-10">
    <div className="grid gap-10 lg:grid-cols-[360px,1fr]">
      <div className="space-y-6">
        <SectionHeading
          eyebrow="What we do"
          title={["Smart solutions for every", { highlight: "project" }]}
          description="Pick your structural challenge. We line up the crews, sequencing, and inspection-ready documents to execute it."
        />
        <a href={CONTACT_LINK} className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[hsl(var(--primary))]">
          Request a structural bid <ArrowUpRight className="size-4" />
        </a>
        <div className="divide-y divide-white/10 rounded-[32px] border border-white/10">
          {services.map((service) => (
            <button
              key={service.slug}
              onClick={() => onChange(service.slug)}
              className={cn(
                "flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition",
                activeService === service.slug ? "bg-white/5" : "hover:bg-white/5",
              )}
            >
              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.6em] text-white/40">{service.number}</p>
                <p className="text-lg font-semibold text-white">{service.title}</p>
              </div>
              <Plus className={cn("size-4", activeService === service.slug ? "text-white" : "text-white/40")} />
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-6 rounded-[32px] border border-white/10 bg-[#050505]/80 p-6">
        <img src={currentService.image} alt={currentService.title} className="grain-surface h-64 w-full rounded-[28px] object-cover" loading="lazy" />
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.6em] text-white/40">{currentService.category}</p>
          <h3 className="text-2xl font-semibold text-white">{currentService.title}</h3>
          <p className="text-white/80">{currentService.description}</p>
          <p className="text-white/60">{currentService.expertise}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <PrimaryCTA label="Get a structural bid" />
          <SecondaryCTA label="Download scope" />
        </div>
      </div>
    </div>
  </section>
);

const ProcessSection = () => (
  <section className="space-y-12">
    <SectionHeading
      eyebrow="Process"
      title={["Turning ideas into", { highlight: "build" }, "success"]}
      description="A visible, documented process from intake through turnover. No guesswork, no vibe-coded chaos."
      align="center"
    />
    <div className="space-y-10">
      {processSteps.map((step) => (
        <ArcSection key={step.number} step={step} />
      ))}
    </div>
  </section>
);

type FeaturedProjectsProps = {
  currentProject: Project;
  activeIndex: number;
  onNavigate: (direction: number) => void;
};

const FeaturedProjects = ({ currentProject, activeIndex, onNavigate }: FeaturedProjectsProps) => (
  <section id="projects" className="space-y-8 rounded-[48px] border border-white/10 bg-black/30 p-6 sm:p-10">
    <div className="flex flex-wrap items-center justify-between gap-6">
      <SectionHeading eyebrow="Featured" title={["Featured", { highlight: "works" }]} description="Real structural concrete work matched through Outlier Structures." />
      <div className="flex gap-3">
        <NavButton direction="left" onClick={() => onNavigate(-1)} />
        <NavButton direction="right" onClick={() => onNavigate(1)} />
      </div>
    </div>
    <div className="relative overflow-hidden rounded-[36px] border border-white/10">
      <img key={currentProject.id} src={currentProject.image} alt={currentProject.title} className="h-[28rem] w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="absolute bottom-6 left-6 max-w-md rounded-[32px] border border-white/10 bg-black/70 p-6 text-white">
        <p className="text-xs uppercase tracking-[0.6em] text-white/60">{currentProject.tag}</p>
        <h3 className="text-2xl font-semibold">{currentProject.title}</h3>
        <p className="text-white/70">{currentProject.location}</p>
        <p className="mt-3 text-sm text-white/80">{currentProject.scope}</p>
        <p className="mt-4 text-lg">“{currentProject.quote}”</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <PrimaryCTA label="Get a bid" />
          <SecondaryCTA label="See details" />
        </div>
      </div>
      <div className="absolute bottom-6 right-6 flex flex-col items-end gap-3">
        <div className="flex gap-3">
          <NavButton direction="left" onClick={() => onNavigate(-1)} />
          <NavButton direction="right" onClick={() => onNavigate(1)} />
        </div>
        <DotIndicators count={projects.length} activeIndex={activeIndex} />
      </div>
    </div>
  </section>
);

type TestimonialsSectionProps = {
  testimonial: Testimonial;
  activeIndex: number;
  onNavigate: (direction: number) => void;
};

const TestimonialsSection = ({ testimonial, activeIndex, onNavigate }: TestimonialsSectionProps) => (
  <section className="space-y-8 rounded-[48px] border border-white/10 bg-gradient-to-b from-[#141414] to-[#050505] p-6 sm:p-10">
    <div className="flex flex-wrap items-center justify-between gap-6">
      <SectionHeading eyebrow="Evidence" title={["Real feedback from real", { highlight: "clients" }]} />
      <div className="flex gap-3">
        <NavButton direction="left" onClick={() => onNavigate(-1)} />
        <NavButton direction="right" onClick={() => onNavigate(1)} />
      </div>
    </div>
    <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
      <div className="relative overflow-hidden rounded-[36px] border border-white/10">
        <img src="https://framerusercontent.com/images/bdSG1gTCDTSMHQAPVui8ujlcWkc.png?width=2200" alt="Testimonial backdrop" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      </div>
      <div className="space-y-6 rounded-[32px] border border-white/10 bg-black/60 p-8 text-white">
        <div className="flex items-center gap-4">
          <img src={testimonial.image} alt={testimonial.name} className="h-20 w-20 rounded-3xl object-cover" loading="lazy" />
          <div>
            <p className="text-xs uppercase tracking-[0.6em] text-white/50">{testimonial.role}</p>
            <p className="text-2xl font-semibold">{testimonial.name}</p>
          </div>
        </div>
        <p className="text-2xl leading-relaxed">“{testimonial.quote}”</p>
        <div className="flex items-center justify-between pt-2 text-sm uppercase tracking-[0.5em] text-white/40">
          <span>{String(activeIndex + 1).padStart(2, "0")}/0{testimonials.length}</span>
          <div className="flex gap-3">
            <NavButton direction="left" onClick={() => onNavigate(-1)} />
            <NavButton direction="right" onClick={() => onNavigate(1)} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TeamSection = () => (
  <section className="rounded-[48px] border border-white/10 bg-black/30 p-6 sm:p-10">
    <SectionHeading
      eyebrow="Team"
      title={["Meet our dedicated team of", { highlight: "skilled" }, "experts"]}
      description="Trusted partners who have lived every structural battle."
      align="center"
    />
    <div className="mt-10 grid gap-6 sm:grid-cols-2">
      {team.map((member) => (
        <div key={member.name} className="rounded-[28px] border border-white/10 bg-[#050505]/80 p-6">
          <p className="text-xs uppercase tracking-[0.6em] text-white/40">{member.role}</p>
          <p className="text-2xl font-semibold text-white">{member.name}</p>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white">
            LinkedIn <ArrowUpRight className="size-4" />
          </a>
        </div>
      ))}
    </div>
  </section>
);

const AwardsSection = () => (
  <section className="grid gap-10 rounded-[48px] border border-white/10 bg-[#111111]/80 p-6 sm:p-10 lg:grid-cols-[0.8fr,1.2fr]">
    <div className="space-y-4">
      {awards.map((award) => (
        <div key={award.title} className="rounded-[24px] border border-white/10 bg-black/30 p-5">
          <p className="text-xs uppercase tracking-[0.6em] text-white/40">{award.year}</p>
          <p className="text-lg font-semibold text-white">{award.title}</p>
        </div>
      ))}
    </div>
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Recognition"
        title={["Celebrating our proud", { highlight: "awards" }, "and achievements"]}
        description="Dedication, expertise, and relentless execution recognized by the industry."
      />
      <div className="flex flex-wrap gap-3">
        <PrimaryCTA label="See projects" />
        <SecondaryCTA label="Get a quote" />
      </div>
      <img src="https://framerusercontent.com/images/hY7Zlj2aiyi3Y6c2FSSHSfGcn8.png?width=2000" alt="Awarded project" className="grain-surface h-64 w-full rounded-[32px] object-cover" loading="lazy" />
    </div>
  </section>
);

const NewsSection = () => (
  <section className="rounded-[48px] border border-white/10 bg-black/30 p-2">
    <div className="paper-surface rounded-[40px] p-6 sm:p-10">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <SectionHeading eyebrow="Insights" title={["Latest news and creative", { highlight: "inspiration" }]} tone="dark" />
        <a href="#services" className="inline-flex items-center gap-2 text-sm font-semibold text-black/70 transition hover:text-black">
          View services <ArrowUpRight className="size-4" />
        </a>
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {news.map((article) => (
          <article key={article.title} className="rounded-[28px] border border-black/10 bg-white/80">
            <img src={article.image} alt={article.title} className="h-48 w-full rounded-[28px] object-cover" loading="lazy" />
            <div className="space-y-3 p-6 text-black">
              <div className="text-xs uppercase tracking-[0.5em] text-black/60">
                {article.tag} • {article.date}
              </div>
              <h3 className="text-xl font-semibold">{article.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const FooterSection = () => (
  <footer className="space-y-8 rounded-[48px] border border-white/10 bg-black/40 p-6 sm:p-10">
    <div className="grid gap-6 rounded-[32px] border border-white/10 bg-white text-black p-6 sm:grid-cols-2">
      <div>
        <p className="text-xs uppercase tracking-[0.6em] text-black/60">Let’s talk</p>
        <h3 className="mt-2 text-3xl font-semibold">Contact us</h3>
      </div>
      <div className="flex items-center justify-end gap-3">
        <a href={CONTACT_LINK} className="inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-3 text-sm font-semibold">
          Contact us <ArrowUpRight className="size-4" />
        </a>
        <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white">
          All projects <ArrowUpRight className="size-4" />
        </a>
      </div>
    </div>
    <div className="grid gap-8 text-sm text-white/70 sm:grid-cols-[2fr,1fr]">
      <div className="space-y-3">
        <p>Outlier Structures connects general contractors, developers, and owners with vetted structural concrete crews throughout Southern California.</p>
        <p>(805) 555-0100 • {CONTACT_EMAIL}</p>
        <p>21 SW Broadway, Portland</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          {footerLinks.nav.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div>
          {footerLinks.socials.map((social) => (
            <p key={social.label}>
              <a href={social.href} target="_blank" rel="noreferrer" className="transition hover:text-white">
                {social.label}
              </a>
            </p>
          ))}
        </div>
      </div>
    </div>
    <div className="text-xs uppercase tracking-[0.4em] text-white/40">© {new Date().getFullYear()} Outlier Structures. All rights reserved.</div>
  </footer>
);

type SectionHeadingProps = {
  eyebrow?: string;
  title: HeadingChunk[];
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

const SectionHeading = ({ eyebrow, title, description, align = "left", tone = "light" }: SectionHeadingProps) => {
  const baseText = tone === "light" ? "text-white" : "text-black";
  const subText = tone === "light" ? "text-white/70" : "text-black/70";
  const eyebrowText = tone === "light" ? "text-white/40" : "text-black/40";

  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <p className={cn("text-xs font-semibold uppercase tracking-[0.7em]", eyebrowText)}>{eyebrow}</p>}
      <h2 className={cn("mt-3 text-3xl font-semibold leading-tight sm:text-4xl", baseText, align === "center" && "sm:text-5xl")}>
      {title.map((chunk, index) =>
        typeof chunk === "string" ? (
            <span key={`${chunk}-${index}`}>{chunk} </span>
        ) : (
            <span key={`${chunk.highlight}-${index}`} className="highlight-pill">
            {chunk.highlight}
          </span>
          )
      )}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base", subText, align === "center" && "mx-auto max-w-2xl")}>{description}</p>
      )}
    </div>
  );
};

const PrimaryCTA = ({ label, dark = false, href = CONTACT_LINK }: { label: string; dark?: boolean; href?: string }) => (
  <a
    href={href}
    className={cn(
      "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition",
      dark ? "bg-black text-white hover:bg-black/90" : "bg-white text-black hover:scale-[1.02]",
    )}
  >
    {label}
    <ArrowUpRight className="size-4" />
  </a>
);

const SecondaryCTA = ({ label, href = CONTACT_LINK }: { label: string; href?: string }) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-white hover:text-white"
  >
    {label}
    <ArrowUpRight className="size-4" />
  </a>
);

const NavButton = ({ direction, onClick }: { direction: "left" | "right"; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="flex size-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-white/50 hover:text-white"
    aria-label={direction === "left" ? "Previous" : "Next"}
  >
    {direction === "left" ? <ArrowLeft className="size-4" /> : <ArrowRight className="size-4" />}
  </button>
);

const DotIndicators = ({ count, activeIndex }: { count: number; activeIndex: number }) => (
  <div className="flex items-center gap-2">
    {Array.from({ length: count }).map((_, index) => (
      <span
        key={index}
        className={cn(
          "h-2.5 w-2.5 rounded-full",
          index === activeIndex ? "bg-[hsl(var(--primary))]" : "bg-white/30",
        )}
      />
    ))}
  </div>
);

const ArcSection = ({ step }: { step: ProcessStep }) => (
  <div className="arc-section">
    <div className="step-circle">
      <span className="text-xs uppercase tracking-[0.6em] text-black/50">{step.number}</span>
      <p className="text-xl font-semibold text-black">{step.title}</p>
    </div>
    <p className="mt-6 max-w-2xl text-center text-base text-white/70">{step.copy}</p>
  </div>
);
