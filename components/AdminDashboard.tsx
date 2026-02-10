
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const AdminDashboard: React.FC = () => {
  const data = [
    { name: 'Jan', kits: 400, cons: 240 },
    { name: 'Feb', kits: 300, cons: 139 },
    { name: 'Mar', kits: 200, cons: 980 },
    { name: 'Apr', kits: 278, cons: 390 },
    { name: 'May', kits: 189, cons: 480 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-12">System Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {[
          { label: 'Total Users', value: '14,203', icon: 'fa-users', color: 'bg-blue-500' },
          { label: 'Active Doctors', value: '182', icon: 'fa-user-md', color: 'bg-teal-500' },
          { label: 'Kits Shipped', value: '8,490', icon: 'fa-box', color: 'bg-rose-500' },
          { label: 'Growth', value: '+24%', icon: 'fa-arrow-trend-up', color: 'bg-orange-500' }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-rose-50 shadow-sm flex items-center gap-6">
            <div className={`w-14 h-14 ${stat.color} text-white rounded-2xl flex items-center justify-center text-xl`}>
              <i className={`fa-solid ${stat.icon}`}></i>
            </div>
            <div>
              <span className="text-xs text-gray-400 uppercase font-bold tracking-widest">{stat.label}</span>
              <div className="text-2xl font-black">{stat.value}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-12">
        <div className="bg-white p-8 rounded-3xl border border-rose-50 shadow-sm">
          <h2 className="text-xl font-bold mb-8">Consultations vs Kits</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="kits" fill="#F43F5E" radius={[4, 4, 0, 0]} />
                <Bar dataKey="cons" fill="#14B8A6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-3xl border border-rose-50 shadow-sm">
          <h2 className="text-xl font-bold mb-8">Doctor Approval Queue</h2>
          <div className="space-y-4">
             {[
               { name: 'Dr. James Wilson', special: 'Endocrinologist', date: '2h ago' },
               { name: 'Dr. Fatima Zahra', special: 'Gynecologist', date: '5h ago' }
             ].map((doc, i) => (
               <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                 <div>
                   <h4 className="font-bold text-sm">{doc.name}</h4>
                   <p className="text-[10px] text-gray-500 uppercase tracking-widest">{doc.special} • {doc.date}</p>
                 </div>
                 <div className="flex gap-2">
                   <button className="px-4 py-1.5 bg-rose-500 text-white rounded-lg text-xs font-bold">Approve</button>
                   <button className="p-1.5 text-gray-400 hover:text-red-500"><i className="fa-solid fa-trash"></i></button>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
