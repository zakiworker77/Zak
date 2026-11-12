import { useState, useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { 
  Sparkles, 
  Terminal, 
  CheckCircle2, 
  TrendingUp, 
  Layers
} from "lucide-react";
import { useLanguage } from "../LanguageContext";

interface WordData {
  text: string;
  isHighlight: boolean;
  isAccent: boolean;
}

export default function ScrollManifestoSection() {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  // Dedicated ref for the scroll-linked sticky reveal container
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Gamified Level console state (Level 01 - Level 03)
  const [activeLevel, setActiveLevel] = useState<number>(1);

  // English manifesto words
  const enWords: WordData[] = [
    { text: "Most", isHighlight: false, isAccent: false },
    { text: "elite", isHighlight: false, isAccent: false },
    { text: "fitness", isHighlight: false, isAccent: false },
    { text: "coaches", isHighlight: false, isAccent: false },
    { text: "in", isHighlight: false, isAccent: false },
    { text: "Morocco", isHighlight: false, isAccent: false },
    { text: "never", isHighlight: false, isAccent: false },
    { text: "fail", isHighlight: false, isAccent: false },
    { text: "because", isHighlight: false, isAccent: false },
    { text: "they", isHighlight: false, isAccent: false },
    { text: "lack", isHighlight: false, isAccent: false },
    { text: "passion", isHighlight: false, isAccent: false },
    { text: "or", isHighlight: false, isAccent: false },
    { text: "training", isHighlight: false, isAccent: false },
    { text: "knowledge.", isHighlight: false, isAccent: false },
    { text: "They", isHighlight: false, isAccent: false },
    { text: "fail", isHighlight: false, isAccent: false },
    { text: "because", isHighlight: false, isAccent: false },
    { text: "they", isHighlight: false, isAccent: false },
    { text: "are", isHighlight: false, isAccent: false },
    { text: "trapped", isHighlight: false, isAccent: false },
    { text: "in", isHighlight: false, isAccent: false },
    { text: "the", isHighlight: false, isAccent: false },
    { text: "daily", isHighlight: false, isAccent: false },
    { text: "chaos", isHighlight: false, isAccent: false },
    { text: "of", isHighlight: false, isAccent: false },
    { text: "200", isHighlight: true, isAccent: false },
    { text: "WhatsApp", isHighlight: false, isAccent: true },
    { text: "voice", isHighlight: false, isAccent: false },
    { text: "notes", isHighlight: false, isAccent: false },
    { text: "for", isHighlight: false, isAccent: false },
    { text: "a", isHighlight: false, isAccent: false },
    { text: "measly", isHighlight: false, isAccent: false },
    { text: "400 MAD", isHighlight: true, isAccent: false },
    { text: "one-time", isHighlight: false, isAccent: false },
    { text: "plan.", isHighlight: false, isAccent: false },
    { text: "That", isHighlight: false, isAccent: false },
    { text: "is", isHighlight: false, isAccent: false },
    { text: "why", isHighlight: false, isAccent: false },
    { text: "at", isHighlight: false, isAccent: false },
    { text: "GROWWITHZAK,", isHighlight: false, isAccent: true },
    { text: "we", isHighlight: false, isAccent: false },
    { text: "replace", isHighlight: false, isAccent: false },
    { text: "the", isHighlight: false, isAccent: false },
    { text: "manual", isHighlight: false, isAccent: false },
    { text: "hustle", isHighlight: false, isAccent: false },
    { text: "with", isHighlight: false, isAccent: false },
    { text: "an", isHighlight: false, isAccent: false },
    { text: "automated", isHighlight: false, isAccent: true },
    { text: "recurring", isHighlight: false, isAccent: true },
    { text: "Skool", isHighlight: false, isAccent: true },
    { text: "community", isHighlight: false, isAccent: false },
    { text: "engine.", isHighlight: false, isAccent: false },
    { text: "Your", isHighlight: false, isAccent: false },
    { text: "transformation", isHighlight: false, isAccent: true },
    { text: "starts", isHighlight: false, isAccent: false },
    { text: "in", isHighlight: false, isAccent: false },
    { text: "your", isHighlight: false, isAccent: false },
    { text: "business", isHighlight: false, isAccent: false },
    { text: "backend.", isHighlight: true, isAccent: false },
  ];

  // Moroccan Darija manifesto words
  const darijaWords: WordData[] = [
    { text: "Aghelabiyyat", isHighlight: false, isAccent: false },
    { text: "l'coaches", isHighlight: false, isAccent: false },
    { text: "f", isHighlight: false, isAccent: false },
    { text: "l'Maghrib", isHighlight: false, isAccent: false },
    { text: "ma-kay-fchloch", isHighlight: false, isAccent: false },
    { text: "7it", isHighlight: false, isAccent: false },
    { text: "ma-3ndhomch", isHighlight: false, isAccent: false },
    { text: "l'khibra", isHighlight: false, isAccent: false },
    { text: "ola", isHighlight: false, isAccent: false },
    { text: "l'passion.", isHighlight: false, isAccent: false },
    { text: "Kay-fchlo", isHighlight: false, isAccent: false },
    { text: "7it", isHighlight: false, isAccent: false },
    { text: "ma7bousin", isHighlight: false, isAccent: false },
    { text: "f", isHighlight: false, isAccent: false },
    { text: "l'hustle", isHighlight: false, isAccent: false },
    { text: "l'manual", isHighlight: false, isAccent: false },
    { text: "dyal", isHighlight: false, isAccent: false },
    { text: "200", isHighlight: true, isAccent: false },
    { text: "audio", isHighlight: false, isAccent: false },
    { text: "f", isHighlight: false, isAccent: false },
    { text: "WhatsApp", isHighlight: false, isAccent: true },
    { text: "kol", isHighlight: false, isAccent: false },
    { text: "nhar", isHighlight: false, isAccent: false },
    { text: "3la", isHighlight: false, isAccent: false },
    { text: "9bel", isHighlight: false, isAccent: false },
    { text: "400 DH", isHighlight: true, isAccent: false },
    { text: "f", isHighlight: false, isAccent: false },
    { text: "chhar.", isHighlight: false, isAccent: false },
    { text: "Hna", isHighlight: false, isAccent: false },
    { text: "fin", isHighlight: false, isAccent: false },
    { text: "kan-dekhlo", isHighlight: false, isAccent: false },
    { text: "f", isHighlight: false, isAccent: false },
    { text: "GROWWITHZAK:", isHighlight: false, isAccent: true },
    { text: "kan-7ewwlo", isHighlight: false, isAccent: false },
    { text: "had", isHighlight: false, isAccent: false },
    { text: "l'fawda", isHighlight: false, isAccent: false },
    { text: "l'system", isHighlight: false, isAccent: true },
    { text: "automated", isHighlight: false, isAccent: true },
    { text: "f", isHighlight: false, isAccent: false },
    { text: "Skool", isHighlight: false, isAccent: true },
    { text: "kay-dkhel", isHighlight: false, isAccent: false },
    { text: "l'MRR", isHighlight: true, isAccent: false },
    { text: "kol", isHighlight: false, isAccent: false },
    { text: "chhar", isHighlight: false, isAccent: false },
    { text: "bla", isHighlight: false, isAccent: false },
    { text: "stress.", isHighlight: false, isAccent: false },
    { text: "L'Transformation", isHighlight: false, isAccent: true },
    { text: "l'7aqiqiya", isHighlight: false, isAccent: true },
    { text: "kat-bda", isHighlight: false, isAccent: false },
    { text: "mn", isHighlight: false, isAccent: false },
    { text: "l'backend.", isHighlight: true, isAccent: false },
  ];

  const words = isEn ? enWords : darijaWords;

  // Track scroll strictly within the tall sticky container
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"],
  });

  // Calculate percentage of reveal for progress badge
  const progressPercent = useTransform(scrollYProgress, [0.05, 0.85], [0, 100]);

  const levels = isEn
    ? [
        {
          level: "01/03",
          title: "WE AUDIT & MAP",
          tag: "REWARD: CLEAR BACKEND ROADMAP",
          desc: "We analyze your audience, current 1-on-1 bottlenecks, and identify the exact curriculum that converts cold followers into loyal paying community members.",
          status: "DIAGNOSTIC LOCKED",
        },
        {
          level: "02/03",
          title: "WE BUILD & GATETEK",
          tag: "REWARD: AUTOMATED SKOOL PLATFORM",
          desc: "We configure your Skool classroom, leaderboard gamification, automated onboarding workflows, and Moroccan/international payment gates. Zero code needed from you.",
          status: "INFRASTRUCTURE READY",
        },
        {
          level: "03/03",
          title: "WE SCALE & SPLIT 50/50",
          tag: "REWARD: RECURRING MONTHLY MRR",
          desc: "We run the DM closing scripts, manage member retention, and optimize monthly renewals. You deliver the fitness coaching—we handle the business backend.",
          status: "PASSIVE OPERATIONS LIVE",
        },
      ]
    : [
        {
          level: "01/03",
          title: "KAN-DIRU L'AUDIT W L'MAPPING",
          tag: "REWARD: KHARIYTA WAD7A L'BACKEND",
          desc: "Kan-7elllo l'audience dyalk, l'moshkil dyal WhatsApp DMs, w kan-3zlo l'curriculum l'mounasib li ghay-kheli l'followers y-khelso f'Skool kol chher.",
          status: "DIAGNOSTIC LOCKED",
        },
        {
          level: "02/03",
          title: "KAN-BNEW L'SKOOL ECOSYSTEM",
          tag: "REWARD: PLATFORM AUTOMATED 100%",
          desc: "Kan-9ado l'Classroom, l'Leaderboard gamification, l'onboarding automated, w payment gateway (CMI / Stripe). Ma-kat-9iss 7etta ster dyal code.",
          status: "INFRASTRUCTURE READY",
        },
        {
          level: "03/03",
          title: "KAN-SCALIW W N-9ASMO 50/50",
          tag: "REWARD: MAD MRR RECURRING KOL CHHER",
          desc: "Kan-khdmo 3la closing dyal DMs, kan-7afdo 3la l'members, w kan-dobllo l'MRR. Nta dir l'coaching w sports—w 7na 3lina l'business backend kaml.",
          status: "PASSIVE OPERATIONS LIVE",
        },
      ];

  return (
    <section 
      id="manifesto" 
      className="w-full bg-[#f9f7f2] border-b-2 border-[#1c1b19] relative"
    >
      {/* Editorial background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1c1b19_1px,transparent_1px)] [background-size:28px_28px] opacity-5 pointer-events-none"></div>

      {/* Part 1: Sticky Scroll-Reveal Section (The original smooth style that scrolls at the user's pace) */}
      <div 
        ref={scrollContainerRef}
        className="relative h-[220vh] w-full"
      >
        <div className="sticky top-20 md:top-28 w-full max-w-5xl mx-auto px-4 py-8">
          
          {/* Section Header */}
          <div className="text-center space-y-2 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 border border-[#1c1b19] bg-white text-[11px] font-mono font-bold uppercase tracking-widest text-[#1c1b19] shadow-[2px_2px_0px_0px_#1c1b19]">
              <Layers className="w-3.5 h-3.5 text-[#1d4ed8]" />
              <span>{isEn ? "// THE MANIFESTO // SCROLL REVEAL" : "// L'MANIFESTO // سكرولي باش تقرا"}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black font-serif text-[#1c1b19] tracking-tight">
              {isEn 
                ? "Transformation Starts in Your Backend." 
                : "L'Bedya d'l'MRR Kat-bda mn l'Backend."}
            </h2>

            <p className="text-xs md:text-sm font-mono text-[#1c1b19]/70 max-w-lg mx-auto flex items-center justify-center gap-2">
              <span>{isEn ? "Scroll down to reveal each word at your own pace" : "هبط بالسكرول باش تشوف كيفاش السيستم كيتبنا كلمة بكلمة"}</span>
              <span className="inline-block animate-bounce">↓</span>
            </p>
          </div>

          {/* Main Manifesto Card */}
          <div className="p-6 sm:p-8 md:p-12 border-2 border-[#1c1b19] bg-white shadow-[6px_6px_0px_0px_#1c1b19] relative">
            
            {/* Top Status Bar */}
            <div className="flex flex-wrap justify-between items-center gap-3 text-[10px] md:text-xs font-mono border-b border-[#1c1b19]/15 pb-4 mb-6 text-[#1c1b19]/70">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 bg-[#1d4ed8] rounded-full animate-pulse"></span>
                <span className="font-bold uppercase tracking-wider text-[#1c1b19]">
                  {isEn ? "SCROLL-LINKED REVEAL // LIVE" : "SCROLL PROGRESS // كمل السكرول"}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-[#1c1b19]/50 uppercase hidden sm:inline">
                  {words.length} {isEn ? "WORDS" : "KALIMA"}
                </span>
                <div className="w-20 sm:w-28 h-2 bg-neutral-100 border border-[#1c1b19]/20 overflow-hidden">
                  <motion.div 
                    className="h-full bg-[#1d4ed8]"
                    style={{
                      width: useTransform(scrollYProgress, [0.05, 0.85], ["0%", "100%"]),
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Word-by-Word Scroll Highlight Display */}
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-[2.2rem] font-serif font-black leading-[1.45] tracking-tight py-2 min-h-[170px] md:min-h-[220px] select-text">
              {words.map((word, index) => {
                // Calibrate range across scroll travel [0.05 to 0.85]
                // Each word has an overlapping window (1.8x step) so transitions are ultra-smooth
                const total = words.length;
                const start = 0.05 + (index / total) * 0.78;
                const end = Math.min(0.92, start + (1 / total) * 1.8);

                return (
                  <WordItem
                    key={index}
                    text={word.text}
                    isHighlight={word.isHighlight}
                    isAccent={word.isAccent}
                    range={[start, end]}
                    progress={scrollYProgress}
                  />
                );
              })}
            </div>

            {/* Footer Signature */}
            <div className="mt-8 pt-4 border-t border-[#1c1b19]/15 flex flex-col sm:flex-row justify-between sm:items-center gap-2 text-xs font-mono">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 border border-[#1c1b19] bg-[#f9f7f2] flex items-center justify-center font-bold text-[10px]">
                  GZ
                </div>
                <div>
                  <span className="font-bold text-[#1c1b19]">Zak</span>
                  <span className="text-[#1c1b19]/50 ml-1.5">// Growth Operator for Fitness Creators</span>
                </div>
              </div>

              <div className="text-[10px] text-[#1c1b19]/50 uppercase tracking-widest font-mono">
                GROWWITHZAK • SKOOL SYSTEMS
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Part 2: Gamified Process Console (Level 01 - Level 03) */}
      <div className="max-w-5xl mx-auto px-4 pb-20 md:pb-28 relative z-10">
        <div className="border-2 border-[#1c1b19] bg-[#121110] text-[#f9f7f2] p-5 md:p-8 shadow-[6px_6px_0px_0px_#1d4ed8]">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#f9f7f2]/15 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-[#1d4ed8] animate-pulse"></div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#f9f7f2]">
                PROJECT.BACKEND // LEVEL {levels[activeLevel - 1].level}
              </span>
            </div>

            {/* Level selection tabs */}
            <div className="flex items-center gap-1.5 font-mono text-xs">
              {[1, 2, 3].map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setActiveLevel(lvl)}
                  className={`px-3 py-1 text-[11px] font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                    activeLevel === lvl
                      ? "bg-[#1d4ed8] text-white border-[#1d4ed8] shadow-[2px_2px_0px_0px_#ffffff]"
                      : "bg-[#1c1b19] text-[#f9f7f2]/60 border-[#f9f7f2]/20 hover:text-white hover:border-[#f9f7f2]"
                  }`}
                >
                  LVL 0{lvl}
                </button>
              ))}
            </div>
          </div>

          {/* Gamified Card Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left Column: Reward & Strategy Details */}
            <div className="md:col-span-8 space-y-4">
              <div className="text-[10px] font-mono font-bold text-[#1d4ed8] uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{levels[activeLevel - 1].tag}</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-serif font-black tracking-tight text-[#f9f7f2]">
                {levels[activeLevel - 1].title}
              </h3>

              {/* Text Description Box */}
              <div className="min-h-[72px] text-xs md:text-sm font-mono text-[#f9f7f2]/90 leading-relaxed bg-black/40 p-4 border border-[#f9f7f2]/10">
                <p>{levels[activeLevel - 1].desc}</p>
              </div>

              {/* Status footer */}
              <div className="flex items-center gap-2 text-[10px] font-mono text-[#f9f7f2]/50">
                <CheckCircle2 className="w-3 h-3 text-[#1d4ed8]" />
                <span>STATUS: {levels[activeLevel - 1].status}</span>
              </div>
            </div>

            {/* Right Column: Isometric Building Blocks Animation */}
            <div className="md:col-span-4 flex flex-col items-center justify-center p-6 border border-[#f9f7f2]/15 bg-black/30 relative">
              <div className="text-[9px] font-mono text-[#f9f7f2]/40 uppercase tracking-widest mb-4">
                BACKEND ARCHITECTURE
              </div>

              {/* Stacked Building Blocks */}
              <div className="flex flex-col-reverse items-center gap-1.5 w-24">
                {[1, 2, 3].map((block) => (
                  <motion.div
                    key={block}
                    initial={false}
                    animate={{
                      opacity: block <= activeLevel ? 1 : 0.2,
                      scale: block <= activeLevel ? 1 : 0.95,
                      backgroundColor: block <= activeLevel ? "#1d4ed8" : "#2a2927",
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-7 border border-[#f9f7f2]/30 flex items-center justify-center font-mono text-[10px] font-bold text-white shadow-[2px_2px_0px_0px_#000000]"
                  >
                    <span>BLOCK 0{block}</span>
                  </motion.div>
                ))}
              </div>

              {/* Progress gauge */}
              <div className="w-full mt-6 space-y-1.5">
                <div className="flex justify-between text-[9px] font-mono text-[#f9f7f2]/60">
                  <span>SYSTEM BUILD</span>
                  <span>{Math.round((activeLevel / 3) * 100)}%</span>
                </div>
                <div className="h-1.5 w-full bg-[#1c1b19] border border-[#f9f7f2]/20 overflow-hidden">
                  <div
                    className="h-full bg-[#1d4ed8] transition-all duration-300"
                    style={{ width: `${(activeLevel / 3) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

// Individual Word Component with progressive scroll-driven opacity
function WordItem({
  text,
  isHighlight,
  isAccent,
  range,
  progress,
}: {
  text: string;
  isHighlight: boolean;
  isAccent: boolean;
  range: [number, number];
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);

  let styleClasses = "text-[#1c1b19]";
  if (isAccent) {
    styleClasses = "text-[#1d4ed8] font-black underline decoration-[#1d4ed8]/40 decoration-2 underline-offset-4";
  } else if (isHighlight) {
    styleClasses = "text-[#b1392b] font-black";
  }

  return (
    <motion.span
      style={{ opacity }}
      className={`inline-block mr-[0.28em] my-[0.06em] font-serif font-black ${styleClasses}`}
    >
      {text}
    </motion.span>
  );
}
