import React, { useState, useEffect } from 'react';
import { BcasLogo } from '../common/BcasLogo';
import { SocialMediaLinks } from '../common/SocialMediaLinks';
import { PageView, DestinationCountry } from '../../types';
import { 
  Menu, X, ChevronDown, Phone, Sparkles, Globe, MapPin, 
  School, Briefcase, BookOpen, Award, Calculator, ShieldCheck, 
  Compass, FileText, ArrowRight, CheckCircle2, GraduationCap, Users
} from 'lucide-react';

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

  // Dropdown states for all 5 top headline headings
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [destinationsDropdownOpen, setDestinationsDropdownOpen] = useState(false);
  const [universitiesDropdownOpen, setUniversitiesDropdownOpen] = useState(false);
  const [workPrDropdownOpen, setWorkPrDropdownOpen] = useState(false);
  const [insightsDropdownOpen, setInsightsDropdownOpen] = useState(false);

  // Mobile accordion toggle states for all 5 headline headings
  const [mobileHomeOpen, setMobileHomeOpen] = useState(false);
  const [mobileDestinationsOpen, setMobileDestinationsOpen] = useState(false);
  const [mobileUniversitiesOpen, setMobileUniversitiesOpen] = useState(false);
  const [mobileWorkPrOpen, setMobileWorkPrOpen] = useState(false);
  const [mobileInsightsOpen, setMobileInsightsOpen] = useState(false);

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
    setHomeDropdownOpen(false);
    setDestinationsDropdownOpen(false);
    setUniversitiesDropdownOpen(false);
    setWorkPrDropdownOpen(false);
    setInsightsDropdownOpen(false);
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

          {/* Desktop Navigation Links: Dropdown Headline Headings for All Sections */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-semibold">
            {/* 1. Home Heading with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setHomeDropdownOpen(true)}
              onMouseLeave={() => setHomeDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => {
                  setHomeDropdownOpen(!homeDropdownOpen);
                  handleLinkClick('home', 'home');
                }}
                className={`px-3 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer inline-flex items-center gap-1.5 ${
                  currentPage === 'home'
                    ? 'text-[#103578] bg-[#103578]/10 font-bold'
                    : 'text-slate-700 hover:text-[#103578] hover:bg-slate-50'
                }`}
                aria-expanded={homeDropdownOpen}
              >
                <span>Home</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    homeDropdownOpen ? 'rotate-180 text-[#103578]' : 'text-slate-400'
                  }`}
                />
              </button>

              {homeDropdownOpen && (
                <div className="absolute left-0 mt-1 w-[380px] bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-3 z-50 animate-fadeIn">
                  <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-slate-100">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                      <School className="w-3.5 h-3.5 text-[#103578]" />
                      BCAS Gateway & Heritage
                    </span>
                    <span className="text-[10px] font-bold text-slate-400">27+ Years</span>
                  </div>

                  <div className="space-y-1">
                    <button
                      type="button"
                      onClick={() => handleLinkClick('home', 'home')}
                      className="w-full text-left p-2 rounded-xl hover:bg-blue-50/70 border border-transparent hover:border-blue-200/60 transition-all flex items-start gap-2.5 group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#103578] flex items-center justify-center shrink-0 mt-0.5">
                        <Globe className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-800 group-hover:text-[#103578] block">
                          Hero & University Gateway
                        </span>
                        <span className="text-[11px] text-slate-400 block">Direct admission partner representation</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleLinkClick('home', 'finder')}
                      className="w-full text-left p-2 rounded-xl hover:bg-blue-50/70 border border-transparent hover:border-blue-200/60 transition-all flex items-start gap-2.5 group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-rose-50 text-[#C41822] flex items-center justify-center shrink-0 mt-0.5">
                        <Compass className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-800 group-hover:text-[#103578] block">
                          University Quick Finder
                        </span>
                        <span className="text-[11px] text-slate-400 block">Filter 50+ universities by country & intake</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleLinkClick('about')}
                      className="w-full text-left p-2 rounded-xl hover:bg-blue-50/70 border border-transparent hover:border-blue-200/60 transition-all flex items-start gap-2.5 group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Award className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-800 group-hover:text-[#103578] block">
                          27+ Years Heritage & Legacy
                        </span>
                        <span className="text-[11px] text-slate-400 block">Established in 1999, bridging global education</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleLinkClick('why-bcas')}
                      className="w-full text-left p-2 rounded-xl hover:bg-blue-50/70 border border-transparent hover:border-blue-200/60 transition-all flex items-start gap-2.5 group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-800 group-hover:text-[#103578] block">
                          8 Core Advantages
                        </span>
                        <span className="text-[11px] text-slate-400 block">Zero agency fees & direct institutional ties</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleLinkClick('stories')}
                      className="w-full text-left p-2 rounded-xl hover:bg-blue-50/70 border border-transparent hover:border-blue-200/60 transition-all flex items-start gap-2.5 group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Users className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-800 group-hover:text-[#103578] block">
                          Student Testimonials
                        </span>
                        <span className="text-[11px] text-slate-400 block">Alumni success stories in UK, Canada & Aus</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleLinkClick('contact')}
                      className="w-full text-left p-2 rounded-xl hover:bg-blue-50/70 border border-transparent hover:border-blue-200/60 transition-all flex items-start gap-2.5 group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                        <MapPin className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-800 group-hover:text-[#103578] block">
                          Campuses Across Sri Lanka
                        </span>
                        <span className="text-[11px] text-slate-400 block">Colombo, Jaffna, Kalmunai & Kandy</span>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Study Destinations Heading with Dropdown */}
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
                className={`px-3 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer inline-flex items-center gap-1.5 ${
                  currentPage === 'destinations'
                    ? 'text-[#103578] bg-[#103578]/10 font-bold'
                    : 'text-slate-700 hover:text-[#103578] hover:bg-slate-50'
                }`}
                aria-expanded={destinationsDropdownOpen}
              >
                <span>Study Destinations</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    destinationsDropdownOpen ? 'rotate-180 text-[#103578]' : 'text-slate-400'
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
                        onClick={() => handleLinkClick('destinations', 'destinations')}
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
                      onClick={() => handleLinkClick('destinations', 'destinations')}
                      className="text-xs font-bold text-[#103578] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Explore All 11 Destination Guides & Requirements</span>
                      <span>→</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleLinkClick('work-pr', 'work-pr')}
                      className="text-xs font-bold text-[#C41822] hover:underline cursor-pointer"
                    >
                      Compare Work Rights & PR Pathways →
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Universities Heading with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setUniversitiesDropdownOpen(true)}
              onMouseLeave={() => setUniversitiesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => {
                  setUniversitiesDropdownOpen(!universitiesDropdownOpen);
                  handleLinkClick('universities', 'universities');
                }}
                className={`px-3 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer inline-flex items-center gap-1.5 ${
                  currentPage === 'universities'
                    ? 'text-[#103578] bg-[#103578]/10 font-bold'
                    : 'text-slate-700 hover:text-[#103578] hover:bg-slate-50'
                }`}
                aria-expanded={universitiesDropdownOpen}
              >
                <span>Universities</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    universitiesDropdownOpen ? 'rotate-180 text-[#103578]' : 'text-slate-400'
                  }`}
                />
              </button>

              {universitiesDropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-[460px] bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-3.5 z-50 animate-fadeIn">
                  <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-100">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                      <School className="w-3.5 h-3.5 text-[#103578]" />
                      Universities & Academic Pathways
                    </span>
                    <span className="text-[10px] font-bold bg-[#103578]/10 text-[#103578] px-2 py-0.5 rounded-full">
                      Direct Representation
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-1">
                    <button
                      type="button"
                      onClick={() => handleLinkClick('universities', 'universities')}
                      className="w-full text-left p-2 rounded-xl hover:bg-blue-50/70 border border-transparent hover:border-blue-200/60 transition-all flex items-start gap-2.5 group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#103578] flex items-center justify-center shrink-0 mt-0.5">
                        <School className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-800 group-hover:text-[#103578] block">
                          Featured International Universities
                        </span>
                        <span className="text-[11px] text-slate-400 block">Accredited partner universities across UK, Canada & Aus</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleLinkClick('home', 'finder')}
                      className="w-full text-left p-2 rounded-xl hover:bg-blue-50/70 border border-transparent hover:border-blue-200/60 transition-all flex items-start gap-2.5 group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-rose-50 text-[#C41822] flex items-center justify-center shrink-0 mt-0.5">
                        <Compass className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-800 group-hover:text-[#103578] block">
                          University Quick Finder
                        </span>
                        <span className="text-[11px] text-slate-400 block">Search by country, program level & intake date</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleLinkClick('pathway')}
                      className="w-full text-left p-2 rounded-xl hover:bg-blue-50/70 border border-transparent hover:border-blue-200/60 transition-all flex items-start gap-2.5 group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Sparkles className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-800 group-hover:text-[#103578] block">
                          Study Path Wizard (3 Steps)
                        </span>
                        <span className="text-[11px] text-slate-400 block">Structured academic roadmap & entry standards</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleLinkClick('courses')}
                      className="w-full text-left p-2 rounded-xl hover:bg-blue-50/70 border border-transparent hover:border-blue-200/60 transition-all flex items-start gap-2.5 group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <BookOpen className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-800 group-hover:text-[#103578] block">
                          Popular Courses & Degrees
                        </span>
                        <span className="text-[11px] text-slate-400 block">High-demand programs in IT, Business, Engineering & Health</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleLinkClick('scholarships')}
                      className="w-full text-left p-2 rounded-xl hover:bg-blue-50/70 border border-transparent hover:border-blue-200/60 transition-all flex items-start gap-2.5 group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Award className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-800 group-hover:text-[#103578] block">
                          Scholarships & Regional Bursaries
                        </span>
                        <span className="text-[11px] text-slate-400 block">Merit awards and 10%–50% tuition reduction schemes</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleLinkClick('cost-calculator')}
                      className="w-full text-left p-2 rounded-xl hover:bg-blue-50/70 border border-transparent hover:border-blue-200/60 transition-all flex items-start gap-2.5 group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Calculator className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-800 group-hover:text-[#103578] block">
                          Cost & Currency Estimator
                        </span>
                        <span className="text-[11px] text-slate-400 block">Tuition, living expenses & real-time LKR conversions</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleLinkClick('ielts')}
                      className="w-full text-left p-2 rounded-xl hover:bg-blue-50/70 border border-transparent hover:border-blue-200/60 transition-all flex items-start gap-2.5 group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#103578] flex items-center justify-center shrink-0 mt-0.5">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-800 group-hover:text-[#103578] block">
                          IELTS Academy & Waiver Desk
                        </span>
                        <span className="text-[11px] text-slate-400 block">British Council prep & 100% university English waivers</span>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Work & PR Heading with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setWorkPrDropdownOpen(true)}
              onMouseLeave={() => setWorkPrDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => {
                  setWorkPrDropdownOpen(!workPrDropdownOpen);
                  handleLinkClick('work-pr', 'work-pr');
                }}
                className={`px-3 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer inline-flex items-center gap-1.5 ${
                  currentPage === 'work-pr'
                    ? 'text-[#103578] bg-[#103578]/10 font-bold'
                    : 'text-slate-700 hover:text-[#103578] hover:bg-slate-50'
                }`}
                aria-expanded={workPrDropdownOpen}
              >
                <span>Work & PR</span>
                <span className="text-[9px] font-extrabold bg-[#C41822] text-white px-1.5 py-0.2 rounded-full">
                  PR
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    workPrDropdownOpen ? 'rotate-180 text-[#103578]' : 'text-slate-400'
                  }`}
                />
              </button>

              {workPrDropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-[440px] bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-3.5 z-50 animate-fadeIn">
                  <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-100">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-[#C41822]" />
                      Employment Rights & PR Pathways
                    </span>
                    <span className="text-[10px] font-bold bg-rose-50 text-[#C41822] px-2 py-0.5 rounded-full">
                      11 Countries
                    </span>
                  </div>

                  <div className="space-y-1">
                    <button
                      type="button"
                      onClick={() => handleLinkClick('work-pr', 'work-pr')}
                      className="w-full text-left p-2 rounded-xl hover:bg-blue-50/70 border border-transparent hover:border-blue-200/60 transition-all flex items-start gap-2.5 group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#103578] flex items-center justify-center shrink-0 mt-0.5">
                        <Briefcase className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-800 group-hover:text-[#103578] block">
                          Country Work Opportunities Overview
                        </span>
                        <span className="text-[11px] text-slate-400 block">Part-time wages, vacation hours & student jobs</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleLinkClick('work-pr', 'work-pr')}
                      className="w-full text-left p-2 rounded-xl hover:bg-blue-50/70 border border-transparent hover:border-blue-200/60 transition-all flex items-start gap-2.5 group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Award className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-800 group-hover:text-[#103578] block">
                          Post-Study Work Visas (PSW / PGWP / OPT)
                        </span>
                        <span className="text-[11px] text-slate-400 block">2 to 3 years open graduate work rights</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleLinkClick('work-pr', 'work-pr')}
                      className="w-full text-left p-2 rounded-xl hover:bg-blue-50/70 border border-transparent hover:border-blue-200/60 transition-all flex items-start gap-2.5 group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-rose-50 text-[#C41822] flex items-center justify-center shrink-0 mt-0.5">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-800 group-hover:text-[#103578] block">
                          Permanent Residency (PR) Pathways
                        </span>
                        <span className="text-[11px] text-slate-400 block">Express Entry, CRS points & regional settlement streams</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleLinkClick('work-pr', 'work-pr')}
                      className="w-full text-left p-2 rounded-xl hover:bg-blue-50/70 border border-transparent hover:border-blue-200/60 transition-all flex items-start gap-2.5 group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Compass className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-800 group-hover:text-[#103578] block">
                          In-Demand Skilled Occupations
                        </span>
                        <span className="text-[11px] text-slate-400 block">Tech, healthcare, engineering & trade priority lists</span>
                      </div>
                    </button>

                    <div className="pt-2 mt-2 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => handleLinkClick('work-pr', 'dedicated-work-pr')}
                        className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-[#103578] to-[#1e40af] text-white text-xs font-bold flex items-center justify-between hover:shadow-md transition-all cursor-pointer"
                      >
                        <span>Open Comprehensive Work & PR Guide View</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 5. Insights Heading with Dropdown (like Insights under coming blogs page) */}
            <div
              className="relative"
              onMouseEnter={() => setInsightsDropdownOpen(true)}
              onMouseLeave={() => setInsightsDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => {
                  setInsightsDropdownOpen(!insightsDropdownOpen);
                  handleLinkClick('blog', 'blog');
                }}
                className={`px-3 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer inline-flex items-center gap-1.5 ${
                  currentPage === 'blog'
                    ? 'text-[#103578] bg-[#103578]/10 font-bold'
                    : 'text-slate-700 hover:text-[#103578] hover:bg-slate-50'
                }`}
                aria-expanded={insightsDropdownOpen}
              >
                <span>Insights</span>
                <span className="text-[9px] font-extrabold bg-emerald-600 text-white px-1.5 py-0.2 rounded-full">
                  Blog
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    insightsDropdownOpen ? 'rotate-180 text-[#103578]' : 'text-slate-400'
                  }`}
                />
              </button>

              {insightsDropdownOpen && (
                <div className="absolute right-0 mt-1 w-[460px] bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-3.5 z-50 animate-fadeIn">
                  <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-100">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#C41822]" />
                      Knowledge Base & Migration Insights
                    </span>
                    <span className="text-[10px] font-bold text-slate-400">By Ahmath Musharraf</span>
                  </div>

                  <div className="space-y-1">
                    <button
                      type="button"
                      onClick={() => handleLinkClick('blog', 'blog')}
                      className="w-full text-left p-2 rounded-xl hover:bg-blue-50/70 border border-transparent hover:border-blue-200/60 transition-all flex items-start gap-2.5 group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-rose-50 text-[#C41822] flex items-center justify-center shrink-0 mt-0.5">
                        <BookOpen className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-800 group-hover:text-[#103578] block">
                          International Education & PR Blog Page
                        </span>
                        <span className="text-[11px] text-slate-400 block">Verified post-study work, PR, and student visa updates</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleLinkClick('blog', 'blog')}
                      className="w-full text-left p-2 rounded-xl hover:bg-blue-50/70 border border-transparent hover:border-blue-200/60 transition-all flex items-start gap-2.5 group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#103578] flex items-center justify-center shrink-0 mt-0.5">
                        <FileText className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-800 group-hover:text-[#103578] block">
                          2026 Post-Study Work Visas Comparison Guide
                        </span>
                        <span className="text-[11px] text-slate-400 block">UK, Canada, Australia, Ireland & USA stayback compared</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleLinkClick('blog', 'blog')}
                      className="w-full text-left p-2 rounded-xl hover:bg-blue-50/70 border border-transparent hover:border-blue-200/60 transition-all flex items-start gap-2.5 group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-800 group-hover:text-[#103578] block">
                          Canada PGWP & Express Entry PR Points Strategy
                        </span>
                        <span className="text-[11px] text-slate-400 block">Maximizing CRS scores through Canadian credentials</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleLinkClick('blog', 'blog')}
                      className="w-full text-left p-2 rounded-xl hover:bg-blue-50/70 border border-transparent hover:border-blue-200/60 transition-all flex items-start gap-2.5 group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Award className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-800 group-hover:text-[#103578] block">
                          Top 10 High-Value Merit Scholarships Guide
                        </span>
                        <span className="text-[11px] text-slate-400 block">How Sri Lankan students secure up to 50% bursaries</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleLinkClick('blog', 'blog')}
                      className="w-full text-left p-2 rounded-xl hover:bg-blue-50/70 border border-transparent hover:border-blue-200/60 transition-all flex items-start gap-2.5 group cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-800 group-hover:text-[#103578] block">
                          100% IELTS Waiver Playbook
                        </span>
                        <span className="text-[11px] text-slate-400 block">Direct admission eligibility without English tests</span>
                      </div>
                    </button>

                    <div className="pt-2 mt-2 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => handleLinkClick('blog', 'dedicated-blog')}
                        className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-[#103578] to-[#C41822] text-white text-xs font-bold flex items-center justify-between hover:shadow-md transition-all cursor-pointer"
                      >
                        <span>Open Dedicated Insights & Blog Portal</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 6. Sub-Pages Hub Navigation Link */}
            <button
              type="button"
              onClick={() => {
                if (currentPage === 'home') {
                  document.getElementById('sub-pages')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  handleLinkClick('home', 'sub-pages');
                }
              }}
              className="px-3 py-2 rounded-xl text-slate-700 hover:text-[#103578] hover:bg-slate-50 transition-all whitespace-nowrap cursor-pointer inline-flex items-center gap-1.5"
            >
              <Compass className="w-4 h-4 text-[#C41822]" />
              <span>Sub-Pages Hub</span>
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
          {/* Top 5 Most Important Headings with Dropdown Headline Headings */}
          <div className="space-y-1.5 mb-4">
            {/* 1. Home with Dropdown Headline Heading */}
            <div className="rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => setMobileHomeOpen(!mobileHomeOpen)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold cursor-pointer transition-colors flex items-center justify-between ${
                  currentPage === 'home' ? 'text-[#103578] bg-blue-50/80 font-extrabold' : 'text-slate-700 hover:bg-slate-50'
                }`}
                aria-expanded={mobileHomeOpen}
              >
                <div className="flex items-center gap-2">
                  <span>Home</span>
                  <span className="text-[10px] font-bold bg-[#103578]/10 text-[#103578] px-2 py-0.5 rounded-full">
                    Gateway
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileHomeOpen ? 'rotate-180 text-[#103578]' : 'text-slate-400'
                  }`}
                />
              </button>

              {mobileHomeOpen && (
                <div className="pl-2 pr-1 py-1.5 space-y-1 bg-slate-50/90 rounded-xl my-1 border border-slate-200/80 animate-fadeIn">
                  <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-600 flex items-center justify-between border-b border-slate-200/60 pb-1 mb-1">
                    <span className="flex items-center gap-1.5">
                      <School className="w-3.5 h-3.5 text-[#103578]" />
                      BCAS Gateway & Heritage
                    </span>
                    <span className="text-[10px] font-bold text-slate-400">27+ Years</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('home', 'home')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-white hover:text-[#103578] flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <Globe className="w-3.5 h-3.5 text-[#103578] shrink-0" />
                    <div>
                      <span className="font-bold text-slate-800 block text-xs">Hero & University Gateway</span>
                      <span className="text-[10px] text-slate-400 block">Direct admission partner representation</span>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('home', 'finder')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-white hover:text-[#103578] flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <Compass className="w-3.5 h-3.5 text-[#C41822] shrink-0" />
                    <div>
                      <span className="font-bold text-slate-800 block text-xs">University Quick Finder</span>
                      <span className="text-[10px] text-slate-400 block">Filter 50+ universities by country & intake</span>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('about')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-white hover:text-[#103578] flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <Award className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-800 block text-xs">27+ Years Heritage & Legacy</span>
                      <span className="text-[10px] text-slate-400 block">Established 1999, pioneer campus network</span>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('why-bcas')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-white hover:text-[#103578] flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-800 block text-xs">8 Core Advantages</span>
                      <span className="text-[10px] text-slate-400 block">Zero agency fees & direct university admissions</span>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('stories')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-white hover:text-[#103578] flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <Users className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-800 block text-xs">Student Testimonials</span>
                      <span className="text-[10px] text-slate-400 block">Alumni success in UK, Canada, Aus & NZ</span>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('contact')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-white hover:text-[#103578] flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-800 block text-xs">Campuses Across Sri Lanka</span>
                      <span className="text-[10px] text-slate-400 block">Colombo, Jaffna, Kalmunai & Kandy</span>
                    </div>
                  </button>
                </div>
              )}
            </div>

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
                  <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-600 flex items-center justify-between border-b border-slate-200/60 pb-1 mb-1">
                    <span className="flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-[#103578]" />
                      All 11 Study Destinations
                    </span>
                    <span className="text-[10px] font-bold text-slate-400">Intakes 2026/27</span>
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

            {/* 3. Universities with Dropdown Headline Heading */}
            <div className="rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => setMobileUniversitiesOpen(!mobileUniversitiesOpen)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold cursor-pointer transition-colors flex items-center justify-between ${
                  currentPage === 'universities' ? 'text-[#103578] bg-blue-50/80 font-extrabold' : 'text-slate-700 hover:bg-slate-50'
                }`}
                aria-expanded={mobileUniversitiesOpen}
              >
                <div className="flex items-center gap-2">
                  <span>Universities</span>
                  <span className="text-[10px] font-bold bg-[#103578]/10 text-[#103578] px-2 py-0.5 rounded-full">
                    Direct Partner
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileUniversitiesOpen ? 'rotate-180 text-[#103578]' : 'text-slate-400'
                  }`}
                />
              </button>

              {mobileUniversitiesOpen && (
                <div className="pl-2 pr-1 py-1.5 space-y-1 bg-slate-50/90 rounded-xl my-1 border border-slate-200/80 animate-fadeIn">
                  <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-600 flex items-center justify-between border-b border-slate-200/60 pb-1 mb-1">
                    <span className="flex items-center gap-1.5">
                      <School className="w-3.5 h-3.5 text-[#103578]" />
                      Universities & Academic Pathways
                    </span>
                    <span className="text-[10px] font-bold text-slate-400">Direct Ties</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('universities', 'universities')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-white hover:text-[#103578] flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <School className="w-3.5 h-3.5 text-[#103578] shrink-0" />
                    <div>
                      <span className="font-bold text-slate-800 block text-xs">Featured International Universities</span>
                      <span className="text-[10px] text-slate-400 block">Accredited partner unis across 11 destinations</span>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('home', 'finder')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-white hover:text-[#103578] flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <Compass className="w-3.5 h-3.5 text-[#C41822] shrink-0" />
                    <div>
                      <span className="font-bold text-slate-800 block text-xs">University Quick Finder</span>
                      <span className="text-[10px] text-slate-400 block">Filter by destination, intake and degree</span>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('pathway')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-white hover:text-[#103578] flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-800 block text-xs">Study Path Wizard (3 Steps)</span>
                      <span className="text-[10px] text-slate-400 block">Personalized academic roadmap to university</span>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('courses')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-white hover:text-[#103578] flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-800 block text-xs">Popular Courses & Degrees</span>
                      <span className="text-[10px] text-slate-400 block">IT, Computing, Business, Engineering & Health</span>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('scholarships')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-white hover:text-[#103578] flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <Award className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-800 block text-xs">Scholarships & Regional Bursaries</span>
                      <span className="text-[10px] text-slate-400 block">10%–50% tuition reduction opportunities</span>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('cost-calculator')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-white hover:text-[#103578] flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <Calculator className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-800 block text-xs">Cost & Currency Estimator</span>
                      <span className="text-[10px] text-slate-400 block">Tuition, living expenses & LKR currency calculator</span>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('ielts')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-white hover:text-[#103578] flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-[#103578] shrink-0" />
                    <div>
                      <span className="font-bold text-slate-800 block text-xs">IELTS Academy & Waiver Desk</span>
                      <span className="text-[10px] text-slate-400 block">British Council coaching & 100% waivers</span>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* 4. Work Opportunities & PR with Dropdown Headline Heading */}
            <div className="rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => setMobileWorkPrOpen(!mobileWorkPrOpen)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold cursor-pointer transition-colors flex items-center justify-between ${
                  currentPage === 'work-pr' ? 'text-[#103578] bg-blue-50/80 font-extrabold' : 'text-slate-700 hover:bg-slate-50'
                }`}
                aria-expanded={mobileWorkPrOpen}
              >
                <div className="flex items-center gap-2">
                  <span>Work & PR</span>
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#C41822] text-white">
                    PR Guide
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileWorkPrOpen ? 'rotate-180 text-[#103578]' : 'text-slate-400'
                  }`}
                />
              </button>

              {mobileWorkPrOpen && (
                <div className="pl-2 pr-1 py-1.5 space-y-1 bg-slate-50/90 rounded-xl my-1 border border-slate-200/80 animate-fadeIn">
                  <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-600 flex items-center justify-between border-b border-slate-200/60 pb-1 mb-1">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-[#C41822]" />
                      Employment Rights & PR Pathways
                    </span>
                    <span className="text-[10px] font-bold text-slate-400">11 Countries</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('work-pr', 'work-pr')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-white hover:text-[#103578] flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <Briefcase className="w-3.5 h-3.5 text-[#103578] shrink-0" />
                    <div>
                      <span className="font-bold text-slate-800 block text-xs">Country Work Opportunities Overview</span>
                      <span className="text-[10px] text-slate-400 block">Part-time wages, vacation hours & student jobs</span>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('work-pr', 'work-pr')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-white hover:text-[#103578] flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <Award className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-800 block text-xs">Post-Study Work Visas (PSW / PGWP)</span>
                      <span className="text-[10px] text-slate-400 block">2 to 3 years open graduate work rights</span>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('work-pr', 'work-pr')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-white hover:text-[#103578] flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C41822] shrink-0" />
                    <div>
                      <span className="font-bold text-slate-800 block text-xs">Permanent Residency (PR) Pathways</span>
                      <span className="text-[10px] text-slate-400 block">Express Entry, CRS points & regional settlement</span>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('work-pr', 'work-pr')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-white hover:text-[#103578] flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <Compass className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-800 block text-xs">In-Demand Skilled Occupations</span>
                      <span className="text-[10px] text-slate-400 block">Tech, health, engineering & trade priority lists</span>
                    </div>
                  </button>
                  <div className="pt-2 px-2 border-t border-slate-200/70">
                    <button
                      type="button"
                      onClick={() => handleLinkClick('work-pr', 'dedicated-work-pr')}
                      className="w-full py-2 px-3 rounded-lg bg-gradient-to-r from-[#103578] to-[#1e40af] text-white text-xs font-bold flex items-center justify-between shadow-xs cursor-pointer"
                    >
                      <span>Open Comprehensive Work & PR Guide View</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 5. Insights with Dropdown Headline Heading (like Insights under coming blogs page) */}
            <div className="rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => setMobileInsightsOpen(!mobileInsightsOpen)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold cursor-pointer transition-colors flex items-center justify-between ${
                  currentPage === 'blog' ? 'text-[#103578] bg-blue-50/80 font-extrabold' : 'text-slate-700 hover:bg-slate-50'
                }`}
                aria-expanded={mobileInsightsOpen}
              >
                <div className="flex items-center gap-2">
                  <span>Insights</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    Blog
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileInsightsOpen ? 'rotate-180 text-[#103578]' : 'text-slate-400'
                  }`}
                />
              </button>

              {mobileInsightsOpen && (
                <div className="pl-2 pr-1 py-1.5 space-y-1 bg-slate-50/90 rounded-xl my-1 border border-slate-200/80 animate-fadeIn">
                  <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-600 flex items-center justify-between border-b border-slate-200/60 pb-1 mb-1">
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#C41822]" />
                      Knowledge Base & Migration Insights
                    </span>
                    <span className="text-[10px] font-bold text-slate-400">By Ahmath Musharraf</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('blog', 'blog')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-white hover:text-[#103578] flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-[#C41822] shrink-0" />
                    <div>
                      <span className="font-bold text-slate-800 block text-xs">International Education & PR Blog Page</span>
                      <span className="text-[10px] text-slate-400 block">Verified post-study work, PR, and student visa updates</span>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('blog', 'blog')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-white hover:text-[#103578] flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#103578] shrink-0" />
                    <div>
                      <span className="font-bold text-slate-800 block text-xs">2026 Post-Study Work Visas Comparison Guide</span>
                      <span className="text-[10px] text-slate-400 block">UK, Canada, Australia, Ireland & USA stayback</span>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('blog', 'blog')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-white hover:text-[#103578] flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-800 block text-xs">Canada PGWP & Express Entry PR Points Strategy</span>
                      <span className="text-[10px] text-slate-400 block">Maximizing CRS scores through Canadian credentials</span>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('blog', 'blog')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-white hover:text-[#103578] flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <Award className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-800 block text-xs">Top 10 High-Value Merit Scholarships Guide</span>
                      <span className="text-[10px] text-slate-400 block">How Sri Lankan students secure up to 50% bursaries</span>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('blog', 'blog')}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-white hover:text-[#103578] flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-800 block text-xs">100% IELTS Waiver Playbook</span>
                      <span className="text-[10px] text-slate-400 block">Direct admission eligibility without English tests</span>
                    </div>
                  </button>
                  <div className="pt-2 px-2 border-t border-slate-200/70">
                    <button
                      type="button"
                      onClick={() => handleLinkClick('blog', 'dedicated-blog')}
                      className="w-full py-2 px-3 rounded-lg bg-gradient-to-r from-[#103578] to-[#C41822] text-white text-xs font-bold flex items-center justify-between shadow-xs cursor-pointer"
                    >
                      <span>Open Dedicated Insights & Blog Portal</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 6. Sub-Pages Hub Button in Mobile Drawer */}
            <div className="rounded-xl overflow-hidden mt-1">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (currentPage === 'home') {
                    document.getElementById('sub-pages')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    handleLinkClick('home', 'sub-pages');
                  }
                }}
                className="w-full text-left px-4 py-3 rounded-xl text-sm font-bold cursor-pointer transition-colors flex items-center justify-between bg-blue-50/80 text-[#103578] hover:bg-blue-100/80"
              >
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#C41822]" />
                  <span>Explore All Sub-Pages</span>
                </div>
                <span className="text-[10px] font-bold bg-[#103578] text-white px-2 py-0.5 rounded-full">
                  16 Sections
                </span>
              </button>
            </div>
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
