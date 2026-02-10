
export enum UserRole {
  USER = 'USER',
  DOCTOR = 'DOCTOR',
  ADMIN = 'ADMIN'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  isAnonymous?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price?: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  bio: string;
  image: string;
  availability: string[];
  isApproved: boolean;
  rating: number;
}

export interface Appointment {
  id: string;
  userId: string;
  userName: string;
  doctorId: string;
  doctorName: string;
  date: string;
  time: string;
  status: 'PENDING' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED';
  notes?: string;
}

export interface HealthEducation {
  id: string;
  title: string;
  category: 'Menstrual' | 'Nutrition' | 'Mental Health' | 'General';
  content: string;
  thumbnail: string;
}

export interface ImpactStats {
  womenReached: number;
  consultationsDone: number;
  kitsDistributed: number;
  awarenessPrograms: number;
}
