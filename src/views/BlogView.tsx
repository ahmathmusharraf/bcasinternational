import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  Search, 
  ArrowRight, 
  Sparkles, 
  ArrowLeft,
  Phone,
  CheckCircle2,
  Calendar,
  Layers,
  ChevronRight
} from 'lucide-react';
import { BLOG_POSTS_DATA } from '../data/blogData';
import { BlogPost } from '../types';
import { BlogArticleModal } from '../components/modals/BlogArticleModal';

interface BlogViewProps {
  onOpenConsultation: () => void;
  onNavigateHome: () => void;
}

export const BlogView: React.FC<BlogViewProps> = ({
  onOpenConsultation,
  onNavigateHome
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState<BlogPost>(BLOG_POSTS_DATA[0]);
  const [selectedArticleForModal, setSelectedArticleForModal] = useState<BlogPost | null>(null);

  const categories = [
    'All',
    'Post-Study Work',
    'PR & Immigration',
    'Scholarships',
    'Student Visa Guides',
    'IELTS Preparation'
  ];

  const filteredPosts = BLOG_POSTS_DATA.filter((post) => {
    if (selectedCategory !== 'All' && post.category !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const inTitle = post.title.toLowerCase().includes(q);
      const inExcerpt = post.excerpt.toLowerCase().includes(q);
      const inTags = post.tags.some(t => t.toLowerCase().includes(q));
      if (!inTitle && !inExcerpt && !inTags) return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-20 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col font-sans">
      {/* 1. Header Toolbar */}
      <div className="max-w-7xl mx-auto w-full shrink-0 pt-1.5 pb-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onNavigateHome}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#103578] hover:border-[#103578] text-xs font-bold transition-all cursor-pointer shadow-2xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back Home</span>
            </button>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-2xl font-bold text-slate-900 tracking-[-0.01em] leading-[1.05] brand-headline">
                  Insights & PR Blog
                </h1>
                <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-100/70 text-[#103578] text-[10px] font-semibold uppercase tracking-[0.08em] leading-none brand-label">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#103578]" />
                  Author: Ahmath Musharraf
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block leading-[1.4] tracking-normal brand-body">
                Post-study work rights, PR pathways, scholarship blueprints & visa compliance
              </p>
            </div>
          </div>

          {/* Quick Search & Advisory Action */}
          <div className="flex items-center gap-2">
            <div className="relative w-48 sm:w-64">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#103578]"
              />
            </div>

            <button
              type="button"
              onClick={onOpenConsultation}
              className="py-1.5 px-3 bg-[#C41822] hover:bg-[#a3141a] text-white text-xs font-bold rounded-xl shadow-xs transition-all whitespace-nowrap flex items-center gap-1 cursor-pointer shrink-0"
            >
              <Sparkles className="w-3 h-3 text-rose-200" />
              <span className="hidden md:inline">Free Assessment</span>
              <span className="md:hidden">Assess</span>
            </button>
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`shrink-0 px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#103578] text-white shadow-2xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/70'
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="text-[10px] text-slate-400 font-semibold ml-auto hidden md:inline shrink-0">
            Showing {filteredPosts.length} Guides
          </span>
        </div>
      </div>

      {/* 2. Main Body: Split View in ONE VIEW (Desktop/Tablet) or Swipeable Carousel (Mobile) */}
      <div className="max-w-7xl mx-auto w-full flex-1 min-h-0 py-1 grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch overflow-hidden">
        {/* Left Column: Spotlight Article Preview in One View */}
        <div className="lg:col-span-6 flex flex-col justify-between bg-white rounded-2xl border border-slate-200/90 p-3 sm:p-5 shadow-xs overflow-hidden">
          <div className="space-y-2 sm:space-y-3 overflow-y-auto no-scrollbar">
            {/* Visual Thumbnail & Badges */}
            <div className="relative h-36 sm:h-48 w-full rounded-xl overflow-hidden bg-slate-900 shrink-0">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                <span className="bg-[#C41822] text-white px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-xs">
                  Spotlight
                </span>
                <span className="bg-slate-900/80 backdrop-blur-md text-white px-2 py-0.5 rounded-full text-[10px] font-bold">
                  {activeArticle.category}
                </span>
              </div>

              <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-[11px] text-slate-200">
                <span className="flex items-center gap-1 font-medium">
                  <Clock className="w-3 h-3 text-slate-300" />
                  {activeArticle.readTime}
                </span>
                <span>{activeArticle.publishedDate}</span>
              </div>
            </div>

            {/* Article Content Preview */}
            <div className="space-y-1.5">
              <h2 className="text-sm sm:text-lg font-extrabold text-slate-900 leading-snug line-clamp-2">
                {activeArticle.title}
              </h2>
              <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed line-clamp-3">
                {activeArticle.excerpt}
              </p>
            </div>

            {/* Author Credit & Tags */}
            <div className="flex flex-wrap items-center justify-between gap-1.5 pt-2 border-t border-slate-100 text-[11px]">
              <div className="flex items-center gap-2">
                <img
                  src={activeArticle.author.avatar}
                  alt={activeArticle.author.name}
                  className="w-6 h-6 rounded-full object-cover border border-slate-200"
                />
                <span className="font-bold text-slate-800 text-[11px]">{activeArticle.author.name}</span>
                <span className="text-slate-400 text-[10px] hidden sm:inline">• BCAS Placements</span>
              </div>

              <div className="flex items-center gap-1">
                {activeArticle.tags.slice(0, 2).map((t) => (
                  <span key={t} className="text-[9px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-medium">
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action to Read Complete Article Modal */}
          <div className="pt-2 sm:pt-3 border-t border-slate-100 flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setSelectedArticleForModal(activeArticle)}
              className="flex-1 py-2 sm:py-2.5 px-4 bg-[#103578] hover:bg-[#0a234e] text-white text-xs font-bold rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
            >
              <span>Read Full Article (In-Depth Guide)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={onOpenConsultation}
              className="py-2 sm:py-2.5 px-3 bg-rose-50 text-[#C41822] hover:bg-rose-100 text-xs font-bold rounded-xl transition-all cursor-pointer shrink-0"
            >
              Free Advice
            </button>
          </div>
        </div>

        {/* Right Column: All Published Articles Directory in One View */}
        <div className="lg:col-span-6 flex flex-col bg-white rounded-2xl border border-slate-200/90 p-3 sm:p-4 shadow-xs overflow-hidden">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 shrink-0">
            <div className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#103578]" />
              <span className="text-xs font-bold text-slate-900">
                {selectedCategory === 'All' ? 'All Published Articles' : `${selectedCategory} Articles`}
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-semibold">
              Click to preview or read
            </span>
          </div>

          {/* Scrollable list fitting within One View */}
          <div className="overflow-y-auto no-scrollbar space-y-2 flex-1 pr-1">
            {filteredPosts.map((post) => {
              const isSelected = activeArticle.id === post.id;
              return (
                <div
                  key={post.id}
                  onClick={() => setActiveArticle(post)}
                  className={`p-2 sm:p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2.5 ${
                    isSelected
                      ? 'bg-blue-50/80 border-[#103578] shadow-2xs'
                      : 'bg-slate-50/60 hover:bg-slate-100/80 border-slate-200/70'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-12 h-12 rounded-lg object-cover shrink-0 border border-slate-200"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="text-[9px] font-extrabold bg-white text-[#103578] px-1.5 py-0.2 rounded border border-slate-200/80 shrink-0">
                          {post.category}
                        </span>
                        <span className="text-[10px] text-slate-400 truncate">
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xs font-bold text-slate-900 truncate leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-[10px] text-slate-500 truncate">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedArticleForModal(post);
                    }}
                    className="p-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#103578] hover:text-[#103578] text-slate-500 text-[10px] font-bold shrink-0 transition-colors cursor-pointer flex items-center gap-1"
                    title="Open article modal"
                  >
                    <span>Read</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. Bottom One-View Footer Strip */}
      <div className="max-w-7xl mx-auto w-full shrink-0 pt-1.5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-1.5 text-[11px] text-slate-500">
        <div className="flex items-center gap-2 truncate">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
          <span className="truncate">
            Written by <strong>Ahmath Musharraf</strong> • Assistant Marketing Manager, BCAS International Placements
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:+94117999300"
            className="hover:text-[#103578] font-bold text-slate-700 flex items-center gap-1"
          >
            <Phone className="w-3 h-3 text-[#103578]" />
            <span>+94 11 7 999 300</span>
          </a>
          <button
            type="button"
            onClick={onNavigateHome}
            className="font-bold text-[#103578] hover:underline cursor-pointer"
          >
            Return to Home View →
          </button>
        </div>
      </div>

      {/* 4. Article Reader Modal */}
      <BlogArticleModal
        article={selectedArticleForModal}
        onClose={() => setSelectedArticleForModal(null)}
        onOpenConsultation={onOpenConsultation}
      />
    </div>
  );
};
