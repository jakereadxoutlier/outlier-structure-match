import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustedStrip } from "@/components/TrustedStrip";
import { WhoWeServe } from "@/components/WhoWeServe";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { Projects } from "@/components/Projects";
import { WhyOutlier } from "@/components/WhyOutlier";
import { LeadForm } from "@/components/LeadForm";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-gradient-to-b from-slate-950 to-slate-900 text-slate-50 min-h-screen">
      <Header />
      <main className="relative">
        <Hero />
        <TrustedStrip />
        <WhoWeServe />
        <Services />
        <HowItWorks />
        <Projects />
        <WhyOutlier />
        <LeadForm />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
