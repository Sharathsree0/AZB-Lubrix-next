'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const images = [
  { src: '/img/Drum-Red-(2).png', label: 'SUPER TRACTOR OIL UNIVERSAL STOU SAE 10W40' },
  { src: '/img/Drum-Red-(2).png', label: 'SUPER TRACTOR OIL UNIVERSAL STOU SAE 10W40' },
  { src: '/img/Drum-Red-(2).png', label: 'SUPER TRACTOR OIL UNIVERSAL STOU SAE 10W40' },
];

export default function SbkStou10w40Page() {
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
            <Link href="/super-tractor-oil-universal" className="hover:text-white transition">Agricultural & Industrial Lubricants</Link>
            <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
            <span className="text-white font-medium">SUPER TRACTOR OIL UNIVERSAL STOU SAE 10W40</span>
          </nav>

          <div className="mb-4 scroll-reveal delay-200">
            <span className="inline-block bg-[#10b981] text-white text-[11px] md:text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded">
              Agricultural & Industrial Lubricants
            </span>
          </div>

          <div className="max-w-4xl space-y-4">
            <h1 className="text-white font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-tight md:leading-none scroll-reveal delay-300">
              SUPER TRACTOR OIL UNIVERSAL STOU SAE 10W40
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-light pt-1 scroll-reveal delay-400">
              SBK STOU SAE 10W-40 is a premium quality, multi-functional lubricant formulated with high-quality base oils and advanced additive technology. It is designed to provide reliable performance in engines, transmissions, hydraulic systems, and wet brake systems of modern agricultural and off-road equipment.
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
                <p className="text-slate-500 font-medium text-lg">SUPER TRACTOR OIL UNIVERSAL STOU SAE 10W40</p>
                <span className="inline-block mt-4 px-4 py-1 bg-brand-light text-brand-blue font-semibold text-xs rounded-full uppercase tracking-wider">
                  STOU SAE 10W40
                </span>
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-1">SUPER TRACTOR OIL UNIVERSAL STOU SAE 10W40</h2>
            </div>

            <p className="text-slate-600 leading-relaxed">
              SBK STOU SAE 10W-40 is a premium quality, multi-functional lubricant formulated with high-quality base oils and advanced additive technology. It is designed to provide reliable performance in engines, transmissions, hydraulic systems, and wet brake systems of modern agricultural and off-road equipment. This universal oil simplifies lubrication by enabling the use of a single product across multiple applications while ensuring extended equipment life and operational efficiency.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                <strong>Quantity:</strong> 1l, 4l, 5l
              </div>
              <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                <strong>Grade:</strong> SAE 10W40
              </div>
              <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                <strong>Category:</strong> Super Tractor Oil Universal (STOU)
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
              <a
                href="https://wa.me/971569966391?text=Hello,%20I%20would%20like%20to%20inquire%20about%20SUPER%20TRACTOR%20OIL%20UNIVERSAL%20STOU%20SAE%2010W40"
                target="_blank"
                className="px-6 py-3 bg-brand-blue hover:bg-opacity-90 text-white font-medium rounded-lg shadow-md transition duration-200 text-sm flex items-center gap-2"
              >
                <i className="fab fa-whatsapp text-lg"></i> Inquire About This Product
              </a>
              <a
                href="/pdf/17-STOU 10W 40 copy.pdf"
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
                'Multi-purpose oil for engine, transmission, and hydraulics',
                'Excellent wear protection and long equipment life',
                'High thermal and oxidation stability',
                'Superior detergency and sludge control',
                'Smooth wet brake operation',
                'Good low-temperature fluidity for cold start performance',
                'Corrosion and rust protection',
                'Reduced inventory',
              ].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                  <span className="text-slate-600 text-sm"><strong>{f}</strong></span>
                </li>
              ))}
            </ul>

            <div className="bg-brand-light bg-opacity-40 p-5 rounded-xl border border-gray-200 mt-6">
              <h3 className="font-bold text-slate-800 text-sm mb-2">MAIN APPLICATIONS</h3>
              <ul className="text-slate-600 text-sm space-y-2 list-disc pl-4">
                <li><strong>Agricultural tractors and farm machinery</strong></li>
                <li><strong>Diesel and gasoline engines</strong></li>
                <li><strong>Gearboxes and transmissions</strong></li>
                <li><strong>Hydraulic systems and hydrostatic drives</strong></li>
                <li><strong>Wet brake systems and PTO units</strong></li>
              </ul>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-gray-200">
              <h3 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-2">SPECIFICATIONS & RECOMMENDATIONS</h3>
              <ul className="text-slate-600 text-sm space-y-1 list-disc pl-4">
                <li>John Deere J20C</li>
                <li>Massey Ferguson CMS M1145/M1143</li>
                <li>Ford M2C159B/C</li>
                <li>Caterpillar TO-2/TO-4</li>
                <li>Allison C-4</li>
                <li>API GL-4</li>
                <li>ZF TE-ML 06B/07B</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4 scroll-reveal reveal-zoom">
            <h2 className="text-2xl font-bold text-slate-800">PRODUCT SPECIFICATIONS</h2>
            <div className="overflow-hidden border border-gray-200 rounded-xl shadow-sm overflow-x-auto">
              <table className="w-full text-left border-collapse bg-white text-sm min-w-[450px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-gray-200">
                    <th className="px-4 py-3 font-semibold text-slate-700">TEST PARAMETER</th>
                    <th className="px-4 py-3 font-semibold text-slate-700">TEST METHOD</th>
                    <th className="px-4 py-3 font-semibold text-slate-700 text-center">TYPICAL VALUE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-slate-600">
                  {[
                    ['Appearance', 'Visual', 'Clear and bright'],
                    ['KV @ 40\u00b0C', 'ASTM D445', '92'],
                    ['KV @ 100\u00b0C', 'ASTM D445', '14.2'],
                    ['Viscosity Index', 'ASTM D2270', '159'],
                    ['Density @ 15\u00b0C', 'ASTM D4052', '0.8618'],
                    ['Flash Point', 'ASTM D97', '\u2265210'],
                    ['Pour Point', 'ASTM D97', '-39'],
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