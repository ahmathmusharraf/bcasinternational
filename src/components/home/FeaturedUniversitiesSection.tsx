import React from 'react';
import { ArrowRight, MapPin, Calendar, Award, GraduationCap, School } from 'lucide-react';
import { UNIVERSITIES_DATA } from '../../data/mockData';
import { University } from '../../types';

interface FeaturedUniversitiesSectionProps {
  onSelectUniversity: (uni: University) => void;
  onExploreAll: () => void;
}

export const FeaturedUniversitiesSection: React.FC<FeaturedUniversitiesSectionProps> = ({
  onSelectUniversity,
  onExploreAll
}) => {
  // Select top featured universities across destinations
  const featured = UNIVERSITIES_DATA.slice(0, 6);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="universities" className="py-16 md:py-24 bg-slate-50 border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-rose-50 text-[#C41822] text-xs font-bold uppercase tracking-wider mb-2">
              <School className="w-3.5 h-3.5" />
              <span>Institutional Excellence</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
              Featured International Universities
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl">
              Study at accredited, world-class universities with BCAS placement support and scholarship evaluations.
            </p>
          </div>

          <div className="flex items-center justify-between md:justify-end gap-3">
            <button
              onClick={onExploreAll}
              className="inline-flex items-center gap-1.5 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs sm:text-sm font-bold shadow-xs hover:border-[#103578] hover:text-[#103578] transition-all cursor-pointer group"
            >
              <span>Explore All ({UNIVERSITIES_DATA.length})</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {featured.map((uni) => (
            <div
              key={uni.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image banner */}
              <div className="relative h-28 sm:h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={uni.campusImage}
                  alt={uni.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                <div className="absolute top-2 right-2 bg-slate-900/80 backdrop-blur-md px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-semibold text-white shadow-xs flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-rose-400" />
                  <span>{uni.city} · {uni.country}</span>
                </div>

                {uni.scholarshipInfo && (
                  <div className="absolute bottom-2 left-2 text-white text-[10px] sm:text-xs font-medium drop-shadow flex items-center gap-1 max-w-[90%] truncate">
                    <Award className="w-3 h-3 text-rose-300 shrink-0" />
                    <span className="truncate">{uni.scholarshipInfo}</span>
                  </div>
                )}
              </div>

              {/* Card Details */}
              <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between space-y-2 sm:space-y-4">
                <div>
                  <h3 className="text-sm sm:text-lg font-bold text-slate-900 group-hover:text-[#103578] transition-colors leading-snug truncate">
                    {uni.name}
                  </h3>

                  <div className="flex items-center gap-2 mt-1 text-[11px] sm:text-xs text-slate-500">
                    <span className="flex items-center gap-1 font-medium">
                      <GraduationCap className="w-3 h-3 text-slate-400" />
                      {uni.studyLevels.slice(0, 2).join(', ')}
                    </span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span className="flex items-center gap-1 font-medium">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {uni.intakes[0]}
                    </span>
                  </div>
                </div>

                {/* Popular Courses */}
                <div className="space-y-1 pt-1.5 border-t border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Popular Courses
                  </span>
                  <div className="text-[11px] sm:text-xs text-slate-700 truncate">
                    {uni.popularCourses.slice(0, 2).join(' · ')}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                  <div className="text-xs">
                    <span className="text-slate-400 block text-[9px] sm:text-[10px] uppercase font-bold tracking-wider">Tuition</span>
                    <span className="font-bold text-slate-800 text-[11px] sm:text-xs truncate block max-w-[120px]">{uni.estimatedTuition || 'Flexible'}</span>
                  </div>

                  <button
                    onClick={() => onSelectUniversity(uni)}
                    className="py-1.5 px-3 rounded-xl bg-[#103578] hover:bg-[#0a234e] text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Uni</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
