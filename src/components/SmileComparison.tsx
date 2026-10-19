import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface SmileComparisonProps {
  onOpenBooking: () => void;
}

export const SmileComparison: React.FC<SmileComparisonProps> = ({ onOpenBooking }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeCase, setActiveCase] = useState<number>(0);

  const cases = [
    {
      title: 'Full Porcelain Veneers & Whitening',
      patient: 'Victoria H., 29',
      duration: '2 appointments over 10 days',
      shadeChange: '8 shades brighter (Vita shade A3 to BL2)',
      description: 'Corrected chipped incisors, minor spacing, and deep tetracycline discoloration using ultra-thin custom ceramic veneers.',
      beforeText: 'Discoloration & irregular enamel chips',
      afterText: 'Harmonious Hollywood arch & natural luminescence',
      image: '/src/assets/images/happy_patient_smile_1792366053067.jpg'
    },
    {
      title: 'Digital Clear Aligners & Contouring',
      patient: 'David P., 42',
      duration: '8 months clear aligners',
      shadeChange: 'Flawless dental arch alignment',
      description: 'Corrected severe lower crowding and narrow upper smile arch with gentle clear aligners and enamel micro-abrasion.',
      beforeText: 'Severe lower crowding & bite interference',
      afterText: 'Symmetrical alignment & comfortable natural bite',
      image: '/src/assets/images/hero_dentist_consultation_1792366051819.jpg'
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
            <span>Real Patient Smile Transformation</span>
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
              <span>Patient: <strong className="text-white">{current.patient}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00A8CC] shrink-0" />
              <span>Treatment Time: <strong className="text-white">{current.duration}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00A8CC] shrink-0" />
              <span>Result: <strong className="text-white">{current.shadeChange}</strong></span>
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
                    ? 'bg-[#00A8CC] text-white'
                    : 'bg-white/10 hover:bg-white/20 text-slate-300'
                }`}
              >
                Case 0{idx + 1}
              </button>
            ))}
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00A8CC] hover:bg-[#008cae] text-white font-semibold rounded-xl text-sm transition-all shadow-md cursor-pointer"
            >
              <span>Schedule Smile Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Visual Showcase & Interactive Reveal */}
        <div className="lg:col-span-7">
          <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-white/20 shadow-2xl aspect-16/10">
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Visual overlay badge */}
            <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-xs text-white text-xs px-3 py-1.5 rounded-lg border border-white/10">
              <span className="text-slate-400">Before: </span>
              <span className="text-slate-200">{current.beforeText}</span>
            </div>
            <div className="absolute bottom-4 right-4 bg-[#00A8CC]/90 backdrop-blur-xs text-white text-xs px-3 py-1.5 rounded-lg font-medium shadow-md">
              <span className="text-[#FDD835]">After: </span>
              <span>{current.afterText}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
