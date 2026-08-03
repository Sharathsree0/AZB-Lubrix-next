'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const GALLERY_IMAGES = [
  {
    src: '/productimage/1L_OPAL-TX--SAE-15W-40-API-CF-4-Can.png',
    label: 'SBK OPAL TX - 1L',
  },
  {
    src: '/productimage/4L_OPAL-TX--SAE-15W-40-API-CF-4-Can.png',
    label: 'SBK OPAL TX 4L',
  },
  {
    src: '/productimage/5L_OPAL-TX--SAE-15W-40-API-CF-4-Can.png',
    label: 'SBK OPAL TX 5L',
  },
];

const TDS_ROWS = [
  { param: 'Appearance', method: 'Visual', value: 'Clear and bright' },
  { param: 'KV @ 40\u00b0C', method: 'ASTM D445', value: '113' },
  { param: 'KV @ 100\u00b0C', method: 'ASTM D445', value: '15.0' },
  { param: 'Viscosity Index', method: 'ASTM D2270', value: '\u2265 125' },
  { param: 'Density @ 20\u00b0C', method: 'ASTM D4052', value: '0.877' },
  { param: 'Flash Point', method: 'ASTM D92', value: '\u2265 210' },
  { param: 'Pour Point', method: 'ASTM D97', value: '-27' },
  { param: 'CCS @ -20\u02daC', method: 'ASTM D5293', value: '6700' },
  { param: 'TBN', method: 'ASTM D2896', value: '7.5' },
];

export default function OpalTxPage() {
  const [activeIndex, setActiveIndex] = useState(2);
  const revealRefs = useRef([]);

  const activeImage = GALLERY_IMAGES[activeIndex];

  const registerReveal = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
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

    revealRefs.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Banner Section */}
      <section
        className="relative bg-[#030712] text-white py-12 md:py-16 font-sans border-b border-slate-900 overflow-hidden min-h-[350px] flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(3, 7, 18, 0.95) 30%, rgba(3, 7, 18, 0.6) 70%, rgba(3, 7, 18, 0.4) 100%), url('/productbanner/diesel.jpeg')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          {/* Breadcrumb Navigation */}
          <nav
            ref={registerReveal}
            className="scroll-reveal delay-100 flex items-center space-x-2 text-xs md:text-sm text-slate-400 mb-6"
          >
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <i className="fas fa-chevron-right text-[10px] text-slate-500" />
            <Link href="#products" className="hover:text-white transition">
              Products
            </Link>
            <i className="fas fa-chevron-right text-[10px] text-slate-500" />
            <Link href="/petrol-engine-pmco" className="hover:text-white transition">
              Automotive Oil
            </Link>
            <i className="fas fa-chevron-right text-[10px] text-slate-500" />
            <Link href="/diesel-engine-hddo" className="hover:text-white transition">
              Diesel Engine HDDO
            </Link>
          </nav>

          {/* Category Tag */}
          <div ref={registerReveal} className="scroll-reveal delay-200 mb-4">
            <span className="inline-block bg-[#10b981] text-white text-[11px] md:text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded">
              Automotive Oil Series
            </span>
          </div>

          {/* Main Heading and Subtext */}
          <div className="max-w-4xl space-y-4">
            <h1
              ref={registerReveal}
              className="scroll-reveal delay-300 text-white font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-tight md:leading-none"
            >
              SBK DIESEL ENGINE OIL OPAL TX <br className="hidden md:block" />
              <span>SAE 15W-40, API CF-4</span>
            </h1>

            <p
              ref={registerReveal}
              className="scroll-reveal delay-400 text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-light pt-1"
            >
              Dependable multi-grade heavy-duty diesel engine oil designed to offer reliable wear
              protection, effective deposit control, and consistent performance for naturally
              aspirated and turbocharged diesel engines.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12 md:py-20 font-sans overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Product Gallery */}
          <div ref={registerReveal} className="scroll-reveal reveal-left lg:col-span-5 space-y-4">
            <div className="bg-slate-50 rounded-2xl p-8 border border-gray-100 flex items-center justify-center min-h-[380px] shadow-sm relative overflow-hidden group">
              <div className="text-center w-full h-full flex flex-col items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeImage.src}
                  alt={activeImage.label}
                  className="max-h-64 w-auto object-contain mb-4 transition-transform duration-300 group-hover:scale-105"
                />
                <p className="text-slate-500 font-medium text-lg">{activeImage.label}</p>
                <span className="inline-block mt-4 px-4 py-1 bg-brand-light text-brand-blue font-semibold text-xs rounded-full uppercase tracking-wider">
                  SAE 15W-40
                </span>
              </div>
              <span className="absolute top-4 left-4 bg-brand-blue text-white font-bold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded">
                Multigrade Heavy Duty Diesel Engine Oils
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {GALLERY_IMAGES.map((img, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`gallery-thumb-button p-2 rounded-xl flex items-center justify-center h-20 transition-all duration-200 focus:outline-none bg-slate-50 ${
                      isActive
                        ? 'border-2 border-brand-gold'
                        : 'border border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.label}
                      className={`h-full w-auto object-contain pointer-events-none transition-opacity ${
                        isActive ? '' : 'opacity-70 hover:opacity-100'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <p className="text-center text-[11px] text-slate-400 italic">
              <i className="fas fa-info-circle mr-1 text-brand-gold" /> Click thumbnails to
              alternate views.
            </p>
          </div>

          {/* Right Column: Product Title & Description */}
          <div ref={registerReveal} className="scroll-reveal reveal-right lg:col-span-7 space-y-6">
            <div>
              <span className="text-brand-gold font-semibold text-sm tracking-wider uppercase">
                Multigrade Heavy Duty Diesel Engine Oils
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-1">
                DIESEL ENGINE OIL OPAL TX SAE 15W-40, API CF-4
              </h2>
              <p className="text-xl font-medium text-slate-500 mt-2">Product Data Sheet</p>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Diesel Engine OPAL TX Protection oils feature proven lubricant chemistry that adapts
              to your driving needs to provide extra protection whatever the demands of your
              engine or equipment. Featuring an active-detergent system to keep pistons and other
              engine parts clean, it provides protection against wear for long engine life and
              protection against deposits for efficient engine performance.
            </p>

            {/* Quick Specs Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                <strong>Quantity:</strong> 1 Lit, 4 Lit, 5 Lit
              </div>
              <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                <strong>Category:</strong> Multigrade Heavy Duty Diesel Engine Oils
              </div>
              <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                <strong>Standard:</strong> API: CF4, ACEA E2
              </div>
              <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                <strong>Viscosity:</strong> SAE 15W-40
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
              <a
                href="https://wa.me/97167447843?text=Hello,%20I%20would%20like%20to%20inquire%20about%20DIESEL%20ENGINE%20OIL%20OPAL%20TX%20SAE%2015W-40,%20API%20CF-4."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-brand-blue hover:bg-opacity-90 text-white font-medium rounded-lg shadow-md transition duration-200 text-sm flex items-center gap-2"
              >
                <i className="fab fa-whatsapp text-lg" /> Inquire About This Product
              </a>
              <a
                href="/pdf/19_SAE 15W-40 API CF-4 copy.pdf"
                download
                className="px-6 py-3 border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium rounded-lg transition duration-200 text-sm flex items-center gap-2"
              >
                <i className="fas fa-file-pdf text-red-500" /> Download Product Data Sheet
              </a>
            </div>
          </div>
        </div>

        {/* Lower Grid: Performance/Applications & Technical Data Sheet */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 pt-12 border-t border-gray-100">
          {/* Left Side: Performance, Applications & Recommendations */}
          <div ref={registerReveal} className="scroll-reveal space-y-6">
            <h2 className="text-2xl font-bold text-slate-800">
              PERFORMANCE, FEATURES &amp; BENEFITS
            </h2>
            <ul className="space-y-3">
              {[
                'Equipment manufacturer acceptance OPAL TX multigrade is meets/exceeds for use in a variety of engine application by leading OEMs.',
                'High standard of piston cleanliness',
                'The high thermal stability and oil oxidation resistance provide a high standard of piston cleanliness.',
                'Low engine wear and long component life Overall engine cleanliness contributes to low engine wear,long component life, maintenance of power output, more operational stability and lower servicing costs.',
              ].map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">
                    <strong>{text}</strong>
                  </span>
                </li>
              ))}
            </ul>

            <div className="bg-brand-light bg-opacity-40 p-5 rounded-xl border border-gray-200 mt-6">
              <h3 className="font-bold text-slate-800 text-sm mb-2">MAIN APPLICATIONS</h3>
              <ul className="text-slate-600 text-sm space-y-2 list-disc pl-4">
                <li>
                  <strong>
                    Dedicated diesel engine oil performance OPAL TX multigrade has been formulated
                    to provide robust engine performance in a variety of off-highway applications
                    or older on-highway diesel vehicles
                  </strong>
                </li>
                <li>
                  <strong>
                    Construction industry application Engine oil technology is sometimes specified
                    for use in the transmission and hydraulic applications. OPAL TX multigrade
                    offers premium performance and protection for these applications.
                  </strong>
                </li>
                <li>
                  <strong>
                    Stationary equipment OPAL TX multigrade is suitable for certain stationary
                    equipment, such as pumps, that run continuously under steady state conditions.
                  </strong>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-gray-200">
              <h3 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-2">
                SPECIFICATIONS &amp; RECOMMENDATIONS
              </h3>
              <ul className="text-slate-600 text-sm space-y-1 list-disc pl-4">
                <li>API: CF4</li>
                <li>ACEA E2</li>
              </ul>
            </div>
          </div>

          {/* Right Side: Technical Data Sheet Table */}
          <div ref={registerReveal} id="download-tds" className="scroll-reveal reveal-zoom space-y-4">
            <h2 className="text-2xl font-bold text-slate-800">PRODUCT SPECIFICATIONS</h2>
            <div className="overflow-hidden border border-gray-200 rounded-xl shadow-sm">
              <table className="w-full text-left border-collapse bg-white text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-gray-200">
                    <th className="px-4 py-3 font-semibold text-slate-700">TEST PARAMETER</th>
                    <th className="px-4 py-3 font-semibold text-slate-700">TEST METHOD</th>
                    <th className="px-4 py-3 font-semibold text-slate-700 text-right">
                      TYPICAL VALUE
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-slate-600">
                  {TDS_ROWS.map((row) => (
                    <tr key={row.param} className="hover:bg-slate-50/50">
                      <td className="px-4 py-3 font-medium text-slate-800">{row.param}</td>
                      <td className="px-4 py-3 text-slate-400">{row.method}</td>
                      <td className="px-4 py-3 text-right font-mono">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400 italic">
              * Note: Typical value; may vary slightly. Please contact your SBK representative for
              the current batch COA (Certificate Of Analysis)
            </p>
          </div>
        </div>
      </section>
    </>
  );
}