import { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../LanguageContext";

interface FaqItem {
  id: string;
  tag: {
    en: string;
    darija: string;
  };
  question: {
    en: string;
    darija: string;
  };
  answer: {
    en: string;
    darija: string;
  };
  isFrenchOriginal?: boolean;
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First question open by default
  const { lang } = useLanguage();
  const isEn = lang === "en";

  const faqs: FaqItem[] = [
    {
      id: "payments-morocco",
      tag: {
        en: "Morocco Payments (CIH / Cards)",
        darija: "طرق الدفع فـ Skool المغرب (CIH/Cards)",
      },
      question: {
        en: "How do payments work on Skool in Morocco without getting blocked?",
        darija: "كيفاش كيخدم الدفع فـ Skool فالمغرب بلا مشاكل؟",
      },
      answer: {
        en: "We integrate custom localized checkout systems that bridge direct Moroccan bank transfers (CIH Bank, Attijariwafa, Cash Plus) alongside international credit cards (Stripe / Wise). Moroccan members pay seamlessly in Dirhams (MAD), and our automated backend approves membership access immediately without needing you to manually verify transfer receipts in WhatsApp.",
        darija: "كنربطو المنصة بنظام دفع محلي مخصص كيقبل التحويلات البنكية المغربية المباشرة (CIH، التجاري وفا بنك، Cash Plus) بالإضافة للبطاقات البنكية الدولية (Stripe/Wise). المشتركين كيخلصو بالدرهم (MAD)، والسيستيم كيأكتيفي ليهم العضوية أوتوماتيكياً فـ الحين بلا ما تحتاج تصدع راسك بـ Reçus والتحقق اليدوي فـ الواتساب.",
      },
    },
    {
      id: "whatsapp-scale",
      tag: {
        en: "Scale Beyond WhatsApp & DMs",
        darija: "بديل الواتساب & أتمتة الـ DMs",
      },
      question: {
        en: "Can I scale my coaching business without wasting hours in manual WhatsApp DMs?",
        darija: "واش نقدر نسكيلي بلا ما نضيع وقتي فـ WhatsApp؟",
      },
      answer: {
        en: "Absolutely. That is the exact purpose of a Growth Operator: we replace chaotic 1-on-1 WhatsApp voice notes with an automated qualification funnel and a centralized community engine. Instead of manually answering repetitive questions for 50 leads a day, the system qualifies, charges, and onboards them on autopilot—allowing you to focus 100% on training, coaching, and content creation.",
        darija: "تماما، هدا هو الدور الحقيقي ديال الـ Growth Operator: كنبنيو Funnel أوتوماتيكي ومحتوى تسويقي كيقنع الزبون قبل ما يهضر معاك. فـ بلاصة ما تجاوب 50 واحد يدوياً فـ الواتساب على نفس الأسئلة وتضيع 4 ساعات فـ النهار فـ الأوديوات، السيستيم كيقوم بالتصفية، الدفع، وإدخال الأعضاء للكوميونيتي، ونتا كتركز 100% على التدريب وصناعة المحتوى.",
      },
    },
    {
      id: "what-is-skool",
      tag: {
        en: "Platform Architecture",
        darija: "منصة Skool المغرب",
      },
      question: {
        en: "What is Skool and how does it transform a Moroccan fitness coach's business?",
        darija: "ما هي منصة Skool وكيفاش كتعاون الكوتش الرياضي فـ المغرب؟",
      },
      answer: {
        en: "Skool is the world's leading community platform engineered for monthly recurring revenue (MRR) and gamified member retention. As a Growth Operator in Morocco, we build your complete coaching ecosystem, automate local MAD payments, and turn one-time followers into high-retention monthly paying members.",
        darija: "منصة Skool هي أفضل منصة عالمية لبناء مجتمعات تدريبية باشتراك شهري (Recurring Revenue). كـ Growth Operator فـ المغرب، كنساعدو المدربين الرياضيين وصناع المحتوى يبنيو الكوميونيتي ديالهم، يأتمتو الدفع بـ الدرهم (CIH) والدولار، ويتوقفو عن تضييع الوقت فـ رسائل الواتساب وبيع ملفات الـ PDF.",
      },
    },
    {
      id: "how-to-start-online",
      tag: {
        en: "Online Coaching Morocco",
        darija: "أونلاين كوتشينغ بالمغرب",
      },
      question: {
        en: "How do I build a sustainable, high-income online coaching business in Morocco?",
        darija: "كيفاش ندير كوتشينغ أونلاين فـ المغرب ونحقق دخل شهري مستقر؟",
      },
      answer: {
        en: "To succeed with online coaching in Morocco, you must transition away from selling cheap one-time PDF workout plans. Instead, build a premium Paid Community offering weekly live calls, Moroccan meal prep databases, and daily accountability that guarantees visible client results.",
        darija: "باش تنجح فـ الكوتشينغ أونلاين فـ المغرب، خاصك تبتعد عن بيع برامج PDF الرخيصة لمرة واحدة، وتبني مجتمع مدفوع (Paid Community) كيقدم متابعة أسبوعية مباشرة، برامج تغذية مغربية، والتزام يومي يضمن نتائج حقيقية للمشتركين.",
      },
    },
    {
      id: "societiz-vs-skool",
      tag: {
        en: "Societiz vs Skool Maroc",
        darija: "مقارنة Societiz و Skool",
      },
      question: {
        en: "What is the difference between Societiz and Skool for Moroccan creators?",
        darija: "ما هو الفرق بين Societiz و Skool بالنسبة للمدربين المغاربة؟",
      },
      answer: {
        en: "While both provide spaces for groups, Skool delivers world-class gamification, mobile speed, and massive community engagement. We provide custom Moroccan banking integration on top of Skool so you get the best global platform with frictionless local Dirham payouts.",
        darija: "كلاهما كيوفر فضاء للمجتمعات، ولكن Skool كتوفر بنية تحتية عالمية مدعومة من كبار رواد الأعمال وأنظمة تشجيعية وتطبيقات سريعة، بينما حنا كنوفرو الربط مع أنظمة الدفع البنكية المغربية لتسهيل التحويلات بالدرهم.",
      },
    },
    {
      id: "growth-operator-role",
      tag: {
        en: "Growth Operator Maroc",
        darija: "دور الـ Growth Operator",
      },
      question: {
        en: "Quel est le rôle d'un Growth Operator pour un coach fitness au Maroc? (Role of a Growth Operator)",
        darija: "Quel est le rôle d'un Growth Operator pour un coach fitness au Maroc؟",
      },
      answer: {
        en: "The Growth Operator takes 100% responsibility for the technical build, Skool community configuration, sales funnels, DM qualification, and local payment gateways at 0 MAD upfront cost—partnering with the coach on a 50/50 profit-share model.",
        darija: "Le Growth Operator prend en charge 100% de la gestion technique, la création de la communauté Skool, les tunnels de vente (Funnels) et le closing dans les DMs, sans aucun coût initial (0 DH Upfront) avec un partage des bénéfices 50/50.",
      },
      isFrenchOriginal: true,
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
            <span>// KNOWLEDGE BASE & FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black font-serif tracking-tight text-[#f9f7f2]">
            {isEn ? (
              <>Everything You Need to Know About <span className="text-[#38bdf8]">Skool & Growth in Morocco</span></>
            ) : (
              <>الأسئلة الشائعة حول <span className="text-[#38bdf8]">منصة Skool والدفع وتطوير الكوتشينغ فـ المغرب</span></>
            )}
          </h2>

          <p className="text-sm md:text-base text-[#f9f7f2]/70 max-w-2xl mx-auto font-serif leading-relaxed">
            {isEn
              ? "Direct answers on monetization, localized Moroccan bank transfers (CIH / Attijariwafa), automating WhatsApp DMs, and scaling recurring monthly revenue (MRR)."
              : "كل ما يخص إطلاق مجتمع تدريبي مدفوع، أتمتة عمليات الدفع بالدرهم (CIH / Wafacash)، التخلص من إرهاق الواتساب، وطريقة عمل الـ Growth Operator بنظام 50/50 بدون مصاريف مسبقة."}
          </p>
        </div>

        {/* Collapsible FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const currentTag = isEn ? faq.tag.en : faq.tag.darija;
            const currentQuestion = isEn ? faq.question.en : faq.question.darija;
            const currentAnswer = isEn ? faq.answer.en : faq.answer.darija;
            const isArabicText = !isEn && !faq.isFrenchOriginal;

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
                  className={`w-full py-5 px-6 flex items-center justify-between gap-4 transition-colors cursor-pointer ${
                    isArabicText ? "flex-row-reverse text-right" : "text-left"
                  }`}
                  aria-expanded={isOpen}
                >
                  <div className={`space-y-1.5 flex-1 ${isArabicText ? "text-right" : "text-left"}`}>
                    <span className="inline-block text-[10px] font-mono uppercase tracking-wider text-[#38bdf8] font-bold bg-[#38bdf8]/10 px-2.5 py-0.5 border border-[#38bdf8]/25">
                      {currentTag}
                    </span>
                    <h3
                      dir={isArabicText ? "rtl" : "ltr"}
                      className="text-base md:text-lg font-bold font-serif text-[#f9f7f2] leading-snug"
                    >
                      {currentQuestion}
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
                    dir={isArabicText ? "rtl" : "ltr"}
                    className={`px-6 pb-6 pt-2 text-sm md:text-base text-[#f9f7f2]/85 font-serif leading-relaxed border-t border-[#f9f7f2]/10 ${
                      isArabicText ? "text-right" : "text-left"
                    }`}
                  >
                    <p className="whitespace-pre-line">{currentAnswer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick CTA banner within FAQ */}
        <div className="p-6 bg-[#1a1a22] border-2 border-[#f9f7f2]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-[#f9f7f2] flex items-center justify-center sm:justify-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#38bdf8]" />
              {isEn ? "Ready to scale your fitness audience?" : "مستعد تبني الكوميونيتي ديالك وتأتمت المبيعات؟"}
            </h4>
            <p className="text-xs text-[#f9f7f2]/60 font-serif">
              {isEn
                ? "Book a free 15-minute diagnostic call or reach out directly on WhatsApp."
                : "احجز جلسة تدقيق مجانية لـ 15 دقيقة أو تواصل معايا مباشرة فـ الواتساب."}
            </p>
          </div>
          <a
            href="https://wa.me/212621520455?text=Hi%20Zak!%20I%20have%20a%20question%20about%20the%20Skool%20growth%20partnership."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#38bdf8] text-[#0F0F12] text-xs font-mono font-bold uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <span>{isEn ? "Chat On WhatsApp" : "تواصل فـ الواتساب"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
