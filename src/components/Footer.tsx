"use client";

import { ShieldCheck, Copyright } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-forest-dark py-12 border-t border-border-subtle z-20">
      <div className="absolute inset-0 dot-matrix opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-mono text-[10px] text-text-muted">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-b border-border-subtle pb-8 mb-8">
          
          {/* Trademark and name */}
          <div className="flex flex-col gap-2 text-left justify-center">
            <img
              src="/Company_Logo.png"
              alt="AxiomGreen Solutions Pvt Ltd"
              className="h-14 w-auto object-contain brightness-100 dark:brightness-110 transition-all duration-300 self-start"
            />
            <span className="text-text-muted">
              Environmental Intelligence Infrastructure
            </span>
          </div>

          {/* Intellectual property details */}
          <div className="flex flex-col gap-1 text-left md:text-center">
            <span className="text-text-main font-semibold">INTELLECTUAL PROPERTY STATUS</span>
            <span>Patent Application Published (India) / App No. 202641010976</span>
            <span>International PCT Application Filed / PCT/IB2026/053807</span>
          </div>

          {/* Certifications and validations */}
          <div className="flex flex-col gap-1 text-left md:text-right">
            <span className="text-text-main font-semibold">SYSTEM COMPLIANCE</span>
            <span>TRL 4 Validated Prototype</span>
            <span>ISO 14001:2015 Framework</span>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1">
            <Copyright className="h-3 w-3" />
            <span>{currentYear} AxiomGreen Solutions Pvt Ltd. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-text-main transition-colors duration-200 cursor-pointer">Compliance Framework</span>
            <span className="hover:text-text-main transition-colors duration-200 cursor-pointer">Terms of Operation</span>
            <span className="hover:text-text-main transition-colors duration-200 cursor-pointer">Privacy Policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
