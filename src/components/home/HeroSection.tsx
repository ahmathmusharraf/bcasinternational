import React, { useState } from 'react';
import { 
  ArrowRight, Sparkles, ShieldCheck, Award, Globe2, 
  CheckCircle2, Calendar, Building2, GraduationCap, 
  Clock, MessageCircle, FileCheck, ChevronRight, Star,
  Compass
} from 'lucide-react';
import { heroStudentsImg, DESTINATIONS_DATA } from '../../data/mockData';
import { DestinationCountry } from '../../types';
import { DestinationLogo } from '../common/DestinationLogos';

interface HeroSectionProps {
  onFindUniversity: () => void;
  onBookConsultation: () => void;
  onExploreSubPages?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onFindUniversity,
  onBookConsultation,
  onExploreSubPages
}) => {
  const [activeCountry, setActiveCountry] = useState<DestinationCountry>('UK');
  const activeDest = DESTINATIONS_DATA.find(d => d.country === activeCountry) || DESTINATIONS_DATA[0];

  const popularCountries: { country: DestinationCountry; label: string; flag: string }[] = [
    { country: 'UK', label: 'United Kingdom', flag: '🇬🇧' },
    { country: 'Australia', label: 'Australia', flag: '🇦🇺' },
    { country: 'Canada', label: 'Canada', flag: '🇨🇦' },
    { country: 'USA', label: 'United States', flag: '🇺🇸' },
    { country: 'Ireland', label: 'Ireland', flag: '🇮🇪' },
    { country: 'Germany', label: 'Germany', flag: '🇩🇪' },
    { country: 'Malaysia', label: 'Malaysia', flag: '🇲🇾' },
    { country: 'UAE', label: 'Dubai (UAE)', flag: '🇦🇪' }
  ];

  return (
    <section 
      id="home" 
      className="relative w-full min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-4.25rem)] flex items-center justify-center pt-20 pb-10 sm:pt-24 sm:pb-12 lg:py-6 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden border-b border-slate-200/60"
    >
      {/* Subtle luxury geometric blueprint grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(#103578 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Ambient background soft glow effects */}
      <div className="absolute top-0 right-1/4 -mt-24 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 -mb-24 w-80 h-80 rounded-full bg-rose-200/25 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -ml-28 w-80 h-80 rounded-full bg-indigo-100/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* LEFT COLUMN: Hero Pitch, Interactive Filter, CTAs & Metrics (One-View Focused) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-5">
            
            {/* 1. Header Badges: Trust & Accreditation */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/90 shadow-2xs text-[11px] sm:text-xs font-semibold text-slate-800">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-bold text-[#103578]">Official University Representative</span>
                <span className="text-slate-300">·</span>
                <span className="text-slate-600 font-medium">Est. 1999 (27+ Yrs)</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-[11px] font-bold text-emerald-800">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Free Guidance · No Agency Fees</span>
              </div>
            </div>

            {/* 2. Main Headline & Subtitle */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] xl:text-[3.35rem] font-black text-slate-900 tracking-[-0.03em] leading-[1.08] [text-wrap:balance]">
                Your Gateway to{' '}
                <span className="text-[#103578] relative inline-block">
                  World-Class Universities
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#103578] via-[#009FE3] to-[#C41822] rounded-full" />
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
                Direct admissions, up to 50% merit scholarships, and 98% visa success across 11 leading destinations with certified counselors in Colombo, Kandy, Kalmunai, and Jaffna.
              </p>
            </div>

            {/* 3. Interactive Destination Quick Selector & Micro-Intel Bar */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-3 sm:p-4 transition-all">
              {/* Header inside switcher */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                  <Globe2 className="w-3.5 h-3.5 text-[#103578]" />
                  <span className="uppercase tracking-wider text-[11px] text-slate-700">Choose Study Destination:</span>
                </div>
                <span className="text-[10px] font-bold text-[#C41822] bg-rose-50 px-2 py-0.5 rounded-md border border-rose-100">
                  Intakes 2026/2027 Open
                </span>
              </div>

              {/* Country Tabs */}
              <div className="flex overflow-x-auto no-scrollbar gap-1.5 pb-2 -mx-0.5 px-0.5 sm:flex-wrap">
                {popularCountries.map((item) => {
                  const isSelected = activeCountry === item.country;
                  return (
                    <button
                      key={item.country}
                      type="button"
                      onClick={() => setActiveCountry(item.country)}
                      className={`shrink-0 px-2.5 py-1 sm:py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                        isSelected
                          ? 'bg-[#103578] text-white shadow-xs ring-2 ring-[#103578]/20'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/70'
                      }`}
                    >
                      <span className="text-sm leading-none">{item.flag}</span>
                      <span>{item.country}</span>
                    </button>
                  );
                })}
              </div>

              {/* Compact 4-Card Intelligence Ribbon */}
              <div className="mt-1.5 bg-slate-50/90 rounded-xl p-2.5 border border-slate-200/80">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-left">
                  <div className="bg-white px-2.5 py-2 rounded-lg border border-slate-200/60 shadow-2xs">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Post-Study Work</span>
                    <span className="text-xs font-extrabold text-slate-900 block truncate mt-0.5" title={activeDest.postStudyWork}>
                      {activeDest.postStudyWork.split(':')[0]}
                    </span>
                  </div>

                  <div className="bg-white px-2.5 py-2 rounded-lg border border-slate-200/60 shadow-2xs">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Avg. Tuition</span>
                    <span className="text-xs font-extrabold text-slate-900 block truncate mt-0.5">
                      {activeDest.averageTuitionYearly.split('–')[0]}
                    </span>
                  </div>

                  <div className="bg-white px-2.5 py-2 rounded-lg border border-slate-200/60 shadow-2xs">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Upcoming Intake</span>
                    <span className="text-xs font-extrabold text-[#C41822] block truncate mt-0.5">
                      {activeDest.typicalIntakes[0]?.split('(')[0]?.trim()}
                    </span>
                  </div>

                  <div className="bg-white px-2.5 py-2 rounded-lg border border-slate-200/60 shadow-2xs">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">English Proof</span>
                    <span className="text-xs font-extrabold text-emerald-700 block truncate mt-0.5">
                      MOI Waiver / IELTS
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Action Buttons Suite */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-0.5">
              <button
                type="button"
                onClick={onBookConsultation}
                className="py-3 px-5 rounded-xl bg-[#C41822] hover:bg-[#a3141a] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <Calendar className="w-4 h-4 text-rose-200" />
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onFindUniversity}
                className="py-3 px-5 rounded-xl bg-[#103578] hover:bg-[#0a234e] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <GraduationCap className="w-4 h-4 text-blue-200" />
                <span>Explore 50+ Universities</span>
              </button>

              <a
                href="https://wa.me/94761415273?text=Hello%20BCAS%2C%20I%20would%20like%20to%20consult%20about%20university%20placements."
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200/90 text-slate-800 text-xs sm:text-sm font-bold shadow-2xs transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <div className="w-4.5 h-4.5 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
                  <MessageCircle className="w-3 h-3 fill-current" />
                </div>
                <span>WhatsApp Advisory</span>
              </a>
            </div>

            {/* 5. Compact Credibility & Trust Bar */}
            <div className="pt-2 sm:pt-3 border-t border-slate-200/80 grid grid-cols-4 gap-2 sm:gap-4 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#103578] tracking-tight">27+</div>
                <div className="text-[11px] font-semibold text-slate-800">Years Heritage</div>
                <div className="text-[10px] text-slate-400">Est. 1999</div>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-black text-[#103578] tracking-tight">50+</div>
                <div className="text-[11px] font-semibold text-slate-800">Global Unis</div>
                <div className="text-[10px] text-slate-400">Direct partners</div>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-black text-emerald-600 tracking-tight">98%</div>
                <div className="text-[11px] font-semibold text-slate-800">Visa Success</div>
                <div className="text-[10px] text-slate-400">High approval</div>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-black text-[#C41822] tracking-tight">100%</div>
                <div className="text-[11px] font-semibold text-slate-800">Free Advisory</div>
                <div className="text-[10px] text-slate-400">Zero agency fee</div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Attractive, High-Impact Visual Composition (One-View Cohesive) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Bevel with High-Resolution Student Campus Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-[4/3] sm:aspect-[16/12] lg:aspect-[16/13] group">
                <img
                  src={heroStudentsImg}
                  alt="International students studying at leading partner university campus"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-black/10" />

                {/* Country Badge Inset at Top Right */}
                <div className="absolute top-3.5 right-3.5 z-10">
                  <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/40 shadow-sm flex items-center gap-2">
                    <span className="text-base leading-none">
                      {popularCountries.find(p => p.country === activeCountry)?.flag || '🇬🇧'}
                    </span>
                    <span className="text-xs font-bold text-slate-900">
                      Target: {activeCountry}
                    </span>
                  </div>
                </div>

                {/* Campus Presence Bottom Banner */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-rose-300 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5" />
                        <span>Islandwide Campuses</span>
                      </span>
                      <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                        Walk-Ins Welcome
                      </span>
                    </div>
                    <p className="text-xs text-slate-200 font-medium leading-snug">
                      Colombo City Campus · Kandy · Kalmunai · Jaffna Centers
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Live Badge 1 (Top Left): Live Intake Status */}
              <div className="absolute -top-3.5 -left-3.5 sm:-top-4 sm:-left-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-slate-200/90 flex items-center gap-2.5 animate-float-slow">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#103578] flex items-center justify-center shrink-0 shadow-2xs font-bold">
                  <Award className="w-4.5 h-4.5 text-[#103578]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-bold text-slate-900">2026/2027 Intakes</span>
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium">UG & Postgraduate Admissions</div>
                </div>
              </div>

              {/* Floating Live Badge 2 (Bottom Right): Verified Scholarship & Visa Stamp */}
              <div className="absolute -bottom-4 -right-2 sm:-bottom-5 sm:-right-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-slate-200/90 flex items-center gap-2.5 max-w-[240px] sm:max-w-xs animate-float-reverse">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 shadow-2xs">
                  <CheckCircle2 className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900">
                    Scholarships Up to 50%
                  </div>
                  <div className="text-[10px] text-slate-500 leading-tight">
                    Merit grants & IELTS waiver assistance
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
