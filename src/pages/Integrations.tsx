import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Code, Webhook, GitBranch, FileText } from "lucide-react";

const methods = [
  { icon: Code, title: "API Integration", desc: "RESTful API with comprehensive documentation." },
  { icon: Webhook, title: "Postback Webhooks", desc: "Receive real-time notifications on lead decisions." },
  { icon: GitBranch, title: "Ping Tree Systems", desc: "Integrate with existing ping tree workflows." },
  { icon: FileText, title: "Form Validation Scripts", desc: "Drop-in scripts for front-end form validation." },
];

const compatible = ["CRM Systems", "Affiliate Platforms", "Marketing Automation Tools", "Custom APIs", "Lead Forms"];

const Integrations = () => (
  <>
    <Navbar />
    <main className="pt-16">
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="container relative mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl">
            <span className="text-gradient-accent">Integrations</span>
          </motion.h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Connect Lead Validator with common lead delivery systems.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl grid gap-6 sm:grid-cols-2">
            {methods.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <m.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{m.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-6">Compatible With</h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {compatible.map((c) => (
                <span key={c} className="rounded-full border border-border bg-card px-5 py-2.5 text-sm text-muted-foreground">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Integrations;
