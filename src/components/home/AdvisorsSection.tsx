import React from 'react';
import { UserCheck, Award, MessageCircle, ArrowRight } from 'lucide-react';
import { ADVISORS_DATA } from '../../data/mockData';

interface AdvisorsSectionProps {
  onBookAdvisor: (advisorName: string) => void;
}

export const AdvisorsSection: React.FC<AdvisorsSectionProps> = ({
  onBookAdvisor
}) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === 'left' ? -260 : 260, behavior: 'smooth' });
    }
  };

  return (
    <section id="advisors" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 shrink-0">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#103578] text-xs font-semibold uppercase tracking-[0.08em] leading-none brand-label mb-2 sm:mb-3">
            <UserCheck className="w-3.5 h-3.5 text-[#C41822]" />
            <span>Dedicated Counselors</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-[-0.01em] leading-[1.05] brand-headline [text-wrap:balance]">
            Meet Experienced Placement Advisors
          </h2>
          <p className="mt-2 sm:mt-3 text-slate-600 text-sm sm:text-base leading-[1.4] tracking-normal brand-body">
            Qualified counselors across Colombo, Kandy, Kalmunai & Jaffna to guide your overseas applications.
          </p>
        </div>

        {/* Advisors Cards Grid */}
        <div 
          ref={scrollRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8"
        >
          {ADVISORS_DATA.map((advisor) => (
            <div
              key={advisor.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-32 md:h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={advisor.photoUrl}
                    alt={advisor.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  <div className="absolute bottom-2 left-3 right-3 text-white">
                    <h3 className="text-sm md:text-base font-bold drop-shadow-sm">{advisor.name}</h3>
                    <p className="text-[11px] md:text-xs text-rose-200 font-medium">{advisor.position}</p>
                  </div>
                </div>

                <div className="p-3 md:p-5 space-y-1.5 md:space-y-3">
                  <div className="flex items-center justify-between text-[11px] md:text-xs text-slate-500">
                    <span className="flex items-center gap-1 font-semibold text-[#103578]">
                      <Award className="w-3.5 h-3.5" />
                      {advisor.experienceYears}+ Years Exp.
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium truncate max-w-[120px]">
                      {advisor.languages.join(', ')}
                    </span>
                  </div>

                  <p className="text-[11px] md:text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {advisor.specialization}
                  </p>

                  <div className="pt-1">
                    <div className="flex flex-wrap gap-1">
                      {advisor.destinations.slice(0, 3).map((d) => (
                        <span
                          key={d}
                          className="text-[9px] md:text-[10px] bg-blue-50 text-[#103578] font-bold px-1.5 py-0.5 rounded"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 md:p-5 pt-0">
                <button
                  type="button"
                  onClick={() => onBookAdvisor(advisor.name)}
                  className="w-full py-2 px-3 rounded-xl bg-slate-100 group-hover:bg-[#103578] text-slate-800 group-hover:text-white text-[11px] md:text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Book with {advisor.name.split(' ')[0]}</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Fast Info Strip */}
        <div className="bg-white rounded-xl border border-slate-200 p-2.5 sm:p-4 flex items-center justify-between gap-2 shrink-0">
          <span className="text-[11px] text-slate-600 truncate">
            Speak directly via Zoom, WhatsApp, or at Colombo / Kandy / Jaffna / Kalmunai offices.
          </span>
          <span className="text-[10px] sm:text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full shrink-0">
            No Charges
          </span>
        </div>
      </div>
    </section>
  );
};
