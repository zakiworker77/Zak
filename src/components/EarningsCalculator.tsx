import { useState } from "react";
import { motion } from "motion/react";
import { Calculator, Users, TrendingUp, Coins } from "lucide-react";

export default function EarningsCalculator() {
  const [followers, setFollowers] = useState<number>(15000);
  const [conversionRate, setConversionRate] = useState<number>(1.0);
  const [monthlyFee, setMonthlyFee] = useState<number>(350);

  // Calculations
  const estimatedMembers = Math.round(followers * (conversionRate / 100));
  const totalMRR = estimatedMembers * monthlyFee;
  const partnerSplit = Math.round(totalMRR * 0.5);

  // Compare to 1-on-1
  const averageOneOnOnePrice = 250; // MAD
  const clientsForSameRevenue = Math.round(totalMRR / averageOneOnOnePrice);

  return (
    <div id="calculator" className="w-full py-24 px-4 bg-[#fcfbf7] border-b-2 border-[#1c1b19] relative overflow-hidden">
      {/* Editorial horizontal layout lines */}
      <div className="absolute inset-x-0 top-1/3 h-[1px] bg-[#1c1b19]/5 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block text-xs font-mono font-bold tracking-wider text-[#1c1b19] border border-[#1c1b19] bg-transparent px-4 py-1 mb-4 uppercase">
            // PARTNERSHIP AUDIT TOOL
          </div>
          <h2 className="text-3xl md:text-5xl font-black font-serif text-[#1c1b19] tracking-tight">
            The Revenue Multiplier
          </h2>
          <p className="text-[#1c1b19]/70 mt-4 text-sm md:text-base max-w-2xl mx-auto font-mono">
            Model your community potential in Moroccan Dirhams (MAD). Observe how converting a tiny, dedicated fraction of your audience changes your business mathematics.
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
                    Current Audience Base (Followers)
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
                    Target Conversion Rate (%)
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
                  <span>0.2% (CONSERVATIVE)</span>
                  <span>1.5% (AVERAGE)</span>
                  <span>4.0% (EXCELLENT)</span>
                </div>
              </div>

              {/* Monthly Subscription Fee */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <label className="text-xs font-mono font-bold text-[#1c1b19] flex items-center gap-2 uppercase tracking-wide">
                    <Coins className="w-4 h-4 text-[#b1392b]" />
                    Proposed Community Fee (MAD / Month)
                  </label>
                  <span className="text-lg font-mono font-bold text-[#1c1b19] px-3.5 py-1 bg-[#f9f7f2] border-2 border-[#1c1b19]">
                    {monthlyFee} MAD
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
                  <span>100 MAD</span>
                  <span>600 MAD</span>
                  <span>1,200 MAD</span>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-[#1c1b19]/10 flex items-start gap-3 text-[#1c1b19]/50 text-xs font-serif">
              <Calculator className="w-4 h-4 shrink-0 text-[#b1392b]" />
              <span>
                *Revenue metrics modeled on active global benchmarks. Local Moroccan billing conversion rates are optimized via direct operator integrations.
              </span>
            </div>
          </div>

          {/* Results Section - Stamped Invoice Style */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Main MRR Card */}
            <div className="bg-[#fefce8] p-8 rounded-none border-2 border-[#1c1b19] shadow-[5px_5px_0px_0px_#1c1b19] flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#1c1b19] uppercase tracking-wider block mb-2">LEDGER RECEIPT: ESTIMATED COMMUNITY MRR</span>
                
                <div className="mt-2 flex items-baseline gap-1 border-b-2 border-[#1c1b19] pb-4">
                  <span className="text-4xl md:text-5xl font-black font-mono text-[#1c1b19] tracking-tight">
                    {totalMRR.toLocaleString()}
                  </span>
                  <span className="text-sm font-mono font-bold uppercase text-[#1c1b19]/60">MAD / MONTH</span>
                </div>

                <p className="text-xs font-serif text-[#1c1b19]/70 mt-3 leading-relaxed">
                  Based on a target of <strong className="text-[#1c1b19] font-mono">{estimatedMembers} active members</strong> contributing {monthlyFee} MAD on recurring schedules.
                </p>

                <div className="mt-8 space-y-4">
                  {/* Split Display */}
                  <div className="bg-white p-4 border border-[#1c1b19]/30 flex justify-between items-center">
                    <div>
                      <p className="text-[10px] font-mono font-bold text-[#b1392b] uppercase">Your 50% Share</p>
                      <p className="text-xl font-bold font-mono text-[#1c1b19] mt-0.5">
                        +{partnerSplit.toLocaleString()} MAD/mo
                      </p>
                    </div>
                    <div className="text-right text-[9px] font-mono text-[#1c1b19]/50 leading-relaxed uppercase">
                      ZERO CASH COST<br />DONE FOR YOU
                    </div>
                  </div>

                  <div className="bg-[#fcfbf7] p-4 border border-[#1c1b19]/20 flex justify-between items-center">
                    <div>
                      <p className="text-[10px] font-mono font-bold text-[#1c1b19]/50 uppercase">Zak's 50% Management</p>
                      <p className="text-lg font-mono text-[#1c1b19]/60 mt-0.5">
                        {partnerSplit.toLocaleString()} MAD/mo
                      </p>
                    </div>
                    <div className="text-right text-[9px] font-mono text-[#1c1b19]/40 leading-relaxed uppercase">
                      COVERS SYSTEM LAUNCH<br />& DIRECT DM SALES
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#1c1b19]/10">
                <a
                  href="#audit"
                  className="block w-full text-center px-6 py-4 bg-[#1c1b19] text-[#f9f7f2] hover:bg-[#b1392b] hover:text-[#f9f7f2] transition-all font-mono font-bold uppercase tracking-wider text-xs border-2 border-[#1c1b19]"
                >
                  Apply to Reserve Placement
                </a>
              </div>
            </div>

            {/* Comparison Burnout Card */}
            <div className="bg-white p-6 rounded-none border-2 border-dashed border-[#b1392b]">
              <h4 className="text-xs font-mono font-bold text-[#b1392b] flex items-center gap-2 uppercase tracking-wider">
                ⚠️ WHATSAPP OVERHEAD ANALYSIS:
              </h4>
              <p className="text-xs font-serif text-[#1c1b19]/70 mt-2 leading-relaxed">
                To capture equivalent revenue of <span className="text-[#1c1b19] font-black">{totalMRR.toLocaleString()} MAD</span> monthly by manually selling 1-on-1 programs at a standard <span className="text-[#1c1b19]">{averageOneOnOnePrice} MAD</span> price point, you must continually lock in:
              </p>
              <div className="mt-4 flex items-center gap-4">
                <div className="px-4 py-2 border border-[#b1392b] bg-red-50">
                  <span className="text-2xl font-black font-mono text-[#b1392b]">{clientsForSameRevenue}</span>
                  <span className="text-[9px] font-mono text-[#b1392b] block uppercase font-bold leading-none mt-1">ACTIVE USERS</span>
                </div>
                <p className="text-xs font-serif text-[#1c1b19]/60 leading-normal">
                  Chasing renewal wire transfers and answering voice notes daily. A clear path to operational burnout.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
