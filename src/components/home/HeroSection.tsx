import React, { useState } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Award, Globe2, Briefcase, GraduationCap, DollarSign } from 'lucide-react';
import { heroStudentsImg, DESTINATIONS_DATA } from '../../data/mockData';
import { DestinationCountry } from '../../types';
import { DestinationLogo } from '../common/DestinationLogos';

interface HeroSectionProps {
  onFindUniversity: () => void;
  onBookConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onFindUniversity,
  onBookConsultation
}) => {
  const [activeCountry, setActiveCountry] = useState<DestinationCountry>('UK');
  const activeDest = DESTINATIONS_DATA.find(d => d.country === activeCountry) || DESTINATIONS_DATA[0];

  return (
    <section id="home" className="relative pt-24 pb-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Decorative ambient glowing lights */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100/40 blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 left-1/4 -mb-20 w-80 h-80 rounded-full bg-rose-100/30 blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            {/* Most Important Headline Only: Display / Hero Hierarchy */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 tracking-[-0.02em] leading-[0.98] brand-hero [text-wrap:balance]">
              Your Gateway to{' '}
              <span className="text-[#103578] relative inline-block">
                Top International Universities
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#009FE3] opacity-80" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,7 Q50,0 100,7" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Body Hierarchy: Grift Regular, Tracking 0, Leading 140% */}
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-[1.4] tracking-normal brand-body">
              Explore accredited global universities, discover high-demand degree courses, and navigate your visa with <strong className="text-slate-900 font-semibold">BCAS International Placement</strong>. Certified counseling with zero agency fees.
            </p>

            {/* Quick Interactive Destination Switcher with Destination Logos */}
            <div className="bg-white/95 border border-slate-200/90 rounded-2xl p-2.5 sm:p-3 shadow-xs max-w-xl transition-all">
              {/* LABEL / FACULTY TAB Hierarchy: Grift SemiBold UPPERCASE, Tracking +8%, Leading 100% */}
              <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-100 text-[10px] sm:text-xs text-slate-500 font-semibold uppercase tracking-[0.08em] leading-none brand-label">
                <span>Select Target Destination:</span>
                <span className="text-[#103578] font-bold">Live Intake 2026/2027</span>
              </div>
              <div className="flex overflow-x-auto no-scrollbar gap-1.5 pb-1 flex-nowrap md:flex-wrap">
                {DESTINATIONS_DATA.map((d) => (
                  <button
                    key={d.country}
                    type="button"
                    onClick={() => setActiveCountry(d.country)}
                    className={`shrink-0 px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeCountry === d.country
                        ? 'bg-[#103578] text-white shadow-xs scale-102'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/70'
                    }`}
                  >
                    <span>{d.flagEmoji}</span>
                    <span>{d.country}</span>
                  </button>
                ))}
              </div>

              {/* Destination Official Logo & Dynamic Micro-Stats Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-slate-50 rounded-xl p-2 sm:p-2.5 border border-slate-100 mt-1.5">
                <DestinationLogo country={activeCountry} variant="card-badge" className="!py-1 !px-2.5 shrink-0" />
                <div className="grid grid-cols-3 gap-2 text-xs flex-1">
                  <div>
                    <span className="text-[9px] sm:text-[10px] text-slate-400 block font-medium tracking-[0.02em] leading-[1.3] brand-caption">Work Rights</span>
                    <span className="font-bold text-slate-900 truncate block text-[11px] sm:text-xs leading-[1.15]">{activeDest.postStudyWork.split(':')[0]}</span>
                  </div>
                  <div>
                    <span className="text-[9px] sm:text-[10px] text-slate-400 block font-medium tracking-[0.02em] leading-[1.3] brand-caption">Est. Tuition</span>
                    <span className="font-bold text-slate-900 truncate block text-[11px] sm:text-xs leading-[1.15]">{activeDest.averageTuitionYearly.split('–')[0]}</span>
                  </div>
                  <div>
                    <span className="text-[9px] sm:text-[10px] text-slate-400 block font-medium tracking-[0.02em] leading-[1.3] brand-caption">Intakes</span>
                    <span className="font-bold text-[#C41822] truncate block text-[11px] sm:text-xs leading-[1.15]">{activeDest.typicalIntakes[0]}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-row items-center gap-2 pt-0.5">
              <button
                onClick={onFindUniversity}
                className="flex-1 sm:flex-none py-2.5 sm:py-3.5 px-3 sm:px-6 bg-[#103578] hover:bg-[#0a234e] text-white text-xs sm:text-sm font-bold tracking-normal leading-[1.15] rounded-xl shadow-md hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-1.5 group cursor-pointer active:scale-98"
              >
                <span>Find Universities</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onBookConsultation}
                className="flex-1 sm:flex-none py-2.5 sm:py-3.5 px-3 sm:px-6 bg-[#C41822] hover:bg-[#a3141a] text-white text-xs sm:text-sm font-bold tracking-normal leading-[1.15] rounded-xl shadow-md hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
              >
                <Sparkles className="w-3.5 h-3.5 text-rose-200" />
                <span>Free Consultation</span>
              </button>
            </div>

            {/* Credibility Counters */}
            <div className="pt-2 sm:pt-4 border-t border-slate-200/90 grid grid-cols-3 gap-2 sm:gap-4 text-slate-700">
              <div className="space-y-0.5">
                <div className="text-base sm:text-2xl font-black text-[#103578] tabular-nums tracking-[-0.02em] leading-[0.98]">27+</div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-medium tracking-[0.02em] leading-[1.3] brand-caption">Years Heritage</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-base sm:text-2xl font-black text-[#103578] tabular-nums tracking-[-0.02em] leading-[0.98]">11</div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-medium tracking-[0.02em] leading-[1.3] brand-caption">Destinations</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-base sm:text-2xl font-black text-emerald-600 tabular-nums tracking-[-0.02em] leading-[0.98]">100%</div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-medium tracking-[0.02em] leading-[1.3] brand-caption">Free Advisory</div>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Column (Desktop Only) */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-[4/3] sm:aspect-[16/11] group">
                <img
                  src={heroStudentsImg}
                  alt="International students walking across sunlit university campus lawn"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/10" />

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="flex items-center gap-2 text-rose-300 text-xs font-bold tracking-wide uppercase mb-1">
                    <Globe2 className="w-3.5 h-3.5" />
                    <span>Direct Institutional Linkages</span>
                  </div>
                  <p className="text-xs text-slate-200 line-clamp-2 leading-relaxed">
                    Guiding ambitious students to accredited universities in the UK, Canada, Australia, NZ, USA, and UAE.
                  </p>
                </div>
              </div>

              {/* Floating animated badge 1 */}
              <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float-slow">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 shadow-xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Direct Partner Admissions</div>
                  <div className="text-[11px] text-slate-500">Official Placement Provider</div>
                </div>
              </div>

              {/* Floating animated badge 2 */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float-reverse">
                <div className="w-10 h-10 rounded-xl bg-[#103578]/10 text-[#103578] flex items-center justify-center shrink-0 shadow-xs">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">2026 / 2027 Intakes</div>
                  <div className="text-[11px] text-slate-500">Applications Open Now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
