import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, HelpCircle, Calendar } from 'lucide-react';
import { calButtonAttributes, handleCalFallback, CAL_PUBLIC_URL } from '../utils/cal';

interface CostCalculatorProps {
  onOpenBooking?: () => void;
}

export const CostCalculator: React.FC<CostCalculatorProps> = () => {
  const [selectedService, setSelectedService] = useState('teeth-whitening');
  const [coverageType, setCoverageType] = useState<'convenio' | 'plano' | 'particular'>('convenio');

  const pricingTable: Record<
    string,
    { name: string; basePrice: number; convenioCoverage: number; planoDiscount: number }
  > = {
    'general-checkup': {
      name: 'Avaliação Clínica, Raio-X & Profilaxia',
      basePrice: 280,
      convenioCoverage: 0.85,
      planoDiscount: 1.0,
    },
    'teeth-whitening': {
      name: 'Clareamento Dental em Consultório',
      basePrice: 950,
      convenioCoverage: 0.15,
      planoDiscount: 0.3,
    },
    'dental-implants': {
      name: 'Implante de Titânio & Coroa Cerâmica',
      basePrice: 3200,
      convenioCoverage: 0.4,
      planoDiscount: 0.25,
    },
    'invisalign-ortho': {
      name: 'Ortodontia com Alinhadores Invisíveis',
      basePrice: 6800,
      convenioCoverage: 0.35,
      planoDiscount: 0.2,
    },
    'porcelain-veneers': {
      name: 'Lente de Contato Cerâmica (por elemento)',
      basePrice: 2200,
      convenioCoverage: 0.1,
      planoDiscount: 0.2,
    },
    'root-canal-therapy': {
      name: 'Endodontia Microscópica (Canal)',
      basePrice: 1200,
      convenioCoverage: 0.7,
      planoDiscount: 0.25,
    },
  };

  const item = pricingTable[selectedService] || pricingTable['teeth-whitening'];
  let coverageAmount = 0;
  let outOfPocket = item.basePrice;

  if (coverageType === 'convenio') {
    coverageAmount = Math.round(item.basePrice * item.convenioCoverage);
    outOfPocket = item.basePrice - coverageAmount;
  } else if (coverageType === 'plano') {
    coverageAmount = Math.round(item.basePrice * item.planoDiscount);
    outOfPocket = item.basePrice - coverageAmount;
  } else {
    // Particular integral
    coverageAmount = 0;
    outOfPocket = item.basePrice;
  }

  const monthlyFinancing = Math.round(outOfPocket / 12);

  const formatBRL = (val: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
        <div>
          <span className="text-xs font-semibold text-[#00A8CC] uppercase tracking-wider block">
            Simulador de Procedimentos
          </span>
          <h3 className="text-2xl font-bold text-slate-900 mt-0.5">
            Estimativa de Investimento e Condições
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            Consulte faixas referenciais médias conforme a modalidade de atendimento e opções de parcelamento.
          </p>
        </div>

        <div className="inline-flex p-1 bg-slate-100 rounded-xl text-xs font-medium self-start md:self-auto">
          <button
            type="button"
            onClick={() => setCoverageType('convenio')}
            className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
              coverageType === 'convenio' ? 'bg-white text-[#004F6E] shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Reembolso Convênio
          </button>
          <button
            type="button"
            onClick={() => setCoverageType('plano')}
            className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
              coverageType === 'plano' ? 'bg-white text-[#004F6E] shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Plano Caredent
          </button>
          <button
            type="button"
            onClick={() => setCoverageType('particular')}
            className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
              coverageType === 'particular' ? 'bg-white text-[#004F6E] shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Particular
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Controls */}
        <div className="lg:col-span-7 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Selecione o Procedimento
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
                  <p className="text-slate-500 mt-1">Referência: {formatBRL(info.basePrice)}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs text-slate-600 flex items-start gap-2.5">
            <HelpCircle className="w-4 h-4 text-[#00A8CC] shrink-0 mt-0.5" />
            <p>
              Prestamos todo o suporte na emissão de relatórios clínicos e documentação para solicitação de reembolso junto ao seu plano de saúde, além de opções flexíveis de pagamento.
            </p>
          </div>
        </div>

        {/* Calculation Card */}
        <div className="lg:col-span-5 bg-gradient-to-b from-[#004F6E] to-[#00384f] text-white p-6 rounded-2xl shadow-md border border-[#006085]">
          <div className="flex justify-between items-center pb-4 border-b border-white/10 text-xs">
            <span className="text-slate-300">Valor Médio Referencial:</span>
            <span className="font-semibold text-white font-mono">{formatBRL(item.basePrice)}</span>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-white/10 text-xs">
            <span className="text-emerald-300 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>
                {coverageType === 'convenio'
                  ? 'Estimativa de Reembolso:'
                  : coverageType === 'plano'
                  ? 'Benefício Membro Caredent:'
                  : 'Desconto à Vista:'}
              </span>
            </span>
            <span className="font-semibold text-emerald-300 font-mono">-{formatBRL(coverageAmount)}</span>
          </div>

          <div className="py-4 border-b border-white/10">
            <span className="text-xs text-slate-300 block">Investimento Estimado:</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-extrabold text-[#FDD835] font-mono">{formatBRL(outOfPocket)}</span>
              <span className="text-xs text-slate-300">
                {coverageType === 'plano' && outOfPocket === 0 ? '(100% Coberto no Plano)' : ''}
              </span>
            </div>
          </div>

          <div className="pt-3 pb-5 flex items-center justify-between text-xs text-slate-300">
            <span>Ou Parcelamento Facilitado:</span>
            <span className="font-bold text-white font-mono">Em até 12x de {formatBRL(monthlyFinancing)}*</span>
          </div>

          <button
            type="button"
            {...calButtonAttributes}
            onClick={handleCalFallback}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 min-h-[44px] bg-[#00A8CC] hover:bg-[#008cae] text-white text-sm font-semibold rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar Consulta de Avaliação</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href={CAL_PUBLIC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-xs text-cyan-200 hover:text-white underline mt-2.5 transition-colors"
          >
            Abrir diretamente no Cal.com ↗
          </a>
        </div>
      </div>

      {/* Deontological Disclaimer */}
      <div className="mt-4 pt-3 border-t border-slate-200 text-center">
        <p className="text-[11px] text-slate-500 leading-relaxed max-w-2xl mx-auto">
          * Valores e condições apresentados são referenciais médios. Conforme as normas éticas do Conselho Federal de Odontologia (CFO), qualquer plano de tratamento e valor definitivo exigem obrigatoriamente avaliação clínica presencial individualizada.
        </p>
      </div>
    </div>
  );
};
