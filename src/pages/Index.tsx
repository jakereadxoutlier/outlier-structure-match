import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhoWeServe } from "@/components/WhoWeServe";
import { ServicesGrid } from "@/components/ServicesGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { ResultsProof } from "@/components/ResultsProof";
import { ProjectsGallery } from "@/components/ProjectsGallery";
import { MainBidForm } from "@/components/MainBidForm";
import { WhyOutlier } from "@/components/WhyOutlier";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhoWeServe />
      <ServicesGrid />
      <HowItWorks />
      <ResultsProof />
      <ProjectsGallery />
      <MainBidForm />
      <WhyOutlier />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
