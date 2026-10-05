import React from 'react';
import { BcasLogo } from '../common/BcasLogo';
import { SocialMediaLinks } from '../common/SocialMediaLinks';
import { PageView } from '../../types';
import { Phone, Mail, MapPin, MessageCircle, Shield } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView, sectionId?: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <footer id="footer" className="bg-[#0a234e] text-slate-300 pt-12 pb-28 md:pb-12 border-t border-slate-800 snap-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          <div className="lg:col-span-2 space-y-4">
            <BcasLogo variant="dark" size="md" />

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mt-3">
              "Your Gateway to International Universities." BCAS International University Placement facilitates transparent, student-centered pathways to prestigious universities across the UK, Canada, Australia, New Zealand, USA, and UAE.
            </p>

            <div className="pt-1 flex items-center gap-3 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-rose-400" />
                Trusted since 1999
              </span>
              <span>·</span>
              <span>British College of Applied Studies</span>
            </div>

            {/* Official Social Media Links */}
            <div className="pt-2">
              <div className="text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                Follow BCAS Official Channels
              </div>
              <SocialMediaLinks variant="dark" size="sm" />
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Study Destinations
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('destinations', 'destinations')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Study in United States of America
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('destinations', 'destinations')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Study in Canada
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('destinations', 'destinations')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Study in United Kingdom
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('destinations', 'destinations')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Study in Australia
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('destinations', 'destinations')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Study in Ireland
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('destinations', 'destinations')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Study in Germany
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('destinations', 'destinations')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Study in Malaysia
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('destinations', 'destinations')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Study in Singapore
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('destinations', 'destinations')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Study in United Arab Emirates
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('destinations', 'destinations')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Study in Malta
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('destinations', 'destinations')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Study in Spain
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Student Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('destinations', 'destinations')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Study Destinations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('universities', 'universities')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Featured Universities
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('work-pr', 'work-pr')}
                  className="hover:text-white transition-colors cursor-pointer text-amber-300 font-semibold"
                >
                  Work Opportunities & PR
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog', 'blog')}
                  className="hover:text-white transition-colors cursor-pointer text-blue-300 font-semibold"
                >
                  Insights & PR Blog
                </button>
              </li>
              <li className="pt-1 border-t border-slate-800">
                <button
                  onClick={onOpenConsultation}
                  className="text-rose-400 font-bold hover:underline cursor-pointer"
                >
                  Book Free Consultation →
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Campuses & Direct Inquiries
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div>
                <div className="font-bold text-slate-200 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>Colombo Campus</span>
                </div>
                <div className="text-[11px] text-slate-400 pl-5">
                  356, Galle Road, Colombo 03
                </div>
              </div>

              <div>
                <div className="font-bold text-slate-200 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>Jaffna Campus</span>
                </div>
                <div className="text-[11px] text-slate-400 pl-5">
                  16, Point Pedro Road, Jaffna
                </div>
              </div>

              <div>
                <div className="font-bold text-slate-200 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>Kalmunai Campus</span>
                </div>
                <div className="text-[11px] text-slate-400 pl-5">
                  392/1, Main Street, Kalmunai
                </div>
              </div>

              <div>
                <div className="font-bold text-slate-200 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>Kandy Campus</span>
                </div>
                <div className="text-[11px] text-slate-400 pl-5">
                  344, Peradeniya Road, Kandy
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 space-y-1.5 text-slate-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <a href="tel:+94117999300" className="hover:text-white transition-colors">
                    +94 11 7 999 300
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <a href="https://wa.me/94777222555" className="hover:text-white transition-colors">
                    +94 77 722 2555 (WhatsApp)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © BCAS International University Placement. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Academic Excellence & Integrity</span>
            <span>·</span>
            <span>Accredited Placement Division</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
