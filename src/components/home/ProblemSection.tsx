import { motion } from "framer-motion";
import { AlertTriangle, Bot, Copy, Phone, Globe, Mail } from "lucide-react";

const problems = [
  { icon: Mail, label: "Fake or disposable emails" },
  { icon: Bot, label: "Bot and fraud traffic" },
  { icon: Copy, label: "Duplicate leads" },
  { icon: Phone, label: "Invalid phone numbers" },
  { icon: Globe, label: "Proxy or suspicious IP addresses" },
];

const ProblemSection = () => (
  <section className="relative py-24 overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-destructive/30 bg-destructive/10 px-4 py-1.5 text-sm text-destructive">
            <AlertTriangle className="h-3.5 w-3.5" />
            The Problem
          </div>
          <h2 className="font-heading text-3xl font-bold sm:text-4xl md:text-5xl">
            Stop Paying for <span className="text-destructive">Bad Leads</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Businesses lose thousands every month due to low-quality leads. Lead Validator automatically analyzes every incoming lead in milliseconds.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-left"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-destructive/10">
                <item.icon className="h-5 w-5 text-destructive" />
              </div>
              <span className="text-sm font-medium text-foreground">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
