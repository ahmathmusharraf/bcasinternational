import React from 'react';
import { Home, School, Compass, Briefcase, FileText } from 'lucide-react';
import { PageView } from '../../types';

interface MobileBottomNavProps {
  currentPage: PageView;
  onNavigate: (page: PageView, sectionId?: string) => void;
  onOpenEnquire?: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentPage,
  onNavigate
}) => {
  return (
    <nav 
      aria-label="Mobile Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 h-16 px-1 flex items-center justify-around shadow-[0_-4px_12px_rgba(0,0,0,0.05)]"
    >
      {/* 1. Home */}
      <button
        onClick={() => onNavigate('home')}
        className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg transition-colors cursor-pointer flex-1 ${
          currentPage === 'home' ? 'text-[#103578] font-bold' : 'text-slate-500 hover:text-slate-900'
        }`}
      >
        <Home className={`w-5 h-5 mb-0.5 ${currentPage === 'home' ? 'text-[#103578]' : 'text-slate-500'}`} />
        <span className="text-[10px]">Home</span>
      </button>

      {/* 2. Destinations */}
      <button
        onClick={() => onNavigate('destinations', 'destinations')}
        className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg transition-colors cursor-pointer flex-1 ${
          currentPage === 'destinations' ? 'text-[#103578] font-bold' : 'text-slate-500 hover:text-slate-900'
        }`}
      >
        <Compass className={`w-5 h-5 mb-0.5 ${currentPage === 'destinations' ? 'text-[#103578]' : 'text-slate-500'}`} />
        <span className="text-[10px]">Destinations</span>
      </button>

      {/* 3. Universities */}
      <button
        onClick={() => onNavigate('universities', 'universities')}
        className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg transition-colors cursor-pointer flex-1 ${
          currentPage === 'universities' ? 'text-[#103578] font-bold' : 'text-slate-500 hover:text-slate-900'
        }`}
      >
        <School className={`w-5 h-5 mb-0.5 ${currentPage === 'universities' ? 'text-[#103578]' : 'text-slate-500'}`} />
        <span className="text-[10px]">Universities</span>
      </button>

      {/* 4. Work & PR */}
      <button
        onClick={() => onNavigate('work-pr', 'work-pr')}
        className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg transition-colors cursor-pointer flex-1 relative ${
          currentPage === 'work-pr' ? 'text-[#103578] font-bold' : 'text-slate-500 hover:text-slate-900'
        }`}
      >
        <div className="relative">
          <Briefcase className={`w-5 h-5 mb-0.5 ${currentPage === 'work-pr' ? 'text-[#103578]' : 'text-slate-500'}`} />
          <span className="absolute -top-1 -right-2 text-[8px] font-extrabold bg-[#C41822] text-white px-1 py-0.2 rounded-full leading-tight">
            PR
          </span>
        </div>
        <span className="text-[10px]">Work & PR</span>
      </button>

      {/* 5. Insights (Blog) */}
      <button
        onClick={() => onNavigate('blog', 'blog')}
        className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg transition-colors cursor-pointer flex-1 relative ${
          currentPage === 'blog' ? 'text-[#103578] font-bold' : 'text-slate-500 hover:text-slate-900'
        }`}
      >
        <FileText className={`w-5 h-5 mb-0.5 ${currentPage === 'blog' ? 'text-[#103578]' : 'text-slate-500'}`} />
        <span className="text-[10px]">Insights</span>
      </button>
    </nav>
  );
};

