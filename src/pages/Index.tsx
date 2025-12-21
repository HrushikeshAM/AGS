import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GPESection from "@/components/GPESection";
import ImpactSection from "@/components/ImpactSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>AxiomGreen Solutions</title>
        <meta
          name="description"
          content="AxiomGreen Solutions is pioneering the Green Proof Ecosystem (GPE) - a Digital Public Infrastructure for citizen-powered verification of sustainability and public projects in India."
        />
        <meta
          name="keywords"
          content="ESG verification, sustainability, Green Proof Ecosystem, GPE, digital public infrastructure, citizen verification, India, Bangalore"
        />
        <link rel="canonical" href="https://axiomgreensolutions.in" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AxiomGreen Solutions | Building Trust in Sustainability" />
        <meta property="og:description" content="Pioneering citizen-powered ESG verification through AI-driven digital infrastructure." />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AxiomGreen Solutions Pvt. Ltd.",
            description: "Digital Public Infrastructure for Citizen-Powered Verification of Sustainability & Public Projects",
            email: "info@axiomgreensolutions.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "#146, Shri Shailam, SN Layout, Chokkanahalli, Bagalur",
              addressLocality: "Bangalore",
              postalCode: "562149",
              addressRegion: "Karnataka",
              addressCountry: "India",
            },
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <GPESection />
        <ImpactSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
