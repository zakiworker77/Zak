import React, { useState, useMemo } from "react";
import { 
  BookOpen, 
  ArrowLeft, 
  Search, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  Award
} from "lucide-react";
import { useLanguage } from "../LanguageContext";

interface FounderCard {
  name: string;
  role: string;
  imageSrc: string;
  fallbackInitials: string;
  description: string;
  tag: string;
}

interface BlogPostContent {
  intro: string;
  sections: {
    heading: string;
    body: string[];
    quote?: string;
    highlightBox?: string;
    showFounders?: boolean;
    comparisonTable?: {
      headers: [string, string];
      rows: [string, string][];
    };
  }[];
  conclusion: string;
  ctaHeadline?: string;
  ctaSubtext?: string;
  ctaButtonText?: string;
}

interface BlogPost {
  id: string;
  slug: string;
  title: {
    en: string;
    darija: string;
  };
  excerpt: {
    en: string;
    darija: string;
  };
  category: {
    en: string;
    darija: string;
  };
  date: {
    en: string;
    darija: string;
  };
  readTime: {
    en: string;
    darija: string;
  };
  author: string;
  featured?: boolean;
  hasFoundersSection?: boolean;
  founders?: {
    en: FounderCard[];
    darija: FounderCard[];
  };
  content: {
    en: BlogPostContent;
    darija: BlogPostContent;
  };
}

export default function BlogPage({ onNavigateHome }: { onNavigateHome: () => void }) {
  const { lang, setLang } = useLanguage();
  const isEn = lang === "en";

  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(isEn ? "All" : "الكل");
  const [logoError, setLogoError] = useState(false);
  const [skoolLogoError, setSkoolLogoError] = useState(false);
  const [samImgError, setSamImgError] = useState(false);
  const [alexImgError, setAlexImgError] = useState(false);

  const posts: BlogPost[] = useMemo(() => [
    {
      id: "death-of-online-course-skool-blueprint-2026",
      slug: "death-of-online-course-skool-blueprint-2026",
      title: {
        en: "The Death of the Online Course: Why Skool Communities Are The New $10K/Month Blueprint in 2026",
        darija: "نهاية عصر بيع الكورسات القديمة: علاش مجتمعات Skool هي الموديل الجديد لـ 10K+ دولار فـ الشهر فـ 2026"
      },
      excerpt: {
        en: "Why pre-recorded video courses and static PDFs no longer generate recurring wealth in 2026, and how combining interactive Skool communities with subscription revenue (MRR) became the #1 digital asset for coaches.",
        darija: "علاش بيع الكورسات المسجلة وملفات الـ PDF مابقاش كيدخل الفلوس فـ 2026، وكيفاش دمج مجتمعات Skool التفاعلية مع نظام الاشتراكات الشهرية (MRR) ولا هو أقوى بيزنس رقمي لصناع المحتوى والمدربين."
      },
      category: {
        en: "Market Insights",
        darija: "تحليل السوق"
      },
      date: {
        en: "October 2026",
        darija: "أكتوبر 2026"
      },
      readTime: {
        en: "5 min read",
        darija: "5 دقائق"
      },
      author: "Zakaria | Growth Operator",
      featured: true,
      hasFoundersSection: true,
      founders: {
        en: [
          {
            name: "Sam Ovens",
            role: "Founder & Chief Architect",
            imageSrc: "/Sam-Ovens.jpg",
            fallbackInitials: "SO",
            description: "Spent 5 years building the distraction-free infrastructure of Skool to eliminate advertising noise and engineer an environment where member accountability produces real client results.",
            tag: "Founder & Product Visionary"
          },
          {
            name: "Alex Hormozi",
            role: "$100M Principal Investor",
            imageSrc: "/Alex-Hormozi.webp",
            fallbackInitials: "AH",
            description: "Made Skool his largest public investment in history, stating that recurring subscription communities represent the highest-margin, most scalable business model for creators.",
            tag: "Principal Investor & Growth Strategist"
          }
        ],
        darija: [
          {
            name: "Sam Ovens",
            role: "المؤسس والمهندس الرئيسي",
            imageSrc: "/Sam-Ovens.jpg",
            fallbackInitials: "SO",
            description: "دوز 5 سنوات كيبني البنية التحتية لمنصة Skool باش يحيد كاع التشتيت والإعلانات ويركز على بيئة تعليمية كتضمن التزام المشتركين وحصولهم على نتائج حقيقية.",
            tag: "المؤسس ومهندس المنصة"
          },
          {
            name: "Alex Hormozi",
            role: "المستثمر بـ 100 مليون دولار",
            imageSrc: "/Alex-Hormozi.webp",
            fallbackInitials: "AH",
            description: "حط أكبر استثمار علني فـ تاريخو فـ منصة Skool، وصرح بلي المجتمعات المدفوعة باشتراك شهري هي أفضل وأقوى أصل رقمي كيدخل أرباح عالية ومستمرة لصناع المحتوى.",
            tag: "الشريك الاستراتيجي والمستثمر"
          }
        ]
      },
      content: {
        en: {
          intro: "In 2018, selling a pre-recorded course or a workout PDF for $50 was considered the pinnacle of digital monetization. In 2026, that business model is officially extinct.\n\nWe are living through the death of 'static information'. Any fitness coach or creator still relying on selling single-payment PDFs is watching customer acquisition costs skyrocket while course completion rates crater below 5%. Meanwhile, a new wave of elite Moroccan coaches is generating $3,000 to $10,000+ every single month with predictable stability through a modern mechanism: Paid Skool Communities.",
          sections: [
            {
              heading: "1. The Commodity Trap: Why Static Courses & PDFs Are Failing",
              body: [
                "Two massive tectonic shifts destroyed the traditional course industry: the ubiquity of generative AI (like ChatGPT) and millions of free high-definition fitness tutorials on YouTube and Instagram.",
                "When a prospect can generate a personalized 12-week workout and nutrition plan with a single prompt in four seconds, charging 400 MAD for a static PDF holds zero perceived value. Information is now free and everywhere.",
                "Moreover, there is an uncomfortable industry secret: 95% of people who buy a downloadable course never finish it. The client feels isolated, lacks daily accountability, and fails to get the promised result. When they do not see transformations, they never buy from you again."
              ],
              quote: "\"People no longer pay for raw information; information is free everywhere. People pay for curated community, daily accountability, and genuine brotherhood with like-minded individuals on the same journey.\""
            },
            {
              heading: "2. The Strategic Minds Behind The Skool Ecosystem",
              body: [
                "Recognizing the catastrophic failure rate of old-school video portals, two of the world's most prominent business operators joined forces to engineer a platform built specifically for recurring subscriptions and engaged tribes."
              ],
              showFounders: true
            },
            {
              heading: "3. The Chaos of Legacy Groups vs. The Modern Skool Framework",
              body: [
                "For years, creators attempted to duct-tape communities using Facebook Groups, Discord servers, or messy WhatsApp chats. The result was complete operational chaos.",
                "Facebook Groups are overloaded with distracting ads. WhatsApp groups quickly turn into 24/7 spam rooms that destroy your personal boundaries, require endless manual voice notes, and make recurring billing virtually impossible.",
                "Skool consolidates everything into a clean, focused single hub: structured courses (Classroom), organized topical forums (Community), automated event calendars (Calendar), and engaging gamification leaderboards (Gamification Levels)."
              ],
              comparisonTable: {
                headers: ["Legacy Communities (WhatsApp / FB)", "The Modern Skool Architecture"],
                rows: [
                  ["Intrusive notifications, ads, and total distraction", "0 ads, 0 noise, 100% result-oriented learning environment"],
                  ["Manual monthly payment chasing in WhatsApp DMs", "Automated recurring subscription processing (MRR)"],
                  ["Fragmented video links and messy PDF folders", "Integrated Classroom organized by modules and milestones"],
                  ["Zero retention incentives with <10% engagement", "Built-in gamification and levels that reward participation"]
                ]
              }
            },
            {
              heading: "4. The Unit Economics & The Golden Moroccan Opportunity",
              body: [
                "Let's break down the basic financial math for a Moroccan fitness coach:",
                "To make 20,000 MAD/month with traditional 1-on-1 coaching at 400 MAD per plan, you need to acquire, close, and manually track 50 individual clients every single month on WhatsApp. That equals 40+ hours per week of recorded voice notes, manual diet adjustments, and bank transfer reconciliation—a direct recipe for severe burnout.",
                "In contrast, with the Skool recurring community model: converting just 0.5% of your engaged audience (e.g., 50 members) at 400 MAD/month gives you a predictable 20,000 MAD recurring revenue (MRR) delivered via one group live call per week and community interaction.",
                "Members support each other, and your revenue automatically renews on the 1st of every month without starting from scratch."
              ],
              highlightBox: "A Growth Operator finances and builds your platform, integrates Moroccan checkout systems (CIH, Attijariwafa, Cards), and runs your acquisition funnels on a 50/50 profit-share basis with zero upfront fees (0 DH Upfront)."
            }
          ],
          conclusion: "Transitioning from selling dead static courses to building an interactive subscription community is the defining shift of 2026. The only question is: will you build your community now, or watch competing coaches claim your niche?",
          ctaHeadline: "Ready to Build Your Paid Skool Community in Morocco?",
          ctaSubtext: "We handle 100% of the tech stack, Moroccan payment pipelines, and funnel operations on a pure 50/50 partnership with zero upfront costs.",
          ctaButtonText: "Apply for a Free Funnel Audit"
        },
        darija: {
          intro: "فـ 2018، كان بيع كورس مسجل أو ملف تدريب بـ 500 درهم هو قمة التجارة الرقمية. فـ 2026، هاد الموديل مات رسمياً.\n\nحنا دابا كنعيشو نهاية عصر 'بيع المعلومات فقط'. أي كوتش أو صانع محتوى مازال كيعتمد غير على بيع ملف PDF كيشوف تكلفة جلب الزبناء كطلع، ونسبة اللي كيكملو الكورس طايحة لأقل من 5%. وفـ نفس الوقت، كاين جيل جديد ديال المدربين الرياضيين وصناع المحتوى كيدخلو مابين 20,000 درهم حتى لـ 80,000 درهم شهرياً وبشكل مستقر عبر موديل جديد: مجتمعات Skool المدفوعة.",
          sections: [
            {
              heading: "1. فخ المعلومة المجانية: علاش الكورسات والـ PDFs مابقاوش كيخدمو؟",
              body: [
                "كاينين جوج تحولات كبار قتلو فكرة بيع المعلومات التقليدية: انتشار الذكاء الاصطناعي (بحال ChatGPT) وتوفر ملايين الفيديوهات الاحترافية بالمجان فـ يوتيوب وإنستغرام.",
                "ملي كيقدر أي واحد بـ ضغطة زر ياخد برنامج تدريب وتغذية كامل من الذكاء الاصطناعي فـ 4 ثواني، بيع ملف PDF بـ 400 درهم مابقاش عندو قيمة حقيقية عند الزبون. المعلومة ولات متوفرة فـ كل بلاصة وبالمجان.",
                "وزيادة على هادشي، كاين واحد السر فـ الصناعة: 95% من الناس اللي كيشريو كورس مسجل ما كيكملوهش نهائياً. المشترك كيكون معزول، ما عندو حتى واحد يحاسبو أو يشجعو يومياً. ملي ما كيشوفش نتيجة، كيحبس وما كيعاودش يشري منك مرة ثانية."
              ],
              quote: "«الناس مابقاوش كيدفعو الفلوس على ود المعلومة؛ المعلومة موجودة فابور فـ كل بلاصة. الناس كيدفعو باش يكونو فـ وسط مجتمع كيشجعهم، كيعطيهم متابعة يومية، والتزام حقيقي مع ناس بحالهم.»"
            },
            {
              heading: "2. العقول الاستراتيجية اللي وراء منصة Skool",
              body: [
                "ملي شافو بلي الكورسات القديمة والمجموعات العشوائية فشلات، تلاقاو جوج من أكبر رواد الأعمال فـ العالم باش يبنيو منصة مصممة من الصفر للمجتمعات والاشتراكات الشهرية المستقرة (Recurring Revenue)."
              ],
              showFounders: true
            },
            {
              heading: "3. مجتمعات الفوضى القديمة ضد نظام Skool الحديث",
              body: [
                "لسنوات، كان المدربين كيحاولو يجمعو المشتركين فـ جروبات فيسبوك، ديسكورد، أو مجموعات الواتساب. والنتيجة كانت دائماً فوضى عارمة.",
                "مجموعات فيسبوك عامرة بالإعلانات وتشتيت الانتباه. مجموعات الواتساب كترجع غرفة سبام وإزعاج 24/7 كتقتل خصوصية الكوتش وتضيع ليه وقتو فـ تسجيل الأوديوات، وفوق هادشي مستحيل تأتمت فيها الدفع الشهري المستمر.",
                "منصة Skool جمعات كولشي فـ فضاء واحد نقي: الكورسات والتمارين (Classroom)، فضاء النقاش المنظم (Community)، جدول اللايفات والتحديات (Calendar)، ونظام المستويات والألعاب (Gamification)."
              ],
              comparisonTable: {
                headers: ["المجتمعات القديمة (WhatsApp / فيسبوك)", "منصة Skool الحديثة"],
                rows: [
                  ["إشعارات مزعجة، فوضى، وتشتيت كيهرب المشتركين", "0 إعلانات، 0 تشتيت، بيئة مخصصة 100% للنتائج"],
                  ["دفع يدوي كل شهر ومتابعة التوصيلات فـ الواتساب", "نظام اشتراكات شهرية مؤتمت ومستقر (MRR)"],
                  ["صعوبة تنظيم الفيديوهات والبرامج الغذائية", "مكتبة كورسات مدمجة مرتبة حسب الدروس والمراحل"],
                  ["غياب التحفيز ونسبة التزام لا تتعدى 10%", "نظام نقاط ومستويات (Levels) كيشجع الأعضاء يتفاعلو"]
                ]
              }
            },
            {
              heading: "4. الحسابات المالية البسيطة والفرصة الذهبية فـ المغرب",
              body: [
                "يلا جينا نديرو الحسابات المالية البسيطة لمدرب رياضي فـ المغرب:",
                "باش تدخل 20,000 درهم شهرياً بالتدريب الفردي التقليدي بـ 400 درهم للبرنامج، خاصك تبيع وتتابع 50 شخص فردياً كل شهر فـ الواتساب. هادشي كيعني 40 ساعة أسبوعياً د الأوديوات، تتبع الماكلة، وملاحقة التحويلات البنكية... طريق مباشر للإرهاق التام.",
                "بالمقابل مع نظام Skool: يلا حولنا غير 0.5% من المتابعين ديالك (مثلاً 50 عضو فقط) باشتراك شهري ديال 400 درهم/الشهر، هادي 20,000 درهم كتدخل لحسابك شهرياً عبر مكالمة لايف وحدة أسبوعياً ومتابعة جماعية فـ المنصة.",
                "الأعضاء كيشجعو بعضياتهم، والمدخول كيتجدد كل بداية شهر بدون ما تحتاج تبدا من الصفر."
              ],
              highlightBox: "الـ Growth Operator كيتكلف ببناء المنصة، ربط الدفع المغربي (CIH / التجاري / البطاقات)، والفانل كامل بنظام 50/50 وبدون أي مصاريف مسبقة (0 DH Upfront)، باش نتا تفرغ 100% للتدريب والمحتوى."
            }
          ],
          conclusion: "الانتقال من بيع الكورسات الميتة إلى بناء مجتمع تفاعلي باشتراك شهري هو المستقبل الحقيقي للبيزنس الرقمي فـ 2026. السؤال الوحيد هو واش غتبني الكوميونيتي ديالك دابا ولا غتسنى حتى يسبقوك المدربين الآخرين؟",
          ctaHeadline: "مستعد تبني مجتمع Skool ديالك فـ المغرب؟",
          ctaSubtext: "حنا كنتكلفو بالجانب التقني كامل، ربط الدفع المغربي، وتصميم المنصة بنظام الشراكة 50/50 وبدون أي مصاريف مسبقة.",
          ctaButtonText: "طلب جلسة تدقيق مجانية (Audit)"
        }
      }
    },
    {
      id: "skool-morocco-guide",
      slug: "skool-morocco-guide",
      title: {
        en: "The Complete Skool Morocco Playbook: Build a Paid Coaching Community & Automate Recurring Revenue (MRR)",
        darija: "الدليل الشامل لمنصة Skool فـ المغرب: كيفاش تبني مجتمع تدريبي مدفوع وتأتمت الدخل الشهري (MRR)"
      },
      excerpt: {
        en: "Discover how Moroccan fitness coaches and creators transition from selling cheap single-payment PDF workout plans to building predictable subscription communities.",
        darija: "اكتشف كيفاش منصة Skool كتمكن المدربين الرياضيين وصناع المحتوى فـ المغرب من الانتقال من بيع برامج PDF الرخيصة إلى بناء مجتمع تدريبي باشتراك شهري ثابت ومستقر."
      },
      category: {
        en: "Skool Platform",
        darija: "منصة Skool"
      },
      date: {
        en: "October 2026",
        darija: "أكتوبر 2026"
      },
      readTime: {
        en: "6 min read",
        darija: "6 دقائق"
      },
      author: "Zakaria | Growth Operator",
      content: {
        en: {
          intro: "If you are a Moroccan fitness coach with an engaged Instagram following, you likely live the same exhausting cycle every day: posting stories, answering dozens of repetitive DMs for hours, sending manual voice notes, and closing a one-off 300 MAD program only to reset back to zero on the 1st of the month.\n\nSkool was built to solve this exact bottleneck. In this guide, we break down how Skool works in Morocco and why it is the ultimate scaling tool for creators.",
          sections: [
            {
              heading: "1. What is Skool and Why is the Global Creator Economy Adopting It?",
              body: [
                "Skool is an all-in-one community ecosystem founded by Sam Ovens and backed by Alex Hormozi. It combines structured training videos, high-retention discussions, and gamification in an ad-free interface.",
                "For a fitness coach, Skool lets you host all workout routines, Moroccan meal prep guides, and weekly check-ins in one private portal accessible only to paying recurring members."
              ],
              highlightBox: "The power of Skool is 'Automated Recurring Revenue': members stay month after month for live calls, accountability, and community interaction, giving you predictable revenue."
            },
            {
              heading: "2. The Math Behind Going from 0 to 20,000+ MAD Monthly",
              body: [
                "• If you have 20,000 followers, converting just 0.5% yields 100 paid community members.",
                "• At 350 MAD per month per member.",
                "• Total Revenue: 100 members × 350 MAD = 35,000 MAD/month (MRR).",
                "This recurring income renews every month without having to resell to the same client from scratch."
              ]
            },
            {
              heading: "3. Handling Moroccan Payments (CIH Bank / Attijariwafa / Cards)",
              body: [
                "We build custom checkout funnels supporting instant Moroccan bank transfers (CIH, Attijariwafa, Cash Plus) along with international credit/debit cards, granting automatic instant access upon confirmation."
              ]
            }
          ],
          conclusion: "Launching a paid Skool community in Morocco is the natural evolution toward owning a true scalable digital asset.",
          ctaHeadline: "Request a Free Account Audit",
          ctaSubtext: "Book a 15-minute session to analyze your follower monetization potential and community roadmap.",
          ctaButtonText: "Book Your Audit Now"
        },
        darija: {
          intro: "إلى كنت كوتش رياضي فـ المغرب وعندك متابعين فـ إنستغرام، غالباً راك كتعيش نفس السيناريو كل نهار: كتحط سطوريات، كيدخلو عندك ناس للـ DM كيسولو على البرامج، كتبقى تجاوب فـ الأوديوات 4 ساعات، وفـ اللخر كتبيع برنامج PDF بـ 300 درهم لمرة واحدة، وفـ أول الشهر الجاي كترجع لنقطة الصفر.\n\nمنصة Skool جات باش تبدل هاد المعادلة كاملة. فهاد المقال، غنشرحو ليك شنو هي منصة Skool، كيفاش كتخدم فـ المغرب، وعلاش ولات هي السلاح السري لأي كوتش باغي يبني بيزنس حقيقي مستقر.",
          sections: [
            {
              heading: "1. شنو هي منصة Skool وعلاش كتهضر عليها الساحة العالمية؟",
              body: [
                "منصة Skool هي منصة عالمية أسسها Sam Ovens واستثمر فيها Alex Hormozi. الفكرة ديالها جمع الكورسات، المجتمع، والتحفيز بالألعاب فـ بلاصة وحدة سريعة وبدون إعلانات.",
                "بالنسبة للمدرب الرياضي، Skool كتمكنك من وضع كل التمارين، الفيديوهات، برامج التغذية المغربية، والمتابعة الأسبوعية فـ مكان خاص كيدخل ليه فقط المشتركون باشتراك شهري (Recurring Revenue)."
              ],
              highlightBox: "السر فـ Skool هو 'الاشتراك التلقائي': العضو كيبقى يخلص كل شهر باش يستافد من الكوميونيتي، التحديات، واللايفات المباشرة، وهادشي كيعطيك دخل شهري مستمر تقدر تعول عليه."
            },
            {
              heading: "2. كيفاش كيتحول مدخول الكوتش من 0 درهم إلى 20,000+ درهم شهرياً؟",
              body: [
                "• إلى عندك 20,000 متابع، وحولنا فقط 0.5% منهم (100 عضو فقط) للمجتمع ديالك.",
                "• اشتراك شهري بـ 350 درهم فـ الشهر.",
                "• النتيجة: 100 عضو × 350 درهم = 35,000 درهم شهرياً (MRR).",
                "وهاد المدخول كيتجدد كل شهر بدون ما تحتاج تعاود تقنع نفس الناس من الصفر."
              ]
            },
            {
              heading: "3. كيفاش كنتعاملو مع الدفع فـ المغرب (CIH / التجاري / البطاقات)؟",
              body: [
                "كنبنيو نظام دفع مخصص كيقبل التحويلات البنكية المغربية المباشرة (CIH Bank، التجاري وفا بنك، Cash Plus) بالإضافة للبطاقات الدولية (Visa/Mastercard)، مع تفعيل العضوية فـ الحين وبشكل أوتوماتيكي."
              ]
            }
          ],
          conclusion: "منصة Skool فـ المغرب هي التحول المنطقي لبناء أصل رقمي كيدخل أرباح مستمرة. تقدر تطلب تدقيق مجاني لحسابك دابا.",
          ctaHeadline: "طلب تدقيق مجاني لحسابك",
          ctaSubtext: "احجز جلسة لـ 15 دقيقة لدراسة إمكانات حسابك وخطة إطلاق الكوميونيتي.",
          ctaButtonText: "احجز التدقيق الآن"
        }
      }
    },
    {
      id: "communities-past-vs-present",
      slug: "communities-past-vs-present",
      title: {
        en: "Legacy Groups vs. Modern Platforms: Why WhatsApp & Facebook Groups Are Dead for Paid Coaching",
        darija: "مقارنة تاريخية: علاش مجموعات فيسبوك والواتساب ماتت ومنصات الكوميونيتي الجديدة هي المستقبل؟"
      },
      excerpt: {
        en: "An operational comparison between chaotic, high-churn legacy chat groups and structured Skool ecosystems engineered for member retention.",
        darija: "مقارنة عميقة بين المجتمعات القديمة المشتتة ومجتمعات Skool الحديثة القائمة على التحفيز بالألعاب ونظام الاشتراكات المستمرة."
      },
      category: {
        en: "Comparisons & Analysis",
        darija: "مقارنات وتحليل"
      },
      date: {
        en: "October 2026",
        darija: "أكتوبر 2026"
      },
      readTime: {
        en: "5 min read",
        darija: "5 دقائق"
      },
      author: "Zakaria | Growth Operator",
      content: {
        en: {
          intro: "How many coaches started a 'WhatsApp group' for their clients only to find themselves drowned in 24/7 noise, spam, and manual chaos?\n\nDigital communities have evolved across three distinct generations. Today, we are in the era of gamified retention.",
          sections: [
            {
              heading: "1. The 3 Generations of Online Coaching Communities",
              body: [
                "• Generation 1 (Facebook Groups): Sluggish, flooded with competing ads, with organic reach under 5%.",
                "• Generation 2 (WhatsApp/Telegram): Chaotic, destroys the coach's private life, lacks course organization.",
                "• Generation 3 (Skool Ecosystem): A focused hub engineered exclusively for learning, organized interaction, and gamification."
              ]
            },
            {
              heading: "2. The Psychology of Gamification and Retention",
              body: [
                "Skool's points and level unlocking mechanism creates positive daily reinforcement for members to post wins and progress, dramatically extending member lifetime value (LTV)."
              ]
            }
          ],
          conclusion: "Your followers crave an organized space to transform. Skool provides the enterprise infrastructure to deliver it.",
          ctaHeadline: "Ready to Upgrade to a Modern Platform?",
          ctaSubtext: "Message us directly or book a free account audit.",
          ctaButtonText: "Schedule Free Audit"
        },
        darija: {
          intro: "شحال من كوتش جرب يدير 'جروب واتساب' للمشتركين ديالو ولقى راسو غارق فـ الفوضى والإشعارات المزعجة؟\n\nالمجتمعات الرقمية دازت من أجيال مختلفة، واليوم حنا فـ عصر المجتمعات المبرمجة للالتزام والربح المستمر.",
          sections: [
            {
              heading: "1. تفكيك أجيال المجتمعات التدريبية",
              body: [
                "• الجيل الأول (مجموعات فيسبوك): بطيئة، معمرة بالإعلانات والسبام، ونسبة الوصول فيها طاحت لأقل من 5%.",
                "• الجيل الثاني (جروبات الواتساب): فوضوية جداً، كتقتل خصوصية المدرب، وما فيهاش بلاصة منظمة للكورسات.",
                "• الجيل الثالث (منصة Skool): بيئة مخصصة فقط للتعلم، التفاعل المنظم، والتحفيز بالألعاب (Gamification)."
              ]
            },
            {
              heading: "2. سيكولوجية الـ Gamification والمستويات",
              body: [
                "نظام المستويات والنقاط فـ Skool كيخلق حافز يومي للأعضاء باش يشاركو إنجازاتهم وتطوراتهم، وهادشي كيرفع نسبة التزامهم وبقاءهم فـ الكوميونيتي لأشهر طويلة."
              ]
            }
          ],
          conclusion: "المتابعين ديالك باغيين فضاء منظم يلتزمو فيه. منصة Skool كتوفر ليك هاد البنية التحتية بأعلى المعايير.",
          ctaHeadline: "جاهز تطلق مجتمعك التدريبي؟",
          ctaSubtext: "تواصل معنا مباشرة أو احجز تدقيق مجاني لحسابك.",
          ctaButtonText: "حجز جلسة تدقيق"
        }
      }
    },
    {
      id: "monetize-fitness-audience-morocco",
      slug: "monetize-fitness-audience-morocco",
      title: {
        en: "How Moroccan Fitness Coaches Monetize Instagram Followers Without Wasting Hours in DMs",
        darija: "كيفاش يحول كوتش اللياقة فـ المغرب متابعين إنستغرام لزبناء مستمرين بدون تضييع الوقت فـ الـ DMs؟"
      },
      excerpt: {
        en: "The automated acquisition blueprint to turn Instagram story views into paying subscription members while eliminating manual voice note fatigue.",
        darija: "استراتيجية الـ Automated Funnel لتحويل المشاهدات إلى أعضاء يدفعون شهرياً، والتخلص التام من إرهاق الرسائل الصوتية اليدوية."
      },
      category: {
        en: "Coaching Systems",
        darija: "أنظمة التدريب"
      },
      date: {
        en: "September 2026",
        darija: "سبتمبر 2026"
      },
      readTime: {
        en: "7 min read",
        darija: "7 دقائق"
      },
      author: "Zakaria | Growth Operator",
      content: {
        en: {
          intro: "The single biggest trap for Moroccan fitness creators is believing that spending 5 hours every day recording WhatsApp voice notes will build a sustainable business.\n\nHere is how we deploy an automated conversion funnel.",
          sections: [
            {
              heading: "1. The Low-Ticket Manual Coaching Trap",
              body: [
                "Managing 50 clients individually on WhatsApp at 400 MAD means recording 150+ voice notes every day. It leaves zero time to create high-impact content or grow yourself as a coach."
              ]
            },
            {
              heading: "2. The Integrated Ascension Model",
              body: [
                "Combining a recurring Skool community for broad scale with a premium High-Ticket 1-on-1 tier for VIP clients maximizes your revenue while saving 80% of your working time."
              ]
            }
          ],
          conclusion: "Smart businesses let systems do the heavy lifting. As Growth Operators, we build and run this entire engine with you.",
          ctaHeadline: "Escape the WhatsApp Hustle",
          ctaSubtext: "Book your 15-minute account audit to review your systems.",
          ctaButtonText: "Request Free Audit"
        },
        darija: {
          intro: "أكبر فخ كيطيح فيه المدرب الرياضي فـ المغرب هو الاعتقاد بلي قضاء 5 ساعات كل نهار فـ تسجيل أوديوات الواتساب غادي يدخل ليه فلوس مستقرة.\n\nإليك كيفاش كنبنيو نظام تحويل أوتوماتيكي متكامل.",
          sections: [
            {
              heading: "1. فخ بيع البرامج الفردية الرخيصة",
              body: [
                "متابعة 50 شخص فردياً فـ الواتساب بـ 400 درهم كتعني 150 أوديو فـ النهار وإرهاق تام كيحرمك من التفرغ لصناعة المحتوى وتطوير نفسك كمدرب."
              ]
            },
            {
              heading: "2. نموذج الـ Ascension Model المتكامل",
              body: [
                "الجمع بين مجتمع Skool المدفوع للاشتراكات الشهرية الواسعة والتدريب الفردي VIP للقلة المستعدة لدفع مبالغ عالية كيعطيك أعلى دخل ممكن مع توفير 80% من وقتك."
              ]
            }
          ],
          conclusion: "البيزنس الذكي هو اللي كيخلي السيستيم يخدم فـ بلاصتك. دورنا نبنيو هاد المنظومة كاملة معك.",
          ctaHeadline: "تخلص من ضغط الواتساب وابدأ نظامك المؤتمت",
          ctaSubtext: "احجز تدقيق مجاني لحسابك لـ 15 دقيقة.",
          ctaButtonText: "طلب التدقيق الآن"
        }
      }
    },
    {
      id: "skool-payment-methods-morocco-cih",
      slug: "skool-payment-methods-morocco-cih",
      title: {
        en: "Moroccan Payment Methods on Skool: Solving CIH Bank & Card Checkouts Seamlessly",
        darija: "طرق الدفع فـ منصة Skool للمغاربة: حل مشكل CIH Bank والبطاقات البنكية بدون تعقيد"
      },
      excerpt: {
        en: "How local Moroccan bank transfers and cards connect seamlessly with Skool to automate instant member onboarding.",
        darija: "شرح مبسط لكيفية ربط التحويلات البنكية المغربية المحلية مع منصة سكول لأتمتة قبول الأعضاء وتفعيل اشتراكاتهم."
      },
      category: {
        en: "Payment Automation",
        darija: "أتمتة الدفع"
      },
      date: {
        en: "September 2026",
        darija: "سبتمبر 2026"
      },
      readTime: {
        en: "4 min read",
        darija: "4 دقائق"
      },
      author: "Zakaria | Growth Operator",
      content: {
        en: {
          intro: "Can Moroccan clients pay on Skool in Dirhams (MAD)? Yes. With our custom infrastructure, any client can pay via their preferred Moroccan bank or card with instant access.",
          sections: [
            {
              heading: "1. Dedicated Moroccan Payment Infrastructure",
              body: [
                "We engineer a custom checkout funnel accepting Moroccan transfers (CIH, Attijariwafa, Cash Plus) and cards, instantly dispatching an automated invite directly to their Skool account."
              ],
              highlightBox: "The result: Zero friction at checkout and seamless onboarding for local Moroccan members."
            }
          ],
          conclusion: "We take full responsibility for setting up and managing your entire payment gateway.",
          ctaHeadline: "Questions About Moroccan Payment Setup?",
          ctaSubtext: "Contact us directly via WhatsApp or book a free audit session.",
          ctaButtonText: "Chat on WhatsApp"
        },
        darija: {
          intro: "واش المغاربة يقدرو يخلصو فـ Skool بالدرهم؟ نعم، بالسيستيم ديالنا كيقدر أي مشترك يخلص بالدرهم عبر البنك ديالو المفضل، والعضوية كتتفعل فـ ثوانٍ.",
          sections: [
            {
              heading: "1. الربط المالي المخصص للمغرب",
              body: [
                "كنبرمجو بوابة دفع مخصصة كتقبل التحويلات البنكية المغربية (CIH / Attijariwafa / Cash Plus / البطاقات البنكية)، وبمجرد إتمام العملية كيتوصل المشترك بدعوة مباشرة لحسابه فـ Skool أوتوماتيكياً."
              ],
              highlightBox: "النتيجة: زيرو مشاكل فـ الدفع، وسهولة تامة للمشتركين المغاربة."
            }
          ],
          conclusion: "حنا كنتكلفو بالربط المالي والتقني كامل بنسبة 100%.",
          ctaHeadline: "عندك استفسار حول نظام الدفع؟",
          ctaSubtext: "تواصل معنا مباشرة عبر الواتساب أو احجز تدقيق مجاني.",
          ctaButtonText: "تواصل عبر الواتساب"
        }
      }
    },
    {
      id: "what-is-a-growth-operator-morocco",
      slug: "what-is-a-growth-operator-morocco",
      title: {
        en: "What is a Growth Operator? The 50/50 Zero-Upfront Partnership Model Explained",
        darija: "شنو هو دور الـ Growth Operator فـ المغرب؟ شراكة حقيقية 50/50 بدون أي مصاريف مسبقة"
      },
      excerpt: {
        en: "Understand the difference between traditional marketing agencies that charge high retainers and a Growth Partner who invests in your brand and shares net revenue.",
        darija: "تعرف على الفرق بين وكالات التسويق التقليدية والـ Growth Operator الذي يستثمر في علامتك التجارية ويتقاسم معك الأرباح الصافية."
      },
      category: {
        en: "Partnership & Strategy",
        darija: "شراكة واستراتيجية"
      },
      date: {
        en: "August 2026",
        darija: "أغسطس 2026"
      },
      readTime: {
        en: "5 min read",
        darija: "5 دقائق"
      },
      author: "Zakaria | Growth Operator",
      content: {
        en: {
          intro: "A Growth Operator is not an ordinary agency asking for monthly retainers without guaranteed results. We invest our own capital into your brand on a true 50/50 profit-share basis.",
          sections: [
            {
              heading: "1. Traditional Agency vs. Growth Operator",
              body: [
                "• Traditional Agency: Demands 5,000 to 10,000 MAD upfront fees, regardless of whether you profit.",
                "• Growth Operator: Charges 0 MAD upfront, builds the entire platform and funnel, and only earns when the community profits."
              ]
            }
          ],
          conclusion: "If you have an engaged audience, schedule a 15-minute strategic audit to explore partnership compatibility.",
          ctaHeadline: "Ready for a Real Growth Partnership?",
          ctaSubtext: "Book your free account audit session today.",
          ctaButtonText: "Book Partnership Audit"
        },
        darija: {
          intro: "الـ Growth Operator ماشي وكالة تسويق عادية كتطلب منك فلوس كل شهر بدون ضمانة نتائج. حنا كنستثمرو فـ البراند ديالك وكنخدمو بنظام تقاسم الأرباح 50/50.",
          sections: [
            {
              heading: "1. الفرق بين الوكالة والـ Growth Operator",
              body: [
                "• الوكالة: كتطلب 5,000 إلى 10,000 درهم مسبقاً، وما كيهمهاش واش دخلتي أرباح ولا لا.",
                "• الـ Growth Operator: ما كيطلب حتى درهم مسبقاً (0 DH Upfront)، كيتكلف بالتقنية والمنصة، وكياخد نصيبو فقط من الأرباح الصافية."
              ]
            }
          ],
          conclusion: "إلى عندك قاعدة متابعين متفاعلة، تقدر تحجز مكالمة تدقيق استراتيجية لـ 15 دقيقة لمناقشة الشراكة.",
          ctaHeadline: "مستعد للشراكة معنا؟",
          ctaSubtext: "احجز جلسة تدقيق مجانية لحسابك الآن.",
          ctaButtonText: "احجز تدقيق الشراكة"
        }
      }
    }
  ], []);

  const categories = useMemo(() => {
    if (isEn) {
      return ["All", "Market Insights", "Skool Platform", "Comparisons & Analysis", "Coaching Systems", "Payment Automation", "Partnership & Strategy"];
    }
    return ["الكل", "تحليل السوق", "منصة Skool", "مقارنات وتحليل", "أنظمة التدريب", "أتمتة الدفع", "شراكة واستراتيجية"];
  }, [isEn]);

  // Adjust selectedCategory if language changes and category is reset
  const activeSelectedCategory = useMemo(() => {
    if (isEn && selectedCategory === "الكل") return "All";
    if (!isEn && selectedCategory === "All") return "الكل";
    return selectedCategory;
  }, [isEn, selectedCategory]);

  const activePost = useMemo(() => {
    if (!selectedPostId) return null;
    return posts.find((p) => p.id === selectedPostId) || null;
  }, [selectedPostId, posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const currentCategory = isEn ? post.category.en : post.category.darija;
      const currentTitle = isEn ? post.title.en : post.title.darija;
      const currentExcerpt = isEn ? post.excerpt.en : post.excerpt.darija;

      const isAll = activeSelectedCategory === "All" || activeSelectedCategory === "الكل";
      const matchesCategory = isAll || currentCategory.toLowerCase() === activeSelectedCategory.toLowerCase();

      const matchesSearch = 
        !searchQuery ||
        currentTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        currentExcerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        currentCategory.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [posts, isEn, activeSelectedCategory, searchQuery]);

  const featuredPost = posts.find((p) => p.featured) || posts[0];

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.history.pushState({}, "", "/");
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  const navigateToAudit = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, "", "/audit");
    window.dispatchEvent(new PopStateEvent("popstate"));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openArticle = (post: BlogPost) => {
    setSelectedPostId(post.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div 
      className="min-h-screen bg-[#f9f7f2] text-[#1c1b19] font-sans antialiased selection:bg-[#1c1b19] selection:text-[#f9f7f2] flex flex-col justify-between"
      dir={isEn ? "ltr" : "rtl"}
    >
      
      {/* 1. Paper Retro Header Bar */}
      <header className="w-full bg-[#f9f7f2] border-b-2 border-[#1c1b19] py-4 px-4 md:px-8 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo */}
          <a 
            href="/" 
            onClick={handleHomeClick}
            className="flex items-center gap-2.5 group shrink-0"
            title={isEn ? "Return to Home" : "الرجوع للرئيسية"}
          >
            {!logoError ? (
              <img 
                src="/gz_logo.png" 
                alt="GZ Logo" 
                onError={() => setLogoError(true)}
                className="h-8 w-auto object-contain brightness-0 group-hover:opacity-85 transition-opacity"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-8 h-8 flex items-center justify-center border-2 border-[#1c1b19] font-mono font-bold text-xs bg-white text-[#1c1b19]">
                GZ
              </div>
            )}
            <div className="flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1.5 leading-none">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1c1b19]">
                ZAK
              </span>
              <span className="hidden md:inline text-[#1c1b19]/40 font-mono text-xs">/</span>
              <span className="text-[10px] md:text-xs font-mono text-[#1c1b19]/60 uppercase tracking-wider">
                Growth Operator Blog
              </span>
            </div>
          </a>

          {/* Navigation & Language Switcher */}
          <div className="flex items-center gap-3 md:gap-4">
            
            {/* Language Toggle */}
            <div className="flex items-center gap-0.5 border-2 border-[#1c1b19] bg-white p-0.5 text-[10px] font-mono font-bold shadow-[2px_2px_0px_0px_#1c1b19]">
              <button
                type="button"
                onClick={() => {
                  setLang("en");
                  setSelectedCategory("All");
                }}
                className={`px-1.5 py-0.5 transition-all ${
                  lang === "en"
                    ? "bg-[#1c1b19] text-[#f9f7f2]"
                    : "text-[#1c1b19] hover:bg-[#1c1b19]/5"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => {
                  setLang("darija");
                  setSelectedCategory("الكل");
                }}
                className={`px-1.5 py-0.5 transition-all ${
                  lang === "darija"
                    ? "bg-[#1c1b19] text-[#f9f7f2]"
                    : "text-[#1c1b19] hover:bg-[#1c1b19]/5"
                }`}
              >
                DARIJA
              </button>
            </div>

            <a
              href="/"
              onClick={handleHomeClick}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#1c1b19]/70 hover:text-[#1c1b19] transition-colors"
            >
              {isEn ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
              <span>{isEn ? "Home" : "الرئيسية"}</span>
            </a>

            <a
              href="/audit"
              onClick={navigateToAudit}
              className="px-4 py-2 border-2 border-[#1c1b19] bg-[#1c1b19] text-[#f9f7f2] hover:bg-transparent hover:text-[#1c1b19] transition-all text-xs font-mono font-bold uppercase tracking-wider shadow-[2px_2px_0px_0px_#1c1b19]"
            >
              {isEn ? "Apply for Audit" : "طلب تدقيق الحساب"}
            </a>
          </div>

        </div>
      </header>

      {/* 2. Main Content Container */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8 md:py-12">
        
        {/* If an article is selected, render Reader View */}
        {activePost ? (
          <article className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
            
            {/* Back Navigation Bar */}
            <div className="flex items-center justify-between border-b-2 border-[#1c1b19]/15 pb-4">
              <button
                type="button"
                onClick={() => setSelectedPostId(null)}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#1d4ed8] hover:text-[#1c1b19] transition-colors cursor-pointer"
              >
                {isEn ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                <span>{isEn ? "Back to all articles" : "الرجوع إلى جميع المقالات"}</span>
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-[#1c1b19]/60">
                <Clock className="w-3.5 h-3.5 text-[#1d4ed8]" />
                <span>{isEn ? `Read time: ${activePost.readTime.en}` : `وقت القراءة: ${activePost.readTime.darija}`}</span>
              </div>
            </div>

            {/* Article Header */}
            <header className="space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 bg-[#1c1b19] text-[#f9f7f2] text-xs font-mono font-bold uppercase tracking-wider">
                  {isEn ? activePost.category.en : activePost.category.darija}
                </span>

                <span className="px-2.5 py-1 bg-[#fefce8] border border-[#1c1b19] text-[#1c1b19] text-[11px] font-bold">
                  {isEn ? "VERIFIED STRATEGIC PLAYBOOK" : "دليل استراتيجي معتمد"}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-5xl font-black font-serif text-[#1c1b19] leading-tight tracking-tight">
                {isEn ? activePost.title.en : activePost.title.darija}
              </h1>

              {/* Author & Publication Meta */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#1c1b19]/60 pt-2 border-b-2 border-[#1c1b19]/15 pb-5">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#1c1b19] text-[#f9f7f2] font-bold flex items-center justify-center text-[10px]">
                    Z
                  </div>
                  <span className="font-bold text-[#1c1b19]">{activePost.author}</span>
                </div>
                <span>•</span>
                <span>{isEn ? activePost.date.en : activePost.date.darija}</span>
                <span>•</span>
                <span className="text-[#1d4ed8]">{isEn ? "Skool Platform in Morocco" : "منصة Skool فـ المغرب"}</span>
              </div>
            </header>

            {/* Article Body Content */}
            <div className="space-y-8 text-base md:text-lg font-serif text-[#1c1b19]/90 leading-relaxed">
              
              {/* Intro Box */}
              <div className={`p-6 bg-white border-y-2 border-[#1c1b19] text-base md:text-lg leading-relaxed shadow-[4px_4px_0px_0px_#1c1b19] whitespace-pre-line text-[#1c1b19] ${
                isEn ? "border-l-4 border-l-[#1d4ed8] border-r-2" : "border-r-4 border-r-[#1d4ed8] border-l-2"
              }`}>
                {isEn ? activePost.content.en.intro : activePost.content.darija.intro}
              </div>

              {/* Dynamic Article Sections */}
              {(isEn ? activePost.content.en.sections : activePost.content.darija.sections).map((section, idx) => (
                <section key={idx} className="space-y-5 pt-4">
                  <h2 className="text-xl md:text-2xl font-black font-serif text-[#1c1b19] border-b-2 border-[#1c1b19]/20 pb-2">
                    {section.heading}
                  </h2>

                  {section.body.map((paragraph, pIdx) => (
                    <p key={pIdx} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}

                  {/* Section Quote */}
                  {section.quote && (
                    <blockquote className={`my-6 p-5 bg-[#fffbf2] border-y border-[#1c1b19]/20 font-serif italic text-base md:text-lg text-[#1c1b19] shadow-sm ${
                      isEn ? "border-l-4 border-l-[#e2a13b] border-r" : "border-r-4 border-r-[#e2a13b] border-l"
                    }`}>
                      {section.quote}
                    </blockquote>
                  )}

                  {/* Founders Card Section with Real Images */}
                  {section.showFounders && activePost.founders && (
                    <div className="my-8 space-y-6">
                      
                      {/* Skool Logo Banner */}
                      <div className="p-6 bg-white border-2 border-[#1c1b19] shadow-[4px_4px_0px_0px_#1c1b19] flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                          {!skoolLogoError ? (
                            <img 
                              src="/skool_logo.webp" 
                              alt="Skool Platform Logo" 
                              onError={() => setSkoolLogoError(true)}
                              className="h-10 w-auto object-contain bg-white px-2 py-1"
                              referrerPolicy="no-referrer"
                            />
                          ) : (
                            <div className="px-3 py-1 bg-[#1c1b19] text-[#f9f7f2] font-mono font-black text-lg tracking-wider">
                              SKOOL
                            </div>
                          )}
                          <div>
                            <h4 className="text-sm font-bold uppercase text-[#1c1b19]">
                              {isEn ? "Skool Global Community Infrastructure" : "منصة Skool العالمية للمجتمعات"}
                            </h4>
                            <p className="text-xs text-[#1c1b19]/60 font-sans">
                              {isEn ? "Classrooms • Live Check-ins • Community Forums • Gamification" : "كورسات • لايفات • منتديات تفاعلية • نظام ألعاب وتحفيز (Gamification)"}
                            </p>
                          </div>
                        </div>

                        <div className="px-3 py-1 bg-[#fefce8] border border-[#1c1b19] text-[#1c1b19] text-xs font-mono font-bold">
                          {isEn ? "Platform Valuation: $100M+" : "تقييم المنصة +100M$"}
                        </div>
                      </div>

                      {/* 2-Column Founder Cards */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                        
                        {(isEn ? activePost.founders.en : activePost.founders.darija).map((founder, fIdx) => (
                          <div 
                            key={fIdx}
                            className="bg-white border-2 border-[#1c1b19] p-5 flex flex-col justify-between space-y-4 shadow-[4px_4px_0px_0px_#1c1b19]"
                          >
                            <div className="space-y-4">
                              <div className="relative w-full h-64 bg-[#f4f2eb] border-2 border-[#1c1b19] overflow-hidden flex items-center justify-center">
                                {fIdx === 0 ? (
                                  !samImgError ? (
                                    <img 
                                      src="/Sam-Ovens.jpg" 
                                      alt="Sam Ovens - Skool Founder" 
                                      onError={() => setSamImgError(true)}
                                      className="w-full h-full object-cover object-center"
                                      referrerPolicy="no-referrer"
                                    />
                                  ) : (
                                    <div className="text-center space-y-1">
                                      <span className="text-4xl font-black font-serif text-[#1c1b19]">SO</span>
                                      <span className="block text-xs font-mono text-[#1d4ed8]">Sam Ovens</span>
                                    </div>
                                  )
                                ) : (
                                  !alexImgError ? (
                                    <img 
                                      src="/Alex-Hormozi.webp" 
                                      alt="Alex Hormozi - Skool Investor" 
                                      onError={() => setAlexImgError(true)}
                                      className="w-full h-full object-cover object-center"
                                      referrerPolicy="no-referrer"
                                    />
                                  ) : (
                                    <div className="text-center space-y-1">
                                      <span className="text-4xl font-black font-serif text-[#1c1b19]">AH</span>
                                      <span className="block text-xs font-mono text-[#b1392b]">Alex Hormozi</span>
                                    </div>
                                  )
                                )}
                                <span className={`absolute bottom-2 ${isEn ? "right-2" : "right-2"} px-2 py-0.5 ${fIdx === 0 ? "bg-[#1c1b19] text-[#f9f7f2]" : "bg-[#b1392b] text-white"} text-[10px] font-mono font-bold uppercase shadow-sm`}>
                                  {fIdx === 0 ? "Founder & CEO" : "Acquisition.com"}
                                </span>
                              </div>

                              <div>
                                <h3 className="text-xl font-bold font-serif text-[#1c1b19]">
                                  {founder.name}
                                </h3>
                                <p className={`text-xs font-bold ${fIdx === 0 ? "text-[#1d4ed8]" : "text-[#b1392b]"}`}>
                                  {founder.role}
                                </p>
                              </div>

                              <p className="text-xs md:text-sm font-sans text-[#1c1b19]/80 leading-relaxed">
                                {founder.description}
                              </p>
                            </div>

                            <div className="pt-3 border-t border-[#1c1b19]/15 flex items-center gap-1.5 text-[11px] font-mono text-[#1c1b19]/60">
                              {fIdx === 0 ? (
                                <>
                                  <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
                                  <span>{isEn ? "Architect of Skool Infrastructure" : "مهندس البنية التحتية للمنصة"}</span>
                                </>
                              ) : (
                                <>
                                  <Award className="w-3.5 h-3.5 text-[#e2a13b]" />
                                  <span>{isEn ? "Strategic Capital from Acquisition.com" : "استثمار استراتيجي من Acquisition.com"}</span>
                                </>
                              )}
                            </div>
                          </div>
                        ))}

                      </div>

                    </div>
                  )}

                  {/* Highlight Box */}
                  {section.highlightBox && (
                    <div className="p-4 bg-[#fefce8] border-2 border-[#1c1b19] shadow-[3px_3px_0px_0px_#1c1b19] text-sm md:text-base font-sans font-medium text-[#1c1b19]">
                      💡 <strong>{isEn ? "Key Strategic Insight:" : "خلاصة استراتيجية:"}</strong> {section.highlightBox}
                    </div>
                  )}

                  {/* Comparison Table */}
                  {section.comparisonTable && (
                    <div className="overflow-x-auto my-6 border-2 border-[#1c1b19] bg-white shadow-[4px_4px_0px_0px_#1c1b19]">
                      <table className={`w-full ${isEn ? "text-left" : "text-right"} text-xs md:text-sm font-sans`}>
                        <thead className="bg-[#1c1b19] text-[#f9f7f2] font-bold">
                          <tr>
                            <th className={`p-3.5 ${isEn ? "border-r border-white/20" : "border-l border-white/20"}`}>{section.comparisonTable.headers[0]}</th>
                            <th className="p-3.5 text-[#38bdf8]">{section.comparisonTable.headers[1]}</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#1c1b19]/15">
                          {section.comparisonTable.rows.map((row, rIdx) => (
                            <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-[#f9f7f2]/60"}>
                              <td className={`p-3.5 ${isEn ? "border-r border-[#1c1b19]/15" : "border-l border-[#1c1b19]/15"} text-[#b1392b] font-medium`}>{row[0]}</td>
                              <td className="p-3.5 text-[#1d4ed8] font-bold">{row[1]}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                </section>
              ))}

              {/* Conclusion & High-Converting CTA Box */}
              <div className="pt-8 border-t-2 border-[#1c1b19]">
                <div className="p-8 bg-[#1c1b19] text-[#f9f7f2] shadow-[6px_6px_0px_0px_#1d4ed8] space-y-6">
                  
                  <div className="flex items-center gap-2 text-[#e2a13b] font-mono text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    <span>{isEn ? "Actionable Next Step" : "الخطوة العملية القادمة"}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black font-serif text-[#f9f7f2] leading-snug">
                    {isEn ? (activePost.content.en.ctaHeadline || "Ready to Build Your Skool Community in Morocco?") : (activePost.content.darija.ctaHeadline || "مستعد تبني مجتمع Skool ديالك فـ المغرب؟")}
                  </h3>

                  <p className="text-sm md:text-base font-serif text-[#f9f7f2]/85 leading-relaxed max-w-2xl">
                    {isEn ? (activePost.content.en.ctaSubtext || "We handle all tech pipelines, Moroccan checkouts (CIH / Cards), and community architecture on a pure 50/50 model with zero upfront fees.") : (activePost.content.darija.ctaSubtext || "حنا كنتكلفو بالجانب التقني كامل، ربط الدفع المغربي (CIH / Cards)، وتصميم المنصة بنظام الشراكة 50/50 وبدون أي مصاريف مسبقة.")}
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row gap-4">
                    <a
                      href="/audit"
                      onClick={navigateToAudit}
                      className="px-6 py-3.5 bg-[#1d4ed8] text-white hover:bg-white hover:text-[#1c1b19] transition-all font-mono font-bold text-xs uppercase tracking-wider text-center shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)]"
                    >
                      {isEn ? (activePost.content.en.ctaButtonText || "Request Free Audit Session") : (activePost.content.darija.ctaButtonText || "طلب جلسة تدقيق مجانية (Audit)")}
                    </a>

                    <a
                      href="https://wa.me/212621520455?text=Hi%20Zak!%20I%20read%20your%20Skool%20article%20and%20want%20to%20discuss%20partnership."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 border border-[#f9f7f2]/40 text-[#f9f7f2] hover:bg-white hover:text-[#1c1b19] transition-all font-mono font-bold text-xs uppercase tracking-wider text-center"
                    >
                      {isEn ? "Direct WhatsApp Chat" : "تواصل مباشرة فـ الواتساب"}
                    </a>
                  </div>

                </div>
              </div>

              {/* End of Article: Bottom Back Navigation & Next Reads */}
              <div className="pt-8 border-t-2 border-[#1c1b19]/20 space-y-8">
                
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-white border-2 border-[#1c1b19] shadow-[4px_4px_0px_0px_#1c1b19]">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPostId(null);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1c1b19] text-[#f9f7f2] hover:bg-[#1d4ed8] transition-colors font-mono font-bold text-xs uppercase tracking-wider cursor-pointer shadow-[2px_2px_0px_0px_#1d4ed8]"
                  >
                    {isEn ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                    <span>{isEn ? "Back to all articles" : "الرجوع إلى جميع المقالات"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-xs font-mono font-bold text-[#1c1b19]/60 hover:text-[#1c1b19] hover:underline cursor-pointer"
                  >
                    {isEn ? "↑ Back to top of article" : "↑ الرجوع لأعلى المقال"}
                  </button>
                </div>

                {/* Other Articles Recommendations */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base sm:text-lg font-bold font-serif text-[#1c1b19]">
                      {isEn ? "Other articles you may like:" : "مقالات أخرى قد تهمك:"}
                    </h3>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedPostId(null);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="text-xs font-mono font-bold text-[#1d4ed8] hover:underline cursor-pointer"
                    >
                      {isEn ? `View all articles (${posts.length}) →` : `عرض جميع المقالات (${posts.length}) ←`}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {posts
                      .filter((p) => p.id !== activePost.id)
                      .slice(0, 2)
                      .map((otherPost) => (
                        <div
                          key={otherPost.id}
                          onClick={() => openArticle(otherPost)}
                          className="p-4 bg-white border-2 border-[#1c1b19] hover:shadow-[3px_3px_0px_0px_#1c1b19] transition-all cursor-pointer space-y-2 group"
                        >
                          <div className="flex items-center justify-between text-[11px] font-mono">
                            <span className="text-[#1d4ed8] font-bold">{isEn ? otherPost.category.en : otherPost.category.darija}</span>
                            <span className="text-[#1c1b19]/50">{isEn ? otherPost.readTime.en : otherPost.readTime.darija}</span>
                          </div>
                          <h4 className="text-sm font-bold font-serif text-[#1c1b19] group-hover:text-[#1d4ed8] transition-colors line-clamp-2">
                            {isEn ? otherPost.title.en : otherPost.title.darija}
                          </h4>
                          <span className="text-xs font-mono font-bold text-[#1d4ed8] inline-flex items-center gap-1">
                            <span>{isEn ? "Read article" : "قراءة المقال"}</span>
                            {isEn ? (
                              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            ) : (
                              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                            )}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>

              </div>

            </div>

          </article>
        ) : (
          /* Blog Directory View */
          <div className="space-y-12">
            
            {/* Top Header & Search Banner */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#1c1b19] text-[#f9f7f2] text-xs font-mono font-bold uppercase tracking-widest border border-[#1c1b19]">
                <BookOpen className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span>{isEn ? "// SKOOL & GROWTH OPERATOR KNOWLEDGE BASE" : "قاعدة المعرفة // مجتمعات SKOOL والنمو فـ المغرب"}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif text-[#1c1b19] tracking-tight">
                {isEn ? "Skool Communities & Growth Blog 🇲🇦" : "مدونة منصات Skool والنمو فـ المغرب 🇲🇦"}
              </h1>

              <p className="text-sm md:text-base font-serif text-[#1c1b19]/75 leading-relaxed">
                {isEn 
                  ? "Specialized playbooks, recurring subscription blueprints, Moroccan payment automation, and digital scaling strategies for fitness coaches and creators."
                  : "مقالات متخصصة، استراتيجيات بيع الاشتراكات، أتمتة الدفع بالدرهم المغربي، وتطوير بيزنس الكوتشينغ أونلاين لصناع المحتوى والمدربين الرياضيين."
                }
              </p>

              {/* Search Field */}
              <div className="pt-2 max-w-xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={isEn ? "Search topics (e.g. CIH, Payments, WhatsApp, 50/50, Hormozi...)" : "ابحث عن موضوع (مثلاً: CIH، الدفع، الواتساب، 50/50، Hormozi...)"}
                    className={`w-full px-4 py-3 ${isEn ? "pl-10" : "pr-10"} bg-white border-2 border-[#1c1b19] font-sans text-sm focus:outline-none focus:border-[#1d4ed8] shadow-[3px_3px_0px_0px_#1c1b19]`}
                  />
                  <Search className={`w-4 h-4 text-[#1c1b19]/50 absolute ${isEn ? "left-3.5" : "right-3.5"} top-3.5 pointer-events-none`} />
                </div>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider transition-all border cursor-pointer ${
                      activeSelectedCategory === cat
                        ? "bg-[#1c1b19] text-[#f9f7f2] border-[#1c1b19] shadow-[2px_2px_0px_0px_#1d4ed8]"
                        : "bg-white text-[#1c1b19]/70 border-[#1c1b19]/30 hover:border-[#1c1b19] hover:text-[#1c1b19]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Flagship Featured Article Spotlight */}
            {!searchQuery && (activeSelectedCategory === "All" || activeSelectedCategory === "الكل") && featuredPost && (
              <div className="w-full bg-[#1c1b19] text-[#f9f7f2] border-2 border-[#1c1b19] p-6 md:p-10 shadow-[6px_6px_0px_0px_#1d4ed8]">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-[#e2a13b] font-mono text-xs font-bold uppercase tracking-wider bg-[#e2a13b]/10 border border-[#e2a13b]/30 px-2.5 py-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{isEn ? "FEATURED STRATEGIC ARTICLE // ARTICLE OF THE MONTH" : "مقال استراتيجي مميز // مقال الشهر"}</span>
                  </span>
                  <span className="text-xs font-mono text-[#38bdf8] uppercase font-bold">
                    {isEn ? featuredPost.category.en : featuredPost.category.darija}
                  </span>
                </div>

                <h2 
                  onClick={() => openArticle(featuredPost)}
                  className="text-2xl sm:text-3xl md:text-4xl font-black font-serif text-[#f9f7f2] leading-tight mb-4 hover:text-[#38bdf8] transition-colors cursor-pointer"
                >
                  {isEn ? featuredPost.title.en : featuredPost.title.darija}
                </h2>

                <p className="text-sm md:text-base font-serif text-[#f9f7f2]/80 leading-relaxed mb-6 max-w-3xl">
                  {isEn ? featuredPost.excerpt.en : featuredPost.excerpt.darija}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/15">
                  <div className="flex items-center gap-4 text-xs font-mono text-[#f9f7f2]/60">
                    <span>{featuredPost.author}</span>
                    <span>•</span>
                    <span>{isEn ? featuredPost.readTime.en : featuredPost.readTime.darija}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => openArticle(featuredPost)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#38bdf8] text-[#0F0F12] font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
                  >
                    <span>{isEn ? "Read Full Article" : "قراءة المقال بالكامل"}</span>
                    {isEn ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            )}

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => openArticle(post)}
                  className="bg-white border-2 border-[#1c1b19] p-6 shadow-[4px_4px_0px_0px_#1c1b19] hover:shadow-[1px_1px_0px_0px_#1c1b19] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex flex-col justify-between cursor-pointer group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="px-2 py-0.5 bg-[#f9f7f2] text-[#1d4ed8] border border-[#1c1b19]/20 font-bold">
                        {isEn ? post.category.en : post.category.darija}
                      </span>
                      <span className="text-[#1c1b19]/50">{isEn ? post.readTime.en : post.readTime.darija}</span>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold font-serif text-[#1c1b19] group-hover:text-[#1d4ed8] transition-colors leading-snug">
                      {isEn ? post.title.en : post.title.darija}
                    </h3>

                    <p className="text-xs md:text-sm font-serif text-[#1c1b19]/70 leading-relaxed line-clamp-3">
                      {isEn ? post.excerpt.en : post.excerpt.darija}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#1c1b19]/10 flex items-center justify-between text-xs font-mono font-bold text-[#1d4ed8]">
                    <span>{isEn ? "Read article" : "قراءة المقال"}</span>
                    {isEn ? (
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    ) : (
                      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Empty Search State */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-16 bg-white border-2 border-[#1c1b19] p-8">
                <p className="text-base font-serif text-[#1c1b19]/70">
                  {isEn 
                    ? `No articles found matching "${searchQuery}". Try another keyword.`
                    : `لم نجد أي مقال يطابق بحثك "${searchQuery}". جرب كلمة أخرى.`
                  }
                </p>
              </div>
            )}

            {/* Bottom Partnership Callout */}
            <div className="p-8 bg-[#fefce8] border-2 border-[#1c1b19] shadow-[5px_5px_0px_0px_#1c1b19] flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-black font-serif text-[#1c1b19]">
                  {isEn 
                    ? "Ready to Launch Your Skool Community in Morocco on a 50/50 Model?"
                    : "باغي تطلق مجتمع Skool ديالك فـ المغرب بنظام 50/50؟"
                  }
                </h3>
                <p className="text-xs md:text-sm font-serif text-[#1c1b19]/70 max-w-2xl">
                  {isEn 
                    ? "We handle 100% of the technical infrastructure, Moroccan payment gateways (CIH / Cards), and funnel architecture with zero upfront costs (0 DH Upfront)."
                    : "حنا كنتكلفو بالجانب التقني كامل، ربط الدفع المغربي (CIH / Cards)، وتصميم المنصة بدون أي مصاريف مسبقة (0 DH Upfront)."
                  }
                </p>
              </div>

              <a
                href="/audit"
                onClick={navigateToAudit}
                className="px-6 py-3.5 bg-[#1c1b19] text-[#f9f7f2] hover:bg-[#1d4ed8] hover:text-[#f9f7f2] transition-all font-mono font-bold uppercase tracking-wider text-xs border-2 border-[#1c1b19] shrink-0"
              >
                {isEn ? "Book Free Audit Session" : "احجز جلسة تدقيق مجانية"}
              </a>
            </div>

          </div>
        )}

      </main>

      {/* 3. Paper Editorial Footer */}
      <footer className="w-full bg-[#1c1b19] text-[#f9f7f2] border-t-2 border-[#1c1b19] py-8 px-4 md:px-8 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-2.5">
            {!logoError ? (
              <img 
                src="/gz_logo.png" 
                alt="GZ Logo" 
                className="h-6 w-auto object-contain brightness-0 invert opacity-90"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-6 h-6 flex items-center justify-center border border-[#f9f7f2] font-mono font-bold text-[10px] bg-[#1c1b19] text-[#f9f7f2]">
                GZ
              </div>
            )}
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#f9f7f2]">
              ZAK / Growth Operator Morocco
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-[#f9f7f2]/60">
            <a href="/" onClick={handleHomeClick} className="hover:text-[#f9f7f2] hover:underline">{isEn ? "Home" : "الرئيسية"}</a>
            <span>•</span>
            <a href="/audit" onClick={navigateToAudit} className="hover:text-[#f9f7f2] hover:underline">{isEn ? "Audit" : "التدقيق (Audit)"}</a>
            <span>•</span>
            <a href="https://instagram.com/grow.withzak" target="_blank" rel="noopener noreferrer" className="hover:text-[#f9f7f2] hover:underline">Instagram</a>
          </div>

          <p className="text-[10px] font-mono text-[#f9f7f2]/50 uppercase tracking-wider text-center sm:text-right">
            © {new Date().getFullYear()} Zak. All rights reserved.
          </p>

        </div>
      </footer>

    </div>
  );
}
