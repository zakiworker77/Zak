import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight,
  Mail,
  Calendar,
  Clock,
  Users,
  Instagram
} from "lucide-react";
import { useLanguage } from "../LanguageContext";

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

interface QuizState {
  step: number;
  platform: string;
  followers: string;
  struggle: string;
  revenue: string;
  fullName: string;
  instagram: string;
  phone: string;
  selectedDate: string;
  selectedTime: string;
  bookingStep: "quiz" | "qualified" | "calendar" | "success";
}

export default function QualificationQuiz() {
  const { lang } = useLanguage();

  const [state, setState] = useState<QuizState>({
    step: 1,
    platform: "",
    followers: "",
    struggle: "",
    revenue: "",
    fullName: "",
    instagram: "",
    phone: "",
    selectedDate: "",
    selectedTime: "",
    bookingStep: "quiz",
  });

  // Current year/month is September 2026
  const availableDays = [
    { name: lang === "en" ? "Mon" : lang === "fr" ? "Lun" : "Etneen", date: "Sep 21", val: "Monday, Sept 21" },
    { name: lang === "en" ? "Tue" : lang === "fr" ? "Mar" : "Tlat", date: "Sep 22", val: "Tuesday, Sept 22" },
    { name: lang === "en" ? "Wed" : lang === "fr" ? "Mer" : "Arba", date: "Sep 23", val: "Wednesday, Sept 23" },
    { name: lang === "en" ? "Thu" : lang === "fr" ? "Jeu" : "Khamis", date: "Sep 24", val: "Thursday, Sept 24" },
    { name: lang === "en" ? "Fri" : lang === "fr" ? "Ven" : "Jomaa", date: "Sep 25", val: "Friday, Sept 25" },
    { name: lang === "en" ? "Sat" : lang === "fr" ? "Sam" : "Sevt", date: "Sep 26", val: "Saturday, Sept 26" },
  ];

  const availableTimes = [
    "10:00 AM (GMT+1)",
    "11:30 AM (GMT+1)",
    "02:00 PM (GMT+1)",
    "04:30 PM (GMT+1)",
    "06:00 PM (GMT+1)",
    "08:30 PM (GMT+1)",
  ];

  const handleSelectOption = (key: keyof QuizState, value: string, nextStep: number) => {
    setState(prev => ({
      ...prev,
      [key]: value,
      step: nextStep
    }));

    if (nextStep > 4) {
      // Transition to qualified screen
      setState(prev => ({
        ...prev,
        [key]: value,
        bookingStep: "qualified"
      }));
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!state.selectedDate || !state.selectedTime || !state.fullName || !state.instagram || !state.phone) {
      return;
    }
    setState(prev => ({
      ...prev,
      bookingStep: "success"
    }));
  };

  const getWhatsAppLink = () => {
    const text = `Hi Zak! 🚀 I just completed the Skool Community Audit on your website. 

Here are my qualified details:
👤 Name: ${state.fullName}
📸 Instagram: ${state.instagram}
📊 Platform: ${state.platform}
👥 Followers: ${state.followers}
⚠️ Struggle: ${state.struggle}
🎯 Revenue Target: ${state.revenue}

📅 Scheduled Free Funnel Audit slot: ${state.selectedDate} at ${state.selectedTime}. 
Let's turn my audience into community wealth!`;

    return `https://wa.me/212621520455?text=${encodeURIComponent(text)}`;
  };

  const q1Options = [
    { name: "Instagram Stories / Reels", val: "Instagram" },
    { name: "TikTok Videos / Lives", val: "TikTok" },
    { name: "YouTube Tutorials / Shorts", val: "YouTube" },
    { name: "Facebook Groups / Profile", val: "Facebook" },
  ];

  const q2Options = [
    { 
      name: lang === "en" ? "Micro creator (2k - 10k followers)" : lang === "fr" ? "Micro créateur (2k - 10k abonnés)" : "Micro-jomhour (2k - 10k followers)", 
      val: "2k - 10k" 
    },
    { 
      name: lang === "en" ? "Established (10k - 30k followers)" : lang === "fr" ? "Établi (10k - 30k abonnés)" : "Jomhour mtwasst (10k - 30k followers)", 
      val: "10k - 30k" 
    },
    { 
      name: lang === "en" ? "Pro coach (30k - 80k followers)" : lang === "fr" ? "Coach professionnel (30k - 80k abonnés)" : "Coaching kbir (30k - 80k followers)", 
      val: "30k - 80k" 
    },
    { 
      name: lang === "en" ? "Elite creator (80k+ followers)" : lang === "fr" ? "Créateur élite (80k+ abonnés)" : "Jomhour kbir bzzaf (+80k followers)", 
      val: "80k+" 
    },
  ];

  const q3Options = [
    { 
      name: lang === "en" 
        ? "Drowning in DMs manually sending bank account numbers & answering questions" 
        : lang === "fr"
        ? "Noyé dans les DM à envoyer les RIB et répondre aux questions manuellement"
        : "Ghare9 f l'DMs b tsifat rib bankaire w jwab 3la as'ila", 
      val: "WhatsApp DM chaos" 
    },
    { 
      name: lang === "en" 
        ? "Selling low ticket (200 MAD plans) and clients leave after one month" 
        : lang === "fr"
        ? "Vente à bas prix (200 DH) et les clients partent après un mois"
        : "Kabi3 coaching rkhiss (200 DH) w l'Clients kaimshiw f sh7r", 
      val: "Low client retention" 
    },
    { 
      name: lang === "en" 
        ? "Creating workout courses, doing sales, managing payments ALL on my own" 
        : lang === "fr"
        ? "Création de cours, ventes, gestion des paiements TOUT seul"
        : "Kansawb l'Program, sales, payments kolchi bo7di (Sda3 l'rass)", 
      val: "Solo tech & operations overload" 
    },
    { 
      name: lang === "en" 
        ? "Creating content is easy, but I have no idea how to convert followers into recurring buyers" 
        : lang === "fr"
        ? "Créer du contenu est facile, mais aucune idée de comment convertir en récurrent"
        : "Content sahl, walakin ma3rftch kifash nrejje3 l'Followers kaimou", 
      val: "Lack of funnel systems" 
    },
  ];

  const q4Options = [
    { 
      name: lang === "en" ? "15,000 MAD / Mo (Side Income)" : lang === "fr" ? "15 000 DH / Mois (Revenu secondaire)" : "15,000 DH / Sh7r (Madkhoul idafi)", 
      val: "15,000 MAD" 
    },
    { 
      name: lang === "en" ? "30,000 MAD / Mo (Full scale)" : lang === "fr" ? "30 000 DH / Mois (Plein temps)" : "30,000 DH / Sh7r (Khdma kamla)", 
      val: "30,000 MAD" 
    },
    { 
      name: lang === "en" ? "60,000 MAD / Mo (Community Empire)" : lang === "fr" ? "60 000 DH / Mois (Empire)" : "60,000 DH / Sh7r (Community kbira)", 
      val: "60,000 MAD" 
    },
    { 
      name: lang === "en" ? "100,000 MAD+ / Mo (Moroccan elite)" : lang === "fr" ? "+100 000 DH / Mois (Élite marocaine)" : "+100,000 DH / Sh7r (Nokhba dyal l'Maroc)", 
      val: "100,000+ MAD" 
    },
  ];

  const content = {
    panelTitle: {
      en: "Bespoke Partnership Audit",
      darija: "Audit d l'Partnership l'Khassa",
      fr: "Audit de Partenariat Sur Mesure"
    },
    panelSub: {
      en: "Qualify for Zak's 50/50 Growth Alignment",
      darija: "Chof wach mnasb m3a Taqssim 50/50 dyal Zak",
      fr: "Vérifiez votre éligibilité au partage 50/50 de Zak"
    },
    statusText: {
      en: `STATUS: STEP ${state.step} OF 4`,
      darija: `L'HALA: MARHALA ${state.step} MN 4`,
      fr: `STATUT : ÉTAPE ${state.step} SUR 4`
    },
    disclaimer: {
      en: "Responses are held on offline servers strictly to draft your custom operational blueprint.",
      darija: "Al'ajwiba dyalk f amman absolute bach n9ado customized operational blueprint.",
      fr: "Les réponses sont stockées de manière sécurisée pour concevoir votre plan d'action."
    },
    qualifiedTitle: {
      en: "Application Audit Qualified.",
      darija: "Al'Audit dyalk MQBOUL!",
      fr: "Audit de Candidature Qualifié !"
    },
    blueprintTitle: {
      en: "RECOGNIZED BLUEPRINT INPUTS:",
      darija: "AL'MOKHRAJAT AL'AUDIT SEJELNAHA:",
      fr: "DONNÉES DU PLAN D'ACTION RECONNUES :"
    },
    nicheClass: {
      en: "NICHE CLASS:",
      darija: "SINF COCHING:",
      fr: "NICHE DE COACHING :"
    },
    nicheVal: {
      en: "Fitness Coach Authority",
      darija: "Fitness Coach Authority",
      fr: "Autorité de Coach Fitness"
    },
    bottleneckLabel: {
      en: "CORE BOTTLENECK:",
      darija: "AL'MOCHIKIL AL'ASASSI:",
      fr: "OBSTACLE MAJEUR :"
    },
    revLabel: {
      en: "REVENUE TARGET:",
      darija: "HADAF AL'MADKHOUL:",
      fr: "OBJECTIF DE REVENU :"
    },
    qualifyDesc: {
      en: `Zak has modeled your metrics against top Moroccan communities. Your estimated audience size of ${state.followers} indicates high qualification margins for reliable recurring MRR.`,
      darija: `Zak 9add t7lil 3la 7sab l'metrics dyalk m3a top fitness communities f l'Maroc. L'jomhour dyalk d ${state.followers} kaimknk dkhl b madkhoul recurring MRR mzyan.`,
      fr: `Zak a modélisé vos données par rapport aux meilleures communautés de fitness au Maroc. Votre audience indique d'excellentes marges pour générer un MRR récurrent fiable.`
    },
    btnProceed: {
      en: "Proceed to Reserve Audit Slot",
      darija: "Kmmel bach tkhtar l'weqt dyal l'Audit",
      fr: "Réserver votre créneau d'Audit"
    },
    calendarTitle: {
      en: "Select Your Live Audit Slot",
      darija: "Khtar weqt l'Audit l'mobachir",
      fr: "Choisissez votre créneau d'Audit"
    },
    calendarSub: {
      en: "Reserve an offline strategy call directly on Zak's schedule.",
      darija: "Sejjel m3ana mokalama d strategy f schedule dyal Zak bo7di.",
      fr: "Réservez un appel stratégique directement dans l'agenda de Zak."
    },
    chooseDate: {
      en: "1. Choose strategy date",
      darija: "1. Khtar tarikh d l'Audit",
      fr: "1. Choisissez la date stratégique"
    },
    chooseTime: {
      en: "2. Choose time slot (GMT+1 Moroccan Time)",
      darija: "2. Khtar weqt (GMT+1 Moroccan Time)",
      fr: "2. Choisissez le créneau (GMT+1 Heure Maroc)"
    },
    confirmCreds: {
      en: "3. Confirm contact credentials",
      darija: "3. Takked mn l'm3loumat dyalk",
      fr: "3. Confirmez vos coordonnées"
    },
    fullName: {
      en: "Full Name",
      darija: "Al'Ism Al'Kamil",
      fr: "Nom Complet"
    },
    instaLabel: {
      en: "Instagram Handle",
      darija: "Instagram account (User)",
      fr: "Identifiant Instagram"
    },
    phoneLabel: {
      en: "WhatsApp Number (to receive the link)",
      darija: "Raqm WhatsApp (bach tsslet l'link)",
      fr: "Numéro WhatsApp (pour recevoir le lien)"
    },
    btnSubmit: {
      en: "Secure Booking & Blueprint Slot",
      darija: "Sejjel l'weqt w blueprint",
      fr: "Confirmer la réservation & le Plan d'Action"
    },
    successTitle: {
      en: "Slot Reserved.",
      darija: "Weqt dyalk m7jouz f l'aman.",
      fr: "Créneau Réservé."
    },
    receiptTitle: {
      en: "CONFIRMED AUDIT SCHEDULE:",
      darija: "WEQT AL'AUDIT L'MOU'AKKAD:",
      fr: "PLANNING D'AUDIT CONFIRMÉ :"
    },
    strategyDay: {
      en: "STRATEGY DAY:",
      darija: "YAWME AL'STRATEGY:",
      fr: "JOUR DE STRATÉGIE :"
    },
    timeWindow: {
      en: "TIME WINDOW:",
      darija: "AL'WEQT AL'MOU7ADAD:",
      fr: "CRÉNEAU HORAIRE :"
    },
    candidateLabel: {
      en: "CANDIDATE:",
      darija: "AL'COACH:",
      fr: "CANDIDAT :"
    },
    nextStepTitle: {
      en: "CRITICAL NEXT STEP:",
      darija: "AL'MARHALA L'HASSIMA AL'MOQBILA:",
      fr: "ÉTAPE SUIVANTE CRITIQUE :"
    },
    nextStepDesc: {
      en: "You must click the button below to submit your qualification data directly to Zak's WhatsApp to finalize your booking.",
      darija: "Khass drori t'cliki 3la l'boutona l't7t bach tssfet l'm3loumat dyal al'audit direct l'WhatsApp dyal Zak bach n-confirmiw.",
      fr: "Vous devez cliquer sur le bouton ci-dessous pour envoyer vos données de qualification directement à Zak sur WhatsApp afin de finaliser."
    },
    transmitBtn: {
      en: "Transmit Booking via WhatsApp",
      darija: "Ssfet l'Audit l'WhatsApp dyal Zak",
      fr: "Envoyer la réservation par WhatsApp"
    },
    resetQuiz: {
      en: "Reset Quiz",
      darija: "I3adat l'Ikhtibar",
      fr: "Réinitialiser le Quiz"
    }
  };

  const activeContent = {
    panelTitle: content.panelTitle[lang] || content.panelTitle.darija,
    panelSub: content.panelSub[lang] || content.panelSub.darija,
    statusText: content.statusText[lang] || content.statusText.darija,
    disclaimer: content.disclaimer[lang] || content.disclaimer.darija,
    qualifiedTitle: content.qualifiedTitle[lang] || content.qualifiedTitle.darija,
    blueprintTitle: content.blueprintTitle[lang] || content.blueprintTitle.darija,
    nicheClass: content.nicheClass[lang] || content.nicheClass.darija,
    nicheVal: content.nicheVal[lang] || content.nicheVal.darija,
    bottleneckLabel: content.bottleneckLabel[lang] || content.bottleneckLabel.darija,
    revLabel: content.revLabel[lang] || content.revLabel.darija,
    qualifyDesc: content.qualifyDesc[lang] || content.qualifyDesc.darija,
    btnProceed: content.btnProceed[lang] || content.btnProceed.darija,
    calendarTitle: content.calendarTitle[lang] || content.calendarTitle.darija,
    calendarSub: content.calendarSub[lang] || content.calendarSub.darija,
    chooseDate: content.chooseDate[lang] || content.chooseDate.darija,
    chooseTime: content.chooseTime[lang] || content.chooseTime.darija,
    confirmCreds: content.confirmCreds[lang] || content.confirmCreds.darija,
    fullName: content.fullName[lang] || content.fullName.darija,
    instaLabel: content.instaLabel[lang] || content.instaLabel.darija,
    phoneLabel: content.phoneLabel[lang] || content.phoneLabel.darija,
    btnSubmit: content.btnSubmit[lang] || content.btnSubmit.darija,
    successTitle: content.successTitle[lang] || content.successTitle.darija,
    receiptTitle: content.receiptTitle[lang] || content.receiptTitle.darija,
    strategyDay: content.strategyDay[lang] || content.strategyDay.darija,
    timeWindow: content.timeWindow[lang] || content.timeWindow.darija,
    candidateLabel: content.candidateLabel[lang] || content.candidateLabel.darija,
    nextStepTitle: content.nextStepTitle[lang] || content.nextStepTitle.darija,
    nextStepDesc: content.nextStepDesc[lang] || content.nextStepDesc.darija,
    transmitBtn: content.transmitBtn[lang] || content.transmitBtn.darija,
    resetQuiz: content.resetQuiz[lang] || content.resetQuiz.darija
  };

  const renderQuizStep = () => {
    switch (state.step) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <h3 className="text-xl md:text-2xl font-serif font-black text-[#1c1b19]">
              {lang === "en" ? "1. Where do you post your primary fitness content?" : lang === "fr" ? "1. Où publiez-vous votre contenu fitness principal ?" : "1. Fin ktt7 l'content dyal fitness dyalk ktr?"}
            </h3>
            <p className="text-xs font-serif text-[#1c1b19]/60">
              {lang === "en" ? "Select the channel where you have the highest community trust and engagement." : lang === "fr" ? "Sélectionnez le canal où vous avez le plus d'engagement." : "Khtar l'channel fin 3ndk jomhour kbir w engagement tal3."}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {q1Options.map(opt => (
                <button
                  key={opt.val}
                  type="button"
                  onClick={() => handleSelectOption("platform", opt.val, 2)}
                  className={`p-5 rounded-none border-2 text-left transition-all text-sm font-serif ${
                    state.platform === opt.val 
                      ? "border-[#1c1b19] bg-[#1c1b19] text-[#f9f7f2]" 
                      : "border-[#1c1b19]/25 hover:border-[#1c1b19] bg-white text-[#1c1b19]"
                  }`}
                >
                  <span className="flex justify-between items-center font-bold">
                    {opt.name}
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <h3 className="text-xl md:text-2xl font-serif font-black text-[#1c1b19]">
              {lang === "en" ? "2. What is your estimated total active follower size?" : lang === "fr" ? "2. Quelle est la taille estimée de votre audience active ?" : "2. Ch7al t9riban l'عدد d followers active dyalk?"}
            </h3>
            <p className="text-xs font-serif text-[#1c1b19]/60">
              {lang === "en" ? "We partner with coaches from micro-audiences up to large followings." : lang === "fr" ? "Nous collaborons avec tous types d'audiences actives." : "Kankhdmou m3a micro-audiences 7ta l'jomhour kbir bzzaf."}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {q2Options.map(opt => (
                <button
                  key={opt.val}
                  type="button"
                  onClick={() => handleSelectOption("followers", opt.val, 3)}
                  className={`p-5 rounded-none border-2 text-left transition-all text-sm font-serif ${
                    state.followers === opt.val 
                      ? "border-[#1c1b19] bg-[#1c1b19] text-[#f9f7f2]" 
                      : "border-[#1c1b19]/25 hover:border-[#1c1b19] bg-white text-[#1c1b19]"
                  }`}
                >
                  <span className="flex justify-between items-center font-bold">
                    {opt.name}
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <h3 className="text-xl md:text-2xl font-serif font-black text-[#1c1b19]">
              {lang === "en" ? "3. What is your absolute biggest bottleneck right now?" : lang === "fr" ? "3. Quel est votre plus grand obstacle actuellement ?" : "3. Chno l'mochkil l'kbir li m7bsek db?"}
            </h3>
            <p className="text-xs font-serif text-[#1c1b19]/60">
              {lang === "en" ? "Where are you burning out or losing potential community income?" : lang === "fr" ? "Où perdez-vous du temps ou de l'argent potentiel ?" : "Fin katmchi Tamara dyalk wla katkhssr l'madkhoul dyal l'community?"}
            </p>
            <div className="grid grid-cols-1 gap-4 mt-6">
              {q3Options.map(opt => (
                <button
                  key={opt.val}
                  type="button"
                  onClick={() => handleSelectOption("struggle", opt.val, 4)}
                  className={`p-5 rounded-none border-2 text-left transition-all text-sm font-serif ${
                    state.struggle === opt.val 
                      ? "border-[#1c1b19] bg-[#1c1b19] text-[#f9f7f2]" 
                      : "border-[#1c1b19]/25 hover:border-[#1c1b19] bg-white text-[#1c1b19]"
                  }`}
                >
                  <span className="flex justify-between items-center font-bold">
                    {opt.name}
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div
            key="step4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <h3 className="text-xl md:text-2xl font-serif font-black text-[#1c1b19]">
              {lang === "en" ? "4. What is your Monthly Recurring Revenue (MRR) goal?" : lang === "fr" ? "4. Quel est votre objectif de revenu récurrent mensuel (MRR) ?" : "4. Chno l'hadaf dyalk d l'madkhoul l'recurring (MRR)?"}
            </h3>
            <p className="text-xs font-serif text-[#1c1b19]/60">
              {lang === "en" ? "Be honest. What is the target that changes your coaching career?" : lang === "fr" ? "Soyez honnête. Quel objectif transforme votre carrière de coach ?" : "Koun sari7. Chno l'raqm li aibeddel karier d coaching dyalk?"}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {q4Options.map(opt => (
                <button
                  key={opt.val}
                  type="button"
                  onClick={() => handleSelectOption("revenue", opt.val, 5)}
                  className={`p-5 rounded-none border-2 text-left transition-all text-sm font-serif ${
                    state.revenue === opt.val 
                      ? "border-[#1c1b19] bg-[#1c1b19] text-[#f9f7f2]" 
                      : "border-[#1c1b19]/25 hover:border-[#1c1b19] bg-white text-[#1c1b19]"
                  }`}
                >
                  <span className="flex justify-between items-center font-bold">
                    {opt.name}
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div id="audit" className="w-full py-24 px-4 bg-[#fbf9f4] border-b-2 border-[#1c1b19] relative">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Quiz Outer Frame - Styled like a physical folder/dossier */}
        <div className="bg-white rounded-none border-2 border-[#1c1b19] shadow-[6px_6px_0px_0px_#1c1b19] p-6 sm:p-10 relative overflow-hidden">
          {/* Top binder style border index tabs */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-[#1c1b19]"></div>

          <AnimatePresence mode="wait">
            {state.bookingStep === "quiz" && (
              <motion.div
                key="quiz-mode"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b-2 border-[#1c1b19] pb-6 gap-4">
                  <div>
                    <h2 className="text-2xl font-black font-serif text-[#1c1b19]">{activeContent.panelTitle}</h2>
                    <p className="text-xs font-mono uppercase tracking-wider text-[#1d4ed8] font-bold mt-1">{activeContent.panelSub}</p>
                  </div>
                  <span className="px-3.5 py-1.5 border border-[#1c1b19] bg-[#fbf9f4] text-[#1c1b19] text-xs font-mono font-bold uppercase tracking-wider shrink-0">
                    {activeContent.statusText}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-[#1c1b19]/10 rounded-none h-1.5 overflow-hidden">
                  <div 
                    className="bg-[#1d4ed8] h-1.5 rounded-none transition-all duration-300" 
                    style={{ width: `${(state.step / 4) * 100}%` }}
                  ></div>
                </div>

                {/* Step Content */}
                <div className="py-6">
                  {renderQuizStep()}
                </div>

                {/* Footer disclaimer */}
                <div className="flex items-center gap-2.5 text-[#1c1b19]/50 text-xs mt-6 pt-4 border-t border-dashed border-[#1c1b19]/25 font-serif">
                  <CheckCircle2 className="w-4 h-4 text-[#1c1b19]/60 shrink-0" />
                  <span>{activeContent.disclaimer}</span>
                </div>
              </motion.div>
            )}

            {state.bookingStep === "qualified" && (
              <motion.div
                key="qualified-mode"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center space-y-8 py-6"
              >
                <div className="inline-flex p-4 border-2 border-[#1c1b19] bg-[#fefce8] text-[#1c1b19] mb-2 animate-pulse">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-serif text-[#1c1b19]">
                  {activeContent.qualifiedTitle}
                </h2>
                
                <div className="max-w-md mx-auto bg-[#fcfbf7] border-2 border-[#1c1b19] p-6 space-y-3 text-left text-xs font-mono">
                  <p className="border-b border-[#1c1b19]/10 pb-2 text-center text-[10px] font-bold text-[#1d4ed8] uppercase tracking-wider">
                    {activeContent.blueprintTitle}
                  </p>
                  <p className="flex justify-between">
                    <span className="text-[#1c1b19]/50">{activeContent.nicheClass}</span>
                    <strong className="text-[#1c1b19] uppercase">{activeContent.nicheVal}</strong>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-[#1c1b19]/50">{activeContent.bottleneckLabel}</span>
                    <strong className="text-[#1c1b19] uppercase">{state.struggle}</strong>
                  </p>
                  <p className="flex justify-between border-t border-dashed border-[#1c1b19]/15 pt-2">
                    <span className="text-[#1c1b19]/50">{activeContent.revLabel}</span>
                    <strong className="text-[#1d4ed8] font-bold">{state.revenue}/{lang === "en" ? "mo" : lang === "fr" ? "mois" : "sh7r"}</strong>
                  </p>
                </div>

                <p className="text-[#1c1b19]/70 text-sm max-w-lg mx-auto font-serif">
                  {activeContent.qualifyDesc}
                </p>
                
                <div className="pt-6">
                  <button
                    type="button"
                    onClick={() => setState(prev => ({ ...prev, bookingStep: "calendar" }))}
                    className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#1c1b19] bg-[#1c1b19] text-[#f9f7f2] hover:bg-transparent hover:text-[#1c1b19] transition-all font-mono font-bold uppercase tracking-widest text-xs shadow-[3px_3px_0px_0px_rgba(0,0,0,0.15)]"
                  >
                    {activeContent.btnProceed}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {state.bookingStep === "calendar" && (
              <motion.div
                key="calendar-mode"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="border-b-2 border-[#1c1b19] pb-6 text-center">
                  <h2 className="text-2xl font-black font-serif text-[#1c1b19]">{activeContent.calendarTitle}</h2>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#1c1b19]/60 mt-1">{activeContent.calendarSub}</p>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-8">
                  {/* Select Day */}
                  <div className="space-y-3">
                    <label className="text-xs uppercase font-mono font-bold tracking-wider text-[#1c1b19] flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#1d4ed8]" />
                      {activeContent.chooseDate}
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                      {availableDays.map(d => (
                        <button
                          key={d.val}
                          type="button"
                          onClick={() => setState(prev => ({ ...prev, selectedDate: d.val }))}
                          className={`p-3 rounded-none border-2 flex flex-col items-center transition-all ${
                            state.selectedDate === d.val
                              ? "border-[#1c1b19] bg-[#1c1b19] text-white"
                              : "border-[#1c1b19]/25 bg-white hover:border-[#1c1b19] text-[#1c1b19]"
                          }`}
                        >
                          <span className="text-[10px] font-mono uppercase font-bold text-inherit opacity-60">{d.name}</span>
                          <span className="text-sm font-bold font-mono mt-0.5">{d.date.split(" ")[1]}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Select Time */}
                  {state.selectedDate && (
                    <div className="space-y-3">
                      <label className="text-xs uppercase font-mono font-bold tracking-wider text-[#1c1b19] flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#1d4ed8]" />
                        {activeContent.chooseTime}
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {availableTimes.map(time => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setState(prev => ({ ...prev, selectedTime: time }))}
                            className={`p-3.5 rounded-none border-2 text-xs font-mono font-bold text-center transition-all ${
                              state.selectedTime === time
                                ? "border-[#1c1b19] bg-[#1c1b19] text-white"
                                : "border-[#1c1b19]/25 bg-white hover:border-[#1c1b19] text-[#1c1b19]"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Form fields */}
                  {state.selectedDate && state.selectedTime && (
                    <div className="space-y-6 border-t border-dashed border-[#1c1b19]/20 pt-6">
                      <label className="text-xs uppercase font-mono font-bold tracking-wider text-[#1c1b19] flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#1d4ed8]" />
                        {activeContent.confirmCreds}
                      </label>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-mono font-bold text-[#1c1b19]/70 uppercase mb-1">{activeContent.fullName}</label>
                          <input
                            type="text"
                            required
                            placeholder="Coach Amine"
                            value={state.fullName}
                            onChange={(e) => setState(prev => ({ ...prev, fullName: e.target.value }))}
                            className="w-full p-3.5 rounded-none border-2 border-[#1c1b19]/30 bg-white text-sm text-[#1c1b19] placeholder-[#1c1b19]/30 focus:outline-none focus:border-[#1c1b19] font-serif"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-mono font-bold text-[#1c1b19]/70 uppercase mb-1">{activeContent.instaLabel}</label>
                          <input
                            type="text"
                            required
                            placeholder="@amine.fitness"
                            value={state.instagram}
                            onChange={(e) => setState(prev => ({ ...prev, instagram: e.target.value }))}
                            className="w-full p-3.5 rounded-none border-2 border-[#1c1b19]/30 bg-white text-sm text-[#1c1b19] placeholder-[#1c1b19]/30 focus:outline-none focus:border-[#1c1b19] font-serif"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono font-bold text-[#1c1b19]/70 uppercase mb-1">{activeContent.phoneLabel}</label>
                        <input
                          type="tel"
                          required
                          placeholder="+212 600-000000"
                          value={state.phone}
                          onChange={(e) => setState(prev => ({ ...prev, phone: e.target.value }))}
                          className="w-full p-3.5 rounded-none border-2 border-[#1c1b19]/30 bg-white text-sm text-[#1c1b19] placeholder-[#1c1b19]/30 focus:outline-none focus:border-[#1c1b19] font-serif"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full mt-4 py-4 border-2 border-[#1c1b19] bg-[#1c1b19] text-[#f9f7f2] hover:bg-[#1d4ed8] hover:border-[#1d4ed8] transition-all font-mono font-bold uppercase tracking-widest text-xs shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] flex justify-center items-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        {activeContent.btnSubmit}
                      </button>
                    </div>
                  )}
                </form>
              </motion.div>
            )}

            {state.bookingStep === "success" && (
              <motion.div
                key="success-mode"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center space-y-6 py-6"
              >
                <div className="inline-flex p-4 border-2 border-[#1c1b19] bg-[#e6f4ea] text-[#137333] mb-2">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-black font-serif text-[#1c1b19]">{activeContent.successTitle}</h2>
                
                <div className="max-w-md mx-auto bg-[#fcfbf7] border-2 border-[#1c1b19] p-6 text-left space-y-3.5 text-xs font-mono">
                  <p className="border-b border-[#1c1b19]/10 pb-2.5 text-center text-[10px] font-bold text-[#1d4ed8] uppercase tracking-wider">
                    {activeContent.receiptTitle}
                  </p>
                  <p className="flex justify-between">
                    <span className="text-[#1c1b19]/50">{activeContent.strategyDay}</span>
                    <strong className="text-[#1c1b19]">{state.selectedDate}</strong>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-[#1c1b19]/50">{activeContent.timeWindow}</span>
                    <strong className="text-[#1c1b19]">{state.selectedTime}</strong>
                  </p>
                  <p className="flex justify-between border-t border-[#1c1b19]/15 pt-2.5">
                    <span className="text-[#1c1b19]/50">{activeContent.candidateLabel}</span>
                    <strong className="text-[#1c1b19]">{state.fullName}</strong>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-[#1c1b19]/50">INSTAGRAM:</span>
                    <strong className="text-[#1d4ed8]">{state.instagram}</strong>
                  </p>
                </div>

                 <div className="bg-[#eff6ff] border-2 border-dashed border-[#1d4ed8]/40 p-5 max-w-md mx-auto text-xs text-[#1c1b19]/80 text-left flex items-start gap-3">
                  <span className="text-base text-[#1d4ed8]">⚠️</span>
                  <p className="leading-relaxed font-serif">
                    <strong>{activeContent.nextStepTitle}</strong> {activeContent.nextStepDesc}
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-8 py-4 border-2 border-[#1c1b19] bg-[#1c1b19] text-[#f9f7f2] hover:bg-[#1d4ed8] hover:border-[#1d4ed8] transition-all font-mono font-bold uppercase tracking-widest text-xs shadow-[3px_3px_0px_0px_rgba(0,0,0,0.15)] w-full sm:w-auto justify-center"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    {activeContent.transmitBtn}
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setState({
                        step: 1,
                        platform: "",
                        followers: "",
                        struggle: "",
                        revenue: "",
                        fullName: "",
                        instagram: "",
                        phone: "",
                        selectedDate: "",
                        selectedTime: "",
                        bookingStep: "quiz",
                      });
                    }}
                    className="px-6 py-4 border border-[#1c1b19]/20 hover:border-[#1c1b19] text-[#1c1b19] transition-all text-xs font-mono font-bold uppercase w-full sm:w-auto bg-transparent"
                  >
                    {activeContent.resetQuiz}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </div>
  );
}
