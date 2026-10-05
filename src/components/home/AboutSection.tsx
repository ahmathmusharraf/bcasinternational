import React from 'react';
import { Award, Shield, Globe, Users, ArrowRight, Building2, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';
import { BcasLogo } from '../common/BcasLogo';

interface AboutSectionProps {
  onBookConsultation: () => void;
  onExploreDestinations: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onBookConsultation,
  onExploreDestinations
}) => {
  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#103578] text-xs font-bold uppercase tracking-wider mb-2">
            <Award className="w-3.5 h-3.5 text-[#C41822]" />
            <span>27+ Years of Educational Heritage</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            About BCAS International Placement
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
            Established in 1999, British College of Applied Studies bridges ambitious students with premier global universities.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-3.5 sm:p-10 shadow-xs mb-2 sm:mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-10 items-center">
            <div className="lg:col-span-7 space-y-2 sm:space-y-4">
              <div className="inline-block scale-90 sm:scale-100 origin-left">
                <BcasLogo variant="light" size="sm" />
              </div>

              <h3 className="text-sm sm:text-2xl font-extrabold text-slate-900 leading-tight">
                Your Trusted Gateway to Global Academic Excellence
              </h3>

              <p className="text-slate-600 text-[11px] sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-none">
                For more than two and a half decades, BCAS Campus has pioneered UK-standard higher education and Pearson BTEC pathway programs in Sri Lanka. Recognizing the expanding aspirations of students, BCAS International Placement provides direct, ethical, and accredited university placement services.
              </p>

              <div className="grid grid-cols-2 gap-1.5 sm:gap-3 pt-1 text-[10px] sm:text-xs text-slate-700">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="font-semibold truncate">British Council IELTS Partner</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="font-semibold truncate">University Direct Agent</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="font-semibold truncate">Pearson BTEC UK Approved</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="font-semibold truncate">100% Free Advisory</span>
                </div>
              </div>
            </div>

            {/* Metrics By The Numbers */}
            <div className="lg:col-span-5 bg-slate-50 rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-slate-200/80 space-y-2 sm:space-y-4">
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#103578]" />
                <span>BCAS By The Numbers</span>
              </h4>

              <div className="grid grid-cols-4 lg:grid-cols-2 gap-1.5 sm:gap-3">
                <div className="bg-white p-2 sm:p-3 rounded-lg sm:rounded-xl border border-slate-200/80 text-center sm:text-left">
                  <div className="text-base sm:text-2xl font-black text-[#103578] tabular-nums">27+</div>
                  <div className="text-[9px] sm:text-[11px] text-slate-500 font-medium">Years Heritage</div>
                </div>
                <div className="bg-white p-2 sm:p-3 rounded-lg sm:rounded-xl border border-slate-200/80 text-center sm:text-left">
                  <div className="text-base sm:text-2xl font-black text-[#C41822] tabular-nums">21k+</div>
                  <div className="text-[9px] sm:text-[11px] text-slate-500 font-medium">Graduates</div>
                </div>
                <div className="bg-white p-2 sm:p-3 rounded-lg sm:rounded-xl border border-slate-200/80 text-center sm:text-left">
                  <div className="text-base sm:text-2xl font-black text-[#103578] tabular-nums">100+</div>
                  <div className="text-[9px] sm:text-[11px] text-slate-500 font-medium">Partners</div>
                </div>
                <div className="bg-white p-2 sm:p-3 rounded-lg sm:rounded-xl border border-slate-200/80 text-center sm:text-left">
                  <div className="text-base sm:text-2xl font-black text-emerald-600 tabular-nums">4</div>
                  <div className="text-[9px] sm:text-[11px] text-slate-500 font-medium">Campuses</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Commitments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-10">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#103578] flex items-center justify-center mb-3">
              <Shield className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 mb-1">Integrity & Ethical Guidance</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Transparent profile assessments, accurate tuition details, and realistic visa probabilities without false guarantees.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-9 h-9 rounded-xl bg-rose-50 text-[#C41822] flex items-center justify-center mb-3">
              <Globe className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 mb-1">Direct Linkages</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Official institutional representation bypassing middlemen for expedited offers and priority bursary evaluations.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
              <Users className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 mb-1">Student-Centric Care</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              End-to-end guidance from preliminary university shortlisting and IELTS waiver filings to airport arrival briefings.
            </p>
          </div>
        </div>

        {/* Action Callout */}
        <div className="bg-[#103578] text-white rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-md flex flex-row items-center justify-between gap-2">
          <div className="truncate">
            <h3 className="text-xs sm:text-lg font-bold truncate">
              Ready for your global journey?
            </h3>
            <p className="text-slate-300 text-[10px] sm:text-xs truncate">
              Colombo, Jaffna, Kalmunai & Kandy campuses open for walk-in advisory.
            </p>
          </div>

          <div className="flex gap-1.5 shrink-0">
            <button
              onClick={onBookConsultation}
              className="py-1.5 px-3 rounded-lg bg-[#C41822] hover:bg-[#a3141a] text-white text-xs font-bold shadow-xs transition-all cursor-pointer active:scale-98"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
