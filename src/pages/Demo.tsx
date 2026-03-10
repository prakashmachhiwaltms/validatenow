import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Play, Layers, Code, BarChart3 } from "lucide-react";

const demoIncludes = [
  { icon: Play, label: "Platform walkthrough" },
  { icon: Layers, label: "Validation engine overview" },
  { icon: Code, label: "API integration guide" },
  { icon: BarChart3, label: "Traffic analytics demonstration" },
];

const Demo = () => (
  <>
    <Navbar />
    <main className="pt-16">
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="container relative mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl">
            Request a <span className="text-gradient-primary">Live Demo</span>
          </motion.h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            See how Lead Validator works in real time.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="grid gap-4 sm:grid-cols-2 mb-12">
              {demoIncludes.map((d) => (
                <div key={d.label} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <d.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{d.label}</span>
                </div>
              ))}
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <input placeholder="Full Name" className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" />
                <input placeholder="Work Email" type="email" className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" />
              </div>
              <input placeholder="Company Name" className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" />
              <input placeholder="Monthly Lead Volume" className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" />
              <textarea placeholder="Tell us about your use case" rows={4} className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none resize-none" />
              <Button variant="hero" className="w-full">Request Demo</Button>
            </form>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Demo;
