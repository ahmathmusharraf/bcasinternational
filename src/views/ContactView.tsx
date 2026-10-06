import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, Building2, User } from 'lucide-react';

interface ContactViewProps {
  onBookConsultation: () => void;
  onNavigateHome?: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onBookConsultation, onNavigateHome }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredOffice: 'Colombo Campus',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const offices = [
    {
      name: 'Colombo Campus',
      address: '356, Galle Road, Colombo 03, Sri Lanka',
      phone: '+94 11 7 999 300',
      email: 'colombo@bcas.lk',
      hours: 'Mon – Sat: 8:30 AM – 5:30 PM'
    },
    {
      name: 'Jaffna Campus',
      address: '16, Point Pedro Road, Jaffna, Sri Lanka',
      phone: '+94 21 221 9910',
      email: 'jaffna@bcas.lk',
      hours: 'Mon – Sat: 8:30 AM – 5:00 PM'
    },
    {
      name: 'Kalmunai Campus',
      address: '392/1, Main Street, Kalmunai, Sri Lanka',
      phone: '+94 67 222 6899',
      email: 'kalmunai@bcas.lk',
      hours: 'Mon – Sat: 8:30 AM – 5:00 PM'
    },
    {
      name: 'Kandy Campus',
      address: '344, Peradeniya Road, Kandy, Sri Lanka',
      phone: '+94 81 222 4731',
      email: 'kandy@bcas.lk',
      hours: 'Mon – Sat: 8:30 AM – 5:00 PM'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

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
                <Phone className="w-3.5 h-3.5 rotate-180" />
                <span>Home</span>
              </button>
            )}
            {onNavigateHome && <span>/</span>}
            <span className="text-[#103578] font-bold">Campuses & Contact</span>
          </div>

          <button
            onClick={onBookConsultation}
            className="px-3.5 py-1.5 rounded-lg bg-[#C41822] hover:bg-[#a3141a] text-white text-xs font-bold transition-all shadow-2xs cursor-pointer flex items-center gap-1.5"
          >
            <span>Book Campus Visit</span>
          </button>
        </div>
      </div>

      {/* Header */}
      <div className="bg-[#103578] text-white py-14 border-b border-blue-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-rose-300 text-xs font-semibold uppercase tracking-[0.08em] leading-none brand-label mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Our Campuses & Placement Centers</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.02em] leading-[0.98] brand-hero [text-wrap:balance]">
            Contact BCAS International University Placement
          </h1>
          <p className="mt-3 text-slate-200 text-sm sm:text-base max-w-2xl leading-[1.4] tracking-normal brand-body">
            Get in touch with our certified education counselors at our Colombo, Jaffna, Kalmunai, or Kandy campuses. Visit us in person or send an inquiry with zero agency fees.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Offices List */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Our Campuses Across Sri Lanka</h2>

            <div className="space-y-4">
              {offices.map((office, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:border-[#103578] transition-all"
                >
                  <h3 className="text-base font-bold text-slate-900">{office.name}</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-xs text-slate-600">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#C41822] shrink-0 mt-0.5" />
                      <span className="font-medium text-slate-800">{office.address}</span>
                    </div>

                    <div className="flex items-start gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#103578] shrink-0 mt-0.5" />
                      <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className="font-semibold text-slate-900 hover:text-[#103578]">
                        {office.phone}
                      </a>
                    </div>

                    <div className="flex items-start gap-2">
                      <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span>{office.email}</span>
                    </div>

                    <div className="flex items-start gap-2">
                      <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{office.hours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Action Box */}
            <div className="bg-[#103578] text-white rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold">Want to schedule a designated counseling appointment?</h3>
                <p className="text-xs text-slate-200 mt-1">Book a free 1-on-1 virtual or campus session at any of our branches.</p>
              </div>
              <button
                onClick={onBookConsultation}
                className="shrink-0 py-2.5 px-4 rounded-xl bg-[#C41822] hover:bg-[#a3141a] text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
              >
                Book Appointment
              </button>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-1">Send Us a Direct Message</h3>
              <p className="text-xs text-slate-500 mb-6">Our placement team responds to all student inquiries within 24 hours.</p>

              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Message Received</h4>
                  <p className="text-xs text-slate-600">
                    Thank you, {formData.name}. Our counseling counselor for {formData.preferredOffice} will review your inquiry and contact you at {formData.phone}.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="py-2 px-4 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dilshan Perera"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#103578] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+94 77 123 4567"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#103578] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. dilshan@example.com"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#103578] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Campus Office</label>
                    <select
                      value={formData.preferredOffice}
                      onChange={(e) => setFormData({ ...formData, preferredOffice: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#103578] focus:bg-white"
                    >
                      <option value="Colombo Campus">Colombo Campus (356, Galle Road, Colombo 03)</option>
                      <option value="Jaffna Campus">Jaffna Campus (16, Point Pedro Road, Jaffna)</option>
                      <option value="Kalmunai Campus">Kalmunai Campus (392/1, Main Street, Kalmunai)</option>
                      <option value="Kandy Campus">Kandy Campus (344, Peradeniya Road, Kandy)</option>
                      <option value="Online Virtual Meeting">Online / Zoom Virtual Meeting</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Message or Questions</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what country, university, or course you are interested in..."
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#103578] focus:bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-4 rounded-xl bg-[#103578] hover:bg-[#0a234e] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
