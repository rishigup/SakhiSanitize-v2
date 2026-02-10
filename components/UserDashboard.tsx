
import React from 'react';
import { User, Appointment } from '../types';

const UserDashboard: React.FC<{user: User}> = ({ user }) => {
  const MOCK_APPOINTMENTS: Appointment[] = [
    { id: '1', userId: user.id, userName: user.name, doctorId: 'd1', doctorName: 'Dr. Sarah Mitchell', date: '2024-05-20', time: '10:00 AM', status: 'PENDING' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Hello, {user.isAnonymous ? 'Sakhi' : user.name}</h1>
        <p className="text-gray-500">Welcome to your health dashboard.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Active Consultations */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-rose-50">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <i className="fa-solid fa-calendar-check text-rose-500"></i>
              Upcoming Consultations
            </h2>
            {MOCK_APPOINTMENTS.map(app => (
              <div key={app.id} className="flex items-center justify-between p-6 bg-rose-50/50 rounded-2xl border border-rose-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-rose-500 border border-rose-100">
                    <i className="fa-solid fa-user-doctor"></i>
                  </div>
                  <div>
                    <h3 className="font-bold">{app.doctorName}</h3>
                    <p className="text-xs text-gray-500">{app.date} • {app.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                   <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-[10px] font-bold rounded-full">{app.status}</span>
                   <button className="p-2 hover:bg-rose-100 rounded-full text-rose-500"><i className="fa-solid fa-video"></i></button>
                </div>
              </div>
            ))}
            {MOCK_APPOINTMENTS.length === 0 && (
              <p className="text-center text-gray-400 py-8 italic">No upcoming appointments. Book one now!</p>
            )}
          </div>

          {/* Kit Subscription */}
          <div className="bg-rose-600 rounded-3xl p-8 text-white flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Your Sakhi Kit</h2>
              <p className="text-rose-100 text-sm mb-4">Active Plan: Wellness Monthly</p>
              <p className="text-xs opacity-75">Next Delivery: June 05, 2024</p>
            </div>
            <button className="px-8 py-3 bg-white text-rose-600 rounded-2xl font-bold shadow-xl shadow-rose-900/20">Manage Subscription</button>
          </div>
        </div>

        <div className="space-y-8">
           {/* Quick Stats */}
           <div className="bg-white rounded-3xl p-8 shadow-sm border border-rose-50">
              <h2 className="text-xl font-bold mb-6">Health Snapshot</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Cycle Day</span>
                  <span className="font-bold text-rose-500">Day 12</span>
                </div>
                <div className="w-full bg-rose-100 h-2 rounded-full">
                  <div className="bg-rose-500 h-2 rounded-full" style={{width: '45%'}}></div>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <span className="text-sm text-gray-500">Vitamins Taken</span>
                  <span className="font-bold text-teal-500">90%</span>
                </div>
              </div>
           </div>

           {/* AI Health Tip */}
           <div className="bg-teal-50 rounded-3xl p-8 border border-teal-100">
              <div className="w-10 h-10 bg-teal-500 text-white rounded-xl flex items-center justify-center mb-4">
                <i className="fa-solid fa-lightbulb"></i>
              </div>
              <h3 className="font-bold text-teal-900 mb-2">Sakhi AI Tip</h3>
              <p className="text-sm text-teal-700 leading-relaxed">During the follicular phase, try incorporating more iron-rich foods like spinach and lentils into your diet to boost energy levels.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
