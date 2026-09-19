import { useState } from "react";
import { motion } from "motion/react";
import { Calculator, Users, TrendingUp, Coins } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function EarningsCalculator() {
  const [followers, setFollowers] = useState<number>(15000);
  const [conversionRate, setConversionRate] = useState<number>(1.0);
  const [monthlyFee, setMonthlyFee] = useState<number>(350);
  const { lang } = useLanguage();

  // Calculations
  const estimatedMembers = Math.round(followers * (conversionRate / 100));
  const totalMRR = estimatedMembers * monthlyFee;
  const partnerSplit = Math.round(totalMRR * 0.5);

  // Compare to 1-on-1
  const averageOneOnOnePrice = 250; // MAD
  const clientsForSameRevenue = Math.round(totalMRR / averageOneOnOnePrice);

  const content = {
    tag: {
      en: "// PARTNERSHIP AUDIT TOOL",
      darija: "// HASIBAT L'MADKHOUL L'RECURRING",
      fr: "// CALCULATEUR DE REVENU RECURRENT"
    },
    title: {
      en: "The Revenue Multiplier",
      darija: "Hasibat l'Revenue Recurring dyalk",
      fr: "Le Multiplicateur de Revenu"
    },
    subtitle: {
      en: "Model your community potential in Moroccan Dirhams (MAD). Observe how converting a tiny, dedicated fraction of your audience changes your business mathematics.",
      darija: "Hseb ch7al t9dr dkhl b l'Community fitness dyalk b MAD (DH). Chof kifash ila hwlti fraction sghira d followers dyalk f l'Instagram tbedel le3ba.",
      fr: "Modélisez le potentiel de votre communauté en Dirhams Marocains (MAD). Voyez comment la conversion d'une infime partie de vos abonnés transforme vos finances."
    },
    followersLabel: {
      en: "Current Audience Base (Followers)",
      darija: "Jomhour dyalk f l'Instagram (Followers)",
      fr: "Nombre d'abonnés actuels (Followers)"
    },
    conversionLabel: {
      en: "Target Conversion Rate (%)",
      darija: "Nisbat l'Conversion dyal l'Followers (%)",
      fr: "Taux de conversion ciblé (%)"
    },
    feeLabel: {
      en: "Proposed Community Fee (MAD / Month)",
      darija: "Ishtirak dyal l'Community b l'Month (DH)",
      fr: "Tarif mensuel de l'Community (DH / Mois)"
    },
    calcNote: {
      en: "*Revenue metrics modeled on active global benchmarks. Local Moroccan billing conversion rates are optimized via direct operator integrations.",
      darija: "*Madkhoul model 3la ishtirakat benchmark global. Systems dyal payments f l'Maroc optimized direct m3a bank transfers.",
      fr: "*Modèles de revenus basés sur des benchmarks mondiaux actifs. Les taux locaux sont optimisés via notre intégration directe."
    },
    ledgerTitle: {
      en: "LEDGER RECEIPT: ESTIMATED COMMUNITY MRR",
      darija: "LEDGER RECEIPT: ESTIMATED COMMUNITY MRR",
      fr: "REÇU COMPTABLE : REVENU MENSUEL ESTIMÉ"
    },
    ledgerDesc: {
      en: `Based on a target of ${estimatedMembers} active members contributing ${monthlyFee} MAD on recurring schedules.`,
      darija: `Hadaf 3la koli ${estimatedMembers} d l'Members naashtin ishtirak dyalhom ${monthlyFee} DH monthly.`,
      fr: `Basé sur un objectif de ${estimatedMembers} membres actifs contribuant à hauteur de ${monthlyFee} DH mensuels.`
    },
    shareYourTitle: {
      en: "Your 50% Share",
      darija: "Reb7 dyalk (50% dyalk)",
      fr: "Votre Part de 50%"
    },
    shareYourSub: {
      en: "ZERO CASH COST\nDONE FOR YOU",
      darija: "ZERO DH SETUP\nKOLCHI 3LINA",
      fr: "ZÉRO COÛT INITIAL\nCLÉ EN MAIN"
    },
    shareZakTitle: {
      en: "Zak's 50% Management",
      darija: "Siyanat Zak (50% Management)",
      fr: "Management de Zak (50%)"
    },
    shareZakSub: {
      en: "COVERS SYSTEM LAUNCH\n& DIRECT DM SALES",
      darija: "KAITKHLF B L'TECH\nW DIRECT DM SALES",
      fr: "COUVRE L'INSTALLATION\n& LE CLOSING PAR DM"
    },
    btnReserve: {
      en: "Apply to Reserve Placement",
      darija: "Bghit l'Audit (Fabor)",
      fr: "Demander l'Audit Gratuit"
    },
    burnTag: {
      en: "⚠️ WHATSAPP OVERHEAD ANALYSIS:",
      darija: "⚠️ TA7LIL D TAMARA DYAL WHATSAPP:",
      fr: "⚠️ ANALYSE DES FRAIS WHATSAPP :"
    },
    burnDesc: {
      en: `To capture equivalent revenue of ${totalMRR.toLocaleString()} MAD monthly by manually selling 1-on-1 programs at a standard ${averageOneOnOnePrice} MAD price point, you must continually lock in:`,
      darija: `Bach dkhl nafss l'madkhoul dyal ${totalMRR.toLocaleString()} DH monthly b l'coaching l'3adi d 1-on-1 b ${averageOneOnOnePrice} DH l'wa7d, khass ttb3 dima ktr mn:`,
      fr: `Pour capter un revenu équivalent de ${totalMRR.toLocaleString()} DH mensuels en vendant manuellement des programmes 1-on-1 à ${averageOneOnOnePrice} DH l'unité, vous devez continuellement fidéliser :`
    },
    burnActive: {
      en: "ACTIVE USERS",
      darija: "CLIENT ACTIVE",
      fr: "CLIENTS ACTIFS"
    },
    burnNote: {
      en: "Chasing renewal wire transfers and answering voice notes daily. A clear path to operational burnout.",
      darija: "Mtab3at bank transfers dyal kolchi w dima f voice notes f l'DMs... Tamara w sda3 rass l'khawi.",
      fr: "Relancer les virements bancaires et répondre aux messages vocaux chaque jour. Une voie royale vers le burnout."
    }
  };

  const activeContent = {
    tag: content.tag[lang] || content.tag.darija,
    title: content.title[lang] || content.title.darija,
    subtitle: content.subtitle[lang] || content.subtitle.darija,
    followersLabel: content.followersLabel[lang] || content.followersLabel.darija,
    conversionLabel: content.conversionLabel[lang] || content.conversionLabel.darija,
    feeLabel: content.feeLabel[lang] || content.feeLabel.darija,
    calcNote: content.calcNote[lang] || content.calcNote.darija,
    ledgerTitle: content.ledgerTitle[lang] || content.ledgerTitle.darija,
    ledgerDesc: content.ledgerDesc[lang] || content.ledgerDesc.darija,
    shareYourTitle: content.shareYourTitle[lang] || content.shareYourTitle.darija,
    shareYourSub: content.shareYourSub[lang] || content.shareYourSub.darija,
    shareZakTitle: content.shareZakTitle[lang] || content.shareZakTitle.darija,
    shareZakSub: content.shareZakSub[lang] || content.shareZakSub.darija,
    btnReserve: content.btnReserve[lang] || content.btnReserve.darija,
    burnTag: content.burnTag[lang] || content.burnTag.darija,
    burnDesc: content.burnDesc[lang] || content.burnDesc.darija,
    burnActive: content.burnActive[lang] || content.burnActive.darija,
    burnNote: content.burnNote[lang] || content.burnNote.darija
  };

  return (
    <div id="calculator" className="w-full py-24 px-4 bg-[#fcfbf7] border-b-2 border-[#1c1b19] relative overflow-hidden">
      {/* Editorial horizontal layout lines */}
      <div className="absolute inset-x-0 top-1/3 h-[1px] bg-[#1c1b19]/5 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block text-xs font-mono font-bold tracking-wider text-[#1c1b19] border border-[#1c1b19] bg-transparent px-4 py-1 mb-4 uppercase">
            {activeContent.tag}
          </div>
          <h2 className="text-3xl md:text-5xl font-black font-serif text-[#1c1b19] tracking-tight">
            {activeContent.title}
          </h2>
          <p className="text-[#1c1b19]/70 mt-4 text-sm md:text-base max-w-2xl mx-auto font-mono">
            {activeContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Inputs Section - Designed like a ledger ledger sheet */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-none border-2 border-[#1c1b19] shadow-[5px_5px_0px_0px_#1c1b19] flex flex-col justify-between">
            <div className="space-y-10">
              
              {/* Followers Input */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <label className="text-xs font-mono font-bold text-[#1c1b19] flex items-center gap-2 uppercase tracking-wide">
                    <Users className="w-4 h-4 text-[#b1392b]" />
                    {activeContent.followersLabel}
                  </label>
                  <span className="text-lg font-mono font-bold text-[#1c1b19] px-3.5 py-1 bg-[#f9f7f2] border-2 border-[#1c1b19]">
                    {followers.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="100000"
                  step="1000"
                  value={followers}
                  onChange={(e) => setFollowers(parseInt(e.target.value))}
                  className="w-full h-1 bg-[#1c1b19]/10 rounded-none appearance-none cursor-pointer accent-[#1c1b19] focus:outline-none"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#1c1b19]/40 uppercase font-bold">
                  <span>2,000</span>
                  <span>50,000</span>
                  <span>100,000+</span>
                </div>
              </div>

              {/* Conversion Rate Input */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <label className="text-xs font-mono font-bold text-[#1c1b19] flex items-center gap-2 uppercase tracking-wide">
                    <TrendingUp className="w-4 h-4 text-[#b1392b]" />
                    {activeContent.conversionLabel}
                  </label>
                  <span className="text-lg font-mono font-bold text-[#1c1b19] px-3.5 py-1 bg-[#f9f7f2] border-2 border-[#1c1b19]">
                    {conversionRate.toFixed(1)}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0.2"
                  max="4.0"
                  step="0.1"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(parseFloat(e.target.value))}
                  className="w-full h-1 bg-[#1c1b19]/10 rounded-none appearance-none cursor-pointer accent-[#1c1b19] focus:outline-none"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#1c1b19]/40 uppercase font-bold">
                  <span>0.2% ({lang === "en" ? "CONSERVATIVE" : lang === "fr" ? "PRUDENT" : "CONSERVATIVE"})</span>
                  <span>1.5% ({lang === "en" ? "AVERAGE" : lang === "fr" ? "MOYEN" : "WASAT"})</span>
                  <span>4.0% ({lang === "en" ? "EXCELLENT" : lang === "fr" ? "EXCELLENT" : "WA3RA"})</span>
                </div>
              </div>

              {/* Monthly Subscription Fee */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <label className="text-xs font-mono font-bold text-[#1c1b19] flex items-center gap-2 uppercase tracking-wide">
                    <Coins className="w-4 h-4 text-[#b1392b]" />
                    {activeContent.feeLabel}
                  </label>
                  <span className="text-lg font-mono font-bold text-[#1c1b19] px-3.5 py-1 bg-[#f9f7f2] border-2 border-[#1c1b19]">
                    {monthlyFee} DH
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="1200"
                  step="50"
                  value={monthlyFee}
                  onChange={(e) => setMonthlyFee(parseInt(e.target.value))}
                  className="w-full h-1 bg-[#1c1b19]/10 rounded-none appearance-none cursor-pointer accent-[#1c1b19] focus:outline-none"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#1c1b19]/40 uppercase font-bold">
                  <span>100 DH</span>
                  <span>600 DH</span>
                  <span>1,200 DH</span>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-[#1c1b19]/10 flex items-start gap-3 text-[#1c1b19]/50 text-xs font-serif">
              <Calculator className="w-4 h-4 shrink-0 text-[#b1392b]" />
              <span>
                {activeContent.calcNote}
              </span>
            </div>
          </div>

          {/* Results Section - Stamped Invoice Style */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Main MRR Card */}
            <div className="bg-[#fefce8] p-8 rounded-none border-2 border-[#1c1b19] shadow-[5px_5px_0px_0px_#1c1b19] flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#1c1b19] uppercase tracking-wider block mb-2">{activeContent.ledgerTitle}</span>
                
                <div className="mt-2 flex items-baseline gap-1 border-b-2 border-[#1c1b19] pb-4">
                  <span className="text-4xl md:text-5xl font-black font-mono text-[#1c1b19] tracking-tight">
                    {totalMRR.toLocaleString()}
                  </span>
                  <span className="text-sm font-mono font-bold uppercase text-[#1c1b19]/60">DH / {lang === "en" ? "MONTH" : lang === "fr" ? "MOIS" : "MONTH"}</span>
                </div>

                <p className="text-xs font-serif text-[#1c1b19]/70 mt-3 leading-relaxed">
                  {activeContent.ledgerDesc}
                </p>

                <div className="mt-8 space-y-4">
                  {/* Split Display */}
                  <div className="bg-white p-4 border border-[#1c1b19]/30 flex justify-between items-center">
                    <div>
                      <p className="text-[10px] font-mono font-bold text-[#1d4ed8] uppercase">{activeContent.shareYourTitle}</p>
                      <p className="text-xl font-bold font-mono text-[#1c1b19] mt-0.5">
                        +{partnerSplit.toLocaleString()} DH/{lang === "en" ? "mo" : "sh"}
                      </p>
                    </div>
                    <div className="text-right text-[9px] font-mono text-[#1c1b19]/50 leading-relaxed uppercase whitespace-pre-line">
                      {activeContent.shareYourSub}
                    </div>
                  </div>

                  <div className="bg-[#fcfbf7] p-4 border border-[#1c1b19]/20 flex justify-between items-center">
                    <div>
                      <p className="text-[10px] font-mono font-bold text-[#1c1b19]/50 uppercase">{activeContent.shareZakTitle}</p>
                      <p className="text-lg font-mono text-[#1c1b19]/60 mt-0.5">
                        {partnerSplit.toLocaleString()} DH/{lang === "en" ? "mo" : "sh"}
                      </p>
                    </div>
                    <div className="text-right text-[9px] font-mono text-[#1c1b19]/40 leading-relaxed uppercase whitespace-pre-line">
                      {activeContent.shareZakSub}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#1c1b19]/10">
                <a
                  href="#audit"
                  className="block w-full text-center px-6 py-4 bg-[#1c1b19] text-[#f9f7f2] hover:bg-[#1d4ed8] hover:text-[#f9f7f2] transition-all font-mono font-bold uppercase tracking-wider text-xs border-2 border-[#1c1b19]"
                >
                  {activeContent.btnReserve}
                </a>
              </div>
            </div>

            {/* Comparison Burnout Card */}
            <div className="bg-white p-6 rounded-none border-2 border-dashed border-[#1d4ed8]">
              <h4 className="text-xs font-mono font-bold text-[#1d4ed8] flex items-center gap-2 uppercase tracking-wider">
                {activeContent.burnTag}
              </h4>
              <p className="text-xs font-serif text-[#1c1b19]/70 mt-2 leading-relaxed">
                {activeContent.burnDesc}
              </p>
              <div className="mt-4 flex items-center gap-4">
                <div className="px-4 py-2 border border-[#1d4ed8] bg-blue-50">
                  <span className="text-2xl font-black font-mono text-[#1d4ed8]">{clientsForSameRevenue}</span>
                  <span className="text-[9px] font-mono text-[#1d4ed8] block uppercase font-bold leading-none mt-1">{activeContent.burnActive}</span>
                </div>
                <p className="text-xs font-serif text-[#1c1b19]/60 leading-normal">
                  {activeContent.burnNote}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
