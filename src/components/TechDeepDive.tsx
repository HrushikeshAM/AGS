"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit, Globe2, ShieldCheck, ActivitySquare, ShieldAlert, CheckCircle } from "lucide-react";

export default function TechDeepDive() {
  const [activeTab, setActiveTab] = useState<string>("ai");

  const techTabs = [
    {
      id: "ai",
      label: "Artificial Intelligence",
      icon: <BrainCircuit className="h-4 w-4" />,
      headline: "Artificial Intelligence",
      description: "Processes complex ecological data to predict environmental trends and identify changes in local land cover.",
      bullets: [
        "Predictive Analytics: Forecasts air and water quality trends to support proactive decision-making",
        "Environmental Indexing: Automatically detects variations in vegetation and soil conditions over time",
        "Anomaly Spotting: Flags sudden environmental deviations to alert regulatory authorities"
      ],
      visualType: "neural"
    },
    {
      id: "env",
      label: "Environmental Intelligence",
      icon: <ActivitySquare className="h-4 w-4" />,
      headline: "Environmental Intelligence",
      description: "Translates environmental monitoring streams into clear, actionable governance insights.",
      bullets: [
        "Real-Time Analytics: Analyzes active streams to generate immediate dashboard alerts",
        "Unified Governance: Integrates municipal reporting directly with state-level compliance databases",
        "Incident Verification: Fuses community reporting with remote spatial validation"
      ],
      visualType: "env"
    },
    {
      id: "gis",
      label: "Geospatial Intelligence",
      icon: <Globe2 className="h-4 w-4" />,
      headline: "Geospatial Intelligence",
      description: "Utilizes remote sensing techniques to map environmental changes across cities, states, and nations.",
      bullets: [
        "Vegetation Mapping: Tracks deforestation, ecological cover changes, and urban development",
        "Water Body Monitoring: Measures surface water density and flags ecological changes in local lakes",
        "Spatial Visualizations: Generates map overlays to verify local ground reports"
      ],
      visualType: "gis"
    },
    {
      id: "sustainability",
      label: "Sustainability Analytics",
      icon: <ShieldCheck className="h-4 w-4" />,
      headline: "Sustainability Analytics",
      description: "Enables continuous, data-driven ESG assessment for companies and governments.",
      bullets: [
        "Dynamic Scorecards: Evaluates and updates environmental scores daily as new metrics arrive",
        "Automated Compliance Statements: Generates audit-ready reports mapping to official guidelines",
        "Scope Assessment: Tracks emissions and waste metrics to eliminate administrative friction"
      ],
      visualType: "sustainability"
    },
    {
      id: "verification",
      label: "Verification Infrastructure",
      icon: <ShieldAlert className="h-4 w-4" />,
      headline: "Verification Infrastructure",
      description: "Secures regulatory filings and community reports in a verified, tamper-proof registry.",
      bullets: [
        "Trusted Verification Logs: Stores compliance records securely to prevent historical modifications",
        "Verification Checks: Cross-references ground reports with satellite imagery to verify incidents",
        "Accountability Channels: Provides public verification paths to build community trust"
      ],
      visualType: "verification"
    }
  ];

  return (
    <section id="technology" className="relative py-24 bg-forest-dark overflow-hidden border-t border-border-subtle">
      <div className="absolute inset-0 grid-matrix pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-[10px] font-mono tracking-widest text-emerald border border-emerald/30 bg-emerald/10 px-2.5 py-1 rounded uppercase">
            Framework
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-main mt-4 mb-6">
            How It Works
          </h2>
          <p className="text-sm text-text-muted">
            GreenProof integrates environmental science, spatial remote sensing, and secure data verification to deliver trusted systems.
          </p>
        </div>

        {/* Dynamic spec layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left menu column */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {techTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left p-3.5 rounded border font-mono text-[11px] font-bold tracking-wider transition-all duration-200 flex items-center gap-3 ${
                    isActive
                      ? "bg-emerald text-forest-dark border-emerald shadow-[0_0_12px_rgba(16,185,129,0.2)]"
                      : "bg-forest-medium/30 border border-border-subtle text-text-muted hover:border-emerald/30 dark:bg-white/5 hover:text-text-main"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label.toUpperCase()}</span>
                </button>
              );
            })}
          </div>

          {/* Right details column */}
          <div className="lg:col-span-8">
            <div className="glass-panel p-8 rounded-lg border border-border-subtle min-h-[380px] flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                {techTabs.map((tab) => {
                  if (tab.id !== activeTab) return null;
                  return (
                    <motion.div
                      key={tab.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full"
                    >
                      {/* Details specs info */}
                      <div className="md:col-span-7 flex flex-col justify-between h-full">
                        <div>
                          <span className="text-[9px] font-mono text-emerald uppercase tracking-widest block mb-2">
                            Infrastructure Specs
                          </span>
                          <h3 className="text-lg font-display font-bold text-text-main mb-2">
                            {tab.headline}
                          </h3>
                          <p className="text-xs text-text-muted mb-6 leading-relaxed">
                            {tab.description}
                          </p>

                          <div className="space-y-3">
                            {tab.bullets.map((bullet, bIdx) => (
                              <div key={bIdx} className="flex items-start gap-2.5">
                                <CheckCircle className="h-4 w-4 text-emerald shrink-0 mt-0.5" />
                                <span className="text-xs text-text-muted font-sans leading-relaxed">
                                  {bullet}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Visual representations */}
                      <div className="md:col-span-5 bg-forest-medium/30 dark:bg-black/40 border border-border-subtle p-4 rounded-lg flex items-center justify-center min-h-[220px]">
                        
                        {/* 1. Neural nodes diagram */}
                        {tab.visualType === "neural" && (
                          <svg className="w-full h-44 text-text-main" viewBox="0 0 200 150">
                            {/* Input Nodes */}
                            <circle cx="30" cy="40" r="6" fill="var(--color-cyber-blue)" />
                            <circle cx="30" cy="75" r="6" fill="var(--color-cyber-blue)" />
                            <circle cx="30" cy="110" r="6" fill="var(--color-cyber-blue)" />
                            
                            {/* Hidden nodes */}
                            <circle cx="100" cy="25" r="6" fill="var(--color-emerald)" />
                            <circle cx="100" cy="60" r="6" fill="var(--color-emerald)" />
                            <circle cx="100" cy="95" r="6" fill="var(--color-emerald)" />
                            <circle cx="100" cy="130" r="6" fill="var(--color-emerald)" />
                            
                            {/* Output node */}
                            <circle cx="170" cy="75" r="8" fill="currentColor" />
                            
                            {/* Connections */}
                            <line x1="36" y1="40" x2="94" y2="25" stroke="var(--color-border-subtle)" strokeWidth="1" />
                            <line x1="36" y1="40" x2="94" y2="60" stroke="var(--color-border-subtle)" strokeWidth="1" />
                            <line x1="36" y1="75" x2="94" y2="60" stroke="var(--color-border-subtle)" strokeWidth="1" />
                            <line x1="36" y1="110" x2="94" y2="95" stroke="var(--color-border-subtle)" strokeWidth="1" />
                            
                            <line x1="106" y1="25" x2="164" y2="75" stroke="var(--color-emerald)" strokeWidth="1" className="opacity-50" />
                            <line x1="106" y1="60" x2="164" y2="75" stroke="var(--color-emerald)" strokeWidth="1.5" className="opacity-50" />
                            <line x1="106" y1="95" x2="164" y2="75" stroke="var(--color-emerald)" strokeWidth="1" className="opacity-50" />
                            
                            <text x="30" y="140" fill="var(--color-cyber-blue)" fontSize="7" fontFamily="monospace" textAnchor="middle">inputs</text>
                            <text x="100" y="148" fill="var(--color-emerald)" fontSize="7" fontFamily="monospace" textAnchor="middle">analysis</text>
                            <text x="170" y="140" fill="currentColor" fontSize="7" fontFamily="monospace" textAnchor="middle">output</text>
                          </svg>
                        )}

                        {/* 2. Telemetry streams */}
                        {tab.visualType === "env" && (
                          <div className="w-full font-mono text-[8px] text-text-muted">
                            <div className="flex justify-between border-b border-border-subtle pb-1 mb-2">
                              <span>Monitoring Status</span>
                              <span className="text-emerald flex items-center gap-1">
                                <span className="h-1.5 w-1.5 bg-emerald rounded-full animate-pulse" />
                                Ingesting
                              </span>
                            </div>
                            <div className="space-y-1">
                              <div>PM Particle count: Normal</div>
                              <div>Carbon Index: Normal</div>
                              <div>Dynamic warning status: Clear</div>
                            </div>
                          </div>
                        )}

                        {/* 3. GIS layers diagram */}
                        {tab.visualType === "gis" && (
                          <div className="w-full flex flex-col gap-2 font-mono text-[8px]">
                            <div className="border border-emerald/30 p-2 bg-emerald/5 rounded flex justify-between items-center text-emerald">
                              <span>Vegetation Analytics Layer</span>
                              <span>Active</span>
                            </div>
                            <div className="border border-border-subtle p-2 bg-forest-medium/40 dark:bg-white/5 rounded flex justify-between items-center text-text-main">
                              <span>Soil Moisture Tracking Layer</span>
                              <span>Standby</span>
                            </div>
                          </div>
                        )}

                        {/* 4. ESG blocks ledger */}
                        {tab.visualType === "sustainability" && (
                          <div className="w-full flex flex-col gap-2 font-mono text-[8px] text-text-muted">
                            <div className="border border-border-subtle p-2 bg-forest-medium/40 dark:bg-white/5 rounded">
                              <span className="text-text-main block font-bold">Dynamic Scorecard</span>
                              <span>Updates corporate sustainability scores automatically</span>
                            </div>
                            <div className="border border-emerald/20 p-2 bg-emerald/5 rounded">
                              <span className="text-emerald block font-bold">Verified Audit Trail</span>
                              <span>Daily indices backed by secure verification logs</span>
                            </div>
                          </div>
                        )}

                        {/* 5. Verification blockchain info */}
                        {tab.visualType === "verification" && (
                          <div className="w-full font-mono text-[8px] text-text-muted flex flex-col gap-2">
                            <div className="border border-border-subtle p-2.5 rounded bg-forest-medium/40 dark:bg-white/5 text-center">
                              <ShieldCheck className="h-6 w-6 text-emerald mx-auto mb-1.5" />
                              <span className="text-text-main block font-bold">Trusted Verification Registry</span>
                              <span>Verifiable compliance records stored securely</span>
                            </div>
                          </div>
                        )}

                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
