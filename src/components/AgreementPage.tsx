import React, { useState, useEffect } from "react";
import { ShieldCheck, Lock, FileText, CheckCircle2, AlertCircle } from "lucide-react";

interface AgreementPageProps {
  tallyUrl?: string;
}

export default function AgreementPage({ 
  tallyUrl = "https://tally.so/embed/xXGEgv?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
}: AgreementPageProps) {
  const [logoError, setLogoError] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const currentYear = new Date().getFullYear();

  // Load Tally embed script dynamically for optimal auto-resizing
  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://tally.so/widgets/embed.js";
      script.async = true;
      script.onload = () => {
        // @ts-expect-error Tally global
        if (window.Tally) {
          // @ts-expect-error Tally global
          window.Tally.loadEmbeds();
        }
      };
      document.body.appendChild(script);
    } else {
      // @ts-expect-error Tally global
      if (window.Tally) {
        // @ts-expect-error Tally global
        window.Tally.loadEmbeds();
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f7f2] text-[#1c1b19] font-sans antialiased selection:bg-[#1c1b19] selection:text-[#f9f7f2] flex flex-col justify-between">
      
      {/* 1. Minimal Dedicated Header */}
      <header className="w-full bg-[#f9f7f2] border-b-2 border-[#1c1b19] py-4 px-4 md:px-8 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            {!logoError ? (
              <img 
                src="/gz_logo.png" 
                alt="GZ Logo" 
                onError={() => setLogoError(true)}
                className="h-8 w-auto object-contain brightness-0 group-hover:opacity-85 transition-opacity"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-8 h-8 flex items-center justify-center border-2 border-[#1c1b19] font-mono font-bold text-xs bg-white text-[#1c1b19]">
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

          {/* Document Security Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 border border-[#1c1b19] bg-white font-mono text-[10px] uppercase tracking-wider font-bold shadow-[2px_2px_0px_0px_#1c1b19]">
            <Lock className="w-3 h-3 text-[#1d4ed8]" />
            <span className="hidden sm:inline text-[#1c1b19]/70">Security:</span>
            <span className="text-[#1c1b19]">256-Bit SSL Encrypted</span>
          </div>

        </div>
      </header>

      {/* 2. Main Content & Contract Container */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-10 md:py-14 flex flex-col items-center">
        
        {/* Title & Subtext Section */}
        <div className="w-full text-center mb-8 md:mb-12 space-y-3">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#1c1b19] text-[#f9f7f2] text-[10px] md:text-xs font-mono font-bold uppercase tracking-widest border border-[#1c1b19] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.15)]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#e2a13b]" />
            <span>Official Client Onboarding Document</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-serif font-black tracking-tight text-[#1c1b19] leading-tight pt-2">
            Strategic Partnership Agreement 📝
          </h1>

          <p className="text-sm md:text-base font-serif text-[#1c1b19]/75 max-w-2xl mx-auto leading-relaxed">
            Review the terms below and sign to formalize our Growth Partnership.
          </p>

          <div className="pt-2 flex flex-wrap justify-center items-center gap-4 text-[11px] font-mono text-[#1c1b19]/60">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#1d4ed8]" /> Legally Binding Digital Signature
            </span>
            <span className="hidden sm:inline opacity-30">•</span>
            <span className="flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-[#1d4ed8]" /> PDF Copy Sent Upon Completion
            </span>
          </div>
        </div>

        {/* 3. The Core Element: Responsive Iframe Wrapper */}
        <div className="w-full bg-white border-2 border-[#1c1b19] shadow-[6px_6px_0px_0px_#1c1b19] relative flex flex-col">
          
          {/* Top Vintage Dossier Bar */}
          <div className="w-full bg-[#1c1b19] text-[#f9f7f2] px-4 py-2.5 flex items-center justify-between border-b border-[#1c1b19] select-none">
            <div className="flex items-center gap-2 font-mono text-xs tracking-wider uppercase font-bold">
              <span className="w-2.5 h-2.5 bg-[#e2a13b] inline-block"></span>
              <span>Dossier: Form AGR-2026 // Skool Growth Ops</span>
            </div>
            <div className="font-mono text-[10px] text-[#f9f7f2]/60 uppercase tracking-widest hidden sm:block">
              Signatures: Electronic / eIDAS & ESIGN Compliant
            </div>
          </div>

          {/* Loading Indicator while iframe initializes */}
          {!iframeLoaded && (
            <div className="w-full py-16 flex flex-col items-center justify-center gap-3 bg-[#f9f7f2]/40">
              <div className="w-6 h-6 border-2 border-[#1c1b19] border-t-transparent animate-spin"></div>
              <p className="font-mono text-xs uppercase tracking-widest text-[#1c1b19]/70">
                Loading Secure Agreement Document...
              </p>
            </div>
          )}

          {/* The Embed Iframe Container */}
          <div className="w-full relative bg-white">
            <iframe
              src={tallyUrl}
              data-tally-src={tallyUrl}
              width="100%"
              height="100%"
              title="Strategic Partnership Agreement"
              className="w-full min-h-[900px] md:min-h-[1100px] border-0"
              style={{ width: "100%", minHeight: "900px", border: 0 }}
              onLoad={() => {
                setIframeLoaded(true);
                // @ts-expect-error Tally global
                if (window.Tally) {
                  // @ts-expect-error Tally global
                  window.Tally.loadEmbeds();
                }
              }}
              loading="lazy"
            />
          </div>

          {/* Footer Security Watermark */}
          <div className="bg-[#f9f7f2] border-t-2 border-[#1c1b19] px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] font-mono text-[#1c1b19]/60">
            <div className="flex items-center gap-1.5">
              <Lock className="w-3 h-3 text-[#1c1b19]" />
              <span>CONFIDENTIAL TRANSMISSION — ALL RIGHTS RESERVED</span>
            </div>
            <div className="tracking-widest uppercase">
              GROWTH OPERATOR MOROCCO
            </div>
          </div>

        </div>

        {/* Extra Security & Assurance Note */}
        <div className="mt-8 flex items-start gap-3 max-w-xl text-left px-4 py-3 bg-[#1c1b19]/5 border border-[#1c1b19]/20 text-[11px] font-serif text-[#1c1b19]/70">
          <AlertCircle className="w-4 h-4 text-[#1c1b19] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            By signing above, both parties commit to the outlined scope, revenue share terms, and operational milestones. An automatic timestamped receipt and countersigned agreement will be dispatched to your email immediately.
          </p>
        </div>

      </main>

      {/* 4. Minimal Footer (Logo & Copyright only - No Booking CTAs) */}
      <footer className="w-full bg-[#1c1b19] text-[#f9f7f2] border-t-2 border-[#1c1b19] py-8 px-4 md:px-8 mt-12">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-2.5">
            {!logoError ? (
              <img 
                src="/gz_logo.png" 
                alt="GZ Logo" 
                className="h-6 w-auto object-contain brightness-0 invert opacity-90"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-6 h-6 flex items-center justify-center border border-[#f9f7f2] font-mono font-bold text-[10px] bg-[#1c1b19] text-[#f9f7f2]">
                GZ
              </div>
            )}
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#f9f7f2]">
              ZAK / Growth Operator
            </span>
          </div>

          <p className="text-[10px] font-mono text-[#f9f7f2]/50 uppercase tracking-wider text-center sm:text-right">
            © {currentYear} Zak. Strategic Growth Operations. All rights reserved.
          </p>

        </div>
      </footer>

    </div>
  );
}
