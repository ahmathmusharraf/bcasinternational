import React, { useState } from 'react';
import {
  Compass,
  School,
  BookOpen,
  Award,
  Calculator,
  ShieldCheck,
  Briefcase,
  FileText,
  Headphones,
  Users,
  MapPin,
  ArrowRight,
  Sparkles,
  Search,
  ExternalLink,
  GraduationCap,
  Calendar,
  Languages,
  CheckCircle2
} from 'lucide-react';
import { PageView } from '../../types';

interface SubPageItem {
  id: PageView;
  title: string;
  category: 'Academics & Unis' | 'Finances & Visas' | 'Student Journey' | 'About & Campuses';
  badge: string;
  badgeColor: string;
  description: string;
  highlights: string[];
  icon: React.ReactNode;
}

interface SubPagesHubSectionProps {
  onNavigate: (page: PageView, sectionId?: string) => void;
}

export const SubPagesHubSection: React.FC<SubPagesHubSectionProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const subPagesList: SubPageItem[] = [
    {
      id: 'destinations',
      title: 'Study Destinations Guide',
      category: 'Academics & Unis',
      badge: '11 Global Countries',
      badgeColor: 'bg-blue-100 text-[#103578]',
      description: 'Explore comprehensive country profiles for UK, Canada, Australia, USA, Ireland, Germany, and more with intake timelines and post-study work rules.',
      highlights: ['PSW Visa rules', 'Cost of living comparisons', 'Country intake schedules'],
      icon: <Compass className="w-6 h-6 text-[#103578]" />
    },
    {
      id: 'universities',
      title: 'Universities Directory',
      category: 'Academics & Unis',
      badge: '50+ Global Partners',
      badgeColor: 'bg-indigo-100 text-indigo-700',
      description: 'Search accredited universities worldwide with interactive side-by-side comparison, admission requirements, and campus details.',
      highlights: ['Direct partner universities', 'Interactive comparison tool', 'Entry requirements breakdown'],
      icon: <School className="w-6 h-6 text-indigo-600" />
    },
    {
      id: 'pathway',
      title: 'Study Path Wizard',
      category: 'Academics & Unis',
      badge: 'Interactive Stepper',
      badgeColor: 'bg-rose-100 text-[#C41822]',
      description: 'Follow our 4-step guided academic evaluation tool to match your background and aspirations with eligible universities and scholarships.',
      highlights: ['Custom eligibility match', 'Instant degree recommendations', 'Direct application pathway'],
      icon: <Sparkles className="w-6 h-6 text-[#C41822]" />
    },
    {
      id: 'courses',
      title: 'Degree Courses & Pathways',
      category: 'Academics & Unis',
      badge: 'Bachelor, Master & MBA',
      badgeColor: 'bg-emerald-100 text-emerald-800',
      description: 'Browse specialized degree programs in Business, IT, Computing, Engineering, Health, Law, and Hospitality with career outlooks.',
      highlights: ['Career outcome projections', 'Duration & study levels', 'Accredited international degrees'],
      icon: <BookOpen className="w-6 h-6 text-emerald-600" />
    },
    {
      id: 'scholarships',
      title: 'Scholarships & Merit Awards',
      category: 'Finances & Visas',
      badge: '10% to 50% Grants',
      badgeColor: 'bg-amber-100 text-amber-800',
      description: 'Discover partial university awards, country-specific discounts, and international student bursaries for Sri Lankan applicants.',
      highlights: ['Merit-based scholarships', 'Early applicant discounts', 'Step-by-step application tips'],
      icon: <Award className="w-6 h-6 text-amber-600" />
    },
    {
      id: 'cost-calculator',
      title: 'Cost & Currency Estimator',
      category: 'Finances & Visas',
      badge: 'Live LKR Rates',
      badgeColor: 'bg-teal-100 text-teal-800',
      description: 'Calculate complete study budgets including annual tuition, accommodation, living expenses, and legal part-time student wage offsets.',
      highlights: ['Real-time currency rates', 'Part-time earnings offset', 'Visa proof-of-funds guidance'],
      icon: <Calculator className="w-6 h-6 text-teal-600" />
    },
    {
      id: 'ielts',
      title: 'IELTS Academy & Waiver Desk',
      category: 'Finances & Visas',
      badge: '100% Exemption Desk',
      badgeColor: 'bg-blue-100 text-blue-800',
      description: 'Certified British Council and IDP test prep, IELTS/PTE score requirements, and Medium of Instruction (MOI) English waiver assessments.',
      highlights: ['100% IELTS waiver eligibility', 'Band 7.5+ expert coaching', 'Free diagnostic mock tests'],
      icon: <Languages className="w-6 h-6 text-blue-600" />
    },
    {
      id: 'work-pr',
      title: 'Work Rights & PR Pathways',
      category: 'Finances & Visas',
      badge: 'Post-Study Visas',
      badgeColor: 'bg-purple-100 text-purple-800',
      description: 'Detailed analysis of student term-time work hours, post-graduation work visas (PSW, PGWP, OPT, 485), and permanent residency schemes.',
      highlights: ['Graduate work visa limits', 'PR point scheme guides', 'Spouse work authorization'],
      icon: <Briefcase className="w-6 h-6 text-purple-600" />
    },
    {
      id: 'journey',
      title: 'University Journey Roadmap',
      category: 'Student Journey',
      badge: '5-Phase Timeline',
      badgeColor: 'bg-rose-100 text-rose-800',
      description: 'Structured student roadmap from free profile counseling in Sri Lanka to offer letters, visa filing, and first lecture arrival abroad.',
      highlights: ['Phase-by-phase guidance', 'Documentation milestones', 'Pre-departure assistance'],
      icon: <Compass className="w-6 h-6 text-rose-600" />
    },
    {
      id: 'stories',
      title: 'Student Video Testimonials',
      category: 'Student Journey',
      badge: 'Verified Alumni',
      badgeColor: 'bg-amber-100 text-amber-800',
      description: 'Watch authentic video reviews and placements from Sri Lankan students now thriving in top UK, Canadian, and Australian universities.',
      highlights: ['Real student experiences', 'Campus life feedback', 'Visa approval celebrations'],
      icon: <Users className="w-6 h-6 text-amber-600" />
    },
    {
      id: 'services',
      title: 'Comprehensive Student Services',
      category: 'Student Journey',
      badge: '100% Free Support',
      badgeColor: 'bg-emerald-100 text-emerald-800',
      description: 'Our full 8-point support model: University selection, admissions processing, SOP guidance, visa documentation, and pre-departure briefings.',
      highlights: ['Zero agency placement fees', 'Mock consular interviews', 'Airport & housing guidance'],
      icon: <Headphones className="w-6 h-6 text-emerald-600" />
    },
    {
      id: 'blog',
      title: 'International Education Blog',
      category: 'Student Journey',
      badge: 'Insights & Updates',
      badgeColor: 'bg-blue-100 text-blue-800',
      description: 'Latest global immigration updates, post-study visa policy announcements, student accommodation advice, and university guides.',
      highlights: ['Visa policy updates', 'Living cost survival tips', 'Admissions expert insights'],
      icon: <FileText className="w-6 h-6 text-blue-600" />
    },
    {
      id: 'about',
      title: 'About BCAS Heritage',
      category: 'About & Campuses',
      badge: 'Since 1999',
      badgeColor: 'bg-slate-100 text-slate-800',
      description: 'Learn about British College of Applied Studies: 27+ years of institutional history, university affiliations, and leadership vision.',
      highlights: ['27+ years higher ed history', 'Global university partnerships', 'Quality assurance standards'],
      icon: <School className="w-6 h-6 text-slate-700" />
    },
    {
      id: 'why-bcas',
      title: 'Why BCAS (8 Core Advantages)',
      category: 'About & Campuses',
      badge: 'Trust & Integrity',
      badgeColor: 'bg-emerald-100 text-emerald-800',
      description: 'Discover the 8 key commitments that distinguish BCAS, including transparent admissions, high visa success rates, and no agency charges.',
      highlights: ['98% visa approval track record', '100% free placement guidance', 'Authorized university partner'],
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />
    },
    {
      id: 'advisors',
      title: 'Placement Advisors Directory',
      category: 'About & Campuses',
      badge: 'Certified Experts',
      badgeColor: 'bg-indigo-100 text-indigo-800',
      description: 'Meet our qualified education counselors located across Colombo, Kandy, Kalmunai, and Jaffna offering 1-on-1 personalized sessions.',
      highlights: ['Experienced senior counselors', 'Trilingual guidance', 'Direct consultation booking'],
      icon: <GraduationCap className="w-6 h-6 text-indigo-600" />
    },
    {
      id: 'contact',
      title: 'Campuses & Contact Desks',
      category: 'About & Campuses',
      badge: 'Islandwide Centers',
      badgeColor: 'bg-rose-100 text-rose-800',
      description: 'Get in touch with our campus branches in Colombo, Kandy, Kalmunai, and Jaffna with telephone numbers, maps, and walk-in consultation hours.',
      highlights: ['Direct hotline connections', 'Campus physical addresses', 'Walk-in appointments'],
      icon: <MapPin className="w-6 h-6 text-rose-600" />
    }
  ];

  const categories = ['All', 'Academics & Unis', 'Finances & Visas', 'Student Journey', 'About & Campuses'];

  const filteredPages = subPagesList.filter((page) => {
    if (selectedCategory !== 'All' && page.category !== selectedCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const inTitle = page.title.toLowerCase().includes(q);
      const inDesc = page.description.toLowerCase().includes(q);
      const inHighlights = page.highlights.some(h => h.toLowerCase().includes(q));
      if (!inTitle && !inDesc && !inHighlights) return false;
    }
    return true;
  });

  return (
    <section id="sub-pages-hub" className="py-16 sm:py-20 bg-slate-50 border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#103578]/10 text-[#103578] text-xs font-bold uppercase tracking-[0.08em] brand-label">
            <Sparkles className="w-3.5 h-3.5 text-[#C41822]" />
            <span>Dedicated Section Sub-Pages</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-[-0.02em] leading-tight brand-headline [text-wrap:balance]">
            Explore Every Section as a Dedicated Sub-Page
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed brand-body">
            Need in-depth details? Every academic discipline, scholarship list, currency calculator, and visa pathway is organized into its own dedicated sub-page for effortless browsing.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-xs">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#103578] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
                {cat === 'All' && <span className="ml-1 opacity-70">({subPagesList.length})</span>}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search sub-pages..."
              className="w-full pl-9 pr-3.5 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#103578] focus:bg-white text-slate-900 placeholder-slate-400"
            />
          </div>
        </div>

        {/* Sub-Pages Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredPages.map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-200 flex flex-col justify-between group cursor-pointer hover:-translate-y-1"
            >
              <div>
                {/* Header: Icon + Badge */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-50 transition-all">
                    {item.icon}
                  </div>
                  <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#103578] transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights List */}
                <div className="mt-3.5 space-y-1 border-t border-slate-100 pt-3">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                      <span className="truncate">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#103578] group-hover:text-[#C41822] transition-colors">
                <span>Open Dedicated Sub-Page</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-[#103578] to-[#0a234e] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <Headphones className="w-5 h-5 text-rose-300" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Can't find what you're looking for?</h4>
              <p className="text-xs text-slate-300">Speak directly with a BCAS university counselor for immediate guidance.</p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="px-4 py-2 rounded-xl bg-[#C41822] hover:bg-[#a3141a] text-white text-xs font-bold transition-all shadow-xs shrink-0 cursor-pointer flex items-center gap-1.5"
          >
            <span>Contact Campus Counselor</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
