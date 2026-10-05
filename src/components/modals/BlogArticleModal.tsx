import React from 'react';
import { X, Calendar, Clock, Tag, ArrowRight, Share2, Check, User, Sparkles } from 'lucide-react';
import { BlogPost } from '../../types';

interface BlogArticleModalProps {
  article: BlogPost | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const BlogArticleModal: React.FC<BlogArticleModalProps> = ({
  article,
  onClose,
  onOpenConsultation
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!article) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col border border-slate-200">
        {/* Sticky Header with Close & Category */}
        <div className="flex items-center justify-between px-4 sm:px-8 py-3.5 border-b border-slate-100 bg-white sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#103578]/10 text-[#103578]">
              {article.category}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShare}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors flex items-center gap-1 text-xs font-semibold cursor-pointer"
              title="Share article link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? 'Link Copied' : 'Share'}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close article modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Article Body */}
        <div className="overflow-y-auto px-4 sm:px-10 py-6 space-y-6">
          {/* Article Title & Metadata */}
          <div>
            <h1 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug [text-wrap:balance]">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 mt-4 pt-4 border-t border-slate-100 text-xs text-slate-600">
              <div className="flex items-center gap-2.5">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-9 h-9 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <div className="font-bold text-slate-900">{article.author.name}</div>
                  <div className="text-[11px] text-slate-500">{article.author.role}</div>
                </div>
              </div>

              <span className="hidden sm:inline text-slate-300">·</span>

              <div className="flex items-center gap-1.5 text-slate-500">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{article.publishedDate}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-2xl overflow-hidden aspect-[16/8] sm:aspect-[21/9] bg-slate-100 border border-slate-200 shadow-inner">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Excerpt Lead */}
          <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 text-sm text-[#103578] font-medium leading-relaxed">
            {article.excerpt}
          </div>

          {/* Main Article Content formatted with Markdown-like blocks */}
          <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
            {article.content.split('\n\n').map((paragraph, index) => {
              const trimmed = paragraph.trim();
              if (!trimmed) return null;

              if (trimmed.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-lg sm:text-xl font-bold text-slate-900 pt-3 pb-1 border-b border-slate-100">
                    {trimmed.replace('### ', '')}
                  </h3>
                );
              }

              if (trimmed.startsWith('#### ')) {
                return (
                  <h4 key={index} className="text-base sm:text-lg font-bold text-slate-800 pt-2">
                    {trimmed.replace('#### ', '')}
                  </h4>
                );
              }

              if (trimmed.startsWith('---')) {
                return <hr key={index} className="border-slate-200 my-4" />;
              }

              if (trimmed.startsWith('|')) {
                // Table simple rendering
                const rows = trimmed.split('\n').filter(r => !r.includes('---'));
                return (
                  <div key={index} className="overflow-x-auto my-4 rounded-xl border border-slate-200">
                    <table className="min-w-full text-xs text-left divide-y divide-slate-200">
                      <tbody className="divide-y divide-slate-100">
                        {rows.map((row, rIdx) => {
                          const cols = row.split('|').filter(c => c.trim().length > 0);
                          const isHeader = rIdx === 0;
                          return (
                            <tr key={rIdx} className={isHeader ? 'bg-slate-50 font-bold text-slate-900' : 'bg-white hover:bg-slate-50/50'}>
                              {cols.map((col, cIdx) => (
                                <td key={cIdx} className="px-3 py-2 whitespace-nowrap">
                                  {col.trim().replace(/\*\*/g, '')}
                                </td>
                              ))}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                );
              }

              if (trimmed.startsWith('- ')) {
                const listItems = trimmed.split('\n- ').map(item => item.replace('- ', ''));
                return (
                  <ul key={index} className="list-disc pl-5 space-y-1.5 text-sm text-slate-600">
                    {listItems.map((li, lIdx) => (
                      <li key={lIdx} dangerouslySetInnerHTML={{ __html: li.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                    ))}
                  </ul>
                );
              }

              if (trimmed.match(/^\d+\. /)) {
                const numItems = trimmed.split(/\n\d+\. /).map(item => item.replace(/^\d+\. /, ''));
                return (
                  <ol key={index} className="list-decimal pl-5 space-y-1.5 text-sm text-slate-600">
                    {numItems.map((ni, nIdx) => (
                      <li key={nIdx} dangerouslySetInnerHTML={{ __html: ni.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                    ))}
                  </ol>
                );
              }

              return (
                <p 
                  key={index}
                  dangerouslySetInnerHTML={{ __html: trimmed.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                />
              );
            })}
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider mr-1 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" /> Tags:
            </span>
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg text-xs bg-slate-100 text-slate-700 font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Direct CTA inside modal */}
          <div className="rounded-2xl bg-gradient-to-r from-[#103578] to-[#0a234e] p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="inline-flex items-center gap-1 text-xs text-amber-300 font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Need Personalized Guidance?</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold">
                Speak directly with an accredited BCAS counselor
              </h4>
              <p className="text-xs text-slate-300 max-w-md">
                Get your academic profile evaluated for university eligibility, IELTS waivers, and post-study work opportunities with zero agency charges.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="shrink-0 py-2.5 px-5 rounded-xl bg-[#C41822] hover:bg-[#a3141a] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
