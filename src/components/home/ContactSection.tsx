import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  ArrowRight, 
  Building, 
  CheckCircle2, 
  Send,
  Sparkles,
  ExternalLink,
  Navigation,
  MessageCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SocialMediaLinks } from '../common/SocialMediaLinks';

interface ContactSectionProps {
  onOpenConsultation: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenConsultation }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredCampus: 'Colombo Campus',
    message: ''
  });
  const [selectedMapCampus, setSelectedMapCampus] = useState(0);
  const [mobileTab, setMobileTab] = useState<'campuses' | 'message' | 'map'>('campuses');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const branches = [
    {
      city: 'Colombo Campus',
      name: 'BCAS City Campus & International Center',
      address: '356, Galle Road, Colombo 03',
      country: 'Sri Lanka',
      phone: '+94 11 7 999 300',
      whatsapp: '+94 77 722 2555',
      email: 'colombo@bcas.lk',
      status: 'Main International Campus',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=356+Galle+Road+Colombo+03+Sri+Lanka',
      embedQuery: '356 Galle Road, Colombo 03, Sri Lanka'
    },
    {
      city: 'Jaffna Campus',
      name: 'BCAS Northern Regional Campus',
      address: '16, Point Pedro Road, Jaffna',
      country: 'Sri Lanka',
      phone: '+94 21 221 9910',
      whatsapp: '+94 77 722 2555',
      email: 'jaffna@bcas.lk',
      status: 'Northern Regional Campus',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=16+Point+Pedro+Road+Jaffna+Sri+Lanka',
      embedQuery: '16 Point Pedro Road, Jaffna, Sri Lanka'
    },
    {
      city: 'Kalmunai Campus',
      name: 'BCAS Eastern Regional Campus',
      address: '392/1, Main Street, Kalmunai',
      country: 'Sri Lanka',
      phone: '+94 67 222 6899',
      whatsapp: '+94 77 722 2555',
      email: 'kalmunai@bcas.lk',
      status: 'Eastern Regional Campus',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=392%2F1+Main+Street+Kalmunai+Sri+Lanka',
      embedQuery: '392/1 Main Street, Kalmunai, Sri Lanka'
    },
    {
      city: 'Kandy Campus',
      name: 'BCAS Central Province Campus',
      address: '344, Peradeniya Road, Kandy',
      country: 'Sri Lanka',
      phone: '+94 81 222 4731',
      whatsapp: '+94 77 722 2555',
      email: 'kandy@bcas.lk',
      status: 'Central Regional Campus',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=344+Peradeniya+Road+Kandy+Sri+Lanka',
      embedQuery: '344 Peradeniya Road, Kandy, Sri Lanka'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 75,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Fallback
      }
    }, 600);
  };

  const activeBranch = branches[selectedMapCampus];

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header with Creative Headline Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 shrink-0">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#103578] border border-blue-100 text-xs font-semibold uppercase tracking-[0.08em] leading-none brand-label mb-2.5 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>CAMPUSES</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600 font-semibold flex items-center gap-1">
              <Building className="w-3.5 h-3.5 text-[#C41822]" />
              Island-Wide Placement Centers
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-[-0.01em] leading-[1.05] brand-headline [text-wrap:balance]">
            Our Campuses Across Sri Lanka
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base leading-[1.4] tracking-normal brand-body">
            Visit our designated university placement centers in <strong>Colombo, Jaffna, Kalmunai, and Kandy</strong> for in-person document assessments and visa interviews.
          </p>

          {/* Mobile Tab Switcher */}
          <div className="flex md:hidden items-center justify-center gap-1 bg-slate-100 p-1 rounded-xl mt-2 max-w-sm mx-auto">
            <button
              type="button"
              onClick={() => setMobileTab('campuses')}
              className={`flex-1 py-1 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                mobileTab === 'campuses' ? 'bg-[#103578] text-white shadow-xs' : 'text-slate-600'
              }`}
            >
              Campuses (4)
            </button>
            <button
              type="button"
              onClick={() => setMobileTab('message')}
              className={`flex-1 py-1 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                mobileTab === 'message' ? 'bg-[#103578] text-white shadow-xs' : 'text-slate-600'
              }`}
            >
              Send Inquiry
            </button>
            <button
              type="button"
              onClick={() => setMobileTab('map')}
              className={`flex-1 py-1 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                mobileTab === 'map' ? 'bg-[#103578] text-white shadow-xs' : 'text-slate-600'
              }`}
            >
              Campus Map
            </button>
          </div>
        </div>

        {/* Quick Contact Overview Badges (Hidden on mobile) */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#103578] text-white flex items-center justify-center shrink-0 shadow-xs">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Placement Hotline</span>
              <div className="text-base font-bold text-slate-900 mt-0.5">
                <a href="tel:+94117999300" className="hover:text-[#103578] transition-colors">
                  +94 11 7 999 300
                </a>
              </div>
              <div className="text-xs text-slate-500 mt-1">Direct inquiries & appointment booking</div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">WhatsApp Advisory</span>
              <div className="text-base font-bold text-slate-900 mt-0.5">
                <a href="https://wa.me/94777222555" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors">
                  +94 77 722 2555
                </a>
              </div>
              <div className="text-xs text-slate-500 mt-1">Instant document screening & chat</div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#C41822] text-white flex items-center justify-center shrink-0 shadow-xs">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Counseling Hours</span>
              <div className="text-base font-bold text-slate-900 mt-0.5">Monday – Saturday</div>
              <div className="text-xs text-slate-500 mt-1">8:30 AM – 5:30 PM (IST)</div>
            </div>
          </div>
        </div>

        {/* Four Campuses Location Cards Grid */}
        <div className={`${mobileTab === 'campuses' ? 'grid' : 'hidden'} md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 md:mb-12`}>
          {branches.map((b, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:border-[#103578] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <span className="inline-block text-[10px] sm:text-[11px] font-bold text-[#103578] bg-blue-50 px-2 py-0.5 rounded">
                    {b.status}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#103578] transition-colors">
                  {b.city}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">{b.name}</p>

                <div className="space-y-2.5 mt-3 sm:mt-4 text-[11px] sm:text-xs text-slate-600">
                  <div className="flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C41822] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block leading-snug line-clamp-1">{b.address}</span>
                      <span className="text-[10px] text-slate-400">{b.country}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#103578] shrink-0" />
                    <a href={`tel:${b.phone.replace(/\s+/g, '')}`} className="font-semibold text-slate-900 hover:text-[#103578] transition-colors">
                      {b.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-1.5 text-emerald-600">
                    <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                    <a href={`https://wa.me/${b.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">
                      {b.whatsapp} (WhatsApp)
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2 sm:pt-4 mt-2 sm:mt-4 border-t border-slate-100 flex items-center justify-between gap-1">
                <a
                  href={b.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1.5 px-2.5 rounded-lg bg-slate-50 hover:bg-blue-50 text-[#103578] text-[11px] font-bold transition-all flex items-center gap-1 border border-slate-200/80 cursor-pointer"
                >
                  <Navigation className="w-3 h-3 text-[#C41822]" />
                  <span>Map</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedMapCampus(idx);
                    setMobileTab('map');
                  }}
                  className="py-1.5 px-2 text-[11px] font-semibold text-slate-600 hover:text-[#103578] cursor-pointer"
                >
                  Preview Map
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Google Map Preview Widget (Visible on mobile if tab === 'map', always on desktop) */}
        <div className={`${mobileTab === 'map' ? 'block' : 'hidden'} md:block bg-slate-50 rounded-2xl sm:rounded-3xl border border-slate-200/90 p-3 sm:p-8 shadow-xs mb-2 md:mb-14 flex-1`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-3 sm:pb-4 border-b border-slate-200 gap-2 sm:gap-4 mb-3 sm:mb-6">
            <div>
              <span className="text-[10px] sm:text-xs font-bold text-[#103578] uppercase tracking-wider">Live Campus Location Map</span>
              <h3 className="text-sm sm:text-xl font-bold text-slate-900 mt-0.5">
                {activeBranch.city}: {activeBranch.address}
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                Telephone: <strong className="text-slate-800">{activeBranch.phone}</strong> · Email: <strong className="text-slate-800">{activeBranch.email}</strong>
              </p>
            </div>

            {/* Campus Selector Pills */}
            <div className="flex flex-wrap gap-1 bg-white p-1 rounded-xl border border-slate-200">
              {branches.map((b, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedMapCampus(idx)}
                  className={`px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-bold transition-all cursor-pointer ${
                    selectedMapCampus === idx
                      ? 'bg-[#103578] text-white shadow-xs'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {b.city.replace(' Campus', '')}
                </button>
              ))}
            </div>
          </div>

          {/* Embedded Google Map Iframe */}
          <div className="relative w-full h-[220px] sm:h-96 rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 bg-slate-200 shadow-inner">
            <iframe
              title={`${activeBranch.city} Google Map`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(activeBranch.embedQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            />

            <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 bg-white/95 backdrop-blur-md px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl shadow-md border border-slate-200 flex items-center gap-1.5 text-[10px] sm:text-xs">
              <MapPin className="w-3.5 h-3.5 text-[#C41822]" />
              <span className="font-bold text-slate-900 truncate max-w-[130px] sm:max-w-none">{activeBranch.address}</span>
              <a
                href={activeBranch.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-blue-600 hover:underline font-semibold flex items-center gap-0.5"
              >
                Directions <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Direct In-Page Message Form (Visible on mobile if tab === 'message', always on desktop) */}
        <div className={`${mobileTab === 'message' ? 'block' : 'hidden'} md:block bg-slate-50 rounded-2xl sm:rounded-3xl border border-slate-200/90 p-3.5 sm:p-10 shadow-xs mb-2 md:mb-12 flex-1 max-h-[380px] md:max-h-none overflow-y-auto no-scrollbar`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-8 items-center">
            <div className="lg:col-span-5 space-y-2 sm:space-y-4">
              <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-[#103578] uppercase tracking-wider">
                <MessageSquare className="w-3.5 h-3.5 text-[#C41822]" />
                <span>Direct Counselor Inquiry</span>
              </div>
              <h3 className="text-base sm:text-2xl font-extrabold text-slate-900">
                Have a question for our campus counselors?
              </h3>
              <p className="text-[11px] sm:text-sm text-slate-600 leading-relaxed line-clamp-2 sm:line-clamp-none">
                Whether you want to verify your IELTS waiver eligibility, inquire about university intakes, or check fee structures, our team will respond within 24 hours.
              </p>

              <div className="hidden sm:block p-4 bg-white rounded-2xl border border-slate-200/80 text-xs space-y-2">
                <div className="font-bold text-slate-900">Fast Regional Assistance:</div>
                <div className="text-slate-600">WhatsApp: <strong className="text-slate-900">+94 77 722 2555</strong></div>
                <div className="text-slate-600">Hotline: <strong className="text-slate-900">+94 11 7 999 300</strong></div>
                <div className="text-slate-600">Email: <strong className="text-slate-900">placements@bcas.lk</strong></div>
              </div>

              <div className="hidden sm:block pt-1">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  Follow Us on Social Media
                </span>
                <SocialMediaLinks variant="light" size="sm" />
              </div>
            </div>

            <div className="lg:col-span-7 bg-white rounded-xl sm:rounded-2xl border border-slate-200 p-3 sm:p-8 shadow-xs">
              {submitted ? (
                <div className="text-center py-6 sm:py-8 space-y-2 sm:space-y-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <h4 className="text-sm sm:text-lg font-bold text-slate-900">Message Dispatched Successfully</h4>
                  <p className="text-[11px] sm:text-xs text-slate-600 max-w-md mx-auto">
                    Thank you, {formData.name}. Our placement advisor for <strong>{formData.preferredCampus}</strong> will reach out to you at {formData.phone}.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="py-1.5 px-3 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-0.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Kasun Perera"
                        className="w-full px-2.5 py-1.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#103578]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-0.5">WhatsApp / Phone *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+94 77 123 4567"
                        className="w-full px-2.5 py-1.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#103578]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-0.5">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="student@example.com"
                        className="w-full px-2.5 py-1.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#103578]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-0.5">Preferred Campus</label>
                      <select
                        value={formData.preferredCampus}
                        onChange={(e) => setFormData({ ...formData, preferredCampus: e.target.value })}
                        className="w-full px-2 py-1.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#103578]"
                      >
                        <option value="Colombo Campus">Colombo Campus — 356, Galle Road, Colombo 03</option>
                        <option value="Jaffna Campus">Jaffna Campus — 16, Point Pedro Road, Jaffna</option>
                        <option value="Kalmunai Campus">Kalmunai Campus — 392/1, Main Street, Kalmunai</option>
                        <option value="Kandy Campus">Kandy Campus — 344, Peradeniya Road, Kandy</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-0.5">Inquiry / Questions</label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what country, university, or course you are interested in..."
                      className="w-full px-2.5 py-1.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg sm:rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#103578] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2.5 sm:py-3 bg-[#103578] hover:bg-[#0a234e] text-white text-xs sm:text-sm font-bold rounded-lg sm:rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50 active:scale-95"
                  >
                    {loading ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message to Placement Team</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Direct Action Banner */}
        <div className="bg-[#103578] rounded-xl sm:rounded-3xl p-3 sm:p-10 text-white flex flex-row items-center justify-between gap-3 shadow-md shrink-0">
          <div>
            <h3 className="text-xs sm:text-2xl font-extrabold [text-wrap:balance]">
              Prefer a dedicated 1-on-1 counseling appointment?
            </h3>
            <p className="hidden sm:block text-slate-200 text-sm mt-1 max-w-xl">
              Lock in your preferred appointment slot at Colombo (356, Galle Road, Colombo 03), Jaffna, Kalmunai, or Kandy. 100% free guidance.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenConsultation}
            className="shrink-0 py-1.5 px-3 sm:py-3.5 sm:px-6 rounded-xl bg-[#C41822] hover:bg-[#a3141a] text-white text-[11px] sm:text-sm font-bold shadow-md transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
          >
            <span>Book Free</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
