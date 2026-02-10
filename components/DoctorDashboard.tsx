
import React from 'react';

const DoctorDashboard: React.FC<{doctorId: string}> = ({ doctorId }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-4xl font-bold mb-2">Doctor Dashboard</h1>
          <p className="text-gray-500">Welcome back, your patients are waiting.</p>
        </div>
        <div className="flex gap-4">
           <div className="px-6 py-3 bg-white border border-rose-100 rounded-2xl text-center">
              <span className="block text-xl font-bold text-rose-600">12</span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest">Today's Slots</span>
           </div>
           <div className="px-6 py-3 bg-white border border-rose-100 rounded-2xl text-center">
              <span className="block text-xl font-bold text-teal-600">8</span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest">Completed</span>
           </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-rose-50">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Patient Queue</h2>
              <button className="text-rose-500 font-bold text-sm">View History</button>
            </div>
            
            <div className="space-y-4">
               {[
                 { id: 'p1', name: 'Sakhi #1024 (Anon)', time: '11:30 AM', type: 'Menstrual Pain', status: 'Ready' },
                 { id: 'p2', name: 'Alisha Sharma', time: '12:00 PM', type: 'PCOS Consult', status: 'Waiting' }
               ].map(patient => (
                 <div key={patient.id} className="p-6 bg-rose-50/30 rounded-2xl border border-rose-100 flex items-center justify-between group hover:bg-white hover:shadow-md transition">
                   <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-rose-200 flex items-center justify-center text-rose-500 font-bold">
                       {patient.name.charAt(0)}
                     </div>
                     <div>
                       <h4 className="font-bold">{patient.name}</h4>
                       <p className="text-xs text-gray-500">{patient.type} • <span className="text-rose-500">{patient.time}</span></p>
                     </div>
                   </div>
                   <button className="px-6 py-2 bg-rose-500 text-white rounded-xl text-sm font-bold shadow-lg shadow-rose-100 group-hover:scale-105 transition">Start Call</button>
                 </div>
               ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
           <div className="bg-white rounded-3xl p-8 shadow-sm border border-rose-50">
              <h2 className="text-xl font-bold mb-6">Quick Prescribe</h2>
              <div className="space-y-4">
                <input placeholder="Patient Search..." className="w-full px-4 py-3 bg-gray-50 rounded-xl text-sm border-none focus:ring-1 focus:ring-rose-200" />
                <textarea rows={4} placeholder="Type medicine or advice..." className="w-full px-4 py-3 bg-gray-50 rounded-xl text-sm border-none focus:ring-1 focus:ring-rose-200" />
                <button className="w-full py-3 bg-teal-500 text-white rounded-xl font-bold">Send to Patient</button>
              </div>
           </div>
           
           <div className="p-8 bg-gradient-to-br from-rose-500 to-rose-600 rounded-3xl text-white">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <i className="fa-solid fa-circle-check"></i>
                Profile Verification
              </h3>
              <p className="text-sm text-rose-100 leading-relaxed mb-6">Your profile is fully verified. You can now accept international consultations.</p>
              <button className="w-full py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm transition">Update Documents</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
