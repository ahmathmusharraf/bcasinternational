import React from 'react';
import { Quote, MapPin, GraduationCap, Calendar, ArrowRight } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../../data/mockData';

interface SuccessStoriesSectionProps {
  onStartJourney: () => void;
}

export const SuccessStoriesSection: React.FC<SuccessStoriesSectionProps> = ({
  onStartJourney
}) => {
  return (
    <section id="stories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-[#103578] text-xs font-bold uppercase tracking-wider mb-2">
              <span>Verified Placements</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Student Success Stories
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl">
              Hear directly from students who began their international university journey with BCAS and are now excelling abroad.
            </p>
          </div>

          <button
            onClick={onStartJourney}
            className="self-start md:self-auto inline-flex items-center gap-2 text-sm font-bold text-[#103578] hover:text-[#C41822] transition-colors cursor-pointer group"
          >
            <span>Join Our Global Alumni</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-slate-50/80 rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between hover:bg-white hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <img
                    src={t.photoUrl}
                    alt={t.studentName}
                    className="w-13 h-13 rounded-full object-cover ring-2 ring-blue-100 shadow-sm"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">{t.studentName}</h3>
                    <div className="flex items-center gap-1 text-[11px] text-slate-500 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#C41822]" />
                      <span>{t.homeCity || 'Sri Lanka'} → {t.country}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-1 mb-3 bg-white p-3 rounded-xl border border-slate-200/60 text-xs">
                  <div className="font-bold text-[#103578] line-clamp-1">{t.university}</div>
                  <div className="flex items-center gap-1 text-slate-600">
                    <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="line-clamp-1">{t.course}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400 text-[10px]">
                    <Calendar className="w-3 h-3 text-slate-400 shrink-0" />
                    <span>Intake: {t.intake}</span>
                  </div>
                </div>

                <div className="relative pt-2">
                  <Quote className="w-5 h-5 text-slate-300 absolute -top-1 -left-1 opacity-50" />
                  <p className="text-xs sm:text-sm text-slate-600 italic pl-5 leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                  Visa Approved ✓
                </span>
                <span>Enrolled Student</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
