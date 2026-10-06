import React, { useState } from 'react';
import { Award, Calendar, CheckCircle2, Globe, Sparkles, Search, HelpCircle, ArrowRight } from 'lucide-react';
import { SCHOLARSHIPS_DATA } from '../data/mockData';
import { DestinationCountry } from '../types';

interface ScholarshipsViewProps {
  onApplyScholarship: (scholarshipTitle: string) => void;
  onBookConsultation: () => void;
  onNavigateHome?: () => void;
}

export const ScholarshipsView: React.FC<ScholarshipsViewProps> = ({
  onApplyScholarship,
  onBookConsultation,
  onNavigateHome
}) => {
  const [selectedDestination, setSelectedDestination] = useState<DestinationCountry | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

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

  const filteredScholarships = SCHOLARSHIPS_DATA.filter((s) => {
    if (selectedDestination !== 'All' && s.country !== selectedDestination) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const inTitle = s.awardTitle.toLowerCase().includes(q);
      const inUni = s.universityName.toLowerCase().includes(q);
      const inEligibility = s.eligibilityNote.toLowerCase().includes(q);
      if (!inTitle && !inUni && !inEligibility) return false;
    }
    return true;
  });

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
            <span className="text-[#103578] font-bold">Scholarships & Grants</span>
          </div>

          <button
            onClick={onBookConsultation}
            className="px-3.5 py-1.5 rounded-lg bg-[#C41822] hover:bg-[#a3141a] text-white text-xs font-bold transition-all shadow-2xs cursor-pointer flex items-center gap-1.5"
          >
            <span>Scholarship Evaluation</span>
          </button>
        </div>
      </div>

      {/* Header */}
      <div className="bg-[#103578] text-white py-14 border-b border-blue-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-rose-300 text-xs font-semibold uppercase tracking-[0.08em] leading-none brand-label mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Financial Aid & Grants</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.02em] leading-[0.98] brand-hero [text-wrap:balance]">
            International University Scholarships
          </h1>
          <p className="mt-3 text-slate-200 text-sm sm:text-base max-w-2xl leading-[1.4] tracking-normal brand-body">
            Explore partial and merit-based university scholarships, country bursaries, and alumni discount schemes available to Sri Lankan and international students.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Search & Tabs */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm mb-10 space-y-6">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by scholarship title, university, or eligibility..."
              className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#103578] focus:bg-white"
            />
          </div>

          <div className="flex flex-wrap gap-2 items-center">
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

        {/* Scholarships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredScholarships.map((s) => (
            <div
              key={s.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:shadow-lg hover:border-rose-200 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-500">
                    <Globe className="w-3.5 h-3.5 text-[#103578]" />
                    {s.country}
                  </span>
                  <span className="text-[11px] bg-slate-100 text-slate-700 font-semibold px-2 py-0.5 rounded">
                    {s.studyLevel}
                  </span>
                </div>

                <div className="mb-4">
                  <div className="text-2xl font-black text-[#C41822] tracking-tight">
                    {s.awardValue}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mt-1 group-hover:text-[#103578] transition-colors">
                    {s.awardTitle}
                  </h3>
                  <div className="text-xs font-semibold text-slate-600 mt-1">
                    {s.universityName}
                  </div>
                </div>

                <div className="space-y-2 py-3 border-y border-slate-100 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{s.eligibilityNote}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-[#103578]" />
                    <span>Application Deadline: <strong>{s.deadline}</strong></span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium">{s.applicationMode}</span>
                <button
                  onClick={() => onApplyScholarship(s.awardTitle)}
                  className="py-2 px-3.5 rounded-xl bg-[#103578] group-hover:bg-[#C41822] text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Sparkles className="w-3 h-3 text-rose-200" />
                  <span>Enquire Award</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Callout */}
        <div className="mt-14 bg-gradient-to-r from-blue-50 to-rose-50 border border-blue-200/80 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#103578]" />
              Need help applying for scholarships?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              Our placement counselors assist you in preparing compelling Statement of Purpose essays, gathering referee recommendations, and meeting critical scholarship deadlines.
            </p>
          </div>

          <button
            onClick={onBookConsultation}
            className="shrink-0 py-3 px-6 rounded-xl bg-[#103578] hover:bg-[#0a234e] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Book Scholarship Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
