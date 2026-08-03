'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SBKFullySyntheticSAE0W16APISP() {
    // Gallery State
    const [mainImage, setMainImage] = useState('productimage/SBK-EVERA-SAE-0W-16-5L.png');
    const [mainLabel, setMainLabel] = useState('SBK Petrol Engine Oil 5L');
    const [activeThumb, setActiveThumb] = useState(2);

    // Thumbnails definition
    const thumbnails = [
        { src: 'productimage/SBK-EVERA-SAE-0W-16 -1L.png', alt: 'SBK Petrol Engine Oil 1L', desc: 'SBK Petrol Engine Oil - 1L' },
        { src: 'productimage/SBK-EVERA-SAE-0W-16-4L.png', alt: 'SBK Petrol Engine Oil 4L', desc: 'SBK Petrol Engine Oil 4L' },
        { src: 'productimage/SBK-EVERA-SAE-0W-16-5L.png', alt: 'SBK Petrol Engine Oil 5L', desc: 'SBK Petrol Engine Oil 5L' }
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
                style={{ backgroundImage: "linear-gradient(to right, rgba(3, 7, 18, 0.95) 30%, rgba(3, 7, 18, 0.6) 70%, rgba(3, 7, 18, 0.4) 100%), url('productbanner/petrol-and-diesel.jpg')" }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                    
                    <nav className="flex items-center space-x-2 text-xs md:text-sm text-slate-400 mb-6 scroll-reveal delay-100">
                        <Link href="/" className="hover:text-white transition">Home</Link>
                        <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
                        <Link href="/#products" className="hover:text-white transition">Products</Link>
                        <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
                        <Link href="/petrol-engine-pmco" className="hover:text-white transition">Automotive Oil</Link>
                        <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
                        <span className="text-white font-medium">Petrol Engine Oil</span>
                    </nav>

                    <div className="mb-4 scroll-reveal delay-200">
                        <span className="inline-block bg-[#10b981] text-white text-[11px] md:text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded">
                            Automotive Oil Series
                        </span>
                    </div>

                    <div className="max-w-4xl space-y-4">
                        <h1 className="text-white font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-tight md:leading-none scroll-reveal delay-300">
                            SBK PETROL ENGINE OIL <br className="hidden md:block" />
                            <span>SAE 0W-16 API SP</span>
                        </h1>
                        
                        <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-light pt-1 scroll-reveal delay-400">
                            Fully-Synthetic Multi-Grade Petrol Engine Oil formulated with advanced synthetic base oils and state-of-the-art additive technology.
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
                                <p className="text-slate-500 font-medium text-lg">SBK PETROL ENGINE OIL</p>
                                <span className="inline-block mt-4 px-4 py-1 bg-brand-light text-brand-blue font-semibold text-xs rounded-full uppercase tracking-wider">SAE 0W-16</span>
                            </div>
                            <span className="absolute top-4 left-4 bg-brand-blue text-white font-bold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded">
                                Fully Synthetic Motor Oil
                            </span>
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
                            <span className="text-brand-gold font-semibold text-sm tracking-wider uppercase">Passenger Car Motor Oil (PCMO)</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-1">SBK PETROL ENGINE OIL</h2>
                            <p className="text-xl font-medium text-slate-500 mt-2">SAE 0W-16 API SP</p>
                        </div>

                        <p className="text-slate-600 leading-relaxed">
                            SBK SAE 0W-16 API SP is a premium fully synthetic passenger car motor oil formulated with advanced synthetic base oils and state-of-the-art additive technology. It is designed to provide exceptional engine protection, improved fuel economy, excellent low-temperature performance, and enhanced protection against Low-Speed Pre-Ignition (LSPI) in modern gasoline and hybrid engines requiring SAE 0W-16 viscosity grade oils. It meets/exceeds the latest API SP and ILSAC GF-6B performance requirements.
                        </p>

                        <div className="flex flex-wrap gap-3 pt-2">
                            <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                                <strong>Quantity:</strong> 1 Lit, 4 Lit, 5 Lit
                            </div>
                            <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                                <strong>Category:</strong> Fully Synthetic
                            </div>
                            <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                                <strong>Standard:</strong> API SP Resource Conserving / ILSAC GF-6B
                            </div>
                            <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                                <strong>Viscosity:</strong> SAE 0W-16
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                            <a href="https://wa.me/971569966391?text=Hello,%20I%20am%20interested%20in%20inquiring%20about%20the%20SBK%20Fully%20Synthetic%20SAE%200W-16%20API%20SP%20engine%20oil." target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-brand-blue hover:bg-opacity-90 text-white font-medium rounded-lg shadow-md transition duration-200 text-sm flex items-center gap-2">
                                <i className="fab fa-whatsapp text-lg"></i> Inquire About This Product
                            </a>
                            <a href="pdf/01-SAE 0W-16 API SP copy.pdf" download="SAE_0W-16_API_SP_TDS.pdf" className="px-6 py-3 border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium rounded-lg transition duration-200 text-sm flex items-center gap-2">
                                <i className="fas fa-file-pdf text-red-500"></i> Download Product Data Sheet
                            </a>
                        </div>
                    </div>
                </div>

                {/* Features & Specifications Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 pt-12 border-t border-gray-100">
                    
                    <div className="space-y-6 scroll-reveal">
                        <h2 className="text-2xl font-bold text-slate-800">Performance, Features &amp; Benefits</h2>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 scroll-reveal delay-100">
                                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                                <span className="text-slate-600 text-sm">Outstanding fuel economy performance</span>
                            </li>
                            <li className="flex items-start gap-3 scroll-reveal delay-150">
                                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                                <span className="text-slate-600 text-sm">Excellent cold-start protection</span>
                            </li>
                            <li className="flex items-start gap-3 scroll-reveal delay-200">
                                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                                <span className="text-slate-600 text-sm">Superior wear protection and engine cleanliness</span>
                            </li>
                            <li className="flex items-start gap-3 scroll-reveal delay-250">
                                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                                <span className="text-slate-600 text-sm">Enhanced protection against LSPI</span>
                            </li>
                            <li className="flex items-start gap-3 scroll-reveal delay-300">
                                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                                <span className="text-slate-600 text-sm">Excellent oxidation and thermal stability</span>
                            </li>
                            <li className="flex items-start gap-3 scroll-reveal delay-350">
                                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                                <span className="text-slate-600 text-sm">Reduced sludge and deposit formation</span>
                            </li>
                            <li className="flex items-start gap-3 scroll-reveal delay-400">
                                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                                <span className="text-slate-600 text-sm">Extended engine life</span>
                            </li>
                            <li className="flex items-start gap-3 scroll-reveal delay-450">
                                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                                <span className="text-slate-600 text-sm">Protects catalytic converters and emission control systems.</span>
                            </li>
                        </ul>

                        <div className="bg-brand-light bg-opacity-40 p-5 rounded-xl border border-gray-200 mt-6 scroll-reveal delay-200">
                            <h3 className="font-bold text-slate-800 text-sm mb-2">Main Applications</h3>
                            <ul className="text-slate-600 text-sm leading-relaxed list-disc list-inside space-y-1">
                                <li>Modern gasoline passenger cars</li>
                                <li>Hybrid electric vehicles (HEV/PHEV)</li>
                                <li>Turbocharged gasoline engines</li>
                                <li>Vehicles requiring SAE 0W-16 viscosity</li>
                                <li>Suitable for many OEMs where 0W-16 is specified.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Technical Specifications Table */}
                    <div id="download-tds" className="space-y-4 scroll-reveal reveal-zoom">
                        <h2 className="text-2xl font-bold text-slate-800">Product Specifications</h2>
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
                                        <td className="px-4 py-3 text-right font-mono">37</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">KV @ 100°C</td>
                                        <td className="px-4 py-3 text-slate-400">ASTM D445</td>
                                        <td className="px-4 py-3 text-right font-mono">7.2</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Viscosity Index</td>
                                        <td className="px-4 py-3 text-slate-400">ASTM D2270</td>
                                        <td className="px-4 py-3 text-right font-mono">162</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Density @ 15°C</td>
                                        <td className="px-4 py-3 text-slate-400">ASTM D4052</td>
                                        <td className="px-4 py-3 text-right font-mono">0.8376</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Flash Point</td>
                                        <td className="px-4 py-3 text-slate-400">ASTM D92</td>
                                        <td className="px-4 py-3 text-right font-mono">&ge; 210</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Pour Point</td>
                                        <td className="px-4 py-3 text-slate-400">ASTM D97</td>
                                        <td className="px-4 py-3 text-right font-mono">-45</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">CCS @ -35°C</td>
                                        <td className="px-4 py-3 text-slate-400">ASTM D5293</td>
                                        <td className="px-4 py-3 text-right font-mono">5400</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">TBN</td>
                                        <td className="px-4 py-3 text-slate-400">ASTM D2896</td>
                                        <td className="px-4 py-3 text-right font-mono">8.4</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-lg border border-gray-200 text-xs text-slate-600">
                            <strong>Specifications &amp; Recommendations:</strong> API SP Resource Conserving, ILSAC GF-6B
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}