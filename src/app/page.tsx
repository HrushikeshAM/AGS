import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ChallengeSection from "@/components/ChallengeSection";
import WhatIsGreenProof from "@/components/WhatIsGreenProof";
import EcosystemSection from "@/components/EcosystemSection";
import ProductCenterpiece from "@/components/ProductCenterpiece";
import TechDeepDive from "@/components/TechDeepDive";
import ImpactMetrics from "@/components/ImpactMetrics";
import AirNodeTeaserStrip from "@/components/AirNodeTeaserStrip";
import RoadmapSection from "@/components/RoadmapSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <ChallengeSection />
        <WhatIsGreenProof />
        <EcosystemSection />
        <ProductCenterpiece />
        <TechDeepDive />
        <ImpactMetrics />
        <AirNodeTeaserStrip />
        <RoadmapSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
