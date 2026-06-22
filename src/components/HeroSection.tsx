"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Shield, Orbit, Activity, Cpu, ArrowRight, Binary } from "lucide-react";

// Dynamically import Three.js Canvas with SSR disabled to prevent server-side failures
const InteractiveGlobe = dynamic(() => import("./3d/InteractiveGlobe"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative flex flex-col items-center">
        <div className="h-16 w-16 rounded-full border-2 border-emerald/20 border-t-emerald animate-spin" />
        <span className="mt-4 font-mono text-xs text-emerald/60 tracking-widest uppercase">
          Initializing 3D Telemetry Grid...
        </span>
      </div>
    </div>
  ),
});

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  const badgeData = [
    {
      title: "Patent Application Published (India)",
      sub: "Application No.",
      val: "202641010976",
      icon: <Shield className="h-4 w-4 text-emerald" />,
    },
    {
      title: "International PCT Application Filed",
      sub: "Application Ref",
      val: "PCT/IB2026/053807",
      icon: <Orbit className="h-4 w-4 text-cyber-blue" />,
    },
    {
      title: "Patent Application Under Examination",
      sub: "Status",
      val: "Under Examination",
      icon: <Cpu className="h-4 w-4 text-cyber-blue" />,
    },
    {
      title: "TRL 4 Validation",
      sub: "Technology Maturity",
      val: "Validated Prototype",
      icon: <Activity className="h-4 w-4 text-emerald" />,
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-forest-dark pt-20">
      {/* Background grid matrix overlays */}
      <div className="absolute inset-0 grid-matrix pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forest-dark/10 to-forest-dark pointer-events-none z-10" />

      {/* 3D Canvas Background Container */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-[70vh] lg:h-full z-0 opacity-70 lg:opacity-100">
        <InteractiveGlobe />
      </div>

      {/* Foreground Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 relative pt-12 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Headline and Copy block */}
          <motion.div
            className="lg:col-span-7 flex flex-col"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Superhead system tag */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded border border-emerald/30 bg-emerald/10 text-emerald text-[10px] font-mono tracking-widest uppercase mb-6 w-fit"
            >
              <Binary className="h-3 w-3 animate-pulse" />
              <span>Environmental Governance Infrastructure</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-text-main leading-none mb-6"
            >
              Environmental <br />
              <span className="bg-gradient-to-r from-emerald via-emerald/80 to-cyber-blue bg-clip-text text-transparent glow-text-emerald">
                Intelligence
              </span> <br />
              Infrastructure
            </motion.h1>

            {/* Subhead */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-text-muted font-sans max-w-xl mb-8 leading-relaxed"
            >
              Building trusted systems for environmental monitoring, sustainability intelligence, and public accountability.
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
            >
              <a
                href="#ecosystem"
                className="group inline-flex items-center justify-center gap-2 text-xs font-mono font-bold tracking-wider uppercase bg-emerald text-forest-dark dark:text-forest-dark px-6 py-3.5 rounded border border-emerald/40 transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
              >
                <span>Explore GreenProof</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="#technology"
                className="inline-flex items-center justify-center text-xs font-mono font-bold tracking-wider uppercase border border-border-subtle bg-white/5 hover:bg-emerald/10 text-text-main hover:text-emerald px-6 py-3.5 rounded transition-all duration-300"
              >
                View Technology
              </a>
            </motion.div>

            {/* Credibility Badges (animated container) */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {badgeData.map((badge, idx) => (
                <motion.div
                  key={idx}
                  className="glass-card p-4 rounded flex items-start gap-3.5"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-2 rounded bg-forest-medium/50 dark:bg-white/5 border border-border-subtle flex items-center justify-center">
                    {badge.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono tracking-wider text-text-muted uppercase">
                      {badge.title}
                    </span>
                    <span className="text-[9px] font-mono text-gray-500 uppercase mt-0.5">
                      {badge.sub}
                    </span>
                    <span className="text-xs font-mono font-bold text-text-main tracking-wide mt-0.5">
                      {badge.val}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
