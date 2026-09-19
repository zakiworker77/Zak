import { motion } from "motion/react";
import { Users, Crown } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function AscensionModel() {
  const { lang } = useLanguage();

  const content = {
    sectionTitle: {
      en: "The High-Ticket Ascension Model",
      darija: (
        <span dir="rtl" className="inline-block text-right sm:text-center w-full">
          كيفاش تزيد فـ الجودة وتسكيلي لـ <span dir="ltr" className="inline-block font-sans">High-Ticket</span> 📈
        </span>
      ),
      fr: "Le Modèle d'Ascension High-Ticket"
    },
    sectionSub: {
      en: "Solve the ultimate dilemma: Protecting your time while multiplying client success",
      darija: (
        <span dir="rtl" className="inline-block text-right sm:text-center w-full font-serif">
          كيفاش تحمي وقتك وفي نفس الوقت كتضرب النتايج د الكليان فـ 10
        </span>
      ),
      fr: "Résolvez le dilemme ultime : Préserver votre temps tout en démultipliant la réussite de vos clients"
    },
    step1Title: {
      en: "Step 1 (The Foundation): The Skool Community",
      darija: (
        <span dir="rtl" className="inline-block text-right w-full font-serif">
          الكوميونيتي = جودة كثر، وقت أقل
        </span>
      ),
      fr: "Étape 1 (La Fondation) : La Communauté Skool"
    },
    step1Desc: {
      en: "Deliver world-class results at scale. The community provides the daily accountability, step-by-step videos, and brotherhood they need. Better results, 10% of your time.",
      darija: (
        <span dir="rtl" className="block text-right leading-relaxed font-serif">
          بزاف كيسحاب ليهم الكوميونيتي كطيح من الجودة د الكوتشينغ. العكس!{" "}
          <span dir="ltr" className="inline-block font-sans font-semibold text-[#1d4ed8]">The community</span>{" "}
          كتعطيهم{" "}
          <span dir="ltr" className="inline-block font-sans font-semibold text-[#1d4ed8]">accountability</span>{" "}
          يومية، فيديوهات مسجلة، وتجاوب سريع. الكليان كيجيب{" "}
          <span dir="ltr" className="inline-block font-sans font-semibold text-[#1d4ed8]">results</span>{" "}
          أحسن، وأنت كتخدم غير 10% من الوقت.
        </span>
      ),
      fr: "Offrez des résultats exceptionnels à grande échelle. La communauté fournit le suivi quotidien, les vidéos étape par étape et l'entraide fraternelle dont ils ont besoin. De meilleurs résultats, en y passant seulement 10 % de votre temps."
    },
    step1Badge: {
      en: "FOUNDATIONAL SCALE",
      darija: (
        <span dir="rtl" className="font-serif font-bold text-[10px] tracking-normal normal-case">
          الأساس د لـ <span dir="ltr" className="font-mono font-bold tracking-wider text-[9px] uppercase">AUTOMATION</span>
        </span>
      ),
      fr: "ÉCHELLE DE FONDATION"
    },
    step2Title: {
      en: "Step 2 (The Ascension): High-Ticket 1-on-1",
      darija: (
        <span dir="rtl" className="inline-block text-right w-full font-serif">
          الـ <span dir="ltr" className="inline-block font-sans">One-to-One</span> كيولي VIP 👑
        </span>
      ),
      fr: "Étape 2 (L'Ascension) : Le 1-on-1 High-Ticket"
    },
    step2Desc: {
      en: "You never stop 1-on-1 coaching. Instead, your community acts as a pool of ultra-hot leads. You only accept 5 VIP clients a month, but you charge 3x your old price because your time is now exclusive.",
      darija: (
        <span dir="rtl" className="block text-right leading-relaxed font-serif">
          ماعمرك غادي توقف الـ{" "}
          <span dir="ltr" className="inline-block font-sans font-semibold text-yellow-300">1-on-1 coaching</span>.
          الكوميونيتي ديالك غاتولي بحال واحد الفلتر{" "}
          <span dir="ltr" className="inline-block font-sans font-semibold text-yellow-300">(Pool of hot leads)</span>.
          غاتولي تخدم غير مع 5 ديال لي كليان فـ الشهر، ولكن غاتـ{" "}
          <span dir="ltr" className="inline-block font-sans font-semibold text-yellow-300">charge 3x</span>{" "}
          الثمن القديم، حيت وقتك غيولي غالي و{" "}
          <span dir="ltr" className="inline-block font-sans font-semibold text-yellow-300">Exclusive</span>.
        </span>
      ),
      fr: "Vous n'arrêtez jamais le coaching individuel. À la place, votre communauté sert de vivier de prospects ultra qualifiés. Vous n'acceptez que 5 clients VIP par mois, mais vous facturez 3x votre ancien prix car votre temps est désormais exclusif."
    },
    step2Badge: {
      en: "ELITE EXCLUSIVITY",
      darija: (
        <span dir="rtl" className="font-serif font-bold text-[10px] tracking-normal normal-case">
          النخبة و <span dir="ltr" className="font-mono font-bold tracking-wider text-[9px] uppercase">EXCLUSIVE</span>
        </span>
      ),
      fr: "EXCLUSIVITÉ ÉLITE"
    }
  };

  const activeContent = {
    sectionTitle: content.sectionTitle[lang] || content.sectionTitle.darija,
    sectionSub: content.sectionSub[lang] || content.sectionSub.darija,
    step1Title: content.step1Title[lang] || content.step1Title.darija,
    step1Desc: content.step1Desc[lang] || content.step1Desc.darija,
    step1Badge: content.step1Badge[lang] || content.step1Badge.darija,
    step2Title: content.step2Title[lang] || content.step2Title.darija,
    step2Desc: content.step2Desc[lang] || content.step2Desc.darija,
    step2Badge: content.step2Badge[lang] || content.step2Badge.darija
  };

  return (
    <div id="ascension" className="w-full py-24 px-4 bg-[#fbf9f4] border-b-2 border-[#1c1b19] relative">
      {/* Subtle background ledger pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1c1b19_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.02] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block px-3.5 py-1 border border-[#1c1b19] bg-white text-xs font-mono font-bold uppercase tracking-wider">
            {lang === "en" ? "// HIGH-TICKET ASCENSION" : lang === "fr" ? "// LE MODÈLE D'ASCENSION" : "// T'TLI3 L'VALUE"}
          </div>
          <h2 className="text-3xl md:text-5xl font-black font-serif text-[#1c1b19] tracking-tight leading-tight">
            {activeContent.sectionTitle}
          </h2>
          <p className="text-sm font-serif text-[#1c1b19]/60 max-w-2xl mx-auto">
            {activeContent.sectionSub}
          </p>
        </div>

        {/* Staircase Step-by-Step Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch relative">
          
          {/* STEP 1: The Foundation */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border-2 border-[#1c1b19] p-8 sm:p-10 shadow-[4px_4px_0px_0px_#1c1b19] relative flex flex-col justify-between"
          >
            {/* Top accent label - conditionally styled to preserve Arabic cursive ligatures */}
            <div className={`absolute top-0 right-8 -translate-y-1/2 bg-[#1c1b19] text-white px-3 py-1 text-center whitespace-nowrap flex items-center justify-center ${
              lang === "darija" ? "" : "text-[9px] font-mono font-bold tracking-widest uppercase"
            }`}>
              {activeContent.step1Badge}
            </div>

            <div className="space-y-6">
              {/* Icon & Step Number */}
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-12 h-12 border-2 border-[#1c1b19] bg-[#eff6ff] flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-[#1d4ed8]" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#1d4ed8] block tracking-widest">STEP 01 // FOUNDATION</span>
                  <h3 className="text-xl font-black font-serif text-[#1c1b19] leading-tight mt-0.5">
                    {activeContent.step1Title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <div className="text-sm font-serif leading-relaxed text-[#1c1b19]/80">
                {activeContent.step1Desc}
              </div>
            </div>

            {/* Step Bottom Details */}
            <div className="mt-8 pt-6 border-t border-dashed border-[#1c1b19]/10 flex justify-between items-center text-[10px] font-mono uppercase font-bold text-[#1c1b19]/50">
              <span>Time Required: ~10%</span>
              <span className="text-[#1d4ed8]">Scalable System</span>
            </div>
          </motion.div>

          {/* STEP 2: High-Ticket Ascension */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#1c1b19] border-2 border-[#1c1b19] p-8 sm:p-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] relative flex flex-col justify-between text-[#f9f7f2]"
          >
            {/* Top accent label - conditionally styled to preserve Arabic cursive ligatures */}
            <div className={`absolute top-0 right-8 -translate-y-1/2 bg-[#1d4ed8] text-white px-3 py-1 text-center whitespace-nowrap flex items-center justify-center ${
              lang === "darija" ? "" : "text-[9px] font-mono font-bold tracking-widest uppercase"
            }`}>
              {activeContent.step2Badge}
            </div>

            <div className="space-y-6">
              {/* Icon & Step Number */}
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-12 h-12 border-2 border-[#f9f7f2] bg-[#fefce8] flex items-center justify-center shrink-0">
                  <Crown className="w-6 h-6 text-[#1c1b19]" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-mono font-bold uppercase text-yellow-300 block tracking-widest">STEP 02 // ASCENSION</span>
                  <h3 className="text-xl font-black font-serif text-[#f9f7f2] leading-tight mt-0.5">
                    {activeContent.step2Title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <div className="text-sm font-serif leading-relaxed text-[#f9f7f2]/80">
                {activeContent.step2Desc}
              </div>
            </div>

            {/* Step Bottom Details */}
            <div className="mt-8 pt-6 border-t border-dashed border-[#f9f7f2]/10 flex justify-between items-center text-[10px] font-mono uppercase font-bold text-[#f9f7f2]/50">
              <span>Time Required: ~90% exclusivity</span>
              <span className="text-yellow-300">3x Pricing Multiplier</span>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
