import React, { useState } from 'react';
import { 
  BookOpen, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Check, 
  Building2, 
  Calendar, 
  Clock, 
  FileCheck, 
  GraduationCap, 
  HelpCircle,
  ShieldCheck,
  UserCheck
} from 'lucide-react';
import ieltsClassImg from '../../assets/images/ielts_prep_class_1790916033471.jpg';

interface IeltsSectionProps {
  onBookConsultation: () => void;
}

export const IeltsSection: React.FC<IeltsSectionProps> = ({ onBookConsultation }) => {
  // Mobile Tab State
  const [mobileTab, setMobileTab] = useState<'waiver' | 'academy' | 'bands'>('waiver');

  // Interactive Waiver Checker State
  const [academicBackground, setAcademicBackground] = useState<'a-levels' | 'btec' | 'degree' | 'o-levels'>('btec');
  const [englishGrade, setEnglishGrade] = useState<'A' | 'B' | 'C' | 'S' | 'None'>('B');
  const [targetCountry, setTargetCountry] = useState<'USA' | 'Canada' | 'UK' | 'Australia' | 'Ireland' | 'Germany' | 'Malaysia' | 'Singapore' | 'UAE' | 'Malta' | 'Spain'>('UK');

  // Interactive Target Band Tab
  const [selectedLevel, setSelectedLevel] = useState<'ug' | 'pg' | 'health'>('pg');

  // Calculate waiver likelihood
  const isWaiverLikely = 
    (['UK', 'Germany', 'Malta', 'Spain', 'UAE', 'Malaysia'].includes(targetCountry) && (academicBackground === 'btec' || academicBackground === 'degree' || (academicBackground === 'a-levels' && ['A', 'B', 'C'].includes(englishGrade)))) ||
    (['Australia', 'Ireland', 'Singapore', 'Canada'].includes(targetCountry) && (academicBackground === 'btec' || academicBackground === 'degree'));

  const bandRequirements = {
    ug: {
      overall: '6.0',
      minEach: '5.5',
      title: 'Undergraduate Degrees (Bachelor’s)',
      desc: 'Most UK, Australian, and Canadian universities require an overall band 6.0 with no sub-score below 5.5.'
    },
    pg: {
      overall: '6.5',
      minEach: '6.0',
      title: 'Postgraduate & Master’s Degrees',
      desc: 'Standard requirement for taught Master of Science (MSc), MA, and MBA programs.'
    },
    health: {
      overall: '7.0',
      minEach: '6.5 or 7.0',
      title: 'Nursing, Medicine & Health Sciences',
      desc: 'Clinical programs and professional registration boards enforce higher communication thresholds.'
    }
  };

  const activeBand = bandRequirements[selectedLevel];

  return (
    <section id="ielts" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-2 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#103578] text-[10px] sm:text-xs font-semibold uppercase tracking-[0.08em] leading-none brand-label mb-2">
            <BookOpen className="w-3.5 h-3.5 text-[#C41822]" />
            <span>Language Proficiency & Waiver Guidance</span>
          </div>
          <h2 className="text-xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-[-0.01em] leading-[1.05] brand-headline [text-wrap:balance]">
            IELTS Academy & English Waiver Desk
          </h2>
          <p className="mt-1 text-slate-600 text-xs sm:text-base leading-[1.4] tracking-normal brand-body line-clamp-1 sm:line-clamp-none">
            Official British Council & IDP coaching, or check for <strong>100% IELTS Waivers</strong> based on prior studies.
          </p>

          {/* Mobile Tab Switcher */}
          <div className="flex lg:hidden items-center justify-center gap-1 bg-slate-200/80 p-1 rounded-xl mt-2 max-w-md mx-auto">
            <button
              type="button"
              onClick={() => setMobileTab('waiver')}
              className={`flex-1 py-1 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                mobileTab === 'waiver' ? 'bg-[#103578] text-white shadow-xs' : 'text-slate-700'
              }`}
            >
              Waiver Checker
            </button>
            <button
              type="button"
              onClick={() => setMobileTab('academy')}
              className={`flex-1 py-1 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                mobileTab === 'academy' ? 'bg-[#103578] text-white shadow-xs' : 'text-slate-700'
              }`}
            >
              Classroom Prep
            </button>
            <button
              type="button"
              onClick={() => setMobileTab('bands')}
              className={`flex-1 py-1 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                mobileTab === 'bands' ? 'bg-[#103578] text-white shadow-xs' : 'text-slate-700'
              }`}
            >
              Band Scores
            </button>
          </div>
        </div>

        {/* Top 2 Columns on Desktop, Tabbed on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-8 items-stretch mb-2 sm:mb-8">
          {/* Left Column: Interactive IELTS Waiver Checker */}
          <div className={`lg:col-span-6 bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-3.5 sm:p-8 shadow-xs flex flex-col justify-between ${
            mobileTab === 'waiver' ? 'block' : 'hidden lg:flex'
          }`}>
            <div className="space-y-2 sm:space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-[#C41822]" />
                  <h3 className="text-sm sm:text-lg font-bold text-slate-900">Check Your IELTS Waiver</h3>
                </div>
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-md">
                  Instant Test
                </span>
              </div>

              {/* Form Controls */}
              <div className="space-y-2 sm:space-y-4">
                <div>
                  <label className="block text-[10px] sm:text-xs font-bold text-slate-700 mb-1">
                    1. Current Academic Background
                  </label>
                  <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                    {[
                      { id: 'btec', label: 'Pearson BTEC / HND' },
                      { id: 'degree', label: 'English-Medium Degree' },
                      { id: 'a-levels', label: 'GCE A/Levels' },
                      { id: 'o-levels', label: 'GCE O/Levels Only' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setAcademicBackground(item.id as any)}
                        className={`p-1.5 sm:p-2.5 rounded-xl text-[11px] sm:text-xs font-bold text-left border transition-all cursor-pointer truncate ${
                          academicBackground === item.id
                            ? 'border-[#103578] bg-[#103578]/5 text-[#103578] ring-1 ring-[#103578]'
                            : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold text-slate-700 mb-1">
                      2. English Grade
                    </label>
                    <select
                      value={englishGrade}
                      onChange={(e) => setEnglishGrade(e.target.value as any)}
                      className="w-full px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs font-semibold rounded-xl border border-slate-200 bg-slate-50 focus:bg-white"
                    >
                      <option value="A">Grade A (Distinction)</option>
                      <option value="B">Grade B (Very Good)</option>
                      <option value="C">Grade C (Credit)</option>
                      <option value="S">Grade S (Simple Pass)</option>
                      <option value="None">None / Non-English</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold text-slate-700 mb-1">
                      3. Target Country
                    </label>
                    <select
                      value={targetCountry}
                      onChange={(e) => setTargetCountry(e.target.value as any)}
                      className="w-full px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs font-semibold rounded-xl border border-slate-200 bg-slate-50 focus:bg-white"
                    >
                      <option value="USA">USA</option>
                      <option value="Canada">Canada</option>
                      <option value="UK">United Kingdom (UK)</option>
                      <option value="Australia">Australia</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Germany">Germany</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Singapore">Singapore</option>
                      <option value="UAE">UAE (Dubai)</option>
                      <option value="Malta">Malta</option>
                      <option value="Spain">Spain</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Dynamic Eligibility Result Box */}
              <div className={`p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border transition-all ${
                isWaiverLikely
                  ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                  : 'bg-blue-50/80 border-blue-200 text-blue-950'
              }`}>
                <div className="flex items-start gap-2">
                  {isWaiverLikely ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <HelpCircle className="w-4 h-4 text-[#103578] shrink-0 mt-0.5" />
                  )}
                  <div className="space-y-0.5">
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider block">
                      {isWaiverLikely ? 'High Waiver Probability' : 'Standard Testing Recommended'}
                    </span>
                    <p className="text-[11px] sm:text-xs leading-relaxed line-clamp-2">
                      {isWaiverLikely
                        ? `Based on your academic profile, universities regularly grant 100% English Language Waivers.`
                        : `For your profile in ${targetCountry}, an IELTS Academic score of 6.0 – 6.5 ensures visa compliance.`}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 sm:pt-4 mt-2 sm:mt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[10px] sm:text-xs text-slate-500 font-medium">Free Official Profile Evaluation</span>
              <button
                onClick={onBookConsultation}
                className="py-1.5 sm:py-2 px-3 sm:px-3.5 bg-[#103578] hover:bg-[#0a234e] text-white text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer"
              >
                Confirm My Waiver
              </button>
            </div>
          </div>

          {/* Right Column: IELTS Academy Classroom & Training Structure */}
          <div className={`lg:col-span-6 bg-white rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden shadow-xs flex flex-col justify-between ${
            mobileTab === 'academy' ? 'block' : 'hidden lg:flex'
          }`}>
            <div className="relative h-28 sm:h-52 w-full overflow-hidden bg-slate-900">
              <img
                src={ieltsClassImg}
                alt="BCAS IELTS Academy Classroom Training"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-2 left-3 right-3 text-white">
                <span className="text-[10px] font-bold text-rose-300 uppercase tracking-wider block">
                  BCAS Language Training Center
                </span>
                <h3 className="text-sm sm:text-xl font-extrabold">Official IELTS & PTE Coaching</h3>
              </div>
            </div>

            <div className="p-3 sm:p-8 space-y-2 sm:space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-1.5 sm:space-y-3 text-[11px] sm:text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <UserCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Certified Master Trainers:</strong> Courses conducted by British Council & IDP accredited senior faculty.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Free Diagnostic Assessment:</strong> Initial mock evaluation across all 4 components.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Flexible Batches:</strong> Weekend, weekday evening, and online batches.</span>
                </div>
              </div>

              <div className="pt-2 sm:pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <div className="text-[10px] sm:text-xs text-slate-500">
                  <span>Next Batch: </span>
                  <strong className="text-slate-800">This Weekend</strong>
                </div>

                <button
                  onClick={onBookConsultation}
                  className="py-1.5 sm:py-2.5 px-3 sm:px-4 bg-[#C41822] hover:bg-[#a3141a] text-white text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer"
                >
                  Book Free Mock Test
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Band Scores Tab content */}
          <div className={`lg:hidden col-span-12 bg-white rounded-2xl border border-slate-200 p-4 shadow-xs space-y-3 ${
            mobileTab === 'bands' ? 'block' : 'hidden'
          }`}>
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h4 className="text-sm font-bold text-slate-900">Target Band Requirements</h4>
              <div className="flex gap-1">
                {(['ug', 'pg', 'health'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedLevel(t)}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      selectedLevel === t ? 'bg-[#103578] text-white' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {t.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200/80">
              <div className="w-12 h-12 rounded-xl bg-[#103578] text-white flex flex-col items-center justify-center shrink-0">
                <span className="text-[8px] uppercase font-bold text-rose-300">Target</span>
                <span className="text-lg font-black">{activeBand.overall}</span>
              </div>
              <div className="text-xs">
                <span className="font-bold text-slate-900 block">{activeBand.title}</span>
                <span className="text-slate-500 text-[11px]">Min Sub-Score: {activeBand.minEach}</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">{activeBand.desc}</p>
          </div>
        </div>

        {/* Desktop Target Band Guide Strip */}
        <div className="hidden lg:block bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
            <div>
              <span className="text-xs font-bold text-[#103578] uppercase tracking-wider">Score Benchmark Guide</span>
              <h4 className="text-lg font-bold text-slate-900 mt-0.5">What IELTS Band Do You Need?</h4>
            </div>

            <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
              {[
                { id: 'ug', label: 'Undergraduate' },
                { id: 'pg', label: 'Postgraduate / MBA' },
                { id: 'health', label: 'Nursing & Health' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedLevel(tab.id as any)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    selectedLevel === tab.id
                      ? 'bg-white text-[#103578] shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 items-center">
            <div className="md:col-span-4 flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
              <div className="w-16 h-16 rounded-2xl bg-[#103578] text-white flex flex-col items-center justify-center shrink-0 shadow-sm">
                <span className="text-[10px] uppercase font-bold text-rose-300">Target</span>
                <span className="text-2xl font-black">{activeBand.overall}</span>
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Minimum Sub-Score</span>
                <span className="text-base font-bold text-slate-900">{activeBand.minEach} each component</span>
                <span className="text-[11px] text-slate-500 block mt-0.5">Listening, Reading, Writing, Speaking</span>
              </div>
            </div>

            <div className="md:col-span-8 text-xs sm:text-sm text-slate-600 space-y-2">
              <h5 className="font-bold text-slate-900 text-sm">{activeBand.title}</h5>
              <p className="leading-relaxed">{activeBand.desc}</p>
              <div className="flex flex-wrap gap-4 pt-1 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> PTE Academic Equivalent: 58 – 65
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> Duolingo English Test: 110 – 125
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> TOEFL iBT Equivalent: 80 – 90
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
