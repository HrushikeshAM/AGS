"use client";

import { motion } from "framer-motion";
import { Eye, Brain, CheckSquare } from "lucide-react";

export default function WhatIsGreenProof() {
  const pillars = [
    {
      title: "MONITOR",
      desc: "Collect environmental information from diverse sources.",
      icon: <Eye className="h-6 w-6 text-emerald" />,
      color: "border-emerald/20 hover:border-emerald/40",
      accent: "text-emerald"
    },
    {
      title: "UNDERSTAND",
      desc: "Transform information into meaningful intelligence.",
      icon: <Brain className="h-6 w-6 text-cyber-blue" />,
      color: "border-cyber-blue/20 hover:border-cyber-blue/40",
      accent: "text-cyber-blue"
    },
    {
      title: "ACT",
      desc: "Support informed environmental decision-making.",
      icon: <CheckSquare className="h-6 w-6 text-emerald" />,
      color: "border-emerald/20 hover:border-emerald/40",
      accent: "text-emerald"
    }
  ];

  return (
    <section id="what-is-greenproof" className="relative py-24 bg-forest-dark overflow-hidden border-t border-border-subtle">
      <div className="absolute inset-0 dot-matrix opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-5">
            <span className="text-[10px] font-mono tracking-widest text-emerald border border-emerald/30 bg-emerald/10 px-2.5 py-1 rounded uppercase">
              Introduction
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-main mt-4">
              What is GreenProof?
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-4">
            <p className="text-sm text-text-main font-sans leading-relaxed">
              GreenProof Ecosystem is an environmental intelligence platform designed to help governments, organizations, and communities monitor environmental outcomes through trusted data, intelligent analytics, and transparent verification.
            </p>
            <p className="text-xs sm:text-sm text-text-muted font-sans leading-relaxed">
              Through a unified intelligence layer, GreenProof brings together environmental information from multiple sources to support better decision-making, accountability, and sustainability outcomes.
            </p>
          </div>
        </div>

        {/* Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`glass-card p-8 rounded-lg border ${pillar.color} flex flex-col justify-between min-h-[220px] transition-all duration-300`}
            >
              <div>
                <div className="p-3 rounded bg-forest-medium/40 dark:bg-white/5 border border-border-subtle w-fit mb-6">
                  {pillar.icon}
                </div>
                <h3 className={`text-xs font-mono font-bold tracking-widest ${pillar.accent} uppercase mb-3`}>
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-sans">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
