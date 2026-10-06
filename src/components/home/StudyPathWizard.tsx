import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  MapPin, 
  GraduationCap, 
  CheckCircle2, 
  RotateCcw,
  Briefcase,
  Laptop,
  Cpu,
  HeartPulse,
  Scale,
  Compass,
  Building,
  Calendar,
  DollarSign,
  ShieldCheck,
  Send,
  MessageCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { DestinationCountry, StudyLevel, University } from '../../types';
import { UNIVERSITIES_DATA } from '../../data/mockData';

interface StudyPathWizardProps {
  onSelectUniversity: (uni: University) => void;
  onBookConsultation: () => void;
}

export const StudyPathWizard: React.FC<StudyPathWizardProps> = ({
  onSelectUniversity,
  onBookConsultation
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedDestination, setSelectedDestination] = useState<DestinationCountry | 'Any'>('UK');
  const [selectedArea, setSelectedArea] = useState<string>('IT & Artificial Intelligence');
  const [selectedLevel, setSelectedLevel] = useState<StudyLevel | 'Any'>('Postgraduate');
  const [currentQualification, setCurrentQualification] = useState<string>('Completed Bachelor Degree');

  const goToStep = (step: number) => {
    setCurrentStep(step);
    if (step === 4) {
      try {
        confetti({
          particleCount: 75,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Safe fallback
      }
    }
  };

  const destinations: { id: DestinationCountry | 'Any'; name: string; flag: string; badge: string }[] = [
    { id: 'USA', name: 'United States of America', flag: '🇺🇸', badge: '3-Yr STEM OPT · Global Prestige' },
    { id: 'Canada', name: 'Canada', flag: '🇨🇦', badge: 'PGWP Up to 3 Yrs · Research Hubs' },
    { id: 'UK', name: 'United Kingdom', flag: '🇬🇧', badge: '1-Yr Masters · 2-Yr Graduate Route' },
    { id: 'Australia', name: 'Australia', flag: '🇦🇺', badge: '2-4 Yr 485 Visa · Tech & Health' },
    { id: 'Ireland', name: 'Ireland', flag: '🇮🇪', badge: 'Silicon Valley of EU · 2-Yr 1G Visa' },
    { id: 'Germany', name: 'Germany', flag: '🇩🇪', badge: 'Low Tuition · 18-Mo Job Seeker' },
    { id: 'Malaysia', name: 'Malaysia', flag: '🇲🇾', badge: 'UK/Aus Campuses · Affordable Fees' },
    { id: 'Singapore', name: 'Singapore', flag: '🇸🇬', badge: 'Global Financial Hub · Top Links' },
    { id: 'UAE', name: 'United Arab Emirates', flag: '🇦🇪', badge: 'Dubai Campuses · Fast-Track Visas' },
    { id: 'Malta', name: 'Malta', flag: '🇲🇹', badge: 'English EU Hub · 20h Work Rights' },
    { id: 'Spain', name: 'Spain', flag: '🇪🇸', badge: 'Top Business Schools · 30h Work' },
    { id: 'Any', name: 'Open to All Destinations', flag: '🌐', badge: 'Compare All Available Pathways' }
  ];

  const studyAreas = [
    {
      id: 'it',
      name: 'IT & Artificial Intelligence',
      icon: Laptop,
      desc: 'Software Engineering, Applied AI, Cybersecurity, Data Science, Cloud Architecture'
    },
    {
      id: 'business',
      name: 'Business, Management & Finance',
      icon: Briefcase,
      desc: 'International Business, FinTech, Accounting, Supply Chain, Strategic Marketing'
    },
    {
      id: 'engineering',
      name: 'Engineering & Technology',
      icon: Cpu,
      desc: 'Civil, Mechanical, Electrical, Robotics, Sustainable Energy'
    },
    {
      id: 'health',
      name: 'Healthcare & Biomedical Sciences',
      icon: HeartPulse,
      desc: 'Public Health, Nursing, Biomedical Science, Health Informatics, Clinical Research'
    },
    {
      id: 'law',
      name: 'Law, Governance & Policy',
      icon: Scale,
      desc: 'Commercial Law, International Human Rights, Corporate Compliance, Diplomacy'
    },
    {
      id: 'architecture',
      name: 'Built Environment & Design',
      icon: Compass,
      desc: 'Architecture, Quantity Surveying, Construction Project Management, Urban Planning'
    }
  ];

  const qualifications = [
    {
      title: 'Completed Bachelor’s Degree',
      sub: 'Recognized 3-Year or 4-Year Bachelor Degree in Sri Lanka or abroad',
      recommendedLevel: 'Postgraduate' as StudyLevel
    },
    {
      title: 'Pearson BTEC / HND / Advanced Diploma',
      sub: 'Eligible for Final Year Top-Up Degree or direct Pre-Master’s transitions',
      recommendedLevel: 'Undergraduate' as StudyLevel
    },
    {
      title: 'GCE A/Levels / Foundation Diploma',
      sub: 'Local or Cambridge/Edexcel A-Levels ready for direct Year 1 Bachelor’s entry',
      recommendedLevel: 'Undergraduate' as StudyLevel
    },
    {
      title: 'Working Professional with Industry Experience',
      sub: 'Managerial or executive background eligible for direct professional MBA admission',
      recommendedLevel: 'MBA' as StudyLevel
    }
  ];

  // Matched universities based on selections
  const matchedUniversities = UNIVERSITIES_DATA.filter((uni) => {
    if (selectedDestination !== 'Any' && uni.country !== selectedDestination) return false;
    if (selectedLevel !== 'Any' && !uni.studyLevels.includes(selectedLevel as StudyLevel)) return false;
    return true;
  }).slice(0, 4);

  const resetWizard = () => {
    setCurrentStep(1);
    setSelectedDestination('UK');
    setSelectedArea('IT & Artificial Intelligence');
    setSelectedLevel('Postgraduate');
  };

  return (
    <section id="pathway" className="py-16 md:py-24 bg-white border-y border-slate-200 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#103578] text-xs font-semibold uppercase tracking-[0.08em] leading-none brand-label mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C41822]" />
            <span>Structured Academic Advisory</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-[-0.01em] leading-[1.05] brand-headline [text-wrap:balance]">
            Find Your International Study Pathway
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base leading-[1.4] tracking-normal brand-body">
            Follow our verified 3-step evaluation to identify eligible universities, expected entry standards, and scholarship opportunities.
          </p>

          {/* Stepper Indicator */}
          <div className="grid grid-cols-4 gap-1.5 sm:gap-4 mt-2 sm:mt-6 max-w-2xl mx-auto">
            {[
              { num: 1, title: 'Destination' },
              { num: 2, title: 'Discipline' },
              { num: 3, title: 'Background' },
              { num: 4, title: 'Recommendations' }
            ].map((step) => {
              const isCurrent = currentStep === step.num;
              const isCompleted = currentStep > step.num;

              return (
                <button
                  key={step.num}
                  type="button"
                  onClick={() => {
                    if (step.num < currentStep) goToStep(step.num);
                  }}
                  className={`text-left pb-1 sm:pb-2 border-b-2 transition-all cursor-pointer ${
                    isCurrent
                      ? 'border-[#103578] text-[#103578]'
                      : isCompleted
                      ? 'border-emerald-600 text-slate-700'
                      : 'border-slate-200 text-slate-400'
                  }`}
                >
                  <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    {isCompleted ? (
                      <Check className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-emerald-600" />
                    ) : (
                      <span>Step 0{step.num}</span>
                    )}
                  </div>
                  <div className="text-[10px] sm:text-xs font-bold truncate mt-0.5">{step.title}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Wizard Container */}
        <div className="bg-slate-50 rounded-2xl sm:rounded-3xl border border-slate-200/90 p-3 sm:p-8 shadow-xs flex-1 flex flex-col justify-between">
          {/* STEP 1: DESTINATION */}
          {currentStep === 1 && (
            <div className="space-y-3 sm:space-y-6 flex-1 flex flex-col justify-between">
              <div className="flex flex-row items-center justify-between pb-2 border-b border-slate-200 gap-2">
                <div>
                  <span className="text-[10px] sm:text-xs font-bold text-[#103578] uppercase tracking-wider">Step 01 of 03</span>
                  <h3 className="text-base sm:text-2xl font-bold text-slate-900">Select Preferred Country</h3>
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  Selected: <strong className="text-slate-900">{selectedDestination}</strong>
                </div>
              </div>

              <div className="max-h-[35vh] sm:max-h-none overflow-y-auto no-scrollbar grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 pr-0.5">
                {destinations.map((d) => {
                  const isSelected = selectedDestination === d.id;

                  return (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => setSelectedDestination(d.id)}
                      className={`p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border text-left transition-all flex items-start justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-white border-[#103578] ring-2 ring-[#103578]/20 shadow-xs'
                          : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/80'
                      }`}
                    >
                      <div className="space-y-0.5 truncate">
                        <div className="flex items-center gap-1.5">
                          <span className="text-base sm:text-xl">{d.flag}</span>
                          <span className="text-xs sm:text-sm font-bold text-slate-900 truncate">{d.name}</span>
                        </div>
                        <p className="text-[10px] text-slate-500 truncate hidden sm:block">{d.badge}</p>
                      </div>

                      <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${
                        isSelected ? 'bg-[#103578] border-[#103578] text-white' : 'border-slate-300'
                      }`}>
                        {isSelected && <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-end pt-2 sm:pt-4 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => goToStep(2)}
                  className="py-2 sm:py-3 px-4 sm:px-6 rounded-xl bg-[#103578] hover:bg-[#0a234e] text-white text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shadow-xs cursor-pointer active:scale-98"
                >
                  <span>Proceed to Step 02: Discipline</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: FIELD OF STUDY */}
          {currentStep === 2 && (
            <div className="space-y-3 sm:space-y-6 flex-1 flex flex-col justify-between">
              <div className="flex flex-row items-center justify-between pb-2 border-b border-slate-200 gap-2">
                <div>
                  <span className="text-[10px] sm:text-xs font-bold text-[#103578] uppercase tracking-wider">Step 02 of 03</span>
                  <h3 className="text-base sm:text-2xl font-bold text-slate-900">Choose Academic Discipline</h3>
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  {selectedDestination}
                </div>
              </div>

              <div className="max-h-[35vh] sm:max-h-none overflow-y-auto no-scrollbar grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 pr-0.5">
                {studyAreas.map((area) => {
                  const Icon = area.icon;
                  const isSelected = selectedArea === area.name;

                  return (
                    <button
                      key={area.id}
                      type="button"
                      onClick={() => setSelectedArea(area.name)}
                      className={`p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-white border-[#103578] ring-2 ring-[#103578]/20 shadow-xs'
                          : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/80'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5 sm:mb-3">
                          <div className={`w-7 h-7 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center ${
                            isSelected ? 'bg-[#103578] text-white' : 'bg-slate-100 text-slate-700'
                          }`}>
                            <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </div>
                          {isSelected && (
                            <CheckCircle2 className="w-4 h-4 text-[#103578]" />
                          )}
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">{area.name}</h4>
                        <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1.5 leading-relaxed line-clamp-1 sm:line-clamp-2">{area.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-between items-center pt-2 sm:pt-4 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => goToStep(1)}
                  className="py-1.5 sm:py-2.5 px-3 sm:px-4 rounded-xl text-slate-600 hover:text-slate-900 text-xs sm:text-sm font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>

                <button
                  type="button"
                  onClick={() => goToStep(3)}
                  className="py-2 sm:py-3 px-4 sm:px-6 rounded-xl bg-[#103578] hover:bg-[#0a234e] text-white text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shadow-xs cursor-pointer active:scale-98"
                >
                  <span>Proceed to Step 03</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: ACADEMIC BACKGROUND */}
          {currentStep === 3 && (
            <div className="space-y-3 sm:space-y-6 flex-1 flex flex-col justify-between">
              <div className="flex flex-row items-center justify-between pb-2 border-b border-slate-200 gap-2">
                <div>
                  <span className="text-[10px] sm:text-xs font-bold text-[#103578] uppercase tracking-wider">Step 03 of 03</span>
                  <h3 className="text-base sm:text-2xl font-bold text-slate-900">Current Qualification</h3>
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  {selectedDestination}
                </div>
              </div>

              <div className="max-h-[35vh] sm:max-h-none overflow-y-auto no-scrollbar grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 pr-0.5">
                {qualifications.map((q, idx) => {
                  const isSelected = currentQualification === q.title;

                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setCurrentQualification(q.title);
                        setSelectedLevel(q.recommendedLevel);
                      }}
                      className={`p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border text-left transition-all flex items-start justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-white border-[#103578] ring-2 ring-[#103578]/20 shadow-xs'
                          : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/80'
                      }`}
                    >
                      <div className="space-y-0.5 truncate">
                        <span className="text-xs sm:text-sm font-bold text-slate-900 block truncate">{q.title}</span>
                        <p className="text-[10px] sm:text-xs text-slate-500 truncate">{q.sub}</p>
                        <div className="pt-0.5 text-[10px] sm:text-[11px] font-semibold text-[#103578]">
                          Target: {q.recommendedLevel}
                        </div>
                      </div>

                      <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${
                        isSelected ? 'bg-[#103578] border-[#103578] text-white' : 'border-slate-300'
                      }`}>
                        {isSelected && <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-between items-center pt-2 sm:pt-4 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => goToStep(2)}
                  className="py-1.5 sm:py-2.5 px-3 sm:px-4 rounded-xl text-slate-600 hover:text-slate-900 text-xs sm:text-sm font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>

                <button
                  type="button"
                  onClick={() => goToStep(4)}
                  className="py-2 sm:py-3 px-4 sm:px-6 rounded-xl bg-[#C41822] hover:bg-[#a3141a] text-white text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 shadow-md cursor-pointer active:scale-98"
                >
                  <Sparkles className="w-3.5 h-3.5 text-rose-200" />
                  <span>Generate Matches</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: RECOMMENDATIONS & MATCHED PATHWAY */}
          {currentStep === 4 && (
            <div className="space-y-6">
              {/* Report Header Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-emerald-600 text-xs font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Verified Academic Pathway Generated</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    Recommended Route: {selectedArea}
                  </h3>
                  <div className="text-xs text-slate-500 flex flex-wrap items-center gap-2 pt-1 font-medium">
                    <span>Destination: <strong className="text-slate-800">{selectedDestination}</strong></span>
                    <span>·</span>
                    <span>Study Level: <strong className="text-slate-800">{selectedLevel}</strong></span>
                    <span>·</span>
                    <span>Background: <strong className="text-slate-800">{currentQualification}</strong></span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={resetWizard}
                  className="self-start md:self-auto inline-flex items-center gap-1.5 py-2 px-3 rounded-lg border border-slate-200 text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Modify Evaluation</span>
                </button>
              </div>

              {/* Pathway Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Admission Route</span>
                  <span className="font-bold text-slate-900 text-sm mt-0.5 block">Direct University Entry</span>
                  <p className="text-slate-500 mt-1">Based on accredited coursework review</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Post-Study Work</span>
                  <span className="font-bold text-slate-900 text-sm mt-0.5 block">Up to 2 to 3 Years</span>
                  <p className="text-slate-500 mt-1">Official graduate route visa rights</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Estimated Scholarship</span>
                  <span className="font-bold text-[#C41822] text-sm mt-0.5 block">Up to £3,000 / AUD 10,000</span>
                  <p className="text-slate-500 mt-1">Evaluated at document submission</p>
                </div>
              </div>

              {/* Matched Universities */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    Eligible Partner Institutions ({matchedUniversities.length})
                  </h4>
                  <span className="text-xs text-slate-500 font-medium">Pre-evaluated for {selectedDestination}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {matchedUniversities.map((uni) => (
                    <div
                      key={uni.id}
                      className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-[#103578] hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                          <span className="font-bold text-[#103578]">{uni.country} · {uni.city}</span>
                          <span className="bg-slate-100 px-2 py-0.5 rounded font-semibold text-slate-700">
                            {uni.intakes[0]}
                          </span>
                        </div>
                        <h5 className="text-base font-bold text-slate-900 leading-snug">{uni.name}</h5>
                        <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">{uni.overview}</p>

                        <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1">
                          <div>
                            <span className="text-slate-400 font-medium">Estimated Tuition: </span>
                            <strong className="text-slate-800">{uni.estimatedTuition || 'Contact advisor'}</strong>
                          </div>
                          <div>
                            <span className="text-slate-400 font-medium">Scholarship: </span>
                            <span className="text-[#C41822] font-semibold">{uni.scholarshipInfo || 'Standard admissions'}</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => onSelectUniversity(uni)}
                          className="text-xs font-bold text-[#103578] hover:underline cursor-pointer"
                        >
                          View Full Details →
                        </button>

                        <button
                          type="button"
                          onClick={onBookConsultation}
                          className="py-1.5 px-3 rounded-lg bg-[#C41822] hover:bg-[#a3141a] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                        >
                          Apply / Inquire
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation Next Steps Callout */}
              <div className="bg-[#103578] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
                <div className="space-y-1">
                  <h4 className="text-lg font-bold">Lock in your official application with a dedicated BCAS advisor</h4>
                  <p className="text-xs sm:text-sm text-slate-200">
                    Get document pre-screening, SOP review, and guaranteed scholarship evaluations at no charge.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5 w-full md:w-auto shrink-0">
                  <button
                    type="button"
                    onClick={onBookConsultation}
                    className="py-3 px-5 rounded-xl bg-[#C41822] hover:bg-[#a3141a] text-white text-xs sm:text-sm font-bold shadow transition-all cursor-pointer text-center"
                  >
                    Book Free 1-on-1 Consultation
                  </button>

                  <a
                    href="https://wa.me/94761415273?text=Hello%20BCAS%2C%20I%20completed%20the%20Study%20Path%20evaluation%20and%20would%20like%20guidance."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
