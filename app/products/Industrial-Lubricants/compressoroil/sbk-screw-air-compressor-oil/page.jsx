'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CompressorOil() {
    // Gallery State
    const [mainImage, setMainImage] = useState('/img/Drum-Red-(2).png');
    const [mainLabel, setMainLabel] = useState('SBK SCREW AIR COMPRESSOR OIL');
    const [activeThumb, setActiveThumb] = useState(0);

    // Thumbnails definition
    const thumbnails = [
        { src: '/img/Drum-Red-(2).png', alt: 'SBK PESADO Hydraulic Oil AW 1L', desc: 'SBK SCREW AIR COMPRESSOR OIL - 1L' },
        { src: '/img/Drum-Red-(2).png', alt: 'SBK PESADO Hydraulic Oil AW 4L', desc: 'SBK SCREW AIR COMPRESSOR OIL 4L' },
        { src: '/img/Drum-Red-(2).png', alt: 'SBK PESADO Hydraulic Oil AW 5L', desc: 'SBK SCREW AIR COMPRESSOR OIL 5L' }
    ];

    // Intersection Observer for scroll animations
    useEffect(() => {
        const revealElements = document.querySelectorAll('.scroll-reveal');
        
        const revealOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, revealOptions);

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });

        // Cleanup observer on unmount
        return () => {
            revealElements.forEach(element => {
                revealObserver.unobserve(element);
            });
            revealObserver.disconnect();
        };
    }, []);

    return (
        <div className="bg-white text-slate-700 antialiased pb-16">
            
            {/* Hero Banner Section */}
            <section 
                className="relative bg-[#030712] text-white py-12 md:py-16 font-sans border-b border-slate-900 overflow-hidden min-h-[350px] flex items-center bg-cover bg-center bg-no-repeat" 
                style={{ backgroundImage: "linear-gradient(to right, rgba(3, 7, 18, 0.95) 30%, rgba(3, 7, 18, 0.6) 70%, rgba(3, 7, 18, 0.4) 100%), url('/productbanner/industrial.jpg')" }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                    
                    <nav className="flex items-center space-x-2 text-xs md:text-sm text-slate-400 mb-6 scroll-reveal delay-100">
                        <Link href="/" className="hover:text-white transition">Home</Link>
                        <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
                        <Link href="/#products" className="hover:text-white transition">Products</Link>
                        <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
                        <Link href="/hydraulic-oil" className="hover:text-white transition">Industrial Lubricants</Link>
                        <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
                        <span className="text-white font-medium">Compressor Oil</span>
                    </nav>

                    <div className="mb-4 scroll-reveal delay-200">
                        <span className="inline-block bg-[#10b981] text-white text-[11px] md:text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded">
                            Industrial Lubricants
                        </span>
                    </div>

                    <div className="max-w-4xl space-y-4">
                        <h1 className="text-white font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-tight md:leading-none scroll-reveal delay-300">
                            SBK SCREW AIR COMPRESSOR OIL     <br className="hidden md:block" />
                            <span></span>
                        </h1>
                        
                        <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-light pt-1 scroll-reveal delay-400">
                            SBK Screw Air Compressor Oil is a premium performance lubricant formulated from highly refined base oils and advanced additive technology. It is specifically engineered to deliver excellent wear protection, thermal stability, rapid water separation, and resistance to oxidation and carbon formation in rotary screw air compressors.
                        </p>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 py-12 md:py-20 font-sans overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    
                    {/* Product Gallery Column */}
                    <div className="lg:col-span-5 space-y-4 scroll-reveal reveal-left">
                        <div className="bg-slate-50 rounded-2xl p-8 border border-gray-100 flex items-center justify-center min-h-[380px] shadow-sm relative overflow-hidden group">
                            <div className="text-center w-full h-full flex flex-col items-center justify-center">
                                <img 
                                    src={mainImage} 
                                    alt={mainLabel} 
                                    className="max-h-64 w-auto object-contain mb-4 transition-transform duration-300 group-hover:scale-105" 
                                />
                                <p className="text-slate-500 font-medium text-lg">{mainLabel}</p>
                                <span className="inline-block mt-4 px-4 py-1 bg-brand-light text-brand-blue font-semibold text-xs rounded-full uppercase tracking-wider">AW </span>
                            </div>
                            <span className="absolute top-4 left-4 bg-brand-blue text-white font-bold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded"></span>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                            {thumbnails.map((thumb, index) => (
                                <button 
                                    key={index}
                                    onClick={() => {
                                        setMainImage(thumb.src);
                                        setMainLabel(thumb.desc);
                                        setActiveThumb(index);
                                    }} 
                                    className={`bg-slate-50 p-2 rounded-xl flex items-center justify-center h-20 transition-all duration-200 focus:outline-none ${activeThumb === index ? 'border-2 border-brand-gold' : 'border border-gray-200 hover:border-gray-300'}`}
                                >
                                    <img 
                                        src={thumb.src} 
                                        alt={thumb.alt} 
                                        className={`h-full w-auto object-contain pointer-events-none transition-opacity ${activeThumb === index ? '' : 'opacity-70 hover:opacity-100'}`} 
                                    />
                                </button>
                            ))}
                        </div>
                        
                        <p className="text-center text-[11px] text-slate-400 italic">
                            <i className="fas fa-info-circle mr-1 text-brand-gold"></i> Click thumbnails to alternate views.
                        </p>
                    </div>

                    {/* Product Details Column */}
                    <div className="lg:col-span-7 space-y-6 scroll-reveal reveal-right">
                        <div>
                            <span className="text-brand-gold font-semibold text-sm tracking-wider uppercase"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-1">SBK SCREW AIR COMPRESSOR OIL</h2>
                            <p className="text-xl font-medium text-slate-500 mt-2"></p>
                        </div>

                        <p className="text-slate-600 leading-relaxed">
                            SBK Screw Air Compressor Oil is a premium quality, high-performance lubricant specially formulated for rotary screw 
                            air compressors operating under high temperature and heavy-duty industrial conditions. It is blended with highly 
                            refined base oils and advanced ashless additive technology to provide excellent oxidation stability, superior anti-wear 
                            protection, rust prevention, and long service life. The oil ensures reliable compressor operation by minimizing sludge, 
                            varnish, and carbon formation while maintaining high efficiency and stable lubrication film strength under severe load 
                            conditions. ISO VG grade is typically recommended for high-temperature screw compressors and continuous-duty 
                            industrial applications.
                        </p>

                        <div className="flex flex-wrap gap-3 pt-2">
                            <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                                <strong>Quantity:</strong> pail, drum, IBC
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                            <a href="https://wa.me/971569966391?text=Hello,%20I%20would%20like%20to%20inquire%20about%20SBK%20SCREW%20AIR%20COMPRESSOR%20OIL" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-brand-blue hover:bg-opacity-90 text-white font-medium rounded-lg shadow-md transition duration-200 text-sm flex items-center gap-2">
                                <i className="fab fa-whatsapp text-lg"></i> Inquire About This Product
                            </a>
                            <a href="/pdf/14-SCREW AIR COMPRESSOR OIL copy.pdf" download className="px-6 py-3 border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium rounded-lg transition duration-200 text-sm flex items-center gap-2">
                                <i className="fas fa-file-pdf text-red-500"></i> Download Product Data Sheet
                            </a>
                        </div>
                    </div>
                </div>

                {/* Features & Specifications Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 pt-12 border-t border-gray-100">
                    
                    <div className="space-y-6 scroll-reveal">
                        <h2 className="text-2xl font-bold text-slate-800">PERFORMANCE, FEATURES & BENEFITS</h2>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                                <span className="text-slate-600 text-sm"><strong>Excellent oxidation and thermal stability for extended oil life</strong></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                                <span className="text-slate-600 text-sm"><strong>Superior anti-wear protection for rotors, bearings, and gears</strong></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                                <span className="text-slate-600 text-sm"><strong>Strong resistance to sludge, varnish, and carbon deposits</strong></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                                <span className="text-slate-600 text-sm"><strong>Excellent rust and corrosion protection.</strong></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                                <span className="text-slate-600 text-sm"><strong>Low foaming with rapid air release properties </strong></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                                <span className="text-slate-600 text-sm"><strong>Superior water separation (demulsibility) characteristics </strong></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                                <span className="text-slate-600 text-sm"><strong>Maintains stable oil film at high operating temperatures </strong></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                                <span className="text-slate-600 text-sm"><strong>Reduces maintenance downtime and operating costs </strong></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                                <span className="text-slate-600 text-sm"><strong>Supports long service intervals under industrial use</strong></span>
                            </li>
                        </ul>

                        <div className="bg-brand-light bg-opacity-40 p-5 rounded-xl border border-gray-200 mt-6">
                            <h3 className="font-bold text-slate-800 text-sm mb-2">MAIN APPLICATIONS</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                SBK Screw Air Compressor Oil is suitable for oil-flooded rotary screw air compressors, heavy-duty industrial screw compressors, high-temperature continuous operation systems, stationary and portable compressor units, and air systems requiring higher viscosity oil for improved sealing and thermal stability. It is widely used in environments where compressors operate at elevated discharge temperatures and under sustained load conditions.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-xl border border-gray-200">
                            <h3 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-2">SPECIFICATIONS & RECOMMENDATIONS</h3>
                            <ul className="text-slate-600 text-sm space-y-1 list-disc pl-4">
                                <li>DIN 51506 VDL</li>
                                <li>ISO 6743-3 DAG</li>
                                <li>Suitable for continuous duty industrial air compression systems</li>
                            </ul>
                        </div>
                    </div>

                    {/* Technical Specifications Table */}
                    <div id="download-tds" className="space-y-4 scroll-reveal reveal-zoom">
                        <h2 className="text-2xl font-bold text-slate-800">PRODUCT SPECIFICATIONS</h2>
                        <div className="overflow-hidden border border-gray-200 rounded-xl shadow-sm overflow-x-auto">
                            <table className="w-full text-left border-collapse bg-white text-sm min-w-[600px]">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-gray-200">
                                        <th className="px-4 py-3 font-semibold text-slate-700">TEST PARAMETER</th>
                                        <th className="px-4 py-3 font-semibold text-slate-700">TEST METHOD</th>
                                        <th colSpan="3" className="px-4 py-3 font-semibold text-slate-700 text-center">TYPICAL VALUE</th>
                                    </tr>
                                    <tr className="bg-slate-100/50 border-b border-gray-200 text-xs text-slate-500">
                                        <th colSpan="2" className="px-4 py-1">Grade</th>
                                        <th className="px-3 py-1 text-center">32</th>
                                        <th className="px-3 py-1 text-center">46</th>
                                        <th className="px-3 py-1 text-center">68</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-slate-600">
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Appearance</td>
                                        <td className="px-4 py-3 text-slate-400">Visual</td>
                                        <td colSpan="3" className="px-3 py-3 text-center font-mono">Clear &amp; bright</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">KV @ 40°C</td>
                                        <td className="px-4 py-3 text-slate-400">ASTM D445</td>
                                        <td className="px-3 py-3 text-center font-mono">32</td>
                                        <td className="px-3 py-3 text-center font-mono">46</td>
                                        <td className="px-3 py-3 text-center font-mono">68</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">KV @ 100°C</td>
                                        <td className="px-4 py-3 text-slate-400">ASTM D445</td>
                                        <td className="px-3 py-3 text-center font-mono">6.1</td>
                                        <td className="px-3 py-3 text-center font-mono">7.8</td>
                                        <td className="px-3 py-3 text-center font-mono">9.2</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Viscosity Index</td>
                                        <td className="px-4 py-3 text-slate-400">ASTM D2270</td>
                                        <td className="px-3 py-3 text-center font-mono">141</td>
                                        <td className="px-3 py-3 text-center font-mono">139</td>
                                        <td className="px-3 py-3 text-center font-mono">112</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Density @ 15°C</td>
                                        <td className="px-4 py-3 text-slate-400">ASTM D4052</td>
                                        <td className="px-3 py-3 text-center font-mono">0.8359</td>
                                        <td className="px-3 py-3 text-center font-mono">0.8438</td>
                                        <td className="px-3 py-3 text-center font-mono">0.8565</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Flash Point</td>
                                        <td className="px-4 py-3 text-slate-400">ASTM D92</td>
                                        <td className="px-3 py-3 text-center font-mono">&ge; 195</td>
                                        <td className="px-3 py-3 text-center font-mono">&ge; 220</td>
                                        <td className="px-3 py-3 text-center font-mono">&ge; 220</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Pour Point</td>
                                        <td className="px-4 py-3 text-slate-400">ASTM D97</td>
                                        <td className="px-3 py-3 text-center font-mono">-24</td>
                                        <td className="px-3 py-3 text-center font-mono">-30</td>
                                        <td className="px-3 py-3 text-center font-mono">-24</td>
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
        </div>
    );
}