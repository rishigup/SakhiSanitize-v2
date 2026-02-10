
import React, { useState } from 'react';
import { User, UserRole } from '../types';

interface AuthProps {
  onAuthSuccess: (user: User) => void;
}

const Auth: React.FC<AuthProps> = ({ onAuthSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState<UserRole>(UserRole.USER);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name: isAnonymous ? 'Anonymous' : (name || 'Sakhi User'),
      email: email || 'user@example.com',
      role: role,
      isAnonymous
    };
    onAuthSuccess(mockUser);
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-6 py-20 bg-gradient-soft">
      <div className="w-full max-w-xl bg-white rounded-[3rem] shadow-2xl p-10 md:p-16 border border-rose-50 relative overflow-hidden animate-slide-up">
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-bl-[5rem]"></div>
        
        <div className="text-center mb-12 relative z-10">
          <div className="w-16 h-16 bg-rose-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-xl shadow-rose-100">
            <i className="fa-solid fa-lotus text-2xl"></i>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-2">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
          <p className="text-slate-500 font-medium">Join our sanctuary for women's wellness.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
          {!isLogin && (
            <div className="flex p-1.5 bg-slate-50 rounded-2xl mb-8 border border-slate-100">
              {[UserRole.USER, UserRole.DOCTOR].map(r => (
                <button 
                  key={r}
                  type="button"
                  onClick={() => setRole(r)}
                  className={`flex-1 py-3 text-xs font-extrabold rounded-xl uppercase tracking-widest transition-all duration-300 ${role === r ? 'bg-white text-rose-600 shadow-lg shadow-rose-100/20' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  {r === UserRole.USER ? 'Patient' : 'Healthcare Pro'}
                </button>
              ))}
            </div>
          )}

          <div className="space-y-6">
            {!isLogin && !isAnonymous && (
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:bg-white transition-all" 
                  placeholder="e.g. Maya Sharma"
                />
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:bg-white transition-all" 
                placeholder="you@sanctuary.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Secure Password</label>
              <input 
                type="password" 
                className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:bg-white transition-all" 
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          {!isLogin && role === UserRole.USER && (
            <div className="flex items-center gap-4 p-5 bg-rose-50/50 rounded-[1.5rem] border border-rose-100/50">
              <input 
                type="checkbox" 
                id="anon"
                checked={isAnonymous} 
                onChange={() => setIsAnonymous(!isAnonymous)}
                className="w-6 h-6 accent-rose-500 rounded-lg cursor-pointer" 
              />
              <label htmlFor="anon" className="text-[13px] text-rose-800 font-bold leading-snug cursor-pointer select-none">
                Enable Anonymous Browsing
                <span className="block text-[10px] text-rose-400 font-medium uppercase tracking-widest mt-0.5">Protect your identity in consultations</span>
              </label>
            </div>
          )}

          <button 
            type="submit"
            className="w-full py-5 bg-rose-500 text-white rounded-[1.5rem] font-extrabold text-lg hover:bg-rose-600 transition shadow-2xl shadow-rose-200 active:scale-[0.98]"
          >
            {isLogin ? 'Sign In to Sakhi' : 'Create My Sanctuary'}
          </button>
        </form>

        <div className="mt-12 text-center text-sm">
          <span className="text-slate-400 font-medium">{isLogin ? "New to SakhiSanitize?" : "Already a Sakhi?"}</span>
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 font-extrabold text-rose-500 hover:text-rose-600 underline-offset-8 hover:underline decoration-2"
          >
            {isLogin ? 'Start Your Journey' : 'Login Here'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
