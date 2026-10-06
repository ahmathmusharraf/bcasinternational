import React, { useState, useEffect } from 'react';
import { Compass, Briefcase, GraduationCap, MapPin, DollarSign, Calendar, ArrowRight, CheckCircle2, Globe, HelpCircle, ChevronDown } from 'lucide-react';
import { DESTINATIONS_DATA, UNIVERSITIES_DATA } from '../data/mockData';
import { DestinationCountry, University } from '../types';
import { DestinationLogo } from '../components/common/DestinationLogos';

interface DestinationsViewProps {
  onSelectUniversity: (uni: University) => void;
  onBookConsultation: (country?: DestinationCountry) => void;
  initialCountry?: DestinationCountry | null;
  onNavigateHome?: () => void;
}

export const DestinationsView: React.FC<DestinationsViewProps> = ({
  onSelectUniversity,
  onBookConsultation,
  initialCountry,
  onNavigateHome
}) => {
  const [selectedCountry, setSelectedCountry] = useState<DestinationCountry>(
    initialCountry || 'UK'
  );
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    if (initialCountry) {
      setSelectedCountry(initialCountry);
    }
  }, [initialCountry]);

  const destination = DESTINATIONS_DATA.find((d) => d.country === selectedCountry) || DESTINATIONS_DATA[0];
  const relatedUniversities = UNIVERSITIES_DATA.filter((u) => u.country === selectedCountry);

  const countryFaqs: Record<DestinationCountry, { q: string; a: string }[]> = {
    USA: [
      {
        q: 'What is the STEM OPT extension in the United States?',
        a: 'International students completing degrees in Science, Technology, Engineering, or Mathematics (STEM) can extend their 12-month Optional Practical Training (OPT) by an additional 24 months, for a total of 3 years of US work authorization.'
      },
      {
        q: 'How does the F-1 student visa interview process work?',
        a: 'BCAS counselors conduct thorough 1-on-1 mock interviews to prepare you for the US Embassy consular interview, covering study rationale, university choice, and financial documentation.'
      },
      {
        q: 'Can I apply for scholarships in the USA?',
        a: 'Yes, our partner American universities provide merit-based awards and international tuition discounts up to $12,000/year.'
      }
    ],
    Canada: [
      {
        q: 'How does the Post-Graduation Work Permit (PGWP) work in Canada?',
        a: 'Graduates of eligible Canadian designated learning institutions (DLIs) can receive an open work permit of up to 3 years, allowing them to gain valuable Canadian work experience.'
      },
      {
        q: 'What are the main intake periods in Canada?',
        a: 'The primary intake is September (Fall), followed by January (Winter) and May (Spring) for select programs.'
      },
      {
        q: 'Can I work while studying in Canada?',
        a: 'Eligible full-time international students can work on or off-campus up to authorized hours during study terms and full-time during scheduled study breaks.'
      }
    ],
    UK: [
      {
        q: 'Can international students work during studies in the UK?',
        a: 'Yes, international students on a Student Visa are typically permitted to work up to 20 hours per week during term time and full-time (40 hours per week) during official holiday vacation periods.'
      },
      {
        q: 'What is the UK Graduate Route Post-Study Work Visa?',
        a: 'The Graduate Route allows international graduates with an eligible UK Bachelor’s or Master’s degree to stay and work (or search for work) in the UK for 2 years (3 years for doctoral graduates) without requiring company sponsorship.'
      },
      {
        q: 'Can I apply for scholarships with BCAS guidance?',
        a: 'Yes. BCAS partner universities offer regional merit scholarships ranging from £1,000 to £5,000+ which are evaluated during initial application screening.'
      }
    ],
    Australia: [
      {
        q: 'What are the post-study work visa rights in Australia (Subclass 485)?',
        a: 'International graduates can qualify for the Temporary Graduate Visa (Subclass 485), granting 2 to 4 years of stay depending on degree level and regional campus location bonuses.'
      },
      {
        q: 'What is the Australian intake timeline?',
        a: 'The primary academic year begins in Semester 1 (February/March) and Semester 2 (July/August), with select institutions offering a November summer trimester.'
      },
      {
        q: 'Does BCAS provide IELTS and PTE test preparation?',
        a: 'Yes, BCAS offers specialized language testing coaching and assists students in securing English requirement waivers where eligible.'
      }
    ],
    Ireland: [
      {
        q: 'What is the Third Level Graduate Scheme (Stamp 1G) in Ireland?',
        a: 'Non-EEA graduates who have completed a Master’s degree in Ireland can remain and work for up to 24 months (12 months for Bachelor’s graduates) without an employment permit.'
      },
      {
        q: 'Why is Ireland popular for tech and business students?',
        a: 'Dublin is the European home of tech giants like Google, Meta, Apple, and Pfizer, offering unmatched internship and career placement opportunities.'
      },
      {
        q: 'Can students work part-time in Ireland?',
        a: 'Yes, international students can work up to 20 hours per week during term time and 40 hours per week during holiday periods.'
      }
    ],
    Germany: [
      {
        q: 'What are tuition fees like in Germany?',
        a: 'Most German state universities charge minimal administrative fees (often under €1,500/year), while state-accredited private universities provide focused English degrees with generous scholarships.'
      },
      {
        q: 'What is the post-study job seeker visa in Germany?',
        a: 'Graduates can extend their residence permit for up to 18 months to seek employment related to their field of study across Germany.'
      },
      {
        q: 'Are courses taught in English in Germany?',
        a: 'Yes, our partner universities offer 100% English-taught Bachelor’s and Master’s programs in Engineering, Data Science, AI, and International Business.'
      }
    ],
    Malaysia: [
      {
        q: 'What degrees can I study in Malaysia?',
        a: 'You can study for UK and Australian university qualifications awarded by prestigious branch campuses like University of Nottingham Malaysia at a substantially lower tuition and living expense.'
      },
      {
        q: 'How fast is the Malaysian student visa process?',
        a: 'Malaysian Student Passes (EMGS) are processed reliably and swiftly with straightforward document requirements.'
      },
      {
        q: 'Can I transfer to the UK or Australia?',
        a: 'Yes, branch campuses allow 1+2 or 2+1 campus transfer pathways to complete your final year at the home campus.'
      }
    ],
    Singapore: [
      {
        q: 'What are the benefits of studying in Singapore?',
        a: 'Singapore is a global financial center and high-tech safe metropolis offering accelerated tri-semester degrees from top Australian and UK institutions.'
      },
      {
        q: 'Can international graduates find employment in Singapore?',
        a: 'Graduates frequently access corporate internships and apply for Employment Passes or S-Passes with multinational firms.'
      }
    ],
    UAE: [
      {
        q: 'What are the benefits of studying at a British branch campus in Dubai?',
        a: 'You receive an identical UK university degree certificate and academic transcript at competitive tuition and living costs, with streamlined visa issuance and proximity to Sri Lanka.'
      },
      {
        q: 'Can I transfer from Dubai to the UK campus?',
        a: 'Yes, branch campuses like Middlesex University Dubai provide inter-campus transfer pathways allowing students to complete their final year in the UK.'
      }
    ],
    Malta: [
      {
        q: 'Is English an official language in Malta?',
        a: 'Yes, English is an official national language. All higher education lectures and exams are conducted 100% in English.'
      },
      {
        q: 'Can international students work in Malta?',
        a: 'Yes, international students holding a valid student visa can work part-time up to 20 hours per week after the initial 90 days of study.'
      },
      {
        q: 'Does Malta belong to the European Schengen Area?',
        a: 'Yes, Malta is an EU and Schengen member state, giving international students visa-free travel privileges across European Schengen countries.'
      }
    ],
    Spain: [
      {
        q: 'What can I study in Spain in English?',
        a: 'Spain is home to top-ranked European business schools offering 100% English-taught BBA, MBA, and MSc degrees in Marketing, Finance, and Entrepreneurship.'
      },
      {
        q: 'Can international students work in Spain?',
        a: 'Yes, recent Spanish regulations permit international students to work up to 30 hours per week alongside their studies.'
      },
      {
        q: 'What are the post-study work rights in Spain?',
        a: 'Graduates can apply for a 1-year residence authorization for job search or business creation across the Schengen zone.'
      }
    ]
  };

  const currentFaqs = countryFaqs[selectedCountry] || countryFaqs.UK;

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
                <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                <span>Home</span>
              </button>
            )}
            {onNavigateHome && <span>/</span>}
            <span className="text-[#103578] font-bold">Study Destinations</span>
          </div>

          <button
            onClick={() => onBookConsultation(selectedCountry)}
            className="px-3.5 py-1.5 rounded-lg bg-[#C41822] hover:bg-[#a3141a] text-white text-xs font-bold transition-all shadow-2xs cursor-pointer flex items-center gap-1.5"
          >
            <span>Apply to {selectedCountry}</span>
          </button>
        </div>
      </div>

      {/* View Header */}
      <div className="bg-[#103578] text-white py-14 border-b border-blue-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-rose-300 text-xs font-semibold uppercase tracking-[0.08em] leading-none brand-label mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Study Destinations Guide</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.02em] leading-[0.98] brand-hero [text-wrap:balance]">
            Explore International Study Destinations
          </h1>
          <p className="mt-3 text-slate-200 text-sm sm:text-base max-w-2xl leading-[1.4] tracking-normal brand-body">
            Compare post-study work regulations, cost of living, academic structures, and intake periods across top global education destinations.
          </p>

          {/* Country Selector Tabs */}
          <div className="flex flex-wrap gap-2 pt-8">
            {DESTINATIONS_DATA.map((d) => (
              <button
                key={d.country}
                onClick={() => setSelectedCountry(d.country)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  selectedCountry === d.country
                    ? 'bg-white text-[#103578] shadow-lg ring-2 ring-white/50'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                <span>{d.flagEmoji}</span>
                <span>{d.country}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Destination Detail Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Info Area */}
          <div className="lg:col-span-8 space-y-8">
            {/* Hero Card */}
            <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm">
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <img
                  src={destination.image}
                  alt={`Study in ${destination.country}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <DestinationLogo country={destination.country} variant="card-badge" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold">{destination.headline}</h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Why Study in {destination.country}?</h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {destination.description}
                  </p>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                      <DollarSign className="w-4 h-4 text-[#103578]" />
                      Average Tuition Range
                    </div>
                    <div className="text-base font-bold text-slate-900">{destination.averageTuitionYearly}</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                      <DollarSign className="w-4 h-4 text-[#C41822]" />
                      Estimated Living Costs
                    </div>
                    <div className="text-base font-bold text-slate-900">{destination.livingCostsYearly}</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                      <Briefcase className="w-4 h-4 text-emerald-600" />
                      Post-Study Work Permit
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-900">{destination.postStudyWork}</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      Primary Intakes
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-900">{destination.typicalIntakes.join(', ')}</div>
                  </div>
                </div>

                {/* Popular Study Areas */}
                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-[#103578]" />
                    Top Academic Disciplines in {destination.country}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {destination.popularStudyAreas.map((area, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg bg-blue-50/80 border border-blue-200/60 text-[#103578] text-xs font-semibold"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Popular Cities */}
                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#C41822]" />
                    Prominent Student Cities
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {destination.topCities.map((city, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Related Universities in this Destination */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">
                Partner Institutions in {destination.country}
              </h3>

              {relatedUniversities.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedUniversities.map((uni) => (
                    <div
                      key={uni.id}
                      className="bg-white rounded-2xl border border-slate-200/90 p-5 hover:border-[#103578] hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                          <span className="font-semibold text-slate-700">{uni.city}</span>
                          <span className="bg-slate-100 px-2 py-0.5 rounded font-bold text-slate-600">
                            {uni.intakes[0]}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-slate-900 leading-snug">{uni.name}</h4>
                        <p className="text-xs text-slate-600 mt-2 line-clamp-2">{uni.overview}</p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-[#C41822]">
                          {uni.scholarshipInfo ? 'Scholarships Available' : 'Direct Admission'}
                        </span>
                        <button
                          onClick={() => onSelectUniversity(uni)}
                          className="py-1.5 px-3 rounded-lg bg-[#103578] hover:bg-[#0a234e] text-white text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                        >
                          <span>View Details</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center bg-white rounded-2xl border border-slate-200">
                  <p className="text-sm text-slate-600">
                    Additional institutional links for {destination.country} are actively processed by our counseling desk.
                  </p>
                </div>
              )}
            </div>

            {/* Destination Specific FAQ */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#103578]" />
                Frequently Asked Questions about {destination.country}
              </h3>
              <div className="space-y-3 pt-2">
                {currentFaqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-xl overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                      className="w-full p-4 text-left font-bold text-sm text-slate-900 flex items-center justify-between gap-3 bg-slate-50/50 hover:bg-slate-50 cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${
                          openFaqIndex === idx ? 'rotate-180 text-[#103578]' : ''
                        }`}
                      />
                    </button>
                    {openFaqIndex === idx && (
                      <div className="p-4 text-xs sm:text-sm text-slate-600 bg-white leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Guidance & Next Steps */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm space-y-5">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                BCAS Placement Support for {destination.country}
              </h3>

              <div className="space-y-3.5 text-xs text-slate-600">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Direct university application submission without agent markups</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Statement of Purpose (SOP) & academic resume drafting review</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Verification of financial sponsorship and bank documentation</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Full student visa filing with biometric scheduling assistance</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onBookConsultation(destination.country)}
                  className="w-full py-3 px-4 rounded-xl bg-[#C41822] hover:bg-[#a3141a] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Globe className="w-4 h-4" />
                  <span>Apply for {destination.country} Today</span>
                </button>
              </div>
            </div>

            {/* Quick Visa Fact Sheet */}
            <div className="bg-gradient-to-br from-[#103578] to-[#0a234e] text-white rounded-3xl p-6 shadow-md space-y-4">
              <h4 className="text-base font-bold flex items-center gap-2">
                <span>{destination.flagEmoji}</span>
                <span>Fast Visa Facts</span>
              </h4>
              <p className="text-xs text-slate-200 leading-relaxed">
                Visa rules vary by degree level and university tier. BCAS ensures strict compliance with current embassy guidelines to maximize acceptance rates.
              </p>
              <div className="pt-2 border-t border-white/10 text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-300">Processing Timeline:</span>
                  <span className="font-bold">3 – 6 Weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Work During Term:</span>
                  <span className="font-bold">Up to 20 hrs/week</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Full-Time Holidays:</span>
                  <span className="font-bold">40 hrs/week</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
