import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="relative py-24 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-primary opacity-5" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
    
    <div className="container relative mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="font-heading text-3xl font-bold sm:text-4xl md:text-5xl">
          Start validating your leads <span className="text-gradient-primary">in real time</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Join hundreds of businesses that trust Lead Validator to protect their lead quality.
        </p>
        <div className="mt-8">
          <Link to="/demo">
            <Button variant="hero" size="lg" className="gap-2 text-base px-8 py-6">
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
