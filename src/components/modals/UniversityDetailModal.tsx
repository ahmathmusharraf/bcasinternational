import React from 'react';
import { X, MapPin, Calendar, Award, CheckCircle, BookOpen, GraduationCap, ArrowRight } from 'lucide-react';
import { University } from '../../types';

interface UniversityDetailModalProps {
  university: University | null;
  onClose: () => void;
  onApply: (uni: University) => void;
}

export const UniversityDetailModal: React.FC<UniversityDetailModalProps> = ({
  university,
  onClose,
  onApply
}) => {
  if (!university) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        <div className="relative h-48 sm:h-60 w-full overflow-hidden bg-slate-900 shrink-0">
          <img
            src={university.campusImage}
            alt={university.name}
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center gap-2 text-rose-300 text-xs font-semibold mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{university.city}, {university.country}</span>
              {university.partnerSince && (
                <>
                  <span>·</span>
                  <span className="text-slate-300">BCAS Partner since {university.partnerSince}</span>
                </>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {university.name}
            </h2>
          </div>
        </div>

        <div className="p-6 md:p-8 overflow-y-auto space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-slate-50 border border-slate-200/80 rounded-xl text-xs">
            <div>
              <span className="text-slate-500 block mb-0.5">Destination</span>
              <span className="font-bold text-slate-800 text-sm">{university.country}</span>
            </div>
            <div>
              <span className="text-slate-500 block mb-0.5">Est. Tuition</span>
              <span className="font-bold text-[#103578] text-sm">{university.estimatedTuition || 'Contact for fee tiers'}</span>
            </div>
            <div>
              <span className="text-slate-500 block mb-0.5">Next Intakes</span>
              <span className="font-semibold text-slate-800 truncate block">{university.intakes[0] || 'Multiple'}</span>
            </div>
            <div>
              <span className="text-slate-500 block mb-0.5">Study Levels</span>
              <span className="font-semibold text-slate-800">{university.studyLevels.slice(0, 2).join(', ')}</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#103578]" />
              Institution Overview
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              {university.overview}
            </p>
          </div>

          {university.scholarshipInfo && (
            <div className="p-4 bg-amber-50/80 border border-amber-200/90 rounded-xl flex items-start gap-3">
              <Award className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold text-amber-900 uppercase tracking-wide">
                  Scholarship & Award Opportunity
                </h5>
                <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                  {university.scholarshipInfo}
                </p>
              </div>
            </div>
          )}

          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#103578]" />
              Popular Courses Offered
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {university.popularCourses.map((c, i) => (
                <div key={i} className="flex items-center gap-2 p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C41822]" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-white border border-slate-200 rounded-xl">
              <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                Standard Entry Guidelines
              </h5>
              <ul className="space-y-2 text-xs text-slate-600">
                {university.entryRequirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-xl">
              <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                Campus Strengths & Welfare
              </h5>
              <ul className="space-y-2 text-xs text-slate-600">
                {university.keyHighlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#009FE3] shrink-0 mt-1.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            BCAS handles direct admissions, offer processing, and visa file support.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors w-1/2 sm:w-auto text-center"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onApply(university);
              }}
              className="px-5 py-2.5 bg-[#C41822] hover:bg-[#a3141a] text-white text-xs font-bold rounded-xl shadow transition-colors flex items-center justify-center gap-1.5 w-1/2 sm:w-auto"
            >
              <span>Apply for {university.name.split(' ')[0]}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
