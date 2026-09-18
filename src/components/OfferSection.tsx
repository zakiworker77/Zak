import { motion } from "motion/react";
import { Cpu, Shield, Award, Check } from "lucide-react";

export default function OfferSection() {
  const pillars = [
    {
      id: "pillar-1",
      icon: <Cpu className="w-6 h-6 text-[#1c1b19]" />,
      tagline: "SYSTEMS & PIPELINES",
      title: "Done-For-You Tech Setup",
      subtitle: "Skool & Local Payment Gateways",
      desc: "Full automated community architecture and classroom structure. Zero coding or complex integrations required on your side.",
      bullets: [
        "Gamified Skool levels matching local workouts",
        "Video course uploads & content structure design",
        "Moroccan gateway setup (CIH Bank transfer, Attijariwafa, Stripe, PayPal)",
        "Automated recurring subscriptions & billing"
      ]
    },
    {
      id: "pillar-2",
      icon: <Shield className="w-6 h-6 text-[#1c1b19]" />,
      tagline: "100% UNDERWRITTEN RISK",
      title: "Zero Financial Risk",
      subtitle: "0 MAD Upfront Costs",
      desc: "We invest our own team capital to construct, launch, host, and systemize your premium fitness community.",
      bullets: [
        "We pay for the monthly Skool platform fees",
        "We purchase custom domains & pay hosting fees",
        "We cover CRM & direct email system fees",
        "If you do not generate revenue, you owe us nothing"
      ]
    },
    {
      id: "pillar-3",
      icon: <Award className="w-6 h-6 text-[#1c1b19]" />,
      tagline: "SYNERGISTIC ALIGNMENT",
      title: "50/50 Revenue Split",
      subtitle: "Aligned For Maximum Volume",
      desc: "A pure alignment of incentive. We only generate partner profit when your brand actively expands.",
      bullets: [
        "We split community subscription earnings 50/50",
        "Daily DM sales handled entirely by our skilled closers",
        "Full member onboarding & retention systems",
        "Targets: 20,000+ MAD/month high-profit MRR"
      ]
    }
  ];

  return (
    <div id="offer" className="w-full py-24 px-4 bg-[#f9f7f2] border-b-2 border-[#1c1b19] relative">
      {/* Newspaper faint grid structure background */}
      <div className="absolute inset-0 bg-[radial-gradient(#1c1b19_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-mono font-bold tracking-wider text-[#1c1b19] border border-[#1c1b19] bg-transparent px-4 py-1">
            // OPERATIONAL MANIFESTO
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-serif text-[#1c1b19] mt-4 tracking-tight">
            The Partnership Mechanics
          </h2>
          <p className="text-[#1c1b19]/70 mt-4 text-sm md:text-base max-w-2xl mx-auto font-mono">
            A meticulous division of labor. We command the business operations and technical pipelines, allowing you to focus entirely on training and community guidance.
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
                {/* Vintage Letterpress Icon representation */}
                <div className="inline-flex p-2.5 border border-[#1c1b19] bg-[#fbf9f4] text-[#1c1b19]">
                  {pillar.icon}
                </div>

                <div>
                  <span className="block text-[10px] font-mono font-bold text-[#b1392b] uppercase tracking-wider">
                    {pillar.tagline}
                  </span>

                  <h3 className="text-xl md:text-2xl font-black font-serif text-[#1c1b19] mt-1 leading-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-xs font-mono font-bold text-[#1c1b19]/60 mt-1">
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
                <span className="text-[10px] font-mono text-[#1c1b19]/50 block uppercase tracking-widest">VERIFIED SERVICE // INCL.</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Guarantee (Official certificate badge look) */}
        <div className="mt-16 bg-white p-8 rounded-none border-2 border-[#1c1b19] shadow-[5px_5px_0px_0px_#1c1b19] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          {/* Subtle stamped background water-mark */}
          <div className="absolute -right-10 -bottom-10 w-40 h-40 border-8 border-[#1c1b19]/5 rounded-full pointer-events-none flex items-center justify-center font-mono font-extrabold text-[#1c1b19]/5 text-sm uppercase select-none rotate-12">
            GUARANTEED
          </div>

          <div className="flex items-start md:items-center gap-4 relative z-10">
            <div className="p-3 border border-[#1c1b19] bg-[#f9f7f2] text-[#b1392b] shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-black font-serif text-[#1c1b19]">Contract Alignment Guarantee</h4>
              <p className="text-xs font-serif text-[#1c1b19]/70 mt-1 max-w-xl leading-relaxed">
                We accept full operational liability. We build and host the technical funnels, structure payment pipelines, and close the Instagram leads. If the community does not profit, you pay us nothing.
              </p>
            </div>
          </div>
          <a
            href="#audit"
            className="px-6 py-3.5 border-2 border-[#1c1b19] bg-[#1c1b19] text-[#f9f7f2] hover:bg-transparent hover:text-[#1c1b19] transition-all text-xs font-mono font-bold uppercase tracking-widest shrink-0 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.15)] relative z-10"
          >
            Check Partnership Compatibility
          </a>
        </div>

      </div>
    </div>
  );
}
