import { useMemo, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Calendar, Clock, Globe, Mail, MapPin, Menu, Plus, ThumbsUp, Users, Building2, TrendingUp } from "lucide-react";

import { cn } from "@/lib/utils";
import { SharedHeader } from "@/components/SharedHeader";

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
const CONTACT_PHONE = "(805) 555-0100";
const heroImage = "https://framerusercontent.com/images/FVyQv90OMyWJQAyRfCesHadT8Q.png?width=2400";

const logoPlaceholders = [
  "Partner 1",
  "Partner 2", 
  "Partner 3",
  "Partner 4",
  "Partner 5",
  "Partner 6",
];

const statHighlights: { icon: LucideIcon; value: string; label: string; isNumeric?: boolean; hideIcon?: boolean }[] = [
  { icon: Building2, value: "$200k-$5M", label: "Project range", isNumeric: false },
  { icon: Users, value: "Elite", label: "Contractor network", isNumeric: false },
  { icon: TrendingUp, value: "Ultra-luxury", label: "Specialization", isNumeric: false, hideIcon: true },
  { icon: MapPin, value: "5 regions", label: "Coverage area", isNumeric: true },
];

const services: Service[] = [
  {
    slug: "ultra-luxury-homes",
    number: "001",
    title: "Ultra-Luxury Home Structural Packages",
    category: "High-end residential",
    description:
      "Complete structural systems for ultra-luxury custom homes: foundations, slabs, retaining, basements, and complex architectural concrete. Projects typically $500k-$3M structural scope.",
    expertise:
      "Elite crews experienced with architectural concrete, exposed aggregate, complex forming, waterproofing, and finish-grade coordination for estates where quality is paramount.",
    image: "/images/u7626387911_luxury_malibu_home_--ar_43_--v_7_1eba2eb2-8b7a-47d1-a83b-0e643d37ce1a_0.png",
  },
  {
    slug: "hillside-complex",
    number: "002",
    title: "Hillside & High-Complexity Sites",
    category: "Challenging terrain",
    description:
      "Engineered retaining systems, caissons, grade beams, and slope stabilization for challenging hillside sites in Malibu, Topanga, and canyon properties. Typical projects $300k-$2M.",
    expertise:
      "Specialized crews with hillside access expertise, seismic reinforcement, drainage integration, and geotechnical coordination for high-value coastal and canyon estates.",
    image: "/images/u7626387911_concrete_construction_jobsites_--v_7_e71bdcfd-372c-4cd6-aac1-cea1b4ead73e_1.png",
  },
  {
    slug: "commercial",
    number: "003",
    title: "Commercial Structural Concrete",
    category: "Commercial & mixed-use",
    description:
      "Structural packages for offices, retail, hospitality, and institutional projects. Podium slabs, parking structures, tilt-up, and large-scale flatwork. Projects $400k-$5M structural scope.",
    expertise:
      "Coordination of post-tension systems, MEP blocking, inspection sequences, and phased construction to keep commercial timelines on track.",
    image: "/images/u7626387911_commercial_concrete_construction_job_sites_--v_7_e41b0cd3-6a8d-48fb-a64f-c8a1b29d7f65_0.png",
  },
  {
    slug: "large-commercial",
    number: "004",
    title: "Large-Scale Commercial & Mixed-Use",
    category: "Major developments",
    description:
      "Multi-story podium slabs, parking structures, and structural systems for large commercial and mixed-use developments. Typical projects $1M-$5M+ structural scope.",
    expertise:
      "Elite crews with experience coordinating complex forming, multiple pour sequences, shoring, and phased construction for major commercial projects.",
    image: "/images/u7626387911_commercial_concrete_construction_job_sites_--v_7_e41b0cd3-6a8d-48fb-a64f-c8a1b29d7f65_1.png",
  },
  {
    slug: "preconstruction",
    number: "005",
    title: "Preconstruction & Structural Coordination",
    category: "Planning & budgeting",
    description:
      "Early-stage structural planning, scope refinement, and bid coordination for ultra-luxury and commercial projects. Lock in realistic budgets before breaking ground.",
    expertise:
      "We help owners, developers, and GCs pressure-test structural plans, identify value engineering opportunities, and secure competitive bids from elite crews.",
    image: "/images/u7626387911_concrete_construction_jobsites_--v_7_e71bdcfd-372c-4cd6-aac1-cea1b4ead73e_2.png",
  },
];

const processSteps: ProcessStep[] = [
  {
    number: "001",
    title: "Submit",
    copy: "You share your project details through our structured intake form. Location, scope, budget range, timeline, and any plans you have ready.",
  },
  {
    number: "002",
    title: "Match",
    copy: "Outlier Structures reviews your project and routes it to qualified structural concrete contractors in our network. All crews are licensed, insured, and have proven track records.",
  },
  {
    number: "003",
    title: "Choose",
    copy: "You receive detailed bids, interview contractors, and make your own hiring decision. We facilitate introductions but you maintain full control.",
  },
  {
    number: "004",
    title: "Build",
    copy: "We stay in touch at a high level throughout your project to ensure things progress smoothly and facilitate problem-solving if needed.",
  },
];

const projects: Project[] = [
  {
    id: "malibu-estate",
    tag: "Ultra-Luxury",
    title: "Malibu Hillside Estate",
    location: "Malibu, CA",
    scope: "$1.8M structural package: foundation, retaining, caissons",
    quote: "Complex hillside site with challenging ocean-view grades. Elite crew coordinated structural engineering, geotechnical, and inspection sequencing flawlessly.",
    image: "/images/u7626387911_luxury_malibu_home_--ar_43_--v_7_1eba2eb2-8b7a-47d1-a83b-0e643d37ce1a_2.png",
  },
  {
    id: "thousand-oaks-commercial",
    tag: "Commercial",
    title: "Thousand Oaks Mixed-Use Development",
    location: "Thousand Oaks, CA",
    scope: "$2.4M podium slab and parking structure",
    quote: "Multi-story post-tension podium over two-level parking. Crew delivered phased pours on schedule with zero downstream trade delays.",
    image: "/images/u7626387911_commercial_concrete_construction_job_sites_--v_7_e41b0cd3-6a8d-48fb-a64f-c8a1b29d7f65_2.png",
  },
  {
    id: "westlake-luxury",
    tag: "Custom Home",
    title: "Westlake Village Custom Estate",
    location: "Westlake Village, CA",
    scope: "$950k foundation, slab, and architectural concrete",
    quote: "Ultra-luxury custom home with exposed aggregate, architectural forming, and complex waterproofing. Foundation inspection passed first review.",
    image: "/images/u7626387911_luxury_malibu_home_--ar_43_--v_7_1eba2eb2-8b7a-47d1-a83b-0e643d37ce1a_3.png",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Michael Chen",
    role: "General Contractor, Custom Homes",
    quote:
      "Outlier connected us with a structural crew that knew exactly what they were doing. Foundation inspection passed first time, zero issues.",
    image: "/images/istockphoto-1404294992-612x612.jpg",
  },
  {
    name: "Lisa Martinez",
    role: "Homeowner, Thousand Oaks",
    quote:
      "Building our custom home felt overwhelming until Outlier matched us with the right foundation contractor. The process was transparent and professional.",
    image: "/images/istockphoto-2163336180-612x612.jpg",
  },
  {
    name: "David Patel",
    role: "Developer, Multi-Family Projects",
    quote:
      "For our Camarillo project we needed a crew that could handle post-tension podium work. Outlier delivered exactly what we asked for.",
    image: "/images/Photo-2.jpg",
  },
];

const whyOutlier = [
  { label: "Specialized in ultra-luxury & commercial structural concrete" },
  { label: "$200k-$5M project range - high-complexity focus" },
  { label: "Elite contractor network with proven track records" },
];

const serviceHighlights = [
  {
    title: "Ultra-luxury structural packages",
    description: "Complete foundation and structural systems for high-value custom homes and estates. Typical projects $500k-$3M.",
  },
  {
    title: "Commercial concrete systems",
    description: "Podium slabs, parking structures, and structural packages for commercial and mixed-use developments. $400k-$5M scope.",
  },
  {
    title: "Complex hillside solutions",
    description: "Engineered retaining, caissons, and stabilization for challenging Malibu and Topanga sites. $300k-$2M typical.",
  },
];

const team = [
  { name: "Project Coordination", role: "Intake & matching" },
  { name: "Contractor Network", role: "Vetted structural crews" },
  { name: "Quality Oversight", role: "High-level project tracking" },
  { name: "Client Support", role: "Communication & problem-solving" },
];

const footerLinks = {
  nav: [
    { label: "Home", href: "/" },
    { label: "How it works", href: "/how-it-works" },
    { label: "Service areas", href: "/service-areas" },
    { label: "About", href: "/about" },
    { label: "Get a bid", href: "/bid" },
  ],
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/" },
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

      <SharedHeader />
      
      <div className="relative">
        <HeroSection />
        <PartnerStrip />
        
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 sm:gap-16 md:gap-20 px-4 pb-16 pt-12 sm:pb-24 sm:pt-20 sm:px-6 lg:px-0">
          <ExperienceSection />
          <ServicesSection activeService={activeService} currentService={currentService} onChange={setActiveService} />
          <ProcessSection />
          <FeaturedProjects currentProject={currentProject} activeIndex={projectIndex} onNavigate={nextProject} />
          <TestimonialsSection testimonial={currentTestimonial} activeIndex={testimonialIndex} onNavigate={nextTestimonial} />
          <HowWeHelpSection />
          <WhyOutlierSection />
          <ServiceHighlightsSection />
          <FooterSection />
        </div>
      </div>
    </div>
  );
};

export default Index;

const HeroSection = () => (
  <section className="relative w-full overflow-hidden bg-black">
    <img src={heroImage} alt="Hero" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/95" />
    <div className="relative z-10 flex min-h-[600px] flex-col justify-center gap-12 px-6 py-20 sm:min-h-[700px] sm:px-12 lg:min-h-[750px] lg:px-16">
      {/* Hero Content */}
      <div className="text-center text-white">
        <p className="text-[0.65rem] uppercase tracking-[0.5em] sm:tracking-[0.9em] text-white/50">Ultra-luxury structural concrete</p>
        <div className="mt-6 space-y-3">
          <div className="flex flex-col items-center justify-center gap-2 text-4xl font-normal uppercase leading-[1.1] sm:flex-row sm:gap-4 sm:text-6xl lg:text-7xl">
            <span>ELITE</span>
            <span className="hero-highlight-box">STRUCTURAL CONCRETE</span>
          </div>
          <h1 className="text-4xl font-normal uppercase leading-[1.1] sm:text-6xl lg:text-7xl">
            FOR ULTRA-LUXURY & COMMERCIAL
          </h1>
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          Outlier Structures connects ultra-luxury custom home projects and commercial developments with elite structural concrete contractors. Specializing in high-complexity $200k-$5M structural packages across Ventura County, Conejo Valley, West San Fernando Valley, Malibu, and Topanga.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/bid"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs sm:px-8 sm:py-3.5 sm:text-sm font-semibold uppercase tracking-[0.1em] sm:tracking-[0.2em] text-black transition hover:scale-[1.02]"
          >
            Get a structural bid <ArrowUpRight className="size-4" />
          </Link>
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-xs sm:px-8 sm:py-3.5 sm:text-sm font-semibold uppercase tracking-[0.1em] sm:tracking-[0.2em] text-white/90 transition hover:border-primary hover:bg-white/10"
          >
            How it works <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>

      {/* Bottom Ticker */}
      <div className="flex items-center justify-center gap-4 sm:gap-8 text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.4em] sm:tracking-[0.85em] text-white/35">
        <span>Start project</span>
        <span className="text-white/20">Start project</span>
      </div>
    </div>
  </section>
);

const PartnerStrip = () => {
  // Triple the array for seamless infinite scroll
  const allPlaceholders = [...logoPlaceholders, ...logoPlaceholders, ...logoPlaceholders];
  
  return (
    <section className="w-full overflow-hidden border-y border-white/5 bg-[#0f0f0d] py-8">
      <div className="logo-scroll-container">
        <div className="logo-scroll-track">
          {allPlaceholders.map((placeholder, index) => (
            <div key={`placeholder-${index}`} className="logo-scroll-item flex items-center">
              <div className="flex h-10 w-40 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-xs uppercase tracking-widest text-white/30">
                {placeholder}
              </div>
              <span className="mx-16 h-8 w-px bg-white/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CountUp = ({ value, duration = 2000 }: { value: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!ref.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          const start = 0;
          const end = numericValue;
          const startTime = Date.now();

          const animate = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * (end - start) + start));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numericValue, duration, hasAnimated]);

  return (
    <div ref={ref}>
      {count}
      {suffix}
    </div>
  );
};

const ExperienceSection = () => (
  <section className="rounded-[56px] border border-white/10 bg-black/30 p-3">
    <div className="paper-surface rounded-[48px] p-6 sm:p-10 md:p-14 lg:p-16">
      <div className="grid gap-14 lg:grid-cols-[1.1fr,0.9fr]">
        <div>
          <SectionHeading
            eyebrow="Elite network"
            title={["Ultra-luxury", { highlight: "structural" }, "concrete specialists" ]}
            description="Outlier Structures connects ultra-luxury custom home projects and major commercial developments with elite structural concrete contractors across Ventura County, Conejo Valley, West San Fernando Valley, Malibu, and Topanga."
            tone="dark"
          />
          <p className="mt-10 text-lg leading-relaxed text-black/70">
            We match ultra-luxury custom home projects, major commercial developments, and high-complexity hillside sites with elite structural concrete contractors specializing in $200k-$5M structural packages.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-[32px] bg-black p-8 text-white">
              <p className="text-5xl font-semibold"><CountUp value="50+" /></p>
              <p className="mt-2 text-base uppercase tracking-[0.2em] sm:tracking-[0.35em] text-white/70">Elite contractors</p>
              <p className="mt-4 text-base leading-relaxed text-white/70">Elite structural concrete specialists for ultra-luxury and commercial projects.</p>
            </div>
            <div className="grid gap-6">
              <img src="/images/u7626387911_concrete_construction_jobsites_--v_7_e71bdcfd-372c-4cd6-aac1-cea1b4ead73e_3.png" alt="Structure detail" className="grain-surface h-40 w-full rounded-[28px] object-cover" />
              <img src="/images/u7626387911_commercial_concrete_construction_job_sites_--v_7_e41b0cd3-6a8d-48fb-a64f-c8a1b29d7f65_3.png" alt="Modern building" className="grain-surface h-40 w-full rounded-[28px] object-cover" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-10 rounded-[40px] border border-black/5 bg-white/70 p-8">
          <p className="text-lg leading-relaxed text-black/70">
            Outlier Structures offers more than lead generation—we're a neutral matchmaking layer connecting ultra-luxury and commercial projects with elite structural concrete contractors capable of delivering $200k-$5M structural packages.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {statHighlights.map((stat) => (
              <div key={stat.label} className="flex items-start gap-4">
                {!stat.hideIcon && <stat.icon className="mt-1 size-6 text-black/60" />}
                <div>
                  <p className="text-3xl font-semibold text-black">
                    {stat.isNumeric ? <CountUp value={stat.value} /> : stat.value}
                  </p>
                  <p className="mt-1 text-sm uppercase tracking-[0.2em] sm:tracking-[0.4em] text-black/50">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
          <Link 
            to="/bid"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-black px-6 py-3 text-sm sm:px-8 sm:py-4 sm:text-base font-bold uppercase tracking-[0.15em] sm:tracking-[0.3em] text-white transition hover:scale-[1.02]"
          >
            Get a structural bid <ArrowUpRight className="size-5" />
          </Link>
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
  <section id="services" className="rounded-[56px] border border-white/10 bg-black/30 p-8 sm:p-12 lg:p-14">
    <div className="grid gap-14 lg:grid-cols-[420px,1fr]">
      <div className="space-y-8">
        <SectionHeading
          eyebrow="What we do"
          title={["Smart solutions for every", { highlight: "project" }]}
          description="Pick your structural challenge. We line up the crews, sequencing, and inspection-ready documents to execute it."
        />
        <Link to="/bid" className="inline-flex items-center gap-2 text-base font-bold text-white transition hover:text-primary">
          Get a structural bid <ArrowUpRight className="size-5" />
        </Link>
        <div className="divide-y divide-white/10 rounded-[36px] border border-white/10">
          {services.map((service) => (
            <button
              key={service.slug}
              onClick={() => onChange(service.slug)}
              style={{
                borderLeftWidth: '4px',
                borderLeftStyle: 'solid',
                borderLeftColor: activeService === service.slug ? '#f97316' : 'transparent'
              }}
              className={cn(
                "flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-all hover:!border-l-[#f97316]",
                activeService === service.slug ? "bg-white/5" : "hover:bg-white/5",
              )}
            >
              <div>
                <p className="text-xs uppercase tracking-[0.6em] text-white/40">{service.number}</p>
                <p className="mt-1 text-xl font-semibold text-white">{service.title}</p>
              </div>
              <Plus className={cn("size-5", activeService === service.slug ? "text-[#f97316]" : "text-white/40")} />
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-8 rounded-[36px] border border-white/10 bg-[#050505]/80 p-8">
        <img src={currentService.image} alt={currentService.title} className="grain-surface h-80 w-full rounded-[32px] object-cover" loading="lazy" />
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.6em] text-white/40">{currentService.category}</p>
          <h3 className="text-3xl font-semibold text-white">{currentService.title}</h3>
          <p className="text-lg leading-relaxed text-white/80">{currentService.description}</p>
          <p className="text-base leading-relaxed text-white/60">{currentService.expertise}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link 
            to="/bid"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-7 py-4 text-base font-bold uppercase tracking-[0.25em] text-black transition hover:scale-[1.02]"
          >
            Get a structural bid <ArrowUpRight className="size-5" />
          </Link>
          <Link 
            to="/how-it-works"
            className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-7 py-4 text-base font-semibold uppercase tracking-[0.25em] text-white/90 transition hover:border-primary hover:bg-white/10"
          >
            How it works <ArrowUpRight className="size-5" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const ProcessSection = () => {
  const valueCards = [
    {
      title: "Ultra-luxury structural packages",
      description: "Foundations and structural systems for high-value custom homes and estates.",
      icon: Building2,
    },
    {
      title: "Commercial & large commercial",
      description: "Structural concrete packages for offices, retail, mixed-use, and institutional projects.",
      icon: TrendingUp,
    },
    {
      title: "Hillside & complex sites",
      description: "Retaining walls, caissons, grade beams, and challenging terrain solutions.",
      icon: MapPin,
    },
    {
      title: "Curated contractor network",
      description: "Elite structural crews with proven track records on high-complexity projects.",
      icon: Users,
    },
  ];

  return (
    <section className="space-y-12">
      <SectionHeading
        eyebrow="Specialization"
        title={["Turning vision into", { highlight: "build" }, "success"]}
        description="Elite structural concrete solutions for ultra-luxury and commercial projects from $200k to $5M."
        align="center"
      />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {valueCards.map((card, index) => (
          <div
            key={card.title}
            className="flex flex-col items-center text-center"
          >
            <div className="flex h-48 w-48 items-center justify-center rounded-full border-4 border-white/10 bg-gradient-to-br from-[#141414] to-[#050505] p-8 transition-all hover:border-primary hover:scale-105">
              <div className="flex flex-col items-center gap-4">
                <card.icon className="size-12 text-[hsl(var(--primary))]" />
                <p className="text-sm font-semibold leading-tight text-white">
                  {card.title}
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/70">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

type FeaturedProjectsProps = {
  currentProject: Project;
  activeIndex: number;
  onNavigate: (direction: number) => void;
};

const FeaturedProjects = ({ currentProject, activeIndex, onNavigate }: FeaturedProjectsProps) => (
  <section id="projects" className="space-y-6 sm:space-y-8 rounded-[32px] sm:rounded-[48px] border border-white/10 bg-black/30 p-3 sm:p-6 md:p-10">
    <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6 px-2 sm:px-0">
      <SectionHeading eyebrow="Featured" title={["Featured", { highlight: "projects" }]} description="Real structural concrete work matched through Outlier Structures across Ventura County and surrounding areas." />
      <div className="flex gap-3">
        <NavButton direction="left" onClick={() => onNavigate(-1)} />
        <NavButton direction="right" onClick={() => onNavigate(1)} />
      </div>
    </div>
    
    {/* Mobile Layout - Stacked */}
    <div className="md:hidden space-y-4 rounded-[24px] border border-white/10 bg-gradient-to-b from-[#141414] to-[#050505] overflow-hidden">
      <div className="relative h-64">
        <img key={currentProject.id} src={currentProject.image} alt={currentProject.title} className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute top-3 right-3 flex items-center gap-2">
          <DotIndicators count={projects.length} activeIndex={activeIndex} />
        </div>
      </div>
      <div className="px-5 pb-6 text-white space-y-3">
        <p className="text-[0.7rem] uppercase tracking-[0.25em] text-[hsl(var(--primary))]">{currentProject.tag}</p>
        <h3 className="text-2xl font-semibold">{currentProject.title}</h3>
        <p className="text-sm text-white/70">{currentProject.location}</p>
        <p className="text-sm text-white/80">{currentProject.scope}</p>
        <p className="text-base leading-relaxed text-white/90">"{currentProject.quote}"</p>
        <div className="flex flex-wrap gap-3 pt-2">
          <PrimaryCTA label="Get a bid" href="/bid" />
          <SecondaryCTA label="Service areas" href="/service-areas" />
        </div>
      </div>
    </div>

    {/* Desktop/Tablet Layout - Overlay */}
    <div className="hidden md:block relative overflow-hidden rounded-[36px] border border-white/10">
      <img key={currentProject.id} src={currentProject.image} alt={currentProject.title} className="h-[28rem] w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="absolute bottom-6 left-6 max-w-md rounded-[32px] border border-white/10 bg-black/70 p-6 text-white">
        <p className="text-xs uppercase tracking-[0.6em] text-white/60">{currentProject.tag}</p>
        <h3 className="text-2xl font-semibold">{currentProject.title}</h3>
        <p className="text-white/70">{currentProject.location}</p>
        <p className="mt-3 text-sm text-white/80">{currentProject.scope}</p>
        <p className="mt-4 text-lg">"{currentProject.quote}"</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <PrimaryCTA label="Get a bid" href="/bid" />
          <SecondaryCTA label="Service areas" href="/service-areas" />
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
        <img src="/images/yolanda-hadid-outside.jpg" alt="Testimonial backdrop" className="h-full w-full object-cover" loading="lazy" />
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

const HowWeHelpSection = () => (
  <section className="rounded-[48px] border border-white/10 bg-black/30 p-6 sm:p-10">
    <SectionHeading
      eyebrow="How we help"
      title={["What", { highlight: "Outlier" }, "Structures does"]}
      description="We're a neutral coordination layer connecting projects with qualified structural concrete contractors."
      align="center"
    />
    <div className="mt-10 grid gap-6 sm:grid-cols-2">
      {team.map((member) => (
        <div key={member.name} className="rounded-[28px] border border-white/10 bg-[#050505]/80 p-6 transition hover:border-primary">
          <p className="text-xs uppercase tracking-[0.6em] text-white/40">{member.role}</p>
          <p className="text-2xl font-semibold text-white">{member.name}</p>
        </div>
      ))}
    </div>
  </section>
);

const WhyOutlierSection = () => (
  <section className="grid gap-10 rounded-[48px] border border-white/10 bg-[#111111]/80 p-6 sm:p-10 lg:grid-cols-[0.8fr,1.2fr]">
    <div className="space-y-4">
      {whyOutlier.map((item) => (
        <div key={item.label} className="rounded-[24px] border border-white/10 bg-black/30 p-5 transition hover:border-primary">
          <p className="text-lg font-semibold text-white">{item.label}</p>
        </div>
      ))}
    </div>
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Why us"
        title={["Why ultra-luxury and commercial", { highlight: "projects" }, "choose Outlier Structures"]}
        description="We're not a random lead generation service. We're an elite matchmaking layer for high-complexity $200k-$5M structural concrete projects."
      />
      <div className="flex flex-wrap gap-3">
        <PrimaryCTA label="Get a bid" href="/bid" />
        <SecondaryCTA label="About us" href="/about" />
      </div>
      <img src="/images/shutterstock_1600353880-scaled.jpg" alt="Structural concrete work" className="grain-surface h-64 w-full rounded-[32px] object-cover" loading="lazy" />
    </div>
  </section>
);

const ServiceHighlightsSection = () => (
  <section className="rounded-[48px] border border-white/10 bg-black/30 p-2">
    <div className="paper-surface rounded-[40px] p-6 sm:p-10">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <SectionHeading eyebrow="Common scopes" title={["What we", { highlight: "specialize" }, "in"]} tone="dark" />
        <Link to="/service-areas" className="inline-flex items-center gap-2 text-sm font-semibold text-black/70 transition hover:text-primary">
          View service areas <ArrowUpRight className="size-4" />
        </Link>
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {serviceHighlights.map((item) => (
          <div key={item.title} className="rounded-[28px] border border-black/10 bg-white/80 p-6 transition hover:border-primary">
            <h3 className="text-xl font-semibold text-black">{item.title}</h3>
            <p className="mt-3 text-base leading-relaxed text-black/70">{item.description}</p>
          </div>
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
        <h3 className="mt-2 text-3xl font-semibold">Get a structural bid</h3>
      </div>
      <div className="flex items-center justify-end gap-3">
        <Link to="/about" className="inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-3 text-sm font-semibold transition hover:border-primary">
          About us <ArrowUpRight className="size-4" />
        </Link>
        <Link to="/bid" className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]">
          Get a bid <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </div>
    <div className="grid gap-8 text-sm text-white/70 sm:grid-cols-[2fr,1fr]">
      <div className="space-y-3">
        <p>Outlier Structures connects general contractors, developers, and homeowners with vetted structural concrete contractors across Ventura County, Conejo Valley, West San Fernando Valley, and Malibu.</p>
        <p>{CONTACT_PHONE} • {CONTACT_EMAIL}</p>
        <p>Serving Thousand Oaks and surrounding areas</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          {footerLinks.nav.map((item) => (
            <p key={item.label}>
              <Link to={item.href} className="transition hover:text-primary">{item.label}</Link>
            </p>
          ))}
        </div>
        <div>
          {footerLinks.socials.map((social) => (
            <p key={social.label}>
              <a href={social.href} target="_blank" rel="noreferrer" className="transition hover:text-primary">
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
      {eyebrow && <p className={cn("text-xs font-semibold uppercase tracking-[0.3em] sm:tracking-[0.7em]", eyebrowText)}>{eyebrow}</p>}
      <h2 className={cn("mt-3 text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl", baseText, align === "center" && "md:text-5xl")}>
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

const PrimaryCTA = ({ label, dark = false, href = "/bid" }: { label: string; dark?: boolean; href?: string }) => (
  <Link
    to={href}
    className={cn(
      "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition",
      dark ? "bg-black text-white hover:bg-black/90" : "bg-white text-black hover:scale-[1.02]",
    )}
  >
    {label}
    <ArrowUpRight className="size-4" />
  </Link>
);

const SecondaryCTA = ({ label, href = "/how-it-works" }: { label: string; href?: string }) => (
  <Link
    to={href}
    className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-primary hover:text-white"
  >
    {label}
    <ArrowUpRight className="size-4" />
  </Link>
);

const NavButton = ({ direction, onClick }: { direction: "left" | "right"; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="flex size-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-primary hover:text-white"
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
