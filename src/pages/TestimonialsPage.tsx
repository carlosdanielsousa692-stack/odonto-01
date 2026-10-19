import React, { useState } from 'react';
import { Star, ShieldCheck, CheckCircle2, MessageSquareQuote, Calendar } from 'lucide-react';
import { TESTIMONIALS } from '../data/dentalData';
import { SmileComparison } from '../components/SmileComparison';

interface TestimonialsPageProps {
  onOpenBooking: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onOpenBooking }) => {
  const [filterTreatment, setFilterTreatment] = useState('All');

  const treatments = ['All', 'Veneers', 'Dental Implant', 'Pediatric', 'Clear Aligners'];

  const filtered =
    filterTreatment === 'All'
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.treatment.toLowerCase().includes(filterTreatment.toLowerCase()));

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-b from-cyan-50/60 to-white py-14 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center max-w-3xl">
          <span className="text-xs font-semibold text-[#00A8CC] uppercase tracking-wider block mb-2">
            Patient Stories & Reviews
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#004F6E] tracking-tight">
            Loved By Over 18,500 Happy Smiles
          </h1>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Read real, unfiltered testimonials from patients who transformed their dental health and confidence at Caredent.
          </p>

          {/* Aggregate Rating Badge */}
          <div className="mt-6 inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-full border border-slate-200 shadow-xs">
            <div className="flex text-[#FDD835]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-sm font-bold text-slate-800">4.9 out of 5</span>
            <span className="text-xs text-slate-400">·</span>
            <span className="text-xs text-slate-500 font-medium">850+ Verified Google & Zocdoc Reviews</span>
          </div>
        </div>
      </section>

      {/* Smile Transformation Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <SmileComparison onOpenBooking={onOpenBooking} />
      </section>

      {/* Testimonials Grid with Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <h2 className="text-2xl font-bold text-[#004F6E]">All Patient Reviews</h2>

          <div className="flex flex-wrap items-center gap-2">
            {treatments.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setFilterTreatment(t)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  filterTreatment === t
                    ? 'bg-[#004F6E] text-white'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#FDD835]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400">{item.date}</span>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                  "{item.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 text-[#004F6E] font-bold flex items-center justify-center text-xs">
                    {item.avatarText}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.patientName}</h4>
                    <p className="text-xs text-slate-500">{item.treatment}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Patient</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Review CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold text-[#004F6E]">Ready to Join Our Smile Family?</h3>
          <p className="text-sm text-slate-600">
            Book your comprehensive checkup and experience gentle, modern dentistry designed for you.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-6 py-3 bg-[#00A8CC] hover:bg-[#008cae] text-white font-semibold rounded-xl text-sm transition-colors cursor-pointer"
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
