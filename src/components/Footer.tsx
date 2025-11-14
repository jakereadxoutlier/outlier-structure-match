import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  const scrollToForm = () => {
    document.getElementById("main-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-3">Outlier Structures</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Connecting serious structural concrete projects with vetted crews across Ventura County and Southern California.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:8055550100"
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                (805) 555-0100
              </a>
              <a
                href="mailto:info@outlierstructures.com"
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@outlierstructures.com
              </a>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Ventura County</li>
              <li>Los Angeles Area</li>
              <li>Orange County</li>
              <li>San Bernardino</li>
              <li className="text-primary">Expanding Markets</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <button
                  onClick={scrollToForm}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Get a Bid
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © {new Date().getFullYear()} Outlier Structures. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-8 text-center glass-card p-6 rounded-xl">
          <p className="text-lg font-semibold mb-3">
            Ready to connect with vetted structural concrete crews?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:8055550100"
              className="text-primary hover:text-primary-glow font-semibold transition-colors"
            >
              Call (805) 555-0100
            </a>
            <span className="text-muted-foreground hidden sm:inline">or</span>
            <button
              onClick={scrollToForm}
              className="text-primary hover:text-primary-glow font-semibold transition-colors"
            >
              Submit a project form
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
