import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import DashboardPreview from "@/components/home/DashboardPreview";
import HowItWorks from "@/components/home/HowItWorks";
import IntegrationsSection from "@/components/home/IntegrationsSection";
import UseCasesSection from "@/components/home/UseCasesSection";
import CTASection from "@/components/home/CTASection";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <DashboardPreview />
      <HowItWorks />
      <IntegrationsSection />
      <UseCasesSection />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Index;
