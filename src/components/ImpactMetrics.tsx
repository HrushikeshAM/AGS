"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Calendar, Flame, Network } from "lucide-react";

export default function ImpactMetrics() {
  const milestones = [
    {
      title: "Functional Prototype Developed",
      desc: "Simulated end-to-end environmental intelligence workflow completed.",
      badge: "STATUS: COMPLETED",
      icon: <Award className="h-5 w-5 text-emerald" />,
    },
    {
      title: "TRL 4 Validation",
      desc: "Technology validated through a functional prototype.",
      badge: "STATUS: COMPLETED",
      icon: <Flame className="h-5 w-5 text-cyber-blue" />,
    },
    {
      title: "Patent Application Published (India)",
      desc: "Application No. 202641010976",
      badge: "STATUS: COMPLETED",
      icon: <ShieldCheck className="h-5 w-5 text-emerald" />,
    },
    {
      title: "International PCT Application Filed",
      desc: "PCT/IB2026/053807",
      badge: "STATUS: COMPLETED",
      icon: <Network className="h-5 w-5 text-cyber-blue" />,
    },
    {
      title: "Pilot Preparation",
      desc: "Preparing for future validation and deployment opportunities.",
      badge: "STATUS: IN PROGRESS",
      icon: <Calendar className="h-5 w-5 text-emerald" />,
    },
  ];

  return (
    <section className="relative py-24 bg-forest-dark overflow-hidden border-t border-border-subtle">
      <div className="absolute inset-0 dot-matrix opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-[10px] font-mono tracking-widest text-emerald border border-emerald/30 bg-emerald/10 px-2.5 py-1 rounded uppercase">
            Current Progress
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-main mt-4 mb-6">
            Current Progress
          </h2>
          <p className="text-sm text-text-muted">
            Fusing scientific research with environmental intelligence development milestones.
          </p>
        </div>

        {/* Milestone cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestones.map((milestone, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded border-border-subtle hover:border-emerald/30 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded bg-forest-medium/40 dark:bg-white/5 border border-border-subtle text-text-muted">
                    {milestone.icon}
                  </div>
                  <span className="font-mono text-[9px] text-emerald font-bold tracking-wider px-2 py-0.5 rounded bg-emerald/10 border border-emerald/20">
                    {milestone.badge}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-display font-bold text-text-main leading-tight mb-2">
                  {milestone.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed font-sans">
                  {milestone.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
