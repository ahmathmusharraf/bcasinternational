import React, { useState } from 'react';
import { Search, BookOpen, Clock, Globe, ArrowRight, GraduationCap } from 'lucide-react';
import { COURSES_DATA } from '../../data/mockData';
import { CourseCategory } from '../../types';

interface CoursesSectionProps {
  onSelectCourse: (courseTitle: string) => void;
  onExploreAll: () => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({
  onSelectCourse,
  onExploreAll
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories: (CourseCategory | 'All')[] = [
    'All',
    'Business',
    'IT & Computing',
    'Engineering',
    'Health',
    'Law',
    'Hospitality'
  ];

  const filteredCourses = COURSES_DATA.filter((course) => {
    if (selectedCategory !== 'All' && course.category !== selectedCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const inTitle = course.title.toLowerCase().includes(q);
      const inOverview = course.overview.toLowerCase().includes(q);
      if (!inTitle && !inOverview) return false;
    }
    return true;
  });

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="courses" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-[#103578] text-xs font-bold uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5 text-[#C41822]" />
              <span>Academic Programs</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Popular International Courses & Degrees
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl">
              From fast-track Bachelor's degrees to specialized Master's programs across 11 global destinations.
            </p>
          </div>

          <div className="flex items-center justify-between md:justify-end gap-3">
            <div className="flex md:hidden items-center gap-1 text-slate-500 text-xs">
              <span>Swipe courses</span>
              <div className="flex items-center gap-1 ml-1">
                <button
                  onClick={() => scroll('left')}
                  aria-label="Scroll left"
                  className="w-7 h-7 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-50 cursor-pointer"
                >
                  ‹
                </button>
                <button
                  onClick={() => scroll('right')}
                  aria-label="Scroll right"
                  className="w-7 h-7 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-50 cursor-pointer"
                >
                  ›
                </button>
              </div>
            </div>

            <button
              onClick={onExploreAll}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#103578] hover:text-[#C41822] transition-colors cursor-pointer group"
            >
              <span>Explore All Courses ({COURSES_DATA.length})</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Search bar & Category filters */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-2 sm:gap-3 mb-2 sm:mb-6">
          <div className="flex overflow-x-auto no-scrollbar gap-1.5 pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`shrink-0 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#103578] text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-72">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses or keywords..."
              className="w-full pl-8 pr-3 py-1.5 sm:py-2 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#103578] focus:border-transparent"
            />
          </div>
        </div>

        {/* Course Cards Grid */}
        <div 
          ref={scrollContainerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {filteredCourses.slice(0, 6).map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-5 hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C41822] bg-rose-50 px-2 py-0.5 rounded-full">
                    {course.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {course.duration}
                  </span>
                </div>

                <h3 className="text-sm sm:text-lg font-bold text-slate-900 leading-snug line-clamp-1 sm:line-clamp-none">
                  {course.title}
                </h3>

                <div className="flex items-center gap-1 text-xs text-slate-600 mt-1 font-medium">
                  <GraduationCap className="w-3.5 h-3.5 text-[#103578]" />
                  <span>Level: {course.level}</span>
                </div>

                <p className="text-[11px] sm:text-sm text-slate-600 mt-1.5 sm:mt-3 leading-relaxed line-clamp-2">
                  {course.overview}
                </p>

                {/* Available Destinations */}
                <div className="pt-2 mt-2 border-t border-slate-100">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <Globe className="w-3 h-3 text-slate-400" />
                    Destinations
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {course.availableDestinations.slice(0, 4).map((dest) => (
                      <span
                        key={dest}
                        className="text-[10px] bg-slate-50 text-slate-700 px-1.5 py-0.5 rounded border border-slate-200 font-medium"
                      >
                        {dest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-2 sm:pt-4 mt-2 sm:mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] sm:text-xs text-slate-500">Intakes: 2026/2027</span>
                <button
                  onClick={() => onSelectCourse(course.title)}
                  className="py-1.5 px-3 rounded-lg bg-[#103578] hover:bg-[#0a234e] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                >
                  Enquire Course
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
