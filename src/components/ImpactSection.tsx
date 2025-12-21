import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Building2,
  Leaf,
  Users2,
  FileCheck,
  TrendingUp,
  Globe2,
  Scale,
  Lightbulb,
} from "lucide-react";

const ImpactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stakeholders = [
    { icon: Building2, label: "Central & State Governments" },
    { icon: Globe2, label: "Smart Cities Mission" },
    { icon: Scale, label: "ESG & CSR Regulators" },
    { icon: Lightbulb, label: "PSUs & Infrastructure Agencies" },
    { icon: Users2, label: "NGOs & Monitoring Bodies" },
  ];

  const useCases = [
    {
      icon: Building2,
      title: "Infrastructure Verification",
      description: "Real-time progress tracking and completion verification for public projects",
    },
    {
      icon: Leaf,
      title: "ESG Compliance",
      description: "Authentic sustainability claims backed by citizen-verified evidence",
    },
    {
      icon: FileCheck,
      title: "CSR Impact Assessment",
      description: "Verifiable ground-truth for corporate social responsibility initiatives",
    },
    {
      icon: TrendingUp,
      title: "Grant Accountability",
      description: "Transparent tracking of public fund utilization and outcomes",
    },
  ];

  const impacts = [
    {
      icon: "🛡️",
      title: "Reduced Corruption",
      description: "Eliminate false reporting through verified citizen evidence",
    },
    {
      icon: "👥",
      title: "Citizen Participation",
      description: "Structured role for citizens in governance verification",
    },
    {
      icon: "📊",
      title: "Evidence-Based Policy",
      description: "Data-driven evaluation of project outcomes",
    },
    {
      icon: "🌱",
      title: "ESG Credibility",
      description: "Strengthen trust in sustainability claims",
    },
    {
      icon: "♻️",
      title: "Scalable Infrastructure",
      description: "Reusable verification layer for diverse applications",
    },
    {
      icon: "🌍",
      title: "Climate Commitments",
      description: "Support India's national and international climate goals",
    },
  ];

  return (
    <section id="impact" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-4">
            Creating Real Change
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Impact & <span className="text-gradient-primary">Vision</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            GPE isn't just technology—it's a movement towards transparent governance, 
            authentic sustainability, and citizen empowerment at national scale.
          </p>
        </motion.div>

        {/* Stakeholders */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">
            Key Stakeholders
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {stakeholders.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                className="flex items-center gap-3 px-5 py-3 bg-card rounded-full border border-border/50 hover:border-primary/40 transition-colors"
              >
                <item.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">
            Use Cases
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="p-6 bg-background rounded-2xl border border-border/50 hover:shadow-card hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <useCase.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{useCase.title}</h4>
                <p className="text-sm text-muted-foreground">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Public Impact */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-4">
            Public Impact & Sustainability
          </h3>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            Creating long-term public value through transparent, accountable governance
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {impacts.map((impact, index) => (
              <motion.div
                key={impact.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-gradient-card rounded-2xl border border-border/30"
              >
                <span className="text-3xl">{impact.icon}</span>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{impact.title}</h4>
                  <p className="text-sm text-muted-foreground">{impact.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
