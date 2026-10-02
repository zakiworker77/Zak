import { useState, useEffect } from "react";
import { 
  Calculator, 
  Users, 
  TrendingUp, 
  Coins, 
  ArrowRight, 
  Sparkles, 
  SlidersHorizontal,
  RefreshCw,
  Plus
} from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function EarningsCalculator() {
  const [followers, setFollowers] = useState<number>(15000);
  const [conversionRate, setConversionRate] = useState<number>(1.0);
  const [monthlyFee, setMonthlyFee] = useState<number>(350);
  
  // Custom 1-on-1 baseline income
  const [customOneOnOneRevenue, setCustomOneOnOneRevenue] = useState<number | null>(null);
  const [isCustomMode, setIsCustomMode] = useState<boolean>(false);
  const oneOnOneClientPrice = 400; // Average MAD per 1-on-1 program

  const { lang } = useLanguage();
  const isEn = lang === "en";

  // Community Calculations
  const estimatedMembers = Math.round(followers * (conversionRate / 100));
  const totalMRR = estimatedMembers * monthlyFee;
  const partnerSplit = Math.round(totalMRR * 0.5);

  // Auto-calculated 1-on-1 estimation (benchmark: ~0.1% follower conversion at 400 DH)
  const autoEstimated1on1Clients = Math.max(1, Math.round(followers * 0.001));
  const autoEstimated1on1Revenue = autoEstimated1on1Clients * oneOnOneClientPrice;

  // Active 1-on-1 baseline used for comparison
  const currentOneOnOneRevenue = isCustomMode && customOneOnOneRevenue !== null 
    ? customOneOnOneRevenue 
    : autoEstimated1on1Revenue;

  const currentOneOnOneClients = Math.max(1, Math.round(currentOneOnOneRevenue / oneOnOneClientPrice));

  // Combined Total Income (1-on-1 + Skool Community)
  const totalCombinedIncome = currentOneOnOneRevenue + partnerSplit;
  const growthMultiplier = (totalCombinedIncome / Math.max(1, currentOneOnOneRevenue)).toFixed(1);
  const communityVs1on1Multiplier = (partnerSplit / Math.max(1, currentOneOnOneRevenue)).toFixed(1);

  useEffect(() => {
    if (!isCustomMode) {
      setCustomOneOnOneRevenue(autoEstimated1on1Revenue);
    }
  }, [followers, autoEstimated1on1Revenue, isCustomMode]);

  return (
    <section id="calculator" className="w-full py-16 md:py-20 px-4 bg-[#fcfbf7] border-b-2 border-[#1c1b19] relative">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-10 space-y-2">
          <div className="inline-block text-[11px] font-mono font-bold tracking-wider text-[#1c1b19] border border-[#1c1b19] bg-transparent px-3 py-0.5 uppercase">
            {isEn ? "// REVENUE MULTIPLIER" : "// حاسبة المدخول الشهري"}
          </div>

          <h2 className="text-2xl md:text-4xl font-black font-serif text-[#1c1b19] tracking-tight">
            {isEn ? "Community vs 1-on-1 Revenue Calculator 🧮" : "حاسبة مقارنة وتطوير المدخول الشهري 🧮"}
          </h2>

          <p className="text-[#1c1b19]/70 text-xs md:text-sm max-w-xl mx-auto font-sans leading-relaxed">
            {isEn 
              ? "See how adding an automated Skool community expands your monthly income on top of traditional coaching."
              : "شوف كيفاش إضافة مجتمع Skool المؤتمت كيضاعف مدخولك الإجمالي مع التدريب الفردي الحالي."}
          </p>
        </div>

        {/* Main Side-by-Side Compact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Sliders & Inputs */}
          <div className="lg:col-span-6 bg-white p-5 md:p-6 border-2 border-[#1c1b19] shadow-[4px_4px_0px_0px_#1c1b19] flex flex-col justify-between space-y-6">
            
            <div className="space-y-5">
              
              {/* 1. Followers Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-[#1c1b19]">
                  <label className="flex items-center gap-1.5 uppercase font-mono">
                    <Users className="w-3.5 h-3.5 text-[#1d4ed8]" />
                    <span>{isEn ? "Followers" : "عدد المتابعين"}</span>
                  </label>
                  <span className="font-mono px-2 py-0.5 bg-[#f9f7f2] border border-[#1c1b19]">
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
                  className="w-full h-1.5 bg-[#1c1b19]/10 rounded-none appearance-none cursor-pointer accent-[#1c1b19]"
                />
              </div>

              {/* 2. Conversion Rate Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-[#1c1b19]">
                  <label className="flex items-center gap-1.5 uppercase font-mono">
                    <TrendingUp className="w-3.5 h-3.5 text-[#1d4ed8]" />
                    <span>{isEn ? "Conversion Rate" : "نسبة التحويل للكوميونيتي"}</span>
                  </label>
                  <span className="font-mono px-2 py-0.5 bg-[#f9f7f2] border border-[#1c1b19]">
                    {conversionRate.toFixed(1)}% ({estimatedMembers} {isEn ? "members" : "عضو"})
                  </span>
                </div>
                <input
                  type="range"
                  min="0.2"
                  max="3.0"
                  step="0.1"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-[#1c1b19]/10 rounded-none appearance-none cursor-pointer accent-[#1c1b19]"
                />
              </div>

              {/* 3. Monthly Community Fee */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-[#1c1b19]">
                  <label className="flex items-center gap-1.5 uppercase font-mono">
                    <Coins className="w-3.5 h-3.5 text-[#1d4ed8]" />
                    <span>{isEn ? "Community Fee" : "ثمن الاشتراك الشهري"}</span>
                  </label>
                  <span className="font-mono px-2 py-0.5 bg-[#f9f7f2] border border-[#1c1b19]">
                    {monthlyFee} DH / {isEn ? "mo" : "شهر"}
                  </span>
                </div>
                <input
                  type="range"
                  min="150"
                  max="800"
                  step="50"
                  value={monthlyFee}
                  onChange={(e) => setMonthlyFee(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-[#1c1b19]/10 rounded-none appearance-none cursor-pointer accent-[#1c1b19]"
                />
              </div>

              {/* 4. Compact 1-on-1 Editable Input */}
              <div className="pt-4 border-t border-[#1c1b19]/15 bg-[#f9f7f2] p-3.5 border border-[#1c1b19]/20 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#b1392b] flex items-center gap-1">
                    <SlidersHorizontal className="w-3 h-3" />
                    <span>{isEn ? "Current 1-on-1 Monthly Income:" : "مدخولك الحالي بالتدريب الفردي:"}</span>
                  </span>
                  {isCustomMode && (
                    <button
                      type="button"
                      onClick={() => {
                        setIsCustomMode(false);
                        setCustomOneOnOneRevenue(autoEstimated1on1Revenue);
                      }}
                      className="text-[10px] font-mono text-[#1d4ed8] hover:underline flex items-center gap-0.5"
                    >
                      <RefreshCw className="w-2.5 h-2.5" />
                      <span>{isEn ? "Auto" : "تلقائي"}</span>
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <input
                      type="number"
                      value={currentOneOnOneRevenue}
                      onChange={(e) => {
                        const val = e.target.value === "" ? 0 : Math.max(0, parseInt(e.target.value));
                        setIsCustomMode(true);
                        setCustomOneOnOneRevenue(val);
                      }}
                      className="w-full px-2.5 py-1.5 bg-white border border-[#1c1b19] font-mono font-bold text-xs text-[#1c1b19] focus:outline-none focus:border-[#1d4ed8]"
                      placeholder="6000"
                    />
                    <span className="absolute right-2 top-1.5 text-[10px] font-mono text-[#1c1b19]/50 font-bold">
                      DH/{isEn ? "mo" : "شهر"}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono text-[#1c1b19]/60 shrink-0">
                    (~{currentOneOnOneClients} {isEn ? "clients" : "زبون"})
                  </span>
                </div>
              </div>

            </div>

            <div className="pt-2 flex items-center gap-2 text-[#1c1b19]/50 text-[10px] font-mono">
              <Calculator className="w-3 h-3 text-[#1d4ed8] shrink-0" />
              <span>{isEn ? "50/50 net split with zero upfront fees." : "تقاسم أرباح 50/50 وبدون أي مصاريف مسبقة."}</span>
            </div>
          </div>

          {/* Right Column: Combined Results & Comparison Display */}
          <div className="lg:col-span-6 bg-[#fefce8] p-5 md:p-6 border-2 border-[#1c1b19] shadow-[4px_4px_0px_0px_#1c1b19] flex flex-col justify-between space-y-5">
            
            <div>
              {/* Header MRR */}
              <div className="flex justify-between items-start border-b-2 border-[#1c1b19] pb-3">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#1c1b19]/60 uppercase tracking-wider block">
                    {isEn ? "Skool Community Revenue (MRR)" : "مدخول مجتمع Skool الشهري (MRR)"}
                  </span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-3xl md:text-4xl font-black font-mono text-[#1c1b19]">
                      {totalMRR.toLocaleString()}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#1c1b19]/60 uppercase">
                      DH / {isEn ? "mo" : "شهر"}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[9px] font-mono font-bold text-[#1d4ed8] uppercase block">
                    {isEn ? "Your 50% Skool Share" : "نصيبك الصافي من Skool (50%)"}
                  </span>
                  <span className="text-xl md:text-2xl font-black font-mono text-[#1d4ed8]">
                    +{partnerSplit.toLocaleString()} DH
                  </span>
                </div>
              </div>

              {/* Direct Compact Comparison & Total Combination Matrix */}
              <div className="mt-4 space-y-2.5">
                
                <div className="grid grid-cols-2 gap-2.5">
                  {/* Box 1: 1-on-1 */}
                  <div className="p-3 bg-white border border-[#b1392b] space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold text-[#b1392b] uppercase">
                        {isEn ? "1. Current 1-on-1" : "1. التدريب الفردي"}
                      </span>
                    </div>
                    <p className="text-base font-black font-mono text-[#b1392b]">
                      {currentOneOnOneRevenue.toLocaleString()} DH
                    </p>
                    <p className="text-[10px] text-[#1c1b19]/60 font-sans leading-tight">
                      {isEn ? `~${currentOneOnOneClients} clients in DMs` : `~${currentOneOnOneClients} زبون ومتابعة يدوية`}
                    </p>
                  </div>

                  {/* Box 2: Skool Community */}
                  <div className="p-3 bg-white border-2 border-[#1d4ed8] space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold text-[#1d4ed8] uppercase">
                        {isEn ? "2. Skool Net Income" : "2. مدخول Skool الصافي"}
                      </span>
                    </div>
                    <p className="text-base font-black font-mono text-[#1d4ed8]">
                      +{partnerSplit.toLocaleString()} DH
                    </p>
                    <p className="text-[10px] text-[#1c1b19]/60 font-sans leading-tight">
                      {isEn ? `${estimatedMembers} recurring members` : `${estimatedMembers} عضو باشتراك مؤتمت`}
                    </p>
                  </div>
                </div>

                {/* Box 3: TOTAL PROJECTED MONTHLY CASHFLOW (Total New Income) */}
                <div 
                  dir={isEn ? "ltr" : "rtl"}
                  className="p-3 bg-white border-2 border-[#1c1b19] shadow-[2px_2px_0px_0px_#1c1b19] space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#1c1b19]">
                      <Sparkles className="w-3.5 h-3.5 text-[#e2a13b] shrink-0" />
                      <span>{isEn ? "Total Projected Monthly Income (1 + 2):" : "مجموع المدخول الشهري المتوقع (1 + 2):"}</span>
                    </div>

                    <span className="px-2 py-0.5 bg-[#1d4ed8] text-white text-[10px] font-mono font-bold shrink-0">
                      {growthMultiplier}x {isEn ? "Total Growth" : "تضاعف إجمالي"}
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between pt-1 border-t border-[#1c1b19]/10">
                    <span className="text-xl md:text-2xl font-black font-mono text-[#1c1b19]">
                      {totalCombinedIncome.toLocaleString()} DH / {isEn ? "month" : "شهر"}
                    </span>
                    <span className="text-[10px] font-mono text-[#1d4ed8] font-bold">
                      {isEn ? `Skool adds +${partnerSplit.toLocaleString()} DH/mo` : `(سكول كتزيدك +${partnerSplit.toLocaleString()} درهم صافية)`}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Direct CTA */}
            <div className="pt-2">
              <a
                href="/audit"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, "", "/audit");
                  window.dispatchEvent(new PopStateEvent("popstate"));
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="w-full text-center py-3 bg-[#1c1b19] text-[#f9f7f2] hover:bg-[#1d4ed8] hover:text-[#f9f7f2] transition-all font-mono font-bold uppercase tracking-wider text-xs border-2 border-[#1c1b19] flex items-center justify-center gap-2 shadow-[2px_2px_0px_0px_#1c1b19]"
              >
                <span>{isEn ? "Apply for 15-Min Strategy Call" : "احجز جلسة تدقيق مجانية (15 دقيقة)"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
