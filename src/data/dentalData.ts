import { ServiceItem, Doctor, Testimonial, BlogPost, FAQItem } from '../types';

/**
 * ============================================================================
 * CONFIGURAÇÃO COMERCIAL E DE PUBLICAÇÃO DA CLÍNICA (MODELO DEMONSTRATIVO)
 * ============================================================================
 * Centraliza todas as informações da clínica exibidas no site.
 * 
 * ATENÇÃO:
 * Este site é um modelo demonstrativo de alta conversão para clínicas odontológicas.
 * Todos os dados de contato, médicos, avaliações, valores e estatísticas são
 * ilustrativos e foram adaptados para o contexto brasileiro.
 */

export const CLINIC_CONFIG = {
  publicationStatus: {
    isProductionReady: false,
    isDemoData: true,
    demoNotice:
      'Ambiente Demonstrativo: Site modelo para apresentação comercial com agendamento online ativo via Cal.com. Dados cadastrais, fotos e valores são ilustrativos.',
  },

  // Informações Institucionais e Legais (Demonstrativo Brasileiro)
  branding: {
    name: 'Caredent',
    fullName: 'Caredent Clínica Odontológica',
    tagline: 'Odontologia Moderna, Cuidado Humanizado e Tecnologia Digital',
    legalEntityName: 'Caredent Odontologia Especializada Ltda. (Demonstrativo)',
    taxId: '00.000.000/0001-00 (Demonstrativo)',
    technicalDirector: {
      name: 'Dr. Arthur Silveira',
      registry: 'CRO-SP 123.456 (Demonstrativo)',
    },
  },

  // Meios de Contato (Exemplos Ilustrativos com DDD 11)
  contact: {
    receptionPhone: '(11) 3254-8900 (Demonstrativo)',
    emergencyPhone: '(11) 99876-5432 (Demonstrativo)',
    email: 'contato@caredent-demonstracao.com.br',
    address: {
      street: 'Av. Paulista, 1000 - 12º andar',
      city: 'São Paulo',
      state: 'SP',
      postalCode: '01310-100',
      country: 'Brasil',
      fullFormatted: 'Av. Paulista, 1000 - 12º andar, Bela Vista, São Paulo - SP (Demonstrativo)',
    },
    hours: {
      weekdays: 'Segunda a Sexta: 08:00 às 20:00',
      saturday: 'Sábado: 08:00 às 14:00',
      sunday: 'Domingo: Plantão sob agendamento prévio',
    },
  },

  // Integração com Agendamento Cal.com
  booking: {
    eventSlug: 'carlos-uehebs-cauefz/doutor',
    publicUrl: 'https://cal.com/carlos-uehebs-cauefz/doutor',
  },

  // Estatísticas Demonstrativas da Clínica
  stats: [
    { label: 'Atendimentos Realizados', value: '18.500+' },
    { label: 'Anos de Experiência', value: '16+' },
    { label: 'Especialistas Integrados', value: '12' },
    { label: 'Satisfação Demonstrativa', value: '99%' },
  ],
};

export const CLINIC_INFO = {
  name: CLINIC_CONFIG.branding.name,
  fullName: CLINIC_CONFIG.branding.fullName,
  tagline: CLINIC_CONFIG.branding.tagline,
  emergencyPhone: CLINIC_CONFIG.contact.emergencyPhone,
  receptionPhone: CLINIC_CONFIG.contact.receptionPhone,
  email: CLINIC_CONFIG.contact.email,
  address: CLINIC_CONFIG.contact.address.fullFormatted,
  hours: CLINIC_CONFIG.contact.hours,
  stats: CLINIC_CONFIG.stats,
  isDemo: CLINIC_CONFIG.publicationStatus.isDemoData,
  demoNotice: CLINIC_CONFIG.publicationStatus.demoNotice,
};

/**
 * Catálogo de Procedimentos e Serviços Odontológicos em Português (pt-BR)
 * Valores demonstrativos em Reais (R$)
 */
export const CLINIC_SERVICES: ServiceItem[] = [
  {
    id: 'general-checkup',
    title: 'Avaliação Clínica & Profilaxia Digital',
    shortDesc: 'Exame bucal minucioso, radiografias digitais de baixa radiação, remoção de tártaro por ultrassom e polimento do esmalte.',
    category: 'Clínica Geral',
    icon: 'Sparkles',
    priceEstimate: 'R$ 220 - R$ 380 (estimativa)',
    duration: '45 - 60 min',
    features: [
      'Raspagem ultrassônica suave e precisa',
      'Escaneamento intraoral de alta definição',
      'Avaliação completa da gengiva e do esmalte',
      'Aplicação tópica preventiva de flúor'
    ],
    description: 'Nossa consulta periódica preventiva identifica possíveis alterações antes que se tornem desconfortáveis ou complexas, mantendo sua saúde bucal sempre em dia.'
  },
  {
    id: 'teeth-whitening',
    title: 'Clareamento Dental Personalizado',
    shortDesc: 'Protocolos em consultório com tecnologia de luz LED/Laser e moldeiras personalizadas para manutenção domiciliar.',
    category: 'Estética',
    icon: 'Smile',
    priceEstimate: 'R$ 750 - R$ 1.500 (estimativa)',
    duration: '60 min',
    features: [
      'Sessões supervisionadas por cirurgião-dentista',
      'Gel com barreira dessensibilizante integrada',
      'Kit personalizado de manutenção em casa',
      'Preservação e respeito à integridade do esmalte'
    ],
    description: 'Clareamento seguro e monitorado para clarear os dentes de forma homogênea, reduzindo manchas de café, chá e pigmentações naturais.'
  },
  {
    id: 'dental-implants',
    title: 'Implantes Dentários & Reabilitação',
    shortDesc: 'Reabilitação com implantes em titânio e cerâmica biocompatíveis, restaurando mastigação e harmonia estética.',
    category: 'Reabilitação Oral',
    icon: 'ShieldCheck',
    priceEstimate: 'R$ 2.500 - R$ 4.800 (estimativa)',
    duration: 'Conforme planejamento individual',
    features: [
      'Planejamento guiado por tomografia computadorizada 3D',
      'Implantes de titânio de grau cirúrgico certificado',
      'Coroas em porcelana de alta fidelidade visual',
      'Protocolos pós-operatórios com acompanhamento próximo'
    ],
    description: 'Substitua dentes perdidos com estabilidade duradoura. Os implantes devolvem a segurança mastigatória e o formato natural do sorriso.'
  },
  {
    id: 'invisalign-ortho',
    title: 'Alinhadores Invisíveis & Ortodontia',
    shortDesc: 'Alinhamento dental com placas transparentes e confortáveis, dispensando o uso de bráquetes metálicos tradicionais.',
    category: 'Ortodontia',
    icon: 'Activity',
    priceEstimate: 'R$ 5.500 - R$ 11.500 (estimativa)',
    duration: '6 a 18 meses (estimativa)',
    features: [
      'Placas transparentes praticamente imperceptíveis',
      'Simulação tridimensional do movimento dentário',
      'Removíveis para alimentação e higienização',
      'Consultas periódicas de troca e acompanhamento'
    ],
    description: 'Alinhe seus dentes de maneira discreta e confortável. Ideal para adultos e jovens que buscam praticidade na rotina diária.'
  },
  {
    id: 'pediatric-dentistry',
    title: 'Odontopediatria Acolhedora',
    shortDesc: 'Consultas lúdicas, pacientes e tranquilas, pensadas especialmente para bebês, crianças e adolescentes.',
    category: 'Odontopediatria',
    icon: 'HeartPulse',
    priceEstimate: 'R$ 180 - R$ 320 (estimativa)',
    duration: '30 - 45 min',
    features: [
      'Abordagem comportamental positiva e lúdica',
      'Aplicação de selantes preventivos para fossas e fissuras',
      'Orientação preventiva sobre escovação e dieta',
      'Técnicas de manejo para controle da ansiedade infantil'
    ],
    description: 'Acreditamos que uma experiência agradável na infância constrói hábitos saudáveis para toda a vida. Criamos um momento seguro e sem traumas.'
  },
  {
    id: 'emergency-dentistry',
    title: 'Pronto-Atendimento Odontológico',
    shortDesc: 'Atendimento com horário prioritário para alívio de dor de dente aguda, fraturas, restaurações soltas ou traumas.',
    category: 'Urgência',
    icon: 'AlertCircle',
    priceEstimate: 'R$ 250 - R$ 520 (estimativa)',
    duration: 'Atendimento prioritário no mesmo dia',
    features: [
      'Encaixes reservados diariamente para urgências',
      'Manejo farmacológico e clínico do desconforto',
      'Reparo emergencial de restaurações e coroas',
      'Canal de contato direto para triagem rápida'
    ],
    description: 'O desconforto dentário repentino precisa de atenção imediata. Nossa equipe atua rapidamente para aliviar a queixa e preservar a integridade do dente.'
  },
  {
    id: 'porcelain-veneers',
    title: 'Lentes de Contato & Facetas em Cerâmica',
    shortDesc: 'Lâminas cerâmicas ultrafinas confeccionadas sob medida para harmonizar cor, formato, proporção e fechamento de espaços.',
    category: 'Estética',
    icon: 'Award',
    priceEstimate: 'R$ 1.800 - R$ 3.200 por elemento (estimativa)',
    duration: '2 a 3 consultas',
    features: [
      'Cerâmica vítrea de alta resistência e brilho natural',
      'Planejamento digital com teste estético prévio (mockup)',
      'Preparo dental conservador e minimamente invasivo',
      'Excelente estabilidade de cor ao longo dos anos'
    ],
    description: 'Ideal para corrigir pequenas imperfeições, desgastes ou manchas severas, proporcionando um sorriso simétrico e harmonioso com seu rosto.'
  },
  {
    id: 'root-canal-therapy',
    title: 'Endodontia Microscópica (Tratamento de Canal)',
    shortDesc: 'Procedimento especializado com magnificação visual para eliminar infecções internas e salvar a estrutura dental.',
    category: 'Endodontia',
    icon: 'ShieldCheck',
    priceEstimate: 'R$ 850 - R$ 1.600 (estimativa)',
    duration: '60 - 90 min',
    features: [
      'Localização precisa de canais com magnificação óptica',
      'Anestesia local computadorizada para maior conforto',
      'Desinfecção profunda com instrumentação rotatória',
      'Vedação hermética com materiais biocompatíveis'
    ],
    description: 'O tratamento de canal moderno é focado no conforto do paciente e na conservação do dente natural, evitando a necessidade de extração.'
  }
];

/**
 * Corpo Clínico (Perfis ilustrativos adaptados ao Brasil)
 */
export const CLINIC_DOCTORS: Doctor[] = [
  {
    id: 'dr-arthur-silveira',
    name: 'Dr. Arthur Silveira',
    title: 'Cirurgião-Dentista · Responsável Técnico',
    specialty: 'Implantodontia e Reabilitação Oral',
    experience: '16 Anos de Atuação',
    education: 'Graduado e Especialista pela Universidade de São Paulo (USP) · CRO-SP 123.456 (Demonstrativo)',
    bio: 'Especialista em cirurgia guiada por computador e implantes odontológicos. Foco em reabilitações orais planejadas digitalmente com precisão milimétrica e conforto.',
    image: '/images/dentist_doctor_portrait_1792366053271.webp',
    daysAvailable: ['Seg', 'Ter', 'Qui', 'Sex']
  },
  {
    id: 'dra-sarah-mendes',
    name: 'Dra. Sarah Mendes',
    title: 'Cirurgiã-Dentista · Estética e Ortodontia',
    specialty: 'Dentística Restauradora e Alinhadores Transparentes',
    experience: '12 Anos de Atuação',
    education: 'Especialista pela Unicamp · Membro da Sociedade Brasileira de Odontologia Estética · CRO-SP 134.567 (Demonstrativo)',
    bio: 'Dedicada ao planejamento estético do sorriso, clareamento supervisionado e ortodontia digital invisível. Apaixonada por resultados naturais e preservação dental.',
    image: '/images/hero_dentist_consultation_1792366051819.webp',
    daysAvailable: ['Seg', 'Qua', 'Qui', 'Sáb']
  },
  {
    id: 'dra-elena-ramos',
    name: 'Dra. Elena Ramos',
    title: 'Cirurgiã-Dentista · Odontopediatria',
    specialty: 'Saúde Bucal Infantil e Prevenção Familiar',
    experience: '10 Anos de Atuação',
    education: 'Especialista em Odontopediatria pela Unesp · CRO-SP 145.678 (Demonstrativo)',
    bio: 'Especialista no acolhimento de crianças e pré-adolescentes, utilizando técnicas de psicologia comportamental lúdica para que as consultas sejam leves e prazerosas.',
    image: '/images/happy_patient_smile_1792366053067.webp',
    daysAvailable: ['Ter', 'Qua', 'Sex', 'Sáb']
  }
];

/**
 * Artigos Educativos do Blog (pt-BR)
 */
export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1107,
    title: 'A Importância das Consultas Preventivas Periódicas',
    slug: 'importancia-consultas-preventivas-periodicas',
    category: 'Prevenção',
    readTime: '4 min de leitura',
    date: '12 Out 2026',
    author: 'Dr. Arthur Silveira',
    excerpt: 'Entenda por que a profilaxia semestral previne alterações periodontais silenciosas e preserva dentes naturais.',
    image: '/images/dental_hygiene_procedure_1792366052723.webp',
    keyTakeaways: [
      'A prevenção precoce evita procedimentos de maior complexidade',
      'A remoção profissional do cálculo dental não é realizada apenas com escovação caseira',
      'Avaliações periódicas incluem checagem da integridade gengival e óssea'
    ],
    content: [
      'Muitos pacientes acreditam que a ausência de dor significa que a saúde bucal está 100% preservada. No entanto, o tártaro e a inflamação gengival inicial costumam progredir de maneira silenciosa.',
      'Durante a consulta preventiva semestral na Caredent, avaliamos detalhadamente a saúde periodontal, realizamos a limpeza ultrassônica e revisamos a técnica de higienização diária.',
      'Investir cerca de 45 minutos duas vezes ao ano garante dentes fortes, gengivas saudáveis e economia com tratamentos curativos extensos.'
    ]
  },
  {
    id: 1110,
    title: '5 Cuidados Práticos para Manter os Dentes Claros',
    slug: 'cuidados-praticos-manter-dentes-claros',
    category: 'Estética Dental',
    readTime: '5 min de leitura',
    date: '05 Out 2026',
    author: 'Dra. Sarah Mendes',
    excerpt: 'Dicas fundamentadas para prolongar os efeitos do clareamento dental e evitar pigmentações precoces no esmalte.',
    image: '/images/happy_patient_smile_1792366053067.webp',
    keyTakeaways: [
      'Enxágue a boca com água após consumir café, vinho ou molhos escuros',
      'Evite pastas dentais abrasivas com carvão ativado sem indicação',
      'Utilize escova de cerdas ultramacias com movimentos suaves'
    ],
    content: [
      'Um sorriso iluminado traz leveza e autoconfiança. Após realizar um procedimento de clareamento, os cuidados diários de alimentação e higiene são fundamentais.',
      'Alimentos ricos em pigmentos (café, açaí, vinho tinto) possuem afinidade com a camada superficial. Enxaguar a boca logo após a ingestão reduz significativamente o depósito de corantes.',
      'Consulte seu dentista sobre kits de manutenção periódica orientados especificamente para a sua sensibilidade.'
    ]
  }
];

/**
 * Depoimentos de Pacientes (Exemplos ilustrativos em pt-BR com indicação demonstrativa)
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    patientName: 'Vitória Helena Ramos',
    treatment: 'Lentes de Contato em Cerâmica',
    rating: 5,
    review: 'A Dra. Sarah Mendes e toda a equipe da Caredent foram incríveis. Pude ver o planejamento digital antes de iniciar e o resultado ficou muito natural e harmonioso com meu rosto. Todo o processo foi muito atencioso.',
    date: 'Setembro de 2026',
    verified: false,
    avatarText: 'VH'
  },
  {
    id: 't-2',
    patientName: 'Marcelo Silveira Lima',
    treatment: 'Implante Dentário com Guia Digital',
    rating: 5,
    review: 'Tinha muito receio de cirurgias orais, mas o Dr. Arthur explicou cada etapa com tomografia 3D e a anestesia computadorizada foi extremamente tranquila. A recuperação foi ótima e mastigo com total segurança.',
    date: 'Agosto de 2026',
    verified: false,
    avatarText: 'MS'
  },
  {
    id: 't-3',
    patientName: 'Sofia e Lucas Linhares',
    treatment: 'Odontopediatria e Prevenção',
    rating: 5,
    review: 'Meu filho de 6 anos tinha pavor de entrar em consultório odontológico. A Dra. Elena teve uma paciência admirável e transformou a consulta em uma brincadeira leve. Agora ele não reclama quando marcamos o retorno.',
    date: 'Outubro de 2026',
    verified: false,
    avatarText: 'SL'
  },
  {
    id: 't-4',
    patientName: 'Davi Prado Albuquerque',
    treatment: 'Alinhadores Invisíveis e Clareamento',
    rating: 5,
    review: 'Aos 40 anos resolvi alinhar os dentes inferiores. Os alinhadores transparentes foram discretíssimos no trabalho e muito práticos. Fiz o clareamento logo em seguida e a diferença no meu sorriso foi nítida.',
    date: 'Julho de 2026',
    verified: false,
    avatarText: 'DP'
  }
];

/**
 * Dúvidas Frequentes (FAQ) em Português
 */
export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Geral',
    question: 'Com que frequência devo realizar a consulta preventiva e limpeza?',
    answer: 'A recomendação padrão dos cirurgiões-dentistas é realizar a avaliação clínica e a profilaxia profissional a cada 6 meses. Pacientes com predisposição a cálculo ou alterações gengivais podem se beneficiar de intervalos de 3 a 4 meses, definidos individualmente.'
  },
  {
    id: 'faq-2',
    category: 'Procedimentos',
    question: 'A colocação de implante dentário é desconfortável?',
    answer: 'O procedimento é realizado sob anestesia local moderna, proporcionando total conforto durante a cirurgia. A maioria dos pacientes relata um pós-operatório muito mais brando do que o de uma extração convencional, bem controlado com analgésicos e anti-inflamatórios prescritos.'
  },
  {
    id: 'faq-3',
    category: 'Pagamentos & Convênios',
    question: 'A clínica aceita convênios odontológicos ou emite recibo para reembolso?',
    answer: 'Atuamos no modelo particular e prestamos assistência completa na emissão de relatórios clínicos e recibos detalhados para solicitação de reembolso junto ao seu convênio. Oferecemos também opções facilitadas de parcelamento para tratamentos reabilitadores e estéticos.'
  },
  {
    id: 'faq-4',
    category: 'Procedimentos',
    question: 'Quanto tempo dura o efeito do clareamento dental?',
    answer: 'A durabilidade varia geralmente entre 1 e 3 anos, dependendo dos hábitos alimentares (frequência de café, vinho tinto, chá preto) e da rotina de higienização. Fornecemos orientações práticas e moldeiras para manutenções periódicas supervisionadas.'
  },
  {
    id: 'faq-5',
    category: 'Urgências',
    question: 'O que é considerado uma urgência odontológica e como proceder?',
    answer: 'Dor de dente aguda pulsátil, traumas ou quedas com quebra dental, restaurações ou próteses caídas na região anterior e sangramentos contínuos são situações prioritárias. Em caso de urgência, entre em contato imediatamente com nossa linha de plantão para triagem rápida.'
  },
  {
    id: 'faq-6',
    category: 'Diferenciais',
    question: 'Quais são os diferenciais do fluxo digital da Caredent?',
    answer: 'Utilizamos escaneamento intraoral tridimensional (eliminando aquelas massas de moldagem desconfortáveis), radiografias digitais de baixa dosagem, anestesia computadorizada de fluxo suave e ambiente privativo acolhedor com foco no bem-estar integral do paciente.'
  }
];
