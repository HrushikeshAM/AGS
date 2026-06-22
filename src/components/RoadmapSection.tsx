"use client";

import { motion } from "framer-motion";
import { Search, PenTool, BookOpen, Send, ShieldAlert, Rocket, Network, Share2, Globe } from "lucide-react";

export default function RoadmapSection() {
  const steps = [
    {
      year: "2025",
      title: "Research & Conceptualization",
      desc: "Completed foundational literature review, formulated project scope, and defined data requirements.",
      icon: <Search className="h-4 w-4" />,
      status: "completed"
    },
    {
      year: "2026",
      title: "Prototype Development",
      desc: "Developed and verified end-to-end simulated data flows and prototype interface designs.",
      icon: <PenTool className="h-4 w-4" />,
      status: "completed"
    },
    {
      year: "2026",
      title: "Patent Application Published (India)",
      desc: "Patent Application No. 202641010976 published in India covering environmental data fusion pipelines.",
      icon: <BookOpen className="h-4 w-4" />,
      status: "completed"
    },
    {
      year: "2026",
      title: "International PCT Application Filed",
      desc: "Filed Patent Cooperation Treaty application (PCT/IB2026/053807) to seek international coverage.",
      icon: <Send className="h-4 w-4" />,
      status: "completed"
    },
    {
      year: "2026",
      title: "TRL 4 Technology Validation",
      desc: "Completed functional validation of project components in simulated environments.",
      icon: <ShieldAlert className="h-4 w-4" />,
      status: "completed"
    },
    {
      year: "2027",
      title: "Pilot Programs",
      desc: "Target validation with municipal and institutional partners.",
      icon: <Rocket className="h-4 w-4" />,
      status: "upcoming"
    },
    {
      year: "2028",
      title: "Government & Enterprise Deployments",
      desc: "Target integration with selected organizations.",
      icon: <Network className="h-4 w-4" />,
      status: "upcoming"
    },
    {
      year: "2029",
      title: "Regional Expansion",
      desc: "Scale platform adoption and onboard wider partners.",
      icon: <Share2 className="h-4 w-4" />,
      status: "upcoming"
    },
    {
      year: "2030",
      title: "Environmental Intelligence Infrastructure Vision",
      desc: "Long-term ecosystem development and national registry integration.",
      icon: <Globe className="h-4 w-4" />,
      status: "upcoming"
    }
  ];

  return (
    <section id="roadmap" className="relative py-24 bg-forest-dark overflow-hidden border-t border-border-subtle">
      <div className="absolute inset-0 grid-matrix pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-[10px] font-mono tracking-widest text-emerald border border-emerald/30 bg-emerald/10 px-2.5 py-1 rounded uppercase">
            Future Rollout
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-main mt-4 mb-6">
            The Infrastructure Roadmap
          </h2>
          <p className="text-sm text-text-muted">
            A comprehensive strategic pathway mapping research phases to full public network deployments.
          </p>
        </div>

        {/* Timeline representation */}
        <div className="relative border-l border-emerald/20 ml-4 md:ml-32 space-y-12">
          {steps.map((step, idx) => {
            const isCompleted = step.status === "completed";
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Connecting bullet */}
                <div className={`absolute -left-3.5 top-1.5 h-7 w-7 rounded-full border flex items-center justify-center text-xs font-bold z-10 ${
                  isCompleted
                    ? "bg-emerald border-emerald text-forest-dark shadow-[0_0_10px_rgba(16,185,129,0.4)]"
                    : "bg-forest-dark border-border-subtle text-text-muted"
                }`}>
                  {step.icon}
                </div>

                {/* Left Year Side (Desktop only) */}
                <div className="absolute hidden md:block -left-32 top-2 w-24 text-right font-mono text-sm font-black tracking-wider text-text-main">
                  <span className={isCompleted ? "text-emerald glow-text-emerald" : "text-text-muted"}>
                    {step.year}
                  </span>
                </div>

                {/* Content card */}
                <div className={`glass-card p-6 rounded-lg max-w-3xl border ${
                  isCompleted ? "border-emerald/15 bg-emerald/[0.01]" : "border-border-subtle"
                }`}>
                  {/* Mobile year flag */}
                  <span className="inline-block md:hidden font-mono text-xs text-emerald font-black tracking-widest uppercase mb-1">
                    {step.year} — {step.status}
                  </span>
                  
                  <h3 className="text-sm sm:text-base font-display font-bold text-text-main tracking-wide">
                    {step.title}
                  </h3>
                  
                  <p className="text-xs text-text-muted mt-1.5 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
