import React from 'react';
import { ArrowRight, Compass, GraduationCap, Briefcase, ChevronRight } from 'lucide-react';
import { DESTINATIONS_DATA } from '../../data/mockData';
import { DestinationCountry } from '../../types';
import { DestinationLogo, DestinationLogosStrip, DESTINATION_BRANDS } from '../common/DestinationLogos';

interface StudyDestinationsSectionProps {
  onSelectDestination: (country: DestinationCountry) => void;
  onExploreAll: () => void;
}

export const StudyDestinationsSection: React.FC<StudyDestinationsSectionProps> = ({
  onSelectDestination,
  onExploreAll
}) => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = React.useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll > 0) {
      setScrollProgress(Math.round((el.scrollLeft / maxScroll) * 10));
    }
  };

  return (
    <section id="destinations" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-[#103578] text-xs font-bold uppercase tracking-wider mb-2">
              <Compass className="w-3.5 h-3.5 text-[#C41822]" />
              <span>Global Opportunities</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
              Explore 11 Study Destinations
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl">
              Official education boards, post-study work rights, and accredited degrees across 11 premier countries.
            </p>
          </div>

          <div className="flex items-center justify-between md:justify-end gap-3">
            <button
              onClick={onExploreAll}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#103578] hover:text-[#C41822] transition-colors cursor-pointer group"
            >
              <span>View All 11 Guides</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Official Destination Logos Strip */}
        <DestinationLogosStrip className="mb-6 sm:mb-8" />

        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {DESTINATIONS_DATA.map((dest) => (
            <div
              key={dest.id}
              className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Destination Image Area with Official Destination Logo */}
              <div className="relative h-28 sm:h-44 w-full overflow-hidden bg-slate-100">
                <img
                  src={dest.image}
                  alt={`Study in ${dest.country}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Official Destination Logo Badge */}
                <div className="absolute top-2 left-2 z-10">
                  <DestinationLogo country={dest.country} variant="card-badge" />
                </div>

                <div className="absolute bottom-2 left-2 right-2 text-white">
                  <h3 className="text-sm sm:text-lg font-bold drop-shadow-sm truncate">
                    Study in {dest.country}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between space-y-2 sm:space-y-4">
                <p className="text-[11px] sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                  {dest.description}
                </p>

                {/* Popular Study Areas */}
                <div className="space-y-0.5 pt-1.5 border-t border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                    <GraduationCap className="w-3 h-3 text-[#103578]" />
                    Popular Disciplines
                  </span>
                  <div className="text-[11px] sm:text-xs text-slate-600 truncate">
                    {dest.popularStudyAreas.slice(0, 3).join(' · ')}
                  </div>
                </div>

                {/* Post study work rights highlight */}
                <div className="bg-slate-50 rounded-xl p-2 sm:p-3 text-[11px] sm:text-xs text-slate-700 flex items-start gap-1.5 border border-slate-100">
                  <Briefcase className="w-3.5 h-3.5 text-[#103578] mt-0.5 shrink-0" />
                  <span className="line-clamp-1 font-medium">{dest.postStudyWork}</span>
                </div>

                {/* Official Accreditation Board */}
                <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-slate-100">
                  <span className="font-semibold text-slate-400">Official Portal:</span>
                  <span className="font-bold text-[#103578] truncate max-w-[180px]">
                    {DESTINATION_BRANDS[dest.country]?.brandName || dest.country}
                  </span>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onSelectDestination(dest.country)}
                  className="w-full py-2 px-3 rounded-xl bg-[#103578] hover:bg-[#0a234e] text-white text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1 cursor-pointer shadow-xs"
                >
                  <span>Explore {dest.country} Guide</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
