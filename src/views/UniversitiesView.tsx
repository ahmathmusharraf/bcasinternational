import React, { useState } from 'react';
import { Search, School, MapPin, Calendar, Award, GraduationCap, ArrowRight, RotateCcw, Scale, X, CheckCircle2 } from 'lucide-react';
import { UNIVERSITIES_DATA } from '../data/mockData';
import { DestinationCountry, StudyLevel, University } from '../types';

interface UniversitiesViewProps {
  onSelectUniversity: (uni: University) => void;
  onBookConsultation: () => void;
  onNavigateHome?: () => void;
}

export const UniversitiesView: React.FC<UniversitiesViewProps> = ({
  onSelectUniversity,
  onBookConsultation,
  onNavigateHome
}) => {
  const [selectedDestination, setSelectedDestination] = useState<DestinationCountry | 'All'>('All');
  const [selectedLevel, setSelectedLevel] = useState<StudyLevel | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [compareList, setCompareList] = useState<University[]>([]);
  const [isComparing, setIsComparing] = useState(false);

  const destinations: (DestinationCountry | 'All')[] = [
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
  const levels: (StudyLevel | 'All')[] = ['All', 'Undergraduate', 'Postgraduate', "Master's", 'MBA', 'Diploma', 'Postgraduate Diploma'];

  const filteredUniversities = UNIVERSITIES_DATA.filter((uni) => {
    if (selectedDestination !== 'All' && uni.country !== selectedDestination) return false;
    if (selectedLevel !== 'All' && !uni.studyLevels.includes(selectedLevel as StudyLevel)) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const inName = uni.name.toLowerCase().includes(q);
      const inCity = uni.city.toLowerCase().includes(q);
      const inCourses = uni.popularCourses.some(c => c.toLowerCase().includes(q));
      if (!inName && !inCity && !inCourses) return false;
    }
    return true;
  });

  const resetFilters = () => {
    setSelectedDestination('All');
    setSelectedLevel('All');
    setSearchQuery('');
  };

  const toggleCompare = (uni: University) => {
    if (compareList.some(item => item.id === uni.id)) {
      setCompareList(compareList.filter(item => item.id !== uni.id));
    } else {
      if (compareList.length >= 2) {
        setCompareList([compareList[1], uni]);
      } else {
        setCompareList([...compareList, uni]);
      }
    }
  };

  return (
    <div className="pt-20 pb-20 bg-slate-50 min-h-screen">
      {/* Top Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            {onNavigateHome && (
              <button
                onClick={onNavigateHome}
                className="hover:text-[#103578] font-semibold flex items-center gap-1 cursor-pointer transition-colors"
              >
                <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                <span>Home</span>
              </button>
            )}
            {onNavigateHome && <span>/</span>}
            <span className="text-[#103578] font-bold">Universities Directory</span>
          </div>

          <button
            onClick={onBookConsultation}
            className="px-3.5 py-1.5 rounded-lg bg-[#C41822] hover:bg-[#a3141a] text-white text-xs font-bold transition-all shadow-2xs cursor-pointer flex items-center gap-1.5"
          >
            <span>University Consultation</span>
          </button>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-[#103578] text-white py-14 border-b border-blue-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-rose-300 text-xs font-semibold uppercase tracking-[0.08em] leading-none brand-label mb-3">
            <School className="w-3.5 h-3.5" />
            <span>Institutional Directory</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.02em] leading-[0.98] brand-hero [text-wrap:balance]">
            International Universities Directory
          </h1>
          <p className="mt-3 text-slate-200 text-sm sm:text-base max-w-2xl leading-[1.4] tracking-normal brand-body">
            Browse accredited universities across the UK, Canada, Australia, New Zealand, USA, and UAE with verified entry criteria and scholarship offerings.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filter Controls Box */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm mb-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by university name, city, or course..."
                className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#103578] focus:bg-white"
              />
            </div>

            {/* Level Selector */}
            <div className="md:col-span-4">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value as StudyLevel | 'All')}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#103578] focus:bg-white"
              >
                <option value="All">All Study Levels</option>
                {levels.filter(l => l !== 'All').map(lvl => (
                  <option key={lvl} value={lvl}>{lvl}</option>
                ))}
              </select>
            </div>

            {/* Reset */}
            <div className="md:col-span-2">
              <button
                onClick={resetFilters}
                className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Destination Pills */}
          <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">Destination:</span>
            {destinations.map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDestination(d)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedDestination === d
                    ? 'bg-[#103578] text-white shadow-xs'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter & Comparison Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
          <p className="text-xs sm:text-sm font-semibold text-slate-600">
            Showing <strong className="text-slate-900">{filteredUniversities.length}</strong> university options
          </p>

          <div className="flex items-center gap-3">
            {compareList.length > 0 && (
              <button
                onClick={() => setIsComparing(true)}
                className="py-1.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
              >
                <Scale className="w-3.5 h-3.5" />
                <span>Compare Universities ({compareList.length}/2)</span>
              </button>
            )}

            <button
              onClick={onBookConsultation}
              className="text-xs font-bold text-[#C41822] hover:underline cursor-pointer"
            >
              Need help choosing? Speak with an advisor →
            </button>
          </div>
        </div>

        {/* Universities Grid */}
        {filteredUniversities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUniversities.map((uni) => {
              const isCompared = compareList.some(item => item.id === uni.id);

              return (
                <div
                  key={uni.id}
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                      <img
                        src={uni.campusImage}
                        alt={uni.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                      <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#C41822]" />
                        <span>{uni.city}, {uni.country}</span>
                      </div>

                      {uni.scholarshipInfo && (
                        <div className="absolute bottom-3 left-3 bg-[#C41822] text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm flex items-center gap-1">
                          <Award className="w-3 h-3 text-rose-200" />
                          <span className="truncate max-w-[220px]">{uni.scholarshipInfo}</span>
                        </div>
                      )}
                    </div>

                    <div className="p-5 space-y-3">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#103578] transition-colors leading-snug">
                        {uni.name}
                      </h3>

                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {uni.overview}
                      </p>

                      <div className="space-y-1.5 pt-2 border-t border-slate-100">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                          Popular Courses
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {uni.popularCourses.slice(0, 3).map((c, i) => (
                            <span
                              key={i}
                              className="text-[10px] bg-slate-50 border border-slate-200 text-slate-700 px-2 py-0.5 rounded font-medium"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-3 pt-2 text-xs text-slate-500 font-medium">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          {uni.intakes[0]}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                          {uni.studyLevels.slice(0, 2).join(', ')}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={() => toggleCompare(uni)}
                        className={`text-xs font-semibold py-1.5 px-2 rounded-lg transition-colors flex items-center gap-1 cursor-pointer ${
                          isCompared
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-300'
                            : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                      >
                        <Scale className="w-3 h-3" />
                        <span>{isCompared ? 'Added' : 'Compare'}</span>
                      </button>

                      <button
                        onClick={() => onSelectUniversity(uni)}
                        className="py-2 px-3.5 rounded-xl bg-[#103578] hover:bg-[#0a234e] text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-lg mx-auto">
            <School className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900">No matching universities found</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Try adjusting your destination, study level, or search keyword to view other institutions.
            </p>
            <button
              onClick={resetFilters}
              className="mt-4 py-2 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Side-by-Side Comparison Modal */}
      {isComparing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-4xl w-full overflow-hidden max-h-[90vh] flex flex-col">
            <div className="bg-[#103578] text-white p-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Scale className="w-5 h-5 text-rose-300" />
                <h3 className="text-lg font-bold">University Comparison</h3>
              </div>
              <button
                onClick={() => setIsComparing(false)}
                className="p-1 rounded text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1">
              {compareList.length < 2 ? (
                <div className="text-center py-10 space-y-3">
                  <p className="text-slate-600 text-sm">
                    Please select 2 universities from the list to compare their entry criteria, tuition fees, and scholarship offerings.
                  </p>
                  <button
                    onClick={() => setIsComparing(false)}
                    className="py-2 px-4 bg-[#103578] text-white text-xs font-bold rounded-xl"
                  >
                    Back to University Directory
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-6 divide-x divide-slate-200">
                  {compareList.map((uni) => (
                    <div key={uni.id} className="first:pr-4 last:pl-6 space-y-4">
                      <div>
                        <span className="text-xs font-bold text-slate-400 uppercase">{uni.country}</span>
                        <h4 className="text-lg font-bold text-slate-900 mt-0.5">{uni.name}</h4>
                        <div className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                          <MapPin className="w-3.5 h-3.5 text-[#C41822]" />
                          <span>{uni.city}</span>
                        </div>
                      </div>

                      <div className="p-3 bg-slate-50 rounded-xl text-xs space-y-2">
                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Tuition Estimate</span>
                          <span className="font-bold text-slate-900">{uni.estimatedTuition || 'Contact for details'}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Intakes</span>
                          <span className="font-medium text-slate-800">{uni.intakes.join(', ')}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Scholarship Opportunity</span>
                          <span className="font-medium text-[#C41822]">{uni.scholarshipInfo || 'Standard admissions'}</span>
                        </div>
                      </div>

                      <div>
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                          Entry Requirements Summary
                        </span>
                        <ul className="text-xs text-slate-600 space-y-1">
                          {uni.entryRequirements.slice(0, 2).map((req, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button
                        onClick={() => {
                          setIsComparing(false);
                          onSelectUniversity(uni);
                        }}
                        className="w-full py-2.5 px-4 bg-[#103578] hover:bg-[#0a234e] text-white text-xs font-bold rounded-xl transition-all"
                      >
                        View Full Profile
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => setCompareList([])}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800"
              >
                Clear Selection
              </button>

              <button
                onClick={() => {
                  setIsComparing(false);
                  onBookConsultation();
                }}
                className="py-2.5 px-5 bg-[#C41822] hover:bg-[#a3141a] text-white text-xs font-bold rounded-xl shadow-xs"
              >
                Book Consultation for Either University
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
