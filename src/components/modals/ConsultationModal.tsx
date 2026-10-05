import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Phone, Mail, User, Globe, GraduationCap, Sparkles, Building2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { DestinationCountry, StudyLevel } from '../../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDestination?: DestinationCountry;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultDestination
}) => {
  const [fullName, setFullName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [destination, setDestination] = useState<DestinationCountry | ''>(defaultDestination || 'UK');
  const [studyLevel, setStudyLevel] = useState<StudyLevel | ''>('Postgraduate');
  const [mode, setMode] = useState<'In-Person Campus' | 'Online Zoom / WhatsApp'>('In-Person Campus');
  const [preferredCampus, setPreferredCampus] = useState('Colombo Campus');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('10:00 AM');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !whatsapp.trim() || !email.trim()) {
      setErrorMsg('Please complete your name, WhatsApp number, and email address.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // Fallback gracefully
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setWhatsapp('');
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200"
        role="dialog"
        aria-modal="true"
      >
        <div className="bg-[#103578] px-6 py-5 text-white flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-rose-300 uppercase tracking-wider">Free Study Abroad Guidance</span>
            <h3 className="text-xl font-bold tracking-tight text-white mt-0.5">Book Your 1-on-1 Consultation</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 md:p-8 max-h-[85vh] overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50 animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Consultation Scheduled!</h4>
              <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                Thank you, <strong className="text-slate-900">{fullName}</strong>. A dedicated BCAS international education advisor has received your appointment request for <strong className="text-[#103578]">{destination || 'International Studies'}</strong>.
              </p>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-600 space-y-1.5 text-left max-w-md mx-auto">
                <div><span className="font-semibold text-slate-800">Appointment Mode:</span> {mode} {mode === 'In-Person Campus' ? `(${preferredCampus})` : ''}</div>
                <div><span className="font-semibold text-slate-800">Preferred Time:</span> {preferredDate || 'Upcoming available slot'} at {preferredTime}</div>
                <div><span className="font-semibold text-slate-800">Advisor Follow-up:</span> Confirmation message sent to WhatsApp <strong className="text-slate-900">{whatsapp}</strong></div>
              </div>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#103578] hover:bg-[#0a234e] text-white text-sm font-semibold rounded-xl shadow transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-slate-500 leading-relaxed">
                Connect with an experienced advisor for zero-obligation course evaluations, genuine entry assessments, and scholarship checks.
              </p>

              {errorMsg && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs font-medium">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Student Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Kasun Perera"
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-200 focus:border-[#103578] focus:ring-2 focus:ring-[#103578]/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="+94 77 123 4567"
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-200 focus:border-[#103578] focus:ring-2 focus:ring-[#103578]/20 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@example.com"
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-200 focus:border-[#103578] focus:ring-2 focus:ring-[#103578]/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Destination
                  </label>
                  <div className="relative">
                    <Globe className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value as DestinationCountry)}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-200 bg-white focus:border-[#103578] focus:ring-2 focus:ring-[#103578]/20 outline-none transition-all"
                    >
                      <option value="USA">United States of America (USA)</option>
                      <option value="Canada">Canada</option>
                      <option value="UK">United Kingdom (UK)</option>
                      <option value="Australia">Australia</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Germany">Germany</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Singapore">Singapore</option>
                      <option value="UAE">United Arab Emirates (UAE)</option>
                      <option value="Malta">Malta</option>
                      <option value="Spain">Spain</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Study Level
                  </label>
                  <div className="relative">
                    <GraduationCap className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <select
                      value={studyLevel}
                      onChange={(e) => setStudyLevel(e.target.value as StudyLevel)}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-200 bg-white focus:border-[#103578] focus:ring-2 focus:ring-[#103578]/20 outline-none transition-all"
                    >
                      <option value="Undergraduate">Undergraduate (Bachelor's)</option>
                      <option value="Postgraduate">Postgraduate</option>
                      <option value="Master's">Master's Degree</option>
                      <option value="MBA">MBA Program</option>
                      <option value="Diploma">Diploma / Foundation</option>
                      <option value="Postgraduate Diploma">Postgraduate Diploma</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Consultation Format
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(['In-Person Campus', 'Online Zoom / WhatsApp'] as const).map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setMode(m)}
                      className={`py-2 px-3 text-xs font-medium rounded-xl border transition-all cursor-pointer ${
                        mode === m
                          ? 'border-[#103578] bg-[#103578]/5 text-[#103578] font-semibold ring-1 ring-[#103578]'
                          : 'border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {mode === 'In-Person Campus' && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#103578]" />
                    Select BCAS Campus Location
                  </label>
                  <select
                    value={preferredCampus}
                    onChange={(e) => setPreferredCampus(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 bg-white focus:border-[#103578] focus:ring-2 focus:ring-[#103578]/20 outline-none transition-all"
                  >
                    <option value="Colombo Campus">Colombo Campus — 356, Galle Road, Colombo 03</option>
                    <option value="Jaffna Campus">Jaffna Campus — 16, Point Pedro Road, Jaffna</option>
                    <option value="Kalmunai Campus">Kalmunai Campus — 392/1, Main Street, Kalmunai</option>
                    <option value="Kandy Campus">Kandy Campus — 344, Peradeniya Road, Kandy</option>
                  </select>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-200 focus:border-[#103578] focus:ring-2 focus:ring-[#103578]/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-200 bg-white focus:border-[#103578] focus:ring-2 focus:ring-[#103578]/20 outline-none transition-all"
                    >
                      <option value="09:30 AM">09:30 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="04:00 PM">04:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#C41822] hover:bg-[#a3141a] text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Sparkles className="w-4 h-4 text-rose-200" />
                  <span>Confirm Free Appointment</span>
                </button>
              </div>

              <div className="text-[11px] text-slate-400 text-center">
                🔒 100% Free · No Agency Commission Charged to Students
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
