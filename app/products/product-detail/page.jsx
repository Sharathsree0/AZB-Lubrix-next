'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const thumbnails = [
  { src: '/img/SBK-20L-IMAGE.png', alt: 'SBK Premium Container - Front View', label: 'SBK Premium Container - Front View' },
  { src: '/img/Opal-MIS-4700.png', alt: 'Specification Label', label: 'SBK Premium Container - Specification Label' },
  { src: '/img/SBK-20L-IMAGE.png', alt: 'Carton Bulk Packaging', label: 'Carton Bulk Packaging' },
  { src: '/img/SBK-20L-IMAGE.png', alt: 'API SP Certified Quality', label: 'API SP Certified Quality' },
];

export default function ProductDetailPage() {
  const [mainImage, setMainImage] = useState({
    src: thumbnails[0].src,
    alt: thumbnails[0].alt,
  });
  const [mainLabel, setMainLabel] = useState('SBK Premium Container');
  const [activeThumb, setActiveThumb] = useState(0);

  function selectThumb(idx) {
    setMainImage({ src: thumbnails[idx].src, alt: thumbnails[idx].alt });
    setMainLabel(thumbnails[idx].label);
    setActiveThumb(idx);
  }

  useEffect(() => {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    revealElements.forEach((el) => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, []);

  return (
    <>
      <section
        className="relative bg-[#030712] text-white py-12 md:py-16 font-sans border-b border-slate-900 overflow-hidden min-h-[350px] flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "linear-gradient(to right, rgba(3, 7, 18, 0.95) 30%, rgba(3, 7, 18, 0.6) 70%, rgba(3, 7, 18, 0.4) 100%), url('/img/bannerproduct.jpeg')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <nav className="flex items-center space-x-2 text-xs md:text-sm text-slate-400 mb-6 scroll-reveal delay-100">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
            <span className="hover:text-white transition cursor-default">Products</span>
            <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
            <Link href="/petrol-engine-pmco" className="hover:text-white transition">Automotive Oil</Link>
            <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
            <span className="text-white font-medium">Premium Petrol Engine PCMO</span>
          </nav>
          <div className="mb-4 scroll-reveal delay-200">
            <span className="inline-block bg-[#10b981] text-white text-[11px] md:text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded">Automotive Oil Series</span>
          </div>
          <div className="max-w-4xl space-y-4">
            <h1 className="text-white font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-tight md:leading-none scroll-reveal delay-300">
              Ultra Performance Synthetic <br className="hidden md:block" />
              <span>SAE 0W-16 API SP</span>
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-light pt-1 scroll-reveal delay-400">
              Advanced formulation engineered to deliver extreme engine protection, superior thermal stability, and maximum fuel economy under severe driving conditions.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12 md:py-20 font-sans overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-4 scroll-reveal reveal-left">
            <div className="bg-slate-50 rounded-2xl p-8 border border-gray-100 flex items-center justify-center min-h-[380px] shadow-sm relative overflow-hidden group">
              <div className="text-center w-full h-full flex flex-col items-center justify-center">
                <img src={mainImage.src} alt={mainImage.alt} className="max-h-64 w-auto object-contain mb-4 transition-transform duration-300 group-hover:scale-105" />
                <p className="text-slate-500 font-medium text-lg">{mainLabel}</p>
                <span className="inline-block mt-4 px-4 py-1 bg-brand-light text-brand-blue font-semibold text-xs rounded-full uppercase tracking-wider">SAE 0W-16</span>
              </div>
              <span className="absolute top-4 left-4 bg-brand-blue text-white font-bold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded">Fully Synthetic</span>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {thumbnails.map((thumb, idx) => (
                <button
                  key={idx}
                  onClick={() => selectThumb(idx)}
                  className={`gallery-thumb-button bg-slate-50 p-2 rounded-xl flex items-center justify-center h-20 transition-all duration-200 focus:outline-none ${activeThumb === idx ? 'border-2 border-brand-gold' : 'border border-gray-200 hover:border-gray-300'}`}
                >
                  <img src={thumb.src} alt={thumb.alt} className={`h-full w-auto object-contain pointer-events-none ${activeThumb === idx ? '' : 'opacity-70 hover:opacity-100 transition-opacity'}`} />
                </button>
              ))}
            </div>
            <p className="text-center text-[11px] text-slate-400 italic"><i className="fas fa-info-circle mr-1 text-brand-gold"></i> Click thumbnails to alternate views.</p>
          </div>

          <div className="lg:col-span-7 space-y-6 scroll-reveal reveal-right">
            <div>
              <span className="text-brand-gold font-semibold text-sm tracking-wider uppercase">Passenger Car Motor Oil (PCMO)</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-1">SBK Petrol Engine Oil</h2>
              <p className="text-xl font-medium text-slate-500 mt-2">SAE 0W-16 | API SP</p>
            </div>
            <p className="text-slate-600 leading-relaxed">
              SBK Petrol Engine Oil SAE 0W-16 is an ultra-low viscosity, advanced fully synthetic motor oil engineered specifically for modern, high-efficiency turbocharged gasoline direct-injection (TGDI) engines and hybrid vehicles. Formulated to meet the stringent API SP standards, it offers maximum fuel economy while delivering ultimate protection against low-speed pre-ignition (LSPI).
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200"><strong>Quantity:</strong> 1 Lit, 4 Lit, 5 Lit</div>
              <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200"><strong>Category:</strong> Fully Synthetic</div>
              <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200"><strong>Standard:</strong> API SP</div>
              <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200"><strong>Compliance:</strong> ILSAC GF-6B</div>
            </div>
            <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
              <a href="https://wa.me/971569966391" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-brand-blue hover:bg-opacity-90 text-white font-medium rounded-lg shadow-md transition duration-200 text-sm">
                Inquire About This Product
              </a>
              <a href="#" className="px-6 py-3 border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium rounded-lg transition duration-200 text-sm flex items-center gap-2">
                <i className="fas fa-file-pdf text-red-500"></i> Download
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 pt-12 border-t border-gray-100">
          <div className="space-y-6 scroll-reveal">
            <h2 className="text-2xl font-bold text-slate-800">Features &amp; Benefits</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 scroll-reveal delay-100"><i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i><span className="text-slate-600 text-sm"><strong>Maximum Fuel Economy:</strong> Extreme low-viscosity formulation reduces internal engine friction, delivering exceptional fuel savings.</span></li>
              <li className="flex items-start gap-3 scroll-reveal delay-200"><i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i><span className="text-slate-600 text-sm"><strong>LSPI Protection:</strong> Explicitly engineered to prevent Low-Speed Pre-Ignition (LSPI) events common in modern turbocharged engines.</span></li>
              <li className="flex items-start gap-3 scroll-reveal delay-300"><i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i><span className="text-slate-600 text-sm"><strong>Superior Cold-Starts:</strong> Fluidity at sub-zero temperatures protects critical engine components instantly during ignition.</span></li>
              <li className="flex items-start gap-3 scroll-reveal delay-400"><i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i><span className="text-slate-600 text-sm"><strong>Sludge &amp; Deposit Control:</strong> High-performance detergents keep engine internals clean to extend oil drain intervals.</span></li>
            </ul>
            <div className="bg-brand-light bg-opacity-40 p-5 rounded-xl border border-gray-200 mt-6 scroll-reveal delay-200">
              <h3 className="font-bold text-slate-800 text-sm mb-2">Typical Applications</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Recommended for modern Japanese, Korean, and European vehicles (such as Toyota, Honda, Nissan, and Lexus) where an SAE 0W-16 lubricant is specified. Ideally suited for modern Gasoline-Electric Hybrids and Plug-in Hybrids (PHEVs) that experience frequent stop-start cycles.</p>
            </div>
          </div>

          <div id="download-tds" className="space-y-4 scroll-reveal reveal-zoom">
            <h2 className="text-2xl font-bold text-slate-800">Typical Technical Data</h2>
            <div className="overflow-hidden border border-gray-200 rounded-xl shadow-sm">
              <table className="w-full text-left border-collapse bg-white text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-gray-200">
                    <th className="px-4 py-3 font-semibold text-slate-700">Physical Properties</th>
                    <th className="px-4 py-3 font-semibold text-slate-700">Method</th>
                    <th className="px-4 py-3 font-semibold text-slate-700 text-right">Typical Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-slate-600">
                  <tr className="hover:bg-slate-50/50"><td className="px-4 py-3 font-medium text-slate-800">Density @ 15°C, g/ml</td><td className="px-4 py-3 text-slate-400">ASTM D4052</td><td className="px-4 py-3 text-right font-mono">0.845</td></tr>
                  <tr className="hover:bg-slate-50/50"><td className="px-4 py-3 font-medium text-slate-800">Kinematic Viscosity @ 40°C, cSt</td><td className="px-4 py-3 text-slate-400">ASTM D445</td><td className="px-4 py-3 text-right font-mono">35.2</td></tr>
                  <tr className="hover:bg-slate-50/50"><td className="px-4 py-3 font-medium text-slate-800">Kinematic Viscosity @ 100°C, cSt</td><td className="px-4 py-3 text-slate-400">ASTM D445</td><td className="px-4 py-3 text-right font-mono">7.1</td></tr>
                  <tr className="hover:bg-slate-50/50"><td className="px-4 py-3 font-medium text-slate-800">Viscosity Index</td><td className="px-4 py-3 text-slate-400">ASTM D2270</td><td className="px-4 py-3 text-right font-mono">168</td></tr>
                  <tr className="hover:bg-slate-50/50"><td className="px-4 py-3 font-medium text-slate-800">Flash Point (COC), °C</td><td className="px-4 py-3 text-slate-400">ASTM D92</td><td className="px-4 py-3 text-right font-mono">224</td></tr>
                  <tr className="hover:bg-slate-50/50"><td className="px-4 py-3 font-medium text-slate-800">Pour Point, °C</td><td className="px-4 py-3 text-slate-400">ASTM D97</td><td className="px-4 py-3 text-right font-mono">-42</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400 italic">* Note: The values architecture mentioned above are typical values. Minor variations that do not affect product performance can occur during normal manufacturing.</p>
          </div>
        </div>
      </section>
    </>
  );
}