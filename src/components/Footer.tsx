import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-secondary/50">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <img src="/logo.png" alt="Lead Validator Logo" className="h-10  object-contain" />
          </Link>
          <p className="text-sm text-muted-foreground">Real-time lead validation and fraud prevention for modern businesses.</p>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-3">Product</h4>
          <div className="flex flex-col gap-2">
            <Link to="/features" className="text-sm text-muted-foreground hover:text-foreground">Features</Link>
            <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground">Pricing</Link>
            <Link to="/api-docs" className="text-sm text-muted-foreground hover:text-foreground">API Docs</Link>
            <Link to="/integrations" className="text-sm text-muted-foreground hover:text-foreground">Integrations</Link>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-3">Company</h4>
          <div className="flex flex-col gap-2">
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">About</Link>
            <Link to="/security" className="text-sm text-muted-foreground hover:text-foreground">Security</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link>
            <Link to="/demo" className="text-sm text-muted-foreground hover:text-foreground">Book Demo</Link>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-3">Legal</h4>
          <div className="flex flex-col gap-2">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link>
            <Link to="/cookies" className="text-sm text-muted-foreground hover:text-foreground">Cookie Policy</Link>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Lead Validator. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
