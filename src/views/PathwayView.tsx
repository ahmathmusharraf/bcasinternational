import React from 'react';
import { ArrowLeft, Sparkles, Compass, CheckCircle2, Award, School } from 'lucide-react';
import { StudyPathWizard } from '../components/home/StudyPathWizard';
import { University } from '../types';

interface PathwayViewProps {
  onSelectUniversity: (uni: University) => void;
  onBookConsultation: () => void;
  onNavigateHome: () => void;
}

export const PathwayView: React.FC<PathwayViewProps> = ({
  onSelectUniversity,
  onBookConsultation,
  onNavigateHome
}) => {
  return (
    <div className="pt-20 pb-20 bg-slate-50 min-h-screen">
      {/* Top Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#103578] font-semibold flex items-center gap-1 cursor-pointer transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <span>/</span>
            <span className="text-[#103578] font-bold">Study Path Wizard</span>
          </div>

          <button
            onClick={onBookConsultation}
            className="px-3.5 py-1.5 rounded-lg bg-[#C41822] hover:bg-[#a3141a] text-white text-xs font-bold transition-all shadow-2xs cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Free 1-on-1 Counseling</span>
          </button>
        </div>
      </div>

      {/* Hero Header */}
      <div className="bg-[#103578] text-white py-12 sm:py-16 border-b border-blue-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-rose-300 text-xs font-semibold uppercase tracking-[0.08em] leading-none brand-label mb-3">
            <Compass className="w-3.5 h-3.5 text-rose-400" />
            <span>Interactive Academic Matching</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-[-0.02em] leading-[0.98] brand-hero [text-wrap:balance]">
            Find Your International Study Pathway
          </h1>
          <p className="mt-3 text-slate-200 text-sm sm:text-base max-w-2xl leading-[1.4] tracking-normal brand-body">
            Follow our verified 4-step evaluation to identify eligible universities, entry criteria, tuition fee brackets, and automatic scholarship opportunities.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 max-w-3xl">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="block text-lg font-bold text-white">Step 1</span>
              <span className="text-xs text-slate-300">Choose Destination</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="block text-lg font-bold text-white">Step 2</span>
              <span className="text-xs text-slate-300">Select Discipline</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="block text-lg font-bold text-white">Step 3</span>
              <span className="text-xs text-slate-300">Enter Qualifications</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="block text-lg font-bold text-white">Step 4</span>
              <span className="text-xs text-slate-300">Match Universities</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Wizard Component */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          <StudyPathWizard
            onSelectUniversity={onSelectUniversity}
            onBookConsultation={onBookConsultation}
          />
        </div>
      </div>
    </div>
  );
};
