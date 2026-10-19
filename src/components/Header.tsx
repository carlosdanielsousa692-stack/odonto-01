import React, { useState } from 'react';
import { Phone, Clock, MapPin, Menu, X, Calendar, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  homeVariant: 'home-1' | 'home-2' | 'home-3';
  setHomeVariant: (variant: 'home-1' | 'home-2' | 'home-3') => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  homeVariant,
  setHomeVariant,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faq', label: 'FAQ' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full bg-white border-b border-slate-100 sticky top-0 z-40 transition-all shadow-xs">
      {/* Top Announcement Bar */}
      <div className="bg-[#004F6E] text-white text-xs py-2 px-4 sm:px-8 border-b border-[#003c54]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-6">
          <div className="flex items-center gap-6 flex-wrap">
            <a
              href={`tel:${CLINIC_INFO.emergencyPhone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-1.5 text-cyan-200 hover:text-white font-medium transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#00A8CC]" />
              <span>Emergency: {CLINIC_INFO.emergencyPhone}</span>
            </a>
            <div className="hidden md:flex items-center gap-1.5 text-slate-300 whitespace-nowrap">
              <Clock className="w-3.5 h-3.5 text-[#00A8CC]" />
              <span>Mon-Fri: 8am-8pm · Sat: 9am-5pm</span>
            </div>
            <div className="hidden lg:flex items-center gap-1.5 text-slate-300 whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-[#00A8CC]" />
              <span>450 Health Pkwy, New York</span>
            </div>
          </div>

          {/* Elementor Kit Variant Selector (Home 1, Home 2, Home 3) */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400 hidden sm:inline">Kit View:</span>
            <div className="inline-flex items-center bg-[#00384f] rounded p-0.5 border border-[#006085]">
              <button
                type="button"
                onClick={() => {
                  setHomeVariant('home-1');
                  if (currentTab !== 'home') setCurrentTab('home');
                }}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                  currentTab === 'home' && homeVariant === 'home-1'
                    ? 'bg-[#00A8CC] text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Home 1
              </button>
              <button
                type="button"
                onClick={() => {
                  setHomeVariant('home-2');
                  if (currentTab !== 'home') setCurrentTab('home');
                }}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                  currentTab === 'home' && homeVariant === 'home-2'
                    ? 'bg-[#00A8CC] text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Home 2
              </button>
              <button
                type="button"
                onClick={() => {
                  setHomeVariant('home-3');
                  if (currentTab !== 'home') setCurrentTab('home');
                }}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                  currentTab === 'home' && homeVariant === 'home-3'
                    ? 'bg-[#00A8CC] text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Home 3
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Top Bar (Complies with 3-Zone Contract: Brand — Links — 1 Action) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between gap-8">
        {/* Zone 1: Single element brand wordmark */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left whitespace-nowrap shrink-0 group focus:outline-hidden"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#004F6E] to-[#00A8CC] flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2C8.5 2 6 4.5 6 8c0 2.5 1 4.5 2 7 1 2.5 1 5 1.5 7 .2.8 1.2 1 1.8.5.8-.7 1.5-2 1.7-4 .2-2-.5-3.5-.5-5 0-1.5.5-2.5 1.5-2.5s1.5 1 1.5 2.5c0 1.5-.7 3-.5 5 .2 2 .9 3.3 1.7 4 .6.5 1.6.3 1.8-.5.5-2 .5-4.5 1.5-7 1-2.5 2-4.5 2-7 0-3.5-2.5-6-6-6z" />
            </svg>
          </div>
          <div>
            <span className="text-2xl font-bold tracking-tight text-[#004F6E]">
              Care<span className="text-[#00A8CC]">dent</span>
            </span>
            <span className="block text-[10px] tracking-wider uppercase font-semibold text-slate-500">
              Dental Clinic
            </span>
          </div>
        </button>

        {/* Zone 2: Concise single-line navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNavClick(link.id)}
              className={`whitespace-nowrap transition-colors py-1 cursor-pointer border-b-2 ${
                currentTab === link.id
                  ? 'text-[#00A8CC] border-[#00A8CC] font-semibold'
                  : 'text-slate-600 border-transparent hover:text-[#004F6E] hover:border-slate-300'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenBooking}
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#00A8CC] hover:bg-[#008cae] rounded-lg shadow-sm transition-all hover:shadow hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </button>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-[#004F6E] rounded-md focus:outline-hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-4 shadow-xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id)}
                className={`text-left py-2.5 px-3 rounded-md text-sm font-medium transition-colors ${
                  currentTab === link.id
                    ? 'bg-cyan-50 text-[#00A8CC] font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-[#00A8CC] rounded-lg shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
