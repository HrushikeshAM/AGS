"use client";

import { motion } from "framer-motion";
import { UserCheck, ShieldAlert, BadgeInfo, Scale, Settings } from "lucide-react";

export default function TeamSection() {
  const members = [
    {
      name: "ANIL MENON",
      role: "Founder & CEO",
      desc: "Leads strategic vision, commercialization, partnerships, government engagement, and ecosystem development.",
      focus: ["Product Vision", "Government Relations", "Strategic Partnerships", "Sustainability Programs"],
      badge: null,
      icon: <UserCheck className="h-5 w-5 text-emerald" />
    },
    {
      name: "HRUSHIKESH MENON",
      role: "CTO, Inventor & Lead Architect",
      desc: "Inventor of the GreenProof Ecosystem architecture and lead designer of the platform's AI, GIS, ESG intelligence, and environmental verification framework.",
      focus: ["Artificial Intelligence", "Environmental Intelligence Systems", "GIS & Geospatial Analytics", "Platform Architecture", "Product Engineering"],
      badge: "Patent Application Published | PCT Filed | TRL 4",
      patentDetails: "Indian Patent Application No. 202641010976 | PCT/IB2026/053807",
      icon: <ShieldAlert className="h-5 w-5 text-cyber-blue" />
    },
    {
      name: "GIRISH KULKARNI",
      role: "Cloud Infrastructure Advisor",
      desc: "Guides deployment scale, distributed queues, and high-throughput spatial database systems.",
      focus: ["Cloud Architecture", "Infrastructure Scaling", "Platform Security", "Deployment Strategy"],
      badge: null,
      icon: <Settings className="h-5 w-5 text-emerald" />
    },
    {
      name: "SHYLAJA E K",
      role: "Governance & Compliance",
      desc: "Coordinates administrative compliance, legal documentation, and state-level audit coordination.",
      focus: ["Governance", "Compliance Coordination", "Documentation", "Operational Administration"],
      badge: null,
      icon: <Scale className="h-5 w-5 text-cyber-blue" />
    }
  ];

  return (
    <section id="team" className="relative py-24 bg-forest-dark overflow-hidden border-t border-border-subtle">
      <div className="absolute inset-0 dot-matrix opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-[10px] font-mono tracking-widest text-emerald border border-emerald/30 bg-emerald/10 px-2.5 py-1 rounded uppercase">
            Platform Builders
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-main mt-4 mb-6">
            Builders of Environmental Intelligence
          </h2>
          <p className="text-sm text-text-muted">
            Combining technology, governance, cloud infrastructure, and environmental intelligence to create the next generation of sustainability infrastructure.
          </p>
        </div>

        {/* Bio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {members.map((member, idx) => {
            const isCTO = member.name === "HRUSHIKESH MENON";
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`glass-panel p-8 rounded-lg border flex flex-col justify-between ${
                  isCTO ? "border-emerald/45 bg-emerald/[0.02]" : "border-border-subtle"
                }`}
              >
                <div>
                  {/* Top info and badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded bg-forest-medium/40 dark:bg-white/5 border border-border-subtle text-text-muted">
                        {member.icon}
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-display font-bold text-text-main tracking-wide leading-none">
                          {member.name}
                        </h3>
                        <span className="text-[10px] font-mono text-emerald uppercase tracking-wider mt-1 block">
                          {member.role}
                        </span>
                      </div>
                    </div>

                    {isCTO && (
                      <span className="hidden sm:inline-block px-2.5 py-0.5 rounded bg-emerald/10 border border-emerald/30 text-[8px] font-mono font-black text-emerald uppercase animate-pulse">
                        INVENTOR
                      </span>
                    )}
                  </div>

                  {/* Patent badge details */}
                  {member.badge && (
                    <div className="mb-4 px-3 py-1.5 rounded border border-cyber-blue/30 bg-cyber-blue/5 text-[9px] font-mono text-cyber-blue flex flex-col gap-0.5">
                      <span className="font-bold">{member.badge}</span>
                      <span className="text-text-muted/80">{member.patentDetails}</span>
                    </div>
                  )}

                  {/* Profile description */}
                  <p className="text-xs text-text-muted leading-relaxed font-sans mb-6">
                    {member.desc}
                  </p>
                </div>

                {/* Focus areas tags */}
                <div className="border-t border-border-subtle pt-4">
                  <span className="text-[8px] font-mono text-text-muted uppercase tracking-widest block mb-2">
                    Core Focus Areas
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {member.focus.map((item, fIdx) => (
                      <span
                        key={fIdx}
                        className="text-[9px] font-mono text-text-main bg-forest-medium/40 dark:bg-white/5 border border-border-subtle px-2 py-0.5 rounded"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
