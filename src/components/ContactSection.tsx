"use client";

import { useState } from "react";
import { Send, FileCheck2, Terminal, Mail, MapPin, Landmark } from "lucide-react";

export default function ContactSection() {
  const [category, setCategory] = useState<string>("partnership");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate terminal authorization submission
    setFormSubmitted(true);
  };

  const categories = [
    { id: "partnership", label: "Partnership Requests" },
    { id: "gov", label: "Government Collaborations" },
    { id: "research", label: "Research Collaborations" },
    { id: "investor", label: "Investor Relations" }
  ];

  return (
    <section id="contact" className="relative py-24 bg-forest-dark overflow-hidden border-t border-border-subtle">
      <div className="absolute inset-0 grid-matrix pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[10px] font-mono tracking-widest text-emerald border border-emerald/30 bg-emerald/10 px-2.5 py-1 rounded uppercase">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-main mt-4 mb-6">
            Partner With Us
          </h2>
          <p className="text-sm text-text-muted">
            Whether you are a government agency, research institution, sustainability organization, enterprise, or potential collaborator, we welcome opportunities to explore environmental intelligence and sustainability initiatives together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left panel: Info & coordinates */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="glass-panel p-6 rounded-lg border border-border-subtle bg-forest-medium/20 dark:bg-black/10">
              <div className="mb-8 flex items-center justify-start">
                <img
                  src="/Company_Logo.png"
                  alt="AxiomGreen Solutions Logo"
                  className="h-18 sm:h-20 w-auto object-contain brightness-100 dark:brightness-110 transition-all duration-300"
                />
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-emerald uppercase mb-6">
                <Mail className="h-4 w-4" />
                <span>Inquiry Channel</span>
              </div>

              <div className="space-y-6 text-xs text-text-muted font-mono">
                <div className="flex items-start gap-3">
                  <Landmark className="h-4 w-4 text-emerald shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[9px] text-text-muted uppercase block">Proposing Entity</span>
                    <span className="text-text-main font-bold">AxiomGreen Solutions Private Limited</span>
                    <span className="text-[9px] text-text-muted block mt-1">CIN: U72200KA2021PTC147812</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-cyber-blue shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[9px] text-text-muted uppercase block">R&D Headquarters</span>
                    <span className="text-text-main">Bengaluru, Karnataka, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-emerald shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[9px] text-text-muted uppercase block">Secure Mail link</span>
                    <a href="mailto:info@axiomgreensolutions.in" className="text-text-main hover:text-emerald border-b border-dashed border-emerald/50 transition-colors">
                      info@axiomgreensolutions.in
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Sub text */}
            <div className="hidden lg:block text-[9px] font-mono text-text-muted/65 leading-relaxed mt-6">
              Intellectual property details: Indian Patent Application No. 202641010976 and International PCT Application No. PCT/IB2026/053807.
            </div>
          </div>

          {/* Right panel: Terminal Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-lg border border-border-subtle bg-forest-medium/30 dark:bg-black/40 relative overflow-hidden">
              
              {formSubmitted ? (
                <div className="text-center py-12 flex flex-col items-center">
                  <div className="p-3 rounded-full bg-emerald/10 border border-emerald/30 text-emerald mb-4 animate-bounce">
                    <FileCheck2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-mono text-sm font-bold text-text-main uppercase">Inquiry Submitted</h3>
                  <p className="text-xs text-text-muted mt-2 font-mono max-w-sm">
                    Thank you. Your inquiry has been received. Our team will get back to your organization shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 font-mono text-[9px] text-emerald border border-emerald/30 bg-emerald/5 px-4 py-2 rounded"
                  >
                    RESET
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 font-mono text-xs">
                  {/* Category toggle */}
                  <div>
                    <label className="text-[9px] text-text-muted uppercase block mb-2">Inquiry Category</label>
                    <div className="grid grid-cols-2 gap-2">
                      {categories.map((cat) => (
                        <button
                          type="button"
                          key={cat.id}
                          onClick={() => setCategory(cat.id)}
                          className={`p-2.5 rounded border text-left font-bold text-[9px] tracking-wider transition-all duration-200 ${
                            category === cat.id
                              ? "bg-emerald/10 border-emerald text-emerald"
                              : "bg-forest-medium/30 border-border-subtle text-text-muted hover:border-emerald/30 dark:bg-white/5 hover:text-text-main"
                          }`}
                        >
                          {cat.label.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name and Org row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="form-name" className="text-[9px] text-text-muted uppercase block mb-1">Requester Name</label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-forest-medium/50 dark:bg-black/20 border border-border-subtle focus:border-emerald/50 p-2.5 rounded text-text-main outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="form-org" className="text-[9px] text-text-muted uppercase block mb-1">Organization / Entity</label>
                      <input
                        id="form-org"
                        type="text"
                        required
                        value={formData.org}
                        onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                        className="w-full bg-forest-medium/50 dark:bg-black/20 border border-border-subtle focus:border-emerald/50 p-2.5 rounded text-text-main outline-none"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="form-email" className="text-[9px] text-text-muted uppercase block mb-1">Authorization Email</label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-forest-medium/50 dark:bg-black/20 border border-border-subtle focus:border-emerald/50 p-2.5 rounded text-text-main outline-none"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="form-message" className="text-[9px] text-text-muted uppercase block mb-1">Scope of Inquiry</label>
                    <textarea
                      id="form-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-forest-medium/50 dark:bg-black/20 border border-border-subtle focus:border-emerald/50 p-2.5 rounded text-text-main outline-none resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 p-3 font-bold bg-emerald text-forest-dark rounded border border-emerald/30 shadow-[0_0_12px_rgba(16,185,129,0.2)] hover:shadow-[0_0_24px_rgba(16,185,129,0.4)] cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                    <span>Submit Inquiry</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
