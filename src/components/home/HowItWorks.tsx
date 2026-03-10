import { motion } from "framer-motion";
import { Send, Search, Filter, CheckCircle } from "lucide-react";

const steps = [
  { icon: Send, num: "01", title: "Send Lead Data", desc: "Send lead data via API or form integration." },
  { icon: Search, num: "02", title: "Analyze & Validate", desc: "Lead Validator analyzes the lead using multiple providers." },
  { icon: Filter, num: "03", title: "Apply Rules", desc: "Validation rules and filters are executed in real time." },
  { icon: CheckCircle, num: "04", title: "Deliver Clean Leads", desc: "Clean leads are delivered to your CRM or buyer." },
];

const HowItWorks = () => (
  <section className="relative py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="font-heading text-3xl font-bold sm:text-4xl md:text-5xl">
          How It <span className="text-gradient-accent">Works</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Four simple steps to start validating your leads.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative text-center"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary">
              <s.icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <span className="text-xs font-bold text-primary tracking-widest">STEP {s.num}</span>
            <h3 className="mt-2 font-heading text-lg font-semibold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
