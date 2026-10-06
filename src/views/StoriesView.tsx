import React from 'react';
import { ArrowLeft, Sparkles, Star, Award, GraduationCap, Video, Users } from 'lucide-react';
import { TestimonialVideoSection } from '../components/home/TestimonialVideoSection';

interface StoriesViewProps {
  onBookConsultation: () => void;
  onNavigateHome: () => void;
}

export const StoriesView: React.FC<StoriesViewProps> = ({
  onBookConsultation,
  onNavigateHome
}) => {
  return (
    <div className="pt-20 pb-20 bg-slate-900 min-h-screen text-white">
      {/* Top Breadcrumb Navigation */}
      <div className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <button
              onClick={onNavigateHome}
              className="hover:text-white font-semibold flex items-center gap-1 cursor-pointer transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <span>/</span>
            <span className="text-rose-400 font-bold">Student Video Testimonials</span>
          </div>

          <button
            onClick={onBookConsultation}
            className="px-3.5 py-1.5 rounded-lg bg-[#C41822] hover:bg-[#a3141a] text-white text-xs font-bold transition-all shadow-2xs cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join Our Alumni</span>
          </button>
        </div>
      </div>

      {/* Hero Header */}
      <div className="py-12 sm:py-16 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-rose-300 text-xs font-semibold uppercase tracking-[0.08em] leading-none brand-label mb-3">
            <Video className="w-3.5 h-3.5 text-rose-400" />
            <span>Verified Student Experiences</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-[-0.02em] leading-[0.98] brand-hero [text-wrap:balance]">
            Student Video Testimonials & Success Stories
          </h1>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl leading-[1.4] tracking-normal brand-body">
            Watch real video reflections from Sri Lankan students who began their journey at BCAS and are now studying, working, and thriving across top UK, Canada, and Australia universities.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 max-w-3xl">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <span className="block text-2xl font-black text-rose-400">10,000+</span>
              <span className="text-xs text-slate-300">Global Placements</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <span className="block text-2xl font-black text-amber-400">5.0 ★</span>
              <span className="text-xs text-slate-300">Verified Rating</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <span className="block text-2xl font-black text-blue-400">£5,000+</span>
              <span className="text-xs text-slate-300">Avg Scholarship Won</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <span className="block text-2xl font-black text-emerald-400">98%</span>
              <span className="text-xs text-slate-300">Visa Approval Rate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Video Testimonials Carousel Component */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-3xl border border-slate-800 overflow-hidden bg-slate-900/60 shadow-2xl">
          <TestimonialVideoSection
            onBookConsultation={onBookConsultation}
          />
        </div>
      </div>
    </div>
  );
};
