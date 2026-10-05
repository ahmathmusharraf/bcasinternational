import React, { useState } from 'react';
import { Award, Calendar, CheckCircle2, Globe, ArrowRight, Sparkles } from 'lucide-react';
import { SCHOLARSHIPS_DATA } from '../../data/mockData';
import { DestinationCountry } from '../../types';

interface ScholarshipsSectionProps {
  onApplyScholarship: (scholarshipTitle: string) => void;
  onExploreAll: () => void;
}

export const ScholarshipsSection: React.FC<ScholarshipsSectionProps> = ({
  onApplyScholarship,
  onExploreAll
}) => {
  const [activeFilter, setActiveFilter] = useState<DestinationCountry | 'All'>('All');

  const filterCountries: (DestinationCountry | 'All')[] = [
    'All',
    'USA',
    'Canada',
    'UK',
    'Australia',
    'Ireland',
    'Germany',
    'Malaysia',
    'Singapore',
    'UAE',
    'Malta',
    'Spain'
  ];

  const filteredScholarships = SCHOLARSHIPS_DATA.filter((s) => {
    if (activeFilter === 'All') return true;
    return s.country === activeFilter;
  });

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="scholarships" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-rose-50 text-[#C41822] text-xs font-bold uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Financial Support & Merit Awards</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Discover Scholarships & Opportunities
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl">
              Competitive merit scholarships, early application grants, and regional tuition waivers across 11 destinations.
            </p>
          </div>

          <div className="flex items-center justify-between md:justify-end gap-3">
            <div className="flex md:hidden items-center gap-1 text-slate-500 text-xs">
              <span>Swipe awards</span>
              <div className="flex items-center gap-1 ml-1">
                <button
                  onClick={() => scroll('left')}
                  aria-label="Scroll left"
                  className="w-7 h-7 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-50 cursor-pointer"
                >
                  ‹
                </button>
                <button
                  onClick={() => scroll('right')}
                  aria-label="Scroll right"
                  className="w-7 h-7 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-50 cursor-pointer"
                >
                  ›
                </button>
              </div>
            </div>

            <button
              onClick={onExploreAll}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#103578] hover:text-[#C41822] transition-colors cursor-pointer group"
            >
              <span>View All ({SCHOLARSHIPS_DATA.length})</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex overflow-x-auto no-scrollbar gap-1.5 mb-6 sm:mb-8 pb-1">
          {filterCountries.map((c) => (
            <button
              key={c}
              onClick={() => setActiveFilter(c)}
              className={`shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === c
                  ? 'bg-[#103578] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {c === 'All' ? 'All Destinations' : c}
            </button>
          ))}
        </div>

        {/* Scholarships Grid */}
        <div 
          ref={scrollContainerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {filteredScholarships.slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-5 hover:shadow-xl hover:border-rose-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-slate-500">
                    <Globe className="w-3.5 h-3.5 text-[#103578]" />
                    {item.country}
                  </span>
                  <span className="text-[10px] sm:text-[11px] bg-slate-100 text-slate-700 font-semibold px-2 py-0.5 rounded">
                    {item.studyLevel}
                  </span>
                </div>

                <div className="mb-2 sm:mb-4">
                  <div className="text-lg sm:text-2xl font-black text-[#C41822] tracking-tight">
                    {item.awardValue}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 group-hover:text-[#103578] transition-colors truncate">
                    {item.awardTitle}
                  </h3>
                  <div className="text-[11px] sm:text-xs font-semibold text-slate-600 mt-0.5 truncate">
                    {item.universityName}
                  </div>
                </div>

                <div className="space-y-1.5 py-2 sm:py-3 border-y border-slate-100 text-xs text-slate-600">
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                    <span className="text-[11px] sm:text-xs line-clamp-1 sm:line-clamp-2">{item.eligibilityNote}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500 text-[11px] sm:text-xs">
                    <Calendar className="w-3 h-3 text-[#103578]" />
                    <span>Deadline: <strong>{item.deadline}</strong></span>
                  </div>
                </div>
              </div>

              <div className="pt-2 sm:pt-4 flex items-center justify-between">
                <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium truncate max-w-[140px]">{item.applicationMode}</span>
                <button
                  onClick={() => onApplyScholarship(item.awardTitle)}
                  className="py-1.5 px-3 rounded-xl bg-slate-100 group-hover:bg-[#C41822] text-slate-800 group-hover:text-white text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Enquire Award</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
