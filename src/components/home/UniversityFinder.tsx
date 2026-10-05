import React, { useState } from 'react';
import { Search, Globe, GraduationCap, Calendar, BookOpen, School, ArrowRight, RotateCcw } from 'lucide-react';
import { DestinationCountry, StudyLevel, University } from '../../types';
import { UNIVERSITIES_DATA } from '../../data/mockData';

interface UniversityFinderProps {
  onSelectUniversity: (uni: University) => void;
  onExploreAll: () => void;
}

export const UniversityFinder: React.FC<UniversityFinderProps> = ({
  onSelectUniversity,
  onExploreAll
}) => {
  const [destination, setDestination] = useState<string>('All');
  const [studyLevel, setStudyLevel] = useState<string>('All');
  const [courseQuery, setCourseQuery] = useState<string>('');
  const [intake, setIntake] = useState<string>('All');
  const [hasSearched, setHasSearched] = useState(false);

  const destinationsList: (DestinationCountry | 'All')[] = [
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

  const studyLevelsList: (StudyLevel | 'All')[] = [
    'All',
    'Undergraduate',
    'Postgraduate',
    "Master's",
    'MBA',
    'Diploma',
    'Postgraduate Diploma'
  ];

  const intakesList = [
    'All',
    'September 2026',
    'October 2026',
    'January 2027',
    'February 2027',
    'May 2027'
  ];

  const filteredUniversities = UNIVERSITIES_DATA.filter((uni) => {
    if (destination !== 'All' && uni.country !== destination) return false;
    if (studyLevel !== 'All' && !uni.studyLevels.includes(studyLevel as StudyLevel)) return false;
    if (intake !== 'All' && !uni.intakes.some(i => i.toLowerCase().includes(intake.toLowerCase().split(' ')[0]))) return false;
    if (courseQuery.trim()) {
      const q = courseQuery.toLowerCase();
      const inCourses = uni.popularCourses.some(c => c.toLowerCase().includes(q));
      const inName = uni.name.toLowerCase().includes(q);
      const inOverview = uni.overview.toLowerCase().includes(q);
      if (!inCourses && !inName && !inOverview) return false;
    }
    return true;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    const resultsEl = document.getElementById('finder-results');
    if (resultsEl) {
      resultsEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  const handleReset = () => {
    setDestination('All');
    setStudyLevel('All');
    setCourseQuery('');
    setIntake('All');
    setHasSearched(false);
  };

  return (
    <section id="finder" className="py-16 md:py-24 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-12">
          <span className="text-xs font-semibold text-[#C41822] uppercase tracking-[0.08em] leading-none brand-label block mb-1">
            Interactive Search Engine
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-[-0.01em] leading-[1.05] brand-headline mt-1 mb-2 sm:mb-3 [text-wrap:balance]">
            Find the Right University for Your Future
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-[1.4] tracking-normal brand-body">
            Filter our verified partner universities by target study country, program level, intake cycle, and subject interest.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 sm:p-8 shadow-xs">
          <form onSubmit={handleSearch} className="space-y-3 sm:space-y-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
              <div>
                <label className="block text-[10px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 sm:mb-2 flex items-center gap-1">
                  <Globe className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#103578]" />
                  Destination
                </label>
                <select
                  value={destination}
                  onChange={(e) => {
                    setDestination(e.target.value);
                    setHasSearched(true);
                  }}
                  className="w-full px-2.5 py-1.5 sm:px-3.5 sm:py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 focus:border-[#103578] focus:ring-2 focus:ring-[#103578]/10 outline-none transition-all"
                >
                  {destinationsList.map((d) => (
                    <option key={d} value={d}>
                      {d === 'All' ? 'All Destinations' : d}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 sm:mb-2 flex items-center gap-1">
                  <GraduationCap className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#103578]" />
                  Study Level
                </label>
                <select
                  value={studyLevel}
                  onChange={(e) => {
                    setStudyLevel(e.target.value);
                    setHasSearched(true);
                  }}
                  className="w-full px-2.5 py-1.5 sm:px-3.5 sm:py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 focus:border-[#103578] focus:ring-2 focus:ring-[#103578]/10 outline-none transition-all"
                >
                  {studyLevelsList.map((lvl) => (
                    <option key={lvl} value={lvl}>
                      {lvl === 'All' ? 'All Study Levels' : lvl}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 sm:mb-2 flex items-center gap-1">
                  <Calendar className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#103578]" />
                  Preferred Intake
                </label>
                <select
                  value={intake}
                  onChange={(e) => {
                    setIntake(e.target.value);
                    setHasSearched(true);
                  }}
                  className="w-full px-2.5 py-1.5 sm:px-3.5 sm:py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 focus:border-[#103578] focus:ring-2 focus:ring-[#103578]/10 outline-none transition-all"
                >
                  {intakesList.map((i) => (
                    <option key={i} value={i}>
                      {i === 'All' ? 'All Available Intakes' : i}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 sm:mb-2 flex items-center gap-1">
                  <BookOpen className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#103578]" />
                  Course / Keyword
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={courseQuery}
                    onChange={(e) => {
                      setCourseQuery(e.target.value);
                      setHasSearched(true);
                    }}
                    placeholder="e.g. Computing, Business"
                    className="w-full px-2.5 py-1.5 sm:px-3.5 sm:py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:border-[#103578] focus:ring-2 focus:ring-[#103578]/10 outline-none transition-all"
                  />
                  {courseQuery && (
                    <button
                      type="button"
                      onClick={() => setCourseQuery('')}
                      className="absolute right-2 top-2 text-slate-400 hover:text-slate-600 text-xs"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center justify-between gap-2 pt-1 border-t border-slate-200/80">
              <div className="text-[11px] sm:text-xs text-slate-500 font-medium">
                Found <strong className="text-slate-900 font-bold tabular-nums">{filteredUniversities.length}</strong> matching options
              </div>

              <div className="flex items-center gap-2">
                {(destination !== 'All' || studyLevel !== 'All' || intake !== 'All' || courseQuery) && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-2.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                )}

                <button
                  type="submit"
                  className="px-4 sm:px-6 py-1.5 sm:py-2.5 bg-[#103578] hover:bg-[#0a234e] text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Find Options</span>
                </button>
              </div>
            </div>
          </form>
        </div>

        <div id="finder-results" className="mt-6 sm:mt-10">
          {filteredUniversities.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredUniversities.slice(0, 3).map((uni) => (
                <div
                  key={uni.id}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer"
                >
                  <div className="relative h-28 sm:h-44 overflow-hidden bg-slate-900">
                    <img
                      src={uni.campusImage}
                      alt={uni.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-md text-[10px] font-bold text-[#103578]">
                      {uni.country}
                    </div>
                    <div className="absolute bottom-2 left-3 right-3 text-white">
                      <h3 className="font-bold text-xs sm:text-base leading-tight text-white group-hover:text-rose-200 transition-colors truncate">
                        {uni.name}
                      </h3>
                      <p className="text-[10px] sm:text-[11px] text-slate-300 mt-0.5">{uni.city}</p>
                    </div>
                  </div>

                  <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between space-y-2 sm:space-y-4">
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center justify-between text-[10px] sm:text-[11px] pt-1">
                        <span className="text-slate-500">Upcoming Intake:</span>
                        <span className="font-semibold text-slate-800">{uni.intakes[0]}</span>
                      </div>
                      {uni.scholarshipInfo && (
                        <div className="p-1.5 bg-amber-50/70 border border-amber-200/70 rounded-lg text-[10px] text-amber-800 truncate">
                          <span className="font-bold">Award:</span> {uni.scholarshipInfo}
                        </div>
                      )}
                    </div>

                    <div className="pt-1 flex items-center gap-2">
                      <button
                        onClick={() => onSelectUniversity(uni)}
                        className="w-full py-1.5 px-2 bg-slate-100 hover:bg-[#103578] hover:text-white text-slate-800 text-xs font-bold rounded-lg transition-colors text-center cursor-pointer"
                      >
                        View University
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
              <School className="w-8 h-8 text-slate-400 mx-auto mb-1" />
              <h3 className="text-xs font-bold text-slate-800">No universities match this filter</h3>
              <button
                onClick={handleReset}
                className="mt-2 px-3 py-1 bg-[#103578] text-white text-[11px] font-semibold rounded-lg cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}

          <div className="text-center mt-2 sm:mt-6">
            <button
              onClick={onExploreAll}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#103578] hover:text-[#C41822] transition-colors cursor-pointer"
            >
              <span>Explore All Verified Partner Universities</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
