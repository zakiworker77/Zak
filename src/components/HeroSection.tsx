import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, CheckCircle2, TrendingUp } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-[92vh] bg-[#f9f7f2] flex flex-col justify-center items-center px-4 overflow-hidden pt-28 pb-20 border-b-2 border-[#1c1b19]">
      
      {/* Editorial physical background lines - like a ledger or newspaper column */}
      <div className="absolute inset-x-0 top-1/4 h-[1px] bg-[#1c1b19]/5 pointer-events-none"></div>
      <div className="absolute inset-x-0 bottom-1/4 h-[1px] bg-[#1c1b19]/5 pointer-events-none"></div>
      <div className="absolute left-1/12 inset-y-0 w-[1px] bg-[#1c1b19]/5 pointer-events-none hidden lg:block"></div>
      <div className="absolute right-1/12 inset-y-0 w-[1px] bg-[#1c1b19]/5 pointer-events-none hidden lg:block"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-10">
        
        {/* Anti-Slop elegant typewriter badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 border-2 border-[#1c1b19] bg-[#f9f7f2] text-xs font-mono font-bold uppercase tracking-widest text-[#1c1b19] shadow-[3px_3px_0px_0px_#1c1b19]"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b1392b] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#b1392b]"></span>
          </span>
          MEMORANDUM: ELITE PARTNERSHIP IN MOROCCO
        </motion.div>

        {/* Huge bold display headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black font-serif text-[#1c1b19] tracking-tight leading-[1.02]"
        >
          Stop Leaving Your <br />
          <span className="underline decoration-[#b1392b] decoration-4 underline-offset-8 decoration-wavy">
            Community Wealth
          </span> on the Table.
        </motion.h1>

        {/* Polished Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[#1c1b19]/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-serif italic"
        >
          We partner with elite Moroccan Fitness Coaches to turn follower attention into automated <strong className="text-[#1c1b19] font-black font-mono not-italic bg-yellow-100 px-1 py-0.5">20,000+ MAD/month</strong> recurring communities on Skool. We fund the tech, we manage the members, we close the DMs. <strong className="text-[#b1392b] underline">Zero upfront costs.</strong>
        </motion.p>

        {/* Call to Actions with Letterpress Shadows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <a
            href="#audit"
            className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#1c1b19] text-[#f9f7f2] hover:bg-[#b1392b] hover:text-[#f9f7f2] transition-all font-mono font-bold uppercase tracking-wider text-sm border-2 border-[#1c1b19] shadow-[4px_4px_0px_0px_rgba(28,27,25,0.2)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_rgba(28,27,25,0.2)] w-full sm:w-auto"
          >
            Request Free Funnel Audit
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#calculator"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent hover:bg-[#1c1b19] hover:text-[#f9f7f2] transition-all text-[#1c1b19] font-mono font-bold uppercase tracking-wider text-sm border-2 border-[#1c1b19] w-full sm:w-auto shadow-[4px_4px_0px_0px_rgba(28,27,25,0.1)]"
          >
            Calculate MRR Potential
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
            <ShieldCheck className="w-4 h-4 text-[#b1392b] shrink-0" />
            0 MAD SETUP FEE
          </span>
          <span className="text-[#1c1b19]/30 hidden sm:inline">|</span>
          <span className="flex items-center gap-1.5 font-bold uppercase">
            <CheckCircle2 className="w-4 h-4 text-[#b1392b] shrink-0" />
            DONE-FOR-YOU TECH
          </span>
          <span className="text-[#1c1b19]/30 hidden sm:inline">|</span>
          <span className="flex items-center gap-1.5 font-bold uppercase">
            <TrendingUp className="w-4 h-4 text-[#b1392b] shrink-0" />
            DM CLOSING INCLUDED
          </span>
        </motion.div>

      </div>
    </div>
  );
}
