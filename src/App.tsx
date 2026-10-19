import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { FaqPage } from './pages/FaqPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPost } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [homeVariant, setHomeVariant] = useState<'home-1' | 'home-2' | 'home-3'>('home-1');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [preselectedDoctor, setPreselectedDoctor] = useState<string | undefined>(undefined);
  const [activeBlogPost, setActiveBlogPost] = useState<BlogPost | null>(null);

  const handleOpenBooking = (serviceId?: string, doctorId?: string) => {
    setPreselectedService(serviceId);
    setPreselectedDoctor(doctorId);
    setIsBookingOpen(true);
  };

  const handleNavigate = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBlogPost = (post: BlogPost) => {
    setActiveBlogPost(post);
    if (currentTab !== 'blog') {
      setCurrentTab('blog');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#2C2C2C] selection:bg-[#00A8CC]/20 selection:text-[#004F6E]">
      {/* Top Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={handleNavigate}
        homeVariant={homeVariant}
        setHomeVariant={setHomeVariant}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <HomePage
            variant={homeVariant}
            onOpenBooking={handleOpenBooking}
            onNavigate={handleNavigate}
            onOpenBlogPost={handleOpenBlogPost}
          />
        )}

        {currentTab === 'about' && (
          <AboutPage
            onOpenBooking={handleOpenBooking}
            onNavigate={handleNavigate}
          />
        )}

        {currentTab === 'services' && (
          <ServicesPage
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentTab === 'testimonials' && (
          <TestimonialsPage
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentTab === 'faq' && (
          <FaqPage
            onOpenBooking={() => handleOpenBooking()}
            onNavigate={handleNavigate}
          />
        )}

        {currentTab === 'blog' && (
          <BlogPage
            activePost={activeBlogPost}
            setActivePost={setActiveBlogPost}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentTab === 'contact' && (
          <ContactPage
            onOpenBooking={() => handleOpenBooking()}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Online Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedServiceId={preselectedService}
        preselectedDoctorId={preselectedDoctor}
      />
    </div>
  );
}
