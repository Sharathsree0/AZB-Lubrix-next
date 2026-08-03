'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const images = [
  { src: '/img/Drum-Red-(2).png', label: 'SBK TRANSMISSION AND DRIVE TRAIN OIL TDTO SAE 10W  - 1L' },
  { src: '/img/Drum-Red-(2).png', label: 'SBK TRANSMISSION AND DRIVE TRAIN OIL TDTO SAE 10W  4L' },
  { src: '/img/Drum-Red-(2).png', label: 'SBK TRANSMISSION AND DRIVE TRAIN OIL TDTO SAE 10W  5L' },
];

export default function SbkTdto10wPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const elements = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        className="relative bg-[#030712] text-white py-12 md:py-16 font-sans border-b border-slate-900 overflow-hidden min-h-[350px] flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(3, 7, 18, 0.95) 30%, rgba(3, 7, 18, 0.6) 70%, rgba(3, 7, 18, 0.4) 100%), url('/productbanner/agriculture.jpeg')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <nav className="flex items-center space-x-2 text-xs md:text-sm text-slate-400 mb-6 scroll-reveal delay-100">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
            <Link href="/#products" className="hover:text-white transition">Products</Link>
            <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
            <Link href="/transmission-and-drive-train-oil" className="hover:text-white transition">AGRICULTRAL AND OFF-HIGHWAY LUBRICANTS</Link>
            <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
            <span className="text-white font-medium">TRANSMISSION AND DRIVE TRAIN OIL</span>
          </nav>

          <div className="mb-4 scroll-reveal delay-200">
            <span className="inline-block bg-[#10b981] text-white text-[11px] md:text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded">
              AGRICULTRAL AND OFF-HIGHWAY LUBRICANTS
            </span>
          </div>

          <div className="max-w-4xl space-y-4">
            <h1 className="text-white font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-tight md:leading-none scroll-reveal delay-300">
              SBK TRANSMISSION AND DRIVE TRAIN OIL TDTO <br className="hidden md:block" />
              <span>SAE 10W</span>
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-light pt-1 scroll-reveal delay-400">
              SBK TDTO SAE 10W is a high-performance transmission and drive train lubricant formulated with premium base oils and advanced additive technology. It is specifically designed to meet the requirements of heavy-duty off-road equipment, ensuring excellent performance in power shift transmissions, final drives, and wet brake systems. The formulation provides optimized friction control, extended component life, and reliable operation under severe working conditions.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12 md:py-20 font-sans overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          <div className="lg:col-span-5 space-y-4 scroll-reveal reveal-left">
            <div className="bg-slate-50 rounded-2xl p-8 border border-gray-100 flex items-center justify-center min-h-[380px] shadow-sm relative overflow-hidden group">
              <div className="text-center w-full h-full flex flex-col items-center justify-center">
                <img
                  src={images[activeIndex].src}
                  alt={images[activeIndex].label}
                  className="max-h-64 w-auto object-contain mb-4 transition-transform duration-300 group-hover:scale-105"
                />
                <p className="text-slate-500 font-medium text-lg">SBK TRANSMISSION AND DRIVE TRAIN OIL TDTO SAE 10W</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`p-2 rounded-xl flex items-center justify-center h-20 transition-all duration-200 focus:outline-none bg-slate-50 ${
                    i === activeIndex ? 'border-2 border-brand-gold' : 'border border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    className={`h-full w-auto object-contain pointer-events-none transition-opacity ${
                      i === activeIndex ? '' : 'opacity-70 hover:opacity-100'
                    }`}
                  />
                </button>
              ))}
            </div>

            <p className="text-center text-[11px] text-slate-400 italic">
              <i className="fas fa-info-circle mr-1 text-brand-gold"></i> Click thumbnails to alternate views.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6 scroll-reveal reveal-right">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-1">SBK TRANSMISSION AND DRIVE TRAIN OIL TDTO SAE 10W</h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              SBK TDTO SAE 10W is a high-performance transmission and drive train lubricant formulated with premium base oils and advanced additive technology. It is specifically designed to meet the requirements of heavy-duty off-road equipment, ensuring excellent performance in power shift transmissions, final drives, and wet brake systems. The formulation provides optimized friction control, extended component life, and reliable operation under severe working conditions.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                <strong>Quantity:</strong> 1L, 4L, 5L
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
              <a
                href="https://wa.me/97167447843?text=Hello,%20I%20would%20like%20to%20inquire%20about%20TRANSMISSION%20AND%20DRIVE%20TRAIN%20OIL%20TDTO%20SAE%2010w"
                target="_blank"
                className="px-6 py-3 bg-brand-blue hover:bg-opacity-90 text-white font-medium rounded-lg shadow-md transition duration-200 text-sm flex items-center gap-2"
              >
                <i className="fab fa-whatsapp text-lg"></i> Inquire About This Product
              </a>
              <a
                href="/pdf/09-TRANSMISSION-AND-DRIVE-TRAIN-OIL-TDTO-SAE-10W.pdf"
                download
                className="px-6 py-3 border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium rounded-lg transition duration-200 text-sm flex items-center gap-2"
              >
                <i className="fas fa-file-pdf text-red-500"></i> Download Product Data Sheet
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 pt-12 border-t border-gray-100">
          <div className="space-y-6 scroll-reveal">
            <h2 className="text-2xl font-bold text-slate-800">PERFORMANCE, FEATURES & BENEFITS</h2>
            <ul className="space-y-3">
              {[
                'Excellent friction control for smooth clutch and brake operation',
                'Superior wear protection for gears, bearings, and transmissions',
                'Enhanced oxidation and thermal stability',
                'Reduces brake noise and clutch slippage',
                'Good low-temperature fluidity for cold start conditions',
                'Extended oil drain intervals and reduced maintenance costs',
                'Protects against rust and corrosion',
              ].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-slate-600 text-sm"><strong>{f}</strong></span>
                </li>
              ))}
            </ul>

            <div className="bg-brand-light bg-opacity-40 p-5 rounded-xl border border-gray-200 mt-6">
              <h3 className="font-bold text-slate-800 text-sm mb-2">MAIN APPLICATIONS</h3>
              <ul className="text-slate-600 text-sm space-y-2 list-disc pl-4">
                <li><strong>Power shift transmissions</strong></li>
                <li><strong>Final drives, differentials, and axles</strong></li>
                <li><strong>Wet brake and clutch systems</strong></li>
                <li><strong>Hydraulic systems</strong></li>
                <li><strong>Off-road equipment including construction and mining machinery</strong></li>
              </ul>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-gray-200">
              <h3 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-2">SPECIFICATIONS & RECOMMENDATIONS</h3>
              <ul className="text-slate-600 text-sm space-y-2 list-disc pl-4">
                <li><strong>Caterpillar:</strong> TO-4 / TO-2</li>
                <li><strong>Allison:</strong> C-4</li>
                <li><strong>ZF:</strong> TE-ML 03C</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4 scroll-reveal reveal-zoom">
            <h2 className="text-2xl font-bold text-slate-800">PRODUCT SPECIFICATIONS</h2>
            <div className="overflow-hidden border border-gray-200 rounded-xl shadow-sm overflow-x-auto">
              <table className="w-full text-left border-collapse bg-white text-sm min-w-[500px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-gray-200">
                    <th className="px-4 py-3 font-semibold text-slate-700">TEST PARAMETER</th>
                    <th className="px-4 py-3 font-semibold text-slate-700">TEST METHOD</th>
                    <th className="px-4 py-3 font-semibold text-slate-700" colSpan={3}>TYPICAL VALUE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-slate-600">
                  {[
                    ['Appearance', 'Visual', 'Clear and bright'],
                    ['KV @ 40\u00b0C', 'ASTM D445', '30.0'],
                    ['KV @ 100\u00b0C', 'ASTM D445', '5.6'],
                    ['Viscosity Index', 'ASTM D2270', '128'],
                    ['Density @ 15\u00b0C', 'ASTM D4052', '0.8572'],
                    ['Flash Point', 'ASTM D92', '\u2265 220'],
                    ['Pour Point', 'ASTM D97', '-30'],
                  ].map(([param, method, value]) => (
                    <tr key={param} className="hover:bg-slate-50/50">
                      <td className="px-4 py-3 font-medium text-slate-800">{param}</td>
                      <td className="px-4 py-3 text-slate-400">{method}</td>
                      <td className="px-3 py-3 text-center font-mono">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400 italic">
              * Note: Typical value may vary slightly. Please contact your SBK representative for the current batch COA (Certificate Of Analysis)
            </p>
          </div>
        </div>
      </section>
    </>
  );
}