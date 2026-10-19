import React from 'react';
import { ShieldCheck, Award, HeartHandshake, Sparkles, CheckCircle2, Calendar, Phone } from 'lucide-react';
import { CLINIC_INFO, CLINIC_DOCTORS } from '../data/dentalData';

interface AboutPageProps {
  onOpenBooking: (serviceId?: string, doctorId?: string) => void;
  onNavigate: (tab: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <div className="space-y-20 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-cyan-50/60 to-white py-14 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center max-w-3xl">
          <span className="text-xs font-semibold text-[#00A8CC] uppercase tracking-wider block mb-2">
            About Caredent Dental Clinic
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#004F6E] tracking-tight">
            Pioneering Gentle, High-Tech Dental Healthcare Since 2010
          </h1>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            We reimagined the dental experience to be calm, transparent, and pain-free. Our boutique clinic blends advanced medical technology with warm human compassion.
          </p>
        </div>
      </section>

      {/* Clinic Story Split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-semibold text-[#00A8CC] uppercase tracking-wider block">
              Our Founding Story
            </span>
            <h2 className="text-3xl font-bold text-[#004F6E] tracking-tight">
              A Dental Practice Designed Around Human Comfort
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Caredent was established with a singular mission: to eliminate the fear and clinical coldness historically associated with dental visits. Founder Dr. Arthur J. Sterling observed that over 60% of adults delay dental care due to past negative experiences.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We answered that challenge by designing a clinic centered on comfort: noise-canceling headphones, ceiling entertainment screens, needle-free electronic numbing, and 100% digital 3D scans that replace gooey impression trays forever.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
              <div>
                <span className="text-2xl font-bold text-[#004F6E] font-mono">18,500+</span>
                <span className="text-xs text-slate-500 block">Patients Treated Safely</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-[#004F6E] font-mono">100%</span>
                <span className="text-xs text-slate-500 block">Sterilization Tracked Digitally</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-16/10">
              <img
                src="/src/assets/images/dental_clinic_interior_1792366051724.jpg"
                alt="Inside Caredent Clinic"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Principles */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold text-[#00A8CC] uppercase tracking-wider block">
              The Caredent Promise
            </span>
            <h2 className="text-3xl font-bold text-[#004F6E] tracking-tight mt-1">
              Our 4 Pillars of Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 text-[#00A8CC] flex items-center justify-center mb-4">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#004F6E] mb-2">Gentle Touch Guarantee</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We never rush procedures. If you ever feel discomfort or need a breather, simply raise your hand and we pause immediately.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 text-[#00A8CC] flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#004F6E] mb-2">100% Digital Dentistry</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                From low-radiation CBCT 3D imaging to precision milled crowns, our technology ensures unmatched clinical accuracy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 text-[#00A8CC] flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#004F6E] mb-2">Transparent Pricing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero surprise bills. We verify your insurance benefits beforehand and explain all copays before any procedure begins.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 text-[#00A8CC] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#004F6E] mb-2">Hospital-Grade Safety</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Autoclave sterilization indicators, surgical clean air filtration, and strict OSHA/CDC sterile protocols for every patient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-[#00A8CC] uppercase tracking-wider block">
            Our Medical Leadership
          </span>
          <h2 className="text-3xl font-bold text-[#004F6E] tracking-tight mt-1">
            Meet the Dentists Dedicated to Your Smile
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Our clinicians regularly lecture at dental symposia and maintain active memberships in the ADA, AACD, and ICOI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CLINIC_DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="h-64 overflow-hidden bg-slate-100">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#004F6E]">{doc.name}</h3>
                  <p className="text-xs font-semibold text-[#00A8CC] mb-1">{doc.title}</p>
                  <p className="text-xs text-slate-400 mb-3">{doc.education}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{doc.bio}</p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                <span className="text-xs text-slate-500">{doc.experience}</span>
                <button
                  type="button"
                  onClick={() => onOpenBooking(undefined, doc.id)}
                  className="px-4 py-2 bg-[#00A8CC] hover:bg-[#008cae] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Book Visit
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#004F6E] text-white rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-xl space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold">Experience the Caredent Difference</h3>
          <p className="text-sm text-slate-300">
            Schedule a comprehensive exam or consultation. We accept all major PPO insurance plans.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="px-6 py-3 bg-[#00A8CC] hover:bg-[#008cae] text-white font-semibold rounded-xl text-sm transition-colors cursor-pointer"
            >
              Book Your Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
