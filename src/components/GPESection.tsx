import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Smartphone,
  Brain,
  Users,
  Link2,
  Award,
  Database,
  Shield,
  Cpu,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import VRcoin from "@/assets/VRcoin.png";


const GPESection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const workflow = [
    {
      step: "01",
      icon: Smartphone,
      title: "Citizen Evidence",
      description:
        "Citizens capture geo-tagged, time-stamped field evidence via mobile app",
    },
    {
      step: "02",
      icon: Brain,
      title: "AI Validation",
      description:
        "Advanced AI verifies metadata integrity, location, and detects tampering",
    },
    {
      step: "03",
      icon: Users,
      title: "Peer Consensus",
      description:
        "Reputation-weighted citizen validation ensures community trust",
    },
    {
      step: "04",
      icon: Link2,
      title: "Blockchain Anchor",
      description:
        "Verified records stored immutably on blockchain for permanent proof",
    },
    {
      step: "05",
      icon: Award,
      title: "Certification",
      description:
        "Projects receive standardized Green Proof Certification with PAI score",
    },
  ];

  const techFeatures = [
    { icon: Cpu, label: "AI & Computer Vision" },
    { icon: MapPin, label: "Geospatial Intelligence" },
    { icon: Shield, label: "Distributed Reputation" },
    { icon: Database, label: "Blockchain Records" },
  ];

  const differentiators = [
    { old: "Manual audits", new: "AI + citizen evidence" },
    { old: "Centralized reporting", new: "Decentralized verification" },
    { old: "Periodic inspections", new: "Continuous monitoring" },
    { old: "No trust scoring", new: "Reputation-weighted validation" },
    { old: "Limited transparency", new: "Public, verifiable proof" },
  ];

  return (
    <section
      id="gpe"
      className="py-20 lg:py-32 relative overflow-hidden bg-card/30"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-leaf-light/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        ref={ref}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-gold rounded-full mb-6">
            <span className="text-sm font-semibold text-accent-foreground">
              🔒 Patent Pending Technology
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="text-gradient-primary">
              Green Proof Ecosystem
            </span>
            <span className="block text-2xl sm:text-3xl mt-2 font-medium text-muted-foreground">
              (GPE)
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A Digital Public Infrastructure for Citizen-Powered Verification of
            Sustainability & Public Projects. Currently at concept stage (TRL
            1–2), aligned with Startup India and Smart Governance initiatives.
          </p>
        </motion.div>

        {/* Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            How GPE Works
          </h3>
          <div className="grid md:grid-cols-5 gap-4 lg:gap-6">
            {workflow.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.3 + index * 0.1,
                }}
                className="relative group"
              >
                <div className="p-6 bg-background rounded-2xl border border-border/50 hover:border-primary/40 hover:shadow-card transition-all duration-300 h-full">
                  <div className="text-4xl font-bold text-primary/20 mb-3">
                    {item.step}
                  </div>
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                {index < workflow.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 lg:-right-4 w-6 lg:w-8 h-0.5 bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Deep Tech Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="p-8 lg:p-12 bg-gradient-hero rounded-3xl text-primary-foreground">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Deep-Tech & DPI Characteristics
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {techFeatures.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.3,
                    delay: 0.5 + index * 0.1,
                  }}
                  className="flex flex-col items-center text-center p-4"
                >
                  <div className="w-16 h-16 bg-primary-foreground/10 backdrop-blur rounded-2xl flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <span className="font-medium">{feature.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Differentiators */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            What Makes GPE Different
          </h3>
          <div className="max-w-3xl mx-auto">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.3,
                  delay: 0.6 + index * 0.1,
                }}
                className="grid grid-cols-2 gap-4 mb-3"
              >
                <div className="p-4 bg-muted/50 rounded-lg text-muted-foreground flex items-center gap-2">
                  <span className="text-destructive">✗</span>
                  {item.old}
                </div>
                <div className="p-4 bg-secondary rounded-lg text-foreground flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  {item.new}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

{/* Workforce & Economic Impact */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, delay: 0.6 }}
  className="mt-24"
>
  <h3 className="text-2xl font-bold text-foreground text-center mb-6">
    Workforce & Economic Impact Layer
  </h3>

  <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
    GPE functions as a decentralized employment engine—transforming verification,
    accountability, and on-ground truth into scalable digital work aligned with
    India’s governance and public infrastructure ecosystem.
  </p>

  <div className="grid lg:grid-cols-3 gap-6">
    {/* Local & Panchayat-Level Employment */}
    <div className="p-6 bg-background rounded-2xl border border-border/50">
      <h4 className="font-semibold text-foreground mb-2">
        Panchayat & Local Body Employment
      </h4>
      <p className="text-sm text-muted-foreground">
        Every Gram Panchayat can absorb 1–2 unskilled or semi-skilled workers as
        on-ground verifiers. Municipalities can support 5–6 contributors, while
        city corporations can absorb significantly more—creating localized,
        distributed employment across all districts.
      </p>
    </div>

    {/* ASHA & Grassroots Integration */}
    <div className="p-6 bg-background rounded-2xl border border-border/50">
      <h4 className="font-semibold text-foreground mb-2">
        Integration with Existing Grassroots Workforce
      </h4>
      <p className="text-sm text-muted-foreground">
        GPE can integrate trusted field-level workers such as ASHA workers and
        other community representatives, enabling them to earn supplemental
        income by contributing verified evidence alongside their existing roles.
      </p>
    </div>

    {/* Skilled Workforce */}
    <div className="p-6 bg-background rounded-2xl border border-border/50">
      <h4 className="font-semibold text-foreground mb-2">
        Skilled Workforce
      </h4>
      <p className="text-sm text-muted-foreground">
        Beyond field verification, GPE utilizes a large skilled workforce
        including AI engineers, blockchain architects, geospatial analysts,
        cybersecurity experts, ESG auditors, and data scientists to operate and
        govern the verification infrastructure.
      </p>
    </div>
  </div>
</motion.div>


{/* Monetization */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, delay: 0.7 }}
  className="mt-16"
>
  <div className="p-8 bg-muted/40 rounded-3xl">
    
    {/* Title + Coin */}
    <div className="flex items-center justify-center gap-4 mb-8">
      
      {/* Rotating Coin */}
<motion.img
  src={VRcoin}
  alt="Verification Reward Coin"
  className="w-28 h-28 drop-shadow-lg"
  animate={{ rotateY: 360 }}
  transition={{
    repeat: Infinity,
    repeatType: "reverse",
    duration: 6,
    ease: "linear",
  }}
  style={{ perspective: 1000 }}
/>


      <h4 className="text-xl font-semibold text-center">
        Verification Rewards & Monetization
      </h4>
    </div>

    <div className="grid md:grid-cols-3 gap-6 text-sm">
      <div className="p-5 bg-background rounded-xl border">
        <strong>Utility-Based Rewards</strong>
        <p className="text-muted-foreground mt-2">
          VRCOIN operates as a compliant utility reward, convertible
          through INR-linked settlement layers.
        </p>
      </div>

      <div className="p-5 bg-background rounded-xl border">
        <strong>Government-Compatible Rails</strong>
        <p className="text-muted-foreground mt-2">
          Supports e-RUPI vouchers and Digital Rupee (e₹) based
          programmable payouts.
        </p>
      </div>

      <div className="p-5 bg-background rounded-xl border">
        <strong>Reputation-Based Income</strong>
        <p className="text-muted-foreground mt-2">
          Monthly verification quotas enable stable, trust-weighted
          earnings.
        </p>
      </div>
    </div>
  </div>
</motion.div>



        {/* Job Impact */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-muted-foreground max-w-4xl mx-auto">
            GPE decentralizes auditing from closed offices into a nationwide
            digital workforce—turning transparency and trust into scalable
            employment across every district in India.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GPESection;
