import React from 'react';
import {
  Calendar,
  Phone,
  ShieldCheck,
  Star,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  Smile,
  Activity,
  Award,
  Users,
} from 'lucide-react';
import { CLINIC_INFO, CLINIC_SERVICES, CLINIC_DOCTORS, BLOG_POSTS, TESTIMONIALS } from '../data/dentalData';
import { CostCalculator } from '../components/CostCalculator';
import { SmileComparison } from '../components/SmileComparison';

interface HomePageProps {
  variant: 'home-1' | 'home-2' | 'home-3';
  onOpenBooking: (serviceId?: string, doctorId?: string) => void;
  onNavigate: (tab: string) => void;
  onOpenBlogPost: (post: typeof BLOG_POSTS[0]) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  variant,
  onOpenBooking,
  onNavigate,
  onOpenBlogPost,
}) => {
  return (
    <div className="space-y-20 pb-16">
      {/* =========================================================================
          HERO SECTION (Varied according to Home 1, Home 2, Home 3)
         ========================================================================= */}
      {variant === 'home-1' && (
        <section className="relative pt-6 sm:pt-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              {/* Text side */}
              <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#00A8CC] tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#00A8CC]" />
                  <span>Accepting New Patients & Emergencies</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#004F6E] leading-[1.12]">
                  Gentle, Precision <span className="text-[#00A8CC]">Dental Care</span> For Your Entire Family
                </h1>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                  Experience comfortable, anxiety-free dentistry in New York. From routine cleanings to 3D guided implants and smile makeovers, our board-certified dentists deliver healthy smiles that last a lifetime.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => onOpenBooking()}
                    className="flex items-center justify-center gap-2 px-7 py-4 bg-[#00A8CC] hover:bg-[#008cae] text-white font-semibold rounded-xl text-base shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Book Your Appointment</span>
                  </button>

                  <a
                    href={`tel:${CLINIC_INFO.emergencyPhone.replace(/[^0-9+]/g, '')}`}
                    className="flex items-center justify-center gap-2 px-6 py-4 bg-white border border-slate-200 hover:border-[#004F6E] text-[#004F6E] font-semibold rounded-xl text-base transition-all hover:bg-slate-50 whitespace-nowrap"
                  >
                    <Phone className="w-5 h-5 text-[#00A8CC]" />
                    <span>Emergency: {CLINIC_INFO.emergencyPhone}</span>
                  </a>
                </div>

                {/* Proof strip */}
                <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-6 text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <div className="flex text-[#FDD835]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="font-semibold text-slate-800">4.9/5 Rating</span>
                    <span>(850+ reviews)</span>
                  </div>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#00A8CC]" />
                    <span>In-Network With All Major PPOs</span>
                  </div>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#00A8CC]" />
                    <span>Same-Day Emergency Relief</span>
                  </div>
                </div>
              </div>

              {/* Visual side */}
              <div className="lg:col-span-6 relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl h-full min-h-[380px] lg:min-h-[480px] relative border border-slate-100 group">
                  <img
                    src="/src/assets/images/hero_dentist_consultation_1792366051819.jpg"
                    alt="Dentist consulting with patient in modern clinic"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004F6E]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/40 shadow-xl flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-[#00A8CC] uppercase">Modern Digital Clinic</p>
                      <p className="text-base font-bold text-[#004F6E]">Intraoral 3D Scans & Zero-Pain Numbing</p>
                      <p className="text-xs text-slate-500 mt-0.5">Complimentary consultations for new patients</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onNavigate('about')}
                      className="px-4 py-2 bg-[#004F6E] hover:bg-[#003c54] text-white text-xs font-semibold rounded-lg shrink-0 transition-colors"
                    >
                      Tour Clinic
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {variant === 'home-2' && (
        <section className="relative pt-6 sm:pt-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#00A8CC] tracking-wider uppercase">
                  <Sparkles className="w-4 h-4 text-[#FDD835]" />
                  <span>Aesthetic & Family Smile Studio</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#004F6E] leading-[1.12]">
                  Illuminate Your Smile With <span className="text-[#00A8CC]">Cosmetic Artistry</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                  Tailored porcelain veneers, 1-hour laser whitening, and invisible aligners. We blend facial aesthetics with biological dental health to deliver stunning, photogenic results.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => onOpenBooking('teeth-whitening')}
                    className="flex items-center justify-center gap-2 px-7 py-4 bg-[#00A8CC] hover:bg-[#008cae] text-white font-semibold rounded-xl text-base shadow-md transition-all cursor-pointer whitespace-nowrap"
                  >
                    <Sparkles className="w-5 h-5 text-[#FDD835]" />
                    <span>Book Smile Makeover Consult</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigate('services')}
                    className="flex items-center justify-center gap-2 px-6 py-4 bg-white border border-slate-200 hover:border-[#004F6E] text-[#004F6E] font-semibold rounded-xl text-base transition-all whitespace-nowrap cursor-pointer"
                  >
                    <span>View Cosmetic Catalog</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center gap-4 text-xs text-slate-500">
                  <span className="font-semibold text-slate-800">Special Focus:</span>
                  <span>Teeth Whitening · Porcelain Veneers · Clear Aligners · Gum Aesthetics</span>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-3xl overflow-hidden shadow-2xl h-full min-h-[380px] lg:min-h-[480px] relative border border-slate-100">
                  <img
                    src="/src/assets/images/happy_patient_smile_1792366053067.jpg"
                    alt="Radiant healthy smile after cosmetic dental treatment"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004F6E]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-[#00A8CC] uppercase">Cosmetic Transformation</p>
                      <p className="text-base font-bold text-[#004F6E]">Up to 8 Shades Brighter in 60 Mins</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onOpenBooking('teeth-whitening')}
                      className="px-4 py-2 bg-[#00A8CC] hover:bg-[#008cae] text-white text-xs font-semibold rounded-lg shrink-0"
                    >
                      Instant Booking
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {variant === 'home-3' && (
        <section className="relative pt-6 sm:pt-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#00A8CC] tracking-wider uppercase">
                  <Activity className="w-4 h-4 text-[#00A8CC]" />
                  <span>Advanced Surgical & Implantology Center</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#004F6E] leading-[1.12]">
                  High-Tech Precision <span className="text-[#00A8CC]">Dental Implants</span> & Restorative Surgery
                </h1>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                  Restore missing teeth permanently with 3D computer-navigated implant placement, painless sedation dentistry, and custom zirconia crowns. Lifetime fixture warranty.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => onOpenBooking('dental-implants')}
                    className="flex items-center justify-center gap-2 px-7 py-4 bg-[#00A8CC] hover:bg-[#008cae] text-white font-semibold rounded-xl text-base shadow-md transition-all cursor-pointer whitespace-nowrap"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Free Implant Consultation</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigate('contact')}
                    className="flex items-center justify-center gap-2 px-6 py-4 bg-white border border-slate-200 hover:border-[#004F6E] text-[#004F6E] font-semibold rounded-xl text-base transition-all whitespace-nowrap cursor-pointer"
                  >
                    <span>Emergency Oral Surgery</span>
                  </button>
                </div>

                <div className="pt-4 border-t border-slate-200 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <span className="block text-2xl font-bold text-[#004F6E] font-mono">98.4%</span>
                    <span className="text-[11px] text-slate-500">Implant Success Rate</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-bold text-[#004F6E] font-mono">4,000+</span>
                    <span className="text-[11px] text-slate-500">Implants Placed</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-bold text-[#004F6E] font-mono">0% APR</span>
                    <span className="text-[11px] text-slate-500">Financing Available</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-3xl overflow-hidden shadow-2xl h-full min-h-[380px] lg:min-h-[480px] relative border border-slate-100">
                  <img
                    src="/src/assets/images/dental_clinic_interior_1792366051724.jpg"
                    alt="Advanced dental surgical suite with digital imaging"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004F6E]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-[#00A8CC] uppercase">Surgical Suite</p>
                      <p className="text-base font-bold text-[#004F6E]">Low-Radiation 3D CBCT Imaging</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onOpenBooking('dental-implants')}
                      className="px-4 py-2 bg-[#004F6E] hover:bg-[#003c54] text-white text-xs font-semibold rounded-lg shrink-0"
                    >
                      Book 3D Scan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          KEY CLINIC METRICS & TRUST STRIP
         ========================================================================= */}
      <section className="bg-slate-50 border-y border-slate-200/80 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {CLINIC_INFO.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="block text-3xl sm:text-4xl font-extrabold text-[#004F6E] font-mono tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-medium text-slate-500 mt-1 block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED SERVICES BENTO GRID
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-semibold text-[#00A8CC] uppercase tracking-wider block">
              Exceptional Dental Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#004F6E] tracking-tight mt-1">
              Comprehensive Treatments Under One Roof
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-xl">
              From preventive family dentistry to restorative surgery and cosmetic makeovers, our clinic utilizes leading biological techniques.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00A8CC] hover:text-[#008cae] transition-colors cursor-pointer self-start md:self-auto"
          >
            <span>Explore All 8 Treatments</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLINIC_SERVICES.slice(0, 6).map((service, index) => (
            <div
              key={service.id}
              className={`bg-white rounded-2xl p-6 border transition-all hover:shadow-lg flex flex-col justify-between ${
                index === 0
                  ? 'border-[#00A8CC]/60 bg-gradient-to-br from-cyan-50/40 via-white to-white'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 text-[#00A8CC] flex items-center justify-center font-bold">
                    {index === 0 ? <Sparkles className="w-6 h-6" /> : <Smile className="w-6 h-6" />}
                  </div>
                  <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#004F6E] mb-2">{service.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                <ul className="space-y-1.5 mb-6 text-xs text-slate-600">
                  {service.features.slice(0, 3).map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00A8CC] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-400 block">Estimated Fee:</span>
                  <span className="font-semibold text-slate-800">{service.priceEstimate}</span>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenBooking(service.id)}
                  className="px-3.5 py-2 bg-[#00A8CC] hover:bg-[#008cae] text-white font-medium rounded-lg transition-colors cursor-pointer"
                >
                  Book Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          WHY CHOOSE CAREDENT / CLINICAL PHILOSOPHY
         ========================================================================= */}
      <section className="bg-[#004F6E] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-semibold text-[#FDD835] uppercase tracking-wider block">
                The Caredent Standard
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Why Thousands Choose Us As Their Dental Home
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                We believe dental appointments should never cause fear or anxiety. Our practice was built from the ground up to offer soothing, high-tech, and completely personalized care.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#00A8CC]/20 border border-[#00A8CC]/40 flex items-center justify-center text-[#00A8CC] shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">Painless Local Delivery & Sedation</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Computerized anesthesia delivers precise numbing without uncomfortable stinging sensations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#00A8CC]/20 border border-[#00A8CC]/40 flex items-center justify-center text-[#00A8CC] shrink-0 mt-0.5">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">No Goopy Molds: 100% 3D Digital Scans</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      High-definition optical wands capture thousands of frames per second for ultra-accurate crowns and aligners.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#00A8CC]/20 border border-[#00A8CC]/40 flex items-center justify-center text-[#00A8CC] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">On-Time Guarantee & Evening Hours</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Open late until 8:00 PM on weekdays so you never have to miss work or school for your dental checkup.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenBooking()}
                  className="px-6 py-3 bg-[#00A8CC] hover:bg-[#008cae] text-white font-semibold text-sm rounded-xl transition-all cursor-pointer shadow-md"
                >
                  Schedule Your Visit Today
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                <img
                  src="/src/assets/images/dental_clinic_interior_1792366051724.jpg"
                  alt="Modern sterile dental clinic room"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE SMILE MAKEOVER SHOWCASE
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <SmileComparison onOpenBooking={onOpenBooking} />
      </section>

      {/* =========================================================================
          TRANSPARENT PRICING ESTIMATOR
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <CostCalculator onOpenBooking={onOpenBooking} />
      </section>

      {/* =========================================================================
          MEET OUR BOARD-CERTIFIED DENTISTS
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-[#00A8CC] uppercase tracking-wider block">
            Expert Dental Specialists
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#004F6E] tracking-tight mt-1">
            Meet Your Caring Dental Team
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Dedicated professionals trained at top institutions, combining decades of surgical skill with genuine bedside empathy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CLINIC_DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="h-64 overflow-hidden bg-slate-100 relative">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[11px] font-semibold text-[#004F6E] px-2.5 py-1 rounded-md shadow-xs">
                    {doc.experience}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#004F6E]">{doc.name}</h3>
                  <p className="text-xs font-semibold text-[#00A8CC] mb-2">{doc.title}</p>
                  <p className="text-xs text-slate-500 mb-3">{doc.education}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{doc.bio}</p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Days: <strong className="text-slate-700">{doc.daysAvailable.join(', ')}</strong>
                </span>
                <button
                  type="button"
                  onClick={() => onOpenBooking(undefined, doc.id)}
                  className="px-3.5 py-1.5 bg-cyan-50 hover:bg-[#00A8CC] text-[#004F6E] hover:text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Book with {doc.name.split(' ')[1]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          PATIENT TESTIMONIALS STRIP
         ========================================================================= */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-semibold text-[#00A8CC] uppercase tracking-wider block">
                Verified Patient Experiences
              </span>
              <h2 className="text-3xl font-bold text-[#004F6E] tracking-tight mt-1">
                Hear What Our Patients Say
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('testimonials')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00A8CC] hover:text-[#008cae] cursor-pointer"
            >
              <span>View All Reviews</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-[#FDD835] mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed mb-4">
                    "{t.review}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-[#004F6E]">{t.patientName}</p>
                    <p className="text-slate-400 text-[11px]">{t.treatment}</p>
                  </div>
                  <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-medium">
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          LATEST DENTAL HEALTH ARTICLES (from the kit's exact posts)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-semibold text-[#00A8CC] uppercase tracking-wider block">
              Dental Education & Guides
            </span>
            <h2 className="text-3xl font-bold text-[#004F6E] tracking-tight mt-1">
              Latest Oral Health Insights
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Evidence-based tips from our clinical team to protect your smile.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('blog')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00A8CC] hover:text-[#008cae] cursor-pointer"
          >
            <span>Read All Articles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(0, 3).map((post) => (
            <article
              key={post.id}
              onClick={() => onOpenBlogPost(post)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="h-48 overflow-hidden bg-slate-100 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#004F6E]/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <span>{post.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#004F6E] group-hover:text-[#00A8CC] transition-colors leading-snug mb-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between text-xs font-semibold text-[#00A8CC]">
                <span>Read Full Guide</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =========================================================================
          FINAL CALL TO ACTION BANNER
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-r from-[#004F6E] via-[#00445f] to-[#00A8CC] rounded-3xl p-8 sm:p-12 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-xl space-y-2">
            <span className="text-xs font-semibold text-[#FDD835] uppercase tracking-wider block">
              Ready For A Healthier Smile?
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Schedule Your Consultation Today
            </h2>
            <p className="text-slate-200 text-sm leading-relaxed">
              New patient comprehensive exams include digital 3D scans, low-dose digital X-rays, and a personalized treatment roadmap.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 bg-[#FDD835] hover:bg-[#ebd230] text-[#004F6E] font-bold rounded-xl text-base shadow-md transition-all cursor-pointer whitespace-nowrap"
            >
              Book Your Appointment
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-base transition-all cursor-pointer whitespace-nowrap"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
