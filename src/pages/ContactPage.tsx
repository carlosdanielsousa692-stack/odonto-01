import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface ContactPageProps {
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: '',
      });
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-b from-cyan-50/60 to-white py-14 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center max-w-3xl">
          <span className="text-xs font-semibold text-[#00A8CC] uppercase tracking-wider block mb-2">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#004F6E] tracking-tight">
            We Are Here To Help Your Smile
          </h1>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Have questions about our treatments, accepted insurances, or want to schedule an appointment? Reach out via phone, email, or visit our clinic.
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Cards & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Emergency Hotline Card */}
            <div className="bg-[#004F6E] text-white p-6 sm:p-7 rounded-2xl shadow-md border border-[#006085]">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FDD835]" />
                <span className="text-xs font-semibold text-[#FDD835] uppercase tracking-wider">
                  24/7 Dental Emergency Triage
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Emergency Dental Relief</h3>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                If you have experienced severe tooth trauma, acute abscess swelling, or intense pain, call immediately.
              </p>
              <a
                href={`tel:${CLINIC_INFO.emergencyPhone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00A8CC] hover:bg-[#008cae] text-white font-semibold text-xs rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call {CLINIC_INFO.emergencyPhone}</span>
              </a>
            </div>

            {/* Clinic Details */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 space-y-5 shadow-xs">
              <h3 className="text-lg font-bold text-[#004F6E]">Clinic Information</h3>

              <div className="flex items-start gap-3.5 text-xs text-slate-600">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 text-[#00A8CC] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-slate-900 block text-sm">Practice Location</span>
                  <p className="mt-0.5">{CLINIC_INFO.address}</p>
                  <p className="text-slate-400 mt-1">Validated on-site patient parking available.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs text-slate-600">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 text-[#00A8CC] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-slate-900 block text-sm">Reception & Scheduling</span>
                  <p className="mt-0.5">{CLINIC_INFO.receptionPhone}</p>
                  <p className="text-slate-400 mt-0.5">{CLINIC_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs text-slate-600">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 text-[#00A8CC] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-slate-900 block text-sm">Hours of Operation</span>
                  <p className="mt-0.5 font-medium text-slate-700">Mon – Fri: 8:00 AM – 8:00 PM</p>
                  <p className="text-slate-700">Sat: 9:00 AM – 5:00 PM</p>
                  <p className="text-slate-400">Sun: Emergency On-Call Only</p>
                </div>
              </div>
            </div>

            {/* Quick Online Booking Trigger */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-800">Prefer direct online booking?</p>
                <p className="text-[11px] text-slate-500">Pick doctor, service, and time instantly.</p>
              </div>
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-4 py-2 bg-[#00A8CC] hover:bg-[#008cae] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <h3 className="text-xl font-bold text-[#004F6E] mb-1">Send a Message</h3>
              <p className="text-xs text-slate-500 mb-6">
                Our patient coordinator replies within 2 business hours.
              </p>

              {submitted ? (
                <div className="p-8 text-center space-y-3 bg-emerald-50 border border-emerald-200 rounded-xl">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Message Received!</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Thank you for reaching out. One of our dental care coordinators will review your inquiry and follow up shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-hidden focus:border-[#00A8CC]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-hidden focus:border-[#00A8CC]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-hidden focus:border-[#00A8CC]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Inquiry Topic
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-hidden focus:border-[#00A8CC]"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Cosmetic Consultation">Cosmetic Consultation</option>
                        <option value="Dental Implants">Dental Implants</option>
                        <option value="Insurance Coverage">Insurance & Billing</option>
                        <option value="Pediatric Appointment">Pediatric Visit</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      How Can We Help You? *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Please describe your dental concern, symptoms, or requested appointment timeframe..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-hidden focus:border-[#00A8CC]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-7 py-3 bg-[#00A8CC] hover:bg-[#008cae] text-white font-semibold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Location & Transit Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600">
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">Subway & Public Transit</h4>
              <p>
                Accessible via 6 train (33rd St Station) and N, Q, R, W trains (34th St Herald Sq). Walking distance 4 mins.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">Parking & Valet</h4>
              <p>
                Complimentary 90-minute validated parking in the medical building basement garage with security elevator access.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">Accessibility</h4>
              <p>
                ADA fully compliant facility with barrier-free ground floor ramp and dedicated wheelchair-accessible operatory suites.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
