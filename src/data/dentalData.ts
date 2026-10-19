import { ServiceItem, Doctor, Testimonial, BlogPost, FAQItem } from '../types';

export const CLINIC_INFO = {
  name: 'Caredent',
  fullName: 'Caredent Dental Clinic',
  tagline: 'Comprehensive & Compassionate Dental Healthcare',
  emergencyPhone: '+1 (800) 555-2273',
  receptionPhone: '+1 (555) 384-9102',
  email: 'contact@caredent-clinic.com',
  address: '450 Health Parkway, Suite 300, New York, NY 10016',
  hours: {
    weekdays: 'Monday – Friday: 8:00 AM – 8:00 PM',
    saturday: 'Saturday: 9:00 AM – 5:00 PM',
    sunday: 'Sunday: Emergency Care Only (By Appointment)',
  },
  stats: [
    { label: 'Happy Patients', value: '18,500+' },
    { label: 'Years of Excellence', value: '16+' },
    { label: 'Dental Specialists', value: '12' },
    { label: '5-Star Reviews', value: '99.4%' },
  ]
};

export const CLINIC_SERVICES: ServiceItem[] = [
  {
    id: 'general-checkup',
    title: 'Routine Check-Up & Cleaning',
    shortDesc: 'Comprehensive oral examination, digital low-radiation X-rays, plaque scaling, and enamel polishing.',
    category: 'General',
    icon: 'Sparkles',
    priceEstimate: '$120 - $180',
    duration: '45 - 60 mins',
    features: ['Ultrasonic deep scaling', 'High-res intraoral scanning', 'Cavity & gum health assessment', 'Fluoride enamel protection'],
    description: 'Our routine dental exams detect issues before they become painful or costly. We clean hard-to-reach tartar and polish teeth for a fresh, clean feeling.'
  },
  {
    id: 'teeth-whitening',
    title: 'Professional Teeth Whitening',
    shortDesc: 'In-office laser whitening delivering up to 8 shades brighter in a single 60-minute visit.',
    category: 'Cosmetic',
    icon: 'Smile',
    priceEstimate: '$299 - $450',
    duration: '60 mins',
    features: ['Instant results in 1 session', 'Custom sensitivity-reducing gel', 'Take-home touch-up kit included', 'Safe for tooth enamel'],
    description: 'Safe, clinically supervised dental whitening using state-of-the-art cold blue LED technology that lifts deep coffee, tea, and aging stains safely.'
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants & Restoration',
    shortDesc: 'Permanent, natural-looking titanium and ceramic root replacements with 98% lifetime success rate.',
    category: 'Restorative',
    icon: 'ShieldCheck',
    priceEstimate: '$1,200 - $2,500',
    duration: '2 - 3 visits',
    features: ['3D CBCT guided precision placement', 'Premium Swiss titanium implants', 'Custom porcelain crown match', 'Lifetime warranty on fixtures'],
    description: 'Replace missing teeth permanently. Dental implants restore complete chewing power, preserve facial bone structure, and feel identical to natural teeth.'
  },
  {
    id: 'invisalign-ortho',
    title: 'Clear Aligners & Orthodontics',
    shortDesc: 'Discreet, removable clear aligners that gently straighten teeth without traditional metal brackets.',
    category: 'Orthodontics',
    icon: 'Activity',
    priceEstimate: '$2,800 - $4,800',
    duration: '6 - 18 months',
    features: ['Virtually invisible trays', 'Digital 3D smile projection', 'Removable for eating and brushing', 'Monthly check-ins & progress scans'],
    description: 'Straighten your teeth comfortably and discreetly. Designed for teenagers and working professionals seeking aesthetic smile alignment.'
  },
  {
    id: 'pediatric-dentistry',
    title: 'Pediatric Dental Care',
    shortDesc: 'Gentle, friendly, anxiety-free dental visits tailored specially for infants, children, and teens.',
    category: 'Pediatric',
    icon: 'HeartPulse',
    priceEstimate: '$90 - $150',
    duration: '30 - 45 mins',
    features: ['Child-friendly sensory environment', 'Protective dental sealants', 'Habit counseling & gentle coaching', 'Pain-free numbing techniques'],
    description: 'We believe positive childhood dental visits create lifelong healthy habits. Our pediatric specialists create a cheerful, stress-free experience.'
  },
  {
    id: 'emergency-dentistry',
    title: '24/7 Emergency Dental Care',
    shortDesc: 'Same-day immediate relief for severe toothaches, broken teeth, lost crowns, or dental trauma.',
    category: 'Emergency',
    icon: 'AlertCircle',
    priceEstimate: '$150 - $350',
    duration: 'Immediate / Same Day',
    features: ['Same-day emergency appointments', 'Rapid pain relief sedation', 'Fracture and crown repair', 'Direct emergency hotline'],
    description: 'Dental pain cannot wait. When emergencies strike, our dedicated on-call dental surgeons provide immediate relief and preservation treatment.'
  },
  {
    id: 'porcelain-veneers',
    title: 'Custom Porcelain Veneers',
    shortDesc: 'Ultra-thin, handcrafted porcelain shells bonded to the front of teeth for a Hollywood-standard smile makeover.',
    category: 'Cosmetic',
    icon: 'Award',
    priceEstimate: '$800 - $1,400 per tooth',
    duration: '2 appointments',
    features: ['Stain-resistant ceramic', 'Custom color-matched to complexion', 'Minimally invasive preparation', 'Durable 15+ year lifespan'],
    description: 'Correct chips, gaps, severe discoloration, and minor misalignment with custom-designed porcelain veneers tailored to your facial aesthetics.'
  },
  {
    id: 'root-canal-therapy',
    title: 'Painless Root Canal Therapy',
    shortDesc: 'Advanced microscopic endodontic treatment to save severely infected teeth and eliminate toothache.',
    category: 'Restorative',
    icon: 'ShieldCheck',
    priceEstimate: '$650 - $1,100',
    duration: '60 - 90 mins',
    features: ['Microscopic precision cleaning', '100% painless local anesthesia', 'Tooth preservation vs extraction', 'Reinforced ceramic core crown'],
    description: 'Modern root canals are as comfortable as getting a standard filling. Our endodontists eliminate the infection and save your natural tooth.'
  }
];

export const CLINIC_DOCTORS: Doctor[] = [
  {
    id: 'dr-arthur-sterling',
    name: 'Dr. Arthur J. Sterling, DDS',
    title: 'Chief Dental Surgeon & Founder',
    specialty: 'Oral Surgery & Advanced Implantology',
    experience: '18 Years Experience',
    education: 'Columbia University College of Dental Medicine',
    bio: 'Fellow of the International Congress of Oral Implantologists with over 4,000 successful implant and bone grafting procedures. Passionate about painless digital surgery.',
    image: '/src/assets/images/dentist_doctor_portrait_1792366053271.jpg',
    daysAvailable: ['Mon', 'Tue', 'Thu', 'Fri']
  },
  {
    id: 'dr-sarah-jenkins',
    name: 'Dr. Sarah Jenkins, DMD',
    title: 'Lead Cosmetic & Restorative Dentist',
    specialty: 'Aesthetic Dentistry & Clear Aligners',
    experience: '12 Years Experience',
    education: 'University of Pennsylvania School of Dental Medicine',
    bio: 'Recognized by the American Academy of Cosmetic Dentistry. Dr. Jenkins specializes in porcelain veneers, digital smile design, and minimally invasive aesthetics.',
    image: '/src/assets/images/hero_dentist_consultation_1792366051819.jpg',
    daysAvailable: ['Mon', 'Wed', 'Thu', 'Sat']
  },
  {
    id: 'dr-elena-ramos',
    name: 'Dr. Elena Ramos, DDS, MS',
    title: 'Pediatric Dental Specialist',
    specialty: 'Pediatric Care & Preventive Orthodontics',
    experience: '10 Years Experience',
    education: 'Harvard School of Dental Medicine',
    bio: 'Board-certified pediatric dentist dedicated to making children look forward to visiting the dentist. Certified in behavioral management and pediatric sedation.',
    image: '/src/assets/images/happy_patient_smile_1792366053067.jpg',
    daysAvailable: ['Tue', 'Wed', 'Fri', 'Sat']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1107,
    title: 'The Importance of Regular Dental Check-Ups',
    slug: 'importance-of-regular-dental-check-ups',
    category: 'Preventive Care',
    readTime: '4 min read',
    date: 'Oct 12, 2026',
    author: 'Dr. Arthur J. Sterling',
    excerpt: 'Discover why skipping your bi-annual dental cleaning can lead to unnoticed gum issues, systemic health concerns, and preventable tooth loss.',
    image: '/src/assets/images/dental_hygiene_procedure_1792366052723.jpg',
    keyTakeaways: [
      'Early detection prevents 90% of severe root canal interventions',
      'Professional ultrasonic scaling removes hardened calculus that toothbrushes cannot',
      'Routine oral cancer screening is performed during every standard 6-month check-up'
    ],
    content: [
      'Most patients believe that if their teeth do not hurt, their oral health is in perfect condition. Unfortunately, dental decay and periodontal gum disease develop silently without pain in their early stages.',
      'During a regular six-month examination at Caredent, our clinicians do far more than simply scrape surface plaque. We inspect gum pocket depths, check bone levels using ultra-low radiation digital radiography, and screen for early indicators of oral systemic conditions.',
      'Professional cleaning removes hardened calculus (tartar) that cannot be eliminated by home brushing or flossing alone. Left untreated, tartar causes chronic gum inflammation and eventual bone loss around teeth.',
      'Investing forty-five minutes twice a year saves thousands of dollars in emergency dental procedures and keeps your natural teeth strong for life.'
    ]
  },
  {
    id: 1110,
    title: '5 Tips for Maintaining a Bright, White Smile',
    slug: 'tips-for-maintaining-a-bright-white-smile',
    category: 'Cosmetic Dentistry',
    readTime: '5 min read',
    date: 'Oct 05, 2026',
    author: 'Dr. Sarah Jenkins',
    excerpt: 'Practical, dentist-approved habits to prevent staining, protect enamel luster, and prolong the longevity of your professional whitening treatments.',
    image: '/src/assets/images/happy_patient_smile_1792366053067.jpg',
    keyTakeaways: [
      'Rinse with plain water immediately after consuming red wine, dark coffee, or berries',
      'Avoid abrasive charcoal toothpastes that strip protective enamel layers',
      'Use a soft-bristled sonic toothbrush with non-abrasive fluoride toothpaste'
    ],
    content: [
      'A radiant smile boosts self-confidence, improves first impressions, and reflects vibrant health. While in-office treatments provide stunning immediate results, daily habits dictate how long that brilliance lasts.',
      'First, be mindful of dark pigments: tannins in coffee, tea, red wine, and balsamic vinegar adhere to microscopic enamel pores. Simply sipping plain water right after having coffee drastically reduces stain adhesion.',
      'Second, beware of trendy abrasive cleansers. Activated charcoal powder and baking soda can wear away microscopic layers of translucent enamel, exposing the darker yellow dentin beneath.',
      'Third, incorporate crunchy fresh vegetables like celery, apples, and carrots into your diet. They stimulate natural saliva flow, which neutralizes acids and gently washes surface debris.',
      'Finally, schedule maintenance touch-ups. With custom-fitted trays and clinical-strength carbamide peroxide gel, a 30-minute monthly refresh keeps your smile radiant indefinitely.'
    ]
  },
  {
    id: 1113,
    title: 'Common Dental Myths Debunked',
    slug: 'common-dental-myths-debunked',
    category: 'Oral Health Facts',
    readTime: '6 min read',
    date: 'Sep 28, 2026',
    author: 'Dr. Arthur J. Sterling',
    excerpt: 'We dismantle the most persistent oral healthcare misconceptions, from hard-bristled brushing to the truth about sugar and cavity development.',
    image: '/src/assets/images/dental_clinic_interior_1792366051724.jpg',
    keyTakeaways: [
      'Hard brushing does NOT clean better; it causes permanent gum recession and enamel wear',
      'Sugar alone does not cause cavities—bacterial acid produced from lingering carbs does',
      'Baby teeth matter immensely: they hold precise spaces for permanent adult teeth'
    ],
    content: [
      'Dental folklore is surprisingly persistent. One of the most damaging myths is that brushing with hard bristles or aggressive pressure scrubs teeth cleaner. In reality, hard scrubbing abrades enamel and forces the gum line to recede, exposing sensitive root surfaces.',
      'Another myth: "If my gums bleed when flossing, I should stop flossing." In fact, bleeding gums are an early sign of gingivitis caused by bacteria trapped between teeth. Continuing gentle daily flossing heals inflamed gum tissue within 7 to 10 days.',
      'Many parents ask if treating cavities in baby teeth is necessary since "they fall out anyway." Primary teeth are crucial anchors that guide permanent teeth into correct alignment; premature loss leads to severe crowding, bite misalignment, and orthodontic complications later.',
      'Trust verified medical evidence over internet folklore to protect your family oral health.'
    ]
  },
  {
    id: 1116,
    title: 'How to Help Your Child Overcome Dental Anxiety',
    slug: 'help-child-overcome-dental-anxiety',
    category: 'Pediatric Care',
    readTime: '5 min read',
    date: 'Sep 20, 2026',
    author: 'Dr. Elena Ramos',
    excerpt: 'Compassionate strategies for parents to make their child’s dental visits fun, peaceful, and empowering rather than intimidating.',
    image: '/src/assets/images/hero_dentist_consultation_1792366051819.jpg',
    keyTakeaways: [
      'Use positive, neutral language—avoid words like "needle", "shot", or "pain"',
      'Schedule morning appointments when children are well-rested and relaxed',
      'Choose a dedicated pediatric dental practice with a gentle, child-first environment'
    ],
    content: [
      'Fear of the dentist often begins in early childhood due to unfamiliar sounds, bright lights, or parental anxiety unintentionally passed down. Fortunately, modern pediatric dentistry is designed to turn visits into positive adventures.',
      'Start early: The American Academy of Pediatric Dentistry recommends scheduling a first dental visit by the child’s first birthday or when the first tooth appears. Early visits are quick, gentle check-ins that normalize the dental environment before any treatment is needed.',
      'Role-play at home with a favorite teddy bear or doll: count their teeth with a toothbrush and let your child be the dentist. This builds familiarity and reduces fear of the unknown.',
      'At Caredent, our pediatric suites feature ceiling monitors with their favorite shows, gentle "tell-show-do" explanations, and reward tokens that make every visit a celebration of bravery.'
    ]
  },
  {
    id: 1119,
    title: 'The Connection Between Oral Health and Overall Wellness',
    slug: 'connection-between-oral-health-and-overall-wellness',
    category: 'General Health',
    readTime: '6 min read',
    date: 'Sep 14, 2026',
    author: 'Dr. Arthur J. Sterling',
    excerpt: 'Your mouth is the gateway to your body. Learn how periodontal infection directly impacts cardiovascular health, diabetes control, and pregnancy.',
    image: '/src/assets/images/dental_hygiene_procedure_1792366052723.jpg',
    keyTakeaways: [
      'Chronic gum inflammation elevates systemic inflammatory markers like C-reactive protein (CRP)',
      'Periodontal disease is linked to higher risk of arterial plaque buildup and cardiovascular disease',
      'Stabilizing periodontal health helps diabetic patients achieve better glycemic control'
    ],
    content: [
      'The mouth does not exist in isolation from the rest of the body. Over the last two decades, extensive biomedical research has confirmed the bidirectional link between oral bacteria and systemic wellness.',
      'When gums become chronically infected (periodontitis), harmful bacteria such as Porphyromonas gingivalis can enter the bloodstream through micro-ulcerations in the gum tissue. This triggers systemic inflammation and has been detected in arterial plaque deposits in cardiovascular patients.',
      'Furthermore, people with diabetes are more susceptible to severe gum disease, while untreated periodontal infection conversely impairs insulin sensitivity and blood sugar management.',
      'Maintaining healthy gums through daily flossing and bi-annual dental cleanings is not just about preserving teeth—it is an essential pillar of whole-body preventive medicine.'
    ]
  },
  {
    id: 1122,
    title: 'Dental Implants vs. Dentures: Which Is Right for You?',
    slug: 'dental-implants-vs-dentures-which-is-right-for-you',
    category: 'Restorative Dentistry',
    readTime: '7 min read',
    date: 'Sep 02, 2026',
    author: 'Dr. Arthur J. Sterling',
    excerpt: 'A comprehensive medical comparison of permanent titanium dental implants versus modern dentures, analyzing cost, longevity, comfort, and bone preservation.',
    image: '/src/assets/images/dental_clinic_interior_1792366051724.jpg',
    keyTakeaways: [
      'Implants stimulate jawbone density and prevent facial collapse caused by missing roots',
      'Modern removable dentures offer a non-surgical and budget-friendly alternative',
      'Implant-supported overdentures (All-on-4) combine stability with multi-tooth coverage'
    ],
    content: [
      'Losing one or more natural teeth affects more than your smile—it impacts your ability to chew nutritious foods, speak clearly, and maintain jawbone structure.',
      'Dental implants represent the modern gold standard. A biocompatible titanium or zirconia screw is integrated directly into the jawbone, functioning as an artificial root. This stimulates natural bone remodeling, preventing the hollow facial contour that often follows tooth loss.',
      'Dentures, on the other hand, rest on the gums or clip onto remaining teeth. They are non-invasive and have a lower upfront cost, making them accessible for patients who may not be surgical candidates or who have limited bone density.',
      'For many patients, hybrid solutions like implant-supported bridges or snap-in dentures provide the ideal balance of rock-solid stability, aesthetic beauty, and financial practicality.'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    patientName: 'Victoria Harrison',
    treatment: 'Full Porcelain Veneers',
    rating: 5,
    review: 'Dr. Sarah Jenkins and the team at Caredent transformed my entire smile before my wedding. The digital preview showed me exactly how it would look, and the final results exceeded all expectations. Zero pain and unmatched attention to detail.',
    date: 'September 2026',
    verified: true,
    avatarText: 'VH'
  },
  {
    id: 't-2',
    patientName: 'Michael Montgomery',
    treatment: 'Single Tooth Dental Implant',
    rating: 5,
    review: 'I broke a front molar playing basketball and was terrified of the surgery. Dr. Sterling used 3D computer navigation and the procedure was done before I knew it. It looks and bites completely identical to my real teeth.',
    date: 'August 2026',
    verified: true,
    avatarText: 'MM'
  },
  {
    id: 't-3',
    patientName: 'Sophia & Lucas Lin',
    treatment: 'Pediatric Dental Care & Cleanings',
    rating: 5,
    review: 'My 6-year-old son used to cry at the mere thought of a dentist. Dr. Elena Ramos was so gentle, patient, and cheerful that he actually asked when we could go back! The entire clinic is spotless, welcoming, and high-tech.',
    date: 'October 2026',
    verified: true,
    avatarText: 'SL'
  },
  {
    id: 't-4',
    patientName: 'David K. Peterson',
    treatment: 'Clear Aligners & Teeth Whitening',
    rating: 5,
    review: 'At 42, I finally decided to straighten my crowded bottom teeth. The clear aligners were completely undetectable at work and took just 8 months. Followed up with their in-office laser whitening—worth every penny.',
    date: 'July 2026',
    verified: true,
    avatarText: 'DP'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'How often should I visit Caredent for an exam and cleaning?',
    answer: 'The American Dental Association and our clinical team recommend a comprehensive dental examination and professional hygiene cleaning every six months. Patients with active periodontal gum disease or high cavity risk may benefit from quarterly visits.'
  },
  {
    id: 'faq-2',
    category: 'Procedures',
    question: 'Are dental implants painful to receive?',
    answer: 'Most patients report that getting a dental implant involves less discomfort than a routine tooth extraction. We use targeted local anesthesia and optional gentle sedation. Following the procedure, mild soreness is comfortably managed with standard over-the-counter medication for 24-48 hours.'
  },
  {
    id: 'faq-3',
    category: 'Insurance & Pricing',
    question: 'Do you accept dental insurance, and do you offer payment plans?',
    answer: 'Yes! Caredent works as an in-network or preferred provider with most major PPO dental plans (Delta Dental, Cigna, MetLife, Aetna, Guardian, Humana). For uninsured patients or cosmetic treatments, we provide 0% interest flexible monthly financing through CareCredit and our in-house Dental Membership Club.'
  },
  {
    id: 'faq-4',
    category: 'Procedures',
    question: 'How long does professional teeth whitening last?',
    answer: 'Professional laser whitening results typically last between 1 to 3 years depending on dietary habits (coffee, tea, red wine, smoking). We provide customized home touch-up trays and maintenance gel so you can effortlessly preserve your bright shade indefinitely.'
  },
  {
    id: 'faq-5',
    category: 'Emergency',
    question: 'What qualifies as a dental emergency, and how quickly can I be seen?',
    answer: 'Severe throbbing toothache, a knocked-out or fractured tooth, uncontrolled gum bleeding, acute facial swelling, or a dislodged crown qualify as urgent emergencies. We reserve daily emergency slots and can usually see you within 1 to 2 hours of calling our emergency line.'
  },
  {
    id: 'faq-6',
    category: 'General',
    question: 'What sets Caredent apart from traditional dental offices?',
    answer: 'We integrate gentle biological dentistry with cutting-edge equipment: digital 3D intraoral scanners (no messy impression trays), low-radiation panoramic CBCT X-rays, painless electronic anesthesia delivery, and private suites designed for relaxation.'
  }
];
