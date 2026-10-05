import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown, Layers, X, Check } from 'lucide-react';

export interface SectionMeta {
  id: string;
  name: string;
  shortName: string;
  badge?: string;
}

export const SECTIONS_META: SectionMeta[] = [
  { id: 'home', name: 'Home & Gateway', shortName: 'Home' },
  { id: 'destinations', name: 'Study Destinations', shortName: 'Destinations' },
  { id: 'universities', name: 'Featured Universities', shortName: 'Universities' },
  { id: 'work-pr', name: 'Work Rights & PR Roadmap', shortName: 'Work & PR', badge: 'PR Guide' },
  { id: 'blog', name: 'Insights & PR Blog', shortName: 'Blog', badge: 'New' }
];

interface MobileSectionNavigatorProps {
  onScrollToSection: (sectionId: string) => void;
}

export const MobileSectionNavigator: React.FC<MobileSectionNavigatorProps> = ({
  onScrollToSection
}) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (let i = SECTIONS_META.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS_META[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setCurrentSectionIndex(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToNextSection = () => {
    if (currentSectionIndex < SECTIONS_META.length - 1) {
      const nextIndex = currentSectionIndex + 1;
      setCurrentSectionIndex(nextIndex);
      onScrollToSection(SECTIONS_META[nextIndex].id);
    }
  };

  const goToPrevSection = () => {
    if (currentSectionIndex > 0) {
      const prevIndex = currentSectionIndex - 1;
      setCurrentSectionIndex(prevIndex);
      onScrollToSection(SECTIONS_META[prevIndex].id);
    }
  };

  const selectSection = (index: number) => {
    setCurrentSectionIndex(index);
    setIsMenuOpen(false);
    onScrollToSection(SECTIONS_META[index].id);
  };

  const current = SECTIONS_META[currentSectionIndex] || SECTIONS_META[0];

  return (
    <>
      {/* Mobile Floating Section One-View Controller (bottom-right, above mobile bottom nav) */}
      <aside 
        aria-label="Section Navigation"
        className="md:hidden fixed bottom-18 right-3 z-30 flex items-center bg-slate-900/90 backdrop-blur-md text-white border border-slate-700/80 rounded-full shadow-xl pl-3 pr-1.5 py-1.5 transition-all text-xs"
      >
        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          className="flex items-center gap-1.5 mr-2 font-semibold text-[11px] text-slate-100 hover:text-white cursor-pointer active:scale-95"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C41822] animate-pulse shrink-0" />
          <span className="text-slate-400 font-bold">{currentSectionIndex + 1}/{SECTIONS_META.length}:</span>
          <span className="font-bold truncate max-w-[120px]">{current.shortName}</span>
          <Layers className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-0.5" />
        </button>

        <div className="flex items-center gap-0.5 border-l border-slate-700 pl-1.5">
          <button
            type="button"
            onClick={goToPrevSection}
            disabled={currentSectionIndex === 0}
            className={`p-1 rounded-full transition-colors ${
              currentSectionIndex === 0
                ? 'text-slate-600 cursor-not-allowed'
                : 'text-slate-300 hover:text-white hover:bg-slate-800 active:scale-90 cursor-pointer'
            }`}
            aria-label="Previous Section View"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={goToNextSection}
            disabled={currentSectionIndex === SECTIONS_META.length - 1}
            className={`p-1 rounded-full transition-colors ${
              currentSectionIndex === SECTIONS_META.length - 1
                ? 'text-slate-600 cursor-not-allowed'
                : 'text-slate-300 hover:text-white hover:bg-slate-800 active:scale-90 cursor-pointer'
            }`}
            aria-label="Next Section View"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </aside>

      {/* Quick Jump Drawer for All 17 One-View Sections */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex flex-col justify-end animate-fade-in">
          <div className="bg-white rounded-t-3xl max-h-[75vh] flex flex-col shadow-2xl border-t border-slate-200">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C41822]">
                  Mobile One-View Navigator
                </span>
                <h3 className="text-base font-extrabold text-slate-900">
                  Jump to Any Section ({SECTIONS_META.length} Views)
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="p-1.5 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 cursor-pointer"
                aria-label="Close Navigator"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto p-3 space-y-1.5 flex-1">
              {SECTIONS_META.map((sec, idx) => {
                const isActive = currentSectionIndex === idx;
                return (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => selectSection(idx)}
                    className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#103578] text-white font-bold shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-800 font-medium'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                        isActive ? 'bg-white text-[#103578]' : 'bg-slate-200 text-slate-700'
                      }`}>
                        {idx + 1}
                      </span>
                      <span className="text-xs truncate">{sec.name}</span>
                    </div>
                    {isActive && <Check className="w-4 h-4 shrink-0 text-white" />}
                  </button>
                );
              })}
            </div>

            <div className="p-3 border-t border-slate-100 bg-slate-50 rounded-b-3xl">
              <p className="text-[11px] text-center text-slate-500">
                Swipe up or down on screen to smoothly glide between views.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
