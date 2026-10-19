import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO, CLINIC_SERVICES } from '../data/dentalData';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#004F6E] text-white pt-16 pb-12 border-t border-[#003c54]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Emergency CTA Strip */}
        <div className="bg-[#00384f] border border-[#006085] rounded-2xl p-6 sm:p-8 mb-14 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-[#00A8CC]/20 border border-[#00A8CC]/40 flex items-center justify-center text-[#00A8CC] shrink-0">
              <Phone className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-semibold text-[#FDD835] uppercase tracking-wider block">
                Need Immediate Care?
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Dental Emergency? We Are Here For You 24/7
              </h3>
              <p className="text-slate-300 text-sm mt-0.5">
                Call our direct emergency line for priority same-day pain relief.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href={`tel:${CLINIC_INFO.emergencyPhone.replace(/[^0-9+]/g, '')}`}
              className="w-full md:w-auto px-6 py-3.5 bg-[#00A8CC] hover:bg-[#008cae] text-white font-semibold rounded-xl text-center shadow-md transition-all whitespace-nowrap"
            >
              Call {CLINIC_INFO.emergencyPhone}
            </a>
            <button
              type="button"
              onClick={onOpenBooking}
              className="hidden sm:inline-flex px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-all whitespace-nowrap cursor-pointer"
            >
              Book Online
            </button>
          </div>
        </div>

        {/* 4 Column Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Col 1: About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#00A8CC] flex items-center justify-center text-white font-bold">
                C
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Care<span className="text-[#00A8CC]">dent</span>
              </span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Modern patient-centered dental clinic providing painless treatments, digital smile design, and restorative oral surgery in New York.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-300 bg-[#00384f] p-3 rounded-lg border border-[#005779]">
              <ShieldCheck className="w-4 h-4 text-[#00A8CC] shrink-0" />
              <span>ADA Certified & Fully Accredited Facility</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4 border-b border-[#006085] pb-2 inline-block">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#00A8CC] transition-colors cursor-pointer"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#00A8CC] transition-colors cursor-pointer"
                >
                  About Our Clinic & Team
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#00A8CC] transition-colors cursor-pointer"
                >
                  All Dental Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('testimonials')}
                  className="hover:text-[#00A8CC] transition-colors cursor-pointer"
                >
                  Patient Testimonials
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('faq')}
                  className="hover:text-[#00A8CC] transition-colors cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('blog')}
                  className="hover:text-[#00A8CC] transition-colors cursor-pointer"
                >
                  Dental Health Blog
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#00A8CC] transition-colors cursor-pointer"
                >
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4 border-b border-[#006085] pb-2 inline-block">
              Dental Treatments
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {CLINIC_SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate('services')}
                    className="hover:text-[#00A8CC] transition-colors text-left cursor-pointer"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Working Hours & Newsletter */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4 border-b border-[#006085] pb-2 inline-block">
              Hours & Updates
            </h4>
            <div className="space-y-2 text-xs text-slate-300 mb-6">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#00A8CC] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Mon – Fri: 8:00 AM – 8:00 PM</p>
                  <p>Sat: 9:00 AM – 5:00 PM</p>
                  <p className="text-slate-400">Sun: Emergency Care on Call</p>
                </div>
              </div>
              <div className="flex items-start gap-2 pt-2">
                <MapPin className="w-4 h-4 text-[#00A8CC] shrink-0 mt-0.5" />
                <p>{CLINIC_INFO.address}</p>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-xs text-slate-300 mb-2 font-medium">Subscribe for Dental Wellness Tips:</p>
              {subscribed ? (
                <div className="flex items-center gap-1.5 text-xs text-emerald-300 bg-emerald-950/50 p-2.5 rounded-lg border border-emerald-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Subscribed! Check your inbox for your welcome tip.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-[#00384f] border border-[#006085] text-xs text-white placeholder-slate-400 rounded-lg px-3 py-2.5 focus:outline-hidden focus:border-[#00A8CC]"
                  />
                  <button
                    type="submit"
                    className="bg-[#00A8CC] hover:bg-[#008cae] text-white px-3 py-2.5 rounded-lg transition-colors cursor-pointer shrink-0"
                    aria-label="Subscribe to newsletter"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#003c54] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Caredent Dental Clinic. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-200 cursor-pointer">Privacy Policy</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-slate-200 cursor-pointer">Terms of Service</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-slate-200 cursor-pointer">HIPAA Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
