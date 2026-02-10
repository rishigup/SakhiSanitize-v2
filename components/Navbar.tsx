
import React from 'react';
import { User } from '../types';

interface NavbarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  user: User | null;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setCurrentView, user, onLogout }) => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 glass rounded-2xl px-6 py-3 flex items-center justify-between shadow-sm transition-all duration-300">
      <div 
        className="flex items-center gap-3 cursor-pointer group"
        onClick={() => setCurrentView('home')}
      >
        <div className="relative">
          <div className="w-10 h-10 bg-rose-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-rose-200 group-hover:rotate-12 transition-transform duration-500">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21C12 21 4 15 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 15 12 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-teal-400 rounded-full border-2 border-white"></div>
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-extrabold text-slate-900 tracking-tight leading-none">Sakhi</span>
          <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest leading-none mt-1">Sanitize</span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-slate-600">
        <button onClick={() => setCurrentView('home')} className={`relative py-1 transition group hover:text-rose-500 ${currentView === 'home' ? 'text-rose-500' : ''}`}>
          Home
          <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-rose-500 transform transition-transform duration-300 ${currentView === 'home' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
        </button>
        <button onClick={() => setCurrentView('services')} className={`relative py-1 transition group hover:text-rose-500 ${currentView === 'services' ? 'text-rose-500' : ''}`}>
          Services
          <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-rose-500 transform transition-transform duration-300 ${currentView === 'services' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
        </button>
        {user && (
          <button onClick={() => setCurrentView('dashboard')} className={`relative py-1 transition group hover:text-rose-500 ${currentView === 'dashboard' ? 'text-rose-500' : ''}`}>
            Dashboard
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-rose-500 transform transition-transform duration-300 ${currentView === 'dashboard' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </button>
        )}
      </div>

      <div className="flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-4 bg-rose-50/50 pl-4 pr-1.5 py-1.5 rounded-xl border border-rose-100">
            <span className="text-xs font-bold text-rose-700 hidden sm:inline tracking-tight">Hi, {user.isAnonymous ? 'Sakhi' : user.name.split(' ')[0]}</span>
            <div className="flex items-center gap-2">
              <button 
                onClick={onLogout}
                className="w-8 h-8 rounded-lg bg-white text-rose-500 flex items-center justify-center hover:bg-rose-500 hover:text-white transition shadow-sm"
                title="Logout"
              >
                <i className="fa-solid fa-power-off text-xs"></i>
              </button>
              <div className="w-8 h-8 rounded-lg bg-rose-500 flex items-center justify-center text-white overflow-hidden shadow-md">
                 {user.avatar ? <img src={user.avatar} className="w-full h-full object-cover" /> : <i className="fa-solid fa-user text-xs"></i>}
              </div>
            </div>
          </div>
        ) : (
          <button 
            onClick={() => setCurrentView('auth')}
            className="px-6 py-2.5 bg-rose-500 text-white rounded-xl text-sm font-bold hover:bg-rose-600 transition shadow-lg shadow-rose-200 active:scale-95"
          >
            Get Started
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
