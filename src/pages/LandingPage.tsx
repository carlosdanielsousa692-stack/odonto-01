import React, { useState } from 'react';
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
  HeartPulse,
  HeartHandshake,
  Award,
  ChevronDown,
  ChevronUp,
  MapPin,
  Mail,
  HelpCircle,
  AlertCircle,
} from 'lucide-react';
import {
  CLINIC_INFO,
  CLINIC_SERVICES,
  CLINIC_DOCTORS,
  TESTIMONIALS,
  FAQS,
} from '../data/dentalData';
import { CostCalculator } from '../components/CostCalculator';
import { SmileComparison } from '../components/SmileComparison';
import { calButtonAttributes, handleCalFallback, CAL_PUBLIC_URL } from '../utils/cal';

interface LandingPageProps {
  onOpenBooking: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onOpenBooking }) => {
  // FAQ accordion state
  const [openFaqIds, setOpenFaqIds] = useState<string[]>(['faq-1', 'faq-3']);
  const toggleFaq = (id: string) => {
    setOpenFaqIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Dúvida Geral / Agendamento',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [generatedMailto, setGeneratedMailto] = useState('');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      const subject = `[Caredent Agendamento] ${formData.subject} - ${formData.name}`;
      const body = `Nome: ${formData.name}\nE-mail: ${formData.email}\nTelefone: ${formData.phone || 'Não informado'}\nAssunto: ${formData.subject}\n\nMensagem:\n${formData.message}`;
      const mailtoUrl = `mailto:${CLINIC_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      setGeneratedMailto(mailtoUrl);
      setFormSubmitted(true);
      window.location.href = mailtoUrl;
    }
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-16 overflow-hidden">
      {/* =========================================================================
          1. APRESENTAÇÃO PRINCIPAL (HERO DE ALTO IMPACTO)
         ========================================================================= */}
      <section id="inicio" className="relative pt-6 sm:pt-10 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Copy & CTA */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#00A8CC] tracking-wider uppercase bg-cyan-50/80 px-3.5 py-1.5 rounded-full border border-cyan-100">
                <Sparkles className="w-3.5 h-3.5 text-[#00A8CC]" />
                <span>Odontologia Moderna & Agendamento Digital</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#004F6E] tracking-tight leading-[1.1] text-balance">
                O cuidado e a precisão que o seu sorriso merece.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Consultas humanizadas com tecnologia 3D de ponta, anestesia computadorizada sem dor e agendamento online direto no horário de sua preferência.
              </p>

              {/* Booking CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  {...calButtonAttributes}
                  onClick={handleCalFallback}
                  className="px-7 py-4 min-h-[48px] bg-[#00A8CC] hover:bg-[#008cae] text-white font-semibold rounded-xl text-base shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 group text-center"
                >
                  <Calendar className="w-5 h-5 transition-transform group-hover:scale-110" />
                  <span>Agendar Consulta Agora</span>
                </button>

                <a
                  href="#servicos"
                  className="px-6 py-4 min-h-[48px] bg-slate-100 hover:bg-slate-200 text-[#004F6E] font-medium rounded-xl text-sm transition-colors flex items-center justify-center text-center"
                >
                  Ver Tratamentos
                </a>
              </div>

              {/* Direct Cal link & trust markers */}
              <div className="pt-1 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <span>Dúvidas no agendamento?</span>
                <a
                  href={CAL_PUBLIC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00A8CC] hover:text-[#004F6E] font-medium underline inline-flex items-center gap-1"
                >
                  <span>Abrir diretamente no Cal.com</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>

              {/* Key Trust Highlights */}
              <div className="pt-4 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="block font-bold text-[#004F6E] text-sm">Sem Espera</span>
                  <span className="text-slate-500">Horários pontuais</span>
                </div>
                <div>
                  <span className="block font-bold text-[#004F6E] text-sm">Escaneamento 3D</span>
                  <span className="text-slate-500">Sem moldes de gesso</span>
                </div>
                <div>
                  <span className="block font-bold text-[#004F6E] text-sm">Plantão 24/7</span>
                  <span className="text-slate-500">Triagem de urgência</span>
                </div>
              </div>
            </div>

            {/* Visual Side */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl h-full min-h-[380px] lg:min-h-[480px] relative border border-slate-100 group">
                <img
                  src="/images/hero_dentist_consultation_1792366051819.webp"
                  alt="Consulta odontológica humanizada e moderna na Caredent"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  fetchPriority="high"
                  decoding="async"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#004F6E]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/40 shadow-xl flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-[#00A8CC] uppercase">Ambiente Digital & Acolhedor</p>
                    <p className="text-base font-bold text-[#004F6E]">Diagnóstico Digital com Escaneamento 3D</p>
                    <p className="text-xs text-slate-500 mt-0.5">Atendimento personalizado com plano de tratamento claro</p>
                  </div>
                  <button
                    type="button"
                    {...calButtonAttributes}
                    onClick={handleCalFallback}
                    className="px-4 py-2.5 bg-[#004F6E] hover:bg-[#003c54] text-white text-xs font-semibold rounded-lg shrink-0 transition-colors cursor-pointer"
                  >
                    Agendar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Strip */}
        <div className="mt-14 bg-slate-50 border-y border-slate-200/80 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
              {CLINIC_INFO.stats.map((stat) => (
                <div key={stat.label}>
                  <span className="block text-3xl sm:text-4xl font-extrabold text-[#004F6E] font-mono tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-500 mt-1 block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-400 text-center mt-3">
              * Métricas demonstrativas estruturadas para layout institucional.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. SERVIÇOS ODONTOLÓGICOS (TRATAMENTOS COMPLETOS)
         ========================================================================= */}
      <section id="servicos" className="max-w-7xl mx-auto px-4 sm:px-8 scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-semibold text-[#00A8CC] uppercase tracking-wider block">
              Tratamentos & Procedimentos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#004F6E] tracking-tight mt-1 text-balance">
              Cuidado Completo para Sua Saúde e Estética Bucal
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-2xl leading-relaxed">
              Tratamentos executados com protocolos biológicos seguros, anestesia computadorizada e materiais de padrão internacional.
            </p>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              {...calButtonAttributes}
              onClick={handleCalFallback}
              className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] bg-[#00A8CC] hover:bg-[#008cae] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Consulta Geral</span>
            </button>
          </div>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLINIC_SERVICES.slice(0, 6).map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-50 text-[#00A8CC] flex items-center justify-center mb-4 group-hover:bg-[#00A8CC] group-hover:text-white transition-colors">
                  {service.category === 'Cosmetic' && <Smile className="w-6 h-6" />}
                  {service.category === 'Restorative' && <ShieldCheck className="w-6 h-6" />}
                  {service.category === 'Orthodontics' && <Activity className="w-6 h-6" />}
                  {service.category === 'Pediatric' && <HeartPulse className="w-6 h-6" />}
                  {service.category === 'Emergency' && <AlertCircle className="w-6 h-6" />}
                  {service.category === 'General' && <Sparkles className="w-6 h-6" />}
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="font-medium text-[#00A8CC]">{service.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{service.duration}</span>
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
                  <span className="text-slate-400 block text-[11px]">Valor Estimado:</span>
                  <span className="font-semibold text-slate-800">{service.priceEstimate}</span>
                </div>
                <button
                  type="button"
                  {...calButtonAttributes}
                  onClick={handleCalFallback}
                  className="px-3.5 py-2 min-h-[38px] bg-cyan-50 hover:bg-[#00A8CC] text-[#004F6E] hover:text-white font-medium rounded-xl transition-colors cursor-pointer flex items-center justify-center text-xs"
                >
                  Agendar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Integrated Cost Calculator */}
        <div className="mt-12">
          <CostCalculator onOpenBooking={onOpenBooking} />
        </div>
      </section>

      {/* =========================================================================
          3. DIFERENCIAIS DA CLÍNICA (TECNOLOGIA, CONFORTO & SEGURANÇA)
         ========================================================================= */}
      <section id="diferenciais" className="bg-[#004F6E] text-white py-16 sm:py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-semibold text-[#FDD835] uppercase tracking-wider block">
                O Padrão Caredent
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
                Por Que Pacientes Confiam em Nosso Atendimento
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Desenvolvemos um modelo de atendimento acolhedor onde o paciente é ouvido com calma e cada procedimento conta com o que há de mais moderno na odontologia digital.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#00A8CC]/20 border border-[#00A8CC]/40 flex items-center justify-center text-[#00A8CC] shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">Anestesia Computadorizada Sem Dor</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Controle digital milimétrico do fluxo anestésico sem a sensação desagradável da picada tradicional.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#00A8CC]/20 border border-[#00A8CC]/40 flex items-center justify-center text-[#00A8CC] shrink-0 mt-0.5">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">Escaneamento Intraoral 3D</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Substituímos as massas de moldagem convencionais por câmeras ópticas que criam seu modelo digital em minutos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#00A8CC]/20 border border-[#00A8CC]/40 flex items-center justify-center text-[#00A8CC] shrink-0 mt-0.5">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">Pausa Imediata se Sentir Desconforto</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Você está no controle o tempo todo: basta levantar a mão e o dentista interrompe o procedimento instantaneamente.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  {...calButtonAttributes}
                  onClick={handleCalFallback}
                  className="px-6 py-3.5 min-h-[44px] bg-[#00A8CC] hover:bg-[#008cae] text-white font-semibold rounded-xl text-sm transition-colors cursor-pointer inline-flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agendar Minha Consulta</span>
                </button>
              </div>
            </div>

            {/* Clinic Architecture & Sterility Showcase */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                <img
                  src="/images/dental_clinic_interior_1792366051724.webp"
                  alt="Instalações clínicas esterilizadas e modernas da Caredent"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={720}
                  height={480}
                />
              </div>
            </div>
          </div>

          {/* Interactive Smile Makeover Component */}
          <div>
            <SmileComparison onOpenBooking={onOpenBooking} />
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. APRESENTAÇÃO DA CLÍNICA & CORPO CLÍNICO
         ========================================================================= */}
      <section id="clinica" className="max-w-7xl mx-auto px-4 sm:px-8 scroll-mt-24 space-y-16">
        {/* Intro to Clinic */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold text-[#00A8CC] uppercase tracking-wider block">
            Infraestrutura & Equipe Médica
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#004F6E] tracking-tight text-balance">
            Conheça Nossa Estrutura e Nossos Especialistas
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Ambientes com biossegurança hospitalar, tomografia computadorizada cone-beam de baixa radiação e consultórios privativos projetados para o seu conforto.
          </p>
        </div>

        {/* 4 Pillars of Excellence Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 text-[#00A8CC] flex items-center justify-center mb-4">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#004F6E] mb-2">Cuidado Gentil</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Atendimento tranquilo e respeitoso, sem pressa, especialmente preparado para pacientes com receio de dentista.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 text-[#00A8CC] flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#004F6E] mb-2">Fluxo 100% Digital</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Do escaneamento óptico ao planejamento de implantes guiados por computador para máxima previsibilidade clínica.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 text-[#00A8CC] flex items-center justify-center mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#004F6E] mb-2">Clareza no Tratamento</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Explicação detalhada de cada etapa com imagens de sua própria boca antes de qualquer procedimento começar.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 text-[#00A8CC] flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#004F6E] mb-2">Biossegurança Rígida</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Autoclaves rastreadas, desinfecção de alto nível e protocolos rigorosos de esterilização para sua tranquilidade.
            </p>
          </div>
        </div>

        {/* Doctor Profiles */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold text-[#00A8CC] uppercase tracking-wider block">
              Corpo Clínico · Perfis Demonstrativos
            </span>
            <h3 className="text-2xl font-bold text-[#004F6E] mt-1">
              Profissionais Dedicados à Sua Saúde
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Perfis ilustrativos para estruturação do corpo clínico. Configure os cirurgiões-dentistas reais e registros no conselho (CRO) antes da publicação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CLINIC_DOCTORS.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-64 overflow-hidden bg-slate-100 relative">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      width={400}
                      height={300}
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[11px] font-semibold text-[#004F6E] px-2.5 py-1 rounded-md shadow-xs">
                      {doc.experience}
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-lg font-bold text-[#004F6E]">{doc.name}</h4>
                    <p className="text-xs font-semibold text-[#00A8CC] mb-2">{doc.title}</p>
                    <p className="text-xs text-slate-500 mb-3">{doc.education}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">{doc.bio}</p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    Dias: <strong className="text-slate-700">{doc.daysAvailable.join(', ')}</strong>
                  </span>
                  <button
                    type="button"
                    {...calButtonAttributes}
                    onClick={handleCalFallback}
                    className="px-3.5 py-2 min-h-[38px] bg-[#00A8CC] hover:bg-[#008cae] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center justify-center"
                  >
                    Agendar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. DEPOIMENTOS DE PACIENTES
         ========================================================================= */}
      <section id="depoimentos" className="bg-slate-50 py-16 sm:py-20 border-y border-slate-200/80 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold text-[#00A8CC] uppercase tracking-wider block">
              Avaliações & Experiências · Modelo Demonstrativo
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#004F6E] tracking-tight mt-1 text-balance">
              Histórias de Quem Já Transformou o Sorriso
            </h2>
            <p className="text-slate-600 text-sm mt-2 leading-relaxed">
              Exemplos ilustrativos de avaliações para estruturação da página. Antes do lançamento, inclua relatos reais e autorizados dos seus pacientes.
            </p>

            {/* Aggregated Rating */}
            <div className="mt-4 inline-flex items-center gap-2.5 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-xs">
              <div className="flex text-[#FDD835]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-bold text-slate-800">4.9 / 5.0</span>
              <span className="text-xs text-slate-400">·</span>
              <span className="text-xs text-slate-500 font-medium">Média ilustrativa de satisfação</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between"
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
                  <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
                    Ilustrativo
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Cal.com CTA under testimonials */}
          <div className="text-center pt-4">
            <button
              type="button"
              {...calButtonAttributes}
              onClick={handleCalFallback}
              className="px-6 py-3.5 min-h-[44px] bg-[#00A8CC] hover:bg-[#008cae] text-white font-semibold rounded-xl text-sm transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Minha Consulta pelo Cal.com</span>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. PERGUNTAS FREQUENTES (FAQ)
         ========================================================================= */}
      <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-8 scroll-mt-24 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold text-[#00A8CC] uppercase tracking-wider block">
            Dúvidas Comuns
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#004F6E] tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Respostas diretas sobre agendamento, procedimentos, convênios e atendimento de urgência.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq) => {
            const isOpen = openFaqIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/60 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-[#004F6E]">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-cyan-50 text-[#00A8CC] flex items-center justify-center shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="p-5 bg-cyan-50/60 rounded-2xl border border-cyan-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-sm font-bold text-[#004F6E]">Ainda tem alguma pergunta específica?</p>
            <p className="text-xs text-slate-600">Nossa recepção responde prontamente via telefone ou mensagem direta.</p>
          </div>
          <a
            href="#contato"
            className="px-4 py-2.5 bg-[#004F6E] hover:bg-[#003c54] text-white text-xs font-semibold rounded-lg shrink-0 transition-colors"
          >
            Falar com a Clínica
          </a>
        </div>
      </section>

      {/* =========================================================================
          7. CONTATO, LOCALIZAÇÃO & HORÁRIOS
         ========================================================================= */}
      <section id="contato" className="max-w-7xl mx-auto px-4 sm:px-8 scroll-mt-24 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold text-[#00A8CC] uppercase tracking-wider block">
            Fale Conosco
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#004F6E] tracking-tight">
            Contato e Localização
          </h2>
          <p className="text-slate-600 text-sm">
            Tire dúvidas sobre convênios, localização ou envie uma mensagem direta para a nossa recepção.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Urgent Care Card */}
            <div className="bg-[#004F6E] text-white p-6 rounded-2xl shadow-md border border-[#006085]">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FDD835]" />
                <span className="text-xs font-semibold text-[#FDD835] uppercase tracking-wider">
                  Plantão de Urgência
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Dor Aguda ou Trauma Dentário?</h3>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Em caso de dor intensa, fratura ou sangramento bucal, faça contato telefônico imediatamente.
              </p>
              <a
                href={`tel:${CLINIC_INFO.emergencyPhone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00A8CC] hover:bg-[#008cae] text-white font-semibold text-xs rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Ligar: {CLINIC_INFO.emergencyPhone}</span>
              </a>
            </div>

            {/* Clinic Info Cards */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-5 shadow-xs">
              <h3 className="text-base font-bold text-[#004F6E]">Informações da Unidade</h3>

              <div className="flex items-start gap-3.5 text-xs text-slate-600">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 text-[#00A8CC] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-slate-900 block text-sm">Endereço</span>
                  <p className="mt-0.5">{CLINIC_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs text-slate-600">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 text-[#00A8CC] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-slate-900 block text-sm">Recepção</span>
                  <p className="mt-0.5">{CLINIC_INFO.receptionPhone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs text-slate-600">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 text-[#00A8CC] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-slate-900 block text-sm">Horários</span>
                  <p className="mt-0.5">{CLINIC_INFO.hours.weekdays}</p>
                  <p>{CLINIC_INFO.hours.saturday}</p>
                  <p className="text-slate-400">{CLINIC_INFO.hours.sunday}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <h3 className="text-xl font-bold text-[#004F6E] mb-1">Envie uma Mensagem</h3>
              <p className="text-xs text-slate-500 mb-6">
                Nossa equipe responde em até 2 horas úteis.
              </p>

              {formSubmitted ? (
                <div className="p-8 text-center space-y-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="w-12 h-12 bg-cyan-100 text-[#004F6E] rounded-full flex items-center justify-center mx-auto">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Mensagem Preparada no Cliente de E-mail</h4>
                    <p className="text-xs text-slate-600 max-w-md mx-auto mt-1 leading-relaxed">
                      Geramos o rascunho com seus dados para envio direto ao e-mail da clínica (<strong className="text-slate-800">{CLINIC_INFO.email}</strong>).
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={generatedMailto}
                      className="px-5 py-2.5 min-h-[44px] bg-[#004F6E] hover:bg-[#003c54] text-white text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Abrir no seu E-mail</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="px-4 py-2.5 min-h-[44px] bg-white border border-slate-200 text-slate-600 hover:text-slate-900 text-xs font-medium rounded-xl transition-colors cursor-pointer flex items-center justify-center"
                    >
                      Voltar ao Formulário
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Maria da Silva"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-hidden focus:border-[#00A8CC]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Telefone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="(00) 00000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-hidden focus:border-[#00A8CC]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-hidden focus:border-[#00A8CC]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Assunto
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-hidden focus:border-[#00A8CC]"
                      >
                        <option value="Dúvida Geral">Dúvida Geral</option>
                        <option value="Agendamento de Consulta">Agendamento de Consulta</option>
                        <option value="Clareamento Dental">Clareamento Dental</option>
                        <option value="Implantes e Prótese">Implantes e Prótese</option>
                        <option value="Alinhadores Invisíveis">Alinhadores Invisíveis</option>
                        <option value="Convênios e Pagamento">Convênios e Pagamento</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Como podemos ajudar? *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Descreva brevemente o que você procura ou sua dúvida..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl p-3.5 text-sm text-slate-800 focus:outline-hidden focus:border-[#00A8CC] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 min-h-[44px] bg-[#004F6E] hover:bg-[#003c54] text-white font-semibold rounded-xl text-sm transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Preparar Mensagem de E-mail</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. CHAMADA FINAL PARA AGENDAMENTO (HIGH-CONVERSION CTA)
         ========================================================================= */}
      <section id="agendar" className="max-w-7xl mx-auto px-4 sm:px-8 scroll-mt-24">
        <div className="bg-gradient-to-br from-[#004F6E] via-[#003c54] to-[#002838] text-white rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl border border-[#006085]">
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#FDD835] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Agendamento Imediato em Poucos Cliques</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white text-balance leading-tight">
              Pronto para cuidar do seu sorriso com excelência?
            </h2>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl mx-auto">
              Escolha o melhor dia e horário diretamente em nossa agenda online com confirmação imediata pelo Cal.com.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                {...calButtonAttributes}
                onClick={handleCalFallback}
                className="w-full sm:w-auto px-8 py-4 min-h-[48px] bg-[#00A8CC] hover:bg-[#008cae] text-white font-bold rounded-xl text-base shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Agendar Minha Consulta Agora</span>
              </button>

              <a
                href={CAL_PUBLIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 min-h-[48px] bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl text-sm transition-colors flex items-center justify-center"
              >
                Abrir Link no Cal.com ↗
              </a>
            </div>

            <p className="text-xs text-slate-300 pt-2">
              Atendimento de Segunda a Sábado · Cancelamento ou remarcação facilitada · Protocolo sem dor
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
