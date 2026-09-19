import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, CheckCircle2, TrendingUp } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function HeroSection() {
  const { lang } = useLanguage();

  const content = {
    badge: {
      en: "MEMORANDUM: ELITE PARTNERSHIP IN MOROCCO",
      darija: "MEMORANDUM: L'PARTNERSHIP L'PREMIUM F L'MAROC",
      fr: "MÉMORANDUM : L'PARTNERSHIP D'ÉLITE AU MAROC"
    },
    headline: {
      en: (
        <>
          Stop Leaving Your <br />
          <span className="underline decoration-[#1d4ed8] decoration-4 underline-offset-8 decoration-wavy">
            Community Wealth
          </span> on the Table.
        </>
      ),
      darija: (
        <span className="block leading-relaxed">
          <span dir="rtl" className="inline-block font-sans font-black">
            كتضيع وقتك فـ <span dir="ltr" className="inline-block font-serif font-black mx-1">WhatsApp DMs</span>؟
          </span>{" "}
          <br />
          <span className="underline decoration-[#1d4ed8] decoration-4 underline-offset-8 decoration-wavy font-serif italic text-3xl sm:text-5xl md:text-6xl">
            Stop leaving money
          </span>{" "}
          on the table.
        </span>
      ),
      fr: (
        <>
          Arrêtez de laisser la <br />
          <span className="underline decoration-[#1d4ed8] decoration-4 underline-offset-8 decoration-wavy">
            Richesse de votre Communauté
          </span> sur la table.
        </>
      )
    },
    subheadline: {
      en: (
        <>
          We partner with elite Moroccan Fitness Coaches to turn follower attention into automated <strong className="text-[#1c1b19] font-black font-mono not-italic bg-yellow-100 px-1 py-0.5">20,000+ MAD/month</strong> recurring communities on Skool. We fund the tech, we manage the members, we close the DMs. <strong className="text-[#1d4ed8] underline font-bold">Zero upfront costs.</strong>
        </>
      ),
      darija: (
        <>
          Kan diro l'Partnership m3a l'Coaches Sportifs f lmaghrib bach n7ewlo followers l' <strong className="text-[#1c1b19] font-black font-mono not-italic bg-yellow-100 px-1 py-0.5">Recurring Revenue</strong> with automated Skool Communities kadiyr <strong className="text-[#1c1b19] font-black font-mono not-italic bg-yellow-100 px-1 py-0.5">+20,000 DH/Mois</strong>. 7na kan ndiro tech job, kan manage-iw l'members, w kan closiw l'DMs. <strong className="text-[#1d4ed8] underline font-bold">Zero upfront costs.</strong>
        </>
      ),
      fr: (
        <>
          Nous nous associons aux meilleurs l'Coaches Sportifs marocains pour transformer l'attention de leurs abonnés en l'Recurring Communities automatisées sur Skool, générant <strong className="text-[#1c1b19] font-black font-mono not-italic bg-yellow-100 px-1 py-0.5">plus de 20 000 DH/mois</strong>. Nous finançons la tech, gérons les l'members et concluons les ventes par DM. <strong className="text-[#1d4ed8] underline font-bold">Zéro frais initiaux.</strong>
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
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1d4ed8] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1d4ed8]"></span>
          </span>
          {activeContent.badge}
        </motion.div>

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

        {/* Call to Actions with Letterpress Shadows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <a
            href="#audit"
            className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#1c1b19] text-[#f9f7f2] hover:bg-[#1d4ed8] hover:text-[#f9f7f2] transition-all font-mono font-bold uppercase tracking-wider text-sm border-2 border-[#1c1b19] shadow-[4px_4px_0px_0px_rgba(28,27,25,0.2)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_rgba(28,27,25,0.2)] w-full sm:w-auto"
          >
            {activeContent.btnAudit}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#calculator"
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

