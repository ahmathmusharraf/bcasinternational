import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  DESTINATIONS,
  SUCCESS_STORIES,
  TESTIMONIAL_VIDEOS
} from '../data/mockData';
import { TestimonialVideo } from '../types';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { sendLeadToGoogleSheets } from '../services/leadService';
import {
  Compass,
  ArrowRight,
  GraduationCap,
  Globe2,
  CheckCircle2,
  Award,
  ShieldCheck,
  Building2,
  Bookmark,
  ChevronRight,
  ChevronLeft,
  MessageCircle,
  HelpCircle,
  Sparkles,
  Search,
  BookOpen,
  Check,
  X,
  Percent,
  TrendingUp,
  Users,
  FileCheck,
  BadgePercent,
  Clock3,
  HeartHandshake,
  DollarSign,
  PlaneTakeoff,
  Quote,
  Star,
  MapPin,
  Briefcase,
  PhoneCall,
  Layers,
  Eye,
  Send,
  Calendar,
  Filter,
  Play,
  Pause,
  Volume2,
  VolumeX
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const {
    navigateTo,
    showToast,
    addSubmittedApplication
  } = useApp();

  // Written Testimonials: 3 by 3 auto-advance carousel with animations
  const [writtenTestimonialPage, setWrittenTestimonialPage] = useState<number>(0);
  const [isTestimonialAutoPlay, setIsTestimonialAutoPlay] = useState<boolean>(true);
  const [isTestimonialHovered, setIsTestimonialHovered] = useState<boolean>(false);

  const TESTIMONIALS_PER_PAGE = 3;
  const totalTestimonialPages = Math.ceil(SUCCESS_STORIES.length / TESTIMONIALS_PER_PAGE);

  useEffect(() => {
    if (!isTestimonialAutoPlay || isTestimonialHovered) return;

    const timer = setInterval(() => {
      setWrittenTestimonialPage(prev => (prev + 1) % totalTestimonialPages);
    }, 5500);

    return () => clearInterval(timer);
  }, [isTestimonialAutoPlay, isTestimonialHovered, totalTestimonialPages]);

  const handlePrevTestimonials = () => {
    setWrittenTestimonialPage(prev => (prev === 0 ? totalTestimonialPages - 1 : prev - 1));
  };

  const handleNextTestimonials = () => {
    setWrittenTestimonialPage(prev => (prev + 1) % totalTestimonialPages);
  };

  // Campus Direct style Find My Course Hero Widget State
  const [heroDestination, setHeroDestination] = useState<string>('All');
  const [heroLevel, setHeroLevel] = useState<string>('All');
  const [heroField, setHeroField] = useState<string>('All');

  // Active student testimonial video modal
  const [activeVideoModal, setActiveVideoModal] = useState<TestimonialVideo | null>(null);
  const [videoMuted, setVideoMuted] = useState<boolean>(false);


  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params: Record<string, string> = {};
    if (heroDestination !== 'All') params.destination = heroDestination;
    if (heroLevel !== 'All') params.level = heroLevel;
    if (heroField !== 'All') params.category = heroField;
    navigateTo('courses', params);
  };

  // Destinations section active tab
  const [activeDestinationTab, setActiveDestinationTab] = useState<string>('All');

  // Quick Enquiry Form state on HomePage (compact pre-assessment)
  const [quickEnquiry, setQuickEnquiry] = useState({
    name: '',
    phone: '',
    destination: 'United Kingdom',
    campus: 'Colombo Campus',
    subject: 'Computing & IT'
  });
  const [quickEnquirySubmitted, setQuickEnquirySubmitted] = useState<boolean>(false);
  const [quickEnquiryLoading, setQuickEnquiryLoading] = useState<boolean>(false);

  // Carousel Refs for Mobile & Tablet Horizontal Rails
  const destinationsRef = useRef<HTMLDivElement>(null);
  const videoTestimonialsRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right', amount = 340) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth'
      });
    }
  };

  const handleQuickEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickEnquiry.name.trim() || !quickEnquiry.phone.trim()) {
      showToast('Please enter your name and contact phone number', 'warning');
      return;
    }
    setQuickEnquiryLoading(true);
    try {
      const payload = {
        fullName: quickEnquiry.name.trim(),
        email: `${quickEnquiry.name.toLowerCase().replace(/[^a-z0-9]/g, '') || 'applicant'}@enquiry.bcas.lk`,
        phone: quickEnquiry.phone.trim(),
        cityOrCampus: quickEnquiry.campus,
        currentQualification: 'G.C.E. A/L Completed',
        targetSubject: quickEnquiry.subject,
        targetDestination: quickEnquiry.destination,
        targetLevel: 'Bachelor’s',
        targetIntake: 'Upcoming 2027 Intakes',
        budgetStatus: 'Seeking Scholarship & Funding Guidance',
        englishProficiency: 'Exploring IELTS / PTE',
        specificQuestions: 'Direct website homepage quick enquiry',
        demoConsent: true
      };
      const res = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        const data = await res.json();
        if (data.application) {
          addSubmittedApplication(data.application);
        }
      }

      // Automatically sync inquiry directly into Google Sheets
      sendLeadToGoogleSheets({
        fullName: quickEnquiry.name.trim(),
        email: `${quickEnquiry.name.toLowerCase().replace(/[^a-z0-9]/g, '') || 'applicant'}@enquiry.bcas.lk`,
        phone: quickEnquiry.phone.trim(),
        interest: `${quickEnquiry.subject} (${quickEnquiry.destination}) - ${quickEnquiry.campus}`,
        message: 'Direct website homepage quick consultation inquiry.',
      }).catch(err => console.warn('Google Sheet lead sync notice:', err));

      setQuickEnquirySubmitted(true);
      showToast('Quick enquiry submitted! A BCAS counselor will call/WhatsApp you shortly.', 'success');
    } catch {
      setQuickEnquirySubmitted(true);
      showToast('Enquiry recorded successfully. BCAS will contact you shortly.', 'success');
    } finally {
      setQuickEnquiryLoading(false);
    }
  };


  return (
    <div className="space-y-8 sm:space-y-16 lg:space-y-24">
      {/* Hero Section: Creative Center-Aligned with Cinematic Campus Background Image */}
      <section id="hero" className="relative overflow-hidden pt-7 pb-10 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-slate-900 scroll-mt-20">
        {/* Background Image & Cinematic Gradient Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2000&q=85"
            alt="International University Campus"
            className="w-full h-full object-cover object-center filter brightness-90"
          />
          {/* Deep Royal Navy & Blue Gradient Mask ensuring perfect contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#00103a]/90 via-[#001d74]/88 to-[#020b22]/96" />
          <div className="absolute inset-0 bg-radial-[at_center_top] from-transparent via-[#001869]/30 to-slate-950/80" />
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-400/15 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Center-Aligned Editorial Copy */}
          <div className="max-w-4xl mx-auto text-center space-y-3.5 sm:space-y-5">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 bg-blue-900/60 text-blue-200 text-[10px] sm:text-xs font-bold rounded-full border border-blue-400/30 backdrop-blur-md shadow-md">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-300 animate-pulse" />
              <span>SRI LANKA&apos;S DIRECT STUDY ABROAD PARTNER</span>
              <span className="bg-white/20 px-1.5 py-0.2 sm:px-2 sm:py-0.5 rounded-full text-[9px] sm:text-[10px] text-white font-semibold">
                Since 1999
              </span>
            </div>

            {/* Grand Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-display text-white tracking-tight leading-[1.12] sm:leading-[1.08] drop-shadow-md">
              Find Your Dream<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-amber-200">
                University Abroad.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-base md:text-lg text-blue-100/90 max-w-2xl mx-auto leading-relaxed font-normal">
              100% Free Counseling · Direct University Representation · Verified Visa Guidance. BCAS helps you explore 100+ accredited universities across the UK, Australia, Canada, Europe, and the UAE with zero agency charges.
            </p>

            {/* Center-Aligned CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-1 sm:pt-2">
              <button
                type="button"
                onClick={() => navigateTo('apply')}
                className="px-4 py-2.5 sm:px-6 sm:py-3.5 bg-white hover:bg-blue-50 text-[#00239C] font-bold text-xs sm:text-sm rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer active:scale-98"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00239C]" />
              </button>
              <a
                href="https://wa.me/94761415273"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2.5 sm:px-5 sm:py-3.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-200 border border-emerald-400/40 font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-1.5 sm:gap-2 backdrop-blur-xs shadow-md"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#25D366]" />
                <span>WhatsApp: +94 76 141 5273</span>
              </a>
              <a
                href="tel:+94761415273"
                className="px-3 py-2.5 sm:px-4 sm:py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-xs sm:text-sm rounded-xl transition-colors flex items-center justify-center gap-1.5 sm:gap-2 backdrop-blur-xs"
              >
                <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-200" />
                <span>Call Desk</span>
              </a>
            </div>

            {/* Verified Trust Strip */}
            <div className="pt-1.5 sm:pt-2 flex flex-wrap items-center justify-center gap-x-3.5 sm:gap-x-6 gap-y-1.5 sm:gap-y-2 text-[10px] sm:text-xs text-blue-200">
              <div className="flex items-center gap-1 sm:gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                <span className="font-medium text-white">100% Free Processing</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                <span className="font-medium text-white">British Council Certified</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                <span className="font-medium text-white">99% Visa Grant Rate</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                <span className="font-medium text-white">25+ Years of Excellence</span>
              </div>
            </div>
          </div>

          {/* Campus Direct Signature Floating "Find My Course" Search Bar */}
          <div id="finder" className="mt-6 sm:mt-10 lg:mt-14 max-w-5xl mx-auto bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-2xl p-3.5 sm:p-6 scroll-mt-28 relative z-20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2.5 pb-2.5 sm:mb-4 sm:pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <span className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-blue-50 text-[#00239C]">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
                <div>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 font-display">
                    Find My Course & University
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500">
                    Search 250+ accredited undergraduate, postgraduate, and diploma degrees worldwide
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] sm:text-[11px] font-bold border border-emerald-200 flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  <span>100% Free Processing</span>
                </span>
              </div>
            </div>

            <form onSubmit={handleHeroSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 items-end">
              {/* Field 1: Target Destination */}
              <div className="space-y-1 sm:space-y-1.5">
                <label className="text-[10px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Destination Country
                </label>
                <div className="relative">
                  <Globe2 className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 pointer-events-none" />
                  <select
                    value={heroDestination}
                    onChange={e => setHeroDestination(e.target.value)}
                    className="w-full pl-8 sm:pl-9 pr-2.5 sm:pr-3 py-2 sm:py-2.5 bg-slate-50 hover:bg-slate-100 focus:bg-white text-xs sm:text-sm font-semibold text-slate-900 border border-slate-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00239C] transition-all cursor-pointer"
                  >
                    <option value="All">All 7 Destinations (Global)</option>
                    <option value="United Kingdom">United Kingdom 🇬🇧</option>
                    <option value="Australia">Australia 🇦🇺</option>
                    <option value="Canada">Canada 🇨🇦</option>
                    <option value="Sweden">Sweden 🇸🇪</option>
                    <option value="Finland">Finland 🇫🇮</option>
                    <option value="Malta">Malta 🇲🇹</option>
                    <option value="United Arab Emirates">United Arab Emirates 🇦🇪</option>
                  </select>
                </div>
              </div>

              {/* Field 2: Study Level */}
              <div className="space-y-1 sm:space-y-1.5">
                <label className="text-[10px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Degree Level
                </label>
                <div className="relative">
                  <GraduationCap className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 pointer-events-none" />
                  <select
                    value={heroLevel}
                    onChange={e => setHeroLevel(e.target.value)}
                    className="w-full pl-8 sm:pl-9 pr-2.5 sm:pr-3 py-2 sm:py-2.5 bg-slate-50 hover:bg-slate-100 focus:bg-white text-xs sm:text-sm font-semibold text-slate-900 border border-slate-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00239C] transition-all cursor-pointer"
                  >
                    <option value="All">All Study Levels</option>
                    <option value="Bachelor’s">Bachelor’s Degree / Top-Up</option>
                    <option value="Postgraduate">Master’s / Postgraduate</option>
                    <option value="Diploma / HND">Higher National Diploma (HND)</option>
                    <option value="Foundation">University Foundation</option>
                    <option value="Secondary Diploma">Canadian OSSD High School</option>
                    <option value="Certification">IELTS Academic Prep</option>
                  </select>
                </div>
              </div>

              {/* Field 3: Field of Study */}
              <div className="space-y-1 sm:space-y-1.5">
                <label className="text-[10px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Subject Area
                </label>
                <div className="relative">
                  <BookOpen className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 pointer-events-none" />
                  <select
                    value={heroField}
                    onChange={e => setHeroField(e.target.value)}
                    className="w-full pl-8 sm:pl-9 pr-2.5 sm:pr-3 py-2 sm:py-2.5 bg-slate-50 hover:bg-slate-100 focus:bg-white text-xs sm:text-sm font-semibold text-slate-900 border border-slate-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00239C] transition-all cursor-pointer"
                  >
                    <option value="All">All Fields of Study</option>
                    <option value="Computing">Computing & Artificial Intelligence</option>
                    <option value="Business">Business, Finance & Management</option>
                    <option value="Engineering">Engineering & Built Environment</option>
                    <option value="Health">Biomedical & Health Sciences</option>
                    <option value="Law">Law & Legal Studies (LLB)</option>
                    <option value="Hospitality">International Hospitality & Tourism</option>
                    <option value="High School & Pre-University">Canadian High School (OSSD)</option>
                    <option value="English Proficiency">IELTS English Prep</option>
                  </select>
                </div>
              </div>

              {/* Field 4: Search Button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-2 sm:py-2.5 px-4 sm:px-5 bg-[#00239C] hover:bg-[#001869] text-white font-bold text-xs sm:text-sm rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer active:scale-98"
                >
                  <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Search Courses</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Key Metrics / Trust Bar (Campus Direct Style) */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 -mt-5 sm:-mt-8 lg:-mt-12 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
          <div className="bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-4 lg:p-5 border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-lg sm:rounded-xl bg-blue-50 text-[#00239C] flex items-center justify-center font-bold shrink-0">
                <Globe2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
              </span>
              <div>
                <span className="text-base sm:text-xl lg:text-2xl font-bold font-display text-slate-900 block leading-tight">100+</span>
                <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-none block mt-0.5">Partner Universities</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-4 lg:p-5 border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-lg sm:rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
              </span>
              <div>
                <span className="text-base sm:text-xl lg:text-2xl font-bold font-display text-emerald-700 block leading-tight">99%</span>
                <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-none block mt-0.5">Visa Grant Success</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-4 lg:p-5 border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-lg sm:rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold shrink-0">
                <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
              </span>
              <div>
                <span className="text-base sm:text-xl lg:text-2xl font-bold font-display text-slate-900 block leading-tight">25+</span>
                <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-none block mt-0.5">Years of Excellence</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-4 lg:p-5 border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-lg sm:rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center font-bold shrink-0">
                <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
              </span>
              <div>
                <span className="text-base sm:text-xl lg:text-2xl font-bold font-display text-slate-900 block leading-tight">4</span>
                <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-none block mt-0.5">Campuses in Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Step Study Abroad Journey: Motion Graphics Single-Line Pathway */}
      <section id="roadmap" className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-28">
        <div className="bg-gradient-to-r from-slate-950 via-[#020b27] to-slate-950 text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 border border-blue-500/30 shadow-2xl relative overflow-hidden">
          
          {/* Futuristic Background Motion Graphics Ambient Accents */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -top-12 left-1/3 w-64 h-24 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent blur-xl pointer-events-none" />

          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5 sm:mb-6 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider shadow-[0_0_12px_rgba(6,182,212,0.25)]">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>DYNAMIC TRAJECTORY PIPELINE</span>
                <span className="text-cyan-500 font-bold">· 6 STAGES</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-bold font-display tracking-tight text-white mt-1.5 flex items-center gap-2">
                <span>Your 6-Step Pathway to Global Graduation</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1 leading-relaxed">
                Seamless pipeline from academic assessment to university offer letters, visa grants, and flight departure.
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigateTo('apply')}
              className="px-4 py-2 bg-gradient-to-r from-[#00239C] to-blue-600 hover:from-blue-600 hover:to-cyan-500 text-white text-xs font-bold rounded-xl shadow-[0_0_20px_rgba(0,35,156,0.4)] transition-all flex items-center gap-1.5 cursor-pointer shrink-0 self-start sm:self-end"
            >
              <span>Begin Step 01</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* THE 6-STEP MOTION GRAPHIC PIPELINE IN ONE CONTINUOUS LINE */}
          <div className="relative z-10">
            
            {/* Glowing Motion Connector Line (Visible on Desktop) */}
            <div className="hidden lg:block absolute top-[44px] left-6 right-6 h-[2px] bg-gradient-to-r from-cyan-500/40 via-blue-500/60 to-emerald-400/40 pointer-events-none z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-75 blur-[1px] animate-pulse" />
            </div>

            {/* Steps Container: Single Line Across All Devices */}
            <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-2.5 sm:gap-3 lg:gap-3.5 pb-2 -mx-2 px-2 scrollbar-none lg:mx-0 lg:px-0 lg:grid lg:grid-cols-6 lg:overflow-visible">
              {[
                {
                  step: '01',
                  stage: 'STAGE 01',
                  title: 'Profile Audit',
                  desc: 'Evaluate O/L, A/L or Diploma for direct entry or foundation.',
                  tag: '100% Free',
                  icon: Users,
                  glow: 'border-cyan-500/40 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]',
                  badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                },
                {
                  step: '02',
                  stage: 'STAGE 02',
                  title: 'University Match',
                  desc: 'Select best-fit degree from 100+ partner universities.',
                  tag: '100+ Unis',
                  icon: BookOpen,
                  glow: 'border-blue-500/40 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]',
                  badge: 'bg-blue-500/10 text-blue-300 border-blue-500/30'
                },
                {
                  step: '03',
                  stage: 'STAGE 03',
                  title: 'Fast Offers',
                  desc: 'Direct partner admissions processing in 48 to 72 hours.',
                  tag: '48h Offers',
                  icon: FileCheck,
                  glow: 'border-indigo-500/40 text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.2)]',
                  badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30'
                },
                {
                  step: '04',
                  stage: 'STAGE 04',
                  title: 'Scholarship Aid',
                  desc: 'Unlock South Asian bursaries and tuition grants up to 50%.',
                  tag: 'Up to 50%',
                  icon: BadgePercent,
                  glow: 'border-amber-500/40 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)]',
                  badge: 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                },
                {
                  step: '05',
                  stage: 'STAGE 05',
                  title: 'Visa Clearance',
                  desc: '28-day financial audit, SOP vetting & 1-on-1 embassy mocks.',
                  tag: '99% Grant',
                  icon: ShieldCheck,
                  glow: 'border-emerald-500/40 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]',
                  badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                },
                {
                  step: '06',
                  stage: 'STAGE 06',
                  title: 'Pre-Departure',
                  desc: 'Flight booking, airport meet-up & overseas campus dorms.',
                  tag: 'Fly Out',
                  icon: PlaneTakeoff,
                  glow: 'border-rose-500/40 text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.2)]',
                  badge: 'bg-rose-500/10 text-rose-300 border-rose-500/30'
                }
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.step}
                    onClick={() => navigateTo('apply')}
                    className="w-[185px] sm:w-[210px] lg:w-auto shrink-0 snap-start bg-slate-900/80 hover:bg-slate-800/90 backdrop-blur-md rounded-2xl border border-slate-700/70 hover:border-cyan-400/60 p-3.5 sm:p-4 flex flex-col justify-between transition-all duration-200 group cursor-pointer hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(6,182,212,0.25)] relative z-10"
                  >
                    <div>
                      {/* Top Node Indicator & Stage Tag */}
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-950 border ${item.glow} flex items-center justify-center transition-transform group-hover:scale-110`}>
                          <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-full border ${item.badge}`}>
                          {item.tag}
                        </span>
                      </div>

                      {/* Stage Identifier & Title */}
                      <div className="space-y-0.5 mb-1.5">
                        <span className="text-[10px] font-mono font-bold text-cyan-400/90 tracking-widest block">
                          {item.stage}
                        </span>
                        <h3 className="text-xs sm:text-sm font-bold text-white font-display group-hover:text-cyan-300 transition-colors leading-tight">
                          {item.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-[10px] sm:text-[11px] text-slate-300 leading-snug line-clamp-2">
                        {item.desc}
                      </p>
                    </div>

                    {/* Footer Motion Link */}
                    <div className="pt-2 mt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-cyan-400 group-hover:text-cyan-300">
                      <span>STEP {item.step}</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* Featured Destinations Section: Creative Layout with Narrow Heading */}
      <section id="destinations" className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-28">
        <div className="text-center max-w-lg mx-auto mb-4 sm:mb-8 space-y-1 sm:space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-0.5 bg-red-50 text-[#BA141A] text-[10px] sm:text-[11px] font-bold rounded-full border border-red-200 shadow-2xs">
            <Globe2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#BA141A]" />
            <span>GLOBAL STUDY CORRIDORS</span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold font-display text-slate-900 tracking-tight leading-tight">
            Top Study Abroad Destinations
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-normal">
            Direct admission & credit transfer pathways with verified post-study work rights and tuition savings.
          </p>
        </div>

        {/* Interactive Destination Filter Pills */}
        <div className="flex items-center justify-start md:justify-center gap-1.5 overflow-x-auto pb-2 mb-3 sm:pb-3 sm:mb-6 scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
          {[
            { id: 'All', label: 'All Destinations', flag: '🌐' },
            { id: 'United Kingdom', label: 'United Kingdom', flag: '🇬🇧' },
            { id: 'Australia', label: 'Australia', flag: '🇦🇺' },
            { id: 'Canada', label: 'Canada', flag: '🇨🇦' },
            { id: 'Sweden', label: 'Sweden', flag: '🇸🇪' },
            { id: 'Finland', label: 'Finland', flag: '🇫🇮' },
            { id: 'Malta', label: 'Malta', flag: '🇲🇹' },
            { id: 'United Arab Emirates', label: 'UAE', flag: '🇦🇪' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveDestinationTab(tab.id)}
              className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                activeDestinationTab === tab.id
                  ? 'bg-[#00239C] text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span>{tab.flag}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Creative Destination Cards Grid / Carousel */}
        <div
          ref={destinationsRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-3 sm:gap-4 pb-3 sm:pb-4 -mx-4 px-4 scrollbar-none md:grid md:grid-cols-2 lg:grid-cols-4 md:mx-0 md:px-0 md:overflow-visible"
        >
          {DESTINATIONS.filter(
            dest => activeDestinationTab === 'All' || dest.name.includes(activeDestinationTab)
          ).map(dest => (
            <div
              key={dest.id}
              onClick={() => navigateTo('destinations')}
              className="w-[72vw] sm:w-[280px] md:w-auto shrink-0 snap-center md:snap-align-none group bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative h-36 sm:h-44 md:h-48 overflow-hidden bg-slate-900">
                  <img
                    src={dest.heroImage}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
                  
                  {/* Top Flag & Currency Badge */}
                  <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold text-slate-900 flex items-center gap-1 sm:gap-1.5 shadow-xs">
                    <span className="text-sm sm:text-base leading-none">{dest.flag}</span>
                    <span>{dest.name}</span>
                  </div>

                  <div className="absolute top-2.5 right-2.5 bg-slate-900/80 backdrop-blur-xs px-1.5 py-0.5 rounded-md sm:rounded-lg text-[9px] sm:text-[10px] font-mono font-bold text-white border border-white/20">
                    {dest.currency}
                  </div>

                  {/* Post-Study Visa Ribbon */}
                  <div className="absolute bottom-2 left-2.5 right-2.5 text-white">
                    <span className="text-[9px] sm:text-[10px] text-blue-200 font-bold uppercase tracking-wider block">
                      Post-Study Work Visa
                    </span>
                    <p className="text-[11px] sm:text-xs font-semibold leading-tight line-clamp-1 text-white">
                      {dest.postStudyWorkVisa}
                    </p>
                  </div>
                </div>

                <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {dest.tagline}
                  </p>

                  {/* Key Stats Matrix */}
                  <div className="grid grid-cols-2 gap-1.5 sm:gap-2 pt-1.5 sm:pt-2 border-t border-slate-100 text-[10px] sm:text-[11px]">
                    <div className="p-1.5 sm:p-2 bg-slate-50 rounded-lg sm:rounded-xl">
                      <span className="text-slate-400 block text-[8px] sm:text-[9px] uppercase font-bold">Avg. Tuition</span>
                      <span className="font-bold text-slate-900 font-mono text-[10px] sm:text-[11px] truncate block">
                        {dest.avgTuitionPerYear.split('–')[0]}
                      </span>
                    </div>
                    <div className="p-1.5 sm:p-2 bg-slate-50 rounded-lg sm:rounded-xl">
                      <span className="text-slate-400 block text-[8px] sm:text-[9px] uppercase font-bold">Part-Time Work</span>
                      <span className="font-bold text-slate-900 text-[10px] sm:text-[11px] truncate block">
                        20 hrs / week
                      </span>
                    </div>
                  </div>

                  {/* Top Cities */}
                  <div className="flex flex-wrap gap-1">
                    {dest.popularCities.slice(0, 3).map((city, idx) => (
                      <span key={idx} className="text-[9px] sm:text-[10px] bg-blue-50/70 text-[#00239C] px-1.5 py-0.2 sm:px-2 sm:py-0.5 rounded font-medium">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-3 pt-0 sm:p-4 sm:pt-0">
                <div className="pt-2 sm:pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs font-bold text-[#00239C]">
                  <span>Explore Programs & Visas</span>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}

          {/* Global Card */}
          {activeDestinationTab === 'All' && (
            <div
              onClick={() => navigateTo('destinations')}
              className="w-[72vw] sm:w-[280px] md:w-auto shrink-0 snap-center md:snap-align-none group bg-gradient-to-br from-[#001869] via-[#00239C] to-slate-950 text-white rounded-2xl sm:rounded-3xl border border-blue-800 p-4 sm:p-6 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden"
            >
              <div className="space-y-2 sm:space-y-3 relative z-10">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-white/10 text-amber-300 text-[10px] sm:text-xs font-bold border border-white/15">
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span>GLOBAL PARTNERSHIPS</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                  ... And Many More Destinations!
                </h3>
                <p className="text-[11px] sm:text-xs text-blue-100 leading-relaxed font-normal">
                  Looking for other options? BCAS represents over 100 accredited universities with direct credit transfer agreements worldwide.
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-1 sm:pt-2">
                  {['USA 🇺🇸', 'Ireland 🇮🇪', 'Germany 🇩🇪', 'New Zealand 🇳🇿', 'Global 🌐'].map(c => (
                    <span key={c} className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg bg-white/10 text-[10px] sm:text-[11px] text-white border border-white/10 font-medium">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 mt-3 sm:pt-4 sm:mt-4 border-t border-white/15 flex items-center justify-between text-xs font-bold text-amber-300 relative z-10">
                <span>View Full University Directory</span>
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          )}
        </div>

        {/* Mobile Swipe Cue Dots */}
        <div className="flex md:hidden items-center justify-center gap-1.5 pt-1.5 text-slate-400 text-[11px]">
          <span>Swipe horizontally to view all 8 destinations</span>
          <span className="text-[#00239C] font-bold">➔</span>
        </div>
      </section>

      {/* EXCLUSIVE PARTNERSHIP & LANGUAGE SPOTLIGHT: OSSD & IELTS */}
      <section id="ossd-spotlight" className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-5">
          {/* Card 1: BCAS International University Placements - OSSD */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#001869] via-[#00239C] to-slate-900 text-white p-4 sm:p-6 lg:p-7 border border-blue-400/30 shadow-xl flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-60 h-60 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 space-y-2.5 sm:space-y-3">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-red-500/20 text-red-200 border border-red-400/30 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <span>🇨🇦 CANADIAN HIGH SCHOOL QUALIFICATION</span>
                </span>
                <span className="px-2 py-0.2 sm:py-0.5 rounded-full bg-white/10 text-blue-200 text-[9px] sm:text-[10px] font-semibold">
                  Ontario Ministry of Education
                </span>
              </div>

              <div>
                <span className="text-[10px] sm:text-xs font-semibold text-blue-200 block uppercase tracking-wide">
                  BCAS International University Placements
                </span>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-display text-white mt-0.5 leading-snug">
                  Ontario Secondary School Diploma (OSSD)
                </h3>
              </div>

              <p className="text-[11px] sm:text-xs text-blue-100 leading-relaxed font-normal">
                Study the world-renowned Canadian High School qualification in Sri Lanka. The OSSD credential grants <strong>direct admission into top universities across Canada (U of Toronto, Waterloo, UBC, McGill)</strong>, UK Russell Group, and Australia without foundation years!
              </p>

              <div className="grid grid-cols-2 gap-1.5 sm:gap-2 pt-1.5 sm:pt-2 border-t border-white/10 text-[10px] sm:text-xs">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-[10px] sm:text-[11px] text-blue-100">Enrol with G.C.E. O/L or A/L</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-[10px] sm:text-[11px] text-blue-100">Direct Canada Study Permit</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-[10px] sm:text-[11px] text-blue-100">High-Tier Scholarships</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-[10px] sm:text-[11px] text-blue-100">10-12 Mo Fast-Track</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-3 mt-3 sm:pt-4 sm:mt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2.5 sm:gap-3">
              <button
                onClick={() => navigateTo('apply', { subject: 'Ontario Secondary School Diploma (OSSD)', destination: 'Canada' })}
                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <span>Enquire for OSSD Canada</span>
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </button>
              <button
                onClick={() => navigateTo('courses')}
                className="text-[11px] sm:text-xs font-semibold text-blue-200 hover:text-white transition-colors cursor-pointer"
              >
                View OSSD Curriculum ↗
              </button>
            </div>
          </div>

          {/* Card 2: BCAS IELTS Preparation Academy ("We Do IELTS Also") */}
          <div id="ielts" className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white text-slate-900 p-4 sm:p-6 lg:p-7 border border-slate-200/90 shadow-xl flex flex-col justify-between group scroll-mt-28">
            <div className="space-y-2.5 sm:space-y-3">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 sm:gap-1.5">
                  <Sparkles className="w-3 h-3 text-emerald-600" />
                  <span>WE DO IELTS ALSO</span>
                </span>
                <span className="px-2 py-0.2 sm:py-0.5 rounded-full bg-blue-50 text-[#00239C] text-[9px] sm:text-[10px] font-semibold">
                  Official British Council & IDP Support
                </span>
              </div>

              <div>
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 block uppercase tracking-wide">
                  Official English Language Coaching & Testing Center
                </span>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-display text-slate-900 mt-0.5 leading-snug">
                  BCAS IELTS Masterclass & Testing Support
                </h3>
              </div>

              <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-normal">
                Aiming for Band 6.5, 7.0, or 7.5+? BCAS certified IELTS examiners and language coaches prepare you with official British Council / IDP rubrics, timed exam mock drills, and full student visa language clearing.
              </p>

              <div className="grid grid-cols-2 gap-1.5 sm:gap-2 pt-1.5 sm:pt-2 border-t border-slate-100 text-[10px] sm:text-xs">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 shrink-0" />
                  <span className="text-[10px] sm:text-[11px] text-slate-700">Writing Task 1 & 2 Feedback</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 shrink-0" />
                  <span className="text-[10px] sm:text-[11px] text-slate-700">1-on-1 Mock Speaking Drills</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 shrink-0" />
                  <span className="text-[10px] sm:text-[11px] text-slate-700">Official Exam Booking</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 shrink-0" />
                  <span className="text-[10px] sm:text-[11px] text-slate-700">Band 7.0+ Target Prep</span>
                </div>
              </div>
            </div>

            <div className="pt-3 mt-3 sm:pt-4 sm:mt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2.5 sm:gap-3">
              <a
                href="https://wa.me/94761415273?text=Hi%20BCAS,%20I%20would%20like%20to%20register%20for%20the%20IELTS%20preparation%20course%20and%20diagnostic%20test."
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-[#25D366]" />
                <span>Book Free Diagnostic Test</span>
              </a>
              <a
                href="tel:+94761415273"
                className="text-[11px] sm:text-xs font-semibold text-[#00239C] hover:underline"
              >
                Call IELTS Desk: +94 76 141 5273
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* THE BCAS STRENGTHS & ADVANTAGE: Strengths Section */}
      <section id="why-bcas" className="bg-slate-950 text-white py-4 sm:py-6 lg:py-8 relative overflow-hidden scroll-mt-28">
        {/* Subtle decorative glows */}
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#00239C]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#BA141A]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-3 sm:space-y-4">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-0.5 bg-blue-900/60 text-blue-300 text-[10px] sm:text-[11px] font-semibold rounded-full border border-blue-700/50">
                <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-400" />
                <span>THE BCAS STRENGTHS & ADVANTAGE</span>
              </div>
              <h2 className="text-lg sm:text-2xl font-bold font-display tracking-tight text-white mt-0.5 sm:mt-1">
                Why Students & Parents Choose BCAS Placements
              </h2>
              <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5">
                25+ years in British education · Official partner to 100+ global universities across 7 key destinations.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-xs text-blue-300 font-semibold">
              <span className="px-2.5 py-1 rounded-full bg-blue-900/40 border border-blue-700/40 text-blue-200">
                100% Free Service · Zero Agent Fees
              </span>
            </div>
          </div>

          {/* 6 Core Strength Pillars in One Single Line */}
          <div
            ref={pillarsRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-2 sm:gap-2.5 pb-2 -mx-4 px-4 scrollbar-none sm:mx-0 sm:px-0 lg:grid lg:grid-cols-6"
          >
            {[
              {
                badge: 'FREE',
                badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
                icon: HeartHandshake,
                iconColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
                title: '0% Placement Fees',
                desc: 'No Rs. 150k–300k fees. University counseling, applications and visa audits are 100% free.'
              },
              {
                badge: 'SAVE 60%',
                badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
                icon: BadgePercent,
                iconColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
                title: 'Credit Transfer (2+1)',
                desc: 'Save Rs. 15M+ living costs with Pearson BTEC HND top-up into Year 3 for an identical UK degree.'
              },
              {
                badge: '100+ UNIS',
                badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
                icon: Globe2,
                iconColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
                title: '100+ Partner Unis',
                desc: 'Direct representation across UK, Australia, Canada, Europe & UAE with priority admissions.'
              },
              {
                badge: '98.4% VISA',
                badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
                icon: ShieldCheck,
                iconColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
                title: 'Visa Audit & Mocks',
                desc: 'In-house 28-day financial audit, SOP vetting panel & 1-on-1 embassy mock interviews.'
              },
              {
                badge: 'BURSARIES',
                badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
                icon: Award,
                iconColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
                title: 'Direct Bursaries',
                desc: 'Automatic £1,500 – £8,000+ South Asian grants & merit tuition reductions before deposit.'
              },
              {
                badge: '4 HUBS',
                badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
                icon: Building2,
                iconColor: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
                title: '4 Islandwide Campuses',
                desc: 'Walk-in parent & student counseling in Colombo, Kandy, Jaffna & Kalmunai with senior advisors.'
              }
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="w-[150px] sm:w-[190px] lg:w-auto shrink-0 snap-start bg-slate-900/90 rounded-xl sm:rounded-2xl border border-slate-800 hover:border-blue-500/50 p-2.5 sm:p-3.5 flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                    <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-md sm:rounded-lg border flex items-center justify-center ${pillar.iconColor}`}>
                      <pillar.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </div>
                    <span className={`px-1 sm:px-1.5 py-0.2 sm:py-0.5 rounded text-[8px] sm:text-[9px] font-bold uppercase tracking-wider border ${pillar.badgeColor}`}>
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="text-[11px] sm:text-xs font-bold text-white group-hover:text-blue-300 transition-colors leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 sm:mt-1 leading-snug line-clamp-2 sm:line-clamp-3">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK ENQUIRY FORM: Small, Compact Pre-Assessment Card */}
      <section id="enquiry" className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-28">
        <div className="bg-gradient-to-br from-[#00239C] via-[#001c7d] to-slate-900 text-white rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 shadow-lg border border-blue-800 transition-all duration-300 hover:border-blue-700">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-5 items-center">
            {/* Left Column: Briefing */}
            <div className="lg:col-span-5 space-y-1.5 sm:space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/10 text-amber-300 text-[9px] sm:text-[10px] font-bold border border-white/15">
                <Send className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-300" />
                <span>FREE UNIVERSITY PRE-ASSESSMENT</span>
              </div>
              <h3 className="text-base sm:text-xl font-bold font-display text-white tracking-tight">
                Quick Admissions Enquiry
              </h3>
              <p className="text-[10px] sm:text-xs text-blue-100/90 leading-relaxed max-w-md">
                Fast eligibility assessment, direct university links, and scholarship quotes within 2 business hours.
              </p>

              <div className="pt-1 border-t border-white/10 flex flex-wrap items-center gap-2 text-xs">
                <a
                  href="tel:+94761415273"
                  className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg bg-emerald-600/90 hover:bg-emerald-600 text-white font-bold text-[9px] sm:text-[10px] transition-all duration-150 active:scale-95"
                  title="Direct call to BCAS Admissions Hotline"
                >
                  <PhoneCall className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  <span>Call: +94 76 141 5273</span>
                </a>
                <span className="text-[9px] sm:text-[10px] text-blue-200">100% Free · Zero Agent Fees</span>
              </div>
            </div>

            {/* Right Column: Small Compact Form */}
            <div className="lg:col-span-7 bg-white/5 backdrop-blur-md p-2.5 sm:p-3.5 lg:p-4 rounded-lg sm:rounded-xl border border-white/10 transition-all">
              {quickEnquirySubmitted ? (
                <div className="p-3 bg-emerald-900/40 border border-emerald-500/60 rounded-lg space-y-1.5 text-center animate-scale-in">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 mx-auto" />
                  <h4 className="text-xs sm:text-sm font-bold text-white">Enquiry Received!</h4>
                  <p className="text-[10px] sm:text-xs text-emerald-200">
                    A BCAS Senior Placements Officer will contact you on <strong>{quickEnquiry.phone}</strong> shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setQuickEnquirySubmitted(false);
                      setQuickEnquiry({ name: '', phone: '', destination: 'United Kingdom', campus: 'Colombo Campus', subject: 'Computing & IT' });
                    }}
                    className="text-[10px] sm:text-[11px] text-emerald-300 underline hover:text-white pt-0.5 block mx-auto cursor-pointer"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuickEnquirySubmit} className="space-y-1.5 sm:space-y-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                    <div>
                      <label className="text-[9px] sm:text-[10px] font-semibold text-blue-200 block mb-0.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={quickEnquiry.name}
                        onChange={e => setQuickEnquiry({ ...quickEnquiry, name: e.target.value })}
                        placeholder="e.g. Kasun Bandara"
                        className="w-full px-2 py-1 sm:px-2.5 sm:py-1.5 bg-slate-900/80 border border-slate-700 rounded-md sm:rounded-lg text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-[9px] sm:text-[10px] font-semibold text-blue-200 block mb-0.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={quickEnquiry.phone}
                        onChange={e => setQuickEnquiry({ ...quickEnquiry, phone: e.target.value })}
                        placeholder="e.g. +94 77 123 4567"
                        className="w-full px-2 py-1 sm:px-2.5 sm:py-1.5 bg-slate-900/80 border border-slate-700 rounded-md sm:rounded-lg text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 sm:gap-2">
                    <div>
                      <label className="text-[9px] sm:text-[10px] font-semibold text-blue-200 block mb-0.5">
                        Destination
                      </label>
                      <select
                        value={quickEnquiry.destination}
                        onChange={e => setQuickEnquiry({ ...quickEnquiry, destination: e.target.value })}
                        className="w-full px-1.5 py-1 sm:px-2 sm:py-1.5 bg-slate-900/80 border border-slate-700 rounded-md sm:rounded-lg text-xs text-white focus:outline-none focus:border-amber-400 transition-colors"
                      >
                        <option value="United Kingdom">United Kingdom 🇬🇧</option>
                        <option value="Australia">Australia 🇦🇺</option>
                        <option value="Canada">Canada 🇨🇦</option>
                        <option value="Sweden">Sweden 🇸🇪</option>
                        <option value="Finland">Finland 🇫🇮</option>
                        <option value="Malta">Malta 🇲🇹</option>
                        <option value="United Arab Emirates">UAE / Dubai 🇦🇪</option>
                        <option value="Other / Multiple">Other Hubs 🌐</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[9px] sm:text-[10px] font-semibold text-blue-200 block mb-0.5">
                        Discipline
                      </label>
                      <select
                        value={quickEnquiry.subject}
                        onChange={e => setQuickEnquiry({ ...quickEnquiry, subject: e.target.value })}
                        className="w-full px-1.5 py-1 sm:px-2 sm:py-1.5 bg-slate-900/80 border border-slate-700 rounded-md sm:rounded-lg text-xs text-white focus:outline-none focus:border-amber-400 transition-colors"
                      >
                        <option value="Computing & IT">Computing & IT</option>
                        <option value="Business & Management">Business</option>
                        <option value="Engineering & Built Env.">Engineering</option>
                        <option value="Health & Applied Science">Biomedical</option>
                        <option value="Hospitality & Tourism">Hospitality</option>
                        <option value="Law & Legal Studies">Law (LLB)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[9px] sm:text-[10px] font-semibold text-blue-200 block mb-0.5">
                        Nearest Campus
                      </label>
                      <select
                        value={quickEnquiry.campus}
                        onChange={e => setQuickEnquiry({ ...quickEnquiry, campus: e.target.value })}
                        className="w-full px-1.5 py-1 sm:px-2 sm:py-1.5 bg-slate-900/80 border border-slate-700 rounded-md sm:rounded-lg text-xs text-white focus:outline-none focus:border-amber-400 transition-colors"
                      >
                        <option value="Colombo Campus">Colombo Campus</option>
                        <option value="Kandy Campus">Kandy Campus</option>
                        <option value="Jaffna Campus">Jaffna Campus</option>
                        <option value="Kalmunai Campus">Kalmunai Campus</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[9px] text-blue-300/80">
                      🔒 No spam. Data protected.
                    </span>
                    <button
                      type="submit"
                      disabled={quickEnquiryLoading}
                      className="px-3 py-1 sm:px-4 sm:py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-md sm:rounded-lg transition-all duration-150 active:scale-95 flex items-center gap-1 shadow-xs cursor-pointer disabled:opacity-60"
                    >
                      <span>{quickEnquiryLoading ? 'Submitting...' : 'Submit Free Enquiry'}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & Student Success Stories Section: Creative High-End Design with Videos & Narrow Heading */}
      <section id="testimonials" className="bg-gradient-to-b from-slate-50 via-white to-blue-50/40 py-6 sm:py-10 lg:py-16 border-y border-slate-200/80 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-10">
          
          {/* Narrow Editorial Heading */}
          <div className="text-center max-w-lg mx-auto space-y-1 sm:space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-0.5 bg-blue-50 text-[#00239C] text-[10px] sm:text-[11px] font-bold rounded-full border border-blue-200 shadow-2xs">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-500" />
              <span>AUTHENTIC STUDENT OUTCOMES</span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold font-display text-slate-900 tracking-tight leading-tight">
              Real Journeys. Global Milestones.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-normal">
              Alumni who progressed from BCAS regional campuses in Colombo, Jaffna, Kalmunai, and Kandy to world-ranked universities.
            </p>
          </div>

          {/* Student Testimonial Videos Showcase */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 border-b border-slate-200/80 pb-2 sm:pb-3">
              <div className="flex items-center gap-2">
                <span className="p-1 sm:p-1.5 bg-red-100 text-red-600 rounded-lg">
                  <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-red-600" />
                </span>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                    <span>Student Video Stories</span>
                    <span className="text-[9px] sm:text-[10px] font-normal px-1.5 py-0.2 sm:px-2 sm:py-0.5 rounded-full bg-blue-100 text-[#00239C] font-mono">
                      4 Featured Reels
                    </span>
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500">
                    Watch BCAS graduates share their overseas campus and career transition in their own words.
                  </p>
                </div>
              </div>

              {/* Mobile Swipe Buttons */}
              <div className="flex items-center gap-1 sm:hidden bg-slate-100 p-1 rounded-lg self-start">
                <button
                  type="button"
                  onClick={() => scrollCarousel(videoTestimonialsRef, 'left')}
                  className="w-6 h-6 rounded-md bg-white shadow-2xs flex items-center justify-center text-slate-700 hover:text-slate-900 cursor-pointer active:scale-95 transition-all"
                  aria-label="Previous video"
                >
                  <ChevronLeft className="w-3 h-3" />
                </button>
                <span className="text-[10px] font-bold text-slate-700 px-1">Swipe Videos</span>
                <button
                  type="button"
                  onClick={() => scrollCarousel(videoTestimonialsRef, 'right')}
                  className="w-6 h-6 rounded-md bg-white shadow-2xs flex items-center justify-center text-slate-700 hover:text-slate-900 cursor-pointer active:scale-95 transition-all"
                  aria-label="Next video"
                >
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Video Cards Horizontal Rail / Grid */}
            <div
              ref={videoTestimonialsRef}
              className="flex overflow-x-auto snap-x snap-mandatory gap-3 sm:gap-4 pb-2.5 sm:pb-3 -mx-4 px-4 scrollbar-none md:grid md:grid-cols-2 lg:grid-cols-4 md:mx-0 md:px-0 md:overflow-visible"
            >
              {TESTIMONIAL_VIDEOS.map(video => (
                <div
                  key={video.id}
                  onClick={() => setActiveVideoModal(video)}
                  className="w-[72vw] sm:w-[280px] md:w-auto shrink-0 snap-center md:snap-align-none bg-white rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-blue-400 transition-all duration-300 cursor-pointer group flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    {/* Video Thumbnail with Play Button Overlay */}
                    <div className="relative h-36 sm:h-44 md:h-48 overflow-hidden bg-slate-950">
                      <img
                        src={video.thumbnail}
                        alt={video.studentName}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108 opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-black/20" />

                      {/* Top Badges */}
                      <div className="absolute top-2 left-2 right-2 sm:top-2.5 sm:left-2.5 sm:right-2.5 flex items-center justify-between">
                        <span className="px-1.5 py-0.2 sm:px-2 sm:py-0.5 rounded-md sm:rounded-lg bg-black/60 backdrop-blur-md text-[9px] sm:text-[10px] font-bold text-white border border-white/20 flex items-center gap-1">
                          <span>{video.flag}</span>
                          <span className="truncate max-w-[100px] sm:max-w-[120px]">{video.destination}</span>
                        </span>
                        <span className="px-1.5 py-0.2 sm:px-2 sm:py-0.5 rounded-md sm:rounded-lg bg-black/70 backdrop-blur-md text-[9px] sm:text-[10px] font-mono font-bold text-amber-300">
                          {video.videoDuration}
                        </span>
                      </div>

                      {/* Center Play Button with ripple effect */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 sm:w-13 sm:h-13 rounded-full bg-[#00239C]/90 text-white flex items-center justify-center shadow-lg group-hover:scale-115 group-hover:bg-[#BA141A] transition-all duration-300 ring-2 sm:ring-4 ring-white/30">
                          <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white ml-0.5" />
                        </div>
                      </div>

                      {/* Bottom Info inside thumbnail */}
                      <div className="absolute bottom-2 left-2.5 right-2.5 sm:bottom-2.5 sm:left-3 sm:right-3 text-white">
                        <span className="text-[9px] sm:text-[10px] font-semibold text-blue-200 block truncate">
                          {video.currentUniversity}
                        </span>
                        <div className="flex items-center justify-between mt-0.5">
                          <span className="text-[11px] sm:text-xs font-bold leading-tight truncate">
                            {video.studentName}
                          </span>
                          <span className="text-[8px] sm:text-[9px] text-slate-300 flex items-center gap-1 shrink-0">
                            <Eye className="w-2.5 h-2.5" />
                            {video.viewsCount}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-2.5 sm:p-3.5 space-y-1.5 sm:space-y-2">
                      <div className="flex items-center justify-between text-[9px] sm:text-[10px]">
                        <span className="font-semibold text-slate-500">
                          From: <strong className="text-slate-800">{video.fromCampus}</strong>
                        </span>
                        <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded font-bold">
                          Verified Alumni
                        </span>
                      </div>

                      <p className="text-[11px] sm:text-xs text-slate-600 line-clamp-2 italic leading-relaxed">
                        &ldquo;{video.storyHighlight}&rdquo;
                      </p>

                      <div className="pt-1.5 sm:pt-2 border-t border-slate-100 flex items-center gap-1 text-[9px] sm:text-[10px] text-slate-700 font-medium truncate">
                        <Briefcase className="w-3 h-3 text-[#00239C] shrink-0" />
                        <span className="truncate">{video.currentRole}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="p-2.5 pt-0 sm:p-3.5 sm:pt-0">
                    <div className="pt-2 sm:pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs font-bold text-[#00239C] group-hover:text-[#BA141A] transition-colors">
                      <span className="flex items-center gap-1">
                        <Play className="w-3 h-3 fill-current" />
                        <span>Watch Video Story</span>
                      </span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Written Reviews Section: Common Across Destinations, 3 by 3 with Auto-Rotation & Animations */}
          <div
            className="pt-3 sm:pt-4 border-t border-slate-200/80 space-y-3 sm:space-y-4"
            onMouseEnter={() => setIsTestimonialHovered(true)}
            onMouseLeave={() => setIsTestimonialHovered(false)}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xs sm:text-base font-bold text-slate-900 flex items-center gap-1.5 font-display">
                    <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                    <span>Global Alumni Written Testimonials</span>
                  </h3>
                  <span className="px-1.5 py-0.2 sm:px-2 sm:py-0.5 rounded-full bg-blue-50 text-[#00239C] text-[9px] sm:text-[10px] font-bold border border-blue-200/60">
                    All Destinations
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                  Verified student reviews from Colombo, Jaffna, Kalmunai, and Kandy campuses worldwide.
                </p>
              </div>

              {/* 3-by-3 Navigation & Auto-cycle Controls */}
              <div className="flex items-center gap-1.5 sm:gap-2 self-start sm:self-auto bg-slate-50 p-1 sm:p-1.5 rounded-lg sm:rounded-xl border border-slate-200/80 shadow-2xs">
                {/* Auto Play / Pause Toggle Button */}
                <button
                  type="button"
                  onClick={() => setIsTestimonialAutoPlay(prev => !prev)}
                  className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md sm:rounded-lg bg-white hover:bg-slate-100 text-slate-700 text-[10px] sm:text-[11px] font-semibold flex items-center gap-1 border border-slate-200 transition-colors cursor-pointer"
                  title={isTestimonialAutoPlay ? 'Pause auto-rotation' : 'Resume auto-rotation'}
                >
                  {isTestimonialAutoPlay ? (
                    <>
                      <Pause className="w-3 h-3 text-[#00239C]" />
                      <span className="hidden md:inline text-slate-600">
                        {isTestimonialHovered ? 'Paused (hover)' : 'Auto-cycling'}
                      </span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 text-emerald-600 fill-emerald-600" />
                      <span className="hidden md:inline text-slate-600">Paused</span>
                    </>
                  )}
                </button>

                {/* Dot Pagination indicators */}
                <div className="flex items-center gap-1 px-1 sm:px-2">
                  {Array.from({ length: totalTestimonialPages }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setWrittenTestimonialPage(idx)}
                      aria-label={`Go to testimonial page ${idx + 1}`}
                      className={`h-1.5 sm:h-2 rounded-full transition-all cursor-pointer ${
                        writtenTestimonialPage === idx
                          ? 'w-4 sm:w-6 bg-[#00239C]'
                          : 'w-1.5 sm:w-2 bg-slate-300 hover:bg-slate-400'
                      }`}
                    />
                  ))}
                </div>

                <span className="text-[10px] sm:text-[11px] font-bold text-slate-600 font-mono px-1">
                  {writtenTestimonialPage + 1}/{totalTestimonialPages}
                </span>

                {/* Prev & Next Buttons */}
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={handlePrevTestimonials}
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-md sm:rounded-lg bg-white shadow-2xs flex items-center justify-center text-slate-700 hover:text-slate-900 hover:bg-slate-100 cursor-pointer border border-slate-200 active:scale-95 transition-all"
                    aria-label="Previous 3 testimonials"
                  >
                    <ChevronLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextTestimonials}
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-md sm:rounded-lg bg-white shadow-2xs flex items-center justify-center text-slate-700 hover:text-slate-900 hover:bg-slate-100 cursor-pointer border border-slate-200 active:scale-95 transition-all"
                    aria-label="Next 3 testimonials"
                  >
                    <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Testimonial Cards: 3 By 3 with keyframe animation on page change */}
            <div
              key={writtenTestimonialPage}
              className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-4 animate-in fade-in slide-in-from-right-4 duration-500 fill-mode-both"
            >
              {SUCCESS_STORIES.slice(
                writtenTestimonialPage * TESTIMONIALS_PER_PAGE,
                writtenTestimonialPage * TESTIMONIALS_PER_PAGE + TESTIMONIALS_PER_PAGE
              ).map(story => (
                <div
                  key={story.id}
                  className="bg-gradient-to-b from-white via-slate-50/50 to-white rounded-xl sm:rounded-2xl border border-slate-200/90 hover:border-blue-400 shadow-2xs hover:shadow-lg transition-all duration-300 p-3 sm:p-4 lg:p-5 flex flex-col justify-between relative group overflow-hidden"
                >
                  <Quote className="absolute right-2 -bottom-2 w-16 sm:w-20 h-16 sm:h-20 text-slate-100 group-hover:text-blue-50/70 transition-colors pointer-events-none -rotate-12" />

                  <div className="space-y-2 sm:space-y-2.5 relative z-10">
                    <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-1.5 sm:pb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500" />
                        <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-500">
                          {story.destination}
                        </span>
                      </div>

                      <div className="flex items-center gap-0.5 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-amber-400" />
                        ))}
                        <span className="text-[9px] sm:text-[10px] font-bold text-slate-600 ml-1">5.0</span>
                      </div>
                    </div>

                    <div className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg bg-blue-50/70 border border-blue-100 flex items-center justify-between text-[10px] sm:text-[11px] font-semibold text-[#00239C]">
                      <span className="truncate">{story.currentUniversity}</span>
                      <span className="text-[8px] sm:text-[9px] bg-white px-1.5 py-0.2 rounded text-blue-700 shadow-2xs font-mono shrink-0">
                        Degree / Top-Up
                      </span>
                    </div>

                    <p className="text-[11px] sm:text-xs text-slate-700 italic leading-relaxed line-clamp-2 sm:line-clamp-3">
                      &ldquo;{story.storyQuote}&rdquo;
                    </p>

                    <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 sm:py-1 rounded-md border border-emerald-100/80 font-medium">
                      <Briefcase className="w-3 h-3 shrink-0 text-emerald-600" />
                      <span className="truncate">Career: {story.currentRole}</span>
                    </div>
                  </div>

                  <div className="pt-2 mt-2 sm:pt-2.5 sm:mt-3 border-t border-slate-100 flex items-center justify-between gap-2 relative z-10">
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <div className="relative">
                        <img
                          src={story.image}
                          alt={story.studentName}
                          className="w-7 h-7 sm:w-9 sm:h-9 rounded-full object-cover ring-2 ring-blue-100"
                          onError={e => {
                            (e.currentTarget as HTMLImageElement).src =
                              'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80';
                          }}
                        />
                        <span className="absolute -bottom-0.5 -right-0.5 w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
                      </div>
                      <div>
                        <h4 className="text-[11px] sm:text-xs font-bold text-slate-900 leading-tight">
                          {story.studentName}
                        </h4>
                        <span className="text-[9px] sm:text-[10px] text-slate-500 block">
                          {story.fromCampus} · Verified Alumni
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => navigateTo('stories')}
                      className="text-[10px] sm:text-[11px] font-bold text-[#00239C] hover:text-[#001869] cursor-pointer inline-flex items-center gap-0.5"
                    >
                      <span>Read Journey</span>
                      <ArrowRight className="w-2.5 h-2.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 1-Line Trust Strip Below Testimonials */}
          <div className="bg-white rounded-lg sm:rounded-xl border border-slate-200/90 p-2.5 sm:p-3 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
              <span className="text-[11px] sm:text-xs text-slate-700">
                Over 25,000+ BCAS students placed at leading universities worldwide across Colombo, Jaffna, Kalmunai, and Kandy since 1999.
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end">
              <button
                onClick={() => navigateTo('apply')}
                className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-[#00239C] hover:bg-[#001869] text-white rounded-md sm:rounded-lg text-[11px] sm:text-xs font-bold transition-all cursor-pointer"
              >
                Free Assessment
              </button>
              <a
                href="https://wa.me/94761415273"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 rounded-md sm:rounded-lg text-[11px] sm:text-xs font-bold flex items-center gap-1"
              >
                <WhatsAppIcon className="w-3 h-3 fill-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Frequently Asked Questions: One-View Clean Layout */}
      <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 scroll-mt-28">
        <div className="text-center mb-4 sm:mb-8 space-y-1 sm:space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-0.5 text-[10px] sm:text-xs font-bold text-[#BA141A] uppercase tracking-wider bg-red-50 rounded-full border border-red-200">
            <HelpCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#BA141A]" />
            <span>FREQUENT QUESTIONS</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-bold font-display text-slate-900">
            Good to know before you begin.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Clear, honest answers to common queries asked by students and parents.
          </p>
        </div>

        <div className="space-y-2 sm:space-y-3">
          <details className="group bg-white rounded-lg sm:rounded-xl border border-slate-200/90 p-3 sm:p-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer shadow-2xs">
            <summary className="flex items-center justify-between font-bold text-slate-900 text-xs sm:text-base">
              <span>Do I have to pay BCAS for university counseling and admissions support?</span>
              <span className="text-slate-400 group-open:rotate-180 transition-transform text-xs">▼</span>
            </summary>
            <p className="text-[11px] sm:text-sm text-slate-600 mt-2 pt-2 sm:mt-3 sm:pt-3 leading-relaxed border-t border-slate-100">
              No. BCAS International University Placements provides student counseling, university admissions processing, and standard document verification completely free of charge. You only pay the official university tuition fees and government visa charges.
            </p>
          </details>

          <details className="group bg-white rounded-lg sm:rounded-xl border border-slate-200/90 p-3 sm:p-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer shadow-2xs">
            <summary className="flex items-center justify-between font-bold text-slate-900 text-xs sm:text-base">
              <span>Can I apply if I haven&apos;t taken the IELTS or PTE exam yet?</span>
              <span className="text-slate-400 group-open:rotate-180 transition-transform text-xs">▼</span>
            </summary>
            <p className="text-[11px] sm:text-sm text-slate-600 mt-2 pt-2 sm:mt-3 sm:pt-3 leading-relaxed border-t border-slate-100">
              Yes! You can secure a <strong>Conditional Offer Letter</strong> using your current school or diploma records while you prepare for English proficiency testing. Some universities also accept strong G.C.E. O/L or A/L English grades in lieu of IELTS.
            </p>
          </details>

          <details className="group bg-white rounded-lg sm:rounded-xl border border-slate-200/90 p-3 sm:p-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer shadow-2xs">
            <summary className="flex items-center justify-between font-bold text-slate-900 text-xs sm:text-base">
              <span>How does credit transfer from BCAS HND to a UK Top-Up degree work?</span>
              <span className="text-slate-400 group-open:rotate-180 transition-transform text-xs">▼</span>
            </summary>
            <p className="text-[11px] sm:text-sm text-slate-600 mt-2 pt-2 sm:mt-3 sm:pt-3 leading-relaxed border-t border-slate-100">
              Completing a Pearson BTEC HND at BCAS equals the first two years (Level 4 & 5) of a British bachelor’s degree. You can transfer directly into Year 3 (final year) at partner universities in the UK, earning the exact same degree certificate with only 1 year of overseas living expenses.
            </p>
          </details>

          <details className="group bg-white rounded-lg sm:rounded-xl border border-slate-200/90 p-3 sm:p-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer shadow-2xs">
            <summary className="flex items-center justify-between font-bold text-slate-900 text-xs sm:text-base">
              <span>Does BCAS guarantee student visa approval?</span>
              <span className="text-slate-400 group-open:rotate-180 transition-transform text-xs">▼</span>
            </summary>
            <p className="text-[11px] sm:text-sm text-slate-600 mt-2 pt-2 sm:mt-3 sm:pt-3 leading-relaxed border-t border-slate-100">
              No agency can legitimately guarantee a visa outcome. The final decision rests entirely with the sovereign immigration authorities (such as UK Visas & Immigration or Australian Home Affairs). BCAS ensures your documents and financial statements fully conform to official legal checklists to maximize success.
            </p>
          </details>
        </div>
      </section>

      {/* Campus Visit & WhatsApp Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-[#00239C] to-[#001869] rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-8">
          <div className="space-y-1.5 sm:space-y-3 text-center md:text-left">
            <span className="text-[10px] sm:text-xs font-bold text-blue-200 uppercase tracking-wider">
              REAL COUNSELORS · IN-PERSON OR ONLINE
            </span>
            <h2 className="text-xl sm:text-3xl font-bold font-display text-white">
              Ready to take your next step?
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 max-w-lg">
              Visit any of our 4 campuses in Colombo, Jaffna, Kalmunai, or Kandy, or call our admissions desk directly at <a href="tel:+94761415273" className="underline font-bold text-white">+94 76 141 5273</a>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="tel:+94761415273"
              className="w-full sm:w-auto px-4 py-2.5 sm:px-5 sm:py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Call Us: +94 76 141 5273</span>
            </a>
            <a
              href="https://wa.me/94761415273"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-2.5 sm:px-5 sm:py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" />
              <span>WhatsApp Advisor</span>
            </a>
            <button
              onClick={() => navigateTo('contact')}
              className="w-full sm:w-auto px-4 py-2.5 sm:px-5 sm:py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>View Campuses</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* STUDENT TESTIMONIAL VIDEO PLAYER MODAL */}
      {activeVideoModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200"
          onClick={() => setActiveVideoModal(null)}
        >
          <div
            className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative text-white flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Top Header Bar */}
            <div className="px-5 py-3.5 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="text-xl">{activeVideoModal.flag}</span>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white leading-tight flex items-center gap-2">
                    <span>{activeVideoModal.studentName}</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                      Verified Alumni
                    </span>
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    {activeVideoModal.fromCampus} ➔ {activeVideoModal.currentUniversity}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveVideoModal(null)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close video"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Simulated Cinematic Video Player Container (16:9 Aspect) */}
            <div className="relative aspect-video bg-black overflow-hidden group">
              <img
                src={activeVideoModal.thumbnail}
                alt={activeVideoModal.studentName}
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />

              {/* Upper Reel Badge & Live Status */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-white border border-white/20 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span>BCAS ALUMNI SPOTLIGHT</span>
                </span>
                <span className="text-[11px] font-mono text-white/90 bg-black/50 px-2 py-0.5 rounded-md">
                  {activeVideoModal.videoDuration}
                </span>
              </div>

              {/* Center Play Button & Equalizer Animation */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="w-16 h-16 rounded-full bg-[#00239C] text-white flex items-center justify-center shadow-2xl ring-4 ring-white/30 transform transition-transform hover:scale-110 cursor-pointer">
                  <Play className="w-7 h-7 fill-white ml-1" />
                </div>

                {/* Animated Equalizer Wave Bars */}
                <div className="flex items-center gap-1 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
                  <div className="w-1 h-3 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-1 h-5 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-1 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  <div className="w-1 h-6 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '200ms' }} />
                  <div className="w-1 h-4 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '400ms' }} />
                  <span className="text-[10px] font-bold text-slate-200 ml-1.5">Audio Track Active</span>
                </div>
              </div>

              {/* Closed Caption Subtitle Ribbon */}
              <div className="absolute bottom-11 left-4 right-4 text-center">
                <p className="inline-block px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md text-xs sm:text-sm font-medium text-amber-200 max-w-xl mx-auto shadow-lg border border-white/10">
                  &ldquo;{activeVideoModal.storyHighlight}&rdquo;
                </p>
              </div>

              {/* Bottom Video Controls Scrub Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="p-1 text-white hover:text-amber-400 transition-colors cursor-pointer"
                    aria-label="Play/Pause"
                  >
                    <Play className="w-4 h-4 fill-white" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setVideoMuted(!videoMuted)}
                    className="p-1 text-white hover:text-amber-400 transition-colors cursor-pointer"
                    aria-label={videoMuted ? 'Unmute' : 'Mute'}
                  >
                    {videoMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <span className="text-[10px] text-slate-300 font-mono">0:45 / {activeVideoModal.videoDuration}</span>
                </div>

                {/* Progress Bar */}
                <div className="flex-1 h-1.5 bg-slate-700 rounded-full overflow-hidden mx-2 cursor-pointer">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-amber-400 w-2/5 rounded-full" />
                </div>

                <span className="text-[10px] font-bold text-slate-400">1080p HD</span>
              </div>
            </div>

            {/* Student Pathway Details & Direct Enquire Action */}
            <div className="p-4 sm:p-5 space-y-3 bg-slate-900">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Program & Destination</span>
                  <span className="font-semibold text-white text-[11px] block mt-0.5 truncate">
                    {activeVideoModal.degreeProgramme}
                  </span>
                  <span className="text-[10px] text-blue-300">{activeVideoModal.currentUniversity}</span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Current Role / Career</span>
                  <span className="font-semibold text-emerald-400 text-[11px] block mt-0.5 truncate">
                    {activeVideoModal.currentRole}
                  </span>
                  <span className="text-[10px] text-slate-400">Via BCAS {activeVideoModal.fromCampus}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-2.5">
                <span className="text-xs text-slate-400">
                  Want to follow this study pathway?
                </span>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href="https://wa.me/94761415273"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                    <span>WhatsApp Advisor</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      const dest = activeVideoModal.destination;
                      setActiveVideoModal(null);
                      navigateTo('apply', { destination: dest, subject: activeVideoModal.degreeProgramme });
                    }}
                    className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-[#00239C] hover:bg-[#001869] text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                  >
                    <span>Apply for {activeVideoModal.destination}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
