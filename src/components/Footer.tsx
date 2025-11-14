import { Square, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative border-t border-slate-800/50 bg-slate-950">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Square className="w-6 h-6 text-cyan-400" strokeWidth={2.5} />
              <span className="text-xl font-bold text-slate-50">
                Outlier Structures
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-6 max-w-md">
              Connecting general contractors, developers, and owners with vetted
              structural concrete crews throughout Southern California.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>(805) 555-0100</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>hello@outlierstructures.com</span>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-slate-50 font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Ventura County</li>
              <li>Los Angeles County</li>
              <li>Orange County</li>
              <li>Santa Barbara County</li>
              <li className="text-cyan-400">Expanding markets →</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-50 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-cyan-400 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#lead-form" className="hover:text-cyan-400 transition-colors">
                  Get a Bid
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>
              © {new Date().getFullYear()} Outlier Structures. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
