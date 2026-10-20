import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck, Calendar, Shield } from 'lucide-react';
import { CLINIC_INFO, CLINIC_SERVICES } from '../data/dentalData';
import { calButtonAttributes, handleCalFallback, CAL_PUBLIC_URL } from '../utils/cal';

interface FooterProps {
  onOpenBooking?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const [activeLegalModal, setActiveLegalModal] = useState<'privacidade' | 'termos' | null>(null);

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#002838] text-white pt-16 pb-12 border-t border-[#003c54]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Emergency Call-out Strip */}
        <div className="bg-gradient-to-r from-[#004F6E] to-[#006085] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#00749e] shadow-lg">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FDD835] uppercase tracking-wider mb-1">
              <span className="w-2 h-2 rounded-full bg-[#FDD835]" />
              <span>Pronto-Atendimento Odontológico</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Precisa de Atendimento com Prioridade?
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 max-w-xl">
              Casos de dor aguda, fraturas ou traumas dentários recebem atenção prioritária em nossa clínica.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={`tel:${CLINIC_INFO.emergencyPhone.replace(/[^0-9+]/g, '')}`}
              className="px-4 py-3 min-h-[44px] bg-white/10 hover:bg-white/20 text-cyan-100 text-xs font-medium rounded-xl border border-white/20 flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#FDD835]" />
              <span>Plantão: {CLINIC_INFO.emergencyPhone}</span>
            </a>

            <button
              type="button"
              {...calButtonAttributes}
              onClick={handleCalFallback}
              className="px-5 py-3 min-h-[44px] bg-[#00A8CC] hover:bg-[#008cae] text-white font-semibold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar no Cal.com</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4-Column Navigation & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#00A8CC] text-white flex items-center justify-center font-bold text-lg">
                C
              </div>
              <div>
                <span className="text-2xl font-bold text-white tracking-tight block leading-none">Caredent</span>
                <span className="text-[10px] text-cyan-300 font-semibold uppercase tracking-wider block mt-0.5">
                  Odontologia Especializada
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Clínica odontológica de alta tecnologia e cuidado humanizado, com agendamento online integrado via Cal.com em tempo real.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-cyan-200">
              <ShieldCheck className="w-4 h-4 text-[#00A8CC]" />
              <span>Agendamento oficial sincronizado com Cal.com</span>
            </div>
          </div>

          {/* Col 2: In-Page Navigation Links */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4 border-b border-[#006085] pb-2 inline-block">
              Navegação Rápida
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a
                  href="#inicio"
                  onClick={(e) => scrollToSection('inicio', e)}
                  className="hover:text-[#00A8CC] transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  onClick={(e) => scrollToSection('servicos', e)}
                  className="hover:text-[#00A8CC] transition-colors"
                >
                  Tratamentos & Procedimentos
                </a>
              </li>
              <li>
                <a
                  href="#diferenciais"
                  onClick={(e) => scrollToSection('diferenciais', e)}
                  className="hover:text-[#00A8CC] transition-colors"
                >
                  Diferenciais Clínicos
                </a>
              </li>
              <li>
                <a
                  href="#clinica"
                  onClick={(e) => scrollToSection('clinica', e)}
                  className="hover:text-[#00A8CC] transition-colors"
                >
                  A Clínica & Especialistas
                </a>
              </li>
              <li>
                <a
                  href="#experiencia"
                  onClick={(e) => scrollToSection('experiencia', e)}
                  className="hover:text-[#00A8CC] transition-colors"
                >
                  Experiência do Paciente
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => scrollToSection('faq', e)}
                  className="hover:text-[#00A8CC] transition-colors"
                >
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  onClick={(e) => scrollToSection('contato', e)}
                  className="hover:text-[#00A8CC] transition-colors"
                >
                  Contato & Localização
                </a>
              </li>
              <li>
                <a
                  href="#agendar"
                  onClick={(e) => scrollToSection('agendar', e)}
                  className="hover:text-[#00A8CC] transition-colors font-medium text-cyan-200"
                >
                  Agendar Consulta Online
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4 border-b border-[#006085] pb-2 inline-block">
              Procedimentos
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {CLINIC_SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a
                    href="#servicos"
                    onClick={(e) => scrollToSection('servicos', e)}
                    className="hover:text-[#00A8CC] transition-colors block text-left"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Working Hours & Location */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4 border-b border-[#006085] pb-2 inline-block">
              Horários & Localização
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300 mb-6">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#00A8CC] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">{CLINIC_INFO.hours.weekdays}</p>
                  <p>{CLINIC_INFO.hours.saturday}</p>
                  <p className="text-slate-400">{CLINIC_INFO.hours.sunday}</p>
                </div>
              </div>
              <div className="flex items-start gap-2 pt-2">
                <MapPin className="w-4 h-4 text-[#00A8CC] shrink-0 mt-0.5" />
                <p>{CLINIC_INFO.address}</p>
              </div>
              <div className="flex items-start gap-2 pt-2">
                <Mail className="w-4 h-4 text-[#00A8CC] shrink-0 mt-0.5" />
                <p>{CLINIC_INFO.email}</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                {...calButtonAttributes}
                onClick={handleCalFallback}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 min-h-[44px] bg-[#00A8CC] hover:bg-[#008cae] text-white font-semibold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Agendar no Cal.com</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#003c54] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <p>© 2026 Caredent Odontologia Especializada. Todos os direitos reservados.</p>
            <p className="text-[11px] text-slate-500">
              Odontologia moderna com agendamento online integrado via Cal.com e atendimento humanizado.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href={CAL_PUBLIC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00A8CC] hover:text-cyan-200 transition-colors font-medium inline-flex items-center gap-1"
            >
              <span>Link do Cal.com</span>
              <span aria-hidden="true">↗</span>
            </a>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => setActiveLegalModal('privacidade')}
              className="hover:text-slate-200 cursor-pointer underline-offset-2 hover:underline"
            >
              Política de Privacidade
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => setActiveLegalModal('termos')}
              className="hover:text-slate-200 cursor-pointer underline-offset-2 hover:underline"
            >
              Termos de Atendimento
            </button>
          </div>
        </div>
      </div>

      {/* Legal Modal */}
      {activeLegalModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveLegalModal(null)}
        >
          <div
            className="bg-white text-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 mb-3 text-[#004F6E]">
              <Shield className="w-5 h-5 text-[#00A8CC]" />
              <h4 className="text-lg font-bold">
                {activeLegalModal === 'privacidade' ? 'Política de Privacidade' : 'Termos de Atendimento'}
              </h4>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              {activeLegalModal === 'privacidade'
                ? 'Em nossa clínica, a privacidade e a segurança dos dados dos pacientes são prioridades absolutas. As informações fornecidas durante o agendamento online via Cal.com são utilizadas exclusivamente para confirmação de consultas, lembretes de horários e contato direto com a nossa equipe de atendimento.'
                : 'Os agendamentos realizados pela plataforma online são confirmados em tempo real. Solicitamos a gentileza de comunicar eventuais necessidades de cancelamento ou reagendamento com antecedência mínima de 24 horas para que o horário possa ser disponibilizado a outro paciente.'}
            </p>

            <button
              type="button"
              onClick={() => setActiveLegalModal(null)}
              className="w-full py-2.5 bg-[#004F6E] hover:bg-[#003c54] text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
