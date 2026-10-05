import React, { useState } from 'react';
import { Play, X, Star, Quote, Award, CheckCircle2, GraduationCap, ArrowRight, Volume2, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import studentPosterImg from '../../assets/images/student_video_poster_1790916022433.jpg';
import destinationUkImg from '../../assets/images/destination_uk_london_1790913388578.jpg';
import destinationCanadaImg from '../../assets/images/destination_canada_campus_1790914014315.jpg';
import destinationAusImg from '../../assets/images/destination_australia_sydney_1790914025860.jpg';

interface VideoTestimonial {
  id: string;
  studentName: string;
  course: string;
  university: string;
  country: string;
  countryFlag: string;
  homeCampus: string;
  duration: string;
  thumbnail: string;
  scholarshipAwarded: string;
  quote: string;
  rating: number;
}

interface TestimonialVideoSectionProps {
  onBookConsultation: () => void;
}

export const TestimonialVideoSection: React.FC<TestimonialVideoSectionProps> = ({
  onBookConsultation
}) => {
  const [activeVideo, setActiveVideo] = useState<VideoTestimonial | null>(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState<number>(0);

  const testimonials: VideoTestimonial[] = [
    {
      id: 'video-1',
      studentName: 'Mohamed Riswan',
      course: 'MSc Artificial Intelligence & Data Analytics',
      university: 'Coventry University',
      country: 'United Kingdom',
      countryFlag: '🇬🇧',
      homeCampus: 'BCAS Colombo Campus',
      duration: '02:45',
      thumbnail: studentPosterImg,
      scholarshipAwarded: '£3,000 Academic Merit Award',
      quote: 'BCAS made the UK university application completely stress-free. From university shortlisting to securing my CAS and visa within 14 days, their counselors guided me at every step.',
      rating: 5
    },
    {
      id: 'video-2',
      studentName: 'Ashani Fernando',
      course: 'BSc (Hons) Computer Science (Final Year Top-Up)',
      university: 'University of Hertfordshire',
      country: 'United Kingdom',
      countryFlag: '🇬🇧',
      homeCampus: 'BCAS Colombo Campus',
      duration: '03:10',
      thumbnail: destinationUkImg,
      scholarshipAwarded: '£2,500 Chancellor’s Scholarship',
      quote: 'After finishing my Pearson BTEC HND at BCAS, transferring to Hertfordshire for my final year top-up was seamless. BCAS transferred all my credits with zero agency fees.',
      rating: 5
    },
    {
      id: 'video-3',
      studentName: 'Dinesh Kumar',
      course: 'Bachelor of Business Administration (Project Management)',
      university: 'Yorkville University',
      country: 'Canada',
      countryFlag: '🇨🇦',
      homeCampus: 'BCAS Jaffna Campus',
      duration: '02:30',
      thumbnail: destinationCanadaImg,
      scholarshipAwarded: 'CAD $4,000 Regional Bursary',
      quote: 'Applying for Canada from Jaffna seemed overwhelming until I met BCAS. They handled my GIC account guidance, financial profiling, and study permit filing with complete professionalism.',
      rating: 5
    },
    {
      id: 'video-4',
      studentName: 'Fathima Nabeela',
      course: 'Master of Information Technology',
      university: 'Deakin University',
      country: 'Australia',
      countryFlag: '🇦🇺',
      homeCampus: 'BCAS Kandy Campus',
      duration: '03:25',
      thumbnail: destinationAusImg,
      scholarshipAwarded: '25% STEM Global Scholarship',
      quote: 'The counselors at BCAS Kandy evaluated my profile and helped me land a 25% tuition scholarship at Deakin Melbourne. I highly recommend BCAS to all ambitious Sri Lankan students.',
      rating: 5
    }
  ];

  const activeStory = testimonials[activeStoryIndex];

  const handlePrev = () => {
    setActiveStoryIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setActiveStoryIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  return (
    <section 
      id="stories" 
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white relative overflow-hidden"
    >
      {/* Background glow accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#103578]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-[#C41822]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative">
        
        {/* Friendly Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-rose-300 text-xs font-semibold uppercase tracking-[0.08em] leading-none brand-label mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Verified Alumni Success</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.01em] leading-[1.05] brand-headline text-white [text-wrap:balance]">
              Student Video Testimonials
            </h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-xl leading-[1.4] tracking-normal brand-body">
              Real stories from Sri Lankan students placed at top UK, Canada, and Australia universities.
            </p>
          </div>

          {/* Navigation Controls: Prev / Next */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white flex items-center justify-center cursor-pointer transition-all active:scale-90"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-bold text-slate-400 tabular-nums">
              {activeStoryIndex + 1}/{testimonials.length}
            </span>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white flex items-center justify-center cursor-pointer transition-all active:scale-90"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* User-Friendly Quick Student Selector Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1.5 mb-2 shrink-0">
          {testimonials.map((t, idx) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveStoryIndex(idx)}
              className={`shrink-0 py-1.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer border ${
                activeStoryIndex === idx
                  ? 'bg-[#C41822] text-white border-[#C41822] shadow-md scale-102'
                  : 'bg-slate-800/90 text-slate-300 border-slate-700 hover:bg-slate-700'
              }`}
            >
              <span>{t.countryFlag}</span>
              <span>{t.studentName.split(' ')[0]}</span>
              <span className="text-[10px] opacity-75 font-normal">({t.university.split(' ')[0]})</span>
            </button>
          ))}
        </div>

        {/* User-Friendly Highlighted Testimonial Card */}
        <div className="bg-slate-800/90 rounded-2xl sm:rounded-3xl border border-slate-700 p-3.5 sm:p-7 shadow-2xl flex-1 max-h-[440px] md:max-h-none flex flex-col justify-between">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-8 items-center flex-1">
            
            {/* Video Thumbnail with Interactive Play Button */}
            <div 
              className="lg:col-span-6 relative rounded-xl sm:rounded-2xl overflow-hidden aspect-video max-h-[175px] sm:max-h-[260px] bg-slate-950 border border-slate-700 group cursor-pointer shadow-inner"
              onClick={() => setActiveVideo(activeStory)}
            >
              <img
                src={activeStory.thumbnail}
                alt={activeStory.studentName}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              {/* Pulsing Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-11 h-11 sm:w-16 sm:h-16 rounded-full bg-[#C41822] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 sm:w-7 sm:h-7 fill-white ml-0.5" />
                </div>
              </div>

              {/* Badges on Video */}
              <div className="absolute top-2 left-2 bg-slate-950/80 backdrop-blur-md px-2 py-0.5 rounded-md text-[10px] font-bold text-white flex items-center gap-1 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{activeStory.duration} Video</span>
              </div>

              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[11px] text-slate-200">
                <span className="font-bold text-white truncate">{activeStory.countryFlag} {activeStory.country}</span>
                <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-semibold text-white">
                  Tap to Watch
                </span>
              </div>
            </div>

            {/* Student Review & Credentials Details */}
            <div className="lg:col-span-6 space-y-2 sm:space-y-3.5 flex flex-col justify-between">
              
              {/* Star Rating & Scholarship Tag */}
              <div className="flex flex-wrap items-center justify-between gap-1.5">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-[11px] font-bold text-amber-300 ml-1">5.0 Verified Student</span>
                </div>

                <span className="text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 flex items-center gap-1">
                  <Award className="w-3 h-3 text-rose-300" />
                  <span>{activeStory.scholarshipAwarded}</span>
                </span>
              </div>

              {/* Student Name & Placement Info */}
              <div>
                <h3 className="text-base sm:text-2xl font-black text-white leading-tight">
                  {activeStory.studentName}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-blue-300 mt-0.5 line-clamp-1">
                  {activeStory.course}
                </p>
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5 mt-0.5 font-medium">
                  <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                  <span className="truncate">{activeStory.university}</span>
                  <span>•</span>
                  <span className="text-slate-300">{activeStory.homeCampus}</span>
                </div>
              </div>

              {/* Student Quote Box: Pull Quote Brand Hierarchy (Grift Light Italic, 0 tracking, 120% leading) */}
              <div className="p-3 sm:p-5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-xs sm:text-sm text-slate-200 font-light italic leading-[1.2] tracking-normal brand-pull-quote relative">
                <Quote className="w-4 h-4 text-rose-400/70 mb-1 inline-block mr-1.5" />
                <span>"{activeStory.quote}"</span>
              </div>

              {/* User-Friendly Action Buttons */}
              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setActiveVideo(activeStory)}
                  className="flex-1 py-2 sm:py-2.5 px-3 rounded-xl bg-[#103578] hover:bg-[#0c2859] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shadow-md"
                >
                  <Play className="w-3 h-3 fill-white" />
                  <span>Watch Video Reflection</span>
                </button>

                <button
                  type="button"
                  onClick={onBookConsultation}
                  className="py-2 sm:py-2.5 px-3 rounded-xl bg-[#C41822] hover:bg-[#a3141a] text-white text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer active:scale-95 shadow-md whitespace-nowrap"
                >
                  <span>Apply Like {activeStory.studentName.split(' ')[0]}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Indicator Dots for Easy Pagination */}
        <div className="flex items-center justify-center gap-1.5 pt-2 shrink-0">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveStoryIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                activeStoryIndex === i ? 'w-6 bg-[#C41822]' : 'w-1.5 bg-slate-700 hover:bg-slate-600'
              }`}
            />
          ))}
        </div>

      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl flex flex-col">
            
            {/* Modal Header */}
            <div className="p-3.5 bg-slate-950 text-white flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2 truncate">
                <span className="text-base">{activeVideo.countryFlag}</span>
                <span className="text-xs sm:text-sm font-bold truncate">{activeVideo.studentName} · {activeVideo.university}</span>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Screen Simulation */}
            <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeVideo.thumbnail}
                alt={activeVideo.studentName}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />

              {/* Center Play Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-[#C41822] text-white flex items-center justify-center shadow-2xl">
                  <Play className="w-6 h-6 fill-white ml-0.5" />
                </div>
                <div className="max-w-md">
                  <h4 className="text-base font-bold text-white">{activeVideo.studentName}’s Story</h4>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                    "{activeVideo.quote}"
                  </p>
                </div>
              </div>

              {/* Controls bar */}
              <div className="absolute bottom-0 left-0 right-0 p-2.5 bg-gradient-to-t from-black to-transparent flex items-center justify-between text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Play className="w-3.5 h-3.5 fill-white text-white cursor-pointer" />
                  <span className="text-[11px] font-mono">00:45 / {activeVideo.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-slate-400" />
                  <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-emerald-400 font-bold">1080p HD</span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-900 flex items-center justify-between gap-3">
              <div>
                <span className="text-xs text-rose-300 font-bold">{activeVideo.scholarshipAwarded}</span>
                <p className="text-xs text-slate-300">{activeVideo.course}</p>
              </div>

              <button
                onClick={() => {
                  setActiveVideo(null);
                  onBookConsultation();
                }}
                className="py-2 px-4 bg-[#C41822] hover:bg-[#a3141a] text-white text-xs font-bold rounded-xl shadow transition-all cursor-pointer whitespace-nowrap"
              >
                Apply Like {activeVideo.studentName.split(' ')[0]}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
