import React, { useState } from 'react';
import { DollarSign, ShieldCheck, Sparkles, ArrowRight, HelpCircle } from 'lucide-react';
import { calButtonAttributes, handleCalFallback, CAL_PUBLIC_URL } from '../utils/cal';

interface CostCalculatorProps {
  onOpenBooking: () => void;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({ onOpenBooking }) => {
  const [selectedService, setSelectedService] = useState('teeth-whitening');
  const [coverageType, setCoverageType] = useState<'ppo' | 'plan' | 'self'>('ppo');

  const pricingTable: Record<
    string,
    { name: string; basePrice: number; ppoCoverage: number; planDiscount: number }
  > = {
    'general-checkup': {
      name: 'Routine Exam, Low-Dose X-Rays & Cleaning',
      basePrice: 180,
      ppoCoverage: 0.9, // 90-100% preventive coverage
      planDiscount: 1.0, // Included 100% in Caredent Wellness Plan
    },
    'teeth-whitening': {
      name: 'In-Office Laser Teeth Whitening',
      basePrice: 380,
      ppoCoverage: 0.15, // Mostly cosmetic
      planDiscount: 0.35, // 35% member discount
    },
    'dental-implants': {
      name: 'Premium Titanium Implant & Custom Crown',
      basePrice: 1850,
      ppoCoverage: 0.5, // 50% major restorative
      planDiscount: 0.25, // 25% member discount
    },
    'invisalign-ortho': {
      name: 'Full Clear Aligners Orthodontic Treatment',
      basePrice: 3600,
      ppoCoverage: 0.4, // Up to ortho lifetime max
      planDiscount: 0.2, // 20% member discount
    },
    'porcelain-veneers': {
      name: 'Handcrafted Porcelain Veneer (Per Tooth)',
      basePrice: 950,
      ppoCoverage: 0.1, // Cosmetic
      planDiscount: 0.2, // 20% member discount
    },
    'root-canal-therapy': {
      name: 'Painless Microscopic Root Canal Therapy',
      basePrice: 850,
      ppoCoverage: 0.7, // 70-80% basic/major
      planDiscount: 0.25, // 25% member discount
    },
  };

  const item = pricingTable[selectedService];
  let coverageAmount = 0;
  let outOfPocket = item.basePrice;

  if (coverageType === 'ppo') {
    coverageAmount = Math.round(item.basePrice * item.ppoCoverage);
    outOfPocket = item.basePrice - coverageAmount;
  } else if (coverageType === 'plan') {
    coverageAmount = Math.round(item.basePrice * item.planDiscount);
    outOfPocket = item.basePrice - coverageAmount;
  } else {
    // Standard self-pay
    coverageAmount = 0;
    outOfPocket = item.basePrice;
  }

  const monthlyFinancing = Math.round(outOfPocket / 12);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
        <div>
          <span className="text-xs font-semibold text-[#00A8CC] uppercase tracking-wider block">
            Transparent Pricing
          </span>
          <h3 className="text-2xl font-bold text-slate-900 mt-0.5">
            Dental Treatment Cost & Insurance Estimator
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            Calculate your estimated out-of-pocket costs and 0% APR monthly financing.
          </p>
        </div>

        <div className="inline-flex p-1 bg-slate-100 rounded-xl text-xs font-medium self-start md:self-auto">
          <button
            type="button"
            onClick={() => setCoverageType('ppo')}
            className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
              coverageType === 'ppo' ? 'bg-white text-[#004F6E] shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            PPO Insurance
          </button>
          <button
            type="button"
            onClick={() => setCoverageType('plan')}
            className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
              coverageType === 'plan' ? 'bg-white text-[#004F6E] shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Caredent Plan
          </button>
          <button
            type="button"
            onClick={() => setCoverageType('self')}
            className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
              coverageType === 'self' ? 'bg-white text-[#004F6E] shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Self-Pay
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Controls */}
        <div className="lg:col-span-7 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Select Procedure
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {Object.entries(pricingTable).map(([key, info]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedService(key)}
                  className={`text-left p-3 rounded-xl border text-xs transition-all cursor-pointer ${
                    selectedService === key
                      ? 'border-[#00A8CC] bg-cyan-50/50 text-[#004F6E] font-medium shadow-xs'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                  }`}
                >
                  <p className="font-semibold text-slate-900 truncate">{info.name}</p>
                  <p className="text-slate-500 mt-1">Avg. Fee: ${info.basePrice}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs text-slate-600 flex items-start gap-2.5">
            <HelpCircle className="w-4 h-4 text-[#00A8CC] shrink-0 mt-0.5" />
            <p>
              Estimates are based on average in-network PPO allowances (Delta Dental, Cigna, MetLife) or Caredent Wellness Membership rates. We provide an exact complimentary pre-authorization check before initiating any procedure.
            </p>
          </div>
        </div>

        {/* Calculation Card */}
        <div className="lg:col-span-5 bg-gradient-to-b from-[#004F6E] to-[#00384f] text-white p-6 rounded-2xl shadow-md border border-[#006085]">
          <div className="flex justify-between items-center pb-4 border-b border-white/10 text-xs">
            <span className="text-slate-300">Standard Practice Fee:</span>
            <span className="font-semibold text-white font-mono">${item.basePrice}</span>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-white/10 text-xs">
            <span className="text-emerald-300 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>
                {coverageType === 'ppo'
                  ? 'Estimated PPO Benefit:'
                  : coverageType === 'plan'
                  ? 'Caredent Member Savings:'
                  : 'Self-Pay Prompt Discount:'}
              </span>
            </span>
            <span className="font-semibold text-emerald-300 font-mono">-${coverageAmount}</span>
          </div>

          <div className="py-4 border-b border-white/10">
            <span className="text-xs text-slate-300 block">Estimated Out-of-Pocket:</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-extrabold text-[#FDD835] font-mono">${outOfPocket}</span>
              <span className="text-xs text-slate-300">
                {coverageType === 'plan' && outOfPocket === 0 ? '(100% Covered!)' : ''}
              </span>
            </div>
          </div>

          <div className="pt-3 pb-5 flex items-center justify-between text-xs text-slate-300">
            <span>Or Flexible 0% APR Financing:</span>
            <span className="font-bold text-white font-mono">${monthlyFinancing}/mo (12 mos)</span>
          </div>

          <button
            type="button"
            {...calButtonAttributes}
            onClick={handleCalFallback}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 min-h-[44px] bg-[#00A8CC] hover:bg-[#008cae] text-white text-sm font-semibold rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            <span>Book With Transparent Pricing</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href={CAL_PUBLIC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-xs text-cyan-200 hover:text-white underline mt-2.5 transition-colors"
          >
            Preferência por link direto no Cal.com ↗
          </a>
        </div>
      </div>

      {/* Deontological & Demo Disclaimer */}
      <div className="mt-4 pt-3 border-t border-slate-200 text-center">
        <p className="text-[11px] text-slate-500 leading-relaxed max-w-2xl mx-auto">
          * Valores e coberturas apresentados são simulações demonstrativas. Conforme as normas éticas odontológicas, qualquer plano de tratamento e orçamento definitivo dependem obrigatoriamente de consulta e exame clínico presencial individualizado.
        </p>
      </div>
    </div>
  );
};
