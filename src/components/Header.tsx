import React, { useState, useEffect } from 'react';
import { Phone, Clock, Menu, X, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';
import { calButtonAttributes, handleCalFallback, CAL_PUBLIC_URL } from '../utils/cal';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile drawer on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navSections = [
    { id: 'inicio', label: 'Início' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'diferenciais', label: 'Diferenciais' },
    { id: 'clinica', label: 'A Clínica' },
    { id: 'depoimentos', label: 'Depoimentos' },
    { id: 'faq', label: 'Dúvidas' },
    { id: 'contato', label: 'Contato' },
  ];

  const handleNavClick = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full bg-white border-b border-slate-100 sticky top-0 z-40 shadow-xs">
      {/* Top Announcement Bar */}
      <div className="bg-[#004F6E] text-white text-xs py-2 px-4 sm:px-8 border-b border-[#003c54]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-6">
          <div className="flex items-center gap-6 flex-wrap">
            <a
              href={`tel:${CLINIC_INFO.emergencyPhone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-1.5 text-cyan-200 hover:text-white font-medium transition-colors whitespace-nowrap focus-visible:ring-1 focus-visible:ring-cyan-300 rounded px-1"
              aria-label={`Ligue para emergência odontológica no número ${CLINIC_INFO.emergencyPhone}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#00A8CC]" aria-hidden="true" />
              <span>Plantão: {CLINIC_INFO.emergencyPhone}</span>
            </a>

            <div className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#00A8CC]" aria-hidden="true" />
              <span>Seg – Sex: 08:00 – 20:00 · Sáb: 09:00 – 17:00</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="hidden sm:inline text-slate-300">Agendamento 100% Online:</span>
            <a
              href={CAL_PUBLIC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FDD835] hover:underline font-semibold"
            >
              Cal.com em Tempo Real ↗
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Wordmark */}
        <a
          href="#inicio"
          onClick={(e) => handleNavClick('inicio', e)}
          className="flex items-center gap-2 group cursor-pointer focus-visible:ring-2 focus-visible:ring-[#00A8CC] rounded-lg p-0.5"
          aria-label="Caredent - Voltar ao início"
        >
          <div className="w-9 h-9 rounded-xl bg-[#004F6E] flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:bg-[#003c54] transition-colors">
            C
          </div>
          <div>
            <span className="text-xl font-bold text-[#004F6E] tracking-tight block leading-none">
              Caredent
            </span>
            <span className="text-[10px] text-[#00A8CC] font-semibold tracking-wider uppercase block mt-0.5">
              Clínica Odontológica
            </span>
          </div>
        </a>

        {/* Desktop Single-Line In-Page Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600"
          aria-label="Navegação da página"
        >
          {navSections.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              onClick={(e) => handleNavClick(sec.id, e)}
              className="hover:text-[#00A8CC] transition-colors whitespace-nowrap py-1 focus-visible:ring-1 focus-visible:ring-[#00A8CC] rounded"
            >
              {sec.label}
            </a>
          ))}
        </nav>

        {/* Primary Action Button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            type="button"
            {...calButtonAttributes}
            onClick={handleCalFallback}
            className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 min-h-[44px] bg-[#00A8CC] hover:bg-[#008cae] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs hover:shadow-md transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#00A8CC] focus-visible:ring-offset-2"
          >
            <Calendar className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span className="hidden xs:inline">Agendar Consulta</span>
            <span className="xs:hidden">Agendar</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-slate-700 hover:text-[#004F6E] rounded-lg transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#00A8CC]"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 shadow-lg"
          role="region"
          aria-label="Menu móvel de seções"
        >
          <div className="grid grid-cols-2 gap-2">
            {navSections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => handleNavClick(sec.id, e)}
                className="w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-cyan-50 hover:text-[#004F6E] transition-colors"
              >
                {sec.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              type="button"
              {...calButtonAttributes}
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleCalFallback(e);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 min-h-[44px] bg-[#00A8CC] hover:bg-[#008cae] text-white font-semibold text-xs rounded-xl shadow-xs cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Consulta Online</span>
            </button>
            <a
              href={CAL_PUBLIC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-xs text-[#00A8CC] hover:underline font-medium py-1"
            >
              Abrir link direto no Cal.com ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
