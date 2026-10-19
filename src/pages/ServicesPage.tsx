import React, { useState } from 'react';
import { Sparkles, ShieldCheck, Smile, Activity, HeartPulse, AlertCircle, ArrowRight, CheckCircle2, Clock, DollarSign } from 'lucide-react';
import { CLINIC_SERVICES } from '../data/dentalData';
import { CostCalculator } from '../components/CostCalculator';

interface ServicesPageProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Cosmetic', 'Restorative', 'Orthodontics', 'Pediatric', 'Emergency'];

  const filteredServices =
    selectedCategory === 'All'
      ? CLINIC_SERVICES
      : CLINIC_SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <div className="space-y-16 pb-16">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-cyan-50/60 to-white py-14 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center max-w-3xl">
          <span className="text-xs font-semibold text-[#00A8CC] uppercase tracking-wider block mb-2">
            Dental Treatment Catalog
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#004F6E] tracking-tight">
            Advanced Clinical Care Tailored To Your Smile
          </h1>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Every smile is unique. We provide comprehensive preventive, cosmetic, orthodontic, and restorative solutions utilizing state-of-the-art biological dentistry.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#004F6E] text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                {cat} Treatments
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 hover:border-[#00A8CC]/60 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-semibold text-[#00A8CC] bg-cyan-50 px-3 py-1 rounded-md">
                    {service.category} Dentistry
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#004F6E] mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="text-xs font-semibold text-slate-800 uppercase tracking-wider block">
                    What's Included:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00A8CC] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] text-slate-400 block">Estimated Standard Fee:</span>
                  <span className="text-base font-bold text-[#004F6E] font-mono">
                    {service.priceEstimate}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenBooking(service.id)}
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#00A8CC] hover:bg-[#008cae] text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>Book This Treatment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cost Estimator Embedded */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <CostCalculator onOpenBooking={onOpenBooking} />
      </section>
    </div>
  );
};
