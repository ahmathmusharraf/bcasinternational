import React from 'react';
import { ArrowLeft, Sparkles, BookOpen, CheckCircle2, Award, FileText } from 'lucide-react';
import { IeltsSection } from '../components/home/IeltsSection';

interface IeltsViewProps {
  onBookConsultation: () => void;
  onNavigateHome: () => void;
}

export const IeltsView: React.FC<IeltsViewProps> = ({
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
            <span className="text-[#103578] font-bold">IELTS Academy & Waiver Desk</span>
          </div>

          <button
            onClick={onBookConsultation}
            className="px-3.5 py-1.5 rounded-lg bg-[#C41822] hover:bg-[#a3141a] text-white text-xs font-bold transition-all shadow-2xs cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Check My Waiver</span>
          </button>
        </div>
      </div>

      {/* Hero Header */}
      <div className="bg-[#103578] text-white py-12 sm:py-16 border-b border-blue-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-rose-300 text-xs font-semibold uppercase tracking-[0.08em] leading-none brand-label mb-3">
            <BookOpen className="w-3.5 h-3.5 text-rose-400" />
            <span>British Council & IDP Partnership</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-[-0.02em] leading-[0.98] brand-hero [text-wrap:balance]">
            IELTS Academy & 100% English Waiver Desk
          </h1>
          <p className="mt-3 text-slate-200 text-sm sm:text-base max-w-2xl leading-[1.4] tracking-normal brand-body">
            Get personalized test prep for IELTS Academic, General, UKVI, and PTE Academic — or find out if you qualify for a complete IELTS exemption based on your prior English-medium studies.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 max-w-2xl">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <div>
                <span className="block text-xs font-bold text-white">100% IELTS Waivers</span>
                <span className="text-[11px] text-slate-300">MOI letters & A/L English</span>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
              <Award className="w-5 h-5 text-blue-400" />
              <div>
                <span className="block text-xs font-bold text-white">Band 7.5+ Mentors</span>
                <span className="text-[11px] text-slate-300">Certified native examiners</span>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
              <FileText className="w-5 h-5 text-rose-400" />
              <div>
                <span className="block text-xs font-bold text-white">Free Mock Tests</span>
                <span className="text-[11px] text-slate-300">Full diagnostic scoring</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main IELTS & Waiver Interactive Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          <IeltsSection
            onBookConsultation={onBookConsultation}
          />
        </div>
      </div>
    </div>
  );
};
