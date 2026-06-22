"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Radio, Compass, Brain, Globe, Shield, Landmark, Database } from "lucide-react";

interface LayerItem {
  id: string;
  name: string;
  short: string;
  desc: string;
  icon: React.ReactNode;
  tech: string[];
  dataOut: string;
  color: string;
}

export default function EcosystemSection() {
  const [activeLayer, setActiveLayer] = useState<string>("ai");

  const layers: LayerItem[] = [
    {
      id: "citizen",
      name: "Citizen Verification Layer",
      short: "Citizen Proof",
      desc: "Local residents file geolocated, trusted reports of ecological incidents (like waste dumping, water discolouration). Provides ground truth.",
      icon: <Users className="h-5 w-5" />,
      tech: ["Mobile app client", "Camera interfaces", "Local validation stamp", "Offline syncing database"],
      dataOut: "Geolocated Incident Payload",
      color: "border-emerald text-emerald bg-emerald/5",
    },
    {
      id: "telemetry",
      name: "Environmental Monitoring Layer",
      short: "Air / Water Sensors",
      desc: "Real-time stream processing from local municipal monitors and AxiomGreen Air Nodes at the edge. Continuously monitors pollution metrics.",
      icon: <Radio className="h-5 w-5" />,
      tech: ["Environmental Monitoring Streams", "Inflow APIs", "Data Ingestion Channels"],
      dataOut: "Continuous Time-Series Metrics",
      color: "border-cyber-blue text-cyber-blue bg-cyber-blue/5",
    },
    {
      id: "satellite",
      name: "Satellite Remote Sensing Layer",
      short: "Sentinel & Landsat",
      desc: "Retrieves multi-spectral satellite imagery to measure wider ecological impacts. Bridges ground statistics with macro terrain data.",
      icon: <Compass className="h-5 w-5" />,
      tech: ["Remote sensing API queries", "Terrain classifications", "Cloud-masking algorithms"],
      dataOut: "Spectral Surface Reflectance Data",
      color: "border-emerald text-emerald bg-emerald/5",
    },
    {
      id: "ai",
      name: "Predictive Analytics Layer",
      short: "AI Models Engine",
      desc: "Trains artificial intelligence models on historical data to predict pollutant peaks and processes satellite frames to identify land cover shifts.",
      icon: <Brain className="h-5 w-5" />,
      tech: ["Predictive Models", "Environmental Analytics Models", "Classification Pipelines"],
      dataOut: "Pollution Forecasts & segmented indices",
      color: "border-cyber-blue text-cyber-blue bg-cyber-blue/5",
    },
    {
      id: "gis",
      name: "Geospatial Indexing Layer",
      short: "GIS Spatial Grid",
      desc: "Calculates specific environmental indexes for vegetation and water body monitoring, and serves them as standard map layers.",
      icon: <Globe className="h-5 w-5" />,
      tech: ["Geospatial Database", "Spatial Map Servers", "Vector Map Streams"],
      dataOut: "Environmental Index Overlay Maps",
      color: "border-emerald text-emerald bg-emerald/5",
    },
    {
      id: "esg",
      name: "Trusted Verification Layer",
      short: "Sustainability Scoring",
      desc: "Synthesizes data inputs to evaluate corporate sustainability scores daily. Secures compliance entries using verifiable trusted chains.",
      icon: <Shield className="h-5 w-5" />,
      tech: ["Daily scoring weight engines", "Secure trusted chaining", "Verifiable Audit Logs"],
      dataOut: "Trusted ESG Compliance registry",
      color: "border-cyber-blue text-cyber-blue bg-cyber-blue/5",
    },
    {
      id: "government",
      name: "Governance Infrastructure Layer",
      short: "Government Portals",
      desc: "Feeds verified warnings directly to regional pollution boards and municipal dashboards to allocate inspectors and alert communities.",
      icon: <Landmark className="h-5 w-5" />,
      tech: ["Administration consoles", "Alert routing channels", "Compliance standard maps"],
      dataOut: "Targeted Inspector Allocation Guides",
      color: "border-emerald text-emerald bg-emerald/5",
    },
  ];

  return (
    <section id="ecosystem" className="relative py-24 bg-forest-dark overflow-hidden border-t border-border-subtle">
      {/* Background aesthetics */}
      <div className="absolute inset-0 grid-matrix pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyber-blue/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[10px] font-mono tracking-widest text-emerald border border-emerald/30 bg-emerald/10 px-2.5 py-1 rounded uppercase">
            Platform Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-main mt-4 mb-6">
            The GreenProof Integrated Data Loop
          </h2>
          <p className="text-sm text-text-muted">
            GreenProof fuses environmental monitoring, satellite vectors, and citizen-led inputs to construct a verifiable environmental intelligence network. Click on any tier to inspect the infrastructure.
          </p>
        </div>

        {/* How GreenProof Works flow diagram */}
        <div className="glass-panel p-6 rounded-lg border border-border-subtle bg-forest-medium/20 dark:bg-black/20 mb-16 text-center">
          <h3 className="text-xs font-mono font-bold text-emerald tracking-widest uppercase mb-4">
            How GreenProof Works
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto mb-4 font-mono text-xs">
            <div className="px-5 py-2.5 bg-forest-medium/40 dark:bg-white/5 border border-border-subtle rounded text-text-main font-bold">
              Collect
            </div>
            <span className="text-emerald font-bold rotate-90 sm:rotate-0">→</span>
            <div className="px-5 py-2.5 bg-forest-medium/40 dark:bg-white/5 border border-border-subtle rounded text-text-main font-bold">
              Analyze
            </div>
            <span className="text-emerald font-bold rotate-90 sm:rotate-0">→</span>
            <div className="px-5 py-2.5 bg-forest-medium/40 dark:bg-white/5 border border-border-subtle rounded text-text-main font-bold">
              Verify
            </div>
            <span className="text-emerald font-bold rotate-90 sm:rotate-0">→</span>
            <div className="px-5 py-2.5 bg-forest-medium/40 dark:bg-white/5 border border-border-subtle rounded text-text-main font-bold">
              Act
            </div>
          </div>
          <p className="text-xs sm:text-sm text-text-muted max-w-2xl mx-auto leading-relaxed mt-4">
            GreenProof transforms fragmented environmental information into trusted intelligence that supports better decisions and accountability.
          </p>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Dynamic Layer Stack */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            {layers.map((layer, index) => {
              const isActive = activeLayer === layer.id;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id)}
                  className={`w-full text-left p-4 rounded border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    isActive
                      ? "glass-panel border-emerald glow-border-emerald bg-emerald/[0.04] translate-x-2 text-emerald"
                      : "glass-card border-border-subtle hover:border-emerald/40 hover:translate-x-1 text-text-muted hover:text-text-main"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Layer Number index */}
                    <span className="font-mono text-xs text-text-muted w-4">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {/* Layer Icon */}
                    <div className={`p-2 rounded border border-border-subtle ${isActive ? "text-emerald bg-emerald/10" : "text-text-muted"}`}>
                      {layer.icon}
                    </div>
                    {/* Layer Name */}
                    <div>
                      <h3 className="text-xs sm:text-sm font-semibold text-text-main tracking-wide font-display">
                        {layer.name}
                      </h3>
                      <span className="text-[9px] font-mono text-text-muted uppercase mt-0.5 block">
                        {layer.short}
                      </span>
                    </div>
                  </div>

                  {/* Connection Node */}
                  <div className="flex items-center gap-3">
                    {isActive && (
                      <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald/10 text-[9px] font-mono text-emerald border border-emerald/20 animate-pulse">
                        ACTIVE INGEST
                      </span>
                    )}
                    <div className={`h-2.5 w-2.5 rounded-full border ${isActive ? "bg-emerald border-emerald animate-ping" : "bg-transparent border-gray-600"}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Side: Visualizer and Detail panel */}
          <div className="lg:col-span-6 h-full flex flex-col justify-center">
            <div className="glass-panel p-8 rounded-lg border border-border-subtle bg-emerald/[0.01] min-h-[440px] flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                {layers.map((layer) => {
                  if (layer.id !== activeLayer) return null;
                  return (
                    <motion.div
                      key={layer.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col h-full justify-between"
                    >
                      {/* Top detail */}
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-3 rounded-lg bg-emerald/10 border border-emerald/30 text-emerald">
                            {layer.icon}
                          </div>
                          <div>
                            <span className="text-[9px] font-mono text-emerald uppercase tracking-widest">
                              ACTIVE TIER COMPONENT
                            </span>
                            <h3 className="text-xl font-display font-bold text-text-main mt-0.5">
                              {layer.name}
                            </h3>
                          </div>
                        </div>

                        <p className="text-xs text-text-muted leading-relaxed mb-6 font-sans">
                          {layer.desc}
                        </p>

                        {/* Core Subsystem details */}
                        <div className="mb-6">
                          <span className="text-[9px] font-mono text-text-muted uppercase block mb-2">
                            Subsystem Technology Stack
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {layer.tech.map((t, idx) => (
                              <span
                                key={idx}
                                className="text-[10px] font-mono text-text-main bg-forest-medium/40 dark:bg-white/5 border border-border-subtle px-2.5 py-1 rounded"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Data Out Pipeline Visual */}
                      <div className="border-t border-border-subtle pt-6 mt-6">
                        <span className="text-[9px] font-mono text-text-muted uppercase block mb-1">
                          DOWNSTREAM PIPELINE PAYLOAD
                        </span>
                        <div className="flex items-center justify-between bg-forest-medium/30 dark:bg-black/40 border border-border-subtle p-3 rounded font-mono text-[10px]">
                          <div className="flex items-center gap-2 text-emerald">
                            <Database className="h-3.5 w-3.5" />
                            <span>Payload:</span>
                          </div>
                          <span className="text-text-main font-semibold">
                            {layer.dataOut}
                          </span>
                        </div>
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
