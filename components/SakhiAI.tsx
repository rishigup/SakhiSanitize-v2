
import React, { useState, useRef, useEffect } from 'react';
import { getHealthAdvice } from '../services/geminiService';

interface SakhiAIProps {
  onClose: () => void;
}

const SakhiAI: React.FC<SakhiAIProps> = ({ onClose }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string, timestamp: string}[]>([
    { 
      role: 'bot', 
      text: 'Hello, Sakhi! I am your personal health companion. I can help with menstrual health tips, hygiene advice, or just be here to listen. How are you feeling today?', 
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input;
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg, timestamp: time }]);
    setIsLoading(true);

    const botReply = await getHealthAdvice(userMsg);
    setMessages(prev => [...prev, { 
      role: 'bot', 
      text: botReply || 'I had a momentary connection issue. Please try again!',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-lg bg-white h-[95vh] mt-[2.5vh] mr-[2.5vh] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden animate-slide-up border border-rose-100">
        {/* Header */}
        <div className="p-8 bg-gradient-to-r from-rose-500 to-rose-600 text-white flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-2xl backdrop-blur-md flex items-center justify-center text-2xl relative">
               <i className="fa-solid fa-wand-magic-sparkles animate-pulse"></i>
               <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-teal-400 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h3 className="text-xl font-extrabold tracking-tight">Sakhi AI</h3>
              <div className="flex items-center gap-2">
                 <span className="w-2 h-2 bg-teal-300 rounded-full animate-pulse"></span>
                 <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">Always here for you</span>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="w-10 h-10 hover:bg-white/20 rounded-xl transition flex items-center justify-center text-xl"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Chat Body */}
        <div ref={scrollRef} className="flex-grow overflow-y-auto px-8 py-10 space-y-8 bg-gradient-to-b from-rose-50/20 to-white">
          {messages.map((m, i) => (
            <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
              <div className={`max-w-[85%] p-5 rounded-[2rem] text-[15px] leading-relaxed shadow-sm transition-all duration-300 ${m.role === 'user' ? 'bg-rose-500 text-white rounded-tr-none' : 'bg-white text-slate-700 rounded-tl-none border border-rose-100'}`}>
                {m.text}
              </div>
              <span className="text-[10px] font-bold text-slate-300 mt-2 px-2 uppercase tracking-widest">{m.timestamp}</span>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-rose-100 px-6 py-4 rounded-[1.5rem] rounded-tl-none shadow-sm flex gap-1.5 items-center">
                <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce [animation-delay:-.2s]"></div>
                <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce [animation-delay:-.4s]"></div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-8 border-t border-rose-100 bg-white">
          <div className="relative flex items-center gap-3">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything, Sakhi..."
              className="flex-grow px-6 py-4 bg-slate-50 rounded-2xl text-[15px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:bg-white transition-all shadow-inner"
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="w-14 h-14 bg-rose-500 text-white rounded-2xl flex items-center justify-center shadow-xl shadow-rose-200 hover:bg-rose-600 transition disabled:opacity-50 disabled:shadow-none active:scale-90"
            >
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
          <div className="flex items-center justify-center gap-2 mt-6">
            <i className="fa-solid fa-lock text-[10px] text-slate-300"></i>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">End-to-end encrypted & Private</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SakhiAI;
