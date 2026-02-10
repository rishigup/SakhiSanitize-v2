
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Services from './components/Services';
import Auth from './components/Auth';
import UserDashboard from './components/UserDashboard';
import DoctorDashboard from './components/DoctorDashboard';
import AdminDashboard from './components/AdminDashboard';
import SakhiAI from './components/SakhiAI';
import { User, UserRole } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<string>('home');
  const [user, setUser] = useState<User | null>(null);
  const [isAiOpen, setIsAiOpen] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('sakhi_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (u: User) => {
    setUser(u);
    localStorage.setItem('sakhi_user', JSON.stringify(u));
    setCurrentView('dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('sakhi_user');
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const changeView = (view: string) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Landing onCtaClick={() => changeView('services')} />;
      case 'services':
        return <Services onBook={() => user ? changeView('dashboard') : changeView('auth')} />;
      case 'auth':
        return <Auth onAuthSuccess={handleLogin} />;
      case 'dashboard':
        if (!user) return <Auth onAuthSuccess={handleLogin} />;
        if (user.role === UserRole.USER) return <UserDashboard user={user} />;
        if (user.role === UserRole.DOCTOR) return <DoctorDashboard doctorId={user.id} />;
        if (user.role === UserRole.ADMIN) return <AdminDashboard />;
        return <Landing onCtaClick={() => changeView('services')} />;
      default:
        return <Landing onCtaClick={() => changeView('services')} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-white selection:bg-rose-100 selection:text-rose-600">
      {/* Background decoration elements */}
      <div className="fixed top-[-10%] left-[-5%] w-[40%] h-[40%] bg-rose-50 rounded-full blur-[100px] pointer-events-none -z-10 opacity-60"></div>
      <div className="fixed bottom-[-10%] right-[-5%] w-[30%] h-[30%] bg-teal-50 rounded-full blur-[100px] pointer-events-none -z-10 opacity-40"></div>
      
      <Navbar 
        currentView={currentView} 
        setCurrentView={changeView} 
        user={user} 
        onLogout={handleLogout} 
      />
      
      <main className="flex-grow">
        {renderView()}
      </main>

      <Footer setCurrentView={changeView} />

      {/* Modern Floating AI Trigger */}
      <button 
        onClick={() => setIsAiOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-rose-500 text-white rounded-[1.5rem] shadow-2xl shadow-rose-300 hover:scale-110 hover:bg-rose-600 transition-all duration-300 flex items-center justify-center z-[80] group"
      >
        <div className="relative">
          <i className="fa-solid fa-sparkles text-2xl"></i>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-teal-400 border-2 border-rose-500 rounded-full animate-ping"></span>
        </div>
        
        {/* Tooltip hint */}
        <div className="absolute right-20 bg-slate-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap uppercase tracking-widest pointer-events-none">
          Ask Sakhi AI
        </div>
      </button>

      {/* AI Drawer */}
      {isAiOpen && <SakhiAI onClose={() => setIsAiOpen(false)} />}
    </div>
  );
};

export default App;
