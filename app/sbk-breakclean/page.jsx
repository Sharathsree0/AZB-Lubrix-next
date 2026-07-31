'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SBKBrakeCleanPro() {
    // Gallery State
    const [mainImage, setMainImage] = useState('productimage/BREAKCLEANPRO400ML.png');
    const [mainLabel, setMainLabel] = useState('SBK BrakeClean Pro - 400ML');
    
    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);

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
            
            {/* Download Modal conditionally rendered */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 transition-opacity duration-300">
                    <div className="bg-white rounded-2xl p-6 max-w-xs w-full shadow-2xl border border-gray-100 text-center transform transition-transform duration-300 relative z-10">
                        <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                            <i className="fas fa-file-pdf"></i>
                        </div>
                        <h3 className="text-slate-800 text-base font-extrabold mb-1">Data Sheet Coming Soon</h3>
                        <p className="text-gray-500 text-xs leading-relaxed mb-5">The downloadable PDF specification sheet for this product is currently being updated and will be available shortly.</p>
                        <button 
                            onClick={() => setIsModalOpen(false)} 
                            className="w-full py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                        >
                            Got it
                        </button>
                    </div>
                </div>
            )}

            {/* Hero Banner Section */}
            <section 
                className="relative bg-[#030712] text-white py-12 md:py-16 font-sans border-b border-slate-900 overflow-hidden min-h-[350px] flex items-center bg-cover bg-center bg-no-repeat" 
                style={{ backgroundImage: "url('productbanner/car-care.jpeg')" }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                    <nav className="flex items-center space-x-2 text-xs md:text-sm text-slate-400 mb-6 scroll-reveal delay-100">
                        <Link href="/" className="text-white transition">Home</Link>
                        <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
                        <Link href="/#products" className="text-white transition">Products</Link>
                        <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
                        <Link href="/carcare-category" className="text-white transition">Car Care Products</Link>
                    </nav>

                    <div className="mb-4 scroll-reveal delay-200">
                        <span className="inline-block bg-[#10b981] text-white text-[11px] md:text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded">
                            Car Care Products
                        </span>
                    </div>

                    <div className="max-w-4xl space-y-4">
                        <h1 className="text-black font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-tight md:leading-none scroll-reveal delay-300">
                            SBK BrakeClean Pro
                        </h1>
                        <p className="text-black text-sm md:text-base leading-relaxed max-w-2xl font-light pt-1 scroll-reveal delay-400">
                            Ultra-powerful degreasing formula engineered to instantly flush away brake fluid, grease, oil, and hazardous brake dust from rotors, drums, calipers, and pads.
                        </p>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 py-12 md:py-20 font-sans overflow-hidden">
                {/* Product Header & Core Info Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    
                    {/* Product Multiple Image Gallery */}
                    <div className="lg:col-span-5 space-y-4 scroll-reveal reveal-left">
                        <div className="bg-slate-50 rounded-2xl p-8 border border-gray-100 flex items-center justify-center min-h-[380px] shadow-sm relative overflow-hidden group">
                            <div className="text-center w-full h-full flex flex-col items-center justify-center">
                                <img 
                                    src={mainImage} 
                                    alt={mainLabel} 
                                    className="max-h-64 w-auto object-contain mb-4 transition-transform duration-300 group-hover:scale-105" 
                                />
                                <p className="text-slate-500 font-medium text-lg">{mainLabel}</p>
                                <span className="inline-block mt-4 px-4 py-1 bg-brand-light text-brand-blue font-semibold text-xs rounded-full uppercase tracking-wider">Heavy Duty Degreaser</span>
                            </div>
                            <span className="absolute top-4 left-4 bg-brand-blue text-white font-bold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded">
                                Non-Chlorinated
                            </span>
                        </div>

                        <div className="grid grid-cols-4 gap-3">
                            <button 
                                onClick={() => {
                                    setMainImage('productimage/BREAKCLEANPR200ML.png');
                                    setMainLabel('SBK BrakeClean Pro - 200ML');
                                }} 
                                className={`bg-slate-50 p-2 rounded-xl flex items-center justify-center h-20 transition-all duration-200 focus:outline-none ${mainImage === 'productimage/BREAKCLEANPR200ML.png' ? 'border-2 border-brand-gold' : 'border border-gray-200 hover:border-gray-300'}`}
                            >
                                <img src="productimage/BREAKCLEANPR200ML.png" alt="SBK BrakeClean Pro 200ML" className={`h-full w-auto object-contain pointer-events-none transition-opacity ${mainImage === 'productimage/BREAKCLEANPR200ML.png' ? '' : 'opacity-70 hover:opacity-100'}`} />
                            </button>
                            
                            <button 
                                onClick={() => {
                                    setMainImage('productimage/BREAKCLEANPRO400ML.png');
                                    setMainLabel('SBK BrakeClean Pro - 400ML');
                                }} 
                                className={`bg-slate-50 p-2 rounded-xl flex items-center justify-center h-20 transition-all duration-200 focus:outline-none ${mainImage === 'productimage/BREAKCLEANPRO400ML.png' ? 'border-2 border-brand-gold' : 'border border-gray-200 hover:border-gray-300'}`}
                            >
                                <img src="productimage/BREAKCLEANPRO400ML.png" alt="SBK BrakeClean Pro 400ML" className={`h-full w-auto object-contain pointer-events-none transition-opacity ${mainImage === 'productimage/BREAKCLEANPRO400ML.png' ? '' : 'opacity-70 hover:opacity-100'}`} />
                            </button>
                        </div>
                        
                        <p className="text-center text-[11px] text-slate-400 italic">
                            <i className="fas fa-info-circle mr-1 text-brand-gold"></i> Click thumbnails to alternate views.
                        </p>
                    </div>

                    {/* Product Details Column */}
                    <div className="lg:col-span-7 space-y-6 scroll-reveal reveal-right">
                        <div>
                            <span className="text-brand-gold font-semibold text-sm tracking-wider uppercase">Car Care Products </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-1">SBK BrakeClean Pro</h2>
                            <p className="text-xl font-medium text-slate-500 mt-2">Professional Brake &amp; Parts Cleaner</p>
                        </div>

                        <p className="text-slate-600 leading-relaxed">
                            SBK BrakeClean Pro is formulated to optimize modern braking system sensitivity and safety. Its intense, pressurized delivery blast instantly cuts through baked-on friction dust, oily fluids, and road grime without leaving behind toxic residues or slick films. Clean components maximize brake pad friction grip, silence irritating brake squeal, and reduce stopping distances.
                        </p>

                        {/* Quick Specs Badges */}
                        <div className="flex flex-wrap gap-3 pt-2">
                            <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                                <strong>Quantity:</strong> 200ml, 400ml,
                            </div>
                            <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                                <strong>Category:</strong> Friction &amp; Brake Maintenance
                            </div>
                            <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                                <strong>Residue:</strong> Zero-Film Fast Dry
                            </div>
                            <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                                <strong>Safety:</strong> Non-Chlorinated Formula
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                            <a href="https://wa.me/97167447843?text=Hello,%20I%20would%20like%20to%20inquire%20about%20SBK%20BrakeClean%20Pro" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-brand-blue hover:bg-opacity-90 text-white font-medium rounded-lg shadow-md transition duration-200 text-sm flex items-center gap-2">
                                <i className="fab fa-whatsapp text-lg"></i> Inquire About This Product
                            </a>
                            
                            <button 
                                onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}
                                className="px-6 py-3 border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium rounded-lg transition duration-200 text-sm flex items-center gap-2 cursor-pointer"
                            >
                                <i className="fas fa-file-pdf text-red-500"></i> Download Product Data Sheet
                            </button>
                        </div>
                    </div>
                </div>

                {/* Product Features & Technical Data Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 pt-12 border-t border-gray-100">
                    
                    {/* Key Benefits & Applications */}
                    <div className="space-y-6 scroll-reveal">
                        <h2 className="text-2xl font-bold text-slate-800">Features &amp; Benefits</h2>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 scroll-reveal delay-100">
                                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                                <span className="text-slate-600 text-sm"><strong>High-Pressure Jet Blast:</strong> Rapidly dislodges embedded friction contaminants and metallic powders from deep within hidden recesses.</span>
                            </li>
                            <li className="flex items-start gap-3 scroll-reveal delay-200">
                                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                                <span className="text-slate-600 text-sm"><strong>Eliminates Squeals &amp; Chatters:</strong> Strips down slippery glazing and oil films that induce noise and unsafe pedal fade.</span>
                            </li>
                            <li className="flex items-start gap-3 scroll-reveal delay-300">
                                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                                <span className="text-slate-600 text-sm"><strong>Rapid Flash Evaporation:</strong> Cleans thoroughly within seconds and air-dries instantly, minimizing shop downtime.</span>
                            </li>
                            <li className="flex items-start gap-3 scroll-reveal delay-400">
                                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                                <span className="text-slate-600 text-sm"><strong>Protects Metal Finishes:</strong> Safe on alloy wheels, bare calipers, and metallic assemblies when deployed across standard maintenance routines.</span>
                            </li>
                        </ul>

                        <div className="bg-brand-light bg-opacity-40 p-5 rounded-xl border border-gray-200 mt-6 scroll-reveal delay-200">
                            <h3 className="font-bold text-slate-800 text-sm mb-2">Typical Applications</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Specially tailored for disc rotors, drum brake assemblies, brake linings, master cylinders, springs, caliper guides, clutch plates, and CV joint housings requiring rigorous grease removal.
                            </p>
                        </div>
                    </div>

                    {/* Technical Data Sheet (TDS) Table */}
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
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Appearance</td>
                                        <td className="px-4 py-3 text-slate-400">Visual</td>
                                        <td className="px-4 py-3 text-right font-mono">Clear, Transparent Liquid</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Density @ 15°C, g/ml</td>
                                        <td className="px-4 py-3 text-slate-400">ASTM D4052</td>
                                        <td className="px-4 py-3 text-right font-mono">0.710 – 0.735</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Flash Point, °C</td>
                                        <td className="px-4 py-3 text-slate-400">ASTM D93</td>
                                        <td className="px-4 py-3 text-right font-mono">&lt; -15°C</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Chlorinated Solvents</td>
                                        <td className="px-4 py-3 text-slate-400">GC-MS</td>
                                        <td className="px-4 py-3 text-right font-mono">None (0%)</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Evaporation Speed</td>
                                        <td className="px-4 py-3 text-slate-400">Internal</td>
                                        <td className="px-4 py-3 text-right font-mono">Instantaneous</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-slate-400 italic">
                            * Note: The engineering parameters mentioned above are typical values representative of continuous production runs. Minor standard manufacturing variances can occur.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}