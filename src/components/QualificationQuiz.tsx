import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight,
  Mail,
  Calendar,
  Clock,
  Users,
  Instagram
} from "lucide-react";

interface QuizState {
  step: number;
  platform: string;
  followers: string;
  struggle: string;
  revenue: string;
  fullName: string;
  instagram: string;
  phone: string;
  selectedDate: string;
  selectedTime: string;
  bookingStep: "quiz" | "qualified" | "calendar" | "success";
}

export default function QualificationQuiz() {
  const [state, setState] = useState<QuizState>({
    step: 1,
    platform: "",
    followers: "",
    struggle: "",
    revenue: "",
    fullName: "",
    instagram: "",
    phone: "",
    selectedDate: "",
    selectedTime: "",
    bookingStep: "quiz",
  });

  // Current year/month is September 2026
  const availableDays = [
    { name: "Mon", date: "Sep 21", val: "Monday, Sept 21" },
    { name: "Tue", date: "Sep 22", val: "Tuesday, Sept 22" },
    { name: "Wed", date: "Sep 23", val: "Wednesday, Sept 23" },
    { name: "Thu", date: "Sep 24", val: "Thursday, Sept 24" },
    { name: "Fri", date: "Sep 25", val: "Friday, Sept 25" },
    { name: "Sat", date: "Sep 26", val: "Saturday, Sept 26" },
  ];

  const availableTimes = [
    "10:00 AM (GMT+1)",
    "11:30 AM (GMT+1)",
    "02:00 PM (GMT+1)",
    "04:30 PM (GMT+1)",
    "06:00 PM (GMT+1)",
    "08:30 PM (GMT+1)",
  ];

  const handleSelectOption = (key: keyof QuizState, value: string, nextStep: number) => {
    setState(prev => ({
      ...prev,
      [key]: value,
      step: nextStep
    }));

    if (nextStep > 4) {
      // Transition to qualified screen
      setState(prev => ({
        ...prev,
        [key]: value,
        bookingStep: "qualified"
      }));
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!state.selectedDate || !state.selectedTime || !state.fullName || !state.instagram || !state.phone) {
      return;
    }
    setState(prev => ({
      ...prev,
      bookingStep: "success"
    }));
  };

  const getEmailLink = () => {
    const subject = `Skool Community Audit Submission: ${state.fullName}`;
    const text = `Hi Zak! 🚀 I just completed the Skool Community Audit on your website. 

Here are my qualified details:
👤 Name: ${state.fullName}
📸 Instagram: ${state.instagram}
📊 Platform: ${state.platform}
👥 Followers: ${state.followers}
⚠️ Struggle: ${state.struggle}
🎯 Revenue Target: ${state.revenue}

📅 Scheduled Free Funnel Audit slot: ${state.selectedDate} at ${state.selectedTime}. 
Let's turn my audience into community wealth!`;

    return `mailto:zak@growwithzak.online?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
  };

  const renderQuizStep = () => {
    switch (state.step) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <h3 className="text-xl md:text-2xl font-serif font-black text-[#1c1b19]">1. Where do you post your primary fitness content?</h3>
            <p className="text-xs font-serif text-[#1c1b19]/60">Select the channel where you have the highest community trust and engagement.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {[
                { name: "Instagram Stories / Reels", val: "Instagram" },
                { name: "TikTok Videos / Lives", val: "TikTok" },
                { name: "YouTube Tutorials / Shorts", val: "YouTube" },
                { name: "Facebook Groups / Profile", val: "Facebook" },
              ].map(opt => (
                <button
                  key={opt.val}
                  type="button"
                  onClick={() => handleSelectOption("platform", opt.val, 2)}
                  className={`p-5 rounded-none border-2 text-left transition-all text-sm font-serif ${
                    state.platform === opt.val 
                      ? "border-[#1c1b19] bg-[#1c1b19] text-[#f9f7f2]" 
                      : "border-[#1c1b19]/25 hover:border-[#1c1b19] bg-white text-[#1c1b19]"
                  }`}
                >
                  <span className="flex justify-between items-center font-bold">
                    {opt.name}
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <h3 className="text-xl md:text-2xl font-serif font-black text-[#1c1b19]">2. What is your estimated total active follower size?</h3>
            <p className="text-xs font-serif text-[#1c1b19]/60">We partner with coaches from micro-audiences up to large followings.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {[
                { name: "Micro creator (2k - 10k followers)", val: "2k - 10k" },
                { name: "Established (10k - 30k followers)", val: "10k - 30k" },
                { name: "Pro coach (30k - 80k followers)", val: "30k - 80k" },
                { name: "Elite creator (80k+ followers)", val: "80k+" },
              ].map(opt => (
                <button
                  key={opt.val}
                  type="button"
                  onClick={() => handleSelectOption("followers", opt.val, 3)}
                  className={`p-5 rounded-none border-2 text-left transition-all text-sm font-serif ${
                    state.followers === opt.val 
                      ? "border-[#1c1b19] bg-[#1c1b19] text-[#f9f7f2]" 
                      : "border-[#1c1b19]/25 hover:border-[#1c1b19] bg-white text-[#1c1b19]"
                  }`}
                >
                  <span className="flex justify-between items-center font-bold">
                    {opt.name}
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <h3 className="text-xl md:text-2xl font-serif font-black text-[#1c1b19]">3. What is your absolute biggest bottleneck right now?</h3>
            <p className="text-xs font-serif text-[#1c1b19]/60">Where are you burning out or losing potential community income?</p>
            <div className="grid grid-cols-1 gap-4 mt-6">
              {[
                { name: "Drowning in DMs manually sending bank account numbers & answering questions", val: "WhatsApp DM chaos" },
                { name: "Selling low ticket (200 MAD plans) and clients leave after one month", val: "Low client retention" },
                { name: "Creating workout courses, doing sales, managing payments ALL on my own", val: "Solo tech & operations overload" },
                { name: "Creating content is easy, but I have no idea how to convert followers into recurring buyers", val: "Lack of funnel systems" },
              ].map(opt => (
                <button
                  key={opt.val}
                  type="button"
                  onClick={() => handleSelectOption("struggle", opt.val, 4)}
                  className={`p-5 rounded-none border-2 text-left transition-all text-sm font-serif ${
                    state.struggle === opt.val 
                      ? "border-[#1c1b19] bg-[#1c1b19] text-[#f9f7f2]" 
                      : "border-[#1c1b19]/25 hover:border-[#1c1b19] bg-white text-[#1c1b19]"
                  }`}
                >
                  <span className="flex justify-between items-center font-bold">
                    {opt.name}
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div
            key="step4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <h3 className="text-xl md:text-2xl font-serif font-black text-[#1c1b19]">4. What is your Monthly Recurring Revenue (MRR) goal?</h3>
            <p className="text-xs font-serif text-[#1c1b19]/60">Be honest. What is the target that changes your coaching career?</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {[
                { name: "15,000 MAD / Mo (Side Income)", val: "15,000 MAD" },
                { name: "30,000 MAD / Mo (Full scale)", val: "30,000 MAD" },
                { name: "60,000 MAD / Mo (Community Empire)", val: "60,000 MAD" },
                { name: "100,000 MAD+ / Mo (Moroccan elite)", val: "100,000+ MAD" },
              ].map(opt => (
                <button
                  key={opt.val}
                  type="button"
                  onClick={() => handleSelectOption("revenue", opt.val, 5)}
                  className={`p-5 rounded-none border-2 text-left transition-all text-sm font-serif ${
                    state.revenue === opt.val 
                      ? "border-[#1c1b19] bg-[#1c1b19] text-[#f9f7f2]" 
                      : "border-[#1c1b19]/25 hover:border-[#1c1b19] bg-white text-[#1c1b19]"
                  }`}
                >
                  <span className="flex justify-between items-center font-bold">
                    {opt.name}
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div id="audit" className="w-full py-24 px-4 bg-[#fbf9f4] border-b-2 border-[#1c1b19] relative">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Quiz Outer Frame - Styled like a physical folder/dossier dossier sheet */}
        <div className="bg-white rounded-none border-2 border-[#1c1b19] shadow-[6px_6px_0px_0px_#1c1b19] p-6 sm:p-10 relative overflow-hidden">
          {/* Top binder style border index tabs */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-[#1c1b19]"></div>

          <AnimatePresence mode="wait">
            {state.bookingStep === "quiz" && (
              <motion.div
                key="quiz-mode"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b-2 border-[#1c1b19] pb-6 gap-4">
                  <div>
                    <h2 className="text-2xl font-black font-serif text-[#1c1b19]">Bespoke Partnership Audit</h2>
                    <p className="text-xs font-mono uppercase tracking-wider text-[#b1392b] font-bold mt-1">Qualify for Zak's 50/50 Growth Alignment</p>
                  </div>
                  <span className="px-3.5 py-1.5 border border-[#1c1b19] bg-[#fbf9f4] text-[#1c1b19] text-xs font-mono font-bold uppercase tracking-wider shrink-0">
                    STATUS: STEP {state.step} OF 4
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-[#1c1b19]/10 rounded-none h-1.5 overflow-hidden">
                  <div 
                    className="bg-[#b1392b] h-1.5 rounded-none transition-all duration-300" 
                    style={{ width: `${(state.step / 4) * 100}%` }}
                  ></div>
                </div>

                {/* Step Content */}
                <div className="py-6">
                  {renderQuizStep()}
                </div>

                {/* Footer disclaimer */}
                <div className="flex items-center gap-2.5 text-[#1c1b19]/50 text-xs mt-6 pt-4 border-t border-dashed border-[#1c1b19]/25 font-serif">
                  <CheckCircle2 className="w-4 h-4 text-[#1c1b19]/60 shrink-0" />
                  <span>Responses are held on offline servers strictly to draft your custom operational blueprint.</span>
                </div>
              </motion.div>
            )}

            {state.bookingStep === "qualified" && (
              <motion.div
                key="qualified-mode"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center space-y-8 py-6"
              >
                <div className="inline-flex p-4 border-2 border-[#1c1b19] bg-[#fefce8] text-[#1c1b19] mb-2 animate-pulse">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-serif text-[#1c1b19]">
                  Application <span className="underline decoration-[#b1392b] decoration-2">Audit Qualified.</span>
                </h2>
                
                <div className="max-w-md mx-auto bg-[#fcfbf7] border-2 border-[#1c1b19] p-6 space-y-3 text-left text-xs font-mono">
                  <p className="border-b border-[#1c1b19]/10 pb-2 text-center text-[10px] font-bold text-[#b1392b] uppercase tracking-wider">
                    RECOGNIZED BLUEPRINT INPUTS:
                  </p>
                  <p className="flex justify-between">
                    <span className="text-[#1c1b19]/50">NICHE CLASS:</span>
                    <strong className="text-[#1c1b19] uppercase">Fitness Coach Authority</strong>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-[#1c1b19]/50">CORE BOTTLENECK:</span>
                    <strong className="text-[#1c1b19] uppercase">{state.struggle}</strong>
                  </p>
                  <p className="flex justify-between border-t border-dashed border-[#1c1b19]/15 pt-2">
                    <span className="text-[#1c1b19]/50">REVENUE TARGET:</span>
                    <strong className="text-[#b1392b] font-bold">{state.revenue}/mo</strong>
                  </p>
                </div>

                <p className="text-[#1c1b19]/70 text-sm max-w-lg mx-auto font-serif">
                  Zak has modeled your metrics against top Moroccan communities. Your estimated audience size of <strong className="text-[#1c1b19] font-mono font-black">{state.followers}</strong> indicates high qualification margins for reliable recurring MRR.
                </p>
                
                <div className="pt-6">
                  <button
                    type="button"
                    onClick={() => setState(prev => ({ ...prev, bookingStep: "calendar" }))}
                    className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#1c1b19] bg-[#1c1b19] text-[#f9f7f2] hover:bg-transparent hover:text-[#1c1b19] transition-all font-mono font-bold uppercase tracking-widest text-xs shadow-[3px_3px_0px_0px_rgba(0,0,0,0.15)]"
                  >
                    Proceed to Reserve Audit Slot
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {state.bookingStep === "calendar" && (
              <motion.div
                key="calendar-mode"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="border-b-2 border-[#1c1b19] pb-6 text-center">
                  <h2 className="text-2xl font-black font-serif text-[#1c1b19]">Select Your Live Audit Slot</h2>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#1c1b19]/60 mt-1">Reserve an offline strategy call directly on Zak's schedule.</p>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-8">
                  {/* Select Day */}
                  <div className="space-y-3">
                    <label className="text-xs uppercase font-mono font-bold tracking-wider text-[#1c1b19] flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#b1392b]" />
                      1. Choose strategy date
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                      {availableDays.map(d => (
                        <button
                          key={d.val}
                          type="button"
                          onClick={() => setState(prev => ({ ...prev, selectedDate: d.val }))}
                          className={`p-3 rounded-none border-2 flex flex-col items-center transition-all ${
                            state.selectedDate === d.val
                              ? "border-[#1c1b19] bg-[#1c1b19] text-white"
                              : "border-[#1c1b19]/25 bg-white hover:border-[#1c1b19] text-[#1c1b19]"
                          }`}
                        >
                          <span className="text-[10px] font-mono uppercase font-bold text-inherit opacity-60">{d.name}</span>
                          <span className="text-sm font-bold font-mono mt-0.5">{d.date.split(" ")[1]}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Select Time */}
                  {state.selectedDate && (
                    <div className="space-y-3">
                      <label className="text-xs uppercase font-mono font-bold tracking-wider text-[#1c1b19] flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#b1392b]" />
                        2. Choose time slot (GMT+1 Moroccan Time)
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {availableTimes.map(time => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setState(prev => ({ ...prev, selectedTime: time }))}
                            className={`p-3.5 rounded-none border-2 text-xs font-mono font-bold text-center transition-all ${
                              state.selectedTime === time
                                ? "border-[#1c1b19] bg-[#1c1b19] text-white"
                                : "border-[#1c1b19]/25 bg-white hover:border-[#1c1b19] text-[#1c1b19]"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Form fields */}
                  {state.selectedDate && state.selectedTime && (
                    <div className="space-y-6 border-t border-dashed border-[#1c1b19]/20 pt-6">
                      <label className="text-xs uppercase font-mono font-bold tracking-wider text-[#1c1b19] flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#b1392b]" />
                        3. Confirm contact credentials
                      </label>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-mono font-bold text-[#1c1b19]/70 uppercase mb-1">Full Name</label>
                          <input
                            type="text"
                            required
                            placeholder="Coach Amine"
                            value={state.fullName}
                            onChange={(e) => setState(prev => ({ ...prev, fullName: e.target.value }))}
                            className="w-full p-3.5 rounded-none border-2 border-[#1c1b19]/30 bg-white text-sm text-[#1c1b19] placeholder-[#1c1b19]/30 focus:outline-none focus:border-[#1c1b19] font-serif"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-mono font-bold text-[#1c1b19]/70 uppercase mb-1">Instagram Handle</label>
                          <input
                            type="text"
                            required
                            placeholder="@amine.fitness"
                            value={state.instagram}
                            onChange={(e) => setState(prev => ({ ...prev, instagram: e.target.value }))}
                            className="w-full p-3.5 rounded-none border-2 border-[#1c1b19]/30 bg-white text-sm text-[#1c1b19] placeholder-[#1c1b19]/30 focus:outline-none focus:border-[#1c1b19] font-serif"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono font-bold text-[#1c1b19]/70 uppercase mb-1">WhatsApp Number (to receive the link)</label>
                        <input
                          type="tel"
                          required
                          placeholder="+212 600-000000"
                          value={state.phone}
                          onChange={(e) => setState(prev => ({ ...prev, phone: e.target.value }))}
                          className="w-full p-3.5 rounded-none border-2 border-[#1c1b19]/30 bg-white text-sm text-[#1c1b19] placeholder-[#1c1b19]/30 focus:outline-none focus:border-[#1c1b19] font-serif"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full mt-4 py-4 border-2 border-[#1c1b19] bg-[#1c1b19] text-[#f9f7f2] hover:bg-[#b1392b] hover:border-[#b1392b] transition-all font-mono font-bold uppercase tracking-widest text-xs shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] flex justify-center items-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        Secure Booking & Blueprint Slot
                      </button>
                    </div>
                  )}
                </form>
              </motion.div>
            )}

            {state.bookingStep === "success" && (
              <motion.div
                key="success-mode"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center space-y-6 py-6"
              >
                <div className="inline-flex p-4 border-2 border-[#1c1b19] bg-[#e6f4ea] text-[#137333] mb-2">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-black font-serif text-[#1c1b19]">Slot Reserved.</h2>
                
                <div className="max-w-md mx-auto bg-[#fcfbf7] border-2 border-[#1c1b19] p-6 text-left space-y-3.5 text-xs font-mono">
                  <p className="border-b border-[#1c1b19]/10 pb-2.5 text-center text-[10px] font-bold text-[#b1392b] uppercase tracking-wider">
                    CONFIRMED AUDIT SCHEDULE:
                  </p>
                  <p className="flex justify-between">
                    <span className="text-[#1c1b19]/50">STRATEGY DAY:</span>
                    <strong className="text-[#1c1b19]">{state.selectedDate}</strong>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-[#1c1b19]/50">TIME WINDOW:</span>
                    <strong className="text-[#1c1b19]">{state.selectedTime}</strong>
                  </p>
                  <p className="flex justify-between border-t border-[#1c1b19]/15 pt-2.5">
                    <span className="text-[#1c1b19]/50">CANDIDATE:</span>
                    <strong className="text-[#1c1b19]">{state.fullName}</strong>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-[#1c1b19]/50">INSTAGRAM:</span>
                    <strong className="text-[#b1392b]">{state.instagram}</strong>
                  </p>
                </div>

                <div className="bg-amber-50 border-2 border-dashed border-amber-500 p-5 max-w-md mx-auto text-xs text-[#1c1b19]/80 text-left flex items-start gap-3">
                  <span className="text-base">⚠️</span>
                  <p className="leading-relaxed font-serif">
                    <strong>CRITICAL NEXT STEP:</strong> You must click the button below to submit your qualification data directly to Zak's workspace at <strong className="text-[#b1392b] font-mono">zak@growwithzak.online</strong> to finalize your booking.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href={getEmailLink()}
                    className="inline-flex items-center gap-2.5 px-8 py-4 border-2 border-[#1c1b19] bg-[#1c1b19] text-[#f9f7f2] hover:bg-[#b1392b] hover:border-[#b1392b] transition-all font-mono font-bold uppercase tracking-widest text-xs shadow-[3px_3px_0px_0px_rgba(0,0,0,0.15)] w-full sm:w-auto justify-center"
                  >
                    <Mail className="w-4 h-4" />
                    Transmit Booking to Email
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setState({
                        step: 1,
                        platform: "",
                        followers: "",
                        struggle: "",
                        revenue: "",
                        fullName: "",
                        instagram: "",
                        phone: "",
                        selectedDate: "",
                        selectedTime: "",
                        bookingStep: "quiz",
                      });
                    }}
                    className="px-6 py-4 border border-[#1c1b19]/20 hover:border-[#1c1b19] text-[#1c1b19] transition-all text-xs font-mono font-bold uppercase w-full sm:w-auto bg-transparent"
                  >
                    Reset Quiz
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </div>
  );
}
