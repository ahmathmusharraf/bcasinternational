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
  Building2, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { COUNTRY_WORK_PR_DATA } from '../../data/workPrData';
import { DestinationCountry } from '../../types';
import { DestinationLogo } from '../common/DestinationLogos';

interface WorkAndPrSectionProps {
  onBookConsultation: (country?: DestinationCountry) => void;
  onExploreFullGuide?: () => void;
}

export const WorkAndPrSection: React.FC<WorkAndPrSectionProps> = ({
  onBookConsultation,
  onExploreFullGuide
}) => {
  const [selectedCountryIndex, setSelectedCountryIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'psw' | 'pr' | 'jobs'>('overview');

  const activeData = COUNTRY_WORK_PR_DATA[selectedCountryIndex] || COUNTRY_WORK_PR_DATA[0];

  return (
    <section 
      id="work-pr" 
      className="py-16 md:py-24 bg-slate-50 border-t border-slate-200 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header with Creative Headline Heading */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#103578] border border-blue-100 text-xs font-semibold uppercase tracking-[0.08em] leading-none brand-label mb-2.5 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#C41822]"></span>
            <span>WORK & PR</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600 font-semibold flex items-center gap-1">
              <Briefcase className="w-3.5 h-3.5 text-[#C41822]" />
              Employment & Residency Pathways
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-[-0.01em] leading-[1.05] brand-headline [text-wrap:balance]">
            Country Work Opportunities & Pathway to PR
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base leading-[1.4] tracking-normal brand-body">
            Part-time wages while studying, post-study work visas (PSW/PGWP/OPT), and clear residency milestones across 11 countries.
          </p>

          {/* Destination Selector Horizontal Carousel */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 mt-2 max-w-4xl mx-auto">
            {COUNTRY_WORK_PR_DATA.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedCountryIndex(idx)}
                className={`shrink-0 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl text-[11px] sm:text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 ${
                  selectedCountryIndex === idx
                    ? 'bg-[#103578] text-white shadow-sm ring-2 ring-[#103578]/20'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span>{item.flagEmoji}</span>
                <span>{item.country}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Showcase Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-3.5 sm:p-8 shadow-xs flex-1 flex flex-col justify-between max-h-[440px] md:max-h-none overflow-y-auto no-scrollbar mb-2 sm:mb-6">
          {/* Top Country Banner + Sub-Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 sm:pb-4 border-b border-slate-100 gap-2 shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl">{activeData.flagEmoji}</span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base sm:text-2xl font-black text-slate-900 leading-tight">
                    {activeData.countryName}
                  </h3>
                  <DestinationLogo country={activeData.country} variant="compact-pill" />
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {activeData.prPathway.difficultyRating}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 line-clamp-1">
                  {activeData.heroHeadline}
                </p>
              </div>
            </div>

            {/* Sub Tabs */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl self-start sm:self-auto shrink-0">
              <button
                type="button"
                onClick={() => setActiveTab('overview')}
                className={`py-1 px-2.5 rounded-lg text-[10px] sm:text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'overview' ? 'bg-[#103578] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Work Rights
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('psw')}
                className={`py-1 px-2.5 rounded-lg text-[10px] sm:text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'psw' ? 'bg-[#103578] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Post-Study Visa
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('pr')}
                className={`py-1 px-2.5 rounded-lg text-[10px] sm:text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'pr' ? 'bg-[#103578] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                PR Roadmap
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('jobs')}
                className={`py-1 px-2.5 rounded-lg text-[10px] sm:text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'jobs' ? 'bg-[#103578] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                In-Demand
              </button>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 my-2 sm:my-4 shrink-0">
            <div className="p-2 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-slate-500 font-bold">
                <Clock className="w-3.5 h-3.5 text-[#103578]" />
                <span>Part-Time Rights</span>
              </div>
              <div className="text-xs sm:text-sm font-extrabold text-slate-900 mt-0.5">
                {activeData.partTimeWork.termHours}
              </div>
              <div className="text-[10px] text-slate-500 truncate">
                {activeData.partTimeWork.minimumWageHourly}
              </div>
            </div>

            <div className="p-2 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-slate-500 font-bold">
                <Briefcase className="w-3.5 h-3.5 text-[#C41822]" />
                <span>Post-Study Work</span>
              </div>
              <div className="text-xs sm:text-sm font-extrabold text-slate-900 mt-0.5">
                {activeData.postStudyWork.duration}
              </div>
              <div className="text-[10px] text-slate-500 truncate">
                {activeData.postStudyWork.visaName}
              </div>
            </div>

            <div className="p-2 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-slate-500 font-bold">
                <Award className="w-3.5 h-3.5 text-emerald-600" />
                <span>PR Timeline</span>
              </div>
              <div className="text-xs sm:text-sm font-extrabold text-slate-900 mt-0.5">
                {activeData.prPathway.processingTimeline.split(' ')[0]} {activeData.prPathway.processingTimeline.split(' ')[1] || 'Timeline'}
              </div>
              <div className="text-[10px] text-slate-500 truncate">
                {activeData.prPathway.prSchemeName.split('&')[0]}
              </div>
            </div>

            <div className="p-2 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-slate-500 font-bold">
                <Coins className="w-3.5 h-3.5 text-amber-500" />
                <span>Graduate Salary</span>
              </div>
              <div className="text-xs sm:text-sm font-extrabold text-slate-900 mt-0.5 truncate">
                {activeData.postStudyWork.averageGraduateSalary}
              </div>
              <div className="text-[10px] text-slate-500 truncate">
                Est. Starting Package
              </div>
            </div>
          </div>

          {/* Dynamic Tab Content Area */}
          <div className="flex-1 overflow-y-auto no-scrollbar py-1">
            {activeTab === 'overview' && (
              <div className="space-y-2 sm:space-y-3">
                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <strong>Student Work Regulations:</strong> {activeData.partTimeWork.regulationsNote} During scheduled breaks and vacations, work rights expand to <strong>{activeData.partTimeWork.vacationHours}</strong>.
                </div>

                <div className="p-2.5 sm:p-3 rounded-xl bg-blue-50/70 border border-blue-100 flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#103578] shrink-0 mt-0.5" />
                  <div className="text-[11px] sm:text-xs text-slate-700">
                    <strong>Spousal & Dependent Work Rights:</strong> {activeData.spousalRights}
                  </div>
                </div>

                <div className="pt-1">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Typical Part-Time Student Roles in {activeData.countryName}:
                  </span>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5">
                    {activeData.partTimeWork.popularStudentJobs.map((job) => (
                      <span
                        key={job}
                        className="text-[10px] sm:text-xs bg-slate-100 text-slate-800 px-2.5 py-0.5 rounded-lg font-medium"
                      >
                        ✓ {job}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'psw' && (
              <div className="space-y-2 sm:space-y-3">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-[#C41822]" />
                    <span>{activeData.postStudyWork.visaName}</span>
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-600 mt-1 leading-relaxed">
                    <strong>Permitted Work:</strong> {activeData.postStudyWork.workRights}
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-600 mt-1 leading-relaxed">
                    <strong>Threshold Requirement:</strong> {activeData.postStudyWork.qualificationThreshold}
                  </p>
                  {activeData.postStudyWork.stemExtension && (
                    <div className="mt-2 text-[10px] sm:text-xs text-[#103578] bg-blue-50 p-2 rounded-lg font-semibold">
                      ★ {activeData.postStudyWork.stemExtension}
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'pr' && (
              <div className="space-y-2 sm:space-y-3">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-emerald-600" />
                    <span>{activeData.prPathway.prSchemeName}</span>
                  </h4>
                  <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5">
                    Typical Processing: <strong>{activeData.prPathway.processingTimeline}</strong>
                  </p>
                </div>

                <div className="space-y-1 sm:space-y-1.5">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Core Eligibility Milestones:
                  </span>
                  {activeData.prPathway.eligibilityCriteria.map((crit, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-1.5 text-[11px] sm:text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{crit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'jobs' && (
              <div className="space-y-2 sm:space-y-3">
                <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  High-Priority In-Demand Occupations with Fast-Track Visas:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                  {activeData.prPathway.inDemandOccupations.map((occ, oIdx) => (
                    <div key={oIdx} className="p-2 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center gap-2">
                      <TrendingUp className="w-3.5 h-3.5 text-[#103578] shrink-0" />
                      <span className="text-[11px] sm:text-xs font-bold text-slate-800">{occ}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-1">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Permanent Settlement Advantages:
                  </span>
                  <div className="space-y-1">
                    {activeData.prPathway.settlementAdvantages.map((adv, aIdx) => (
                      <div key={aIdx} className="text-[10px] sm:text-xs text-slate-600 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span>{adv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Action Footer inside card */}
          <div className="pt-2 sm:pt-4 border-t border-slate-100 flex flex-row items-center justify-between gap-2 shrink-0">
            <div className="text-[10px] sm:text-xs text-slate-500 truncate">
              💡 {activeData.bcasSupportNote}
            </div>

            <button
              type="button"
              onClick={() => onBookConsultation(activeData.country)}
              className="shrink-0 py-1.5 px-3 sm:py-2.5 sm:px-4.5 rounded-xl bg-[#C41822] hover:bg-[#a3141a] text-white text-[11px] sm:text-xs font-bold shadow-md transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              <span>Assess PR Eligibility</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Global Summary Badge */}
        <div className="bg-slate-900 text-white rounded-xl sm:rounded-2xl p-2.5 sm:p-4 flex flex-row items-center justify-between gap-2 shrink-0">
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="text-[10px] sm:text-xs font-medium text-slate-200 truncate">
              All 11 destination countries verified under 2026/2027 Immigration Regulations.
            </span>
          </div>

          {onExploreFullGuide && (
            <button
              type="button"
              onClick={onExploreFullGuide}
              className="text-[10px] sm:text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 shrink-0 cursor-pointer"
            >
              <span>Full Comparison</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
