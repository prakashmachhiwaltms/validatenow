import { motion } from "framer-motion";
import { Building2, TrendingUp, Landmark, ShieldCheck, Megaphone, GitBranch } from "lucide-react";

const cases = [
  { icon: Building2, label: "Affiliate Networks" },
  { icon: TrendingUp, label: "Lead Generation Companies" },
  { icon: Landmark, label: "Financial Lead Platforms" },
  { icon: ShieldCheck, label: "Insurance Lead Platforms" },
  { icon: Megaphone, label: "Marketing Agencies" },
  { icon: GitBranch, label: "Ping Tree Systems" },
];

const UseCasesSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="font-heading text-3xl font-bold sm:text-4xl md:text-5xl">
          Built for <span className="text-gradient-primary">Your Industry</span>
        </h2>
      </motion.div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cases.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/30"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <c.icon className="h-5 w-5 text-primary" />
            </div>
            <span className="font-heading font-semibold text-foreground">{c.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default UseCasesSection;
