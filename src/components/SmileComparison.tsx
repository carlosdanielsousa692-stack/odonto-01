import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, Calendar } from 'lucide-react';
import { calButtonAttributes, handleCalFallback, CAL_PUBLIC_URL } from '../utils/cal';

interface SmileComparisonProps {
  onOpenBooking?: () => void;
}

export const SmileComparison: React.FC<SmileComparisonProps> = () => {
  const [activeCase, setActiveCase] = useState<number>(0);

  const cases = [
    {
      title: 'Lentes de Contato em Cerâmica & Clareamento',
      patient: 'Vitória H., 29 anos',
      duration: 'Planejamento e 2 sessões clínicas',
      shadeChange: 'Harmonização de cor e proporção',
      description: 'Correção de pequenas imperfeições nas bordas incisais, fechamento de diastema e clareamento dental integrado para devolver luminosidade natural.',
      beforeText: 'Desgaste incisal e assimetrias',
      afterText: 'Alinhamento harmônico e brilho natural',
      image: '/images/happy_patient_smile_1792366053067.webp'
    },
    {
      title: 'Ortodontia Digital com Alinhadores Transparentes',
      patient: 'Davi P., 40 anos',
      duration: '8 meses com placas transparentes',
      shadeChange: 'Alinhamento progressivo da arcada',
      description: 'Correção de apinhamento moderado nos dentes inferiores e nivelamento da curva do sorriso sem a necessidade de bráquetes metálicos.',
      beforeText: 'Apinhamento dental anterior',
      afterText: 'Arcada simétrica e oclusão equilibrada',
      image: '/images/hero_dentist_consultation_1792366051819.webp'
    }
  ];

  const current = cases[activeCase];

  return (
    <div className="bg-[#004F6E] text-white rounded-3xl p-6 sm:p-10 shadow-xl overflow-hidden relative border border-[#006085]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Case Details */}
        <div className="lg:col-span-5 space-y-5">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FDD835] uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Resultados & Planejamento Clínico</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {current.title}
          </h3>

          <p className="text-slate-300 text-sm leading-relaxed">
            {current.description}
          </p>

          <div className="space-y-2.5 text-xs text-slate-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00A8CC] shrink-0" />
              <span>Paciente: <strong className="text-white">{current.patient}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00A8CC] shrink-0" />
              <span>Duração Estimada: <strong className="text-white">{current.duration}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00A8CC] shrink-0" />
              <span>Objetivo Clínico: <strong className="text-white">{current.shadeChange}</strong></span>
            </div>
          </div>

          {/* Case switcher */}
          <div className="flex gap-2 pt-2">
            {cases.map((c, idx) => (
              <button
                key={c.title}
                type="button"
                onClick={() => setActiveCase(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  activeCase === idx
                    ? 'bg-[#00A8CC] text-white shadow-xs'
                    : 'bg-white/10 hover:bg-white/20 text-slate-300'
                }`}
              >
                Caso 0{idx + 1}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col items-start gap-2">
            <button
              type="button"
              {...calButtonAttributes}
              onClick={handleCalFallback}
              className="inline-flex items-center gap-2 px-6 py-3.5 min-h-[44px] bg-[#00A8CC] hover:bg-[#008cae] text-white font-semibold rounded-xl text-sm transition-all shadow-md cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Avaliação Estética</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={CAL_PUBLIC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cyan-200 hover:text-white underline transition-colors"
            >
              Abrir diretamente na página do Cal.com ↗
            </a>
          </div>
        </div>

        {/* Right Column: Visual Showcase */}
        <div className="lg:col-span-7">
          <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-white/20 shadow-2xl aspect-16/10">
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              width={720}
              height={450}
            />
            {/* Visual overlay badges */}
            <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-xs text-white text-xs px-3 py-1.5 rounded-lg border border-white/10">
              <span className="text-slate-400">Antes: </span>
              <span className="text-slate-200">{current.beforeText}</span>
            </div>
            <div className="absolute bottom-4 right-4 bg-[#00A8CC]/90 backdrop-blur-xs text-white text-xs px-3 py-1.5 rounded-lg font-medium shadow-md">
              <span className="text-[#FDD835]">Planejado: </span>
              <span>{current.afterText}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
