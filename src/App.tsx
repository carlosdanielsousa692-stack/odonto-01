import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LandingPage } from './pages/LandingPage';
import { openCalModal } from './utils/cal';

export default function App() {
  const handleOpenBooking = () => {
    openCalModal();
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#2C2C2C] selection:bg-[#00A8CC]/20 selection:text-[#004F6E] overflow-x-hidden">
      {/* Top Sticky Header with Section Anchors & Cal.com CTA */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Single-Page Continuous Vertical Flow */}
      <main className="flex-1">
        <LandingPage onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer with Section Links and Clinic Information */}
      <Footer onOpenBooking={handleOpenBooking} />
    </div>
  );
}
