'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PesadoHydraulicOilHVI() {
    // Gallery State
    const [mainImage, setMainImage] = useState('/img/Drum-Red-(2).png');
    const [mainLabel, setMainLabel] = useState('PESADO HYDRAULIC OIL HVI');
    const [activeThumb, setActiveThumb] = useState(0);

    // Thumbnails definition
    const thumbnails = [
        { src: '/img/Drum-Red-(2).png', alt: 'PESADO HYDRAULIC OIL HVI Pail', desc: 'PESADO HYDRAULIC OIL HVI - Pail' },
        { src: '/img/Drum-Red-(2).png', alt: 'PESADO HYDRAULIC OIL HVI Drum', desc: 'PESADO HYDRAULIC OIL HVI - Drum' },
        { src: '/img/Drum-Red-(2).png', alt: 'PESADO HYDRAULIC OIL HVI IBC', desc: 'PESADO HYDRAULIC OIL HVI - IBC' }
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
                style={{ backgroundImage: "linear-gradient(to right, rgba(3, 7, 18, 0.95) 30%, rgba(3, 7, 18, 0.6) 70%, rgba(3, 7, 18, 0.4) 100%), url('/productbanner/mining.jpg')" }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                    
                    <nav className="flex items-center space-x-2 text-xs md:text-sm text-slate-400 mb-6 scroll-reveal delay-100">
                        <Link href="/" className="hover:text-white transition">Home</Link>
                        <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
                        <Link href="/#products" className="hover:text-white transition">Products</Link>
                        <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
                        <Link href="/rock-drill-oil" className="hover:text-white transition">MINNING OIL</Link>
                        <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
                        <span className="text-white font-medium">PESADO HYDRAULIC OIL HVI</span>
                    </nav>

                    <div className="mb-4 scroll-reveal delay-200">
                        <span className="inline-block bg-[#10b981] text-white text-[11px] md:text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded">
                            MINNING OIL
                        </span>
                    </div>

                    <div className="max-w-4xl space-y-4">
                        <h1 className="text-white font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-tight md:leading-none scroll-reveal delay-300">
                            PESADO HYDRAULIC OIL HVI <br className="hidden md:block" />
                            <span> </span>
                        </h1>
                        
                        <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-light pt-1 scroll-reveal delay-400">
                            PESADO HYDRAULIC OIL HVI is a premium quality heavy-duty high viscosity index anti-wear hydraulic fluid formulated with highly refined base oils and advanced additive technology for superior hydraulic system protection under severe operating conditions. It is specially designed for mobile and industrial hydraulic equipment operating across a wide temperature range. The product provides outstanding oxidation stability, excellent wear protection, rust and corrosion resistance, and smooth hydraulic performance during both cold start-up and high-temperature operation. Its high viscosity index ensures stable viscosity and reliable lubrication under varying climatic conditions.
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
                                <span className="inline-block mt-4 px-4 py-1 bg-brand-light text-brand-blue font-semibold text-xs rounded-full uppercase tracking-wider"> </span>
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
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-1">PESADO HYDRAULIC OIL HVI</h2>
                            <p className="text-xl font-medium text-slate-500 mt-2"></p>
                        </div>

                        <p className="text-slate-600 leading-relaxed">
                            PESADO HYDRAULIC OIL HVI is a premium quality heavy-duty high viscosity index anti-wear hydraulic fluid formulated with highly refined base oils and advanced additive technology for superior hydraulic system protection under severe operating conditions. It is specially designed for mobile and industrial hydraulic equipment operating across a wide temperature range. The product provides outstanding oxidation stability, excellent wear protection, rust and corrosion resistance, and smooth hydraulic performance during both cold start-up and high-temperature operation. Its high viscosity index ensures stable viscosity and reliable lubrication under varying climatic conditions.
                        </p>

                        <div className="flex flex-wrap gap-3 pt-2">
                            <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                                <strong>Quantity:</strong> 1 lit, 4 lit, 5 lit, pail, drum, IBC
                            </div>
                            <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                                <strong>Viscosity Grades:</strong> ISO VG 32, 46, 68, 100
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                            <a href="https://wa.me/971569966391?text=Hello,%20I%20would%20like%20to%20inquire%20about%20PESADO%20HYDRAULIC%20OIL%20HVI" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-brand-blue hover:bg-opacity-90 text-white font-medium rounded-lg shadow-md transition duration-200 text-sm flex items-center gap-2">
                                <i className="fab fa-whatsapp text-lg"></i> Inquire About This Product
                            </a>
                            <a href="/pdf/12-PESADO-HYDRAULIC-OIL-HVI.pdf" download className="px-6 py-3 border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium rounded-lg transition duration-200 text-sm flex items-center gap-2">
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
                                <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-slate-600 text-sm"><strong>Anti wear additives protect pumps and system components</strong></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-slate-600 text-sm"><strong>High viscosity index for excellent temperature-viscosity stability</strong></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-slate-600 text-sm"><strong>Superior anti-wear protection for hydraulic pumps and components</strong></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-slate-600 text-sm"><strong>Excellent oxidation and thermal stability</strong></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-slate-600 text-sm"><strong>Outstanding rust and corrosion protection</strong></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-slate-600 text-sm"><strong>Excellent anti-foam and rapid air release properties</strong></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-slate-600 text-sm"><strong>Good water separation characteristics</strong></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-slate-600 text-sm"><strong>Smooth operation during cold starts and high operating temperatures</strong></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-slate-600 text-sm"><strong>Reduces sludge and varnish formation</strong></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-slate-600 text-sm"><strong>Extends hydraulic equipment service life</strong></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-slate-600 text-sm"><strong>Suitable for severe-duty industrial and mobile applications</strong></span>
                            </li>
                        </ul>

                        <div className="bg-brand-light bg-opacity-40 p-5 rounded-xl border border-gray-200 mt-6">
                            <h3 className="font-bold text-slate-800 text-sm mb-2">MAIN APPLICATIONS</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-3">
                                PESADO Hydraulic Oil HVI is suitable for heavy-duty hydraulic systems used in excavators, loaders, forklifts, cranes, construction equipment, mining machinery, agricultural equipment, hydraulic presses, industrial machinery, and mobile hydraulic systems operating under high pressure and varying temperature conditions. It is also suitable for vane, piston, and gear pump hydraulic systems requiring HVLP performance fluids.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-xl border border-gray-200">
                            <h3 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-2">SPECIFICATIONS & RECOMMENDATIONS</h3>
                            <ul className="text-slate-600 text-sm space-y-2 list-disc pl-4">
                                <li>DIN 51524 Part 3 HVLP</li>
                                <li>ISO 11158 HV</li>
                                <li>ISO 6743-4 HV</li>
                                <li>Denison HF-0 / HF-1 / HF-2</li>
                                <li>Cincinnati Milacron P-68, P-69</li>
                            </ul>
                        </div>
                    </div>

                    {/* Technical Specifications Table */}
                    <div id="download-tds" className="space-y-4 scroll-reveal reveal-zoom">
                        <h2 className="text-2xl font-bold text-slate-800">PRODUCT SPECIFICATIONS</h2>
                        <div className="overflow-hidden border border-gray-200 rounded-xl shadow-sm overflow-x-auto">
                            <table className="w-full text-left border-collapse bg-white text-sm min-w-[500px]">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-gray-200">
                                        <th className="px-4 py-3 font-semibold text-slate-700">TEST PARAMETER</th>
                                        <th className="px-4 py-3 font-semibold text-slate-700">TEST METHOD</th>
                                        <th colSpan="4" className="px-4 py-3 font-semibold text-slate-700 text-center">TYPICAL VALUE</th>
                                    </tr>
                                    <tr className="bg-slate-100/50 border-b border-gray-200 text-xs text-slate-500">
                                        <th colSpan="2" className="px-4 py-1">Grade</th>
                                        <th className="px-2 py-1 text-center">32</th>
                                        <th className="px-2 py-1 text-center">46</th>
                                        <th className="px-2 py-1 text-center">68</th>
                                        <th className="px-2 py-1 text-center">100</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-slate-600">
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Appearance</td>
                                        <td className="px-4 py-3 text-slate-400">Visual</td>
                                        <td className="px-2 py-3 text-center font-mono">Clear &amp; bright</td>
                                        <td className="px-2 py-3 text-center font-mono">Clear &amp; bright</td>
                                        <td className="px-2 py-3 text-center font-mono">Clear &amp; bright</td>
                                        <td className="px-2 py-3 text-center font-mono">Clear &amp; bright</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">KV @ 40°C</td>
                                        <td className="px-4 py-3 text-slate-400">ASTM D445</td>
                                        <td className="px-2 py-3 text-center font-mono">32.5</td>
                                        <td className="px-2 py-3 text-center font-mono">46</td>
                                        <td className="px-2 py-3 text-center font-mono">68.5</td>
                                        <td className="px-2 py-3 text-center font-mono">99.5</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">KV @ 100°C</td>
                                        <td className="px-4 py-3 text-slate-400">ASTM D445</td>
                                        <td className="px-2 py-3 text-center font-mono">6.4</td>
                                        <td className="px-2 py-3 text-center font-mono">8.2</td>
                                        <td className="px-2 py-3 text-center font-mono">11.2</td>
                                        <td className="px-2 py-3 text-center font-mono">15.1</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Viscosity Index</td>
                                        <td className="px-4 py-3 text-slate-400">ASTM D2270</td>
                                        <td className="px-2 py-3 text-center font-mono">153</td>
                                        <td className="px-2 py-3 text-center font-mono">154</td>
                                        <td className="px-2 py-3 text-center font-mono">156</td>
                                        <td className="px-2 py-3 text-center font-mono">160</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Density @ 15°C</td>
                                        <td className="px-4 py-3 text-slate-400">ASTM D4052</td>
                                        <td className="px-2 py-3 text-center font-mono">0.8681</td>
                                        <td className="px-2 py-3 text-center font-mono">0.8746</td>
                                        <td className="px-2 py-3 text-center font-mono">0.8788</td>
                                        <td className="px-2 py-3 text-center font-mono">0.8818</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Flash Point (°C)</td>
                                        <td className="px-4 py-3 text-slate-400">ASTM D92</td>
                                        <td className="px-2 py-3 text-center font-mono">&ge;200</td>
                                        <td className="px-2 py-3 text-center font-mono">&ge;200</td>
                                        <td className="px-2 py-3 text-center font-mono">&ge;200</td>
                                        <td className="px-2 py-3 text-center font-mono">&ge;200</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Pour Point (°C)</td>
                                        <td className="px-4 py-3 text-slate-400">ASTM D97</td>
                                        <td className="px-2 py-3 text-center font-mono">-45</td>
                                        <td className="px-2 py-3 text-center font-mono">-42</td>
                                        <td className="px-2 py-3 text-center font-mono">-36</td>
                                        <td className="px-2 py-3 text-center font-mono">-39</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-slate-400 italic">
                            * Note: Typical value may vary slightly. Please contact your SBK representative for the current batch COA (Certificate Of Analysis).
                        </p>
                    </div>

                </div>
            </section>
        </div>
    );
}