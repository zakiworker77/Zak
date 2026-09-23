import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

export default function BookedPage({ onNavigateHome }: { onNavigateHome: () => void }) {
  useEffect(() => {
    // Load Calendly script if not already present
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0F0F12] text-[#f9f7f2] font-sans p-4 sm:p-6 md:p-12 flex flex-col items-center selection:bg-[#0055ff] selection:text-white">
      {/* Top Navigation */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-8">
        <button 
          onClick={onNavigateHome}
          className="flex items-center gap-2 px-3.5 py-2 border-2 border-[#f9f7f2] bg-[#1c1b19] text-[#f9f7f2] hover:bg-[#f9f7f2] hover:text-[#1c1b19] transition-all text-xs font-mono font-bold uppercase tracking-wider shadow-[3px_3px_0px_0px_#f9f7f2]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Home</span>
        </button>

        <span className="text-[11px] font-mono uppercase tracking-widest text-[#22C55E] bg-[#22C55E]/10 border border-[#22C55E]/30 px-2.5 py-1">
          ● Application Verified
        </span>
      </div>

      {/* Header with Perfect RTL BiDi Handling */}
      <div className="max-w-3xl w-full text-center mb-10" dir="rtl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#22C55E]/15 border border-[#22C55E]/40 text-[#22C55E] text-xs font-mono font-bold mb-4">
          <span>✓</span>
          <span>طلب التدقيق وصل بنجاح</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif mb-5 text-[#f9f7f2] tracking-tight leading-tight">
          طلب التدقيق وصل بنجاح! ✅
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-[#f9f7f2]/90 leading-relaxed font-sans max-w-2xl mx-auto">
          الخطوة الأخيرة: عزل نهار وساعة فـ الأجندة التحت باش نديرو{" "}
          <span 
            dir="ltr" 
            className="inline-block mx-1.5 px-2.5 py-0.5 bg-[#0055ff]/15 text-[#0055ff] border border-[#0055ff]/40 font-mono font-bold text-sm md:text-base align-middle shadow-[2px_2px_0px_0px_#0055ff]"
          >
            15-Minute Strategy Call
          </span>{" "}
          ونوريك الـ{" "}
          <span 
            dir="ltr" 
            className="inline-block mx-1 px-2 py-0.5 bg-[#f9f7f2]/10 border border-[#f9f7f2]/30 text-[#f9f7f2] font-mono font-bold text-sm md:text-base align-middle"
          >
            Blueprint
          </span>{" "}
          ديالك.
        </p>
      </div>

      {/* Calendly Container */}
      <div className="w-full max-w-4xl bg-[#1c1b19] border-2 border-[#f9f7f2] shadow-[8px_8px_0px_0px_#f9f7f2] p-1.5 sm:p-4 rounded-none">
        <div 
          className="calendly-inline-widget w-full" 
          data-url="https://calendly.com/growupwithzak/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=1c1b19&text_color=f9f7f2&primary_color=0055ff" 
          style={{ minWidth: "320px", height: "1000px", width: "100%" }}
        />
      </div>

      {/* Minimalist Footer */}
      <footer className="mt-16 text-[10px] font-mono text-[#f9f7f2]/40 uppercase tracking-widest text-center">
        © {new Date().getFullYear()} Zak. All rights reserved. Registered in Morocco.
      </footer>
    </div>
  );
}
