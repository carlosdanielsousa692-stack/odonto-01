export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  category: string;
  icon: string;
  priceEstimate: string;
  duration: string;
  features: string[];
  description: string;
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  experience: string;
  education: string;
  bio: string;
  image: string;
  daysAvailable: string[];
}

export interface Testimonial {
  id: string;
  patientName: string;
  treatment: string;
  rating: number;
  review: string;
  date: string;
  verified: boolean;
  avatarText: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface AppointmentData {
  serviceId: string;
  doctorId: string;
  date: string;
  timeSlot: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  hasInsurance: boolean;
  insuranceProvider?: string;
  notes?: string;
  isEmergency?: boolean;
}
