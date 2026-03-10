import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Key, Users, FileText, Lock, Clock } from "lucide-react";

const securityFeatures = [
  { icon: Shield, title: "IP Whitelisting", desc: "Restrict API access to trusted IP addresses." },
  { icon: Users, title: "Access Control Roles", desc: "Define granular permissions for team members." },
  { icon: Key, title: "Secure API Authentication", desc: "Token-based authentication with key rotation." },
  { icon: FileText, title: "Validation Logging", desc: "Complete audit trail of all validation events." },
  { icon: Lock, title: "Fraud Monitoring", desc: "Real-time alerts for suspicious activity." },
  { icon: Clock, title: "Data Lifecycle Management", desc: "Automated cache and data retention policies." },
];

const Security = () => (
  <>
    <Navbar />
    <main className="pt-16">
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="container relative mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl">
            Enterprise-Grade <span className="text-gradient-primary">Security</span>
          </motion.h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">Your data security is our top priority.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {securityFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Security;
