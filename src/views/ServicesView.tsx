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
  FileText
} from 'lucide-react';

interface ServicesViewProps {
  onBookConsultation: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onBookConsultation }) => {
  const services = [
    {
      icon: <Compass className="w-6 h-6 text-[#103578]" />,
      title: 'University & Course Selection',
      desc: 'Expert evaluation of your past academic background, interests, budget, and career goals to select institutions matching your exact profile.'
    },
    {
      icon: <FileCheck2 className="w-6 h-6 text-[#C41822]" />,
      title: 'Application & Admission Processing',
      desc: 'Direct submission of your applications through official university representative channels for priority review and prompt offer generation.'
    },
    {
      icon: <FileText className="w-6 h-6 text-[#103578]" />,
      title: 'Statement of Purpose (SOP) Assistance',
      desc: 'Personalized guidance on structuring and polishing compelling SOPs, personal statements, and academic resumes that stand out to admissions tutors.'
    },
    {
      icon: <Award className="w-6 h-6 text-[#C41822]" />,
      title: 'Scholarship Evaluation & Application',
      desc: 'Identification of institutional merit scholarships, country bursaries, and alumni discounts to maximize your educational funding.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#103578]" />,
      title: 'Student Visa Guidance & Mock Interviews',
      desc: 'Rigorous preparation of financial affidavits, proof of funds, and compliance checks with 1-on-1 interview practice for embassy assessments.'
    },
    {
      icon: <Languages className="w-6 h-6 text-[#C41822]" />,
      title: 'English Language Testing Support',
      desc: 'Guidance on IELTS, PTE Academic, and university-internal English proficiency waivers based on your prior English-medium qualifications.'
    },
    {
      icon: <Home className="w-6 h-6 text-[#103578]" />,
      title: 'Accommodation & Housing Assistance',
      desc: 'Guidance on choosing between on-campus university halls of residence, private student studios, and vetted homestay options abroad.'
    },
    {
      icon: <PlaneTakeoff className="w-6 h-6 text-[#C41822]" />,
      title: 'Pre-Departure Briefing & Arrival Support',
      desc: 'Comprehensive briefings on foreign currency exchange, health insurance, local SIM cards, packing essentials, and airport pickup.'
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-[#103578] text-white py-14 border-b border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-rose-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Headphones className="w-3.5 h-3.5" />
            <span>Comprehensive Student Support</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            BCAS International Student Services
          </h1>
          <p className="mt-3 text-slate-200 text-sm sm:text-base max-w-2xl">
            From your very first counselling session to your campus arrival, our dedicated university placement services ensure you are guided every step of the way.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:shadow-lg hover:border-blue-200 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#103578] transition-colors leading-snug">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-[11px] font-bold text-slate-400 group-hover:text-[#C41822] transition-colors">
                <span>Free Service For Students</span>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Banner */}
        <div className="mt-14 bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-block text-xs font-bold text-[#C41822] bg-rose-50 px-2.5 py-1 rounded">
              Zero Agency Consultation Fee
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Transparent, Professional, and Student-First Counseling
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              As an authorized representative of international universities, BCAS provides free placement guidance, application submission, and visa coaching to qualified students.
            </p>
          </div>

          <button
            onClick={onBookConsultation}
            className="shrink-0 py-3.5 px-6 rounded-xl bg-[#103578] hover:bg-[#0a234e] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Book Your Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
