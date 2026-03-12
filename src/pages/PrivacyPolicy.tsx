import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const PrivacyPolicy = () => (
  <>
    <Navbar />
    <main className="pt-16">
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="container relative mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl">
            Privacy <span className="text-gradient-primary">Policy</span>
          </motion.h1>
          <p className="mt-6 text-lg text-muted-foreground mx-auto max-w-2xl">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-8 text-muted-foreground">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                We collect information you provide directly to us when you use our services. This includes but is not limited to your name, email address, billing information, and any data you submit for validation through our platform.
              </p>
              <p>
                We also automatically collect certain information about your device and how you interact with our services, such as IP addresses, browser types, and usage patterns.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">
                We use the information we collect to provide, maintain, and improve our services, including processing lead validation requests, preventing fraud, and analyzing platform performance.
              </p>
              <p>
                We may also use your information to communicate with you about products, services, offers, and events that may be of interest to you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Data Sharing and Disclosure</h2>
              <p className="mb-4">
                We do not sell your personal information. We may share your data with trusted third-party service providers who assist us in operating our platform, conducting our business, or serving our users, provided those parties agree to keep this information confidential.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Security</h2>
              <p>
                We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at privacy@leadvalidator.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default PrivacyPolicy;
