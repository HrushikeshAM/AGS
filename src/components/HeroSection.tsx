import { motion } from "framer-motion";
import { Leaf, Shield, Globe } from "lucide-react";

const floatingLeaf = {
  animate: {
    y: [0, -50, 0],
    x: [0, 20, 0],
    rotate: [0, 12, 0],
    scale: [1, 1.08, 1],
  },
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36 sm:pt-32 lg:pt-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-leaf-light/10 rounded-full blur-3xl" />

      {/* Floating Leaves */}
      <motion.div
        className="absolute top-28 left-12 text-leaf-mid/30"
        variants={floatingLeaf}
        animate="animate"
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Leaf size={52} />
      </motion.div>

      <motion.div
        className="absolute top-44 right-24 text-leaf-light/25"
        animate={{
          y: [0, -35, 0],
          x: [0, -25, 0],
          rotate: [0, -15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      >
        <Leaf size={36} />
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-1/4 text-primary/20"
        animate={{
          y: [0, -60, 0],
          rotate: [0, 18, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <Leaf size={44} />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-1/3 text-leaf-mid/20"
        animate={{
          y: [0, -45, 0],
          x: [0, 30, 0],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <Leaf size={40} />
      </motion.div>

      <motion.div
        className="absolute bottom-24 right-16 text-leaf-light/20"
        animate={{
          y: [0, -30, 0],
          rotate: [0, -12, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2.8 }}
      >
        <Leaf size={34} />
      </motion.div>

      <motion.div
        className="absolute top-16 left-1/3 text-primary/15"
        animate={{
          y: [0, -55, 0],
          x: [0, -20, 0],
          rotate: [0, 14, 0],
        }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 3.2 }}
      >
        <Leaf size={38} />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-20 text-leaf-mid/20"
        animate={{
          y: [0, -40, 0],
          rotate: [0, 9, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3.8 }}
      >
        <Leaf size={30} />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground">
              <span className="w-2 h-2 bg-leaf-mid rounded-full animate-pulse" />
              Pioneering Sustainable Verification
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-foreground">Building </span>
            <span className="text-gradient-primary">Trust</span>
            <span className="text-foreground"> in</span>
            <br />
            <span className="text-foreground">Sustainability</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            AxiomGreen Solutions is creating a new paradigm in ESG verification
            through citizen-powered, AI-driven digital infrastructure that brings
            unprecedented transparency to sustainability claims.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#gpe"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-hero text-primary-foreground rounded-full font-semibold text-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Explore Project GPE
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 border-2 border-primary/30 text-foreground rounded-full font-semibold text-lg hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              Partner With Us
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 lg:mt-24"
          >
            {[
              { icon: Shield, label: "Trust Layer", desc: "National-grade verification" },
              { icon: Globe, label: "DPI Aligned", desc: "Digital Public Infrastructure" },
              { icon: Leaf, label: "ESG Focus", desc: "Sustainability first" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300"
              >
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-3">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
