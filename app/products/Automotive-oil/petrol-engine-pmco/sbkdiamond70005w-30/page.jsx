'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SBKDiamond7000() {
    // Gallery State
    const [mainImage, setMainImage] = useState('/productimage/5L_DIAMOND-7000-SAE-5W-30,-API-SM---Can.png');
    const [mainLabel, setMainLabel] = useState('SBK Diamond 7000 5L');
    const [activeThumb, setActiveThumb] = useState(2);

    // Thumbnails definition
    const thumbnails = [
        { src: '/productimage/1L_DIAMOND-7000-SAE-5W-30,-API-SM-Can.png', alt: 'SBK Diamond 7000 1L', desc: 'SBK Diamond 7000 - 1L' },
        { src: '/productimage/4L_DIAMOND-7000-SAE-5W-30,-API-SM--Can.png', alt: 'SBK Diamond 7000 4L', desc: 'SBK Diamond 7000 4L' },
        { src: '/productimage/5L_DIAMOND-7000-SAE-5W-30,-API-SM---Can.png', alt: 'SBK Diamond 7000 5L', desc: 'SBK Diamond 7000 5L' }
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
                style={{ backgroundImage: "linear-gradient(to right, rgba(3, 7, 18, 0.95) 30%, rgba(3, 7, 18, 0.6) 70%, rgba(3, 7, 18, 0.4) 100%), url('/productbanner/petrol-and-diesel.jpg')" }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                    
                    <nav className="flex items-center space-x-2 text-xs md:text-sm text-slate-400 mb-6 scroll-reveal delay-100">
                        <Link href="/" className="hover:text-white transition">Home</Link>
                        <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
                        <Link href="/#products" className="hover:text-white transition">Products</Link>
                        <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
                        <Link href="/#automotive" className="hover:text-white transition">Automotive Oil</Link>
                        <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
                        <span className="text-white font-medium">Premium Petrol Engine PCMO</span>
                    </nav>

                    <div className="mb-4 scroll-reveal delay-200">
                        <span className="inline-block bg-[#10b981] text-white text-[11px] md:text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded">
                            Automotive Oil Series
                        </span>
                    </div>

                    <div className="max-w-4xl space-y-4">
                        <h1 className="text-white font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-tight md:leading-none scroll-reveal delay-300">
                            SBK Diamond 7000 <br className="hidden md:block" />
                            <span>SAE 5W-30 | API SM</span>
                        </h1>
                        
                        <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-light pt-1 scroll-reveal delay-400">
                            Premium synthetic technology motor oil engineered to offer reliable year-round performance, excellent wear resistance under diverse driving conditions, and optimized engine cleanliness for modern passenger cars.
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
                                <span className="inline-block mt-4 px-4 py-1 bg-brand-light text-brand-blue font-semibold text-xs rounded-full uppercase tracking-wider">SAE 5W-30</span>
                            </div>
                            <span className="absolute top-4 left-4 bg-brand-blue text-white font-bold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded">
                                Fully-Synthetic Multi-Grade
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
                            <span className="text-brand-gold font-semibold text-sm tracking-wider uppercase">PETROL ENGINE OIL DIAMOND 7000 SAE 5W-30, API SM</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-1">SBK Diamond 7000</h2>
                            <p className="text-xl font-medium text-slate-500 mt-2">SAE 5W-30 | API SM</p>
                        </div>

                        <p className="text-slate-600 leading-relaxed">
                            Petrol Engine DIAMOND 7000 Protection oils SAE 5W-30 API SM is a fully-synthetic multi-grade engine oil formulated with selected mineral base oils and advanced additives to provide reliable lubrication and protection for gasoline engines, particularly older models requiring API SM performance. It offers effective control of wear, deposits, and oxidation, while maintaining stable viscosity for consistent lubrication during HIGH-temperature operation. The formulation ensures good detergency and dispersancy to prevent sludge formation and keep engine components clean, while also helping to reduce oil consumption, enhance engine durability, and support reliable performance in high-mileage engines and hot climate conditions.
                        </p>

                        <div className="flex flex-wrap gap-3 pt-2">
                            <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                                <strong>Quantity:</strong> 1 Lit, 4 Lit, 5 Lit
                            </div>
                            <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                                <strong>Category:</strong> Fully-Synthetic Multi-Grade Petrol Engine Oil
                            </div>
                            <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                                <strong>Standard:</strong> API SM
                            </div>
                            <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                                <strong>Viscosity:</strong> SAE 5W-30
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                            <a href="https://wa.me/971569966391?text=Hello,%20I%20would%20like%20to%20inquire%20about%20PETROL%20ENGINE%20OIL%20DIAMOND%207000%20SAE%205W-30,%20API%20SM." target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-brand-blue hover:bg-opacity-90 text-white font-medium rounded-lg shadow-md transition duration-200 text-sm flex items-center gap-2">
                                <i className="fab fa-whatsapp text-lg"></i> Inquire About This Product
                            </a>
                            <a href="/pdf/12_SAE 5W-30 API SM copy.pdf" download="SBK_Diamond_7000_SAE_5W30_API_SM_PDS.pdf" className="px-6 py-3 border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium rounded-lg transition duration-200 text-sm flex items-center gap-2">
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
                                <span className="text-slate-600 text-sm">Equipment manufacturer acceptance DIAMOND 7000 Fully-synthetic multi-grade meets / exceeds for use in a variety of engine application by leading OEMs.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                                <span className="text-slate-600 text-sm">High shear stability</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                                <span className="text-slate-600 text-sm">Strong wear protection and friction control.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                                <span className="text-slate-600 text-sm">Good engine cleanliness & fuel efficiency support</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                                <span className="text-slate-600 text-sm">Fast cold-start lubrication</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                                <span className="text-slate-600 text-sm">Stable viscosity under extreme operating conditions</span>
                            </li>
                        </ul>

                        <div className="space-y-4 mt-6">
                            <div className="bg-brand-light bg-opacity-40 p-5 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-slate-800 text-sm mb-2">MAIN APPLICATIONS</h3>
                                <ul className="text-slate-600 text-sm space-y-1 list-disc pl-4">
                                    <li>Dedicated Petrol engine oil performance DIAMOND 7000 fully-synthetic multi-grade have been formulated to Light petrol engines.</li>
                                    <li>Turbocharged & high-performance gasoline engines</li>
                                    <li>Multi-valve and high-performance engines</li>
                                </ul>
                            </div>

                            <div className="bg-slate-50 p-5 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-slate-800 text-sm mb-2">SPECIFICATIONS & RECOMMENDATIONS</h3>
                                <ul className="text-slate-600 text-sm space-y-1 list-disc pl-4">
                                    <li>API: SM</li>
                                    <li>ILSAC GF-4</li>
                                    <li>ACEA A5/B5</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Technical Specifications Table */}
                    <div id="download-tds" className="space-y-4 scroll-reveal reveal-zoom">
                        <h2 className="text-2xl font-bold text-slate-800">PRODUCT SPECIFICATIONS | TYPICAL VALUE</h2>
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
                                        <td className="px-4 py-3 text-right font-mono">60.4</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">KV @ 100°C</td>
                                        <td className="px-4 py-3 text-slate-400">ASTM D445</td>
                                        <td className="px-4 py-3 text-right font-mono">9.8</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Viscosity Index</td>
                                        <td className="px-4 py-3 text-slate-400">ASTM D2270</td>
                                        <td className="px-4 py-3 text-right font-mono">&ge; 130</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Density @ 15°C</td>
                                        <td className="px-4 py-3 text-slate-400">ASTM D4052</td>
                                        <td className="px-4 py-3 text-right font-mono">0.844</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Flash Point</td>
                                        <td className="px-4 py-3 text-slate-400">ASTM D92</td>
                                        <td className="px-4 py-3 text-right font-mono">&ge; 210</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Pour Point</td>
                                        <td className="px-4 py-3 text-slate-400">ASTM D97</td>
                                        <td className="px-4 py-3 text-right font-mono">-42</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">CCS @ -30°C</td>
                                        <td className="px-4 py-3 text-slate-400">ASTM D5293</td>
                                        <td className="px-4 py-3 text-right font-mono">6200</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">TBN</td>
                                        <td className="px-4 py-3 text-slate-400">ASTM D2896</td>
                                        <td className="px-4 py-3 text-right font-mono">8.0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-slate-400 italic">
                            *Note: Typical value, may vary slightly. Please contact your SBK representative for the current batch COA (Certificate Of Analysis)
                        </p>
                    </div>

                </div>
            </section>
        </div>
    );
}