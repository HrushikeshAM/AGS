import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Sparkles } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To establish India's first citizen-powered verification backbone for ESG compliance and public project accountability, creating unprecedented transparency in sustainability claims.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "A national verification infrastructure where every sustainability claim and public project can be trusted through decentralized, AI-validated citizen evidence.",
    },
    {
      icon: Sparkles,
      title: "Our Innovation",
      description:
        "Combining deep-tech AI, blockchain immutability, and citizen participation to create a DPI-aligned platform that scales from local projects to national impact.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-4">
            About AxiomGreen
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Redefining <span className="text-gradient-primary">Verification</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            AxiomGreen Solutions Pvt. Ltd. is a deep-tech startup aligned with 
            Startup India and Digital Public Infrastructure initiatives, pioneering 
            the future of ESG and public project verification.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group p-8 bg-gradient-card rounded-3xl border border-border/50 hover:border-primary/40 hover:shadow-card-hover transition-all duration-500"
            >
              <div className="w-14 h-14 bg-gradient-hero rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 p-8 lg:p-12 bg-card rounded-3xl border border-border/50"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Why Verification Matters Now
              </h3>
              <p className="text-muted-foreground mb-4">
                India is witnessing a growing national focus on transparency, 
                accountability, and ESG commitments. Yet, there's a critical gap: 
                no citizen-driven verification backbone exists to validate claims 
                at scale.
              </p>
              <ul className="space-y-3">
                {[
                  "ESG claims lack verifiable ground evidence",
                  "Manual audits are slow and non-scalable",
                  "Photo/video manipulation undermines trust",
                  "Citizens have no structured role in verification",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-2xl opacity-10" />
              <div className="relative p-8 text-center">
                <div className="text-6xl lg:text-7xl font-bold text-gradient-primary mb-2">
                  ₹1T+
                </div>
                <p className="text-muted-foreground">
                  Annual public infrastructure spending at risk of false reporting
                </p>
                <div className="mt-8 pt-8 border-t border-border/50">
                  <div className="text-4xl font-bold text-foreground mb-2">70%</div>
                  <p className="text-muted-foreground text-sm">
                    Of ESG reports face scrutiny for unverifiable claims
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
