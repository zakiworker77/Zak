import { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles, ArrowRight } from "lucide-react";
import { useLanguage } from "../LanguageContext";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  langCode: "ar" | "fr" | "en";
  tag?: string;
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default
  const { lang } = useLanguage();

  const faqs: FaqItem[] = [
    {
      id: "q1",
      question: "ما هي منصة Skool وكيفاش كتعاون الكوتش الرياضي فـ المغرب؟",
      answer:
        "منصة Skool هي أفضل منصة عالمية لبناء مجتمعات تدريبية باشتراك شهري (Recurring Revenue). كـ Growth Operator فـ المغرب، كنساعدو المدربين الرياضيين وصناع المحتوى يبنيو الكوميونيتي ديالهم، يأتمتو الدفع بـ الدرهم (CIH) والدولار، ويتوقفو عن تضييع الوقت فـ رسائل الواتساب.",
      langCode: "ar",
      tag: "منصة Skool المغرب",
    },
    {
      id: "q2",
      question: "كيفاش ندير كوتشينغ أونلاين فـ المغرب ونحقق دخل شهري مستقر؟",
      answer:
        "باش تنجح فـ الكوتشينغ أونلاين فـ المغرب، خاصك تبتعد عن بيع برامج PDF الرخيصة لمرة واحدة، وتبني مجتمع مدفوع (Paid Community) كيقدم متابعة أسبوعية مباشرة، برامج تغذية مغربية، والتزام يومي يضمن نتائج حقيقية للمشتركين.",
      langCode: "ar",
      tag: "أونلاين كوتشينغ بالمغرب",
    },
    {
      id: "q3",
      question: "ما هو الفرق بين Societiz و Skool بالنسبة للمدربين المغاربة؟",
      answer:
        "كلاهما كيوفر فضاء للمجتمعات، ولكن Skool كتوفر بنية تحتية عالمية مدعومة من كبار رواد الأعمال، بينما حنا كنوفرو الربط مع أنظمة الدفع البنكية المغربية لتسهيل التحويلات بالدرهم.",
      langCode: "ar",
      tag: "Societiz vs Skool Maroc",
    },
    {
      id: "q4",
      question: "Quel est le rôle d'un Growth Operator pour un coach fitness au Maroc?",
      answer:
        "Le Growth Operator prend en charge 100% de la gestion technique, la création de la communauté Skool, les tunnels de vente (Funnels) et le closing dans les DMs, sans aucun coût initial (0 DH Upfront) avec un partage des bénéfices 50/50.",
      langCode: "fr",
      tag: "Growth Operator Maroc",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="w-full py-20 px-4 md:px-6 bg-[#0F0F12] text-[#f9f7f2] border-b-2 border-[#1c1b19] relative overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_24px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 space-y-12">
        {/* Header Badge & Title */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 border border-[#f9f7f2]/20 bg-[#1c1b19]/80 px-4 py-1.5 text-xs font-mono font-bold tracking-widest uppercase text-[#38bdf8]">
            <HelpCircle className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>// KNOWLEDGE BASE & FAQ</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black font-serif tracking-tight text-[#f9f7f2]">
            {lang === "en" ? (
              <>Everything You Need to Know About <span className="text-[#38bdf8]">Skool in Morocco</span></>
            ) : (
              <>الأسئلة الشائعة حول <span className="text-[#38bdf8]">منصة Skool والتدريب فـ المغرب</span></>
            )}
          </h2>

          <p className="text-sm md:text-base text-[#f9f7f2]/70 max-w-2xl mx-auto font-serif leading-relaxed">
            {lang === "en"
              ? "Comprehensive answers for Moroccan fitness coaches, influencers, and creators looking to launch their automated recurring revenue communities."
              : "كل ما يخص إطلاق مجتمع تدريبي مدفوع، أتمتة عمليات الدفع المحلية (CIH / Wafacash)، وطريقة عمل الـ Growth Operator بنظام 50/50 بدون مصاريف مسبقة."}
          </p>
        </div>

        {/* Collapsible FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const isArabic = faq.langCode === "ar";

            return (
              <div
                key={faq.id}
                className={`border-2 transition-all duration-300 ${
                  isOpen
                    ? "border-[#38bdf8] bg-[#17171d] shadow-[4px_4px_0px_0px_#38bdf8]"
                    : "border-[#f9f7f2]/15 bg-[#141418] hover:border-[#f9f7f2]/40"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className={`w-full py-5 px-6 flex items-center justify-between gap-4 text-left transition-colors cursor-pointer ${
                    isArabic ? "flex-row-reverse text-right" : ""
                  }`}
                  aria-expanded={isOpen}
                >
                  <div className={`space-y-1.5 flex-1 ${isArabic ? "text-right" : "text-left"}`}>
                    {faq.tag && (
                      <span className="inline-block text-[10px] font-mono uppercase tracking-wider text-[#38bdf8] font-bold bg-[#38bdf8]/10 px-2 py-0.5 border border-[#38bdf8]/20">
                        {faq.tag}
                      </span>
                    )}
                    <h3
                      dir={isArabic ? "rtl" : "ltr"}
                      className="text-base md:text-lg font-bold font-serif text-[#f9f7f2] leading-snug"
                    >
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-none border border-[#f9f7f2]/20 flex items-center justify-center text-[#f9f7f2] transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#38bdf8] text-[#0F0F12] border-[#38bdf8]" : "bg-transparent"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    dir={isArabic ? "rtl" : "ltr"}
                    className={`px-6 pb-6 pt-2 text-sm md:text-base text-[#f9f7f2]/85 font-serif leading-relaxed border-t border-[#f9f7f2]/10 ${
                      isArabic ? "text-right" : "text-left"
                    }`}
                  >
                    <p className="whitespace-pre-line">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick CTA banner within FAQ */}
        <div className="p-6 bg-[#1a1a22] border-2 border-[#f9f7f2]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-[#f9f7f2]">
              {lang === "en" ? "Have a question about your community audit?" : "عندك سؤال خاص بالحساب أو الكوميونيتي ديالك؟"}
            </h4>
            <p className="text-xs text-[#f9f7f2]/60 font-serif">
              {lang === "en"
                ? "Book a free 15-minute diagnostic call or text directly on WhatsApp."
                : "تواصل مباشرة فـ الواتساب أو احجز جلسة تدقيق مجانية لـ 15 دقيقة."}
            </p>
          </div>
          <a
            href="https://wa.me/212621520455?text=Hi%20Zak!%20I%20have%20a%20question%20about%20the%20Skool%20growth%20partnership."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#38bdf8] text-[#0F0F12] text-xs font-mono font-bold uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <span>{lang === "en" ? "Chat On WhatsApp" : "تواصل فـ الواتساب"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
