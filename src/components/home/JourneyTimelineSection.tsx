import React, { useState } from 'react';
import { Compass, Search, FileText, CheckCircle2, Plane, ArrowRight } from 'lucide-react';
import { JOURNEY_STEPS } from '../../data/mockData';

interface JourneyTimelineSectionProps {
  onStartJourney: () => void;
}

export const JourneyTimelineSection: React.FC<JourneyTimelineSectionProps> = ({
  onStartJourney
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const icons = [
    <Compass className="w-5 h-5 text-white" />,
    <Search className="w-5 h-5 text-white" />,
    <FileText className="w-5 h-5 text-white" />,
    <CheckCircle2 className="w-5 h-5 text-white" />,
    <Plane className="w-5 h-5 text-white" />
  ];

  return (
    <section id="journey" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 shrink-0">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#103578] text-xs font-semibold uppercase tracking-[0.08em] leading-none brand-label mb-2 sm:mb-3">
            <span>Seamless 5-Phase Progression</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-[-0.01em] leading-[1.05] brand-headline [text-wrap:balance]">
            Your Journey to an Overseas University
          </h2>
          <p className="mt-2 sm:mt-3 text-slate-600 text-sm sm:text-base leading-[1.4] tracking-normal brand-body">
            From your very first enquiry in Sri Lanka to your first lecture abroad, our structured roadmap ensures clarity.
          </p>
        </div>

        {/* Step Selector: Compact on mobile, 5-col on desktop */}
        <div className="grid grid-cols-5 gap-1.5 sm:gap-3 mb-2 sm:mb-8 shrink-0">
          {JOURNEY_STEPS.map((step, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveStepIndex(idx)}
              className={`p-2 sm:p-4 rounded-xl sm:rounded-2xl text-center md:text-left border transition-all cursor-pointer flex flex-col justify-between ${
                activeStepIndex === idx
                  ? 'bg-white border-[#103578] ring-2 ring-blue-600/20 shadow-md'
                  : 'bg-white/60 border-slate-200/80 hover:bg-white'
              }`}
            >
              <div className="flex items-center justify-center md:justify-between mb-1 sm:mb-3">
                <span
                  className={`text-[10px] sm:text-xs font-extrabold px-1.5 sm:px-2 py-0.5 rounded-full ${
                    activeStepIndex === idx
                      ? 'bg-[#C41822] text-white'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  Step {step.stepNumber}
                </span>
                <span className="hidden md:inline text-[10px] uppercase font-bold tracking-wider text-slate-400">
                  {step.phase}
                </span>
              </div>
              <h4 className="text-[10px] sm:text-sm font-bold text-slate-900 line-clamp-1">
                {step.title}
              </h4>
            </button>
          ))}
        </div>

        {/* Active Step Detailed Showcase Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-4 sm:p-8 shadow-xs flex flex-col justify-between gap-3 sm:gap-6 flex-1 max-h-[300px] md:max-h-none">
          <div className="flex items-start gap-3 sm:gap-5">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#103578] flex items-center justify-center shrink-0 shadow-md">
              {icons[activeStepIndex]}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5 sm:mb-1">
                <span className="text-[10px] sm:text-xs font-black text-[#C41822] uppercase tracking-wider">
                  Phase {JOURNEY_STEPS[activeStepIndex].phase} · Step {JOURNEY_STEPS[activeStepIndex].stepNumber} of 5
                </span>
              </div>
              <h3 className="text-base sm:text-2xl font-bold text-slate-900">
                {JOURNEY_STEPS[activeStepIndex].title}
              </h3>
              <p className="text-xs sm:text-base text-slate-600 mt-1 sm:mt-2 leading-relaxed">
                {JOURNEY_STEPS[activeStepIndex].description}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 border-t border-slate-100">
            <div className="text-[11px] text-slate-500 hidden sm:block">
              Dedicated BCAS counselors guide each milestone with personalized documentation checklists.
            </div>
            <button
              type="button"
              onClick={onStartJourney}
              className="shrink-0 w-full sm:w-auto py-2.5 px-5 rounded-xl bg-[#103578] hover:bg-[#0a234e] text-white text-xs sm:text-sm font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer group active:scale-95"
            >
              <span>Start My Journey Now</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
