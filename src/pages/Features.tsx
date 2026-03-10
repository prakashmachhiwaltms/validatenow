import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Fingerprint, Copy, Plug, BarChart3, SlidersHorizontal, Bot, Globe, Eye, AlertTriangle } from "lucide-react";

const validations = [
  "Email verification", "Phone validation", "IP intelligence",
  "Fraud scoring", "Disposable email detection", "Duplicate detection",
];

const providers = ["IPQualityScore", "EmailOversight", "Anura", "24Metrics"];

const ruleConditions = ["Email status", "Phone validity", "Fraud score", "Duplicate detection", "Traffic source"];
const ruleActions = ["Approve lead", "Reject lead", "Redirect traffic", "Flag suspicious traffic"];

const fraudTypes = [
  { icon: Bot, label: "Bots" },
  { icon: Globe, label: "Proxy & VPN traffic" },
  { icon: Eye, label: "Data center IPs" },
  { icon: AlertTriangle, label: "Suspicious patterns" },
];

const Features = () => (
  <>
    <Navbar />
    <main className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="container relative mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl">
            Platform <span className="text-gradient-primary">Features</span>
          </motion.h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A comprehensive validation engine built for lead generation at scale.
          </p>
        </div>
      </section>

      {/* Real-Time Validation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-bold"><span className="text-gradient-primary">Real-Time</span> Validation Engine</h2>
            <p className="mt-4 text-muted-foreground">Lead Validator processes incoming leads in real time and validates multiple attributes simultaneously.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {validations.map((v) => (
                <div key={v} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span className="text-sm font-medium text-foreground">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Provider */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-bold"><span className="text-gradient-accent">Multi-Provider</span> Integration</h2>
            <p className="mt-4 text-muted-foreground">Connect multiple third-party providers and configure validation logic. Combine providers to build layered validation.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {providers.map((p) => (
                <span key={p} className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">{p}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Smart Rules */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-bold"><span className="text-gradient-primary">Smart Rules</span> Engine</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-3">Conditions</h3>
                {ruleConditions.map((c) => (
                  <div key={c} className="flex items-center gap-2 py-1.5 text-sm text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {c}
                  </div>
                ))}
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-3">Actions</h3>
                {ruleActions.map((a) => (
                  <div key={a} className="flex items-center gap-2 py-1.5 text-sm text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {a}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fraud Protection */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-bold"><span className="text-destructive">Fraud</span> Protection</h2>
            <p className="mt-4 text-muted-foreground">Identify and block fraudulent traffic before it enters your pipeline.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {fraudTypes.map((f) => (
                <div key={f.label} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-destructive/10">
                    <f.icon className="h-5 w-5 text-destructive" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Features;
