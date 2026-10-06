import React, { useState } from 'react';
import { Send, CheckCircle2, User, Phone, Mail, Globe, GraduationCap, Sparkles, ShieldCheck, Clock, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { DestinationCountry, StudyLevel, LeadFormData } from '../../types';

interface LeadGenSectionProps {
  onSuccess?: () => void;
}

export const LeadGenSection: React.FC<LeadGenSectionProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    whatsappNumber: '',
    email: '',
    preferredDestination: 'UK',
    studyLevel: 'Undergraduate',
    interestedCourse: '',
    preferredIntake: 'September 2026',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const popularDestinations: { country: DestinationCountry; label: string; flag: string }[] = [
    { country: 'UK', label: 'UK', flag: '🇬🇧' },
    { country: 'Canada', label: 'Canada', flag: '🇨🇦' },
    { country: 'Australia', label: 'Australia', flag: '🇦🇺' },
    { country: 'USA', label: 'USA', flag: '🇺🇸' },
    { country: 'Ireland', label: 'Ireland', flag: '🇮🇪' },
    { country: 'Germany', label: 'Germany', flag: '🇩🇪' },
    { country: 'Malaysia', label: 'Malaysia', flag: '🇲🇾' },
    { country: 'UAE', label: 'UAE', flag: '🇦🇪' }
  ];

  const levels: StudyLevel[] = ['Undergraduate', "Master's", 'MBA', 'Diploma'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Safe fallback
      }
      if (onSuccess) onSuccess();
    }, 600);
  };

  return (
    <section 
      id="assessment" 
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#103578] via-[#0a234e] to-[#061530] text-white relative overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & Trust */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-rose-300 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.08em] leading-none brand-label">
              <Sparkles className="w-3.5 h-3.5 text-rose-400" />
              <span>100% Free Counseling Desk</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.01em] leading-[1.05] brand-headline text-white [text-wrap:balance]">
              Free Study Abroad Guidance
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm leading-[1.4] tracking-normal brand-body max-w-lg mx-auto lg:mx-0 line-clamp-2 sm:line-clamp-none">
              Get direct 1-on-1 counseling, university shortlist, tuition fee estimates, and visa eligibility report with zero agency fees.
            </p>

            {/* Quick Trust Badges */}
            <div className="hidden sm:grid grid-cols-2 gap-2.5 pt-2 text-left">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-200 font-semibold">Zero Agency Fees</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs text-slate-200 font-semibold">Fast 24h Response</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs text-slate-200 font-semibold">98% Visa Success Rate</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10">
                <Globe className="w-4 h-4 text-rose-400 shrink-0" />
                <span className="text-xs text-slate-200 font-semibold">11 Study Destinations</span>
              </div>
            </div>
          </div>

          {/* Right Column: Free Study Abroad Guidance Form (Fits completely in One View) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-6 text-slate-900 shadow-2xl border border-slate-100">
              
              {submitted ? (
                <div className="text-center py-6 sm:py-8 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                    Guidance Request Received, {formData.fullName}!
                  </h3>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Your assigned senior counselor is reviewing your profile and will connect with you on WhatsApp at <strong className="text-slate-900">{formData.whatsappNumber}</strong>.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
                    <a
                      href={`https://wa.me/94761415273?text=${encodeURIComponent(`Hello BCAS, I requested free study abroad guidance for ${formData.preferredDestination}. My name is ${formData.fullName}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto py-2 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp Now</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto py-2 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
                    >
                      Submit Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
                  
                  {/* Form Header */}
                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                    <div>
                      <h3 className="text-xs sm:text-base font-extrabold text-slate-900 flex items-center gap-1.5">
                        <span>Free Study Abroad Guidance Form</span>
                        <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800">Free</span>
                      </h3>
                      <p className="text-[10px] text-slate-500 hidden sm:block">Fill details below to connect with a senior admissions counselor.</p>
                    </div>
                    <span className="text-[10px] font-semibold text-slate-400">100% Confidential</span>
                  </div>

                  {/* Input Row 1: Name & WhatsApp */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] sm:text-[11px] font-bold text-slate-700 mb-0.5 flex items-center gap-1">
                        <User className="w-3 h-3 text-[#103578]" />
                        <span>Full Name *</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-2.5 py-1.5 sm:py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#103578] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-[11px] font-bold text-slate-700 mb-0.5 flex items-center gap-1">
                        <Phone className="w-3 h-3 text-[#C41822]" />
                        <span>WhatsApp Number *</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.whatsappNumber}
                        onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                        placeholder="+94 77 123 4567"
                        className="w-full px-2.5 py-1.5 sm:py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#103578] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Input Row 2: Target Destination Quick Pills */}
                  <div>
                    <label className="block text-[10px] sm:text-[11px] font-bold text-slate-700 mb-1 flex items-center justify-between">
                      <span className="flex items-center gap-1">
                        <Globe className="w-3 h-3 text-[#103578]" />
                        <span>Preferred Destination *</span>
                      </span>
                      <span className="text-[10px] text-slate-400 font-normal">Tap to select</span>
                    </label>
                    <div className="grid grid-cols-4 gap-1 sm:gap-1.5">
                      {popularDestinations.map((d) => (
                        <button
                          key={d.country}
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredDestination: d.country })}
                          className={`py-1 px-1 rounded-lg text-[10px] sm:text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer active:scale-95 border ${
                            formData.preferredDestination === d.country
                              ? 'bg-[#103578] text-white border-[#103578] shadow-xs'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          <span>{d.flag}</span>
                          <span className="truncate">{d.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Input Row 3: Study Level & Interested Course */}
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] sm:text-[11px] font-bold text-slate-700 mb-0.5 flex items-center gap-1">
                        <GraduationCap className="w-3 h-3 text-[#103578]" />
                        <span>Study Level *</span>
                      </label>
                      <select
                        value={formData.studyLevel}
                        onChange={(e) => setFormData({ ...formData, studyLevel: e.target.value as StudyLevel })}
                        className="w-full px-2 py-1.5 sm:py-2 bg-slate-50 border border-slate-200 rounded-lg text-[11px] sm:text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#103578] focus:bg-white"
                      >
                        {levels.map((lvl) => (
                          <option key={lvl} value={lvl}>{lvl}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-[11px] font-bold text-slate-700 mb-0.5 flex items-center gap-1">
                        <Mail className="w-3 h-3 text-slate-400" />
                        <span>Email (Optional)</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@gmail.com"
                        className="w-full px-2.5 py-1.5 sm:py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#103578] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Submit CTA Button */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-2.5 sm:py-3 px-4 bg-[#C41822] hover:bg-[#a3141a] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-70"
                    >
                      {loading ? (
                        <span>Processing Profile...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Get Free Study Abroad Guidance</span>
                        </>
                      )}
                    </button>
                    <div className="flex items-center justify-center gap-3 text-[9px] sm:text-[10px] text-slate-400 mt-1">
                      <span>✓ 100% Free Advice</span>
                      <span>✓ No Agency Charges</span>
                      <span>✓ Fast WhatsApp Callback</span>
                    </div>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
