import React, { useState } from 'react';
import { Calculator, DollarSign, ArrowRight, Sparkles, Building, Briefcase, Info, RefreshCw } from 'lucide-react';
import { DestinationCountry, StudyLevel } from '../../types';

interface CostAndCurrencyEstimatorProps {
  onBookConsultation: () => void;
}

export const CostAndCurrencyEstimator: React.FC<CostAndCurrencyEstimatorProps> = ({
  onBookConsultation
}) => {
  const [destination, setDestination] = useState<DestinationCountry>('UK');
  const [level, setLevel] = useState<StudyLevel>('Postgraduate');
  const [accommodation, setAccommodation] = useState<'University Hall' | 'Private Shared' | 'Homestay'>('Private Shared');
  const [planToWork, setPlanToWork] = useState(true);
  const [currencyMode, setCurrencyMode] = useState<'foreign' | 'lkr'>('foreign');

  // Realistic exchange rates to LKR
  const exchangeRatesToLKR: Record<DestinationCountry, { rate: number; symbol: string; code: string }> = {
    USA: { rate: 305, symbol: 'USD $', code: 'USD' },
    Canada: { rate: 220, symbol: 'CAD $', code: 'CAD' },
    UK: { rate: 395, symbol: '£', code: 'GBP' },
    Australia: { rate: 198, symbol: 'AUD $', code: 'AUD' },
    Ireland: { rate: 335, symbol: '€', code: 'EUR' },
    Germany: { rate: 335, symbol: '€', code: 'EUR' },
    Malaysia: { rate: 71, symbol: 'MYR', code: 'MYR' },
    Singapore: { rate: 235, symbol: 'SGD $', code: 'SGD' },
    UAE: { rate: 83, symbol: 'AED', code: 'AED' },
    Malta: { rate: 335, symbol: '€', code: 'EUR' },
    Spain: { rate: 335, symbol: '€', code: 'EUR' }
  };

  // Base tuition estimates per year in native currency
  const tuitionMap: Record<DestinationCountry, Record<string, number>> = {
    USA: { Undergraduate: 26000, Postgraduate: 28000, "Master's": 28000, MBA: 34000, Diploma: 18000, 'Postgraduate Diploma': 20000 },
    Canada: { Undergraduate: 22000, Postgraduate: 20000, "Master's": 21000, MBA: 26000, Diploma: 16000, 'Postgraduate Diploma': 17500 },
    UK: { Undergraduate: 15500, Postgraduate: 16500, "Master's": 16500, MBA: 18500, Diploma: 12000, 'Postgraduate Diploma': 13500 },
    Australia: { Undergraduate: 34000, Postgraduate: 36000, "Master's": 36000, MBA: 40000, Diploma: 22000, 'Postgraduate Diploma': 25000 },
    Ireland: { Undergraduate: 14500, Postgraduate: 16000, "Master's": 16000, MBA: 19000, Diploma: 11000, 'Postgraduate Diploma': 12500 },
    Germany: { Undergraduate: 6500, Postgraduate: 8500, "Master's": 8500, MBA: 11000, Diploma: 5000, 'Postgraduate Diploma': 6000 },
    Malaysia: { Undergraduate: 34000, Postgraduate: 42000, "Master's": 42000, MBA: 48000, Diploma: 22000, 'Postgraduate Diploma': 26000 },
    Singapore: { Undergraduate: 24000, Postgraduate: 28000, "Master's": 28000, MBA: 32000, Diploma: 16000, 'Postgraduate Diploma': 19000 },
    UAE: { Undergraduate: 55000, Postgraduate: 62000, "Master's": 62000, MBA: 72000, Diploma: 42000, 'Postgraduate Diploma': 48000 },
    Malta: { Undergraduate: 7500, Postgraduate: 8500, "Master's": 8500, MBA: 9500, Diploma: 6000, 'Postgraduate Diploma': 6800 },
    Spain: { Undergraduate: 9500, Postgraduate: 12000, "Master's": 12000, MBA: 15000, Diploma: 7000, 'Postgraduate Diploma': 8500 }
  };

  // Yearly living costs estimates in native currency
  const livingMap: Record<DestinationCountry, { 'University Hall': number; 'Private Shared': number; Homestay: number }> = {
    USA: { 'University Hall': 15000, 'Private Shared': 13500, Homestay: 12500 },
    Canada: { 'University Hall': 14000, 'Private Shared': 12500, Homestay: 11500 },
    UK: { 'University Hall': 9500, 'Private Shared': 8500, Homestay: 8000 },
    Australia: { 'University Hall': 23000, 'Private Shared': 20000, Homestay: 19000 },
    Ireland: { 'University Hall': 11000, 'Private Shared': 9800, Homestay: 9200 },
    Germany: { 'University Hall': 10500, 'Private Shared': 9600, Homestay: 9000 },
    Malaysia: { 'University Hall': 18000, 'Private Shared': 15000, Homestay: 14000 },
    Singapore: { 'University Hall': 16000, 'Private Shared': 14500, Homestay: 13500 },
    UAE: { 'University Hall': 35000, 'Private Shared': 30000, Homestay: 28000 },
    Malta: { 'University Hall': 7800, 'Private Shared': 6900, Homestay: 6400 },
    Spain: { 'University Hall': 9500, 'Private Shared': 8400, Homestay: 7800 }
  };

  // Typical student part-time earnings for 20 hrs/week (approx 40 study weeks)
  const partTimeEarningsMap: Record<DestinationCountry, number> = {
    USA: 12000, // On-campus / CPT
    Canada: 13000, // ~CAD $16.50/hr * 20hrs * 40 weeks
    UK: 9100, // ~£11.44/hr * 20hrs * 40 weeks
    Australia: 19200, // ~AUD $24/hr * 20hrs * 40 weeks
    Ireland: 10200, // ~€12.70/hr * 20hrs * 40 weeks
    Germany: 9600, // Werkstudent / Minijob
    Malaysia: 8000, // Part-time campus allowances
    Singapore: 12000, // Approved training internships
    UAE: 18000, // Student internship allowances
    Malta: 6800, // ~€8.50/hr * 20hrs * 40 weeks
    Spain: 9000 // ~€11.25/hr * 20hrs * 40 weeks
  };

  const curr = exchangeRatesToLKR[destination];
  const annualTuition = tuitionMap[destination][level] || 18000;
  const annualLiving = livingMap[destination][accommodation] || 10000;
  const potentialPartTime = planToWork ? partTimeEarningsMap[destination] : 0;
  const netEstimatedCost = Math.max(0, annualTuition + annualLiving - potentialPartTime);

  const formatAmount = (val: number) => {
    if (currencyMode === 'lkr') {
      const lkrVal = Math.round(val * curr.rate);
      return `LKR ${(lkrVal / 1000000).toFixed(2)} Million`;
    }
    return `${curr.symbol} ${val.toLocaleString()}`;
  };

  return (
    <section id="cost-calculator" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#103578] text-xs font-bold uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5 text-[#C41822]" />
            <span>Interactive Financial Planner</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            International Study Cost & Currency Estimator
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
            Estimate your annual tuition, living expenses, and part-time work offsets in foreign currencies or Sri Lankan Rupees (LKR).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-3.5 sm:p-8 shadow-xs space-y-3 sm:space-y-6">
            {/* Currency Mode Selector */}
            <div className="flex items-center justify-between pb-2 sm:pb-4 border-b border-slate-100">
              <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">Currency:</span>
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setCurrencyMode('foreign')}
                  className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    currencyMode === 'foreign'
                      ? 'bg-white text-[#103578] shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Foreign ({curr.code})
                </button>
                <button
                  type="button"
                  onClick={() => setCurrencyMode('lkr')}
                  className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    currencyMode === 'lkr'
                      ? 'bg-[#103578] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Rupees (LKR)
                </button>
              </div>
            </div>

            {/* Destination Selector: Dropdown on mobile, grid buttons on desktop */}
            <div>
              <label className="block text-[11px] sm:text-xs font-bold text-slate-700 mb-1 sm:mb-2">
                1. Select Destination Country
              </label>
              {/* Mobile select */}
              <div className="block sm:hidden">
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value as DestinationCountry)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800"
                >
                  {(['USA', 'Canada', 'UK', 'Australia', 'Ireland', 'Germany', 'Malaysia', 'Singapore', 'UAE', 'Malta', 'Spain'] as DestinationCountry[]).map((d) => (
                    <option key={d} value={d}>
                      {d} ({exchangeRatesToLKR[d].code})
                    </option>
                  ))}
                </select>
              </div>
              {/* Desktop grid */}
              <div className="hidden sm:grid grid-cols-4 lg:grid-cols-6 gap-2">
                {(['USA', 'Canada', 'UK', 'Australia', 'Ireland', 'Germany', 'Malaysia', 'Singapore', 'UAE', 'Malta', 'Spain'] as DestinationCountry[]).map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDestination(d)}
                    className={`py-2 px-2 rounded-xl text-xs font-bold text-center border transition-all cursor-pointer ${
                      destination === d
                        ? 'border-[#103578] bg-[#103578]/5 text-[#103578] ring-1 ring-[#103578]'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Study Level */}
            <div>
              <label className="block text-[11px] sm:text-xs font-bold text-slate-700 mb-1 sm:mb-2">
                2. Target Degree Level
              </label>
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                {(['Undergraduate', 'Postgraduate', "Master's", 'MBA'] as StudyLevel[]).map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setLevel(lvl)}
                    className={`py-1.5 sm:py-2 px-1.5 sm:px-2.5 rounded-xl text-[10px] sm:text-xs font-bold text-center border transition-all cursor-pointer truncate ${
                      level === lvl
                        ? 'border-[#103578] bg-[#103578]/5 text-[#103578] ring-1 ring-[#103578]'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Accommodation & Work Toggle in one compact row on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
              <div>
                <label className="block text-[10px] sm:text-xs font-bold text-slate-700 mb-1 sm:mb-2">
                  3. Housing Option
                </label>
                <div className="grid grid-cols-3 gap-1">
                  {(['University Hall', 'Private Shared', 'Homestay'] as const).map((acc) => (
                    <button
                      key={acc}
                      type="button"
                      onClick={() => setAccommodation(acc)}
                      className={`py-1.5 px-1 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold text-center border transition-all cursor-pointer truncate ${
                        accommodation === acc
                          ? 'border-[#103578] bg-[#103578]/5 text-[#103578] ring-1 ring-[#103578]'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {acc.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Part-Time Student Work Toggle */}
              <div className="p-2 sm:p-3 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-200/80 flex items-center justify-between">
                <div>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-900 flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5 text-[#103578]" />
                    Part-Time Work
                  </span>
                  <span className="text-[10px] text-slate-500">
                    20 hrs/wk allowable
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={planToWork}
                  onChange={(e) => setPlanToWork(e.target.checked)}
                  className="w-4 h-4 text-[#103578] rounded cursor-pointer accent-[#103578]"
                />
              </div>
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#103578] to-[#0a234e] text-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-8 shadow-xl space-y-2 sm:space-y-6">
            <div className="flex items-center justify-between lg:block">
              <div>
                <span className="text-rose-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider block">
                  Annual Budget · {destination}
                </span>
                <h3 className="text-base sm:text-2xl font-black mt-0.5">
                  Cost Breakdown
                </h3>
              </div>
              <div className="lg:hidden text-right">
                <span className="text-[10px] text-slate-300 block">Net Est. Cost</span>
                <span className="text-base font-black text-rose-300">{formatAmount(netEstimatedCost)}</span>
              </div>
            </div>

            <div className="space-y-1.5 sm:space-y-3.5 py-2 sm:py-4 border-y border-white/10 text-xs sm:text-sm">
              <div className="flex items-center justify-between text-slate-200 text-[11px] sm:text-sm">
                <span>Tuition:</span>
                <span className="font-bold text-white tabular-nums">{formatAmount(annualTuition)}</span>
              </div>

              <div className="flex items-center justify-between text-slate-200 text-[11px] sm:text-sm">
                <span>Living Costs:</span>
                <span className="font-bold text-white tabular-nums">{formatAmount(annualLiving)}</span>
              </div>

              {planToWork && (
                <div className="flex items-center justify-between text-emerald-300 text-[11px] sm:text-sm">
                  <span>Part-Time Offset:</span>
                  <span className="font-bold tabular-nums">− {formatAmount(potentialPartTime)}</span>
                </div>
              )}

              <div className="hidden lg:flex pt-3 border-t border-white/10 items-center justify-between text-base">
                <span className="font-bold text-white">Net Estimated Yearly Cost:</span>
                <span className="font-black text-rose-300 text-lg tabular-nums">
                  {formatAmount(netEstimatedCost)}
                </span>
              </div>
            </div>

            <button
              onClick={onBookConsultation}
              className="w-full py-2.5 sm:py-3.5 px-4 rounded-xl bg-[#C41822] hover:bg-[#a3141a] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
            >
              <span>Get Financial Assessment</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
