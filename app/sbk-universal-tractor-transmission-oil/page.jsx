'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const thumbnails = [
  { src: '/img/Drum-Red-(2).png', alt: 'UNIVERSAL TRACTOR TRANSMISSION OIL UTTO SAE 10W30', label: 'UNIVERSAL TRACTOR TRANSMISSION OIL UTTO SAE 10W30 1L' },
  { src: '/img/Drum-Red-(2).png', alt: 'UNIVERSAL TRACTOR TRANSMISSION OIL UTTO SAE 10W30', label: 'UNIVERSAL TRACTOR TRANSMISSION OIL UTTO SAE 10W30 4l' },
  { src: '/img/Drum-Red-(2).png', alt: 'UNIVERSAL TRACTOR TRANSMISSION OIL UTTO SAE 10W30', label: 'UNIVERSAL TRACTOR TRANSMISSION OIL UTTO SAE 10W30 5L' },
];

export default function SbkUniversalTractorTransmissionOilPage() {
  const [mainImage, setMainImage] = useState({
    src: '/img/Drum-Red-(2).png',
    alt: 'UNIVERSAL TRACTOR TRANSMISSION OIL UTTO SAE 10W30',
  });
  const [mainLabel, setMainLabel] = useState('UNIVERSAL TRACTOR TRANSMISSION OIL UTTO SAE 10W30');
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
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(3, 7, 18, 0.95) 30%, rgba(3, 7, 18, 0.6) 70%, rgba(3, 7, 18, 0.4) 100%), url('/productbanner/agriculture.jpeg')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <nav className="flex items-center space-x-2 text-xs md:text-sm text-slate-400 mb-6 scroll-reveal delay-100">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
            <a href="#" className="hover:text-white transition">Products</a>
            <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
            <Link href="/universal-tractor-transmission-oil" className="hover:text-white transition">Agricultural &amp; Industrial Lubricants</Link>
            <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
            <Link href="/sbk-universal-tractor-transmission-oil" className="text-white font-medium">Universal Tractor Transmission Oil UTTO SAE 10W30</Link>
          </nav>

          <div className="mb-4 scroll-reveal delay-200">
            <span className="inline-block bg-[#10b981] text-white text-[11px] md:text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded">
              Agricultural &amp; Industrial Lubricants
            </span>
          </div>

          <div className="max-w-4xl space-y-4">
            <h1 className="text-white font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-tight md:leading-none scroll-reveal delay-300">
              UNIVERSAL TRACTOR TRANSMISSION OIL UTTO SAE 10W30 <br className="hidden md:block" />
              <span></span>
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-light pt-1 scroll-reveal delay-400">
              SBK UTTO 10W30 is a high-performance Universal Tractor Transmission Oil specially formulated with premium base oils and advanced additive technology to provide excellent lubrication, wear protection, smooth transmission operation, and reliable hydraulic performance in agricultural and off-highway equipment.
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
                  src={mainImage.src}
                  alt={mainImage.alt}
                  className="max-h-64 w-auto object-contain mb-4 transition-transform duration-300 group-hover:scale-105"
                />
                <p className="text-slate-500 font-medium text-lg">{mainLabel}</p>
                <span className="inline-block mt-4 px-4 py-1 bg-brand-light text-brand-blue font-semibold text-xs rounded-full uppercase tracking-wider">UTTO SAE 10W30</span>
              </div>
              <span className="absolute top-4 left-4 bg-brand-blue text-white font-bold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded"></span>
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

          <div className="lg:col-span-7 space-y-6 scroll-reveal reveal-right">
            <div>
              <span className="text-brand-gold font-semibold text-sm tracking-wider uppercase"></span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-1">UNIVERSAL TRACTOR TRANSMISSION OIL UTTO SAE 10W30</h2>
              <p className="text-xl font-medium text-slate-500 mt-2"></p>
            </div>

            <p className="text-slate-600 leading-relaxed">
              SBK UTTO 10W30 is a high-performance Universal Tractor Transmission Oil specially formulated with premium base oils and advanced additive technology to provide excellent lubrication, wear protection, smooth transmission operation, and reliable hydraulic performance in agricultural and off-highway equipment. It is designed for use in transmissions, hydraulic systems, wet brakes, final drives, and power take-off systems requiring UTTO type lubricants.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                <strong>Quantity:</strong> 1l, 4l, 5l
              </div>
              <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                <strong>Grade:</strong> SAE 10W30
              </div>
              <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                <strong>Category:</strong> Universal Tractor Transmission Oil
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
              <a
                href="https://wa.me/97167447843?text=Hello,%20I%20would%20like%20to%20inquire%20about%20UNIVERSAL%20TRACTOR%20TRANSMISSION%20OIL%20UTTO%20SAE%2010W30"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-brand-blue hover:bg-opacity-90 text-white font-medium rounded-lg shadow-md transition duration-200 text-sm flex items-center gap-2"
              >
                <i className="fab fa-whatsapp text-lg"></i> Inquire About This Product
              </a>
              <a
                href="/pdf/16-UTTO 10W 30 copy.pdf"
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
            <h2 className="text-2xl font-bold text-slate-800">PERFORMANCE, FEATURES &amp; BENEFITS</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                <span className="text-slate-600 text-sm"><strong>Excellent anti-wear protection</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                <span className="text-slate-600 text-sm"><strong>Smooth wet brake and clutch performance</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                <span className="text-slate-600 text-sm"><strong>Reduces brake chatter and noise</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                <span className="text-slate-600 text-sm"><strong>Good oxidation and thermal stability</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                <span className="text-slate-600 text-sm"><strong>Protects against rust and corrosion</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                <span className="text-slate-600 text-sm"><strong>Excellent hydraulic response</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                <span className="text-slate-600 text-sm"><strong>Good low-temperature fluidity</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                <span className="text-slate-600 text-sm"><strong>Extends equipment service life</strong></span>
              </li>
            </ul>

            <div className="bg-brand-light bg-opacity-40 p-5 rounded-xl border border-gray-200 mt-6">
              <h3 className="font-bold text-slate-800 text-sm mb-2">MAIN APPLICATIONS</h3>
              <ul className="text-slate-600 text-sm space-y-2 list-disc pl-4">
                <li><strong>Agricultural tractors</strong></li>
                <li><strong>Hydraulic systems</strong></li>
                <li><strong>Power shift transmissions</strong></li>
                <li><strong>Wet brake and wet clutch systems</strong></li>
                <li><strong>Final drives and differentials</strong></li>
                <li><strong>Off-highway and construction equipment</strong></li>
                <li><strong>Farm machinery requiring UTTO 10W30 fluid</strong></li>
              </ul>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-gray-200">
              <h3 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-2">SPECIFICATIONS &amp; RECOMMENDATIONS</h3>
              <ul className="text-slate-600 text-sm space-y-1 list-disc pl-4">
                <li>John Deere J20C</li>
                <li>Massey Ferguson CMS M1145/M1143</li>
                <li>CNH MAT 3525/3505</li>
                <li>Ford M2C134-D</li>
                <li>Caterpillar TO-2</li>
                <li>Allison C-4</li>
                <li>API GL-4</li>
                <li>Denison HF-0/HF-1/HF-2</li>
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
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-4 py-3 font-medium text-slate-800">Appearance</td>
                    <td className="px-4 py-3 text-slate-400">Visual</td>
                    <td className="px-3 py-3 text-center font-mono font-medium text-slate-800">Clear and bright</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-4 py-3 font-medium text-slate-800">KV @ 40&deg;C</td>
                    <td className="px-4 py-3 text-slate-400">ASTM D445</td>
                    <td className="px-3 py-3 text-center font-mono">58</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-4 py-3 font-medium text-slate-800">KV @ 100&deg;C</td>
                    <td className="px-4 py-3 text-slate-400">ASTM D445</td>
                    <td className="px-3 py-3 text-center font-mono">9.8</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-4 py-3 font-medium text-slate-800">Viscosity Index</td>
                    <td className="px-4 py-3 text-slate-400">ASTM D2270</td>
                    <td className="px-3 py-3 text-center font-mono">155</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-4 py-3 font-medium text-slate-800">Density @ 15&deg;C</td>
                    <td className="px-4 py-3 text-slate-400">ASTM D4052</td>
                    <td className="px-3 py-3 text-center font-mono">0.8634</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-4 py-3 font-medium text-slate-800">Flash Point</td>
                    <td className="px-4 py-3 text-slate-400">ASTM D92</td>
                    <td className="px-3 py-3 text-center font-mono">&ge;210</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="px-4 py-3 font-medium text-slate-800">Pour Point</td>
                    <td className="px-4 py-3 text-slate-400">ASTM D97</td>
                    <td className="px-3 py-3 text-center font-mono">-39</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400 italic">
              * Note: Typical value, may vary slightly. Please contact your SBK representative for the current batch COA (Certificate Of Analysis)
            </p>
          </div>
        </div>
      </section>
    </>
  );
}