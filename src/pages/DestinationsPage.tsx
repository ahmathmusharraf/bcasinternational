import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { DESTINATIONS } from '../data/mockData';
import { Destination } from '../types';
import {
  Globe,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
  DollarSign,
  Briefcase,
  Calendar,
  Building2,
  Clock,
  Sparkles,
  Search,
  Filter
} from 'lucide-react';

export const DestinationsPage: React.FC = () => {
  const { navigateTo } = useApp();
  const [activeTab, setActiveTab] = useState<'grid' | 'compare'>('grid');
  const [selectedDestination, setSelectedDestination] = useState<Destination>(DESTINATIONS[0]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterPreference, setFilterPreference] = useState<string>('all');

  const filteredDestinations = DESTINATIONS.filter(dest => {
    const matchesSearch =
      searchQuery === '' ||
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.popularCities.some(city => city.toLowerCase().includes(searchQuery.toLowerCase())) ||
      dest.tagline.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (filterPreference === 'europe') {
      return ['uk', 'sweden', 'finland', 'malta'].includes(dest.id);
    }
    if (filterPreference === 'north-america') {
      return ['canada'].includes(dest.id);
    }
    if (filterPreference === 'asia-me') {
      return ['uae'].includes(dest.id);
    }
    if (filterPreference === 'australia') {
      return ['australia'].includes(dest.id);
    }
    if (filterPreference === 'post-study') {
      return ['uk', 'australia', 'canada', 'sweden', 'finland'].includes(dest.id);
    }
    if (filterPreference === 'budget') {
      return ['malta', 'sweden', 'finland', 'uae'].includes(dest.id);
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8 lg:py-12 space-y-6 sm:space-y-10 lg:space-y-12">
      {/* Page Header */}
      <div className="space-y-2 sm:space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-[#00239C] uppercase tracking-wider">
          <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00239C]" />
          <span>7 FOCUS STUDY DESTINATIONS & GLOBAL REACH</span>
        </div>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-display text-slate-900 tracking-tight">
          Study Abroad Destinations
        </h1>
        <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal">
          Explore our primary study abroad focus destinations: United Kingdom, Australia, Canada, Sweden, Finland, Malta, and the United Arab Emirates — and many more global destinations. Compare tuition fees, living benchmarks, term-time work permissions, and post-study work visa rights for Sri Lankan graduates.
        </p>

        {/* Search Bar for Destinations */}
        <div className="relative pt-1 sm:pt-2">
          <Search className="w-4 h-4 absolute left-3.5 top-[19px] sm:top-[23px] text-slate-400" />
          <input
            type="search"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search destination country or university city (e.g. UK, Melbourne, Toronto, Stockholm, Helsinki, Malta, Dubai)..."
            className="w-full pl-10 pr-4 py-2 sm:py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#00239C] text-slate-900 shadow-2xs"
          />
        </div>

        {/* View Switcher & Regional Filter Pills */}
        <div className="pt-1 sm:pt-2 flex flex-wrap items-center justify-between gap-2 sm:gap-3">
          <div className="flex items-center gap-1 sm:gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
            <button
              onClick={() => setActiveTab('grid')}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'grid'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Detailed Overview ({filteredDestinations.length})
            </button>
            <button
              onClick={() => setActiveTab('compare')}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'compare'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Side-by-Side Matrix
            </button>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto text-xs py-1">
            <span className="text-slate-500 font-medium mr-1 hidden sm:inline">Region / Criteria:</span>
            {[
              { id: 'all', label: 'All 7 Destinations' },
              { id: 'europe', label: 'UK & Europe (SE, FI, MT)' },
              { id: 'australia', label: 'Australia' },
              { id: 'north-america', label: 'Canada' },
              { id: 'asia-me', label: 'UAE / Dubai' },
              { id: 'post-study', label: '1-3 Yr Post-Study' },
              { id: 'budget', label: 'Affordable / Low Tuition' }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setFilterPreference(f.id)}
                className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  filterPreference === f.id
                    ? 'bg-[#00239C] text-white font-semibold'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid Tab */}
      {activeTab === 'grid' && (
        <div className="space-y-6 sm:space-y-12">
          {/* Destination Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredDestinations.map(dest => (
              <div
                key={dest.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-40 sm:h-52 bg-slate-900 overflow-hidden">
                    <img
                      src={dest.heroImage}
                      alt={dest.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      onError={e => {
                        (e.currentTarget as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/95 px-2.5 py-1 sm:px-3 sm:py-1 rounded-xl text-xs font-bold text-slate-900 flex items-center gap-1.5 shadow-sm">
                      <span className="text-sm sm:text-base">{dest.flag}</span>
                      <span>{dest.name}</span>
                    </div>

                    <div className="absolute bottom-2.5 left-3 right-3 sm:bottom-3 sm:left-4 sm:right-4 text-white">
                      <span className="text-[10px] sm:text-[11px] font-semibold text-blue-200 block uppercase tracking-wider">
                        Primary Intakes
                      </span>
                      <p className="text-[11px] sm:text-xs font-medium">{dest.primaryIntakes}</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-6 space-y-2.5 sm:space-y-4">
                    <h3 className="font-bold text-base sm:text-lg text-slate-900 font-display">
                      {dest.tagline}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {dest.overview}
                    </p>

                    {/* Quick Specs */}
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs">
                      <div className="p-2.5 bg-slate-50 rounded-xl">
                        <span className="text-slate-500 block text-[11px]">Avg. Tuition / Yr</span>
                        <span className="font-bold text-slate-900 font-mono text-[12px]">
                          {dest.avgTuitionPerYear}
                        </span>
                      </div>
                      <div className="p-2.5 bg-slate-50 rounded-xl">
                        <span className="text-slate-500 block text-[11px]">Work Rights</span>
                        <span className="font-bold text-slate-900 text-[11px] truncate block" title={dest.workDuringStudy}>
                          {dest.workDuringStudy}
                        </span>
                      </div>
                    </div>

                    {/* Top Reasons Checklist */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                        Why Sri Lankan Students Choose {dest.name}:
                      </span>
                      {dest.topReasons.slice(0, 3).map((reason, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00239C] shrink-0 mt-0.5" />
                          <span>{reason}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Link & Action */}
                <div className="p-6 pt-3 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between text-xs">
                  <a
                    href={dest.officialImmigrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-900 inline-flex items-center gap-1 font-medium"
                  >
                    <span>Official Immigration</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>

                  <button
                    onClick={() =>
                      navigateTo('universities', {
                        country: dest.name
                      })
                    }
                    className="px-3 py-1.5 bg-[#00239C] hover:bg-[#001869] text-white font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>View Universities</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}

            {/* And Many More Destinations Card */}
            <div className="bg-gradient-to-br from-[#00239C] to-slate-900 text-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-blue-800 shadow-md">
              <div className="space-y-3.5">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>GLOBAL ADMISSIONS PARTNER</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  ... And Many More Destinations!
                </h3>
                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-normal">
                  Looking to study in the United States, Ireland, Germany, New Zealand, Malaysia, Singapore, or elsewhere? BCAS International Placements maintains official direct admissions representation with 100+ accredited universities globally.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['United States 🇺🇸', 'Ireland 🇮🇪', 'Germany 🇩🇪', 'New Zealand 🇳🇿', 'Malaysia 🇲🇾', 'Singapore 🇸🇬', 'Switzerland 🇨🇭'].map(c => (
                    <span key={c} className="px-2 py-0.5 rounded-md bg-white/10 text-white text-[11px] font-medium border border-white/15">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-white/15 flex flex-wrap items-center justify-between gap-3">
                <span className="text-[11px] text-blue-200">
                  Custom visa compliance & university shortlisting
                </span>
                <button
                  onClick={() => navigateTo('apply', { destination: 'Other / And Many More Destinations' })}
                  className="px-4 py-2 bg-white hover:bg-blue-50 text-[#00239C] text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm"
                >
                  <span>Enquire for Other Countries</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Comparison Matrix Tab */}
      {activeTab === 'compare' && (
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <h3 className="text-lg font-bold font-display text-slate-900">
              Cross-Country Comparison Matrix
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Objective benchmark for Sri Lankan passport holders evaluating international destinations.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-700 border-b border-slate-200">
                  <th className="py-3.5 px-4 font-bold text-slate-900 w-36">Destination</th>
                  <th className="py-3.5 px-4 font-semibold">Typical Tuition / Yr</th>
                  <th className="py-3.5 px-4 font-semibold">Living Costs Guidance</th>
                  <th className="py-3.5 px-4 font-semibold">Work Rights (Term-time)</th>
                  <th className="py-3.5 px-4 font-semibold">Post-Study Work Visa</th>
                  <th className="py-3.5 px-4 font-semibold">Major Intakes</th>
                  <th className="py-3.5 px-4 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {DESTINATIONS.map(dest => (
                  <tr key={dest.id} className="hover:bg-blue-50/30 transition-colors">
                    <td className="py-4 px-4 font-bold text-slate-900 text-sm whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{dest.flag}</span>
                        <span>{dest.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono font-medium text-slate-900">
                      {dest.avgTuitionPerYear}
                    </td>
                    <td className="py-4 px-4 max-w-xs leading-relaxed text-slate-600">
                      {dest.avgLivingPerYear}
                    </td>
                    <td className="py-4 px-4 max-w-xs leading-relaxed text-slate-600">
                      {dest.workDuringStudy}
                    </td>
                    <td className="py-4 px-4 max-w-xs leading-relaxed font-semibold text-slate-900">
                      {dest.postStudyWorkVisa}
                    </td>
                    <td className="py-4 px-4 text-slate-600">
                      {dest.primaryIntakes}
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      <button
                        onClick={() =>
                          navigateTo('apply', {
                            country: dest.name
                          })
                        }
                        className="px-3 py-1.5 bg-[#00239C] hover:bg-[#001869] text-white font-semibold rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1"
                      >
                        <span>Enquire</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Pre-Departure Checklist Callout */}
      <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
            STEP-BY-STEP ADVICE
          </span>
          <h2 className="text-2xl font-bold font-display text-white">
            Not sure which country matches your profile?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl">
            Book an appointment with a BCAS international education counselor. We analyze your academic background, IELTS score, and budget to shortlist institutions.
          </p>
        </div>
        <button
          onClick={() => navigateTo('apply')}
          className="px-6 py-3.5 bg-[#BA141A] hover:bg-[#910e13] text-white font-bold text-sm rounded-xl shadow-md transition-colors cursor-pointer shrink-0"
        >
          Book Free Counseling Session ↗
        </button>
      </div>
    </div>
  );
};
