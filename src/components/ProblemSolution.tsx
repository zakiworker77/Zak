import { motion } from "motion/react";
import { XCircle, CheckCircle2, AlertTriangle, Flame, ShieldCheck, HeartHandshake } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function ProblemSolution() {
  const { lang } = useLanguage();

  const content = {
    tag: {
      en: "// THE BOTTLENECK ANALYSIS",
      darija: "// TA7LIL AL-AWDA9 W L'PROBLEMS",
      fr: "// ANALYSE DU BOTTLENECK"
    },
    title: {
      en: (
        <>
          Answering WhatsApp DMs is <br className="hidden sm:inline" />
          <span className="text-[#0055ff] underline decoration-[#0055ff] decoration-wavy decoration-2">
            Burning You Out 🔥
          </span>
        </>
      ),
      darija: (
        <>
          L'Jawab 3la WhatsApp DMs <br className="hidden sm:inline" />
          <span className="text-[#0055ff] underline decoration-[#0055ff] decoration-wavy decoration-2 underline-offset-8">
            Kay-diye3 Lik We9tek w Se7tek 🔥
          </span>
        </>
      ),
      fr: (
        <>
          Répondre aux DMs WhatsApp <br className="hidden sm:inline" />
          <span className="text-[#0055ff] underline decoration-[#0055ff] decoration-wavy decoration-2">
            est en train de vous épuiser 🔥
          </span>
        </>
      )
    },
    subtitle: {
      en: "Stop trading endless hours for single-payment clients. There is a much smarter, automated way to monetize your Moroccan fitness audience.",
      darija: "Baraka matdya3 wa9tak m3a l'Clients . Kayna tari9a dkia w automated bzaf bach tndem l'Clients ou leads dyalok.",
      fr: "Arrêtez d'échanger des heures interminables contre des l'Clients à paiement unique. Il existe un moyen plus intelligent et automatisé de monétiser votre audience."
    },
    caseOld: {
      en: "CASE: OLD WAY",
      darija: "CASE: TARI9A L'9DIMA",
      fr: "CAS : L'ANCIENNE MÉTHODE"
    },
    titleOld: {
      en: "WhatsApp Manual Hustle",
      darija: "Manual Hustle f WhatsApp",
      fr: "Le Hustle Manuel sur WhatsApp"
    },
    descOld: {
      en: "Moroccan fitness creators struggle with the overhead of low-ticket manual plans. If you are locked into this pattern, you own a stressful daily job, not a scalable business model:",
      darija: "L'Coaches Sportifs f lmaghrib kaimrdou b l'ktra dyal sda3 rass m3a l'plans l'rkhas. Ila knti b9iti hna, rak khdam khdma s3iba machi business kairbe7:",
      fr: "Les l'Coaches Sportifs marocains souffrent de la surcharge des plans manuels à bas prix. Si vous êtes bloqué dans ce schéma, vous possédez un travail quotidien stressant :"
    },
    caseNew: {
      en: "CASE: NEW MODEL",
      darija: "CASE: L'MODEL L'JDID",
      fr: "CAS : LE NOUVEAU MODÈLE"
    },
    titleNew: {
      en: "Recurring Skool Communities",
      darija: "Recurring Communities f Skool",
      fr: "Communautés Récurrentes sur Skool"
    },
    descNew: {
      en: "We design a tailored high-ticket ecosystem leveraging your current audience. We restructure everything so you command automated monthly recurring payments:",
      darija: "Kan-khel9o l'Ecosystem khass bik kay-staghlo l'audience dyalk l'7ali. Kan9ado kolchi bach twelli ddekhel monthly recurring revenue b tari9a sahla:",
      fr: "Nous concevons un l'Ecosystem haut de gamme sur mesure tirant parti de votre audience actuelle. Nous restructurons tout pour obtenir des revenus mensuels récurrents :"
    },
    metricOld: {
      en: "METRIC: 95% OPERATIONS, 5% CONTENT",
      darija: "METRIC: 95% L'OPERATIONS, 5% L'CONTENT",
      fr: "MÉTRIQUE : 95% D'OPÉRATIONS, 5% DE CONTENU"
    },
    statusOld: {
      en: "STRESS CONSTRAINED",
      darija: "M7DOUD B L'STRESS",
      fr: "LIMITÉ PAR LE STRESS"
    },
    metricNew: {
      en: "METRIC: 5% CONTENT, 95% FREEDOM",
      darija: "METRIC: 5% L'CONTENT, 95% FREEDOM",
      fr: "MÉTRIQUE : 5% DE CONTENU, 95% DE LIBERTÉ"
    },
    statusNew: {
      en: "OPERATIONAL AUTOMATION",
      darija: "L'AUTOMATION KAMLAA",
      fr: "AUTOMATISATION OPÉRATIONNELLE"
    },
    bannerTag: {
      en: "PARTNERSHIP MEMORANDUM",
      darija: "MEMORANDUM DYAL L'PARTNERSHIP",
      fr: "MÉMORANDUM DE PARTENARIAT"
    },
    bannerText: {
      en: "I design the backend, configure the tech systems, and handle DM sales directly.",
      darija: "Ana n9add l'Backend, n-configuri systems dyal l'Tech, w n-clowsi l'nas f l'DMs directly.",
      fr: "Je conçois le l'Backend, configure les systèmes de l'Tech et gère directement les ventes dans les l'DMs."
    }
  };

  const activeContent = {
    tag: content.tag[lang] || content.tag.darija,
    title: content.title[lang] || content.title.darija,
    subtitle: content.subtitle[lang] || content.subtitle.darija,
    caseOld: content.caseOld[lang] || content.caseOld.darija,
    titleOld: content.titleOld[lang] || content.titleOld.darija,
    descOld: content.descOld[lang] || content.descOld.darija,
    caseNew: content.caseNew[lang] || content.caseNew.darija,
    titleNew: content.titleNew[lang] || content.titleNew.darija,
    descNew: content.descNew[lang] || content.descNew.darija,
    metricOld: content.metricOld[lang] || content.metricOld.darija,
    statusOld: content.statusOld[lang] || content.statusOld.darija,
    metricNew: content.metricNew[lang] || content.metricNew.darija,
    statusNew: content.statusNew[lang] || content.statusNew.darija,
    bannerTag: content.bannerTag[lang] || content.bannerTag.darija,
    bannerText: content.bannerText[lang] || content.bannerText.darija
  };

  const problems = [
    {
      id: "prob-1",
      tag: "[1/3]",
      icon: <Flame className="w-5 h-5 text-[#0055ff]" />,
      title: lang === "en" ? "Answering WhatsApp DMs 24/7" : lang === "fr" ? "Répondre aux DMs WhatsApp 24/7" : "L'jawab 3la l'DMs f WhatsApp 24/7",
      isBlueHighlight: false,
      desc: lang === "en" 
        ? "Spending hours recording voice notes, sending bank transfer details, and chasing clients for payments."
        : lang === "fr"
        ? "Passer des heures à enregistrer des messages vocaux, envoyer des coordonnées bancaires et relancer les clients."
        : "Kadi3 swaye3 f l'Voice Notes, tsifat l'RIB w bank transfer info, w ttsnna l'Clients bach ikhlsso."
    },
    {
      id: "prob-2",
      tag: "[2/3]",
      icon: <AlertTriangle className="w-5 h-5 text-[#0055ff]" />,
      title: lang === "en" ? "Selling PDFs is a Trap. 🪤" : lang === "fr" ? "Vendre des PDFs est un Piège. 🪤" : "Selling PDFs is a Trap. 🪤",
      isBlueHighlight: true,
      desc: lang === "en" 
        ? "Ktbdel mjhoud kbir bach tjib client ykhless 200 DH mrra w7da w ymchi. This creates burnout."
        : lang === "fr"
        ? "Vous dépensez une énergie folle pour obtenir un client qui paie 200 DH une seule fois. Cela crée un burnout immédiat."
        : "Ktbdel mjhoud kbir bach tjib client ykhless 200 DH mrra w7da w ymchi. This creates burnout."
    },
    {
      id: "prob-3",
      tag: "[3/3]",
      icon: <XCircle className="w-5 h-5 text-[#0055ff]" />,
      title: lang === "en" ? "Trading 100% Time for Money" : lang === "fr" ? "Échanger 100% de son temps" : "Katbi3 l'wa9t b l'flouss",
      isBlueHighlight: false,
      desc: lang === "en" 
        ? "If you get sick, take a day off, or stop posting on Instagram, your business income immediately drops to zero."
        : lang === "fr"
        ? "Si vous tombez malade, prenez un jour de congé ou arrêtez de publier, vos revenus tombent immédiatement à zéro."
        : "Ila mrdi wla khditi nhar fabor wla 7besti l'Instagram, l'madkhoul dyalk kaihbet l' zero f l'blassa."
    }
  ];

  const solutions = [
    {
      id: "sol-1",
      icon: <ShieldCheck className="w-5 h-5 text-[#1c1b19]" />,
      title: lang === "en" ? "DFY Tech Backend & Setup" : lang === "fr" ? "Configuration l'Backend Clé en main" : "L'Tech Backend & Setup 3lina (DFY)",
      desc: lang === "en" 
        ? "I fully configure your Skool community, record modules, and integrate Moroccan payment options."
        : lang === "fr"
        ? "Je configure entièrement votre communauté Skool, enregistre les modules et intègre les paiements marocains."
        : "Kan-configuriw l'Community dyalk f Skool, n9ado l'Modules, w ndiro Moroccan checkout options (CIH, Attijari...)."
    },
    {
      id: "sol-2",
      icon: <CheckCircle2 className="w-5 h-5 text-[#1c1b19]" />,
      title: lang === "en" ? "Automated Community Funnel" : lang === "fr" ? "L'Funnel de l'Community Automatisé" : "L'Funnel dyal l'Community Automated",
      desc: lang === "en" 
        ? "I turn your Instagram traffic into active, recurring community subscribers. Consistent monthly paydays."
        : lang === "fr"
        ? "Je transforme votre trafic Instagram en abonnés actifs et récurrents. Des revenus stables chaque mois."
        : "Kan-7ewwlo l'Instagram traffic dyalk l' members nachitine f l'Community kay-khlsso l'ichtirak monthly."
    },
    {
      id: "sol-3",
      icon: <HeartHandshake className="w-5 h-5 text-[#1c1b19]" />,
      title: lang === "en" ? "DM Sales & Closers" : lang === "fr" ? "Ventes dans les DMs & Closers" : "L'Sales & DM Closing",
      desc: lang === "en" 
        ? "I jump into your DMs to answer inquiries and convert warm leads into recurring paying community members."
        : lang === "fr"
        ? "Je m'occupe de vos DMs pour répondre aux questions et convertir les prospects en membres récurrents."
        : "Kandkhlo m3ak f l'DMs directly bach n-jawabou nas w n-closiw les leads ywelliw paying members."
    }
  ];

  return (
    <div id="problem-solution" className="w-full py-24 px-4 bg-[#fbf9f4] border-b-2 border-[#1c1b19] relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-20">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1d4ed8] block mb-2">{activeContent.tag}</span>
          <h2 className="text-3xl md:text-5xl font-black font-serif text-[#1c1b19] tracking-tight leading-none">
            {activeContent.title}
          </h2>
          <p className="text-[#1c1b19]/70 mt-5 text-sm md:text-base max-w-2xl mx-auto font-mono">
            {activeContent.subtitle}
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Problem Card - Red Accent Paper */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#fffdfa] p-8 md:p-10 rounded-none border-2 border-[#1c1b19] shadow-[5px_5px_0px_0px_#1d4ed8] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="p-2 border-2 border-[#1c1b19] bg-[#fbf9f4]">
                  <XCircle className="w-6 h-6 text-[#1d4ed8]" />
                </span>
                <div>
                  <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#1d4ed8]">{activeContent.caseOld}</span>
                  <h3 className="text-xl md:text-2xl font-black font-serif text-[#1c1b19] mt-0.5">{activeContent.titleOld}</h3>
                </div>
              </div>

              <p className="text-[#1c1b19]/80 text-sm mb-8 leading-relaxed font-serif italic">
                {activeContent.descOld}
              </p>

              <div className="space-y-6">
                {problems.map((p) => (
                  <div 
                    key={p.id} 
                    className={`p-4 border transition-all ${
                      p.isBlueHighlight 
                        ? "border-2 border-[#0055ff] bg-blue-50/40 shadow-[3px_3px_0px_0px_#0055ff]" 
                        : "border-[#1c1b19]/15 bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#1c1b19]/60">{p.tag}</span>
                        <div className="p-1 border border-[#1c1b19]/20 bg-white">
                          {p.icon}
                        </div>
                      </div>
                      {p.isBlueHighlight && (
                        <span className="font-mono text-[10px] text-[#0055ff] uppercase font-bold tracking-wider">
                          Instagram Post Identity
                        </span>
                      )}
                    </div>
                    <div>
                      <h4 className={`leading-tight ${
                        p.isBlueHighlight 
                          ? "text-xl font-black font-serif text-[#0055ff]" 
                          : "text-base font-bold font-serif text-[#1c1b19]"
                      }`}>
                        {p.title}
                      </h4>
                      <p className="text-[#1c1b19]/80 text-sm mt-2 leading-relaxed font-sans font-medium">
                        {p.desc}
                      </p>
                    </div>
                    {p.isBlueHighlight && (
                      <div className="mt-3 pt-2 border-t border-[#0055ff]/15 flex justify-end">
                        <span className="text-[10px] font-mono font-bold text-[#0055ff]/80">@grow.withzak</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-[#1c1b19]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-[#1d4ed8] font-bold gap-2">
              <span>{activeContent.metricOld}</span>
              <span className="uppercase text-xs bg-blue-100 px-2 py-0.5 border border-[#1d4ed8]">{activeContent.statusOld}</span>
            </div>
          </motion.div>

          {/* Solution Card - Yellow Accent Paper */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#fefce8] p-8 md:p-10 rounded-none border-2 border-[#1c1b19] shadow-[5px_5px_0px_0px_#1c1b19] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="p-2 border-2 border-[#1c1b19] bg-[#fbf9f4]">
                  <CheckCircle2 className="w-6 h-6 text-[#1c1b19]" />
                </span>
                <div>
                  <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#1c1b19]">{activeContent.caseNew}</span>
                  <h3 className="text-xl md:text-2xl font-black font-serif text-[#1c1b19] mt-0.5">{activeContent.titleNew}</h3>
                </div>
              </div>

              <p className="text-[#1c1b19]/80 text-sm mb-8 leading-relaxed font-serif italic">
                {activeContent.descNew}
              </p>

              <div className="space-y-8">
                {solutions.map((s) => (
                  <div key={s.id} className="flex gap-4 items-start">
                    <div className="mt-1 shrink-0 p-1.5 border border-[#1c1b19]/30 bg-[#fbf9f4]">
                      {s.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-bold font-serif text-[#1c1b19]">{s.title}</h4>
                      <p className="text-[#1c1b19]/70 text-sm mt-1 leading-relaxed font-serif">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-[#1c1b19]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-[#1c1b19] font-bold gap-2">
              <span>{activeContent.metricNew}</span>
              <span className="bg-green-100 border border-green-700 text-green-800 px-2.5 py-0.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-700 animate-pulse"></span>
                {activeContent.statusNew}
              </span>
            </div>
          </motion.div>

        </div>

        {/* Visual summary bridge banner (Stamped Envelope/Bespoke Dossier Box) */}
        <div className="mt-16 p-8 rounded-none border-2 border-dashed border-[#1c1b19] bg-white text-center relative overflow-hidden">
          <span className="text-xs font-mono font-bold text-[#1d4ed8] uppercase tracking-widest block mb-1">{activeContent.bannerTag}</span>
          <p className="text-lg text-[#1c1b19] font-serif font-black italic max-w-2xl mx-auto">
            "{activeContent.bannerText} <span className="bg-yellow-100 px-1.5">{lang === "en" ? "You only focus on making high-quality coaching content." : lang === "fr" ? "Vous vous concentrez uniquement sur la création de contenu." : "Nta rkz ghi 3la khl9 l'Content dyal l'coaching."}</span>"
          </p>
        </div>

      </div>
    </div>
  );
}
