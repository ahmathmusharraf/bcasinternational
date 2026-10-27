import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { UNIVERSITIES } from '../data/mockData';
import { University } from '../types';
import {
  GraduationCap,
  Search,
  MapPin,
  Calendar,
  Filter,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  RotateCcw,
  Plus,
  Check
} from 'lucide-react';

export const UniversitiesPage: React.FC = () => {
  const {
    navigateTo,
    setActiveUniversityModal,
    toggleUniversityComparison,
    isUniversityCompared,
    prefilledEnquiry
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string>(prefilledEnquiry.destination || 'All');
  const [selectedSubject, setSelectedSubject] = useState<string>(prefilledEnquiry.subject || 'All');
  const [selectedLevel, setSelectedLevel] = useState<string>(prefilledEnquiry.level || 'All');
  const [onlyScholarships, setOnlyScholarships] = useState<boolean>(false);

  const countries = [
    'All',
    'United Kingdom',
    'Australia',
    'Canada',
    'Sweden',
    'Finland',
    'Malta',
    'United Arab Emirates'
  ];
  const subjects = [
    'All',
    'Computing & IT',
    'Business & Management',
    'Engineering',
    'Health & Applied Science',
    'Hospitality & Tourism',
    'Law & Legal Studies'
  ];
  const levels = ['All', 'Foundation', 'Diploma', 'Bachelor’s', 'Postgraduate'];

  const filteredUniversities = useMemo(() => {
    return UNIVERSITIES.filter(uni => {
      const matchesSearch =
        searchQuery === '' ||
        uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uni.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uni.country.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCountry =
        selectedCountry === 'All' ||
        uni.country.toLowerCase() === selectedCountry.toLowerCase();

      const matchesSubject =
        selectedSubject === 'All' ||
        uni.popularSubjects.some(s => s.toLowerCase().includes(selectedSubject.toLowerCase()));

      const matchesLevel =
        selectedLevel === 'All' ||
        uni.level.some(lvl => lvl.toLowerCase().includes(selectedLevel.toLowerCase()));

      const matchesScholarship = !onlyScholarships || uni.scholarshipAvailable;

      return matchesSearch && matchesCountry && matchesSubject && matchesLevel && matchesScholarship;
    });
  }, [searchQuery, selectedCountry, selectedSubject, selectedLevel, onlyScholarships]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCountry('All');
    setSelectedSubject('All');
    setSelectedLevel('All');
    setOnlyScholarships(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8 lg:py-12 space-y-6 sm:space-y-10">
      {/* Page Header */}
      <div className="space-y-2 sm:space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-[#00239C] uppercase tracking-wider">
          <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00239C]" />
          <span>INSTITUTIONAL PARTNERSHIPS</span>
        </div>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-display text-slate-900 tracking-tight">
          University Finder
        </h1>
        <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal">
          Explore recognized global universities with dedicated transfer and direct admission pathways for BCAS graduates. Filter by destination, entry level, and scholarship availability.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-3.5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-xs space-y-3 sm:space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search universities by name, city, or destination..."
            className="w-full pl-10 pr-4 py-2 sm:py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00239C] text-slate-900"
          />
        </div>

        {/* Dropdown Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 text-xs">
          <div>
            <label className="font-semibold text-slate-700 block mb-1 text-[11px] sm:text-xs">Country</label>
            <select
              value={selectedCountry}
              onChange={e => setSelectedCountry(e.target.value)}
              className="w-full p-2 sm:p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium focus:outline-none focus:ring-1 focus:ring-[#00239C] text-xs"
            >
              {countries.map(c => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-semibold text-slate-700 block mb-1 text-[11px] sm:text-xs">Subject Area</label>
            <select
              value={selectedSubject}
              onChange={e => setSelectedSubject(e.target.value)}
              className="w-full p-2 sm:p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium focus:outline-none focus:ring-1 focus:ring-[#00239C] text-xs"
            >
              {subjects.map(s => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-semibold text-slate-700 block mb-1 text-[11px] sm:text-xs">Study Level</label>
            <select
              value={selectedLevel}
              onChange={e => setSelectedLevel(e.target.value)}
              className="w-full p-2 sm:p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium focus:outline-none focus:ring-1 focus:ring-[#00239C] text-xs"
            >
              {levels.map(l => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col justify-end">
            <label className="flex items-center gap-2 p-2 sm:p-2.5 bg-slate-50 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-100 transition-colors">
              <input
                type="checkbox"
                checked={onlyScholarships}
                onChange={e => setOnlyScholarships(e.target.checked)}
                className="w-4 h-4 text-[#00239C] rounded border-slate-300"
              />
              <span className="font-semibold text-slate-800 text-xs">Scholarships Available</span>
            </label>
          </div>
        </div>

        {/* Counter & Reset */}
        <div className="pt-2 flex items-center justify-between text-[11px] sm:text-xs text-slate-500 border-t border-slate-100">
          <span>
            Showing <strong className="text-slate-900">{filteredUniversities.length}</strong>{' '}
            universit{filteredUniversities.length === 1 ? 'y' : 'ies'} matching your criteria
          </span>
          {(searchQuery || selectedCountry !== 'All' || selectedSubject !== 'All' || selectedLevel !== 'All' || onlyScholarships) && (
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1 text-[#00239C] hover:underline font-semibold cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset filters</span>
            </button>
          )}
        </div>
      </div>

      {/* University Grid */}
      {filteredUniversities.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredUniversities.map(uni => {
            const isCompared = isUniversityCompared(uni.id);
            return (
              <div
                key={uni.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-36 sm:h-48 bg-slate-900 overflow-hidden">
                    <img
                      src={uni.image}
                      alt={uni.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={e => {
                        (e.currentTarget as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                    <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-white/95 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg text-[11px] sm:text-xs font-semibold text-slate-900 flex items-center gap-1 shadow-xs">
                      <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#BA141A]" />
                      <span>{uni.city}, {uni.country}</span>
                    </div>

                    {uni.scholarshipAvailable && (
                      <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 bg-emerald-600 text-white px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-bold tracking-wide">
                        SCHOLARSHIP
                      </div>
                    )}

                    <div className="absolute bottom-2.5 left-3 right-3 sm:bottom-3 sm:left-4 sm:right-4 text-white">
                      <span className="text-[10px] sm:text-[11px] text-blue-200 font-mono block">
                        Est. {uni.established} · {uni.type}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold font-display text-white leading-tight">
                        {uni.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-5 space-y-2.5 sm:space-y-3.5">
                    {/* Quick Specs */}
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2 bg-slate-50 rounded-lg">
                        <span className="text-slate-500 block text-[11px]">Tuition Range</span>
                        <span className="font-semibold text-slate-900 font-mono text-[12px]">
                          {uni.tuitionRange}
                        </span>
                      </div>
                      <div className="p-2 bg-slate-50 rounded-lg">
                        <span className="text-slate-500 block text-[11px]">Min. English</span>
                        <span className="font-semibold text-slate-900 font-mono text-[12px]">
                          {uni.minIELTS}
                        </span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {uni.highlights.slice(0, 2).map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00239C] shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Popular Subjects Tags */}
                    <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1">
                      {uni.popularSubjects.slice(0, 3).map(sub => (
                        <span
                          key={sub}
                          className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[11px] rounded font-medium"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="p-5 pt-3 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => toggleUniversityComparison(uni)}
                      className={`px-2.5 py-1.5 rounded-lg border text-[11px] font-semibold transition-colors cursor-pointer flex items-center gap-1 ${
                        isCompared
                          ? 'bg-blue-100 text-[#00239C] border-blue-300'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {isCompared ? <Check className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                      <span>{isCompared ? 'Comparing' : 'Compare'}</span>
                    </button>
                    <button
                      onClick={() => setActiveUniversityModal(uni)}
                      className="px-2.5 py-1.5 text-slate-700 hover:text-[#00239C] font-semibold cursor-pointer"
                    >
                      Details ↗
                    </button>
                  </div>

                  <button
                    onClick={() =>
                      navigateTo('apply', {
                        university: uni.name,
                        country: uni.country
                      })
                    }
                    className="px-3.5 py-1.5 bg-[#00239C] hover:bg-[#001869] text-white font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 space-y-4">
          <p className="text-base font-semibold text-slate-800">
            No universities found matching your active filter criteria.
          </p>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try resetting your search query or selecting &quot;All&quot; for destination and study level.
          </p>
          <button
            onClick={handleResetFilters}
            className="px-4 py-2 bg-[#00239C] text-white text-xs font-semibold rounded-xl cursor-pointer"
          >
            Show All Universities
          </button>
        </div>
      )}

      {/* Advisory Banner */}
      <div className="p-6 bg-blue-50/70 border border-blue-200/80 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-sm font-bold text-slate-900">
            Looking for a specific university not listed above?
          </h4>
          <p className="text-xs text-slate-600">
            BCAS maintains partnerships with numerous universities across the United Kingdom, Australia, Canada, Sweden, Finland, Malta, and the United Arab Emirates and many more.
          </p>
        </div>
        <button
          onClick={() => navigateTo('apply')}
          className="px-5 py-2.5 bg-[#00239C] hover:bg-[#001869] text-white text-xs font-bold rounded-xl whitespace-nowrap shadow-xs cursor-pointer"
        >
          Ask an Adviser ↗
        </button>
      </div>
    </div>
  );
};
