import React from 'react';
import { Award, Shield, Globe, Users, ArrowRight, Building2, CheckCircle2, ArrowLeft, Sparkles } from 'lucide-react';
import { BcasLogo } from '../components/common/BcasLogo';

interface AboutViewProps {
  onBookConsultation: () => void;
  onExploreDestinations: () => void;
  onNavigateHome?: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onBookConsultation,
  onExploreDestinations,
  onNavigateHome
}) => {
  return (
    <div className="pt-20 pb-20 bg-slate-50 min-h-screen">
      {/* Top Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            {onNavigateHome && (
              <button
                onClick={onNavigateHome}
                className="hover:text-[#103578] font-semibold flex items-center gap-1 cursor-pointer transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Home</span>
              </button>
            )}
            {onNavigateHome && <span>/</span>}
            <span className="text-[#103578] font-bold">About BCAS Heritage</span>
          </div>

          <button
            onClick={onBookConsultation}
            className="px-3.5 py-1.5 rounded-lg bg-[#C41822] hover:bg-[#a3141a] text-white text-xs font-bold transition-all shadow-2xs cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Book Consultation</span>
          </button>
        </div>
      </div>

      {/* Header */}
      <div className="bg-[#103578] text-white py-14 border-b border-blue-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-rose-300 text-xs font-semibold uppercase tracking-[0.08em] leading-none brand-label mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>27+ Years of Heritage</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.02em] leading-[0.98] brand-hero [text-wrap:balance]">
            About BCAS International University Placement
          </h1>
          <p className="mt-3 text-slate-200 text-sm sm:text-base max-w-2xl leading-[1.4] tracking-normal brand-body">
            Established in 1999, the British College of Applied Studies (BCAS) is one of Sri Lanka’s premier higher education providers, bridging ambitious students with leading international universities.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Story Section */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-block">
                <BcasLogo variant="light" size="lg" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Your Trusted Gateway to Global Academic Excellence
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                For more than two and a half decades, BCAS Campus has pioneered UK-standard higher education and Pearson BTEC pathway programs in Sri Lanka. Recognizing the expanding aspirations of Sri Lankan students to gain international degrees abroad, <strong className="text-slate-900">BCAS International University Placement</strong> was established to provide direct, ethical, and accredited university placement services.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We maintain direct representation agreements with prestigious universities in the United Kingdom, Canada, Australia, New Zealand, the United States, and the UAE, ensuring student applications receive priority evaluation, dedicated scholarship considerations, and meticulous visa guidance.
              </p>
            </div>

            <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/80 space-y-6">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
                BCAS By The Numbers
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-black text-[#103578]">27+</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">Years of Academic Heritage</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-[#C41822]">21,000+</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">Graduates Worldwide</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-[#103578]">100+</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">Partner University Options</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-[#C41822]">98%</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">Visa Compliance Success</div>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-500 flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Recognized by international university admission boards</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars / Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#103578] flex items-center justify-center">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Direct University Partnerships</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We work directly with authorized international admissions offices, giving our students authentic, transparent application status tracking without intermediaries.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-rose-50 text-[#C41822] flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Zero Hidden Charges</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our university counseling and application processing services are free for eligible students. You pay tuition fees directly to your destination university.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#103578] flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Personalized Mentorship</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Each student is assigned a dedicated placement counselor who understands visa regulations, entry qualifications, and scholarship guidelines inside and out.
            </p>
          </div>
        </div>

        {/* Action Callout */}
        <div className="bg-[#103578] text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold">Ready to begin your international journey?</h3>
            <p className="text-slate-200 text-sm sm:text-base max-w-xl">
              Meet our team at our Colombo Campus (356, Galle Road) or our Jaffna, Kalmunai, and Kandy centers, or book a free video consultation today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={onExploreDestinations}
              className="py-3 px-5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold transition-all text-center cursor-pointer"
            >
              Explore Destinations
            </button>
            <button
              onClick={onBookConsultation}
              className="py-3 px-5 rounded-xl bg-[#C41822] hover:bg-[#a3141a] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
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
