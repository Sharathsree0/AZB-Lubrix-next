'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SBKSouw32() {
    // Gallery State
    const [mainImage, setMainImage] = useState('productimage/souw325L.png');
    const [mainLabel, setMainLabel] = useState('SBK SOUW-32');
    const [activeThumb, setActiveThumb] = useState(2);

    // Thumbnails definition
    const thumbnails = [
        { src: 'img/Drum-Red-(2).png', alt: 'SBK SOUW-32 Canister', desc: 'SBK SOUW-32' },
        { src: 'img/Drum-Red-(2).png', alt: 'SBK SOUW-32 Drum', desc: 'SBK SOUW-32' },
        { src: 'productimage/souw325L.png', alt: 'SBK SOUW-32 IBC', desc: 'SBK SOUW-32' }
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
                style={{ backgroundImage: "linear-gradient(to right, rgba(3, 7, 18, 0.95) 30%, rgba(3, 7, 18, 0.6) 70%, rgba(3, 7, 18, 0.4) 100%), url('productbanner/dieselexhaustfluid.jpeg')" }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                    
                    <nav className="flex items-center space-x-2 text-xs md:text-sm text-slate-400 mb-6 scroll-reveal delay-100">
                        <Link href="/" className="hover:text-white transition">Home</Link>
                        <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
                        <Link href="/#products" className="hover:text-white transition">Products</Link>
                        <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
                        <Link href="/hydraulic-oil" className="hover:text-white transition">Industrial Lubricants</Link>
                        <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
                        <span className="text-white font-medium">SBK SOUW-32</span>
                    </nav>

                    <div className="mb-4 scroll-reveal delay-200">
                        <span className="inline-block bg-[#10b981] text-white text-[11px] md:text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded">
                            DIESEL EXHAUST FLUID
                        </span>
                    </div>

                    <div className="max-w-4xl space-y-4">
                        <h1 className="text-white font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-tight md:leading-none scroll-reveal delay-300">
                            SBK SOUW-32 <br className="hidden md:block" />
                            <span></span>
                        </h1>
                        
                        <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-light pt-1 scroll-reveal delay-400">
                            SBK SOUW-32 is a high-purity Diesel Exhaust Fluid (DEF) formulated with 32.5% automotive-grade urea and demineralized water for use in SCR (Selective Catalytic Reduction) systems of modern diesel engines. It is designed to reduce harmful NOx emissions, improve exhaust after-treatment efficiency, and support compliance with Euro IV, Euro V, and Euro VI emission standards.
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
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-1">SBK SOUW-32</h2>
                            <p className="text-xl font-medium text-slate-500 mt-2">DIESEL EXHAUST FLUID</p>
                        </div>

                        <p className="text-slate-600 leading-relaxed">
                            SBK SOUW-32 is a high-purity Diesel Exhaust Fluid (DEF) formulated with 32.5% automotive-grade urea and demineralized water for use in SCR (Selective Catalytic Reduction) systems of modern diesel engines. It is designed to reduce harmful NOx emissions, improve exhaust after-treatment efficiency, and support compliance with Euro IV, Euro V, and Euro VI emission standards in commercial vehicles, passenger cars, buses, construction equipment, and agricultural machinery.
                        </p>

                        <div className="flex flex-wrap gap-3 pt-2">
                            <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                                <strong>Quantity:</strong> drum, IBC
                            </div>
                            <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                                <strong>Category:</strong> Diesel Exhaust Fluid (DEF)
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                            <a href="https://wa.me/97167447843?text=Hello,%20I%20would%20like%20to%20inquire%20about%20SBK%20SOUW-32" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-brand-blue hover:bg-opacity-90 text-white font-medium rounded-lg shadow-md transition duration-200 text-sm flex items-center gap-2">
                                <i className="fab fa-whatsapp text-lg"></i> Inquire About This Product
                            </a>
                            <a href="pdf/10-SOUW-32 copy.pdf" download className="px-6 py-3 border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium rounded-lg transition duration-200 text-sm flex items-center gap-2">
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
                                <span className="text-slate-600 text-sm"><strong>Reduces harmful NOx emissions effectively</strong></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                                <span className="text-slate-600 text-sm"><strong>Protects SCR catalyst systems from deposits and contamination</strong></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                                <span className="text-slate-600 text-sm"><strong>Manufactured using high-purity automotive urea</strong></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                                <span className="text-slate-600 text-sm"><strong>Helps maintain optimal engine emission performance</strong></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                                <span className="text-slate-600 text-sm"><strong>Compatible with all vehicles requiring DEF</strong></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                                <span className="text-slate-600 text-sm"><strong>Non-toxic, non-flammable, and environmentally safer</strong></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                                <span className="text-slate-600 text-sm"><strong>Excellent storage and handling</strong></span>
                            </li>
                        </ul>

                        <div className="bg-brand-light bg-opacity-40 p-5 rounded-xl border border-gray-200 mt-6">
                            <h3 className="font-bold text-slate-800 text-sm mb-2">MAIN APPLICATIONS</h3>
                            <ul className="text-slate-600 text-sm space-y-2 list-disc pl-4">
                                <li><strong>Heavy-duty diesel trucks</strong></li>
                                <li><strong>Passenger diesel vehicles with SCR systems</strong></li>
                                <li><strong>Buses and commercial fleets</strong></li>
                                <li><strong>Agricultural and construction equipment</strong></li>
                                <li><strong>Euro IV / V / VI compliant diesel engines</strong></li>
                            </ul>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-xl border border-gray-200">
                            <h3 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-2">SPECIFICATIONS & RECOMMENDATIONS</h3>
                            <ul className="text-slate-600 text-sm space-y-1 list-disc pl-4">
                                <li>ISO 22241</li>
                                <li>DIN 70070</li>
                                <li>Suitable for SCR-equipped diesel engines requiring DEF fluid</li>
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
                                        <th className="px-4 py-3 font-semibold text-slate-700 text-center">MINIMUM</th>
                                        <th className="px-4 py-3 font-semibold text-slate-700 text-center">MAXIMUM</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-slate-600">
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Appearance</td>
                                        <td className="px-3 py-3 text-center font-mono font-medium text-slate-800">Clear and bright</td>
                                        <td className="px-3 py-3 text-center font-mono font-medium text-slate-800">Clear and bright</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Urea Content % (m/m)</td>
                                        <td className="px-3 py-3 text-center font-mono">31.8</td>
                                        <td className="px-3 py-3 text-center font-mono">33.2</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Density at 20°C (kg/m³)</td>
                                        <td className="px-3 py-3 text-center font-mono">1087.0</td>
                                        <td className="px-3 py-3 text-center font-mono">1093.0</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Refractive Index at 20°C</td>
                                        <td className="px-3 py-3 text-center font-mono">1.3814</td>
                                        <td className="px-3 py-3 text-center font-mono">1.3843</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Alkalinity as NH3 % (m/m)</td>
                                        <td className="px-3 py-3 text-center font-mono">-</td>
                                        <td className="px-3 py-3 text-center font-mono">0.2</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Biuret % (m/m)</td>
                                        <td className="px-3 py-3 text-center font-mono">-</td>
                                        <td className="px-3 py-3 text-center font-mono">0.3</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Aldehydes mg/kg</td>
                                        <td className="px-3 py-3 text-center font-mono">-</td>
                                        <td className="px-3 py-3 text-center font-mono">6</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Insoluble matter, mg/kg</td>
                                        <td className="px-3 py-3 text-center font-mono">-</td>
                                        <td className="px-3 py-3 text-center font-mono">20</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Phosphate (PO4), mg/kg</td>
                                        <td className="px-3 py-3 text-center font-mono">-</td>
                                        <td className="px-3 py-3 text-center font-mono">0.5</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Calcium, mg/kg</td>
                                        <td className="px-3 py-3 text-center font-mono">-</td>
                                        <td className="px-3 py-3 text-center font-mono">0.5</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Iron, mg/kg</td>
                                        <td className="px-3 py-3 text-center font-mono">-</td>
                                        <td className="px-3 py-3 text-center font-mono">0.5</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Copper, mg/kg</td>
                                        <td className="px-3 py-3 text-center font-mono">-</td>
                                        <td className="px-3 py-3 text-center font-mono">0.2</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Zinc, mg/kg</td>
                                        <td className="px-3 py-3 text-center font-mono">-</td>
                                        <td className="px-3 py-3 text-center font-mono">0.2</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Chromium, mg/kg</td>
                                        <td className="px-3 py-3 text-center font-mono">-</td>
                                        <td className="px-3 py-3 text-center font-mono">0.2</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Nickel, mg/kg</td>
                                        <td className="px-3 py-3 text-center font-mono">-</td>
                                        <td className="px-3 py-3 text-center font-mono">0.2</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Aluminum, mg/kg</td>
                                        <td className="px-3 py-3 text-center font-mono">-</td>
                                        <td className="px-3 py-3 text-center font-mono">0.5</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">Density @ 15°C (mg/kg approx)</td>
                                        <td className="px-3 py-3 text-center font-mono">-</td>
                                        <td className="px-3 py-3 text-center font-mono">0.5</td>
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
        </div>
    );
}