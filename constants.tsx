
import React from 'react';
import { Service, Doctor, HealthEducation } from './types';

export const COLORS = {
  primary: 'rose-500',
  secondary: 'rose-50',
  accent: 'teal-500',
  text: 'gray-800',
  white: 'white'
};

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Sanitary Hygiene Kits',
    description: 'Eco-friendly, safe, and affordable menstrual hygiene products delivered discreetly to your doorstep.',
    icon: 'fa-box-heart',
    price: 'Starting $5/mo'
  },
  {
    id: '2',
    title: 'Expert Consultations',
    description: 'Private 1:1 sessions with certified gynecologists and health experts focused on female well-being.',
    icon: 'fa-user-doctor',
    price: 'Free / Paid'
  },
  {
    id: '3',
    title: 'Medicine Support',
    description: 'Quick prescriptions and delivery of essential reproductive health medications.',
    icon: 'fa-pills'
  },
  {
    id: '4',
    title: 'Health Education',
    description: 'Learn about your body with our certified courses on menstrual health and nutrition.',
    icon: 'fa-book-open-reader'
  }
];

export const MOCK_DOCTORS: Doctor[] = [
  {
    id: 'd1',
    name: 'Dr. Sarah Mitchell',
    specialization: 'Gynecologist',
    experience: '12 Years',
    bio: 'Specializing in adolescent reproductive health and hormonal balance.',
    image: 'https://picsum.photos/seed/doc1/400/400',
    availability: ['Mon 10:00 AM', 'Wed 02:00 PM'],
    isApproved: true,
    rating: 4.9
  },
  {
    id: 'd2',
    name: 'Dr. Priya Sharma',
    specialization: 'Menstrual Health Expert',
    experience: '8 Years',
    bio: 'Dedicated to breaking taboos and providing holistic menstrual support.',
    image: 'https://picsum.photos/seed/doc2/400/400',
    availability: ['Tue 09:00 AM', 'Fri 04:00 PM'],
    isApproved: true,
    rating: 4.8
  }
];

export const EDUCATIONAL_CONTENT: HealthEducation[] = [
  {
    id: 'e1',
    title: 'Understanding Your Cycle',
    category: 'Menstrual',
    content: 'A deep dive into the four phases of the menstrual cycle...',
    thumbnail: 'https://picsum.photos/seed/edu1/600/400'
  },
  {
    id: 'e2',
    title: 'PCOS Management 101',
    category: 'General',
    content: 'Dietary and lifestyle tips for managing PCOS effectively...',
    thumbnail: 'https://picsum.photos/seed/edu2/600/400'
  }
];
