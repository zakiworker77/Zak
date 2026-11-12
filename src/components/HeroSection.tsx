import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, CheckCircle2, TrendingUp, Play, Sparkles } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function HeroSection() {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  const content = {
    badge: {
      en: "MEMORANDUM: ELITE PARTNERSHIP IN MOROCCO",
      darija: "MEMORANDUM: L'PARTNERSHIP L'PREMIUM F L'MAGHRIB",
      fr: "MÉMORANDUM : L'PARTNERSHIP D'ÉLITE AU MAROC"
    },
    headline: {
      en: (
        <>
          Stop Leaving Your <br />
          <span className="text-[#0055ff] underline decoration-[#0055ff] decoration-4 underline-offset-8 decoration-wavy">
            Community Wealth
          </span> on the Table 💸
        </>
      ),
      darija: (
        <>
          Kat-diye3 We9tek f WhatsApp DMs? <br />
          <span className="text-[#0055ff] underline decoration-[#0055ff] decoration-4 underline-offset-8 decoration-wavy">
            Stop Leaving Money
          </span> on the Table 💸
        </>
      ),
      fr: (
        <>
          Arrêtez de laisser la <br />
          <span className="text-[#0055ff] underline decoration-[#0055ff] decoration-4 underline-offset-8 decoration-wavy">
            Richesse de votre Communauté
          </span> sur la table 💸
        </>
      )
    },
    subheadline: {
      en: (
        <>
          We partner with elite Moroccan Fitness Coaches to turn follower attention into automated <strong className="text-[#0055ff] font-black font-mono not-italic bg-blue-50/80 border border-[#0055ff]/20 px-1.5 py-0.5">20,000+ MAD/month</strong> recurring communities on Skool. We fund the tech, we manage the members, we close the DMs. <strong className="text-[#0055ff] underline font-bold">Zero upfront costs.</strong>
        </>
      ),
      darija: (
        <>
          Kan diro l'Partnership m3a l'Coaches Sportifs f lmaghrib bach n7ewlo followers l' <strong className="text-[#1c1b19] font-black font-mono not-italic bg-blue-50/80 px-1 py-0.5">Recurring Revenue</strong> with automated Skool Communities kadiyr <strong className="text-[#0055ff] font-black font-mono not-italic bg-blue-50/80 border border-[#0055ff]/20 px-1.5 py-0.5">+20,000 DH/Mois</strong>. 7na kan ndiro tech job, kan manage-iw l'members, w kan closiw l'DMs. <strong className="text-[#0055ff] underline font-bold">Zero upfront costs.</strong>
        </>
      ),
      fr: (
        <>
          Nous nous associons aux meilleurs l'Coaches Sportifs marocains pour transformer l'attention de leurs abonnés en l'Recurring Communities automatisées sur Skool, générant <strong className="text-[#0055ff] font-black font-mono not-italic bg-blue-50/80 border border-[#0055ff]/20 px-1.5 py-0.5">plus de 20 000 DH/mois</strong>. Nous finançons la tech, gérons les l'members et concluons les ventes par DM. <strong className="text-[#0055ff] underline font-bold">Zéro frais initiaux.</strong>
        </>
      )
    },
    btnAudit: {
      en: "Request Free Funnel Audit",
      darija: "Bghit l'Audit (Fabor)",
      fr: "Demander un Audit Gratuit"
    },
    btnCalc: {
      en: "Calculate MRR Potential",
      darija: "7seb l'MRR Potential dyalk",
      fr: "Calculer le Potentiel MRR"
    },
    feat1: {
      en: "0 MAD SETUP FEE",
      darija: "0 DH SETUP FEE (FABOR)",
      fr: "ZÉRO FRAIS D'INSTALLATION"
    },
    feat2: {
      en: "DONE-FOR-YOU TECH",
      darija: "DONE-FOR-YOU TECH LAUNCH",
      fr: "TECH CLÉ EN MAIN"
    },
    feat3: {
      en: "DM CLOSING INCLUDED",
      darija: "DM CLOSING M3ANA",
      fr: "CLOSING DM INCLUS"
    }
  };

  const activeContent = {
    badge: content.badge[lang] || content.badge.darija,
    headline: content.headline[lang] || content.headline.darija,
    subheadline: content.subheadline[lang] || content.subheadline.darija,
    btnAudit: content.btnAudit[lang] || content.btnAudit.darija,
    btnCalc: content.btnCalc[lang] || content.btnCalc.darija,
    feat1: content.feat1[lang] || content.feat1.darija,
    feat2: content.feat2[lang] || content.feat2.darija,
    feat3: content.feat3[lang] || content.feat3.darija
  };

  const scrollToId = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
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

  const heroPhrases = isEn
    ? [
        "AUTOMATED SKOOL PIPELINES",
        "+20,000 MAD/MO RECURRING MRR",
        "WE FUND TECH & CLOSE THE DMs",
        "50/50 REVENUE SHARE // 0 MAD SETUP",
      ]
    : [
        "SYSTEM AUTOMATED F SKOOL",
        "+20,000 DH/CHHAR MRR RECURRING",
        "7NA KAN-CLOSIW L'DMs W N-MANAGEW L'MEMBERS",
        "50/50 REVENUE SHARE // ZERO SETUP FEES",
      ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedChars, setTypedChars] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = heroPhrases[phraseIndex % heroPhrases.length];
    let speed = isDeleting ? 30 : 65;

    if (!isDeleting && typedChars === currentPhrase) {
      // Pause at full word
      const timeout = setTimeout(() => setIsDeleting(true), 1800);
      return () => clearTimeout(timeout);
    } else if (isDeleting && typedChars === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % heroPhrases.length);
      return;
    }

    const timer = setTimeout(() => {
      setTypedChars((prev) => {
        if (isDeleting) {
          return currentPhrase.substring(0, prev.length - 1);
        } else {
          return currentPhrase.substring(0, prev.length + 1);
        }
      });
    }, speed);

    return () => clearTimeout(timer);
  }, [typedChars, isDeleting, phraseIndex, isEn]);

  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full min-h-[92vh] bg-[#f9f7f2] flex flex-col justify-center items-center px-4 overflow-hidden pt-28 pb-20 border-b-2 border-[#1c1b19]">
      
      {/* Editorial physical background lines - like a ledger or newspaper column */}
      <div className="absolute inset-x-0 top-1/4 h-[1px] bg-[#1c1b19]/5 pointer-events-none"></div>
      <div className="absolute inset-x-0 bottom-1/4 h-[1px] bg-[#1c1b19]/5 pointer-events-none"></div>
      <div className="absolute left-1/12 inset-y-0 w-[1px] bg-[#1c1b19]/5 pointer-events-none hidden lg:block"></div>
      <div className="absolute right-1/12 inset-y-0 w-[1px] bg-[#1c1b19]/5 pointer-events-none hidden lg:block"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8 md:space-y-10">
        
        {/* Anti-Slop elegant typewriter badge + Live Typewriter Tag */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 border-2 border-[#1c1b19] bg-[#f9f7f2] text-xs font-mono font-bold uppercase tracking-widest text-[#1c1b19] shadow-[3px_3px_0px_0px_#1c1b19]"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1d4ed8] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1d4ed8]"></span>
            </span>
            {activeContent.badge}
          </motion.div>

          {/* Live Micro Typewriter Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1d4ed8]/10 border border-[#1d4ed8]/30 text-[#1d4ed8] font-mono text-[11px] font-bold uppercase tracking-wider"
          >
            <span className="text-[#1d4ed8] font-mono font-black">&gt;</span>
            <span className="font-mono min-h-[16px] inline-block">{typedChars}</span>
            <span className="inline-block w-1.5 h-3.5 bg-[#1d4ed8] animate-pulse"></span>
          </motion.div>
        </div>

        {/* Huge bold display headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black font-serif text-[#1c1b19] tracking-tight leading-[1.15]"
        >
          {activeContent.headline}
        </motion.h1>

        {/* Polished Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[#1c1b19]/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-serif italic"
        >
          {activeContent.subheadline}
        </motion.p>

        {/* Video Sales Letter (VSL) Container with Custom Branded Player & Play Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="w-full max-w-[800px] mx-auto pt-2 pb-1"
        >
          <div 
            className="w-full relative overflow-hidden bg-black border-2 border-[#1c1b19] group"
            style={{ 
              position: "relative", 
              paddingBottom: "56.25%", 
              height: 0, 
              borderRadius: "12px", 
              boxShadow: "0 10px 30px rgba(0, 85, 255, 0.25), 4px 4px 0px 0px #1c1b19" 
            }}
          >
            {isPlaying ? (
              <iframe 
                src="https://www.youtube.com/embed/WsFVWeUbJ8c?autoplay=1&rel=0&modestbranding=1&controls=1&showinfo=0&iv_load_policy=3" 
                style={{ 
                  position: "absolute", 
                  top: 0, 
                  left: 0, 
                  width: "100%", 
                  height: "100%", 
                  border: 0 
                }} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen 
                title="Zak - Skool Growth Operator VSL"
              />
            ) : (
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 w-full h-full p-0 m-0 border-0 text-left cursor-pointer select-none group/play focus:outline-none"
                aria-label="Play Masterclass Video"
              >
                {/* 1. Clean High-Res Thumbnail (Zero YouTube UI) */}
                <img
                  src="/vsl_thumbnail.jpg"
                  alt="Zak - Skool Masterclass Breakdown"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/play:scale-[1.02]"
                />

                {/* 2. Cinematic Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/60 transition-opacity duration-300 group-hover/play:from-black/75 group-hover/play:via-black/15" />

                {/* 3. Top Branded Bar (Replaces YouTube Header) */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10 pointer-events-none">
                  <div className="flex items-center gap-2 bg-[#1c1b19]/90 text-[#f9f7f2] backdrop-blur-md px-3 py-1.5 border border-white/20 text-[10px] md:text-xs font-mono tracking-wider uppercase shadow-md">
                    <span className="w-2 h-2 rounded-full bg-[#1d4ed8] animate-ping" />
                    <span className="font-bold">THE NEW MODEL // SKOOL MASTERCLASS</span>
                  </div>

                  <div className="hidden sm:flex items-center gap-1.5 bg-black/75 text-[#f9f7f2]/90 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono border border-white/15 uppercase">
                    <Sparkles className="w-3 h-3 text-[#38bdf8]" />
                    <span>PRIVATE BREAKDOWN</span>
                  </div>
                </div>

                {/* 4. Center Stage: Custom Branded Play Button In Our Style */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
                  {/* Outer Pulsing Glow Halo */}
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#1d4ed8]/35 blur-xl animate-pulse" />
                    
                    {/* The Play Button */}
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#1d4ed8] text-white flex items-center justify-center border-4 border-white shadow-[0_0_35px_rgba(29,78,216,0.9),4px_4px_0px_0px_#1c1b19] group-hover/play:scale-110 group-hover/play:bg-[#153eb5] transition-all duration-300">
                      <Play className="w-8 h-8 md:w-10 md:h-10 fill-white text-white ml-1.5 transition-transform group-hover/play:scale-110" />
                    </div>
                  </div>

                  {/* Brand Action Pill */}
                  <div className="mt-4 px-4 py-1.5 bg-[#1c1b19]/95 text-white border-2 border-white/80 font-mono text-xs uppercase tracking-widest font-black shadow-[3px_3px_0px_0px_#1d4ed8] group-hover/play:bg-[#1d4ed8] group-hover/play:border-[#1c1b19] transition-all">
                    {isEn ? "PLAY MASTERCLASS // FREE BREAKDOWN" : "TFERREJ F'L'MASTERCLASS // FABOR"}
                  </div>
                </div>

                {/* 5. Bottom Status Bar */}
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center z-10 pointer-events-none">
                  <div className="text-[10px] md:text-xs font-mono text-white/90 bg-black/80 backdrop-blur-md px-3 py-1 border border-white/15">
                    HD 1080P • NO YOUTUBE ADS
                  </div>

                  <div className="text-[10px] md:text-xs font-mono text-white/90 bg-black/80 backdrop-blur-md px-3 py-1 border border-white/15">
                    15 MIN INTENSIVE
                  </div>
                </div>
              </button>
            )}
          </div>
        </motion.div>

        {/* Call to Actions with Letterpress Shadows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <a
            href="/audit"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, "", "/audit");
              window.dispatchEvent(new PopStateEvent("popstate"));
            }}
            className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#1c1b19] text-[#f9f7f2] hover:bg-[#1d4ed8] hover:text-[#f9f7f2] transition-all font-mono font-bold uppercase tracking-wider text-sm border-2 border-[#1c1b19] shadow-[4px_4px_0px_0px_rgba(28,27,25,0.2)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_rgba(28,27,25,0.2)] w-full sm:w-auto"
          >
            {activeContent.btnAudit}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#calculator"
            onClick={(e) => scrollToId(e, "calculator")}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent hover:bg-[#1c1b19] hover:text-[#f9f7f2] transition-all text-[#1c1b19] font-mono font-bold uppercase tracking-wider text-sm border-2 border-[#1c1b19] w-full sm:w-auto shadow-[4px_4px_0px_0px_rgba(28,27,25,0.1)]"
          >
            {activeContent.btnCalc}
          </a>
        </motion.div>

        {/* Physical Divider & Clean Columns */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-xs font-mono text-[#1c1b19]/60 pt-8 border-t border-[#1c1b19]/10 max-w-lg mx-auto"
        >
          <span className="flex items-center gap-1.5 font-bold uppercase">
            <ShieldCheck className="w-4 h-4 text-[#1d4ed8] shrink-0" />
            {activeContent.feat1}
          </span>
          <span className="text-[#1c1b19]/30 hidden sm:inline">|</span>
          <span className="flex items-center gap-1.5 font-bold uppercase">
            <CheckCircle2 className="w-4 h-4 text-[#1d4ed8] shrink-0" />
            {activeContent.feat2}
          </span>
          <span className="text-[#1c1b19]/30 hidden sm:inline">|</span>
          <span className="flex items-center gap-1.5 font-bold uppercase">
            <TrendingUp className="w-4 h-4 text-[#1d4ed8] shrink-0" />
            {activeContent.feat3}
          </span>
        </motion.div>

      </div>
    </div>
  );
}

