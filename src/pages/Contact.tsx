import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Handshake } from "lucide-react";

const Contact = () => (
  <>
    <Navbar />
    <main className="pt-16">
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="container relative mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl font-bold sm:text-5xl">
            Get in <span className="text-gradient-primary">Touch</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="grid gap-6 sm:grid-cols-3 mb-12">
              {[
                { icon: Mail, label: "Sales Inquiries", desc: "sales@leadvalidator.com" },
                { icon: MessageSquare, label: "Technical Support", desc: "support@leadvalidator.com" },
                { icon: Handshake, label: "Partnerships", desc: "partners@leadvalidator.com" },
              ].map((c) => (
                <div key={c.label} className="rounded-xl border border-border bg-card p-5 text-center">
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <c.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-sm font-semibold text-foreground">{c.label}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{c.desc}</p>
                </div>
              ))}
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <input placeholder="Name" className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" />
                <input placeholder="Email" type="email" className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" />
              </div>
              <input placeholder="Subject" className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" />
              <textarea placeholder="Message" rows={5} className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none resize-none" />
              <Button variant="hero" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Contact;
