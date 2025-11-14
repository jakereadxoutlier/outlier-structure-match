import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Menu, ArrowUpRight } from "lucide-react";

const CONTACT_EMAIL = "hello@outlierstructures.com";

export const SharedHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f0f0d]/98 backdrop-blur-md">
      <div className="relative flex items-center justify-between px-4 py-6 text-sm font-medium uppercase tracking-[0.3em] text-white/70 sm:px-6 lg:px-8">
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center gap-4 text-white/80 lg:hidden"
          aria-label="Toggle menu"
        >
          <Menu className="size-7" />
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-xs">
          <Link to="/" className="text-white/80 transition hover:text-white">Home</Link>
          <Link to="/how-it-works" className="text-white/80 transition hover:text-white">How it works</Link>
          <Link to="/service-areas" className="text-white/80 transition hover:text-white">Service areas</Link>
          <Link to="/about" className="text-white/80 transition hover:text-white">About</Link>
        </nav>
        
        <Link to="/" className="absolute left-1/2 -translate-x-1/2 text-base font-semibold text-white/95">
          OUTLIER STRUCTURES
        </Link>
        
        <div className="flex items-center gap-6">
          <a href={`mailto:${CONTACT_EMAIL}`} className="hidden sm:block text-white/80 transition hover:text-white" aria-label="Email us">
            <Mail className="size-7" />
          </a>
          <Link 
            to="/bid"
            className="rounded-lg bg-gradient-to-r from-[hsl(22_96%_60%)] to-[hsl(32_95%_72%)] px-5 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-bold uppercase tracking-[0.35em] text-[hsl(23_30%_12%)] shadow-[0_12px_32px_hsl(22_96%_40%_/_0.35)] transition hover:scale-[1.02]"
          >
            Get Bid
          </Link>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#0f0f0d] px-4 py-4">
          <nav className="flex flex-col gap-4 text-sm">
            <Link to="/" className="text-white/80 transition hover:text-white" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/how-it-works" className="text-white/80 transition hover:text-white" onClick={() => setMobileMenuOpen(false)}>How it works</Link>
            <Link to="/service-areas" className="text-white/80 transition hover:text-white" onClick={() => setMobileMenuOpen(false)}>Service areas</Link>
            <Link to="/about" className="text-white/80 transition hover:text-white" onClick={() => setMobileMenuOpen(false)}>About</Link>
          </nav>
        </div>
      )}
    </header>
  );
};
