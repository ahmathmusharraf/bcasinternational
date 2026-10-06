import React, { useState } from 'react';
import { Search, BookOpen, Clock, Globe, GraduationCap, ArrowRight, Briefcase } from 'lucide-react';
import { COURSES_DATA } from '../data/mockData';
import { CourseCategory, StudyLevel } from '../types';

interface CoursesViewProps {
  onSelectCourse: (courseTitle: string) => void;
  onBookConsultation: () => void;
  onNavigateHome?: () => void;
}

export const CoursesView: React.FC<CoursesViewProps> = ({
  onSelectCourse,
  onBookConsultation,
  onNavigateHome
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory | 'All'>('All');
  const [selectedLevel, setSelectedLevel] = useState<StudyLevel | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: (CourseCategory | 'All')[] = [
    'All',
    'Business',
    'IT & Computing',
    'Engineering',
    'Health',
    'Law',
    'Hospitality'
  ];

  const levels: (StudyLevel | 'All')[] = [
    'All',
    'Undergraduate',
    'Postgraduate',
    "Master's",
    'MBA',
    'Diploma',
    'Postgraduate Diploma'
  ];

  const filteredCourses = COURSES_DATA.filter((course) => {
    if (selectedCategory !== 'All' && course.category !== selectedCategory) return false;
    if (selectedLevel !== 'All' && course.level !== selectedLevel) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const inTitle = course.title.toLowerCase().includes(q);
      const inOverview = course.overview.toLowerCase().includes(q);
      const inOutcomes = course.careerOutcomes.some(o => o.toLowerCase().includes(q));
      if (!inTitle && !inOverview && !inOutcomes) return false;
    }
    return true;
  });

  return (
    <div className="pt-20 pb-20 bg-slate-50 min-h-screen">
      {/* Top Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            {onNavigateHome && (
              <button
                onClick={onNavigateHome}
                className="hover:text-[#103578] font-semibold flex items-center gap-1 cursor-pointer transition-colors"
              >
                <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                <span>Home</span>
              </button>
            )}
            {onNavigateHome && <span>/</span>}
            <span className="text-[#103578] font-bold">Courses & Degrees</span>
          </div>

          <button
            onClick={onBookConsultation}
            className="px-3.5 py-1.5 rounded-lg bg-[#C41822] hover:bg-[#a3141a] text-white text-xs font-bold transition-all shadow-2xs cursor-pointer flex items-center gap-1.5"
          >
            <span>Course Consultation</span>
          </button>
        </div>
      </div>

      {/* Header */}
      <div className="bg-[#103578] text-white py-14 border-b border-blue-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-rose-300 text-xs font-semibold uppercase tracking-[0.08em] leading-none brand-label mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Curriculum & Qualifications</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.02em] leading-[0.98] brand-hero [text-wrap:balance]">
            International Degree Courses & Pathways
          </h1>
          <p className="mt-3 text-slate-200 text-sm sm:text-base max-w-2xl leading-[1.4] tracking-normal brand-body">
            Choose from industry-aligned Bachelor’s, Master’s, MBA, and top-up pathways across globally recognized universities in top international study destinations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filters */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm mb-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-7 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses by title, keywords, or career field..."
                className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#103578] focus:bg-white"
              />
            </div>

            <div className="md:col-span-5">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value as StudyLevel | 'All')}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#103578] focus:bg-white"
              >
                <option value="All">All Degree Levels</option>
                {levels.filter(l => l !== 'All').map(lvl => (
                  <option key={lvl} value={lvl}>{lvl}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-2 items-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">Discipline:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#103578] text-white shadow-xs'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count & Help */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs sm:text-sm font-semibold text-slate-600">
            Showing <strong className="text-slate-900">{filteredCourses.length}</strong> academic programs
          </p>
          <button
            onClick={onBookConsultation}
            className="text-xs font-bold text-[#C41822] hover:underline cursor-pointer"
          >
            Not sure which course fits you? Speak with an advisor →
          </button>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:shadow-lg hover:border-blue-200 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C41822] bg-rose-50 px-2.5 py-0.5 rounded-full">
                    {course.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-semibold text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {course.duration}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {course.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-2 font-medium">
                  <GraduationCap className="w-4 h-4 text-[#103578]" />
                  <span>Qualification: {course.level}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  {course.overview}
                </p>

                {/* Career Outcomes */}
                <div className="pt-3 mt-3 border-t border-slate-100">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <Briefcase className="w-3 h-3 text-[#103578]" />
                    Target Careers
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {course.careerOutcomes.map((career, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-slate-50 text-slate-700 px-2 py-0.5 rounded border border-slate-200 font-medium"
                      >
                        {career}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Destinations */}
                <div className="pt-3 mt-3 border-t border-slate-100">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <Globe className="w-3 h-3 text-slate-400" />
                    Offered In
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {course.availableDestinations.map((dest) => (
                      <span
                        key={dest}
                        className="text-[10px] bg-blue-50 text-[#103578] px-2 py-0.5 rounded font-bold"
                      >
                        {dest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100">
                <button
                  onClick={() => onSelectCourse(course.title)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#103578] hover:bg-[#0a234e] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>Enquire Course Admissions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
