import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    desc: "Best for small lead generation teams",
    price: "$49",
    features: ["50,000 validations/month", "Email validation", "Phone validation", "IP intelligence", "Dashboard analytics"],
    cta: "Start Free Trial",
    featured: false,
  },
  {
    name: "Professional",
    desc: "Best for growing lead networks",
    price: "$149",
    features: ["250,000 validations/month", "All validation modules", "Smart rule engine", "Fraud detection", "Traffic source analytics"],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    name: "Enterprise",
    desc: "Best for large lead marketplaces",
    price: "Custom",
    features: ["Unlimited validations", "Multi-provider integrations", "Dedicated infrastructure", "Custom integrations", "Priority support"],
    cta: "Contact Sales",
    featured: false,
  },
];

const Pricing = () => (
  <>
    <Navbar />
    <main className="pt-16">
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="container relative mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl">
            Simple & <span className="text-gradient-primary">Transparent</span> Pricing
          </motion.h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Choose the plan that fits your validation volume.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl border p-8 ${
                  plan.featured
                    ? "border-primary/50 bg-card glow-blue relative"
                    : "border-border bg-card"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <h3 className="font-heading text-xl font-bold text-foreground">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.desc}</p>
                <div className="mt-6">
                  <span className="font-heading text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link to="/demo">
                    <Button variant={plan.featured ? "hero" : "heroOutline"} className="w-full">
                      {plan.cta}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Pricing;
