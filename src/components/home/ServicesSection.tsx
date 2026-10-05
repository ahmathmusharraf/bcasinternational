import React from 'react';
import {
  Compass,
  FileCheck2,
  Award,
  ShieldCheck,
  Languages,
  Home,
  PlaneTakeoff,
  ArrowRight,
  Headphones,
  FileText,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface ServicesSectionProps {
  onBookConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookConsultation }) => {
  const services = [
    {
      icon: <Compass className="w-6 h-6 text-[#103578]" />,
      title: 'University & Course Selection',
      desc: 'Expert profile evaluation of your past academic results, budget, target destination, and career objectives to match you with accredited global institutions.'
    },
    {
      icon: <FileCheck2 className="w-6 h-6 text-[#C41822]" />,
      title: 'Direct Application & Offer Processing',
      desc: 'Fast-tracked document submission through official representative agreements for swift conditional and unconditional offer letter turnaround.'
    },
    {
      icon: <FileText className="w-6 h-6 text-[#103578]" />,
      title: 'SOP & Personal Statement Mentorship',
      desc: '1-on-1 editorial review on drafting compelling Statements of Purpose (SOP), letters of intent, and academic CVs that impress admissions committees.'
    },
    {
      icon: <Award className="w-6 h-6 text-[#C41822]" />,
      title: 'Scholarship Optimization & Grants',
      desc: 'Comprehensive screening for automatic merit scholarships, dean’s commendations, early-bird bursaries, and alumni tuition reductions up to 50%.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#103578]" />,
      title: 'Visa Filing & Mock Interview Prep',
      desc: 'Meticulous verification of financial affidavits, bank letters, source of funds, TB screening, and rigorous 1-on-1 interview practice for embassy officers.'
    },
    {
      icon: <Languages className="w-6 h-6 text-[#C41822]" />,
      title: 'IELTS / PTE & Language Waiver Guidance',
      desc: 'In-house British Council and IDP certified test coaching, plus direct eligibility processing for 100% English testing waivers based on your prior studies.'
    },
    {
      icon: <Home className="w-6 h-6 text-[#103578]" />,
      title: 'Student Housing & Accommodation',
      desc: 'Securing safe and affordable on-campus university residences, private student studios, and vetted homestay options prior to departure.'
    },
    {
      icon: <PlaneTakeoff className="w-6 h-6 text-[#C41822]" />,
      title: 'Pre-Departure & Airport Arrival Support',
      desc: 'Essential briefings covering student visa conditions, foreign currency exchange, packing checklists, international SIM cards, and airport pickups.'
    }
  ];

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 shrink-0">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#103578] text-xs font-semibold uppercase tracking-[0.08em] leading-none brand-label mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C41822]" />
            <span>End-to-End Placement Care</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-[-0.01em] leading-[1.05] brand-headline [text-wrap:balance]">
            Comprehensive Student Placement Services
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base leading-[1.4] tracking-normal brand-body">
            From initial university selection to landing at your overseas campus with 100% zero agency fees.
          </p>
        </div>

        {/* Services Grid */}
        <div 
          ref={scrollContainerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-50/90 rounded-2xl border border-slate-200/90 p-5 hover:bg-white hover:border-[#103578] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-sm md:text-base font-bold text-slate-900 group-hover:text-[#103578] transition-colors leading-snug line-clamp-1">
                  {service.title}
                </h3>
                <p className="text-[11px] md:text-xs text-slate-600 mt-1.5 leading-relaxed line-clamp-3">
                  {service.desc}
                </p>
              </div>

              <div className="pt-2 mt-2 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-[10px] font-semibold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Free Service
                </span>
                <span className="text-[10px] text-slate-400 font-mono">0{index + 1}/08</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="bg-[#103578] text-white rounded-2xl md:rounded-3xl p-3.5 sm:p-8 shadow-md flex flex-row items-center justify-between gap-3 shrink-0">
          <div className="space-y-0.5">
            <h3 className="text-xs sm:text-xl font-bold [text-wrap:balance]">
              Have questions regarding admissions or visas?
            </h3>
            <p className="text-slate-200 text-[10px] sm:text-xs line-clamp-1">
              Personalized 1-on-1 counseling across Colombo, Jaffna, Kalmunai & Kandy.
            </p>
          </div>

          <button
            type="button"
            onClick={onBookConsultation}
            className="shrink-0 py-2 px-3 sm:py-3 sm:px-5 rounded-xl bg-[#C41822] hover:bg-[#a3141a] text-white text-[11px] sm:text-xs font-bold shadow-md transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
          >
            <span>Book Free</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
