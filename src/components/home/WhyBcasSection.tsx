import React from 'react';
import {
  Globe,
  Compass,
  BookOpen,
  FileCheck2,
  Award,
  ShieldCheck,
  PlaneTakeoff,
  UserCheck
} from 'lucide-react';
import { WHY_BCAS_ITEMS } from '../../data/mockData';

export const WhyBcasSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Globe: <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-[#103578]" />,
    Compass: <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-[#C41822]" />,
    BookOpen: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-[#103578]" />,
    FileCheck2: <FileCheck2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#C41822]" />,
    Award: <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#103578]" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#C41822]" />,
    PlaneTakeoff: <PlaneTakeoff className="w-5 h-5 sm:w-6 sm:h-6 text-[#103578]" />,
    UserCheck: <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#C41822]" />
  };

  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === 'left' ? -260 : 260, behavior: 'smooth' });
    }
  };

  return (
    <section id="why-bcas" className="py-16 md:py-24 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 shrink-0">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#103578] border border-blue-100 text-xs font-semibold uppercase tracking-[0.08em] leading-none brand-label mb-2.5 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>ADVANTAGES</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C41822]" />
              8 Core Student Commitments
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-[-0.01em] leading-[1.05] brand-headline [text-wrap:balance]">
            Why Choose BCAS International Placement
          </h2>
          <p className="mt-2 sm:mt-3 text-slate-600 text-sm sm:text-base leading-[1.4] tracking-normal brand-body">
            27+ years of institutional heritage, authorized direct university linkages, and 100% free placement counseling.
          </p>
        </div>

        {/* 8 Advantages Grid */}
        <div 
          ref={scrollRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8"
        >
          {WHY_BCAS_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/90 rounded-2xl border border-slate-200/90 p-5 hover:bg-white hover:border-[#103578] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                  {iconMap[item.iconName] || <Globe className="w-5 h-5 text-[#103578]" />}
                </div>

                <h3 className="text-sm md:text-base font-bold text-slate-900 group-hover:text-[#103578] transition-colors line-clamp-1">
                  {item.title}
                </h3>

                <p className="text-[11px] md:text-xs text-slate-600 mt-1.5 leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 mt-2 border-t border-slate-200/60 flex items-center justify-between text-[10px] font-semibold text-slate-500 group-hover:text-[#C41822] transition-colors">
                <span>Certified BCAS Advantage</span>
                <span className="font-mono text-slate-400">0{idx + 1}/08</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-3 sm:p-5 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
            <span className="text-[11px] sm:text-xs font-semibold text-slate-200">
              Trusted by 10,000+ Alumni placed across UK, Canada, Australia & Europe
            </span>
          </div>
          <span className="text-[10px] sm:text-xs text-amber-400 font-bold shrink-0">100% Free Service</span>
        </div>
      </div>
    </section>
  );
};
