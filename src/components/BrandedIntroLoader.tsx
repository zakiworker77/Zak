import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Sparkles, Shield, X, Compass } from "lucide-react";
import { useLanguage } from "../LanguageContext";

interface BrandedIntroLoaderProps {
  onComplete?: () => void;
  forceShow?: boolean;
  onClose?: () => void;
}

export default function BrandedIntroLoader({
  onComplete,
  forceShow = false,
  onClose,
}: BrandedIntroLoaderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [arrowLanded, setArrowLanded] = useState(false);
  const [progress, setProgress] = useState(0);
  const { lang } = useLanguage();
  const isEn = lang === "en";

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check if forceShow is enabled (e.g. preview trigger or manual click)
    if (forceShow) {
      setIsVisible(true);
      startAnimation();
      return;
    }

    // 1. Check if user explicitly asked to preview via query parameter: ?intro=1 or ?intro=true
    const urlParams = new URLSearchParams(window.location.search);
    const forceIntroParam = urlParams.get("intro") === "1" || urlParams.get("intro") === "true";

    // 2. Refresh / Reload Detection:
    // If the user refreshed the page (F5 / Cmd+R / browser reload button), do NOT show the intro!
    let isReload = false;
    try {
      const navEntries = performance.getEntriesByType("navigation");
      if (navEntries.length > 0) {
        const nav = navEntries[0] as PerformanceNavigationTiming;
        if (nav.type === "reload") {
          isReload = true;
        }
      } else if ((window.performance as any)?.navigation?.type === 1) {
        // Fallback for older browsers
        isReload = true;
      }
    } catch {
      // safe fallback
    }

    // 3. Check Session Storage:
    // If already seen in this session, never show it again (including on refresh)
    const hasSeenInSession = sessionStorage.getItem("gz_intro_viewed") === "true";

    if (!forceIntroParam) {
      if (isReload || hasSeenInSession) {
        // Guarantee session storage is marked so subsequent reloads stay clean
        sessionStorage.setItem("gz_intro_viewed", "true");
        if (onComplete) onComplete();
        return;
      }
    }

    // Check referrer to see if coming from social media (WhatsApp, Instagram, etc.) or external link
    const referrer = document.referrer ? document.referrer.toLowerCase() : "";
    const isSocialReferrer = 
      referrer.includes("instagram") ||
      referrer.includes("whatsapp") ||
      referrer.includes("facebook") ||
      referrer.includes("fb.com") ||
      referrer.includes("t.co") ||
      referrer.includes("twitter") ||
      referrer.includes("tiktok") ||
      referrer.includes("linkedin") ||
      referrer.includes("youtube") ||
      referrer.includes("linktr.ee") ||
      referrer.includes("android-app://");

    const hasRefParam = 
      urlParams.has("ref") || 
      urlParams.has("utm_source") || 
      urlParams.has("source") || 
      urlParams.has("igshid") || 
      urlParams.has("fbclid") ||
      urlParams.has("from");

    // Show when:
    // - explicitly requested with ?intro=1
    // - OR coming from social / external referrer
    // - OR first-time direct visit from a shared link (e.g. mobile link click where referrer might be empty)
    // Immediately mark as viewed so F5 / reload will NOT re-trigger it.
    sessionStorage.setItem("gz_intro_viewed", "true");
    setIsVisible(true);
    startAnimation();

    // Listen to Escape key to quickly skip
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleDismiss();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [forceShow]);

  const startAnimation = () => {
    // Arrow flies in and strikes center after 600ms
    const arrowTimer = setTimeout(() => {
      setArrowLanded(true);
    }, 650);

    // Fast progress bar countdown (approx 2.4s total)
    let current = 0;
    const interval = setInterval(() => {
      current += 4;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => {
          handleDismiss();
        }, 400);
      } else {
        setProgress(current);
      }
    }, 85);

    return () => {
      clearTimeout(arrowTimer);
      clearInterval(interval);
    };
  };

  const handleDismiss = () => {
    sessionStorage.setItem("gz_intro_viewed", "true");
    setIsVisible(false);
    if (onComplete) onComplete();
    if (onClose) onClose();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="gz-intro-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.04,
            filter: "blur(8px)",
            transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[99999] flex flex-col justify-between p-6 md:p-12 overflow-hidden select-none bg-[#05112e] text-white"
          style={{
            background: "radial-gradient(circle at 50% 45%, #1d4ed8 0%, #0c2363 45%, #030a1c 100%)",
          }}
        >
          {/* Ambient luminous glow & grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40"></div>
          
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl pointer-events-none animate-pulse"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-cyan-400/15 blur-3xl pointer-events-none"></div>

          {/* Top Header: Origin Tag & Skip Button */}
          <div className="relative z-20 flex justify-between items-center text-xs font-mono">
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/30 text-blue-200 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span className="tracking-widest uppercase text-[10px] md:text-xs font-semibold">
                {isEn ? "GROWTH OPERATOR PROTOCOL" : "PROTOCOLE // GROWWITHZAK"}
              </span>
            </div>

            <button
              onClick={handleDismiss}
              className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-cyan-400 text-white transition-all text-xs font-mono uppercase tracking-wider backdrop-blur-md cursor-pointer"
            >
              <span>{isEn ? "Skip" : "Doz l'Site"}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Center Stage: The Arrow Trajectory & GZ Logo Revelation */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center my-auto">
            
            {/* SVG Flight Path & The Animated Arrow sweeping across from the lower-left */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
              viewBox="0 0 1000 1000"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <linearGradient id="blueGlowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2" />
                  <stop offset="60%" stopColor="#60a5fa" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
                </linearGradient>

                <filter id="neonArrowGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* The dynamic swooping curve trajectory */}
              <motion.path
                d="M 50 900 Q 250 800 420 560 T 500 500"
                fill="none"
                stroke="url(#blueGlowGrad)"
                strokeWidth="4"
                strokeLinecap="round"
                filter="url(#neonArrowGlow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 1, 0.8] }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              />
            </svg>

            {/* Flying dynamic Arrow projectile coming from the opposite side (bottom-left) */}
            {!arrowLanded && (
              <motion.div
                initial={{ 
                  x: -320, 
                  y: 280, 
                  scale: 0.4, 
                  opacity: 0,
                  rotate: -35 
                }}
                animate={{ 
                  x: 0, 
                  y: 0, 
                  scale: 1.2, 
                  opacity: [0, 1, 1],
                  rotate: 0 
                }}
                transition={{ 
                  duration: 0.65, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="absolute z-30 pointer-events-none"
              >
                <div className="relative flex items-center justify-center">
                  {/* Glowing Arrow projectile */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-400 to-white flex items-center justify-center shadow-[0_0_40px_#38bdf8] animate-pulse">
                    <ArrowUpRight className="w-9 h-9 text-blue-900 stroke-[3]" />
                  </div>
                  {/* Motion streak trailing behind */}
                  <div className="absolute right-full top-1/2 -translate-y-1/2 w-48 h-2 bg-gradient-to-l from-white via-cyan-400/80 to-transparent blur-[2px]"></div>
                </div>
              </motion.div>
            )}

            {/* Shockwave ripple when arrow strikes */}
            {arrowLanded && (
              <motion.div
                initial={{ scale: 0.2, opacity: 1 }}
                animate={{ scale: 3.5, opacity: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="absolute w-44 h-44 rounded-full border-2 border-cyan-300 shadow-[0_0_50px_#38bdf8] pointer-events-none"
              />
            )}

            {/* GZ Logo & Brand Reveal */}
            <motion.div
              initial={{ scale: 0.4, opacity: 0 }}
              animate={arrowLanded ? { scale: 1, opacity: 1 } : { scale: 0.6, opacity: 0.3 }}
              transition={{ 
                duration: 0.6, 
                ease: [0.175, 0.885, 0.32, 1.275] 
              }}
              className="relative mb-6"
            >
              {/* Electric blue glow backing behind the logo */}
              <div className="absolute -inset-6 rounded-3xl bg-blue-500/30 blur-2xl"></div>

              {/* Logo Frame */}
              <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-3xl bg-white flex items-center justify-center shadow-[0_15px_45px_rgba(0,0,0,0.45),0_0_35px_rgba(59,130,246,0.6)] border-2 border-white/80 p-4">
                <img
                  src="/gz_logo.png"
                  alt="GZ Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(29,78,216,0.4)]"
                />

                {/* Animated Arrow Highlight over the logo's inner arrow */}
                {arrowLanded && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: [0, 1, 0.8, 1], scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 rounded-3xl ring-4 ring-cyan-400/60 pointer-events-none"
                  />
                )}
              </div>
            </motion.div>

            {/* Brand Typography */}
            <motion.div
              initial={{ y: 25, opacity: 0 }}
              animate={arrowLanded ? { y: 0, opacity: 1 } : { y: 25, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-2 max-w-lg mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/30 border border-blue-400/40 text-cyan-300 text-[11px] font-mono tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>SKOOL GROWTH OPERATOR</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white font-serif drop-shadow-[0_2px_15px_rgba(0,0,0,0.5)]">
                GROWWITHZAK
              </h1>

              <p className="text-xs md:text-sm font-mono text-blue-200/90 tracking-wider uppercase">
                {isEn 
                  ? "Scaling Elite Coaches & Communities // 50-50 Backend Partnership" 
                  : "L'Backend Infrastructure l'Coaches f L'Maghrib // Skool MRR"}
              </p>
            </motion.div>

            {/* High-tech progress indicator */}
            <div className="w-full max-w-xs md:max-w-sm mt-8 space-y-2">
              <div className="h-1.5 w-full bg-blue-950/80 rounded-full overflow-hidden border border-blue-400/30 p-0.5">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 to-white rounded-full shadow-[0_0_12px_#38bdf8]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex justify-between items-center text-[10px] font-mono text-blue-300/80">
                <span className="flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                  {progress < 40 
                    ? (isEn ? "CONNECTING..." : "L'BIDAYA DYAL L'OPERATOR...")
                    : progress < 80 
                    ? (isEn ? "CALIBRATING FUNNEL..." : "TAD9IQ L'COMMUNITY...")
                    : (isEn ? "SYSTEM READY" : "SYSTEM WJJED ✓")}
                </span>
                <span className="font-bold text-white font-mono">{progress}%</span>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Trust & Credentials */}
          <div className="relative z-20 flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] md:text-xs font-mono text-blue-200/60 pt-4 border-t border-blue-800/40">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-blue-200">
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                <span>ZERO UPFRONT FEES</span>
              </span>
              <span>•</span>
              <span>50/50 REVENUE SHARE</span>
              <span>•</span>
              <span>SKOOL SYSTEMS</span>
            </div>

            <div>
              <span>GROWWITHZAK.ONLINE © 2026</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
