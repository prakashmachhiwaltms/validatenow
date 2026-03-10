import { motion } from "framer-motion";
import { FileText, Webhook, GitBranch, Code } from "lucide-react";

const integrations = [
  { icon: Code, label: "API Integration" },
  { icon: Webhook, label: "Postback Webhooks" },
  { icon: GitBranch, label: "Ping Tree Systems" },
  { icon: FileText, label: "Form Validation Scripts" },
];

const compatible = ["CRM Systems", "Affiliate Platforms", "Marketing Automation", "Custom APIs", "Lead Forms"];

const IntegrationsSection = () => (
  <section className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="font-heading text-3xl font-bold sm:text-4xl md:text-5xl">
          Seamless <span className="text-gradient-accent">Integrations</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Connect Lead Validator with your existing lead delivery systems.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {integrations.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="rounded-xl border border-border bg-card p-6 text-center transition-colors hover:border-accent/30"
          >
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
              <item.icon className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-heading font-semibold text-foreground">{item.label}</h3>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        {compatible.map((c) => (
          <span key={c} className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
            {c}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default IntegrationsSection;
