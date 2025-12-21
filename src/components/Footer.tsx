import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#gpe", label: "Project GPE" },
    { href: "#impact", label: "Impact" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[hsl(150,35%,4%)] text-cream">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-leaf-dark rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-block mb-4">
              <img src={logo} alt="AxiomGreen Solutions" className="h-24 w-auto brightness-110" />
            </a>
            <p className="text-cream/70 max-w-md mb-6">
              Building India's first citizen-powered verification backbone for 
              ESG compliance and public project accountability through innovative 
              deep-tech solutions.
            </p>
            <div className="flex items-center gap-2 text-sm text-cream/60">
              <Leaf className="w-4 h-4 text-leaf-mid" />
              <span>Pioneering Sustainable Verification</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-cream mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream/70 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-cream mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-cream/70">
              <li>
                <a
                  href="mailto:info@axiomgreensolutions.com"
                  className="hover:text-cream transition-colors"
                >
                  info@axiomgreensolutions.com
                </a>
              </li>
              <li>
                <span className="block text-cream/50 text-xs mb-1">CIN</span>
                U90009KA2025PTC212710
              </li>
              <li>
                <span className="block text-cream/50 text-xs mb-1">Address</span>
                #146, Shri Shailam, SN Layout,<br />
                Chokkanahalli, Bagalur,<br />
                Bangalore – 562149,<br />
                Karnataka, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="pt-8 border-t border-cream/10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-cream/60 text-center sm:text-left">
              © 2025 AxiomGreen Solutions Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-cream/60">
                Aligned with{" "}
                <span className="text-leaf-mid">Startup India</span> •{" "}
                <span className="text-leaf-mid">Digital Public Infrastructure</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
