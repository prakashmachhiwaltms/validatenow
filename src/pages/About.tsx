import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Eye, Lightbulb } from "lucide-react";

const About = () => (
  <>
    <Navbar />
    <main className="pt-16">
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="container relative mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl">
            About <span className="text-gradient-primary">Lead Validator</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Lead Validator is a real-time lead validation platform designed for lead generation companies, affiliate networks, and marketplaces. Our platform helps businesses eliminate bad leads, prevent fraud, and improve lead quality using advanced validation technologies.
            </p>

            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { icon: Target, title: "Our Mission", desc: "Make lead marketplaces more transparent, efficient, and profitable." },
                { icon: Eye, title: "Our Vision", desc: "A world where every lead transaction is verified, trusted, and valuable." },
                { icon: Lightbulb, title: "Our Approach", desc: "Multi-provider validation with intelligent rules and real-time processing." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-border bg-card p-6 text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
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

export default About;
