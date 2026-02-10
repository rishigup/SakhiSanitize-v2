
import React, { useState } from 'react';
import { MOCK_DOCTORS, EDUCATIONAL_CONTENT } from '../constants';
import { Doctor } from '../types';

interface ServicesProps {
  onBook: (doctor: Doctor) => void;
}

const Services: React.FC<ServicesProps> = ({ onBook }) => {
  const [activeTab, setActiveTab] = useState<'doctors' | 'education' | 'kits'>('doctors');

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-fadeIn">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
        <div>
          <h2 className="text-4xl font-bold mb-2">Our Offerings</h2>
          <p className="text-gray-500">Select a service to get started with your wellness journey.</p>
        </div>
        <div className="flex p-1 bg-rose-100 rounded-full">
          {(['doctors', 'kits', 'education'] as const).map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === tab ? 'bg-white text-rose-600 shadow-sm' : 'text-gray-500 hover:text-rose-500'}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'doctors' && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_DOCTORS.map(doc => (
            <div key={doc.id} className="bg-white rounded-3xl p-6 shadow-sm border border-rose-50 flex flex-col items-center text-center group">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-rose-50 group-hover:border-rose-200 transition">
                <img src={doc.image} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1">{doc.name}</h3>
              <p className="text-rose-500 font-medium text-sm mb-4">{doc.specialization}</p>
              <p className="text-gray-500 text-sm mb-6 line-clamp-2">{doc.bio}</p>
              <div className="flex items-center gap-2 mb-6">
                <i className="fa-solid fa-star text-yellow-400 text-xs"></i>
                <span className="text-sm font-bold">{doc.rating}</span>
                <span className="text-gray-400 text-xs">({doc.experience})</span>
              </div>
              <button 
                onClick={() => onBook(doc)}
                className="w-full py-3 bg-rose-500 text-white rounded-2xl font-bold hover:bg-rose-600 transition"
              >
                Book Consultation
              </button>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'kits' && (
        <div className="grid md:grid-cols-2 gap-12">
          {[
            { name: 'Basic Sakhi Kit', items: '10 Biodegradable Pads, Intimate Wash', price: '$5' },
            { name: 'Wellness Sakhi Kit', items: '15 Premium Pads, Heating Patch, Cramp Oil', price: '$12' },
          ].map((kit, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] border-2 border-dashed border-rose-200 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">{kit.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{kit.items}</p>
                <div className="text-3xl font-black text-rose-500">{kit.price}<span className="text-xs text-gray-400 ml-1">/ Month</span></div>
              </div>
              <button className="px-8 py-3 bg-rose-500 text-white rounded-full font-bold">Subscribe</button>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'education' && (
        <div className="grid md:grid-cols-2 gap-8">
          {EDUCATIONAL_CONTENT.map(item => (
            <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition group">
              <div className="h-48 overflow-hidden">
                <img src={item.thumbnail} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              </div>
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-rose-100 text-rose-600 rounded-full text-xs font-bold mb-4">{item.category}</span>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <button className="text-rose-500 font-bold hover:underline">Read Guide &rarr;</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
