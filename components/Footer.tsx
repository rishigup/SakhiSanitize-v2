
import React from 'react';

const Footer: React.FC<{setCurrentView: (v: string) => void}> = ({ setCurrentView }) => {
  return (
    <footer className="bg-white border-t border-rose-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center text-white">
              <i className="fa-solid fa-lotus text-sm"></i>
            </div>
            <span className="text-xl font-bold text-rose-600">SakhiSanitize</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Empowering women through accessible hygiene, education, and professional care.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center hover:bg-rose-500 hover:text-white transition"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="w-8 h-8 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center hover:bg-rose-500 hover:text-white transition"><i className="fa-brands fa-twitter"></i></a>
            <a href="#" className="w-8 h-8 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center hover:bg-rose-500 hover:text-white transition"><i className="fa-brands fa-facebook"></i></a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><button onClick={() => setCurrentView('home')} className="hover:text-rose-500">About Us</button></li>
            <li><button onClick={() => setCurrentView('home')} className="hover:text-rose-500">Impact Stories</button></li>
            <li><button onClick={() => setCurrentView('home')} className="hover:text-rose-500">Careers</button></li>
            <li><button onClick={() => setCurrentView('home')} className="hover:text-rose-500">Press</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Support</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><button onClick={() => setCurrentView('home')} className="hover:text-rose-500">Help Center</button></li>
            <li><button onClick={() => setCurrentView('home')} className="hover:text-rose-500">Privacy Policy</button></li>
            <li><button onClick={() => setCurrentView('home')} className="hover:text-rose-500">Terms of Service</button></li>
            <li><button onClick={() => setCurrentView('home')} className="hover:text-rose-500">Contact Us</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Newsletter</h4>
          <p className="text-sm text-gray-500 mb-4">Join 10k+ sakhis for health tips.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="Email" className="bg-rose-50 border border-rose-100 rounded-xl px-4 py-2 text-sm flex-grow focus:outline-none focus:ring-1 focus:ring-rose-200" />
            <button className="bg-rose-500 text-white p-2 rounded-xl"><i className="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 border-t border-rose-50 pt-8">
        &copy; 2024 SakhiSanitize. Made with ❤️ for every woman.
      </div>
    </footer>
  );
};

export default Footer;
