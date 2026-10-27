import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SUCCESS_STORIES } from '../data/mockData';
import { SuccessStory } from '../types';
import {
  Sparkles,
  MapPin,
  GraduationCap,
  Briefcase,
  Quote,
  CheckCircle2,
  ArrowRight,
  Filter
} from 'lucide-react';

export const SuccessStoriesPage: React.FC = () => {
  const { navigateTo } = useApp();
  const [selectedDestination, setSelectedDestination] = useState<string>('All');

  const destinations = [
    'All',
    'United Kingdom',
    'Australia',
    'Canada',
    'Sweden',
    'Finland',
    'United Arab Emirates',
    'Malta'
  ];

  const filteredStories = SUCCESS_STORIES.filter(story => {
    if (selectedDestination === 'All') return true;
    return story.destination === selectedDestination;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#00239C] uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-[#00239C]" />
          <span>STUDENT JOURNEYS & MILESTONES</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-slate-900 tracking-tight">
          Student Success Stories
        </h1>
        <p className="text-base text-slate-600 leading-relaxed font-normal">
          Learn how students starting from BCAS campuses in Colombo, Jaffna, Kalmunai, and Kandy transitioned into international universities and graduated into exciting global careers.
        </p>

        {/* Filter */}
        <div className="pt-2 flex items-center gap-2">
          <span className="text-xs font-medium text-slate-500">Filter by destination:</span>
          <div className="flex flex-wrap gap-1 text-xs">
            {destinations.map(dest => (
              <button
                key={dest}
                onClick={() => setSelectedDestination(dest)}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${
                  selectedDestination === dest
                    ? 'bg-[#00239C] text-white'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {dest}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredStories.map(story => (
          <div
            key={story.id}
            className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col justify-between"
          >
            <div>
              {/* Media Card */}
              <div className="relative h-56 bg-slate-900 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.studentName}
                  className="w-full h-full object-cover"
                  onError={e => {
                    (e.currentTarget as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent" />

                <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-xl text-xs font-bold text-slate-900 shadow-xs flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#BA141A]" />
                  <span>{story.fromCampus}</span>
                </div>

                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="text-xs font-semibold text-blue-200 font-mono block">
                    {story.graduationYear} · {story.destination}
                  </span>
                  <h3 className="text-xl font-bold font-display text-white">
                    {story.studentName}
                  </h3>
                </div>
              </div>

              {/* Story Content */}
              <div className="p-6 sm:p-8 space-y-5">
                {/* Degree & Role Badges */}
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center gap-2 text-slate-700 font-medium">
                    <GraduationCap className="w-4 h-4 text-[#00239C] shrink-0" />
                    <span>{story.degreeProgramme} at <strong>{story.currentUniversity}</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-800 font-semibold">
                    <Briefcase className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{story.currentRole}</span>
                  </div>
                </div>

                {/* Quote */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 relative text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  <Quote className="w-4 h-4 text-slate-300 absolute top-3 right-3" />
                  &quot;{story.storyQuote}&quot;
                </div>

                {/* Full Journey Description */}
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                    The Educational Route:
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {story.fullJourney}
                  </p>
                </div>

                {/* Advice */}
                <div className="p-3.5 bg-blue-50/70 border border-blue-100 rounded-xl text-xs text-blue-950">
                  <strong className="block font-semibold mb-0.5">Advice for Future Students:</strong>
                  <span>{story.adviceForStudents}</span>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="p-6 pt-3 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">Category: {story.category}</span>
              <button
                onClick={() =>
                  navigateTo('apply', {
                    destination: story.destination,
                    subject: story.category
                  })
                }
                className="px-3.5 py-1.5 bg-[#00239C] hover:bg-[#001869] text-white font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1"
              >
                <span>Follow Similar Route</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="p-8 sm:p-10 bg-slate-900 text-white rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
            Write your own international success story.
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Book an appointment with a BCAS counselor to assess your current results and explore top-tier university placement options.
          </p>
        </div>
        <button
          onClick={() => navigateTo('apply')}
          className="px-6 py-3.5 bg-[#00239C] hover:bg-[#001869] text-white font-bold text-sm rounded-xl transition-colors cursor-pointer shrink-0"
        >
          Begin My Application Enquiry ↗
        </button>
      </div>
    </div>
  );
};
