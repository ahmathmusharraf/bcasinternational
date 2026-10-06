import React from 'react';
import { ArrowLeft, Sparkles, Calculator, DollarSign, Globe, ShieldCheck } from 'lucide-react';
import { CostAndCurrencyEstimator } from '../components/home/CostAndCurrencyEstimator';

interface CostEstimatorViewProps {
  onBookConsultation: () => void;
  onNavigateHome: () => void;
}

export const CostEstimatorView: React.FC<CostEstimatorViewProps> = ({
  onBookConsultation,
  onNavigateHome
}) => {
  return (
    <div className="pt-20 pb-20 bg-slate-50 min-h-screen">
      {/* Top Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#103578] font-semibold flex items-center gap-1 cursor-pointer transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <span>/</span>
            <span className="text-[#103578] font-bold">Cost & Currency Estimator</span>
          </div>

          <button
            onClick={onBookConsultation}
            className="px-3.5 py-1.5 rounded-lg bg-[#C41822] hover:bg-[#a3141a] text-white text-xs font-bold transition-all shadow-2xs cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Plan My Budget</span>
          </button>
        </div>
      </div>

      {/* Hero Header */}
      <div className="bg-[#103578] text-white py-12 sm:py-16 border-b border-blue-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-rose-300 text-xs font-semibold uppercase tracking-[0.08em] leading-none brand-label mb-3">
            <Calculator className="w-3.5 h-3.5 text-rose-400" />
            <span>Interactive Financial Planner</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-[-0.02em] leading-[0.98] brand-hero [text-wrap:balance]">
            International Study Cost & Currency Estimator
          </h1>
          <p className="mt-3 text-slate-200 text-sm sm:text-base max-w-2xl leading-[1.4] tracking-normal brand-body">
            Calculate your estimated tuition fees, living costs, accommodation, and part-time student work offsets across 11 countries with real-time Sri Lankan Rupee (LKR) conversions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 max-w-2xl">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
              <DollarSign className="w-5 h-5 text-emerald-400" />
              <div>
                <span className="block text-xs font-bold text-white">Live LKR Rates</span>
                <span className="text-[11px] text-slate-300">GBP, USD, CAD, AUD, EUR</span>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
              <div>
                <span className="block text-xs font-bold text-white">Proof of Funds</span>
                <span className="text-[11px] text-slate-300">Visa maintenance guidelines</span>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
              <Globe className="w-5 h-5 text-rose-400" />
              <div>
                <span className="block text-xs font-bold text-white">Part-Time Offset</span>
                <span className="text-[11px] text-slate-300">Legal hourly work wages</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Estimator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          <CostAndCurrencyEstimator
            onBookConsultation={onBookConsultation}
          />
        </div>
      </div>
    </div>
  );
};
