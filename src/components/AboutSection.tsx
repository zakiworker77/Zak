import { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, Award } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function AboutSection() {
  const [imageError, setImageError] = useState(false);
  const { lang } = useLanguage();

  const stats = {
    en: [
      { label: "Upfront Costs", value: "0 MAD" },
      { label: "DFY Backend", value: "100%" },
      { label: "Revenue Split", value: "50/50" },
    ],
    darija: [
      { label: "Upfront Costs", value: "0 DH" },
      { label: "DFY Backend", value: "100%" },
      { label: "Revenue Split", value: "50/50" },
    ],
    fr: [
      { label: "Frais Initiaux", value: "0 DH" },
      { label: "Backend DFY", value: "100%" },
      { label: "Partage de Revenu", value: "50/50" },
    ]
  };

  const content = {
    profileAnalysis: {
      en: "// PROFILE ANALYSIS",
      darija: "// TA7LIL AL-MILAF",
      fr: "// ANALYSE DU PROFIL"
    },
    title: {
      en: (
        <>
          I Build High-Converting <br className="hidden sm:inline" />
          <span className="underline decoration-[#1d4ed8] decoration-2">Automated Systems</span> For Elite Moroccan Creators
        </>
      ),
      darija: (
        <>
          Kanbnio <span className="underline decoration-[#1d4ed8] decoration-2">Systems Automated</span> <br className="hidden sm:inline" />
          nadyeen l' les meilleurs Coachs f l'Maroc
        </>
      ),
      fr: (
        <>
          Je construis des <span className="underline decoration-[#1d4ed8] decoration-2">systèmes automatisés</span> <br className="hidden sm:inline" />
          hautement convertissants pour les créateurs d'élite au Maroc
        </>
      )
    },
    bio1: {
      en: "Hi, I'm Zak. I turn follower attention into high-ticket automated recurring businesses. Unlike agencies that simply edit videos or copywriters who write generic posts, I am a Growth Operator.",
      darija: "Salam, ana Zakaria. Kan7ewwel l'attention dyal l'Followers dyalk l'recurring communities nadyeen f Skool t9der dkhl bihom l'flouss dima. Bghit n9ol lek ana machi ghi agency normal dyal video editing wla copywriter, ana Growth Operator.",
      fr: "Salut, je suis Zak. Je transforme l'attention de vos abonnés en entreprises récurrentes haut de gamme automatisées. Contrairement aux agences de montage vidéo classiques, je suis un Growth Operator."
    },
    bio2: {
      en: "My team and I fully underwrite and invest in your brand. We set up your course hosting, code custom checkout systems supporting local Moroccan transfers, answer direct inquiries, and moderate your community space on Skool. You are freed up completely to create, train, and expand.",
      darija: "ana w team dyali kaninvestiw kamlin f l'Brand dyalk. Kan9ado l'hosting dyal courses dyalk, kanbnio custom checkout systems dyal local Moroccan bank transfers (CIH, Attijariwafa...), kanjawbo nas f l'DMs, w kanmanagiw l'Community f Skool. Nta katsali rasek ghi l'creation, training w content.",
      fr: "Mon équipe et moi investissons pleinement dans votre marque. Nous configurons l'hébergement de vos cours, codons les systèmes de paiement locaux (CIH, Attijariwafa...), répondons aux messages et modérons votre espace Skool. Vous êtes totalement libre de créer, d'entraîner et de vous développer."
    },
    statusAvailable: {
      en: "Available for Partner",
      darija: "Mota7 l'Partnership",
      fr: "Disponible pour partenariat"
    }
  };

  const activeContent = {
    profileAnalysis: content.profileAnalysis[lang] || content.profileAnalysis.darija,
    title: content.title[lang] || content.title.darija,
    bio1: content.bio1[lang] || content.bio1.darija,
    bio2: content.bio2[lang] || content.bio2.darija,
    statusAvailable: content.statusAvailable[lang] || content.statusAvailable.darija,
    stats: stats[lang] || stats.darija
  };

  return (
    <div id="about" className="w-full py-24 px-4 bg-[#f9f7f2] border-b-2 border-[#1c1b19] relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Avatar and Graphic column */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative group">
              
              {/* Circular profile image container - Redesigned as a premium editorial box */}
              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-none bg-white border-2 border-[#1c1b19] shadow-[6px_6px_0px_0px_#1c1b19] flex flex-col items-center justify-center overflow-hidden">
                
                {/* Paper texture screen lines */}
                <div className="absolute inset-0 bg-[radial-gradient(#1c1b19_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.02] pointer-events-none z-10"></div>

                {!imageError ? (
                  <img 
                    src="/zak_profile.png" 
                    alt="Zak Profile" 
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <>
                    {/* Stylish placeholder avatar */}
                    <span className="text-6xl md:text-7xl font-black font-serif text-[#1c1b19] tracking-tighter">
                      ZAK
                    </span>

                    <span className="text-xs font-mono font-bold text-[#1d4ed8] uppercase tracking-widest mt-2 border border-[#1d4ed8]/35 bg-[#fffbf2] px-3.5 py-1">
                      Growth Operator
                    </span>

                    <div className="absolute bottom-4 text-[10px] text-[#1c1b19]/50 font-mono font-bold uppercase tracking-wider">
                      Moroccan Niche Systems
                    </div>
                  </>
                )}
              </div>

              {/* Badges/Micro-Interactions */}
              <div className="absolute -bottom-3 -right-3 p-3.5 bg-[#fefce8] border-2 border-[#1c1b19] shadow-[3px_3px_0px_0px_#1c1b19] flex items-center gap-2 rounded-none">
                <span className="w-2.5 h-2.5 rounded-full bg-green-600 animate-pulse"></span>
                <span className="text-[10px] font-mono font-bold text-[#1c1b19] uppercase tracking-wider">{activeContent.statusAvailable}</span>
              </div>
            </div>
          </div>

          {/* Biography text column */}
          <div className="md:col-span-7 space-y-6">
            <div className="inline-block text-xs font-mono font-bold tracking-wider text-[#1c1b19] border border-[#1c1b19] bg-transparent px-4 py-1 uppercase">
              {activeContent.profileAnalysis}
            </div>

            <h2 className="text-3xl md:text-4xl font-black font-serif text-[#1c1b19] tracking-tight leading-tight">
              {activeContent.title}
            </h2>

            <p className="text-[#1c1b19]/80 text-sm md:text-base leading-relaxed font-serif">
              {activeContent.bio1}
            </p>

            <p className="text-[#1c1b19]/80 text-sm md:text-base leading-relaxed font-serif">
              {activeContent.bio2}
            </p>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {activeContent.stats.map((stat, idx) => (
                <div key={idx} className="p-4 bg-white border border-[#1c1b19] rounded-none shadow-[3px_3px_0px_0px_#1d4ed8]">
                  <span className="block text-xl md:text-2xl font-black font-mono text-[#1c1b19] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="block text-[10px] text-[#1c1b19]/60 mt-1 font-mono uppercase font-bold leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
