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
import HeroSection from "./components/HeroSection";
import ProblemSolution from "./components/ProblemSolution";
import OfferSection from "./components/OfferSection";
import EarningsCalculator from "./components/EarningsCalculator";
import QualificationQuiz from "./components/QualificationQuiz";
import AboutSection from "./components/AboutSection";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll height to add background opacity to header and show scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const menuItems = [
    { label: "The Problem", href: "#problem-solution" },
    { label: "The Offer", href: "#offer" },
    { label: "Potential Calculator", href: "#calculator" },
    { label: "Book Audit", href: "#audit" },
    { label: "About Zak", href: "#about" },
  ];

  const emailAddress = "zak@growwithzak.online";
  const emailDirectLink = `mailto:${emailAddress}?subject=Skool%20Community%20Partnership%20Inquiry`;

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
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-xl font-black font-serif tracking-tight text-[#1c1b19] group-hover:text-[#b1392b] transition-colors">
              ZAK <span className="text-[#1c1b19]/50 font-normal font-mono text-sm">/ Growth Operator</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono font-bold uppercase tracking-wider text-[#1c1b19]/70">
            {menuItems.map((item, idx) => (
              <a 
                key={idx} 
                href={item.href} 
                className="hover:text-[#1c1b19] hover:underline transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Call to action header button */}
          <div className="hidden md:flex items-center gap-6">
            <a 
              href={emailDirectLink}
              className="text-xs font-mono font-bold text-[#1c1b19]/80 hover:text-[#1c1b19] transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4 text-[#b1392b]" />
              {emailAddress}
            </a>
            <a 
              href="#audit" 
              className="px-5 py-2.5 border-2 border-[#1c1b19] bg-[#1c1b19] text-[#f9f7f2] hover:bg-transparent hover:text-[#1c1b19] transition-all text-xs font-mono font-bold uppercase tracking-wider"
            >
              Apply for Audit
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

        {/* Mobile menu panel dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#f9f7f2] border-b-2 border-[#1c1b19] py-8 px-6 space-y-6 shadow-xl">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-serif font-black text-[#1c1b19] hover:text-[#b1392b] py-1 block"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="border-t border-[#1c1b19]/20 pt-6 flex flex-col gap-4">
              <a 
                href={emailDirectLink}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3.5 border-2 border-[#1c1b19] text-[#1c1b19] font-mono font-bold text-sm hover:bg-[#1c1b19] hover:text-[#f9f7f2] transition-colors flex justify-center items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact Operator Email
              </a>
              <a 
                href="#audit" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3.5 bg-[#1c1b19] text-[#f9f7f2] text-sm font-mono font-bold uppercase tracking-widest border-2 border-[#1c1b19]"
              >
                Apply for Audit
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
            <span className="text-2xl font-black font-serif tracking-tight text-[#f9f7f2]">
              ZAK <span className="text-[#f9f7f2]/40 font-normal font-mono text-xs block sm:inline">/ Growth Operator</span>
            </span>
            <p className="text-xs font-serif text-[#f9f7f2]/60 max-w-sm leading-relaxed">
              Applying mechanical rigor and custom digital pipelines to transform elite Moroccan fitness coaches into self-sustaining, recurring-revenue community empires. Built on paper-thin risk, direct results, and meticulous operations.
            </p>
          </div>

          <div className="md:col-span-3 flex gap-12 text-xs font-mono">
            <div className="space-y-3">
              <h4 className="font-bold text-[#f9f7f2] uppercase tracking-wider text-[10px] text-[#b1392b]">Pillars</h4>
              <ul className="space-y-2 text-[#f9f7f2]/60">
                <li><a href="#problem-solution" className="hover:text-[#f9f7f2] hover:underline transition-colors">The Bottleneck</a></li>
                <li><a href="#offer" className="hover:text-[#f9f7f2] hover:underline transition-colors">The Manifesto</a></li>
                <li><a href="#calculator" className="hover:text-[#f9f7f2] hover:underline transition-colors">Multiplier</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-[#f9f7f2] uppercase tracking-wider text-[10px] text-[#b1392b]">Dossier</h4>
              <ul className="space-y-2 text-[#f9f7f2]/60">
                <li><a href={emailDirectLink} className="hover:text-[#f9f7f2] hover:underline transition-colors">Direct Email</a></li>
                <li><a href="https://instagram.com/grow.withzak" target="_blank" rel="noopener noreferrer" className="hover:text-[#f9f7f2] hover:underline transition-colors">Instagram</a></li>
                <li><a href="#audit" className="hover:text-[#f9f7f2] hover:underline transition-colors">Apply Now</a></li>
              </ul>
            </div>
          </div>

          {/* Social Icons Column */}
          <div className="md:col-span-4 flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-4">
              {/* Email direct contact */}
              <a 
                href={emailDirectLink}
                className="p-3 bg-transparent border-2 border-[#f9f7f2]/20 hover:border-[#f9f7f2] hover:text-[#f9f7f2] text-[#f9f7f2]/60 transition-all rounded-none"
                title="Direct Email"
              >
                <Mail className="w-5 h-5" />
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

      {/* 4. Floating Action Button (Paper Theme Style) */}
      <a 
        href={emailDirectLink}
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-[#f9f7f2] border-2 border-[#1c1b19] p-3.5 shadow-[4px_4px_0px_0px_#1c1b19] hover:shadow-[1px_1px_0px_0px_#1c1b19] hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-[#1c1b19]"
        title="Email Zak"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b1392b] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#b1392b]"></span>
        </span>
        <span className="text-xs font-mono font-bold uppercase tracking-wider hidden sm:inline max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
          Email Operator
        </span>
        <Mail className="w-5 h-5" />
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
