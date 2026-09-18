import { motion } from "motion/react";
import { Sparkles, Award } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { label: "Community Systems Built", value: "14+" },
    { label: "Revenue Generated in MAD", value: "350k+" },
    { label: "Active Moroccan Partners", value: "6" },
  ];

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
                <div className="absolute inset-0 bg-[radial-gradient(#1c1b19_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.02] pointer-events-none"></div>

                {/* Stylish placeholder avatar */}
                <span className="text-6xl md:text-7xl font-black font-serif text-[#1c1b19] tracking-tighter">
                  ZAK
                </span>

                <span className="text-xs font-mono font-bold text-[#b1392b] uppercase tracking-widest mt-2 border border-[#b1392b]/35 bg-[#fffbf2] px-3.5 py-1">
                  Growth Operator
                </span>

                <div className="absolute bottom-4 text-[10px] text-[#1c1b19]/50 font-mono font-bold uppercase tracking-wider">
                  Moroccan Niche Systems
                </div>
              </div>

              {/* Badges/Micro-Interactions */}
              <div className="absolute -bottom-3 -right-3 p-3.5 bg-[#fefce8] border-2 border-[#1c1b19] shadow-[3px_3px_0px_0px_#1c1b19] flex items-center gap-2 rounded-none">
                <span className="w-2.5 h-2.5 rounded-full bg-green-600 animate-pulse"></span>
                <span className="text-[10px] font-mono font-bold text-[#1c1b19] uppercase tracking-wider">Available for Partner</span>
              </div>
            </div>
          </div>

          {/* Biography text column */}
          <div className="md:col-span-7 space-y-6">
            <div className="inline-block text-xs font-mono font-bold tracking-wider text-[#1c1b19] border border-[#1c1b19] bg-transparent px-4 py-1 uppercase">
              // PROFILE ANALYSIS
            </div>

            <h2 className="text-3xl md:text-4xl font-black font-serif text-[#1c1b19] tracking-tight leading-tight">
              I Build High-Converting <br className="hidden sm:inline" />
              <span className="underline decoration-[#b1392b] decoration-2">Automated Systems</span> For Elite Moroccan Creators
            </h2>

            <p className="text-[#1c1b19]/80 text-sm md:text-base leading-relaxed font-serif">
              Hi, I'm Zak. I turn follower attention into high-ticket automated recurring businesses. Unlike agencies that simply edit videos or copywriters who write generic posts, I am a <strong className="text-[#1c1b19] font-black">Growth Operator</strong>.
            </p>

            <p className="text-[#1c1b19]/80 text-sm md:text-base leading-relaxed font-serif">
              My team and I fully underwrite and invest in your brand. We set up your course hosting, code custom checkout systems supporting local Moroccan transfers, answer direct inquiries, and moderate your community space on Skool. You are freed up completely to create, train, and expand.
            </p>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-4 bg-white border border-[#1c1b19] rounded-none shadow-[3px_3px_0px_0px_#1c1b19]">
                  <span className="block text-xl md:text-2xl font-black font-mono text-[#1c1b19] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="block text-[10px] text-[#1c1b19]/60 mt-1 font-mono uppercase font-bold leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Quote block */}
            <div className="p-5 border-2 border-dashed border-[#b1392b] bg-white text-[#1c1b19]/90 text-xs md:text-sm italic font-serif leading-relaxed">
              "We took a Casablanca fitness coach from 0 to 24,000 MAD monthly community earnings in under 35 days. No ads, just highly-aligned conversion systems."
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
