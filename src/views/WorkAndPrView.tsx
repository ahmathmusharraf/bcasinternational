import React, { useState } from 'react';
import { 
  Briefcase, 
  Compass, 
  Clock, 
  Award, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Coins, 
  Sparkles, 
  Search,
  Filter,
  Check,
  ChevronRight,
  Globe
} from 'lucide-react';
import { COUNTRY_WORK_PR_DATA } from '../data/workPrData';
import { DestinationCountry } from '../types';

interface WorkAndPrViewProps {
  onBookConsultation: (country?: DestinationCountry) => void;
  onNavigateHome: () => void;
}

export const WorkAndPrView: React.FC<WorkAndPrViewProps> = ({
  onBookConsultation,
  onNavigateHome
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Very Accessible' | 'High Opportunity' | 'Points-Competitive'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCountryId, setActiveCountryId] = useState<string>(COUNTRY_WORK_PR_DATA[0].id);

  const filteredData = COUNTRY_WORK_PR_DATA.filter((item) => {
    if (selectedFilter !== 'All' && item.prPathway.difficultyRating !== selectedFilter) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const inCountry = item.countryName.toLowerCase().includes(q);
      const inVisa = item.postStudyWork.visaName.toLowerCase().includes(q);
      const inPr = item.prPathway.prSchemeName.toLowerCase().includes(q);
      const inJobs = item.prPathway.inDemandOccupations.some(j => j.toLowerCase().includes(q));
      if (!inCountry && !inVisa && !inPr && !inJobs) return false;
    }
    return true;
  });

  const activeCountry = COUNTRY_WORK_PR_DATA.find(c => c.id === activeCountryId) || COUNTRY_WORK_PR_DATA[0];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-20 pb-20">
      {/* Top Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#103578] font-semibold flex items-center gap-1 cursor-pointer transition-colors"
            >
              <ArrowRight className="w-3.5 h-3.5 rotate-180" />
              <span>Home</span>
            </button>
            <span>/</span>
            <span className="text-[#103578] font-bold">Country Work Rights & PR Pathways</span>
          </div>

          <button
            onClick={() => onBookConsultation()}
            className="px-3.5 py-1.5 rounded-lg bg-[#C41822] hover:bg-[#a3141a] text-white text-xs font-bold transition-all shadow-2xs cursor-pointer flex items-center gap-1.5"
          >
            <span>Consultation</span>
          </button>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#103578] to-[#0a234e] text-white py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-rose-300 text-xs font-semibold uppercase tracking-[0.08em] leading-none brand-label">
            <Briefcase className="w-3.5 h-3.5 text-rose-400" />
            <span>2026/2027 Immigration & Employment Guide</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-[-0.02em] leading-[0.98] brand-hero [text-wrap:balance]">
            Country Work Opportunities & Pathway to PR
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-[1.4] tracking-normal brand-body">
            Compare legal part-time student work rights, post-study graduate visas (PSW, PGWP, OPT, 485), and permanent residency requirements across all 11 destinations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => onBookConsultation()}
              className="py-3 px-6 rounded-xl bg-[#C41822] hover:bg-[#a3141a] text-white text-xs sm:text-sm font-bold shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Book Profile Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onNavigateHome}
              className="py-3 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold transition-all cursor-pointer"
            >
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-2xl shadow-md border border-slate-200/80 p-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by country, visa type, or in-demand job..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#103578]"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar w-full md:w-auto">
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> PR Rating:
            </span>
            {(['All', 'Very Accessible', 'High Opportunity', 'Points-Competitive'] as const).map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setSelectedFilter(filter)}
                className={`shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedFilter === filter
                    ? 'bg-[#103578] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid: Country Side Navigation + Deep Country Dossier */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Country Selector Cards */}
          <div className="lg:col-span-4 space-y-2.5">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
              Select Destination Country ({filteredData.length})
            </h3>

            <div className="space-y-2 max-h-[720px] overflow-y-auto no-scrollbar pr-1">
              {filteredData.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveCountryId(item.id)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    activeCountryId === item.id
                      ? 'bg-white border-[#103578] shadow-md ring-2 ring-[#103578]/20'
                      : 'bg-white/80 border-slate-200 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.flagEmoji}</span>
                    <div>
                      <div className="font-bold text-sm text-slate-900">{item.countryName}</div>
                      <div className="text-[11px] text-slate-500 font-medium">
                        PSW: {item.postStudyWork.duration}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {item.prPathway.difficultyRating}
                    </span>
                    <ChevronRight className={`w-4 h-4 ${activeCountryId === item.id ? 'text-[#103578]' : 'text-slate-300'}`} />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Detailed Dossier for Active Country */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
              <div className="flex items-center gap-3.5">
                <span className="text-4xl">{activeCountry.flagEmoji}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      {activeCountry.countryName}
                    </h2>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      PR Rating: {activeCountry.prPathway.difficultyRating}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    {activeCountry.heroHeadline}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onBookConsultation(activeCountry.country)}
                className="shrink-0 py-2.5 px-5 rounded-xl bg-[#C41822] hover:bg-[#a3141a] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Assess {activeCountry.country}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Section 1: Part-Time Work While Studying */}
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#103578]" />
                <span>1. Part-Time Student Work Rights & Minimum Wage</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Term-Time Hours</span>
                  <div className="text-base font-extrabold text-slate-900 mt-0.5">
                    {activeCountry.partTimeWork.termHours}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">During active university semesters</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Vacation Hours</span>
                  <div className="text-base font-extrabold text-slate-900 mt-0.5">
                    {activeCountry.partTimeWork.vacationHours}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Scheduled semester breaks</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Average Minimum Wage</span>
                  <div className="text-base font-extrabold text-emerald-700 mt-0.5">
                    {activeCountry.partTimeWork.minimumWageHourly}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Monthly est: {activeCountry.partTimeWork.monthlyEarningsEst}</div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-blue-50/60 p-3.5 rounded-xl border border-blue-100">
                <strong>Legal Compliance:</strong> {activeCountry.partTimeWork.regulationsNote}
              </p>

              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  Popular Student Jobs in {activeCountry.countryName}:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeCountry.partTimeWork.popularStudentJobs.map((job) => (
                    <span
                      key={job}
                      className="px-3 py-1 rounded-lg text-xs bg-slate-100 text-slate-800 font-medium"
                    >
                      ✓ {job}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 2: Post-Study Work Permit (PSW / PGWP / OPT) */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#C41822]" />
                <span>2. Post-Study Work Visa (Graduate Employment Authorization)</span>
              </h3>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white space-y-3 shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs text-rose-300 font-bold uppercase tracking-wider">Official Visa Scheme</span>
                    <h4 className="text-xl font-bold">{activeCountry.postStudyWork.visaName}</h4>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 block font-medium">Standard Duration</span>
                    <span className="text-lg font-extrabold text-amber-400">{activeCountry.postStudyWork.duration}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <strong>Work Rights Granted:</strong> {activeCountry.postStudyWork.workRights}
                </p>

                <p className="text-xs text-slate-300">
                  <strong>Eligibility Threshold:</strong> {activeCountry.postStudyWork.qualificationThreshold}
                </p>

                {activeCountry.postStudyWork.stemExtension && (
                  <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 text-xs text-blue-200">
                    ★ <strong>Special Extension:</strong> {activeCountry.postStudyWork.stemExtension}
                  </div>
                )}

                <div className="pt-2 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-300">
                  <span>Estimated Graduate Starting Salary:</span>
                  <span className="text-sm font-bold text-white">{activeCountry.postStudyWork.averageGraduateSalary}</span>
                </div>
              </div>
            </div>

            {/* Section 3: Pathway to Permanent Residency (PR) */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <Compass className="w-5 h-5 text-emerald-600" />
                <span>3. Pathway to Permanent Residency (PR) & Settlement</span>
              </h3>

              <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-slate-900">{activeCountry.prPathway.prSchemeName}</h4>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                    {activeCountry.prPathway.processingTimeline}
                  </span>
                </div>

                <div className="space-y-1.5 pt-1">
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                    Core Eligibility Milestones:
                  </span>
                  {activeCountry.prPathway.eligibilityCriteria.map((crit, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{crit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  High-Priority In-Demand Occupations in {activeCountry.countryName}:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeCountry.prPathway.inDemandOccupations.map((occ, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2 text-xs font-bold text-slate-800">
                      <TrendingUp className="w-3.5 h-3.5 text-[#103578] shrink-0" />
                      <span>{occ}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  Permanent Settlement Advantages:
                </span>
                <div className="space-y-1.5">
                  {activeCountry.prPathway.settlementAdvantages.map((adv, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                      <span>{adv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Spousal Rights & BCAS Advisory Support */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-xs sm:text-sm text-slate-700">
                <strong>Spousal & Dependent Work Rights:</strong> {activeCountry.spousalRights}
              </div>
              <div className="text-xs text-[#103578] font-medium pt-1 border-t border-slate-200/80">
                📌 <strong>BCAS Advisory Note:</strong> {activeCountry.bcasSupportNote}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Need help calculating your points or selecting the right degree?
              </span>
              <button
                type="button"
                onClick={() => onBookConsultation(activeCountry.country)}
                className="w-full sm:w-auto py-3 px-6 rounded-xl bg-[#103578] hover:bg-[#0a234e] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Book 1-on-1 Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
