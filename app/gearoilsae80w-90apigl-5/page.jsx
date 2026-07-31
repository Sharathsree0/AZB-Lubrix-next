'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const thumbnails = [
  { src: '/productimage/1L-gear-oil-sae-80w-90-api-gl-5.png', alt: 'SBK GEAR OIL SAE 80W-90, API GL-5 1L', label: 'SBK GEAR OIL SAE 80W-90, API GL-5 - 1L' },
  { src: '/productimage/4L-gear-oil-sae-80w-90-api-gl-5.png', alt: 'SBK GEAR OIL SAE 80W-90, API GL-5 4L', label: 'SBK GEAR OIL SAE 80W-90, API GL-5 4L' },
  { src: '/productimage/5L-gear-oil-sae-80w-90-api-gl-5.png', alt: 'SBK GEAR OIL SAE 80W-90, API GL-5 5L', label: 'SBK GEAR OIL SAE 80W-90, API GL-5 5L' },
];

export default function SbkGearOilSae80w90Page() {
  // Main viewport starts on the 5L image/label (index 2)
  const [mainImage, setMainImage] = useState({
    src: thumbnails[2].src,
    alt: thumbnails[2].alt,
  });
  const [mainLabel, setMainLabel] = useState('SBK GEAR OIL');
  const [activeThumb, setActiveThumb] = useState(2);

  function selectThumb(idx) {
    setMainImage({ src: thumbnails[idx].src, alt: thumbnails[idx].alt });
    setMainLabel(thumbnails[idx].label);
    setActiveThumb(idx);
  }

  // Scroll-reveal observer — local to this page
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
      {/* Hero Banner Section */}
      <section
        className="relative bg-[#030712] text-white py-12 md:py-16 font-sans border-b border-slate-900 overflow-hidden min-h-[350px] flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(3, 7, 18, 0.95) 30%, rgba(3, 7, 18, 0.6) 70%, rgba(3, 7, 18, 0.4) 100%), url('/productbanner/gear-oil.jpeg')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <nav className="flex items-center space-x-2 text-xs md:text-sm text-slate-400 mb-6 scroll-reveal delay-100">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
            <span className="hover:text-white transition cursor-default">Products</span>
            <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
            <Link href="/petrol-engine-pmco" className="hover:text-white transition">Automotive Oil</Link>
            <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
            <Link href="/gear-oil" className="text-white font-medium">Gear Oil</Link>
          </nav>

          <div className="mb-4 scroll-reveal delay-200">
            <span className="inline-block bg-[#10b981] text-white text-[11px] md:text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded">
              Automotive Oil Series
            </span>
          </div>

          <div className="max-w-4xl space-y-4">
            <h1 className="text-white font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-tight md:leading-none scroll-reveal delay-300">
              SBK GEAR OIL <br className="hidden md:block" />
              <span>SAE 80W-90, API GL-5</span>
            </h1>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-light pt-1 scroll-reveal delay-400">
              High-quality automotive gear lubricant formulated to provide robust wear protection, excellent thermal stability, and reliable gear synchronization under mild to severe operational conditions.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12 md:py-20 font-sans overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Gallery Side */}
          <div className="lg:col-span-5 space-y-4 scroll-reveal reveal-left">
            <div className="bg-slate-50 rounded-2xl p-8 border border-gray-100 flex items-center justify-center min-h-[380px] shadow-sm relative overflow-hidden group">
              <div className="text-center w-full h-full flex flex-col items-center justify-center">
                <img
                  src={mainImage.src}
                  alt={mainImage.alt}
                  className="max-h-64 w-auto object-contain mb-4 transition-transform duration-300 group-hover:scale-105"
                />
                <p className="text-slate-500 font-medium text-lg">{mainLabel}</p>
                <span className="inline-block mt-4 px-4 py-1 bg-brand-light text-brand-blue font-semibold text-xs rounded-full uppercase tracking-wider">
                  SAE 80W-90
                </span>
              </div>
              <span className="absolute top-4 left-4 bg-brand-blue text-white font-bold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded">
                High-Performance Multi-Grade Gear Oil
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {thumbnails.map((thumb, idx) => (
                <button
                  key={idx}
                  onClick={() => selectThumb(idx)}
                  className={`gallery-thumb-button bg-slate-50 p-2 rounded-xl flex items-center justify-center h-20 transition-all duration-200 focus:outline-none ${
                    activeThumb === idx ? 'border-2 border-brand-gold' : 'border border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={thumb.src}
                    alt={thumb.alt}
                    className={`h-full w-auto object-contain pointer-events-none ${
                      activeThumb === idx ? '' : 'opacity-70 hover:opacity-100 transition-opacity'
                    }`}
                  />
                </button>
              ))}
            </div>

            <p className="text-center text-[11px] text-slate-400 italic">
              <i className="fas fa-info-circle mr-1 text-brand-gold"></i> Click thumbnails to alternate views.
            </p>
          </div>

          {/* Product Info Side */}
          <div className="lg:col-span-7 space-y-6 scroll-reveal reveal-right">
            <div>
              <span className="text-brand-gold font-semibold text-sm tracking-wider uppercase">
                High-Performance Multi-Grade Gear Oil
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-1">
                SBK GEAR OIL SAE 80W-90, API GL-5
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Gear Oil SAE 80W-90 API GL-5 is a high-performance, multi-grade gear oil formulated from premium base oils and advanced sulfur-phosphorus extreme pressure (EP) additives to provide outstanding protection under severe operating conditions. It is specifically designed for hypoid gears, differentials, and final drives operating under high load, shock, and high-speed conditions, delivering excellent load-carrying capacity and wear protection. The oil offers superior thermal and oxidation stability, effective rust and corrosion protection, and good low-temperature fluidity for improved cold-start performance. Its balanced formulation ensures reliable lubrication, reduced gear noise, and extended component life in both automotive and heavy-duty applications.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                <strong>Quantity:</strong> 1 Lit, 4 Lit, 5 Lit
              </div>
              <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                <strong>Category:</strong> High-Performance Multi-Grade Gear Oil
              </div>
              <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                <strong>Standard:</strong> API GL-5, SAE J306
              </div>
              <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                <strong>Viscosity:</strong> SAE 80W-90
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
              <a
                href="https://wa.me/97167447843?text=Hello,%20I%20would%20like%20to%20inquire%20about%20GEAR%20OIL%20SAE%2080W-90%20API%20GL-5."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-brand-blue hover:bg-opacity-90 text-white font-medium rounded-lg shadow-md transition duration-200 text-sm flex items-center gap-2"
              >
                <i className="fab fa-whatsapp text-lg"></i> Inquire About This Product
              </a>
              <a
                href="/pdf/06_GEAR OIL SAE 80W-90 API GL-5 copy.pdf"
                download
                className="px-6 py-3 border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium rounded-lg transition duration-200 text-sm flex items-center gap-2"
              >
                <i className="fas fa-file-pdf text-red-500"></i> Download Product Data Sheet
              </a>
            </div>
          </div>
        </div>

        {/* Features & Specifications Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 pt-12 border-t border-gray-100">
          <div className="space-y-6 scroll-reveal">
            <h2 className="text-2xl font-bold text-slate-800">PERFORMANCE, FEATURES &amp; BENEFITS</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                <span className="text-slate-600 text-sm"><strong>Excellent load-carrying capacity and EP protection</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                <span className="text-slate-600 text-sm"><strong>Excellent oxidation and thermal stability</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                <span className="text-slate-600 text-sm"><strong>Effective rust and corrosion protection</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                <span className="text-slate-600 text-sm"><strong>Good foam control and seal compatibility.</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                <span className="text-slate-600 text-sm"><strong>Superior anti-wear performance and film strength.</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                <span className="text-slate-600 text-sm"><strong>Effective rust and corrosion protection</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                <span className="text-slate-600 text-sm"><strong>Improved low-temperature flow compared to monograde oils</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                <span className="text-slate-600 text-sm"><strong>Reduces gear noise and vibration</strong></span>
              </li>
            </ul>

            <div className="bg-brand-light bg-opacity-40 p-5 rounded-xl border border-gray-200 mt-6">
              <h3 className="font-bold text-slate-800 text-sm mb-2">MAIN APPLICATIONS</h3>
              <ul className="text-slate-600 text-sm space-y-2 list-disc pl-4">
                <li><strong>Heavy-duty manual transmissions</strong></li>
                <li><strong>Off-highway equipment in construction, mining, and agriculture</strong></li>
                <li><strong>Axles in passenger cars, trucks, and buses</strong></li>
                <li><strong>Suitable for high-load, high-speed, and shock-load conditions</strong></li>
              </ul>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-gray-200">
              <h3 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-2">SPECIFICATIONS &amp; RECOMMENDATIONS</h3>
              <ul className="text-slate-600 text-sm space-y-1 list-disc pl-4">
                <li>API: GL-5</li>
                <li>SAE J306</li>
              </ul>
            </div>
          </div>

          <div id="download-tds" className="space-y-4 scroll-reveal reveal-zoom">
            <h2 className="text-2xl font-bold text-slate-800">PRODUCT SPECIFICATIONS</h2>
            <div className="overflow-hidden border border-gray-200 rounded-xl shadow-sm">
              <table className="w-full text-left border-collapse bg-white text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-gray-200">
                    <th className="px-4 py-3 font-semibold text-slate-700">TEST PARAMETER</th>
                    <th className="px-4 py-3 font-semibold text-slate-700">TEST METHOD</th>
                    <th className="px-4 py-3 font-semibold text-slate-700 text-right">TYPICAL VALUE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-slate-600">
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-4 py-3 font-medium text-slate-800">Appearance</td>
                    <td className="px-4 py-3 text-slate-400">Visual</td>
                    <td className="px-4 py-3 text-right font-mono">Clear and bright</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-4 py-3 font-medium text-slate-800">KV @ 40°C</td>
                    <td className="px-4 py-3 text-slate-400">ASTM D445</td>
                    <td className="px-4 py-3 text-right font-mono">180</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-4 py-3 font-medium text-slate-800">KV @ 100°C</td>
                    <td className="px-4 py-3 text-slate-400">ASTM D445</td>
                    <td className="px-4 py-3 text-right font-mono">16.10</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-4 py-3 font-medium text-slate-800">Viscosity Index</td>
                    <td className="px-4 py-3 text-slate-400">ASTM D2270</td>
                    <td className="px-4 py-3 text-right font-mono">&ge; 90</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-4 py-3 font-medium text-slate-800">Density @ 15°C</td>
                    <td className="px-4 py-3 text-slate-400">ASTM D4052</td>
                    <td className="px-4 py-3 text-right font-mono">0.888</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-4 py-3 font-medium text-slate-800">Flash Point</td>
                    <td className="px-4 py-3 text-slate-400">ASTM D92</td>
                    <td className="px-4 py-3 text-right font-mono">&ge; 230</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-4 py-3 font-medium text-slate-800">Pour Point</td>
                    <td className="px-4 py-3 text-slate-400">ASTM D97</td>
                    <td className="px-4 py-3 text-right font-mono">-27</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400 italic">
              * Note: Typical value; may vary slightly. Please contact your SBK representative for the current batch COA (Certificate Of Analysis)
            </p>
          </div>
        </div>
      </section>
    </>
  );
}