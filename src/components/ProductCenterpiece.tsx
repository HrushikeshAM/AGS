"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Check, Info, Send, Terminal } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamic canvas loader for product 3D components to maintain Lighthouse scores
const AirNode3D = dynamic(() => import("./3d/AirNode3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-64 flex items-center justify-center border border-white/5 bg-black/20 rounded-lg">
      <span className="font-mono text-[10px] text-emerald/60 animate-pulse uppercase">
        Initializing Atmosphere Chamber...
      </span>
    </div>
  ),
});

export default function ProductCenterpiece() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    {
      label: "GREENPROOF ECOSYSTEM",
      badge: "FLAGSHIP PLATFORM",
      title: "GreenProof Ecosystem",
      desc: "GreenProof Ecosystem is an environmental intelligence platform that enables trusted monitoring, verification, compliance, and sustainability decision-making through a unified intelligence layer.",
      features: [
        "Environmental Monitoring",
        "Sustainability Intelligence",
        "Compliance Support",
        "Government Dashboards",
        "Citizen Participation",
        "Environmental Verification"
      ],
      visualType: "dashboard",
      teaser: undefined as string | undefined
    },
    {
      label: "AIR NODE",
      badge: "COMING SOON",
      title: "Air Node",
      desc: "The next layer of environmental intelligence is coming. Designed to bring environmental awareness closer to the real world.",
      features: [] as string[],
      visualType: "teaser-node",
      teaser: undefined as string | undefined
    }
  ];

  return (
    <section id="products" className="relative py-24 bg-forest-dark overflow-hidden border-t border-border-subtle">
      <div className="absolute inset-0 dot-matrix opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[10px] font-mono tracking-widest text-emerald border border-emerald/30 bg-emerald/10 px-2.5 py-1 rounded uppercase">
            Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-main mt-4 mb-6">
            Products
          </h2>
          <p className="text-sm text-text-muted">
            Purpose-built environmental intelligence solutions for governments, industries, and sustainability ecosystems.
          </p>
        </div>

        {/* Tab Buttons bar */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {tabs.map((tab, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3 rounded font-mono text-[11px] font-bold tracking-wider transition-all duration-300 flex items-center gap-2 border ${isActive
                    ? "bg-emerald text-forest-dark border-emerald shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                    : "bg-forest-medium/30 border border-border-subtle text-text-muted hover:border-emerald/30 dark:bg-white/5 hover:text-text-main"
                  }`}
              >
                <span>{tab.label}</span>
                {tab.badge === "COMING SOON" && (
                  <span className={`text-[8px] px-1 py-0.5 rounded font-black ${isActive ? "bg-forest-dark text-emerald" : "bg-emerald/20 text-emerald animate-pulse"}`}>
                    SOON
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Panel */}
        <div className="glass-panel p-8 rounded-lg border border-border-subtle bg-forest-medium/20 dark:bg-graphite-black/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left col: Detail and Features */}
              <div className="lg:col-span-6">
                <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-forest-medium/40 dark:bg-white/5 border border-border-subtle w-fit text-[10px] font-mono text-emerald tracking-wider mb-4 uppercase">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>{tabs[activeTab].badge}</span>
                </div>

                <h3 className="text-2xl font-display font-black text-text-main mb-4">
                  {tabs[activeTab].title}
                </h3>

                <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-6 font-sans">
                  {tabs[activeTab].desc}
                </p>

                {tabs[activeTab].teaser && (
                  <div className="mb-6 px-4 py-3 rounded border border-emerald/20 bg-emerald/5 font-mono text-xs text-emerald font-semibold italic">
                    "{tabs[activeTab].teaser}"
                  </div>
                )}

                {/* Features Checklist */}
                <div className="space-y-2.5">
                  {tabs[activeTab].features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3">
                      <div className="p-0.5 rounded-full bg-emerald/10 border border-emerald/30 text-emerald">
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="text-xs text-text-muted font-mono">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {tabs[activeTab].label === "AIR NODE" ? (
                    <>
                      <a
                        href="#contact"
                        className="inline-flex items-center justify-center gap-2 text-xs font-mono font-bold tracking-wider uppercase bg-emerald text-forest-dark px-5 py-3 rounded border border-emerald/30 shadow-[0_0_12px_rgba(16,185,129,0.2)] hover:shadow-[0_0_24px_rgba(16,185,129,0.4)]"
                      >
                        <span>Join Early Access</span>
                      </a>
                      <a
                        href="#contact"
                        className="inline-flex items-center justify-center text-xs font-mono font-bold tracking-wider uppercase border border-border-subtle bg-forest-medium/30 hover:bg-forest-medium text-text-main px-5 py-3 rounded transition-colors"
                      >
                        Learn More
                      </a>
                    </>
                  ) : (
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center gap-2 text-xs font-mono font-bold tracking-wider uppercase bg-emerald text-forest-dark px-5 py-3 rounded border border-emerald/30 shadow-[0_0_12px_rgba(16,185,129,0.2)] hover:shadow-[0_0_24px_rgba(16,185,129,0.4)]"
                    >
                      <span>Deploy Platform</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right col: Custom UI / 3D Graphics representation */}
              <div className="lg:col-span-6 flex items-center justify-center">

                {/* 1. Dashboard Mockup representation */}
                {tabs[activeTab].visualType === "dashboard" && (
                  <div className="w-full glass-panel border border-border-subtle p-4 rounded-lg bg-forest-medium/20 dark:bg-black/40 font-mono text-[9px] text-text-muted">
                    <div className="flex items-center justify-between border-b border-border-subtle pb-2 mb-3">
                      <span className="text-[10px] font-bold text-text-main flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-ping" />
                        GREENPROOF TRUST PROTOCOL
                      </span>
                      <span className="text-emerald">TRL 4 VALIDATED</span>
                    </div>
                    {/* Mock dashboard layout */}
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="p-2 bg-forest-medium/40 dark:bg-white/5 border border-border-subtle rounded">
                        <span>Monitoring Coverage:</span>
                        <div className="text-text-main text-xs font-bold mt-1">Unified</div>
                      </div>
                      <div className="p-2 bg-forest-medium/40 dark:bg-white/5 border border-border-subtle rounded">
                        <span>Verification Audit:</span>
                        <div className="text-emerald text-xs font-bold mt-1">Cryptographic</div>
                      </div>
                    </div>

                    <div className="p-3 bg-forest-medium/40 dark:bg-white/5 border border-border-subtle rounded text-left flex flex-col gap-2">
                      <div className="flex justify-between border-b border-border-subtle pb-1">
                        Environmental Ingestion Feed
                      </div>
                      <p className="text-[8px] leading-relaxed text-gray-500">
                        Ingesting and analyzing environmental monitoring logs, remote sensing coordinates, and citizen reports to support compliance, transparency, and decision-making.
                      </p>
                    </div>
                  </div>
                )}

                {/* 2. Air Node silhouette teaser */}
                {tabs[activeTab].visualType === "teaser-node" && (
                  <div className="w-full h-64 relative bg-forest-dark/80 rounded-lg border border-border-subtle overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_40%,var(--color-forest-dark)_90%] pointer-events-none z-10" />

                    {/* Low lighting silhouette R3F element */}
                    <div className="w-full h-full opacity-45 mix-blend-screen filter blur-[0.5px]">
                      <AirNode3D />
                    </div>

                    <div className="absolute z-20 flex flex-col items-center pointer-events-none">
                      <div className="h-2.5 w-2.5 rounded-full bg-emerald animate-pulse mb-3 shadow-[0_0_10px_#10b981]" />
                      <span className="text-[9px] font-mono tracking-widest text-emerald uppercase">
                        SENSORY LAYER INCOGNITO
                      </span>
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
