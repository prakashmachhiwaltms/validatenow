import { motion } from "framer-motion";
import dashboardImg from "@/assets/dashboard-preview.png";

const DashboardPreview = () => (
  <section className="relative py-24 overflow-hidden">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="font-heading text-3xl font-bold sm:text-4xl md:text-5xl">
          Centralized <span className="text-gradient-primary">Dashboard</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Monitor lead validation results, fraud scores, traffic source performance, and real-time metrics in one place.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative mt-12 mx-auto max-w-5xl"
      >
        <div className="absolute -inset-4 rounded-3xl bg-gradient-primary opacity-10 blur-3xl" />
        <div className="relative overflow-hidden rounded-2xl border border-border shadow-2xl">
          <img
            src={dashboardImg}
            alt="Lead Validator Dashboard showing validation analytics, fraud scores, and real-time metrics"
            className="w-full"
            loading="lazy"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default DashboardPreview;
