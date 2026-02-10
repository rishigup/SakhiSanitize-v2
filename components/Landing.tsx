
import React from 'react';
import { SERVICES } from '../constants';

interface LandingProps {
  onCtaClick: () => void;
}

const Landing: React.FC<LandingProps> = ({ onCtaClick }) => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 px-6">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-soft -z-10 rounded-bl-[10rem]"></div>
        
        {/* Abstract shapes */}
        <div className="absolute top-40 right-20 w-64 h-64 bg-rose-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-teal-100/40 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 rounded-full border border-rose-100">
              <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">Empowering 50,000+ Women</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-extrabold text-slate-900 leading-[1.05]">
              Health that <br/>
              <span className="text-gradient italic font-serif">Honors</span> You.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-500 max-w-xl leading-relaxed">
              SakhiSanitize is redefining women's healthcare. From eco-friendly hygiene kits to private expert consultations, we provide a sanctuary for your wellness journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={onCtaClick}
                className="px-10 py-4 bg-rose-500 text-white rounded-2xl font-bold text-lg hover:bg-rose-600 transition shadow-2xl shadow-rose-200 flex items-center justify-center gap-3 active:scale-95"
              >
                Join the Community
                <i className="fa-solid fa-arrow-right text-sm"></i>
              </button>
              <button className="px-10 py-4 bg-white border border-slate-200 text-slate-600 rounded-2xl font-bold text-lg hover:bg-slate-50 transition shadow-sm flex items-center justify-center gap-3">
                Watch Story
                <i className="fa-solid fa-play text-xs text-rose-400"></i>
              </button>
            </div>

            <div className="pt-8 flex items-center gap-6 border-t border-slate-100">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/150?u=sakhi${i}`} className="w-12 h-12 rounded-2xl border-4 border-white object-cover" />
                ))}
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">Loved by Sakhis globally</div>
                <div className="flex items-center gap-1 text-yellow-400 text-xs">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <span className="text-slate-400 font-medium ml-2">4.9/5 from 2k reviews</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="absolute -inset-10 bg-gradient-to-tr from-rose-200 to-teal-100 rounded-full blur-[80px] opacity-40 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400" className="w-full aspect-[3/4] object-cover rounded-[2.5rem] shadow-2xl border-4 border-white" />
                <div className="bg-white p-6 rounded-3xl shadow-xl border border-rose-50 flex items-center gap-4">
                  <div className="w-10 h-10 bg-teal-500 text-white rounded-xl flex items-center justify-center"><i className="fa-solid fa-shield-check"></i></div>
                  <span className="text-xs font-bold text-slate-700">100% Secure & Private</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-rose-500 p-6 rounded-3xl shadow-xl text-white">
                  <div className="text-3xl font-black mb-1">24/7</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest opacity-80">Doctor Support</div>
                </div>
                <img src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&q=80&w=400" className="w-full aspect-[4/5] object-cover rounded-[2.5rem] shadow-2xl border-4 border-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <span className="text-rose-500 font-bold text-sm tracking-widest uppercase">Our Ecosystem</span>
          <h2 className="text-5xl font-extrabold text-slate-900 leading-tight">Everything You Need <br/> To <span className="text-gradient">Thrive</span>.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((s, idx) => (
            <div key={s.id} className={`p-10 rounded-[2.5rem] border border-slate-100 hover:border-rose-100 hover:shadow-2xl hover:shadow-rose-100 transition-all group animate-slide-up`} style={{animationDelay: `${idx * 0.1}s`}}>
              <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500 mb-8 group-hover:bg-rose-500 group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-sm">
                <i className={`fa-solid ${s.icon} text-3xl`}></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{s.description}</p>
              {s.price && (
                <div className="inline-block px-4 py-2 bg-rose-50 text-rose-600 rounded-xl font-bold text-xs">
                  {s.price}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Verification Section */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-extrabold leading-tight">Expertise You Can <br/><span className="text-rose-400 font-serif italic">Trust.</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed">Every kit is medically vetted, and every doctor is board-certified. We bridge the gap between quality care and accessibility.</p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                <div className="text-4xl font-black text-rose-500 mb-2">100%</div>
                <div className="text-xs font-bold text-slate-300 uppercase tracking-widest">Natural Materials</div>
              </div>
              <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                <div className="text-4xl font-black text-rose-500 mb-2">150+</div>
                <div className="text-xs font-bold text-slate-300 uppercase tracking-widest">On-board Doctors</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-white/5 rounded-full border border-white/10 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600" className="w-[85%] aspect-square object-cover rounded-full border-8 border-white/10" />
            </div>
            <div className="absolute top-10 -right-4 bg-white p-6 rounded-2xl text-slate-900 shadow-2xl animate-float">
               <div className="flex gap-1 text-yellow-400 mb-2">
                 <i className="fa-solid fa-star"></i>
                 <i className="fa-solid fa-star"></i>
                 <i className="fa-solid fa-star"></i>
                 <i className="fa-solid fa-star"></i>
                 <i className="fa-solid fa-star"></i>
               </div>
               <p className="text-xs font-bold italic">"Life-changing support!"</p>
               <span className="text-[10px] font-medium opacity-60">- Dr. Emily S.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Team - The Visionaries */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <span className="text-rose-500 font-bold text-sm tracking-widest uppercase">The Minds Behind</span>
          <h2 className="text-5xl font-extrabold text-slate-900">Founding Team</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { name: 'Dr. Ananya Ray', role: 'CEO & Gynecologist', desc: 'Over 15 years in women reproductive health.', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400' },
            { name: 'Maya Kapoor', role: 'Chief of Operations', desc: 'Expert in community healthcare distribution.', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400' },
            { name: 'Dr. Sarah Mitchell', role: 'Clinical Lead', desc: 'Leading the medicine support initiative.', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400' }
          ].map((member, i) => (
            <div key={i} className="group text-center">
              <div className="relative mb-8 mx-auto w-64 h-80 overflow-hidden rounded-[3rem] shadow-xl group-hover:-translate-y-4 transition-all duration-500">
                <img src={member.img} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-600/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end justify-center pb-8">
                  <div className="flex gap-4">
                    <button className="w-10 h-10 bg-white rounded-xl text-rose-500 flex items-center justify-center hover:bg-rose-500 hover:text-white transition"><i className="fa-brands fa-linkedin-in"></i></button>
                    <button className="w-10 h-10 bg-white rounded-xl text-rose-500 flex items-center justify-center hover:bg-rose-500 hover:text-white transition"><i className="fa-brands fa-twitter"></i></button>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-2">{member.name}</h3>
              <p className="text-rose-500 font-bold text-sm mb-4 uppercase tracking-widest">{member.role}</p>
              <p className="text-slate-500 text-sm max-w-xs mx-auto">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-rose-500 to-rose-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-rose-200">
           <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
           <div className="relative z-10 space-y-10">
              <h2 className="text-5xl font-black">Your Health Journey <br/>Starts Here.</h2>
              <p className="text-rose-100 text-lg max-w-2xl mx-auto opacity-90 font-medium">Join thousands of women who have found comfort, trust, and expert care with SakhiSanitize.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <button onClick={onCtaClick} className="px-12 py-5 bg-white text-rose-600 rounded-2xl font-bold text-xl hover:scale-105 transition active:scale-95 shadow-xl">Get Started Now</button>
                 <button className="px-12 py-5 bg-rose-400/30 text-white border border-rose-300 rounded-2xl font-bold text-xl hover:bg-rose-400/50 transition">Speak to an Expert</button>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
