import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Camera,
  Calendar,
  MapPin,
  Users,
  Sparkles,
  ArrowRight,
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
  Filter,
  Facebook,
  Share2,
  Copy,
  Check
} from 'lucide-react';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';

interface GalleryEvent {
  id: string;
  title: string;
  category: 'University Fairs' | 'Spot Admissions' | 'Embassy Sessions' | 'Pre-Departure' | 'Campus Life';
  date: string;
  location: string;
  attendees: string;
  image: string;
  facebookUrl: string;
  description: string;
  highlights: string[];
}

// ============================================================================
// EDIT YOUR FACEBOOK POST LINKS & THUMBNAIL IMAGES DIRECTLY IN THIS ARRAY:
// - facebookUrl: Set the exact Facebook post, video, or album URL.
// - image: Set the thumbnail photo for the Facebook post (automatically shown).
// ============================================================================
const GALLERY_EVENTS: GalleryEvent[] = [
  {
    id: 'fair-colombo-2026',
    title: 'World University Placement Fair 2026 - Colombo Campus',
    category: 'University Fairs',
    date: 'February 2026',
    location: 'BCAS Colombo Main Campus, Colombo 06',
    attendees: '850+ Students & Parents',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    facebookUrl: 'https://www.facebook.com/BCASCampusSriLanka/posts/pfbid0FairColombo2026',
    description: 'Representatives from 35+ partner universities across the UK, Australia, Canada, and Europe met prospective students for on-the-spot academic evaluations and priority offers.',
    highlights: ['35+ Partner University Delegates', 'Immediate Spot Offers Issued', 'IELTS & PTE Waiver Consultations']
  },
  {
    id: 'embassy-aus-2026',
    title: 'Australian Student Visa & Post-Study Work Briefing',
    category: 'Embassy Sessions',
    date: 'January 2026',
    location: 'BCAS Auditorium, Kandy Campus',
    attendees: '320+ Applicants',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    facebookUrl: 'https://www.facebook.com/BCASCampusSriLanka/posts/pfbid0AusStudentVisaBriefing',
    description: 'Special briefing on the Genuine Student (GS) assessment criteria, 28-day financial audit protocols, and regional migration incentives for Sri Lankan graduates.',
    highlights: ['Financial Document Verification Checklist', 'SOP Drafting Workshop', 'Q&A with Visa Officers']
  },
  {
    id: 'spot-admission-jaffna',
    title: 'UK & Canada Spot Admissions Day - Jaffna Campus',
    category: 'Spot Admissions',
    date: 'March 2026',
    location: 'BCAS Jaffna Regional Campus',
    attendees: '240+ Applicants',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    facebookUrl: 'https://www.facebook.com/BCASCampusSriLanka/posts/pfbid0SpotAdmissionJaffna',
    description: 'Direct admissions desk with Coventry University, University of Hertfordshire, and Toronto pathway officers reviewing transcripts for immediate conditional letters.',
    highlights: ['Direct O/L & A/L Eligibility Checks', 'Canadian OSSD High School Guidance', 'South Asian Bursary Approvals']
  },
  {
    id: 'pre-departure-kalmunai',
    title: 'Pre-Departure Orientation & Flight Kit Handover',
    category: 'Pre-Departure',
    date: 'September 2026',
    location: 'BCAS Eastern Campus, Kalmunai',
    attendees: '180+ Departing Students',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
    facebookUrl: 'https://www.facebook.com/BCASCampusSriLanka/posts/pfbid0PreDepartureKalmunai',
    description: 'Congratulatory session for students flying out for Autumn intakes. Included forex exchange cards, overseas SIM packages, accommodation confirmations, and airport pickup arrangements.',
    highlights: ['Forex & Overseas Banking Setup', 'Accommodation Lease Checks', 'Alumni Mentorship Pairing']
  },
  {
    id: 'coventry-delegation',
    title: 'Coventry University UK Academic Delegation Visit',
    category: 'University Fairs',
    date: 'November 2025',
    location: 'BCAS Colombo & Kandy Campuses',
    attendees: '400+ Computing & Business Students',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    facebookUrl: 'https://www.facebook.com/BCASCampusSriLanka/posts/pfbid0CoventryDelegation',
    description: 'Senior faculty and admissions deans from Coventry University visited BCAS to conduct mock visa interviews and award top Pearson BTEC HND achievers with full Year 3 top-up grants.',
    highlights: ['Faculty Academic Reviews', 'Direct Credit Transfer Guarantees', 'Merit Grant Award Ceremony']
  },
  {
    id: 'btec-graduation',
    title: 'Pearson BTEC International Graduation & Alumni Awards',
    category: 'Campus Life',
    date: 'December 2025',
    location: 'BMICH, Colombo',
    attendees: '1,200+ Attendees',
    image: 'https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?auto=format&fit=crop&w=1200&q=80',
    facebookUrl: 'https://www.facebook.com/BCASCampusSriLanka/posts/pfbid0BtecGraduationBMICH',
    description: 'Celebrating hundreds of BCAS graduates who completed Pearson BTEC Higher National Diplomas and were accepted into prestigious global universities worldwide.',
    highlights: ['1,200+ Graduates & Parents', 'Global Pathway Certifications', 'Alumni Keynote Addresses']
  },
  {
    id: 'finland-seminar',
    title: 'Study in Nordic Europe: Finland & Sweden Innovation Seminar',
    category: 'Embassy Sessions',
    date: 'October 2025',
    location: 'Virtual & BCAS City Hubs',
    attendees: '500+ Registered Students',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80',
    facebookUrl: 'https://www.facebook.com/BCASCampusSriLanka/posts/pfbid0FinlandSwedenSeminar',
    description: 'Comprehensive deep dive into Scandinavian post-study job seeker visas, green-tech careers, tuition scholarships, and part-time student work rights in Helsinki and Stockholm.',
    highlights: ['Nordic Work Rights Deep Dive', 'English-Taught Degree Breakdown', 'Cost of Living Benchmarks']
  },
  {
    id: 'ielts-masterclass',
    title: 'IELTS Academic Masterclass & Testing Strategies',
    category: 'Campus Life',
    date: 'Continuous Monthly',
    location: 'BCAS Language Desks (Islandwide)',
    attendees: '600+ Monthly Candidates',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    facebookUrl: 'https://www.facebook.com/BCASCampusSriLanka/posts/pfbid0IeltsMasterclassTesting',
    description: 'Free intensive weekend workshops conducted by certified British Council and IDP trained trainers, focusing on Band 7.0+ Speaking and Writing components.',
    highlights: ['Free Mock Tests with Instant Scoring', 'Speaking Practice Pods', 'Direct Exam Registration Assistance']
  }
];

export const EventGalleryPage: React.FC = () => {
  const { navigateTo, showToast } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeModalEvent, setActiveModalEvent] = useState<GalleryEvent | null>(null);
  const [copiedFbLink, setCopiedFbLink] = useState<boolean>(false);

  const categories = [
    'All',
    'University Fairs',
    'Spot Admissions',
    'Embassy Sessions',
    'Pre-Departure',
    'Campus Life'
  ];

  const filteredEvents = GALLERY_EVENTS.filter(e => {
    if (activeCategory === 'All') return true;
    return e.category === activeCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-6 sm:space-y-10 animate-in fade-in duration-300">
      {/* Top Banner / Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-[#00239C] uppercase tracking-wider">
          <Camera className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00239C]" />
          <span>CAMPUS ACTIVITY & GLOBAL ADMISSIONS ARCHIVE</span>
        </div>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-display text-slate-900 tracking-tight">
          BCAS Event & Seminar Gallery
        </h1>
        <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal">
          Explore photographic coverage and official Facebook posts from university recruitment fairs, visa compliance seminars, spot admissions days, and pre-departure orientations across BCAS campuses.
        </p>

        {/* Facebook Page Official Banner */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <a
            href="https://www.facebook.com/BCASCampusSriLanka"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#1877F2] hover:bg-[#0d65d9] text-white text-xs font-bold transition-all shadow-xs"
          >
            <Facebook className="w-4 h-4 fill-white" />
            <span>Visit Official BCAS Facebook Page (@BCASCampusSriLanka)</span>
            <ExternalLink className="w-3 h-3 text-white/80" />
          </a>
          <span className="text-xs text-slate-500 font-medium">
            Over 150,000+ followers · Daily admissions updates
          </span>
        </div>
      </div>

      {/* Category Pills Filter */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none border-b border-slate-200">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === cat
                ? 'bg-[#00239C] text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {filteredEvents.map(event => {
          const fbLink = event.facebookUrl;
          return (
            <div
              key={event.id}
              onClick={() => setActiveModalEvent(event)}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-xl hover:border-blue-400 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image Frame with Zoom Effect */}
                <div className="relative h-48 sm:h-56 bg-slate-900 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-85" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-bold text-white border border-white/20">
                    {event.category}
                  </div>

                  {/* Facebook Link Chip on Thumbnail */}
                  <a
                    href={fbLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-3 right-3 bg-[#1877F2] hover:bg-[#0d65d9] text-white px-2.5 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1.5 shadow-md transition-colors"
                    title="Open Facebook post"
                  >
                    <Facebook className="w-3 h-3 fill-white" />
                    <span>Facebook Post</span>
                    <ExternalLink className="w-2.5 h-2.5 text-white/80" />
                  </a>

                  {/* Bottom Meta */}
                  <div className="absolute bottom-2.5 left-3 right-3 text-white">
                    <div className="flex items-center gap-2 text-[11px] text-blue-200">
                      <span className="flex items-center gap-1 font-medium">
                        <Calendar className="w-3 h-3" />
                        <span>{event.date}</span>
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1 truncate text-slate-200">
                        <MapPin className="w-3 h-3 text-[#BA141A]" />
                        <span className="truncate">{event.location}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Text Info */}
                <div className="p-4 sm:p-5 space-y-2">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 font-display group-hover:text-[#00239C] transition-colors leading-snug">
                    {event.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Highlights tags */}
                  <div className="pt-2 flex flex-wrap gap-1">
                    {event.highlights.slice(0, 2).map((h, i) => (
                      <span key={i} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions Bar with Facebook Link */}
              <div className="p-4 pt-2.5 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between text-xs">
                <a
                  href={fbLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 font-bold text-[#1877F2] hover:underline"
                >
                  <Facebook className="w-3.5 h-3.5 fill-current" />
                  <span>View on Facebook ↗</span>
                </a>

                <span className="text-slate-500 font-semibold group-hover:text-[#00239C] flex items-center gap-1">
                  <span>Photo Gallery</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Image & Facebook Modal */}
      {activeModalEvent && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200"
          onClick={() => setActiveModalEvent(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative text-slate-800 flex flex-col border border-slate-200 max-h-[92vh]"
            onClick={e => e.stopPropagation()}
          >
            {/* Image Header with Close Button */}
            <div className="relative aspect-video max-h-72 bg-slate-950 overflow-hidden">
              <img
                src={activeModalEvent.image}
                alt={activeModalEvent.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              <button
                type="button"
                onClick={() => setActiveModalEvent(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
                aria-label="Close image modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="absolute bottom-3 left-4 right-4 text-white">
                <span className="px-2 py-0.5 rounded bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider mb-1 inline-block">
                  {activeModalEvent.category}
                </span>
                <h3 className="text-base sm:text-xl font-bold font-display leading-tight">
                  {activeModalEvent.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#00239C]" />
                  <span className="font-semibold text-slate-700">{activeModalEvent.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#BA141A]" />
                  <span className="font-semibold text-slate-700">{activeModalEvent.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-emerald-600" />
                  <span className="font-semibold text-slate-700">{activeModalEvent.attendees}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {activeModalEvent.description}
              </p>

              {/* Highlights */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Key Highlights & Outcomes:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalEvent.highlights.map((h, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-medium text-slate-800 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dedicated Facebook Post Link Section */}
              <div className="p-3.5 bg-blue-50/70 border border-blue-200/80 rounded-2xl space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs">
                    <Facebook className="w-4 h-4 text-[#1877F2] fill-[#1877F2]" />
                    <span className="font-bold text-slate-900">Official Facebook Post:</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(activeModalEvent.facebookUrl);
                        setCopiedFbLink(true);
                        setTimeout(() => setCopiedFbLink(false), 2000);
                        showToast('Facebook post link copied to clipboard!', 'success');
                      }}
                      className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 text-[11px] font-semibold hover:bg-slate-50 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      {copiedFbLink ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedFbLink ? 'Copied' : 'Copy Link'}</span>
                    </button>

                    <a
                      href={activeModalEvent.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1 bg-[#1877F2] hover:bg-[#0d65d9] text-white text-[11px] font-bold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <span>Open on Facebook</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-[#1877F2] hover:underline truncate">
                  <a href={activeModalEvent.facebookUrl} target="_blank" rel="noopener noreferrer">
                    {activeModalEvent.facebookUrl}
                  </a>
                </div>
              </div>

              {/* Bottom Action Buttons in Modal */}
              <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-500">
                  Attend our upcoming campus session or seminar:
                </span>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveModalEvent(null);
                      navigateTo('apply', { notes: `Registered for next ${activeModalEvent.title}` });
                    }}
                    className="w-full sm:w-auto px-4 py-2 bg-[#00239C] hover:bg-[#001869] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                  >
                    Register for Next Event
                  </button>
                  <a
                    href={`https://wa.me/94761415273?text=Hi%20BCAS,%20I%20would%20like%20to%20register%20for%20the%20${encodeURIComponent(activeModalEvent.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-3.5 py-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
