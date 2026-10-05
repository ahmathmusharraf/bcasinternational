import React, { useState, useEffect } from 'react';
import { BcasLogo } from '../common/BcasLogo';
import { SocialMediaLinks } from '../common/SocialMediaLinks';
import { PageView, DestinationCountry } from '../../types';
import { Menu, X, ChevronDown, Phone, Sparkles, Globe, MapPin } from 'lucide-react';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView, sectionId?: string) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenConsultation
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [destinationsDropdownOpen, setDestinationsDropdownOpen] = useState(false);
  const [mobileDestinationsOpen, setMobileDestinationsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / docHeight) * 100)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ALL_STUDY_DESTINATIONS: {
    country: DestinationCountry;
    flag: string;
    brandName: string;
    tagline: string;
    workRights: string;
  }[] = [
    { country: 'UK', flag: '🇬🇧', brandName: 'Study UK', tagline: '1-Yr Masters & 2-Yr Post-Study Work', workRights: '20 hrs/week' },
    { country: 'Canada', flag: '🇨🇦', brandName: 'EduCanada', tagline: 'Up to 3-Yr PGWP & PR Pathways', workRights: '24 hrs/week' },
    { country: 'Australia', flag: '🇦🇺', brandName: 'Study Australia', tagline: 'World Top 50 Unis & PSW Visas', workRights: '48 hrs/fortnight' },
    { country: 'USA', flag: '🇺🇸', brandName: 'EducationUSA', tagline: '3-Year STEM OPT & Tier-1 Unis', workRights: '20 hrs on-campus' },
    { country: 'Ireland', flag: '🇮🇪', brandName: 'Education in Ireland', tagline: 'Silicon Valley of EU & 2-Yr Stayback', workRights: '20 hrs/week' },
    { country: 'Germany', flag: '🇩🇪', brandName: 'Study in Germany', tagline: 'Low Tuition & 18-Mo Job Seeker', workRights: '140 full days' },
    { country: 'Malaysia', flag: '🇲🇾', brandName: 'Education Malaysia', tagline: 'Affordable UK & Australian Degrees', workRights: 'Flexible' },
    { country: 'Singapore', flag: '🇸🇬', brandName: 'Study Singapore', tagline: 'Global Financial & Tech Capital', workRights: '16 hrs/week' },
    { country: 'UAE', flag: '🇦🇪', brandName: 'Study in Dubai', tagline: 'British Campuses in Dubai & Tax-Free', workRights: 'Permitted' },
    { country: 'Malta', flag: '🇲🇹', brandName: 'Study in Malta', tagline: 'English EU Hub & Schengen Work', workRights: '20 hrs/week' },
    { country: 'Spain', flag: '🇪🇸', brandName: 'Study in Spain', tagline: 'Triple-Accredited Business Schools', workRights: '30 hrs/week' }
  ];

  const handleLinkClick = (page: PageView, sectionId?: string) => {
    setMobileMenuOpen(false);
    setDestinationsDropdownOpen(false);
    onNavigate(page, sectionId);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5'
          : 'bg-white border-b border-slate-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Brand Wordmark / Official BCAS Logo */}
          <div className="flex items-center">
            <button
              onClick={() => handleLinkClick('home')}
              className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#103578] rounded-lg cursor-pointer"
              aria-label="BCAS International University Placement Home"
            >
              <BcasLogo size="sm" />
            </button>
          </div>

          {/* Desktop Navigation Links: Top 5 Most Important Headings Only */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-semibold">
            {/* 1. Home */}
            <button
              onClick={() => handleLinkClick('home')}
              className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                currentPage === 'home'
                  ? 'text-[#103578] bg-[#103578]/10 font-bold'
                  : 'text-slate-700 hover:text-[#103578] hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            {/* 2. Study Destinations with Drop Down Symbol showing ALL 11 study destinations */}
            <div
              className="relative"
              onMouseEnter={() => setDestinationsDropdownOpen(true)}
              onMouseLeave={() => setDestinationsDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => {
                  setDestinationsDropdownOpen(!destinationsDropdownOpen);
                  handleLinkClick('destinations', 'destinations');
                }}
                className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer inline-flex items-center gap-1.5 ${
                  currentPage === 'destinations'
                    ? 'text-[#103578] bg-[#103578]/10 font-bold'
                    : 'text-slate-700 hover:text-[#103578] hover:bg-slate-50'
                }`}
                aria-expanded={destinationsDropdownOpen}
                aria-haspopup="true"
              >
                <span>Study Destinations</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    destinationsDropdownOpen ? 'rotate-180 text-[#103578]' : 'text-slate-500'
                  }`}
                />
              </button>

              {/* Dropdown Showing ALL 11 Study Destinations */}
              {destinationsDropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-[620px] bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-4 z-50 animate-fadeIn">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-[#103578]" />
                      <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                        All 11 Study Destinations
                      </span>
                      <span className="text-[10px] font-bold bg-[#103578]/10 text-[#103578] px-2 py-0.5 rounded-full">
                        Official Boards
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-semibold">Live 2026/2027 Intakes</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 max-h-[380px] overflow-y-auto pr-1">
                    {ALL_STUDY_DESTINATIONS.map((d) => (
                      <button
                        key={d.country}
                        type="button"
                        onClick={() => {
                          setDestinationsDropdownOpen(false);
                          handleLinkClick('destinations', 'destinations');
                        }}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-blue-50/70 border border-transparent hover:border-blue-200/60 transition-all flex items-center justify-between group cursor-pointer"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="text-2xl shrink-0">{d.flag}</span>
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-bold text-slate-800 group-hover:text-[#103578] transition-colors truncate">
                                Study in {d.country}
                              </span>
                              <span className="text-[9px] font-extrabold bg-slate-100 group-hover:bg-[#103578] group-hover:text-white text-slate-600 px-1.5 py-0.2 rounded transition-colors shrink-0">
                                {d.brandName}
                              </span>
                            </div>
                            <span className="text-[11px] text-slate-400 block truncate group-hover:text-slate-600 transition-colors">
                              {d.tagline}
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold text-slate-400 group-hover:text-[#C41822] shrink-0 ml-1">
                          {d.workRights}
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => {
                        setDestinationsDropdownOpen(false);
                        handleLinkClick('destinations', 'destinations');
                      }}
                      className="text-xs font-bold text-[#103578] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Explore All 11 Destination Guides & Requirements</span>
                      <span>→</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setDestinationsDropdownOpen(false);
                        handleLinkClick('work-pr', 'work-pr');
                      }}
                      className="text-xs font-bold text-[#C41822] hover:underline cursor-pointer"
                    >
                      Compare Work Rights & PR Pathways →
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Universities */}
            <button
              onClick={() => handleLinkClick('universities', 'universities')}
              className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                currentPage === 'universities'
                  ? 'text-[#103578] bg-[#103578]/10 font-bold'
                  : 'text-slate-700 hover:text-[#103578] hover:bg-slate-50'
              }`}
            >
              Universities
            </button>

            {/* 4. Work Opportunities & PR */}
            <button
              onClick={() => handleLinkClick('work-pr', 'work-pr')}
              className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                currentPage === 'work-pr'
                  ? 'text-[#103578] bg-[#103578]/10 font-bold'
                  : 'text-slate-700 hover:text-[#103578] hover:bg-slate-50'
              }`}
            >
              <span>Work & PR</span>
              <span className="text-[9px] font-extrabold bg-[#C41822] text-white px-1.5 py-0.2 rounded-full">
                PR
              </span>
            </button>

            {/* 5. Blog */}
            <button
              onClick={() => handleLinkClick('blog', 'blog')}
              className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                currentPage === 'blog'
                  ? 'text-[#103578] bg-[#103578]/10 font-bold'
                  : 'text-slate-700 hover:text-[#103578] hover:bg-slate-50'
              }`}
            >
              Blog
            </button>
          </nav>

          {/* Action & Quick Contact */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+94117999300"
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[#103578] py-1.5 px-2.5 rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap shrink-0"
              title="Call Hotline"
            >
              <Phone className="w-3.5 h-3.5 text-[#103578]" />
              <span className="tabular-nums tracking-wide">+94 11 7 999 300</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="py-2.5 px-4.5 bg-[#C41822] hover:bg-[#a3141a] text-white text-xs font-bold rounded-xl shadow-xs hover:shadow-md transition-all transform active:scale-95 whitespace-nowrap flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-rose-200" />
              <span>Book Free Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenConsultation}
              className="sm:hidden py-1.5 px-2.5 bg-[#C41822] text-white text-[11px] font-bold rounded-lg cursor-pointer"
            >
              Free Assessment
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#103578] hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-fadeIn max-h-[85vh] overflow-y-auto">
          {/* Top 5 Most Important Headings Only */}
          <div className="space-y-1.5 mb-4">
            {/* 1. Home */}
            <button
              onClick={() => handleLinkClick('home')}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold cursor-pointer transition-colors ${
                currentPage === 'home' ? 'text-[#103578] bg-blue-50/80 font-extrabold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            {/* 2. Study Destinations with Drop Down Symbol showing ALL 11 study destinations */}
            <div className="rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => setMobileDestinationsOpen(!mobileDestinationsOpen)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold cursor-pointer transition-colors flex items-center justify-between ${
                  currentPage === 'destinations' ? 'text-[#103578] bg-blue-50/80 font-extrabold' : 'text-slate-700 hover:bg-slate-50'
                }`}
                aria-expanded={mobileDestinationsOpen}
              >
                <div className="flex items-center gap-2">
                  <span>Study Destinations</span>
                  <span className="text-[10px] font-bold bg-[#103578]/10 text-[#103578] px-2 py-0.5 rounded-full">
                    11 Countries
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileDestinationsOpen ? 'rotate-180 text-[#103578]' : 'text-slate-400'
                  }`}
                />
              </button>

              {mobileDestinationsOpen && (
                <div className="pl-2 pr-1 py-1.5 space-y-1 bg-slate-50/90 rounded-xl my-1 border border-slate-200/80 animate-fadeIn">
                  <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                    <span>All 11 Study Destinations</span>
                    <span>Intakes 2026/27</span>
                  </div>
                  {ALL_STUDY_DESTINATIONS.map((d) => (
                    <button
                      key={d.country}
                      type="button"
                      onClick={() => handleLinkClick('destinations', 'destinations')}
                      className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-white hover:text-[#103578] flex items-center justify-between transition-all cursor-pointer shadow-2xs hover:shadow-xs"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="text-xl shrink-0">{d.flag}</span>
                        <div className="min-w-0">
                          <span className="font-bold text-slate-800 block text-xs truncate">
                            Study in {d.country}
                          </span>
                          <span className="text-[10px] text-slate-400 block truncate">{d.tagline}</span>
                        </div>
                      </div>
                      <span className="text-[9px] font-extrabold text-[#103578] bg-blue-100/60 px-1.5 py-0.5 rounded shrink-0 ml-1">
                        {d.brandName}
                      </span>
                    </button>
                  ))}
                  <div className="pt-2 px-2 border-t border-slate-200/70">
                    <button
                      type="button"
                      onClick={() => handleLinkClick('destinations', 'destinations')}
                      className="w-full py-1.5 text-center text-xs font-bold text-[#103578] hover:underline cursor-pointer"
                    >
                      Explore All 11 Destinations Guide →
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Universities */}
            <button
              onClick={() => handleLinkClick('universities', 'universities')}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold cursor-pointer transition-colors ${
                currentPage === 'universities' ? 'text-[#103578] bg-blue-50/80 font-extrabold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Universities
            </button>

            {/* 4. Work Opportunities & PR */}
            <button
              onClick={() => handleLinkClick('work-pr', 'work-pr')}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold cursor-pointer transition-colors flex items-center justify-between ${
                currentPage === 'work-pr' ? 'text-[#103578] bg-blue-50/80 font-extrabold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>Work & PR</span>
              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#C41822] text-white">
                PR Guide
              </span>
            </button>

            {/* 5. Blog */}
            <button
              onClick={() => handleLinkClick('blog', 'blog')}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold cursor-pointer transition-colors flex items-center justify-between ${
                currentPage === 'blog' ? 'text-[#103578] bg-blue-50/80 font-extrabold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>Blog</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                New
              </span>
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 px-4 bg-[#C41822] text-white text-xs font-bold rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-rose-200" />
              <span>Book Free Consultation</span>
            </button>

            <div className="text-xs text-slate-500 text-center space-y-1 pt-1">
              <div>Placement Hotline: <strong className="text-slate-800">+94 11 7 999 300</strong></div>
              <div>Colombo · Jaffna · Kalmunai · Kandy</div>
            </div>

            <div className="pt-2 flex flex-col items-center gap-1.5 border-t border-slate-100">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Follow BCAS On Social Media</span>
              <SocialMediaLinks variant="light" size="sm" />
            </div>
          </div>
        </div>
      )}

      {/* Creative Smooth Reading Progress Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-slate-100/60 overflow-hidden pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#103578] via-[#009FE3] to-[#C41822] transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
};
