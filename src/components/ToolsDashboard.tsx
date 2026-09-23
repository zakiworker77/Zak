import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const Card = ({ title, children, className = "" }: { title: string, children: React.ReactNode, className?: string }) => (
  <div className={`bg-[#1c1b19] border-2 border-[#f9f7f2] p-6 shadow-[6px_6px_0px_0px_#f9f7f2] ${className}`}>
    <h3 className="text-[#f9f7f2]/70 text-xs font-mono uppercase tracking-widest mb-4 border-b border-[#f9f7f2]/20 pb-2">{title}</h3>
    {children}
  </div>
);

const Input = ({ label, value, onChange, min, max }: { label: string, value: number, onChange: (val: number) => void, min: number, max: number }) => (
  <div className="mb-4">
    <label className="block text-[#f9f7f2] text-sm font-mono mb-2">{label}</label>
    <div className="flex items-center gap-4">
      <input 
        type="range" 
        min={min} 
        max={max} 
        value={value} 
        onChange={(e) => onChange(Number(e.target.value))}
        className="flex-grow h-2 bg-[#f9f7f2]/10 rounded-none appearance-none cursor-pointer accent-[#0055FF]"
      />
      <input 
        type="number" 
        value={value} 
        onChange={(e) => {
          const val = e.target.value;
          onChange(val === "" ? 0 : Number(val));
        }}
        onFocus={(e) => e.target.select()}
        className="w-24 bg-[#1c1b19] text-[#f9f7f2] border-2 border-[#f9f7f2] p-2 text-sm font-mono focus:outline-none focus:border-[#0055FF]"
      />
    </div>
  </div>
);

export default function ToolsDashboard() {
  const [activeTab, setActiveTab] = useState(0);
  
  // Tab 1 State
  const [storyViews, setStoryViews] = useState(10000);
  const [linkClicks, setLinkClicks] = useState(80);

  // Tab 2 State
  const [inboundDMs, setInboundDMs] = useState(100);
  const [clientsClosed, setClientsClosed] = useState(5);
  const [programPrice, setProgramPrice] = useState(400);

  // Tab 3 State
  const [followers, setFollowers] = useState(50000);
  const [convRate, setConvRate] = useState(0.4);
  const [monthlyFee, setMonthlyFee] = useState(350);

  // Tab 4 State
  const [churnRate, setChurnRate] = useState(8);
  // Tab 5 State
  const [commPrice, setCommPrice] = useState(100);
  const [commClients, setCommClients] = useState(50);

  const tabs = ["Story Leak", "WhatsApp Lost Cash", "Skool MRR", "LTV Engine", "Community Rev"];

  // Calculations
  const ctr = (linkClicks / storyViews) * 100;
  
  const whatsappCloseRate = (clientsClosed / inboundDMs) * 100;
  const currentWhatsAppRev = clientsClosed * programPrice;
  const benchmarkCloseRate = 15;
  const potentialWhatsAppRev = inboundDMs * (benchmarkCloseRate / 100) * programPrice;
  const lostCash = potentialWhatsAppRev - currentWhatsAppRev;

  const activeMembers = Math.round(followers * (convRate / 100));
  const totalMRR = activeMembers * monthlyFee;
  const split = totalMRR * 0.5;

  const retentionMonths = 100 / churnRate;
  const ltv = programPrice * retentionMonths;
  const commRevenue = commPrice * commClients;

  return (
    <div className="min-h-screen bg-[#1c1b19] text-[#f9f7f2] font-sans p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <a href="/" className="p-2 border-2 border-[#f9f7f2] hover:bg-[#f9f7f2] hover:text-[#1c1b19] transition-all">
            <ArrowLeft className="w-5 h-5" />
          </a>
          <h1 className="text-3xl font-serif font-black text-[#f9f7f2]">Operator Diagnostic Dashboard</h1>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-8 border-b-2 border-[#f9f7f2] pb-2">
          {tabs.map((tab, idx) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-widest transition-all ${activeTab === idx ? "bg-[#f9f7f2] text-[#1c1b19]" : "text-[#f9f7f2]/60 hover:text-[#f9f7f2]"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card title="Input Metrics">
              <Input label="Story Views" value={storyViews} onChange={setStoryViews} min={1000} max={50000} />
              <Input label="Link Clicks" value={linkClicks} onChange={setLinkClicks} min={10} max={2000} />
            </Card>
            <Card title="Diagnostic Output">
              <div className="text-5xl font-black mb-4 font-serif">{ctr.toFixed(2)}% <span className="text-sm font-normal font-mono text-[#f9f7f2]/60">CTR</span></div>
              {ctr < 1 ? <div className="bg-[#FF3E3E] text-[#f9f7f2] p-3 font-mono text-sm border-2 border-[#f9f7f2]">🚨 تسريب حاد (Severe Leak) - 99%+ of viewers drop off.</div> :
               ctr < 3 ? <div className="bg-[#EAB308] text-[#1c1b19] p-3 font-mono text-sm border-2 border-[#f9f7f2]">⚠️ متوسط (Average) - Needs Funnel Optimization.</div> :
               <div className="bg-[#22C55E] text-[#1c1b19] p-3 font-mono text-sm border-2 border-[#f9f7f2]">✅ ممتاز (High Intent).</div>}
              <div className="mt-4 p-3 bg-[#f9f7f2]/5 border border-[#f9f7f2]/10 text-xs font-mono text-[#f9f7f2]/70">
                <strong>Consultant Insight:</strong> Normal CTR is 2-5%. If below 1%, the CTA/Funnel is likely broken.
              </div>
            </Card>
          </div>
        )}

        {activeTab === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card title="WhatsApp Audit Inputs">
              <Input label="Monthly Inquiries" value={inboundDMs} onChange={setInboundDMs} min={10} max={1000} />
              <Input label="Clients Closed" value={clientsClosed} onChange={setClientsClosed} min={0} max={100} />
              <Input label="Program Price (MAD)" value={programPrice} onChange={setProgramPrice} min={100} max={2000} />
            </Card>
            <Card title="Lost Revenue Audit">
              <div className="text-sm font-mono mb-4">Close Rate: <span className="text-[#0055FF] font-bold">{whatsappCloseRate.toFixed(1)}%</span></div>
              <div className="text-sm font-mono mb-4">Current Revenue: <span className="text-[#22C55E] font-bold">{currentWhatsAppRev} MAD</span></div>
              <div className="bg-[#FF3E3E] text-[#f9f7f2] p-4 mt-4 border-2 border-[#f9f7f2]">
                <div className="text-xs font-mono uppercase">💸 Monthly Lost Cash</div>
                <div className="text-4xl font-black font-serif">{lostCash.toFixed(0)} MAD</div>
              </div>
              <div className="mt-4 p-3 bg-[#f9f7f2]/5 border border-[#f9f7f2]/10 text-xs font-mono text-[#f9f7f2]/70">
                <strong>Consultant Insight:</strong> Manual close rate is ~5%. With a proper automated system, you should target 15-20%+.
              </div>
            </Card>
          </div>
        )}

        {activeTab === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card title="Skool Engine Inputs">
              <Input label="Follower Count" value={followers} onChange={setFollowers} min={1000} max={200000} />
              <Input label="Conversion Rate (%)" value={convRate} onChange={setConvRate} min={0.1} max={2.0} />
              <Input label="Monthly Fee (MAD)" value={monthlyFee} onChange={setMonthlyFee} min={100} max={1000} />
            </Card>
            <Card title="Skool Profit Display">
              <div className="mb-2 font-mono text-sm">Active Members: <span className="font-bold">{activeMembers}</span></div>
              <div className="text-3xl font-black mb-6 font-serif">Total MRR: <span className="text-[#22C55E]">{totalMRR} MAD</span></div>
              <div className="bg-[#22C55E] text-[#1c1b19] p-4 mb-4 border-2 border-[#f9f7f2]">
                <div className="text-xs font-mono uppercase font-bold">🏆 COACH SHARE (50%)</div>
                <div className="text-2xl font-black font-serif">{split.toFixed(0)} MAD / Mo</div>
              </div>
              <div className="bg-[#0055FF] text-[#f9f7f2] p-4 border-2 border-[#f9f7f2]">
                <div className="text-xs font-mono uppercase font-bold">⚙️ OPERATOR SHARE (50%)</div>
                <div className="text-2xl font-black font-serif">{split.toFixed(0)} MAD / Mo</div>
              </div>
              <div className="mt-4 p-3 bg-[#f9f7f2]/5 border border-[#f9f7f2]/10 text-xs font-mono text-[#f9f7f2]/70">
                <strong>Consultant Insight:</strong> At {convRate}% conversion, your followers are a goldmine. ARR: {(totalMRR * 12).toFixed(0)} MAD.
              </div>
            </Card>
          </div>
        )}

        {activeTab === 3 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card title="LTV Inputs">
              <Input label="Monthly Churn Rate (%)" value={churnRate} onChange={setChurnRate} min={2} max={25} />
            </Card>
            <Card title="Retention Analysis">
              <div className="text-xl mb-2 font-mono">Avg Retention: <span className="text-[#f9f7f2] font-black">{retentionMonths.toFixed(1)} Months</span></div>
              <div className="text-4xl font-black mb-6 font-serif">LTV: <span className="text-[#0055FF]">{ltv.toFixed(0)} MAD</span></div>
              <div className="bg-[#1c1b19] border-2 border-[#f9f7f2] p-4 text-sm font-mono text-[#f9f7f2]">
                This member is worth <span className="text-[#f9f7f2] font-black">{(ltv / 200).toFixed(1)}x</span> more than a one-off 200 DH PDF.
              </div>
              <div className="mt-4 p-3 bg-[#f9f7f2]/5 border border-[#f9f7f2]/10 text-xs font-mono text-[#f9f7f2]/70">
                <strong>Consultant Insight:</strong> High churn destroys compounding. Target less than 8% to build long-term wealth.
              </div>
            </Card>
          </div>
        )}

        {activeTab === 4 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card title="Community Revenue Inputs">
              <Input label="Price ($)" value={commPrice} onChange={setCommPrice} min={1} max={5000} />
              <Input label="Number of Clients" value={commClients} onChange={setCommClients} min={1} max={5000} />
            </Card>
            <Card title="Total Revenue Output">
              <div className="text-5xl font-black mb-4 font-serif text-[#22C55E]">{commRevenue} $</div>
              <div className="mt-4 p-3 bg-[#f9f7f2]/5 border border-[#f9f7f2]/10 text-xs font-mono text-[#f9f7f2]/70">
                <strong>Consultant Insight:</strong> This calculator quickly shows the revenue generated by another community's pricing model. Compare this to your potential model.
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
