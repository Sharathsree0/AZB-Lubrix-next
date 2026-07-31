'use client';

import { useEffect } from 'react';

export default function OurTeamPage() {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.slide-from-left');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    animatedElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        className="bg-[#030712] text-white py-12 md:py-16 font-sans border-b border-slate-900"
        style={{ backgroundImage: "url('/img/ourteam5.jpeg')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-xs md:text-sm text-slate-400 mb-6">
            <a href="#home" className="hover:text-white transition">Home</a>
            <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
            <a href="#aboutus" className="hover:text-white transition">About Us</a>
            <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
            <span className="text-white font-medium">Our Team</span>
          </nav>

          <br /><br /><br />

          <div className="max-w-4xl space-y-4">
            <h1 className="text-white font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-tight md:leading-none">
              Our Team
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-light pt-1">
              Quality is never an accident — it is always the result of high intention, sincere effort, intelligent direction, and skillful execution.
            </p>
          </div>
        </div>
      </section>

      <section id="team" className="max-w-7xl mx-auto px-4 py-20 md:py-28 font-sans bg-slate-50" style={{ paddingTop: '25px', paddingBottom: '25px' }}>
        <div className="max-w-5xl mx-auto bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm mb-20 flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-5/12 h-80 sm:h-96 rounded-2xl overflow-hidden relative shadow-md flex-shrink-0 bg-slate-100">
            <img src="/img/chairman.png" alt="Abdul Zahir Bashir" className="w-full h-full object-cover" />
          </div>

          <div className="w-full lg:w-7/12 space-y-6 text-left">
            <div>
              <span className="text-xs font-extrabold text-[#1FA463] uppercase tracking-widest">Chairman&apos;s Message</span>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mt-1">Abdul Zahir Bashir</h3>
            </div>

            <div className="space-y-4 text-slate-600 text-sm md:text-base font-light leading-relaxed border-t border-b border-slate-100 py-6">
              <p>
                Visionary entrepreneur and philanthropist with over 50 years of business legacy across the region. Despite diverse interests at each of AZB group&apos;s Divisions, we share the best business practices and focus on results, leading to bold &amp; sound decisions. We are constantly sharpening our strategies to be industry leaders we are formed to be. Our goal is to be a constantly growing company that creates value for our shareholders, stakeholder, and the economy.
              </p>
            </div>

            <div className="pt-2">
              <p className="font-serif italic text-xl text-slate-800">Abdul Zahir Bashir</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">Founder &amp; Chairman – AZB Group</p>
            </div>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-extrabold text-[#1FA463] uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 inline-block">
            Our Leadership Team
          </span>
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            MEET OUR CORE TEAM
          </h3>
          <div className="w-12 h-1 bg-[#1FA463] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { img: '/img/MD.png', name: 'Karim Bashiri', role: 'Managing Director', dept: 'AZB ENERGY FZC' },
            { img: '/img/GM.png', name: 'Ahmad Bashiri', role: 'CFO', dept: 'AZB ENERGY FZC' },
            { img: '/img/vikas.jpeg', name: 'Vikas J Shahani', role: 'General Manager', dept: 'AZB ENERGY FZC' },
            { img: '/img/AjithArulraj.jpeg', name: 'Ajith Arulraj', role: 'Manager', dept: 'Lab & QC' },
          ].map((person) => (
            <div key={person.name} className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col text-center group">
              <div className="w-48 h-48 mx-auto rounded-full bg-slate-50 overflow-hidden relative mb-6 shadow-inner">
                <img src={person.img} alt={person.name} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="space-y-1 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="font-black text-slate-900 text-lg">{person.name}</h4>
                  <div className="w-8 h-0.5 bg-[#1FA463] mx-auto my-2"></div>
                  <p className="text-xs font-extrabold text-[#1FA463] uppercase tracking-wide">{person.role}</p>
                </div>
                <p className="text-slate-500 text-xs pt-4 mt-4 border-t border-slate-100 leading-relaxed font-light">{person.dept}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-3xl overflow-hidden bg-slate-900 text-center py-14 px-6 shadow-xl relative">
          <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: "url('/img/building-bg.jpg')" }}></div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-3">
            <div className="text-[#1FA463] text-2xl mb-1">
              <i className="fas fa-users"></i>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-wider uppercase">
              TOGETHER WE BUILD EXCELLENCE
            </h3>
            <div className="w-12 h-1 bg-[#1FA463] mx-auto rounded-full"></div>
            <p className="text-slate-400 text-xs md:text-sm font-light tracking-wide pt-1">
              Driven by teamwork. Focused on tomorrow.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}