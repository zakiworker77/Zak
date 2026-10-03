import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function BookedPage({ onNavigateHome }: { onNavigateHome: () => void }) {
  const { lang, setLang } = useLanguage();
  const isEn = lang === "en";

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
    <div 
      className="min-h-screen bg-[#0F0F12] text-[#f9f7f2] font-sans p-4 sm:p-6 md:p-12 flex flex-col items-center selection:bg-[#0055ff] selection:text-white"
      dir={isEn ? "ltr" : "rtl"}
    >
      {/* Top Navigation */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-8 gap-4">
        <button 
          onClick={onNavigateHome}
          className="flex items-center gap-2 px-3.5 py-2 border-2 border-[#f9f7f2] bg-[#1c1b19] text-[#f9f7f2] hover:bg-[#f9f7f2] hover:text-[#1c1b19] transition-all text-xs font-mono font-bold uppercase tracking-wider shadow-[3px_3px_0px_0px_#f9f7f2] cursor-pointer"
        >
          {isEn ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          <span>{isEn ? "Home" : "الرئيسية"}</span>
        </button>

        <div className="flex items-center gap-3">
          {/* Language Selector Toggle */}
          <div className="flex items-center gap-0.5 border-2 border-[#f9f7f2] bg-[#1c1b19] p-0.5 text-[10px] font-mono font-bold shadow-[2px_2px_0px_0px_#f9f7f2]">
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`px-1.5 py-0.5 transition-all ${
                lang === "en"
                  ? "bg-[#f9f7f2] text-[#1c1b19]"
                  : "text-[#f9f7f2] hover:bg-[#f9f7f2]/10"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("darija")}
              className={`px-1.5 py-0.5 transition-all ${
                lang === "darija"
                  ? "bg-[#f9f7f2] text-[#1c1b19]"
                  : "text-[#f9f7f2] hover:bg-[#f9f7f2]/10"
              }`}
            >
              DARIJA
            </button>
          </div>

          <span className="hidden sm:inline-block text-[11px] font-mono uppercase tracking-widest text-[#38bdf8] bg-[#38bdf8]/10 border border-[#38bdf8]/30 px-2.5 py-1">
            {isEn ? "● STRATEGY SESSION" : "● جلسة استراتيجية"}
          </span>
        </div>
      </div>

      {/* Header with Universal Copy */}
      <div className="max-w-3xl w-full text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#38bdf8]/15 border border-[#38bdf8]/40 text-[#38bdf8] text-xs font-mono font-bold mb-4 shadow-sm">
          <span>🔒</span>
          <span>{isEn ? "PRIVATE 15-MIN STRATEGY SESSION" : "جلسة استراتيجية خاصة // PRIVATE 15-MIN SESSION"}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif mb-5 text-[#f9f7f2] tracking-tight leading-tight">
          {isEn ? "Book Your 15-Min Strategy Session 📅" : "احجز موعد الجلسة الاستراتيجية ديالك 📅"}
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-[#f9f7f2]/90 leading-relaxed font-sans max-w-2xl mx-auto">
          {isEn ? (
            <>
              Select a date and time that suits you best on the calendar below so we can review your{" "}
              <span className="inline-block mx-1 px-2 py-0.5 bg-[#0055ff]/20 text-[#38bdf8] border border-[#0055ff]/40 font-mono font-bold text-sm md:text-base align-middle">
                Funnel
              </span>{" "}
              and present your custom{" "}
              <span className="inline-block mx-1 px-2 py-0.5 bg-[#f9f7f2]/10 border border-[#f9f7f2]/30 text-[#f9f7f2] font-mono font-bold text-sm md:text-base align-middle">
                Backend Blueprint
              </span>.
            </>
          ) : (
            <>
              عزل النهار والساعة اللي مسلكاك فـ الأجندة التحت باش نراجعو الـ{" "}
              <span 
                dir="ltr" 
                className="inline-block mx-1 px-2 py-0.5 bg-[#0055ff]/20 text-[#38bdf8] border border-[#0055ff]/40 font-mono font-bold text-sm md:text-base align-middle"
              >
                Funnel
              </span>{" "}
              ديالك ونوريك الـ{" "}
              <span 
                dir="ltr" 
                className="inline-block mx-1 px-2 py-0.5 bg-[#f9f7f2]/10 border border-[#f9f7f2]/30 text-[#f9f7f2] font-mono font-bold text-sm md:text-base align-middle"
              >
                Backend Blueprint
              </span>{" "}
              المخصص لـ حسابك.
            </>
          )}
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
