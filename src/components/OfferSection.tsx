import { motion } from "motion/react";
import { Cpu, Shield, Award, Check } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function OfferSection() {
  const { lang } = useLanguage();

  const content = {
    tag: {
      en: "// OPERATIONAL MANIFESTO",
      darija: "// MANIFESTO DYAL L'PARTNERSHIP",
      fr: "// MANIFESTE OPÉRATIONNEL"
    },
    title: {
      en: "The Partnership Mechanics ⚙️",
      darija: "Qawanin dyal l'Partnership ⚙️",
      fr: "Les Mécanismes du Partenariat ⚙️"
    },
    subtitle: {
      en: "A meticulous division of labor. We command the business operations and technical pipelines, allowing you to focus entirely on training and community guidance.",
      darija: "Taqsim dyal l'khdma b koli di9a. 7na kanssyro l'moraqaba dyal l'Business w systems dyal l'Tech, w nta katrkz ghi 3la l'Coaching w l'Community dyalk.",
      fr: "Une division méticuleuse du travail. Nous dirigeons les opérations commerciales et les pipelines techniques, vous permettant de vous concentrer sur le coaching."
    },
    footerTag: {
      en: "GUARANTEED",
      darija: "DMANA",
      fr: "GARANTI"
    },
    guaranteeTitle: {
      en: "Contract Alignment Guarantee",
      darija: "L'Contract Alignment Guarantee (b L'kitaba)",
      fr: "Garantie d'Alignement Contractuel"
    },
    guaranteeDesc: {
      en: "We accept full operational liability. We build and host the technical funnels, structure payment pipelines, and close the Instagram leads. If the community does not profit, you pay us nothing.",
      darija: "Kan-hezou l'mas2ouliya kamla. Kanbnio l'Funnels, kan9ado structures dyal l'Payments, w kanclowsio Instagram leads dyalk f l'DMs. Ila l'Community dyalk majabetsh l'profit, matkhlss lna walo.",
      fr: "Nous acceptons l'entière responsabilité opérationnelle. Nous construisons et hébergeons les funnels techniques, structurons les paiements et convertissons les prospects Instagram. Si la communauté ne génère aucun profit, vous ne payez rien."
    },
    guaranteeBtn: {
      en: "Check Partnership Compatibility",
      darija: "Chof l'Moutabaqa dyal l'Partnership",
      fr: "Vérifier la Compatibilité"
    },
    incl: {
      en: "VERIFIED SERVICE // INCL.",
      darija: "VERIFIED SERVICE // INCL.",
      fr: "SERVICE VÉRIFIÉ // INCLUS"
    }
  };

  const activeContent = {
    tag: content.tag[lang] || content.tag.darija,
    title: content.title[lang] || content.title.darija,
    subtitle: content.subtitle[lang] || content.subtitle.darija,
    footerTag: content.footerTag[lang] || content.footerTag.darija,
    guaranteeTitle: content.guaranteeTitle[lang] || content.guaranteeTitle.darija,
    guaranteeDesc: content.guaranteeDesc[lang] || content.guaranteeDesc.darija,
    guaranteeBtn: content.guaranteeBtn[lang] || content.guaranteeBtn.darija,
    incl: content.incl[lang] || content.incl.darija
  };

  const pillars = [
    {
      id: "pillar-1",
      icon: <Cpu className="w-6 h-6 text-[#1c1b19]" />,
      tagline: lang === "en" ? "SYSTEMS & PIPELINES" : lang === "fr" ? "SYSTÈMES & PIPELINES" : "SYSTEMS W PIPELINES",
      title: lang === "en" ? "Done-For-You Tech Setup" : lang === "fr" ? "Configuration l'Tech DFY" : "Setup dyal l'Tech (DFY)",
      subtitle: lang === "en" ? "Skool & Local Payment Gateways" : lang === "fr" ? "Skool & Passerelles Locaux" : "Skool w Bank Transfers dyal lmaghrib",
      desc: lang === "en" 
        ? "Full automated community architecture and classroom structure. Zero coding or complex integrations required on your side."
        : lang === "fr"
        ? "Architecture complète et automatisée de la communauté et de la classe. Zéro codage ou intégration complexe requis de votre côté."
        : "Architecture dyal l'Community automated kamla f Skool. Zero coding wla tsda3 rass 3lik nta.",
      bullets: lang === "en" ? [
        "Gamified Skool levels matching local workouts",
        "Video course uploads & content structure design",
        "Moroccan gateway setup (CIH Bank transfer, Attijariwafa, Stripe, PayPal)",
        "Automated recurring subscriptions & billing"
      ] : lang === "fr" ? [
        "Niveaux Skool ludiques adaptés aux entraînements",
        "Téléchargement de vidéos et conception de cours",
        "Configuration marocaine (Transfert CIH, Attijariwafa, Stripe, PayPal)",
        "Abonnements et facturation mensuels automatisés"
      ] : [
        "Gamification dyal Skool levels 3la 7sab Workouts",
        "Upload dyal l'Video Courses w design dyal l'Content structure",
        "Setup dyal payment methods (CIH, Attijariwafa, Stripe, PayPal)",
        "Automated monthly subscriptions w dynamic billing"
      ]
    },
    {
      id: "pillar-2",
      icon: <Shield className="w-6 h-6 text-[#1c1b19]" />,
      tagline: lang === "en" ? "100% UNDERWRITTEN RISK" : lang === "fr" ? "RISQUE 100% ASSURÉ" : "100% ZERO MONEY RISK",
      title: lang === "en" ? "Zero Financial Risk" : lang === "fr" ? "Zéro Risque Financier" : "Zero money risk",
      subtitle: lang === "en" ? "0 MAD Upfront Costs" : lang === "fr" ? "0 DH de frais initiaux" : "0 DH Bedya (Fabor)",
      desc: lang === "en" 
        ? "We invest our own team capital to construct, launch, host, and systemize your premium fitness community."
        : lang === "fr"
        ? "Nous investissons notre propre capital d'équipe pour construire, lancer et héberger votre communauté de fitness premium."
        : "Kaninvestiw rsmal dyal l'fr9a dyalna bach nbnio, n-launchiw, w n-systemiziw l'Community fitness premium dyalk.",
      bullets: lang === "en" ? [
        "We pay for the monthly Skool platform fees",
        "We purchase custom domains & pay hosting fees",
        "We cover CRM & direct email system fees",
        "If you do not generate revenue, you owe us nothing"
      ] : lang === "fr" ? [
        "Nous payons les frais mensuels de la plateforme Skool",
        "Nous achetons les domaines personnalisés & l'hébergement",
        "Nous couvrons les frais de CRM et d'e-mailing direct",
        "Si vous ne générez aucun revenu, vous ne nous devez rien"
      ] : [
        "7na kankhlssou ishtirakat monthly dyal platform Skool",
        "Kankhlssou customized domains w hosting fees",
        "Kankhlssou tracking CRMs w direct email systems",
        "Ila majebna l'flouss, nta matkhlss walou fabor"
      ]
    },
    {
      id: "pillar-3",
      icon: <Award className="w-6 h-6 text-[#1c1b19]" />,
      tagline: lang === "en" ? "SYNERGISTIC ALIGNMENT" : lang === "fr" ? "ALIGNEMENT SYNERGIQUE" : "TAQSSIM L'REVENUE",
      title: lang === "en" ? "50/50 Revenue Split" : lang === "fr" ? "Partage de Revenu 50/50" : "Taqssim 50/50 dyal l'Revenue",
      subtitle: lang === "en" ? "Aligned For Maximum Volume" : lang === "fr" ? "Aligné pour un Volume Maximum" : "Mtf9in m3ak 100% 3la l'Revenue",
      desc: lang === "en" 
        ? "A pure alignment of incentive. We only generate partner profit when your brand actively expands."
        : lang === "fr"
        ? "Un alignement pur des incitations. Nous ne générons de profit que lorsque votre marque se développe activement."
        : "Pure alignment dyal l'incentives. 7na kantsstafdo ghi m3ak mlli l'Brand dyalk katnmdm w t-scale-i ktr.",
      bullets: lang === "en" ? [
        "We split community subscription earnings 50/50",
        "Daily DM sales handled entirely by our skilled closers",
        "Full member onboarding & retention systems",
        "Targets: 20,000+ MAD/month high-profit MRR"
      ] : lang === "fr" ? [
        "Nous partageons les gains des abonnements 50/50",
        "Ventes quotidiennes par DM gérées par nos closers",
        "Systèmes d'accueil et de rétention des membres",
        "Objectifs : +20 000 DH/mois de MRR à profit élevé"
      ] : [
        "Kan-9esmou l'arbba7 dyal l'ichtirakat 50/50",
        "Daily DM Sales dyal kol nhar kaimanagiwha l'Closers dyalna",
        "Onboarding dyal l'Members w nbniw systems dyal retention",
        "L'hadaf dyalna: +20,000 DH/Month dyal recurring profit (MRR)"
      ]
    }
  ];

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

  return (
    <div id="offer" className="w-full py-24 px-4 bg-[#f9f7f2] border-b-2 border-[#1c1b19] relative">
      {/* Newspaper faint grid structure background */}
      <div className="absolute inset-0 bg-[radial-gradient(#1c1b19_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-mono font-bold tracking-wider text-[#1c1b19] border border-[#1c1b19] bg-transparent px-4 py-1">
            {activeContent.tag}
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-serif text-[#1c1b19] mt-4 tracking-tight">
            {activeContent.title}
          </h2>
          <p className="text-[#1c1b19]/70 mt-4 text-sm md:text-base max-w-2xl mx-auto font-mono">
            {activeContent.subtitle}
          </p>
        </div>

        {/* 3 Pillars Column Layout (Classic newspaper layout with editorial column lines) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-[#1c1b19]/20 divide-y md:divide-y-0 md:divide-x divide-[#1c1b19]/20 py-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="px-6 md:px-8 py-8 md:py-4 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="inline-flex p-2.5 border border-[#1c1b19] bg-[#fbf9f4] text-[#1c1b19]">
                    {pillar.icon}
                  </div>
                  <span className="font-mono text-xs font-bold text-[#0055ff]">
                    [{idx + 1}/3]
                  </span>
                </div>

                <div>
                  <span className="block text-[10px] font-mono font-bold text-[#0055ff] uppercase tracking-wider">
                    {pillar.tagline}
                  </span>

                  <h3 className="text-xl md:text-2xl font-black font-serif text-[#1c1b19] mt-1 leading-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-xs font-mono font-bold text-[#0055ff] mt-1">
                    {pillar.subtitle}
                  </p>
                </div>

                <p className="text-[#1c1b19]/80 text-xs md:text-sm leading-relaxed font-serif">
                  {pillar.desc}
                </p>

                {/* Bullets with square checkmarks */}
                <ul className="space-y-3.5 border-t border-[#1c1b19]/10 pt-6">
                  {pillar.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 text-xs font-serif text-[#1c1b19]/90">
                      <Check className="w-4 h-4 text-[#b1392b] mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-dashed border-[#1c1b19]/10">
                <span className="text-[10px] font-mono text-[#1c1b19]/50 block uppercase tracking-widest">{activeContent.incl}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Guarantee (Official certificate badge look) */}
        <div className="mt-16 bg-white p-8 rounded-none border-2 border-[#1c1b19] shadow-[5px_5px_0px_0px_#1c1b19] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          {/* Subtle stamped background water-mark */}
          <div className="absolute -right-10 -bottom-10 w-40 h-40 border-8 border-[#1c1b19]/5 rounded-full pointer-events-none flex items-center justify-center font-mono font-extrabold text-[#1c1b19]/5 text-sm uppercase select-none rotate-12">
            {activeContent.footerTag}
          </div>

          <div className="flex items-start md:items-center gap-4 relative z-10">
            <div className="p-3 border border-[#1c1b19] bg-[#f9f7f2] text-[#b1392b] shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-black font-serif text-[#1c1b19]">{activeContent.guaranteeTitle}</h4>
              <p className="text-xs font-serif text-[#1c1b19]/70 mt-1 max-w-xl leading-relaxed">
                {activeContent.guaranteeDesc}
              </p>
            </div>
          </div>
          <a
            href="/audit"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, "", "/audit");
              window.dispatchEvent(new PopStateEvent("popstate"));
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="px-6 py-3.5 border-2 border-[#1c1b19] bg-[#1c1b19] text-[#f9f7f2] hover:bg-transparent hover:text-[#1c1b19] transition-all text-xs font-mono font-bold uppercase tracking-widest shrink-0 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.15)] relative z-10"
          >
            {activeContent.guaranteeBtn}
          </a>
        </div>

      </div>
    </div>
  );
}
