import { ServiceItem, Doctor, Testimonial, BlogPost, FAQItem } from '../types';

/**
 * ============================================================================
 * INFORMAÇÕES DA CLÍNICA CAREDENT
 * ============================================================================
 */

export const CLINIC_CONFIG = {
  // Informações Institucionais
  branding: {
    name: 'Caredent',
    fullName: 'Caredent Clínica Odontológica',
    tagline: 'Odontologia Moderna, Cuidado Humanizado e Tecnologia Digital',
    legalEntityName: 'Caredent Odontologia Especializada',
    technicalDirector: {
      name: 'Dr. Arthur Silveira',
      title: 'Responsável Técnico',
    },
  },

  // Meios de Contato
  contact: {
    receptionPhone: '(11) 3254-8900',
    emergencyPhone: '(11) 99876-5432',
    email: 'contato@caredent.com.br',
    address: {
      street: 'Av. Paulista, 1000 - 12º andar',
      city: 'São Paulo',
      state: 'SP',
      postalCode: '01310-100',
      country: 'Brasil',
      fullFormatted: 'Av. Paulista, 1000 - 12º andar, Bela Vista, São Paulo - SP',
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

  // Pilares e Diferenciais da Clínica
  stats: [
    { label: 'Diagnóstico 3D', value: 'Scanner Digital' },
    { label: 'Corpo Clínico Integrado', value: 'Multidisciplinar' },
    { label: 'Biossegurança Hospitalar', value: 'Protocolos Rígidos' },
    { label: 'Agendamento Direto', value: 'Online em Tempo Real' },
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
};

/**
 * Catálogo de Procedimentos e Serviços Odontológicos
 */
export const CLINIC_SERVICES: ServiceItem[] = [
  {
    id: 'general-checkup',
    title: 'Avaliação Clínica & Profilaxia Digital',
    shortDesc: 'Exame bucal minucioso, radiografias digitais de baixa radiação, remoção de tártaro por ultrassom e polimento do esmalte.',
    category: 'Clínica Geral',
    icon: 'Sparkles',
    priceEstimate: 'Sob avaliação clínica',
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
    priceEstimate: 'Sob avaliação clínica',
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
    priceEstimate: 'Planejamento individualizado',
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
    priceEstimate: 'Planejamento individualizado',
    duration: 'Conforme evolução clínica',
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
    priceEstimate: 'Sob avaliação clínica',
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
    priceEstimate: 'Atendimento prioritário',
    duration: 'Conforme a necessidade do caso',
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
    priceEstimate: 'Planejamento individualizado',
    duration: '2 a 3 consultas',
    features: [
      'Cerâmica vítrea de alta resistência e brilho natural',
      'Planejamento digital com teste estético prévio (mockup)',
      'Preparo dental conservador e minimamente invasivo',
      'Excelente estabilidade de cor ao longo dos anos'
    ],
    description: 'Ideal para harmonizar pequenas imperfeições, desgastes ou manchas severas, proporcionando um sorriso simétrico e harmonioso com seu rosto.'
  },
  {
    id: 'root-canal-therapy',
    title: 'Endodontia Microscópica (Tratamento de Canal)',
    shortDesc: 'Procedimento especializado com magnificação visual para eliminar infecções internas e salvar a estrutura dental.',
    category: 'Endodontia',
    icon: 'ShieldCheck',
    priceEstimate: 'Sob avaliação clínica',
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
 * Corpo Clínico e Especialidades
 */
export const CLINIC_DOCTORS: Doctor[] = [
  {
    id: 'dr-arthur-silveira',
    name: 'Dr. Arthur Silveira',
    title: 'Cirurgião-Dentista',
    specialty: 'Implantodontia e Reabilitação Oral',
    experience: 'Especialista em Cirurgia Guiada',
    education: 'Atuação focada em reabilitações orais planejadas digitalmente com precisão e conforto.',
    bio: 'Experiência em cirurgia guiada por computador e implantes odontológicos integrados ao fluxo digital da clínica.',
    image: '/images/dentist_doctor_portrait_1792366053271.webp',
    daysAvailable: ['Seg', 'Ter', 'Qui', 'Sex']
  },
  {
    id: 'dra-sarah-mendes',
    name: 'Dra. Sarah Mendes',
    title: 'Cirurgiã-Dentista',
    specialty: 'Dentística Restauradora e Ortodontia Digital',
    experience: 'Especialista em Estética Dental',
    education: 'Dedicada ao planejamento estético do sorriso, clareamento supervisionado e alinhadores transparentes.',
    bio: 'Foco em estética minimamente invasiva, preservação dental e harmonia funcional do sorriso.',
    image: '/images/hero_dentist_consultation_1792366051819.webp',
    daysAvailable: ['Seg', 'Qua', 'Qui', 'Sáb']
  },
  {
    id: 'dra-elena-ramos',
    name: 'Dra. Elena Ramos',
    title: 'Cirurgiã-Dentista',
    specialty: 'Odontopediatria e Prevenção Familiar',
    experience: 'Especialista em Saúde Bucal Infantil',
    education: 'Especialista no acolhimento de bebês, crianças e adolescentes com abordagem positiva.',
    bio: 'Utiliza técnicas de manejo comportamental acolhedor para que as consultas sejam leves, tranquilas e seguras.',
    image: '/images/happy_patient_smile_1792366053067.webp',
    daysAvailable: ['Ter', 'Qua', 'Sex', 'Sáb']
  }
];

/**
 * Artigos Educativos do Blog
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
      'A remoção profissional do cálculo dental complementa a higienização diária',
      'Avaliações periódicas incluem checagem da integridade gengival e óssea'
    ],
    content: [
      'Muitos pacientes acreditam que a ausência de dor significa que a saúde bucal está perfeitamente preservada. No entanto, o acúmulo de placa e a inflamação gengival inicial costumam progredir de maneira silenciosa.',
      'Durante a consulta preventiva semestral na Caredent, avaliamos detalhadamente a saúde periodontal, realizamos a profilaxia ultrassônica e orientamos sobre a técnica ideal de higienização.',
      'Investir em prevenção periódica mantém dentes fortes, gengivas sadias e tranquilidade no dia a dia.'
    ]
  },
  {
    id: 1110,
    title: 'Cuidados Práticos para Manter os Dentes Claros',
    slug: 'cuidados-praticos-manter-dentes-claros',
    category: 'Estética Dental',
    readTime: '5 min de leitura',
    date: '05 Out 2026',
    author: 'Dra. Sarah Mendes',
    excerpt: 'Orientações fundamentadas para prolongar a luminosidade do sorriso e proteger o esmalte dental.',
    image: '/images/happy_patient_smile_1792366053067.webp',
    keyTakeaways: [
      'Enxágue a boca com água após alimentos ou bebidas pigmentadas',
      'Evite pastas dentais excessivamente abrasivas sem recomendação profissional',
      'Utilize escova de cerdas macias com movimentos circulares suaves'
    ],
    content: [
      'Um sorriso saudável e iluminado traz bem-estar e autoconfiança. Os hábitos diários de higiene e alimentação são os principais aliados para manter o resultado dos tratamentos estéticos.',
      'Bebidas com alto teor de corantes podem aderir à camada superficial do esmalte. O hábito simples de enxaguar com água logo após o consumo já faz uma grande diferença.',
      'Consulte sempre seu dentista para orientações específicas e personalizadas para a sua rotina.'
    ]
  }
];

/**
 * Pilares da Experiência e Avaliação do Atendimento
 */
export const PATIENT_EXPERIENCE_PILLARS = [
  {
    id: 'p-1',
    title: 'Acolhimento Humanizado',
    subtitle: 'Consultas sem pressa e escuta atenta',
    description: 'Dedicamos tempo para entender seu histórico, ouvir suas expectativas e esclarecer cada dúvida antes de iniciar qualquer procedimento.',
    highlight: 'Cuidado Centrado no Paciente',
    badge: 'Acolhimento'
  },
  {
    id: 'p-2',
    title: 'Previsibilidade com Tecnologia 3D',
    subtitle: 'Diagnóstico digital e simulação prévia',
    description: 'Com escaneamento intraoral e planejamento computadorizado, você visualiza as etapas do tratamento com clareza e transparência.',
    highlight: 'Fluxo 100% Digital',
    badge: 'Tecnologia'
  },
  {
    id: 'p-3',
    title: 'Conforto em Cada Etapa',
    subtitle: 'Protocolos suaves e ambiente relaxante',
    description: 'Utilizamos anestesia computadorizada de fluxo controlado e técnicas minimamente invasivas para garantir uma consulta calma e agradável.',
    highlight: 'Foco no Bem-Estar',
    badge: 'Conforto'
  },
  {
    id: 'p-4',
    title: 'Transparência no Tratamento',
    subtitle: 'Planos detalhados e sem surpresas',
    description: 'Apresentamos opções claras de tratamento, orientações preventivas e suporte contínuo para que você tome decisões com total segurança.',
    highlight: 'Clareza Clínica',
    badge: 'Transparência'
  }
];

// Mantido para retrocompatibilidade
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    patientName: 'Acolhimento Humanizado',
    treatment: 'Consultas com tempo dedicado e escuta atenta',
    rating: 5,
    review: 'Atendimento centrado nas necessidades de cada pessoa, com ambiente tranquilo e acolhedor para que você se sinta seguro em todas as consultas.',
    date: 'Pilar Caredent',
    verified: true,
    avatarText: 'AH'
  },
  {
    id: 't-2',
    patientName: 'Tecnologia Digital 3D',
    treatment: 'Escaneamento intraoral e precisão clínica',
    rating: 5,
    review: 'Substituição das moldagens convencionais por imagens tridimensionais de alta definição, permitindo um planejamento cirúrgico e ortodôntico muito mais preciso.',
    date: 'Pilar Caredent',
    verified: true,
    avatarText: 'TD'
  },
  {
    id: 't-3',
    patientName: 'Conforto e Bem-Estar',
    treatment: 'Anestesia computadorizada e protocolos suaves',
    rating: 5,
    review: 'Fluxo anestésico milimetricamente controlado para reduzir o desconforto, com respeito total ao tempo do paciente durante todo o procedimento.',
    date: 'Pilar Caredent',
    verified: true,
    avatarText: 'CB'
  },
  {
    id: 't-4',
    patientName: 'Comunicação Clara',
    treatment: 'Transparência clínica e suporte dedicado',
    rating: 5,
    review: 'Apresentação detalhada de cada etapa com imagens da sua própria saúde bucal, oferecendo autonomia e segurança na escolha do tratamento.',
    date: 'Pilar Caredent',
    verified: true,
    avatarText: 'CC'
  }
];

/**
 * Dúvidas Frequentes (FAQ)
 */
export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Geral',
    question: 'Com que frequência devo realizar a consulta preventiva e limpeza?',
    answer: 'A recomendação padrão dos cirurgiões-dentistas é realizar a avaliação clínica e a profilaxia profissional a cada 6 meses. Pacientes com necessidades periodontais específicas podem se beneficiar de acompanhamentos com intervalos ajustados individualmente.'
  },
  {
    id: 'faq-2',
    category: 'Procedimentos',
    question: 'Como funciona o procedimento de implante dentário?',
    answer: 'O procedimento é planejado digitalmente a partir de imagens tomográficas tridimensionais e realizado sob anestesia local moderna, proporcionando conforto durante todo o tempo de cadeira. O pós-operatório costuma ser muito tranquilo com as orientações e medicações adequadas.'
  },
  {
    id: 'faq-3',
    category: 'Pagamentos & Reembolso',
    question: 'A clínica aceita convênios ou emite documentação para reembolso?',
    answer: 'Atuamos no modelo particular e prestamos assistência completa na emissão de relatórios clínicos e recibos para que você possa solicitar reembolso junto ao seu convênio de saúde, conforme as regras da sua operadora.'
  },
  {
    id: 'faq-4',
    category: 'Procedimentos',
    question: 'Quais os cuidados para manter os resultados do clareamento dental?',
    answer: 'A manutenção do clareamento depende principalmente dos hábitos diários e de higiene. Orientamos sobre cuidados com bebidas pigmentadas e fornecemos recomendações para preservação contínua da luminosidade dos dentes.'
  },
  {
    id: 'faq-5',
    category: 'Urgências',
    question: 'O que fazer em caso de dor intensa ou emergência odontológica?',
    answer: 'Situações de dor aguda, traumas com fratura dental ou restaurações soltas em áreas anteriores recebem prioridade de atendimento. Entre em contato diretamente pelo nosso telefone de plantão para receber orientações rápidas.'
  },
  {
    id: 'faq-6',
    category: 'Diferenciais',
    question: 'Quais são as vantagens do fluxo digital da Caredent?',
    answer: 'O escaneamento intraoral tridimensional substitui as massas de moldagem convencionais, trazendo mais rapidez, conforto e previsibilidade tanto para tratamentos estéticos quanto para alinhadores e implantes.'
  }
];
