/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { 
  Instagram, 
  ChevronUp, 
  Menu, 
  X, 
  Sparkles, 
  ShieldCheck,
  Flame,
  Mail
} from "lucide-react";
import { useLanguage } from "./LanguageContext";

// WhatsApp Custom Icon
const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);
import HeroSection from "./components/HeroSection";
import ProblemSolution from "./components/ProblemSolution";
import OfferSection from "./components/OfferSection";
import AscensionModel from "./components/AscensionModel";
import EarningsCalculator from "./components/EarningsCalculator";
import QualificationQuiz from "./components/QualificationQuiz";
import AboutSection from "./components/AboutSection";
import AgreementPage from "./components/AgreementPage";
import AuditPage from "./components/AuditPage";
import ToolsDashboard from "./components/ToolsDashboard";
import BookedPage from "./components/BookedPage";

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname.toLowerCase().replace(/\/$/, "");
      const hash = window.location.hash.toLowerCase();
      if (path === "/agreement" || hash === "#/agreement" || hash === "#agreement") {
        return "/agreement";
      }
      if (path === "/audit" || hash === "#/audit" || hash === "#audit") {
        return "/audit";
      }
      if (path === "/tools" || hash === "#/tools" || hash === "#tools") {
        return "/tools";
      }
      if (path === "/booked" || hash === "#/booked" || hash === "#booked") {
        return "/booked";
      }
    }
    return "/";
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const { lang, setLang } = useLanguage();

  const isEn = lang === "en";

  // Handle route change on popstate & hashchange, and sanitize empty trailing hash (#)
  useEffect(() => {
    // If URL contains lonely `#`, clean it up so address bar stays clean (https://www.growwithzak.online/)
    if (window.location.hash === "#" || window.location.hash === "#/") {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    const checkRoute = () => {
      const path = window.location.pathname.toLowerCase().replace(/\/$/, "");
      const hash = window.location.hash.toLowerCase();
      if (path === "/agreement" || hash === "#/agreement" || hash === "#agreement") {
        setCurrentPath("/agreement");
      } else if (path === "/audit" || hash === "#/audit" || hash === "#audit") {
        setCurrentPath("/audit");
      } else if (path === "/tools" || hash === "#/tools" || hash === "#tools") {
        setCurrentPath("/tools");
      } else if (path === "/booked" || hash === "#/booked" || hash === "#booked") {
        setCurrentPath("/booked");
      } else {
        setCurrentPath("/");
        if (hash === "#" || hash === "#/") {
          window.history.replaceState(null, "", window.location.pathname + window.location.search);
        }
      }
    };

    window.addEventListener("popstate", checkRoute);
    window.addEventListener("hashchange", checkRoute);
    return () => {
      window.removeEventListener("popstate", checkRoute);
      window.removeEventListener("hashchange", checkRoute);
    };
  }, []);

  // Monitor scroll height to add background opacity to header and show scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // If on /booked route, render the Booked page
  if (currentPath === "/booked") {
    return <BookedPage onNavigateHome={() => {
      window.history.pushState({}, "", "/");
      setCurrentPath("/");
    }} />;
  }


  // If on /agreement route, render the hidden Agreement page
  if (currentPath === "/agreement") {
    return <AgreementPage />;
  }

  // If on /audit route, render the dedicated Audit page
  if (currentPath === "/audit") {
    return <AuditPage onNavigateHome={() => {
      window.history.pushState({}, "", "/");
      setCurrentPath("/");
    }} />;
  }

  const navigateToAudit = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, "", "/audit");
    setCurrentPath("/audit");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navbar = document.getElementById("navbar");
      const offset = navbar ? navbar.offsetHeight : 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const menuItems = isEn ? [
    { label: "The Problem", href: "#problem-solution" },
    { label: "The Offer", href: "#offer" },
    { label: "Potential Calculator", href: "#calculator" },
    { label: "Book Audit", href: "#audit" },
    { label: "About Zak", href: "#about" },
  ] : [
    { label: "L'Mochkil", href: "#problem-solution" },
    { label: "L'Ard", href: "#offer" },
    { label: "Calculator", href: "#calculator" },
    { label: "Réservé Audit", href: "#audit" },
    { label: "Chkon Zak", href: "#about" },
  ];

  const contactWhatsApp = "0621520455";
  const whatsappLink = "https://wa.me/212621520455?text=Hi%20Zak!%20I'm%20interested%20in%20scaling%20my%20community%20partnership.";


  return (
    <div className="min-h-screen bg-[#f9f7f2] text-[#1c1b19] font-sans selection:bg-[#1c1b19] selection:text-[#f9f7f2] overflow-x-hidden antialiased">
      
      {/* 1. Header/Navigation */}
      <header 
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled 
            ? "bg-[#f9f7f2]/95 backdrop-blur-md py-3 border-[#1c1b19] shadow-sm" 
            : "bg-transparent py-5 border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo / Title */}
          <a 
            href="/" 
            onClick={(e) => { e.preventDefault(); handleScrollToTop(); }}
            className="flex items-center gap-2.5 group"
          >
            {!logoError ? (
              <img 
                src="/gz_logo.png" 
                alt="GZ Logo" 
                onError={() => setLogoError(true)}
                className="h-8 w-auto object-contain brightness-0 group-hover:opacity-85 transition-opacity"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-8 h-8 flex items-center justify-center border border-[#1c1b19] font-mono font-bold text-xs bg-white text-[#1c1b19]">
                GZ
              </div>
            )}
            <div className="flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1.5 leading-none">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1c1b19]">
                ZAK
              </span>
              <span className="hidden md:inline text-[#1c1b19]/40 font-mono text-xs">/</span>
              <span className="text-[10px] md:text-xs font-mono text-[#1c1b19]/60 uppercase tracking-wider">
                Growth Operator
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono font-bold uppercase tracking-wider text-[#1c1b19]/70">
            {menuItems.map((item, idx) => (
              <a 
                key={idx} 
                href={item.href} 
                onClick={(e) => scrollToSection(e, item.href.slice(1))}
                className="hover:text-[#1c1b19] hover:underline transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Call to action header button and Language Toggle */}
          <div className="flex items-center gap-4">
            {/* Language Selector Toggle */}
            <div className="flex items-center gap-0.5 border-2 border-[#1c1b19] bg-white p-0.5 text-[10px] font-mono font-bold shadow-[2px_2px_0px_0px_#1c1b19]">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-1.5 py-0.5 transition-all ${
                  lang === "en"
                    ? "bg-[#1c1b19] text-[#f9f7f2]"
                    : "text-[#1c1b19] hover:bg-[#1c1b19]/5"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("darija")}
                className={`px-1.5 py-0.5 transition-all ${
                  lang === "darija"
                    ? "bg-[#1c1b19] text-[#f9f7f2]"
                    : "text-[#1c1b19] hover:bg-[#1c1b19]/5"
                }`}
              >
                DARIJA
              </button>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-bold text-[#1c1b19]/80 hover:text-[#1c1b19] transition-colors flex items-center gap-1.5"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#1d4ed8]" />
                {contactWhatsApp}
              </a>
              <a 
                href="/audit" 
                onClick={navigateToAudit}
                className="px-5 py-2.5 border-2 border-[#1c1b19] bg-[#1c1b19] text-[#f9f7f2] hover:bg-transparent hover:text-[#1c1b19] transition-all text-xs font-mono font-bold uppercase tracking-wider"
              >
                {isEn ? "Apply for Audit" : "Bghit Audit (Fabor)"}
              </a>
            </div>

            {/* Mobile menu button toggle */}
            <button 
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 border-2 border-[#1c1b19] bg-[#f9f7f2] text-[#1c1b19] hover:bg-[#1c1b19] hover:text-[#f9f7f2] transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu panel dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#f9f7f2] border-b-2 border-[#1c1b19] py-8 px-6 space-y-6 shadow-xl">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.href} 
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    scrollToSection(e, item.href.slice(1));
                  }}
                  className="text-base font-serif font-black text-[#1c1b19] hover:text-[#1d4ed8] py-1 block"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="border-t border-[#1c1b19]/20 pt-6 flex flex-col gap-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3.5 border-2 border-[#1c1b19] text-[#1c1b19] font-mono font-bold text-sm hover:bg-[#1c1b19] hover:text-[#f9f7f2] transition-colors flex justify-center items-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4" />
                {isEn ? "Contact on WhatsApp" : "Hdr m3aya f WhatsApp"}
              </a>
              <a 
                href="/audit" 
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  navigateToAudit(e);
                }}
                className="w-full text-center py-3.5 bg-[#1c1b19] text-[#f9f7f2] text-sm font-mono font-bold uppercase tracking-widest border-2 border-[#1c1b19]"
              >
                {isEn ? "Apply for Audit" : "Bghit Audit (Fabor)"}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 2. Main Page Layout */}
      <main className="w-full">
        {/* Hero Area */}
        <HeroSection />

        {/* Problem vs Solution comparison */}
        <ProblemSolution />

        {/* Three core pillars of offer */}
        <OfferSection />

        {/* The High-Ticket Ascension Model */}
        <AscensionModel />

        {/* Potentials Calculator (MAD Revenue multiplier) */}
        <EarningsCalculator />

        {/* Qualification quiz & Interactive Booking Widget */}
        <QualificationQuiz />

        {/* About Operator Section */}
        <AboutSection />
      </main>

      {/* 3. Footer */}
      <footer className="bg-[#151413] text-[#f9f7f2]/90 border-t-2 border-[#1c1b19] py-20 px-6 relative overflow-hidden">
        {/* Subtle retro horizontal lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:100%_12px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-start justify-between">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              {!logoError ? (
                <img 
                  src="/gz_logo.png" 
                  alt="GZ Logo" 
                  onError={() => setLogoError(true)}
                  className="h-8 w-auto object-contain brightness-0 invert"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-8 h-8 flex items-center justify-center border border-[#f9f7f2]/30 font-mono font-bold text-xs bg-transparent text-[#f9f7f2]">
                  GZ
                </div>
              )}
              <div className="flex flex-col leading-none">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#f9f7f2]">
                  ZAK
                </span>
                <span className="text-[10px] font-mono text-[#f9f7f2]/50 uppercase tracking-wider mt-0.5">
                  Growth Operator
                </span>
              </div>
            </div>
            <p className="text-xs font-serif text-[#f9f7f2]/60 max-w-sm leading-relaxed">
              Applying mechanical rigor and custom digital pipelines to transform elite Moroccan fitness coaches into self-sustaining, recurring-revenue community empires. Built on paper-thin risk, direct results, and meticulous operations.
            </p>
          </div>

          <div className="md:col-span-3 flex gap-12 text-xs font-mono">
            <div className="space-y-3">
              <h4 className="font-bold uppercase tracking-wider text-[10px] text-[#1d4ed8]">Pillars</h4>
              <ul className="space-y-2 text-[#f9f7f2]/60">
                <li><a href="#problem-solution" onClick={(e) => scrollToSection(e, "problem-solution")} className="hover:text-[#f9f7f2] hover:underline transition-colors">The Bottleneck</a></li>
                <li><a href="#offer" onClick={(e) => scrollToSection(e, "offer")} className="hover:text-[#f9f7f2] hover:underline transition-colors">The Manifesto</a></li>
                <li><a href="#calculator" onClick={(e) => scrollToSection(e, "calculator")} className="hover:text-[#f9f7f2] hover:underline transition-colors">Multiplier</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold uppercase tracking-wider text-[10px] text-[#1d4ed8]">Dossier</h4>
              <ul className="space-y-2 text-[#f9f7f2]/60">
                <li><a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#f9f7f2] hover:underline transition-colors">WhatsApp Contact</a></li>
                <li><a href="https://instagram.com/grow.withzak" target="_blank" rel="noopener noreferrer" className="hover:text-[#f9f7f2] hover:underline transition-colors">Instagram</a></li>
                <li><a href="/audit" onClick={navigateToAudit} className="hover:text-[#f9f7f2] hover:underline transition-colors">Apply Now</a></li>
              </ul>
            </div>
          </div>

          {/* Social Icons Column */}
          <div className="md:col-span-4 flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-4">
              {/* WhatsApp direct contact */}
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-transparent border-2 border-[#f9f7f2]/20 hover:border-[#f9f7f2] hover:text-[#f9f7f2] text-[#f9f7f2]/60 transition-all rounded-none flex items-center justify-center"
                title="Direct WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>

              {/* Instagram link */}
              <a 
                href="https://instagram.com/grow.withzak"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-transparent border-2 border-[#f9f7f2]/20 hover:border-[#f9f7f2] hover:text-[#f9f7f2] text-[#f9f7f2]/60 transition-all rounded-none"
                title="Instagram Profile @grow.withzak"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-[10px] text-[#f9f7f2]/40 font-mono uppercase tracking-widest text-center md:text-right">
              © {new Date().getFullYear()} Zak. Case No. 01. Registered in Morocco.
            </p>
          </div>
        </div>
      </footer>

      {/* 4. Floating Action Button (Vibrant WhatsApp Style) */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-[#25D366] text-white border-2 border-[#1c1b19] p-3.5 shadow-[4px_4px_0px_0px_#1c1b19] hover:shadow-[1px_1px_0px_0px_#1c1b19] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
        title="Chat on WhatsApp"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
        <span className="text-xs font-mono font-black uppercase tracking-wider hidden sm:inline max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-white">
          {isEn ? "WhatsApp Operator" : "Sifat f WhatsApp"}
        </span>
        <WhatsAppIcon className="w-5 h-5 text-white" />
      </a>

      {/* 5. Back to Top Button (Paper Theme Style) */}
      {showScrollTop && (
        <button
          type="button"
          onClick={handleScrollToTop}
          className="fixed bottom-6 left-6 z-50 p-3 bg-[#f9f7f2] border-2 border-[#1c1b19] shadow-[3px_3px_0px_0px_#1c1b19] hover:shadow-[1px_1px_0px_0px_#1c1b19] hover:translate-x-0.5 hover:translate-y-0.5 text-[#1c1b19] transition-all"
          title="Back to top"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
      )}

    </div>
  );
}
