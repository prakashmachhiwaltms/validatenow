import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const ApiDocs = () => (
  <>
    <Navbar />
    <main className="pt-16">
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="container relative mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl">
            <span className="text-gradient-primary">API</span> Documentation
          </motion.h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Integrate Lead Validator into your workflow with our simple REST API.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-12">
            {/* Endpoint */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Lead Validation API</h2>
              <p className="mt-2 text-muted-foreground">Send lead data to Lead Validator for real-time analysis.</p>
              <div className="mt-4 rounded-lg bg-primary/10 border border-primary/20 px-4 py-2 font-mono text-sm text-primary">
                POST /api/v1/validate
              </div>
            </div>

            {/* Request */}
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Example Request</h3>
              <pre className="rounded-xl border border-border bg-card p-6 text-sm text-foreground overflow-x-auto">
{`{
  "email": "user@example.com",
  "phone": "1234567890",
  "ip": "192.168.1.1",
  "source": "publisher1",
  "campaign": "loan_offer"
}`}
              </pre>
            </div>

            {/* Response */}
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Example Response</h3>
              <pre className="rounded-xl border border-border bg-card p-6 text-sm text-foreground overflow-x-auto">
{`{
  "email_status": "valid",
  "phone_status": "valid",
  "ip_risk": "low",
  "fraud_score": 12,
  "duplicate": false,
  "decision": "approved"
}`}
              </pre>
            </div>

            {/* Decisions */}
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Response Decisions</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { decision: "approved", color: "bg-accent/10 text-accent border-accent/20" },
                  { decision: "rejected", color: "bg-destructive/10 text-destructive border-destructive/20" },
                  { decision: "flagged", color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
                  { decision: "redirected", color: "bg-primary/10 text-primary border-primary/20" },
                ].map((d) => (
                  <div key={d.decision} className={`rounded-lg border px-4 py-3 font-mono text-sm ${d.color}`}>
                    {d.decision}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default ApiDocs;
