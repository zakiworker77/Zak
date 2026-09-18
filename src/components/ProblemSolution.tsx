import { motion } from "motion/react";
import { XCircle, CheckCircle2, AlertTriangle, Flame, ShieldCheck, HeartHandshake } from "lucide-react";

export default function ProblemSolution() {
  const problems = [
    {
      id: "prob-1",
      icon: <Flame className="w-5 h-5 text-[#b1392b]" />,
      title: "Answering WhatsApp DMs 24/7",
      desc: "Spending hours recording voice notes, sending bank transfer details, and chasing clients for payments."
    },
    {
      id: "prob-2",
      icon: <AlertTriangle className="w-5 h-5 text-[#b1392b]" />,
      title: "Selling Cheap 1-on-1 Plans",
      desc: "Stuck selling 200–300 MAD single-payment PDFs. You need an endless cycle of new clients to survive."
    },
    {
      id: "prob-3",
      icon: <XCircle className="w-5 h-5 text-[#b1392b]" />,
      title: "Trading 100% Time for Money",
      desc: "If you get sick, take a day off, or stop posting on Instagram, your business income immediately drops to zero."
    }
  ];

  const solutions = [
    {
      id: "sol-1",
      icon: <ShieldCheck className="w-5 h-5 text-[#1c1b19]" />,
      title: "DFY Tech Backend & Setup",
      desc: "I fully configure your Skool community, record modules, and integrate Moroccan payment options."
    },
    {
      id: "sol-2",
      icon: <CheckCircle2 className="w-5 h-5 text-[#1c1b19]" />,
      title: "Automated Community Funnel",
      desc: "I turn your Instagram traffic into active, recurring community subscribers. Consistent monthly paydays."
    },
    {
      id: "sol-3",
      icon: <HeartHandshake className="w-5 h-5 text-[#1c1b19]" />,
      title: "DM Sales & Closers",
      desc: "I jump into your DMs to answer inquiries and convert warm leads into recurring paying community members."
    }
  ];

  return (
    <div id="problem-solution" className="w-full py-24 px-4 bg-[#fbf9f4] border-b-2 border-[#1c1b19] relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-20">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#b1392b] block mb-2">// THE BOTTLENECK ANALYSIS</span>
          <h2 className="text-3xl md:text-5xl font-black font-serif text-[#1c1b19] tracking-tight leading-none">
            Answering WhatsApp DMs is <br className="hidden sm:inline" />
            <span className="underline decoration-[#b1392b] decoration-wavy decoration-2">
              Burning You Out.
            </span>
          </h2>
          <p className="text-[#1c1b19]/70 mt-5 text-sm md:text-base max-w-2xl mx-auto font-mono">
            Stop trading endless hours for single-payment clients. There is a much smarter, automated way to monetize your Moroccan fitness audience.
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
            className="bg-[#fffdfa] p-8 md:p-10 rounded-none border-2 border-[#1c1b19] shadow-[5px_5px_0px_0px_#b1392b] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="p-2 border-2 border-[#1c1b19] bg-[#fbf9f4]">
                  <XCircle className="w-6 h-6 text-[#b1392b]" />
                </span>
                <div>
                  <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#b1392b]">CASE: OLD WAY</span>
                  <h3 className="text-xl md:text-2xl font-black font-serif text-[#1c1b19] mt-0.5">WhatsApp Manual Hustle</h3>
                </div>
              </div>

              <p className="text-[#1c1b19]/80 text-sm mb-8 leading-relaxed font-serif italic">
                Moroccan fitness creators struggle with the overhead of low-ticket manual plans. If you are locked into this pattern, you own a stressful daily job, not a scalable business model:
              </p>

              <div className="space-y-8">
                {problems.map((p) => (
                  <div key={p.id} className="flex gap-4 items-start">
                    <div className="mt-1 shrink-0 p-1.5 border border-[#1c1b19]/20 bg-[#fbf9f4]">
                      {p.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-bold font-serif text-[#1c1b19]">{p.title}</h4>
                      <p className="text-[#1c1b19]/70 text-sm mt-1 leading-relaxed font-serif">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-[#1c1b19]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-[#b1392b] font-bold gap-2">
              <span>METRIC: 95% OPERATIONS, 5% CONTENT</span>
              <span className="uppercase text-xs bg-red-100 px-2 py-0.5 border border-[#b1392b]">STRESS CONSTRAINED</span>
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
                  <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#1c1b19]">CASE: NEW MODEL</span>
                  <h3 className="text-xl md:text-2xl font-black font-serif text-[#1c1b19] mt-0.5">Recurring Skool Communities</h3>
                </div>
              </div>

              <p className="text-[#1c1b19]/80 text-sm mb-8 leading-relaxed font-serif italic">
                We design a tailored high-ticket ecosystem leveraging your current audience. We restructure everything so you command automated monthly recurring payments:
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
              <span>METRIC: 5% CONTENT, 95% FREEDOM</span>
              <span className="bg-green-100 border border-green-700 text-green-800 px-2.5 py-0.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-700 animate-pulse"></span>
                OPERATIONAL AUTOMATION
              </span>
            </div>
          </motion.div>

        </div>

        {/* Visual summary bridge banner (Stamped Envelope/Bespoke Dossier Box) */}
        <div className="mt-16 p-8 rounded-none border-2 border-dashed border-[#1c1b19] bg-white text-center relative overflow-hidden">
          <span className="text-xs font-mono font-bold text-[#b1392b] uppercase tracking-widest block mb-1">PARTNERSHIP MEMORANDUM</span>
          <p className="text-lg text-[#1c1b19] font-serif font-black italic max-w-2xl mx-auto">
            "I design the backend, configure the tech systems, and handle DM sales directly. <span className="bg-yellow-100 px-1.5">You only focus on making high-quality coaching content.</span>"
          </p>
        </div>

      </div>
    </div>
  );
}
