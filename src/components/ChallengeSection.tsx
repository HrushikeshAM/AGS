"use client";

import { motion } from "framer-motion";
import { AlertCircle, FileText, Ban, Layers, EyeOff } from "lucide-react";

export default function ChallengeSection() {
  const challenges = [
    {
      title: "Data Silos & Fragmentation",
      desc: "Governments, industries, citizens, sensors, and satellites operate on separate platforms with incompatible databases, locking away vital insights.",
      icon: <Layers className="h-5 w-5 text-red-500" />,
    },
    {
      title: "Manual & Retroactive Audits",
      desc: "Pollution reports are compiled in paper format or spreadsheets and submitted months late. Authorities cannot intercept acute pollution spikes.",
      icon: <FileText className="h-5 w-5 text-amber-500" />,
    },
    {
      title: "ESG Greenwashing",
      desc: "Self-reported, unverified annual metrics allow entities to retroactively modify sustainability scores to fit regulatory expectations.",
      icon: <Ban className="h-5 w-5 text-orange-500" />,
    },
    {
      title: "Delayed Regulatory Compliance",
      desc: "Lack of continuous ingestion channels prevents automated compliance mapping, leading to high administrative friction and penalties.",
      icon: <AlertCircle className="h-5 w-5 text-rose-500" />,
    },
    {
      title: "Weak Accountability & Transparency",
      desc: "Citizen complaints are disconnected from spatial validation grids (GIS maps), leaving community verification completely unrecorded.",
      icon: <EyeOff className="h-5 w-5 text-gray-500" />,
    },
  ];

  return (
    <section id="challenge" className="relative min-h-screen py-24 bg-gradient-to-b from-forest-dark via-forest-medium to-forest-dark overflow-hidden">
      {/* Background Matrix */}
      <div className="absolute inset-0 dot-matrix opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title / Superhead */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[10px] font-mono tracking-widest text-red-500 border border-red-500/20 bg-red-500/5 px-2.5 py-1 rounded uppercase">
            System Failure Vector
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-main mt-4 mb-6">
            The Fragmentation Crisis in Environmental Governance
          </h2>
          <p className="text-sm text-text-muted">
            Traditional systems rely on isolated actors operating in informational vacuums. When environmental monitoring data, GIS mapping, and community verification do not converge, accountability collapses.
          </p>
        </div>

        {/* Scroll grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Interactive comparison card (Sticky scroll behavior) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="glass-panel p-6 rounded-lg border border-red-500/20 bg-red-500/[0.01]">
              <div className="flex items-center gap-2 text-xs font-mono text-red-500 uppercase mb-4">
                <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                <span>Status: Fragmented Legacy System</span>
              </div>
              <h3 className="text-lg font-display font-semibold text-text-main mb-3">
                Decoupled Operations
              </h3>
              <p className="text-xs text-text-muted mb-6">
                Governments, Industries, Satellites, Sensors, and Citizens operate with zero structural cross-validation, leading to blind spots and delayed response times.
              </p>

              {/* Siloed entities grid mockup */}
              <div className="grid grid-cols-3 gap-2.5 text-[9px] font-mono text-center">
                <div className="p-2 border border-border-subtle bg-forest-medium/50 dark:bg-white/5 rounded text-text-muted">Government</div>
                <div className="p-2 border border-border-subtle bg-forest-medium/50 dark:bg-white/5 rounded text-text-muted">Industries</div>
                <div className="p-2 border border-border-subtle bg-forest-medium/50 dark:bg-white/5 rounded text-text-muted">Satellites</div>
                <div className="p-2 border border-border-subtle bg-forest-medium/50 dark:bg-white/5 rounded text-text-muted">Monitoring</div>
                <div className="p-2 border border-border-subtle bg-forest-medium/50 dark:bg-white/5 rounded text-text-muted">ESG Teams</div>
                <div className="p-2 border border-border-subtle bg-forest-medium/50 dark:bg-white/5 rounded text-text-muted">Citizens</div>
              </div>

              {/* Transition arrow visualization */}
              <div className="my-8 flex items-center justify-center">
                <div className="h-10 w-[1px] bg-gradient-to-b from-red-500/50 to-emerald/50 flex flex-col justify-between items-center py-1">
                  <span className="text-[8px] font-mono text-text-muted">UNIFY</span>
                </div>
              </div>

              {/* Proposed Layer */}
              <div className="glass-panel p-4 rounded border-emerald/30 bg-emerald/5">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald uppercase mb-2">
                  <span className="h-2 w-2 rounded-full bg-emerald animate-ping" />
                  <span>Proposed Integration Layer</span>
                </div>
                <h4 className="text-sm font-semibold text-text-main">
                  One Unified Environmental Intelligence Layer
                </h4>
                <p className="text-[10px] text-text-muted mt-1">
                  Continuous ingestion cross-referenced with GIS spatial grids and community-verified trusted logs.
                </p>
              </div>

            </div>
          </div>

          {/* Right: Siloed Challenges Timeline */}
          <div className="lg:col-span-7 space-y-6">
            {challenges.map((challenge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-lg flex items-start gap-4 hover:border-red-500/20"
              >
                <div className="p-2 rounded bg-forest-medium/50 dark:bg-white/5 border border-border-subtle mt-1 shrink-0">
                  {challenge.icon}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-display font-semibold text-text-main tracking-wide">
                    {challenge.title}
                  </h3>
                  <p className="text-xs text-text-muted mt-1 leading-relaxed">
                    {challenge.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
