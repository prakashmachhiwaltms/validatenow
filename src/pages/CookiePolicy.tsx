import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const CookiePolicy = () => (
  <>
    <Navbar />
    <main className="pt-16">
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="container relative mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl">
            Cookie <span className="text-gradient-primary">Policy</span>
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
              <h2 className="text-2xl font-bold text-foreground mb-4">1. What Are Cookies</h2>
              <p>
                Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Cookies</h2>
              <p className="mb-4">
                When you use and access the Lead Validator platform, we may place a number of cookies files in your web browser.
              </p>
              <p>
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>To enable certain functions of the Service (Essential Cookies)</li>
                <li>To provide analytics (Analytics Cookies)</li>
                <li>To store your preferences (Preference Cookies)</li>
                <li>To enable advertisement delivery (Advertising Cookies)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Third-Party Cookies</h2>
              <p>
                In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Your Choices Regarding Cookies</h2>
              <p className="mb-4">
                If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.
              </p>
              <p>
                Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please contact us at privacy@leadvalidator.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default CookiePolicy;
