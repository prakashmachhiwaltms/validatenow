import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const TermsOfService = () => (
  <>
    <Navbar />
    <main className="pt-16">
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="container relative mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl">
            Terms of <span className="text-gradient-primary">Service</span>
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
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Lead Validator platform, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions in this agreement, you may not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Use of Services</h2>
              <p className="mb-4">
                You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for all activity that occurs under your account.
              </p>
              <p>
                You may not use our platform to validate obtained illegally or in violation of any applicable privacy laws, including GDPR and CCPA.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Accounts and Billing</h2>
              <p className="mb-4">
                To access certain features of the service, you must register for an account. We charge fees for some of our services. You agree to pay all applicable fees related to your use of our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Intellectual Property</h2>
              <p>
                The service and its original content, features, and functionality are owned by Lead Validator and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Limitation of Liability</h2>
              <p>
                In no event shall Lead Validator, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at legal@leadvalidator.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default TermsOfService;
