"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export default function AirNodeTeaserStrip() {
  const [particleStyles, setParticleStyles] = useState<{ top: string; left: string; duration: number }[]>([]);

  useEffect(() => {
    const styles = Array.from({ length: 24 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 5 + Math.random() * 8,
    }));
    setParticleStyles(styles);
  }, []);

  return (
    <section className="relative py-28 bg-forest-dark overflow-hidden border-t border-b border-border-subtle">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(16,185,129,0.02)_0%,transparent_60%] pointer-events-none" />
      
      {/* Micro floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particleStyles.map((style, idx) => (
          <motion.div
            key={idx}
            className="absolute h-1 w-1 rounded-full bg-emerald/20"
            style={{
              top: style.top,
              left: style.left,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: style.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald/30 bg-emerald/10 text-[9px] font-mono text-emerald tracking-widest uppercase mb-6"
          >
            <Sparkles className="h-3.5 w-3.5 animate-pulse" />
            <span>COMING SOON</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-display font-black text-text-main tracking-tight uppercase mb-4"
          >
            AIR NODE
          </motion.h2>

          {/* Teaser copy */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-text-muted font-sans leading-relaxed mb-8"
          >
            The next layer of environmental intelligence is coming. <br className="hidden sm:inline" />
            Designed to bring environmental awareness closer to the real world.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 text-xs font-mono font-bold tracking-wider uppercase bg-emerald text-forest-dark px-6 py-3.5 rounded border border-emerald/30 shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300"
            >
              <span>Join Early Access</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
