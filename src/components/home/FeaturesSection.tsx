import { motion } from "framer-motion";
import { Shield, Fingerprint, Copy, Plug, BarChart3, SlidersHorizontal } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Real-Time Lead Validation",
    desc: "Instantly verify Email, Phone, and IP before accepting a lead.",
    color: "primary",
  },
  {
    icon: Fingerprint,
    title: "Fraud Detection Engine",
    desc: "Identify bots, proxies, TOR traffic, and suspicious behavior using multiple intelligence providers.",
    color: "accent",
  },
  {
    icon: Copy,
    title: "Duplicate Detection",
    desc: "Prevent duplicate leads using lifecycle-based caching and database matching.",
    color: "primary",
  },
  {
    icon: Plug,
    title: "Multi-Provider Validation",
    desc: "Connect multiple validation providers like IPQS, EmailOversight, Anura, and others.",
    color: "accent",
  },
  {
    icon: BarChart3,
    title: "Publisher Traffic Monitoring",
    desc: "Track lead quality by source, domain, publisher, or campaign.",
    color: "primary",
  },
  {
    icon: SlidersHorizontal,
    title: "Smart Filters",
    desc: "Create custom rule-based filters to approve, block, redirect, or flag leads.",
    color: "accent",
  },
];

const FeaturesSection = () => (
  <section className="relative py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="font-heading text-3xl font-bold sm:text-4xl md:text-5xl">
          Powerful <span className="text-gradient-primary">Features</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Everything you need to validate, monitor, and optimize your lead quality.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-[var(--shadow-glow)]"
          >
            <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${
              f.color === "primary" ? "bg-primary/10" : "bg-accent/10"
            }`}>
              <f.icon className={`h-6 w-6 ${f.color === "primary" ? "text-primary" : "text-accent"}`} />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
