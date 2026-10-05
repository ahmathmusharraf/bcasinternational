import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, Sparkles, ChevronLeft, ChevronRight, User, Layers } from 'lucide-react';
import { BLOG_POSTS_DATA } from '../../data/blogData';
import { BlogPost } from '../../types';

interface BlogSectionProps {
  onSelectArticle: (article: BlogPost) => void;
  onExploreAllBlogs?: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  onSelectArticle,
  onExploreAllBlogs
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [mobileIndex, setMobileIndex] = useState<number>(0);

  // Touch swipe tracking for mobile one-view carousel
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const categories = [
    'All',
    'Post-Study Work',
    'PR & Immigration',
    'Scholarships',
    'Student Visa Guides',
    'IELTS Preparation'
  ];

  const filteredPosts = selectedCategory === 'All'
    ? BLOG_POSTS_DATA
    : BLOG_POSTS_DATA.filter(post => post.category === selectedCategory);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setMobileIndex(0);
  };

  const currentMobilePost = filteredPosts[mobileIndex] || filteredPosts[0];

  const handleNextMobile = () => {
    if (mobileIndex < filteredPosts.length - 1) {
      setMobileIndex(prev => prev + 1);
    } else {
      setMobileIndex(0); // loop
    }
  };

  const handlePrevMobile = () => {
    if (mobileIndex > 0) {
      setMobileIndex(prev => prev - 1);
    } else {
      setMobileIndex(filteredPosts.length - 1); // loop
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 40) {
      handleNextMobile();
    } else if (distance < -40) {
      handlePrevMobile();
    }
  };

  return (
    <section 
      id="blog" 
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200 relative"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* 1. Header with Creative Insights Headline Heading */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#103578] border border-blue-100 text-xs font-semibold uppercase tracking-[0.08em] leading-none brand-label mb-2.5 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>INSIGHTS</span>
            <span className="text-slate-300">|</span>
            <span className="text-[#C41822] flex items-center gap-1 font-semibold">
              <BookOpen className="w-3.5 h-3.5" />
              Coming Blogs & Knowledge Base
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-[-0.01em] leading-[1.05] brand-headline [text-wrap:balance]">
            International Education & PR Blog
          </h2>

          <p className="mt-2 text-slate-600 text-sm sm:text-base leading-[1.4] tracking-normal brand-body">
            Verified guides on post-study work visas, PR points, scholarships, and campus lifestyle.
          </p>

          {/* Categories Pill Filter Bar */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-1 mt-1 max-w-2xl mx-auto justify-start sm:justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryChange(cat)}
                className={`shrink-0 px-2.5 py-0.5 sm:py-1 rounded-xl text-[10px] sm:text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#103578] text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2. MOBILE ONE-VIEW SHOWCASE CARD (Visible ONLY on Mobile md:hidden) */}
        {currentMobilePost && (
          <div 
            className="md:hidden flex-1 flex flex-col justify-between my-auto max-w-md mx-auto w-full select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Interactive Showcase Card */}
            <div 
              onClick={() => onSelectArticle(currentMobilePost)}
              className="bg-slate-50 rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden flex flex-col justify-between cursor-pointer active:scale-99 transition-all"
            >
              {/* Article Hero Banner */}
              <div className="relative h-28 sm:h-36 w-full overflow-hidden bg-slate-900 shrink-0">
                <img
                  src={currentMobilePost.image}
                  alt={currentMobilePost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                <div className="absolute top-2 left-2 flex items-center gap-1.5">
                  <span className="bg-[#C41822] text-white px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider">
                    {currentMobilePost.category}
                  </span>
                  <span className="bg-slate-900/80 backdrop-blur-md text-white px-2 py-0.5 rounded-full text-[9px] font-medium flex items-center gap-1">
                    <Clock className="w-2.5 h-2.5" />
                    {currentMobilePost.readTime}
                  </span>
                </div>

                <div className="absolute bottom-1.5 left-2 right-2 text-[10px] text-slate-300 font-medium">
                  {currentMobilePost.publishedDate}
                </div>
              </div>

              {/* Title & Excerpt */}
              <div className="p-3 space-y-1">
                <h3 className="text-xs font-bold text-slate-900 leading-snug line-clamp-2">
                  {currentMobilePost.title}
                </h3>
                <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed">
                  {currentMobilePost.excerpt}
                </p>
              </div>

              {/* Card Footer: Author + Read Action */}
              <div className="px-3 pb-2.5 pt-1.5 border-t border-slate-200/70 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <img
                    src={currentMobilePost.author.avatar}
                    alt={currentMobilePost.author.name}
                    className="w-5 h-5 rounded-full object-cover border border-slate-300"
                  />
                  <span className="text-[10px] font-bold text-slate-800">
                    {currentMobilePost.author.name}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectArticle(currentMobilePost);
                  }}
                  className="py-1 px-3 bg-[#103578] text-white text-[11px] font-bold rounded-lg shadow-2xs flex items-center gap-1 cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Mobile Carousel Controls & Dot Stepper */}
            <div className="flex items-center justify-between px-2 pt-2 shrink-0">
              <button
                type="button"
                onClick={handlePrevMobile}
                className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center text-xs font-bold active:bg-slate-200 cursor-pointer"
                aria-label="Previous article"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Dots and Counter */}
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1">
                  {filteredPosts.slice(0, 6).map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setMobileIndex(idx)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        mobileIndex === idx ? 'w-4 bg-[#103578]' : 'w-1.5 bg-slate-300'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
                <span className="text-[9px] text-slate-400 font-bold mt-0.5">
                  Article {mobileIndex + 1} of {filteredPosts.length}
                </span>
              </div>

              <button
                type="button"
                onClick={handleNextMobile}
                className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center text-xs font-bold active:bg-slate-200 cursor-pointer"
                aria-label="Next article"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* 3. DESKTOP GRID (Visible ONLY on Desktop md:grid) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-2 mb-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => onSelectArticle(post)}
              className="bg-slate-50/90 rounded-2xl border border-slate-200/90 overflow-hidden hover:bg-white hover:border-[#103578] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  <div className="absolute top-2.5 left-2.5 bg-slate-950/80 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] font-bold text-white border border-white/10">
                    {post.category}
                  </div>

                  <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-[10px] text-slate-300">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                    <span>{post.publishedDate}</span>
                  </div>
                </div>

                <div className="p-5 space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#103578] transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 truncate max-w-[140px]">
                    <span className="w-5 h-5 rounded-full bg-[#103578] text-white flex items-center justify-center text-[10px] font-bold">
                      {post.author.name[0]}
                    </span>
                    <span className="truncate font-semibold">{post.author.name}</span>
                  </div>

                  <span className="text-xs font-bold text-[#103578] group-hover:text-[#C41822] transition-colors flex items-center gap-1">
                    Read Article <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4. Bottom Strip (Ultra-compact on Mobile, Full on Desktop) */}
        <div className="bg-slate-900 text-white rounded-xl sm:rounded-2xl p-2 sm:p-3 flex flex-row items-center justify-between gap-2 shrink-0">
          <div className="flex items-center gap-1.5 truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
            <span className="text-[10px] sm:text-xs text-slate-300 truncate font-medium">
              Lead Author: <strong>Ahmath Musharraf</strong> • Assistant Marketing Manager
            </span>
          </div>

          {onExploreAllBlogs && (
            <button
              type="button"
              onClick={onExploreAllBlogs}
              className="text-[10px] sm:text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 shrink-0 cursor-pointer"
            >
              <span>Explore All</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
