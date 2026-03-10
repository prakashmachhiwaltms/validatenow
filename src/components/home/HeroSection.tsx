import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-hero">
    {/* Grid pattern */}
    <div className="absolute inset-0 bg-grid-pattern opacity-30" />

    {/* Glow orbs */}
    <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
    <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-accent/10 blur-[100px]" />

    <div className="container relative mx-auto px-4 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <Zap className="h-3.5 w-3.5" />
            Real-Time Validation Engine
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Real-Time Lead{" "}
          <span className="text-gradient-primary">Validation</span> &{" "}
          <span className="text-gradient-accent">Fraud Prevention.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          Validate emails, phones, and IPs instantly. Detect fraud, eliminate duplicates, and ensure high-quality leads before they reach your CRM or buyers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link to="/demo">
            <Button variant="hero" size="lg" className="gap-2 text-base px-8 py-6">
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link to="/demo">
            <Button variant="heroOutline" size="lg" className="gap-2 text-base px-8 py-6">
              <Shield className="h-4 w-4" />
              Book Demo
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
        >
          {["Email Verification", "Phone Validation", "IP Intelligence", "Fraud Detection"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-accent" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
