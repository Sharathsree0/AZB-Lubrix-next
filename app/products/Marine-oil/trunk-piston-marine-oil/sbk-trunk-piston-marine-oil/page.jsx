'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SbkMarineTrunkPistonEngineOilPage() {
    // State to handle the interactive image gallery
    const [galleryState, setGalleryState] = useState({
        img: '/img/Drum-Red-(2).png',
        text: 'SBK MARINE TRUNK PISTON ENGINE OIL',
        activeIndex: 0
    });

    const thumbnails = [
        { img: '/img/Drum-Red-(2).png', text: 'SBK MARINE TRUNK PISTON ENGINE OIL - Pail' },
        { img: '/img/Drum-Red-(2).png', text: 'SBK MARINE TRUNK PISTON ENGINE OIL - Drum' },
        { img: '/img/Drum-Red-(2).png', text: 'SBK MARINE TRUNK PISTON ENGINE OIL - IBC' }
    ];

    const handleThumbClick = (imgSrc, text, index) => {
        setGalleryState({ img: imgSrc, text, activeIndex: index });
    };

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

        return () => {
            revealElements.forEach(element => {
                revealObserver.unobserve(element);
            });
            revealObserver.disconnect();
        };
    }, []);

    return (
        <div className="bg-white text-slate-700 antialiased">
            
            {/* Hero Banner Section */}
            <section 
                className="relative bg-[#030712] text-white py-12 md:py-16 font-sans border-b border-slate-900 overflow-hidden min-h-[350px] flex items-center bg-cover bg-center bg-no-repeat" 
                style={{ backgroundImage: "linear-gradient(to right, rgba(3, 7, 18, 0.95) 30%, rgba(3, 7, 18, 0.6) 70%, rgba(3, 7, 18, 0.4) 100%), url('/productbanner/marine.jpg')" }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                    
                    <nav className="flex items-center space-x-2 text-xs md:text-sm text-slate-400 mb-6 scroll-reveal delay-100">
                        <Link href="/" className="hover:text-white transition">Home</Link>
                        <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
                        <Link href="#" className="hover:text-white transition">Products</Link>
                        <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
                        <Link href="#" className="hover:text-white transition">Marine Oils</Link>
                        <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
                        <Link href="/sbk-trunk-piston-marine-oil" className="text-white font-medium">MARINE TRUNK PISTON ENGINE OIL</Link>
                    </nav>

                    <div className="mb-4 scroll-reveal delay-200">
                        <span className="inline-block bg-[#10b981] text-white text-[11px] md:text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded">
                            MARINE ENGINE OIL
                        </span>
                    </div>

                    <div className="max-w-4xl space-y-4">
                        <h1 className="text-white font-serif text-3xl md:text-5xl lg:text-5xl font-normal tracking-tight leading-tight scroll-reveal delay-300">
                            SBK MARINE TRUNK PISTON ENGINE OIL (TPEO)
                        </h1>
                        
                        <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-light pt-1 scroll-reveal delay-400">
                            SBK Marine Trunk Piston Engine Oil (TPEO) is a premium performance marine diesel engine lubricant specially developed for medium-speed trunk piston engines operating on distillate and residual fuels.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Product Content Section */}
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-20 font-sans overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    
                    {/* Left Column: Interactive Image Gallery */}
                    <div className="lg:col-span-5 space-y-4 scroll-reveal reveal-left">
                        <div className="bg-slate-50 rounded-2xl p-8 border border-gray-100 flex items-center justify-center min-h-[380px] shadow-sm relative overflow-hidden group">
                            <div className="text-center w-full h-full flex flex-col items-center justify-center">
                                <img 
                                    src={galleryState.img} 
                                    alt={galleryState.text} 
                                    className="max-h-64 w-auto object-contain mb-4 transition-transform duration-300 group-hover:scale-105"
                                />
                                <p className="text-slate-500 font-medium text-lg">{galleryState.text}</p>
                                <span className="inline-block mt-4 px-4 py-1 bg-brand-light text-brand-blue font-semibold text-xs rounded-full uppercase tracking-wider"> </span>
                            </div>
                        </div>

                        {/* Gallery Thumbnails */}
                        <div className="grid grid-cols-3 gap-3">
                            {thumbnails.map((thumb, idx) => (
                                <button 
                                    key={idx}
                                    onClick={() => handleThumbClick(thumb.img, thumb.text, idx)}
                                    className={`gallery-thumb-button bg-slate-50 p-2 rounded-xl flex items-center justify-center h-20 transition-all duration-200 focus:outline-none ${
                                        galleryState.activeIndex === idx 
                                        ? 'border-2 border-brand-gold' 
                                        : 'border border-gray-200 hover:border-gray-300'
                                    }`}
                                >
                                    <img 
                                        src={thumb.img} 
                                        alt={thumb.text} 
                                        className={`h-full w-auto object-contain pointer-events-none transition-opacity ${
                                            galleryState.activeIndex === idx ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                                        }`}
                                    />
                                </button>
                            ))}
                        </div>
                        
                        <p className="text-center text-[11px] text-slate-400 italic">
                            <i className="fas fa-info-circle mr-1 text-brand-gold"></i> Click thumbnails to alternate views.
                        </p>
                    </div>

                    {/* Right Column: Product Details */}
                    <div className="lg:col-span-7 space-y-6 scroll-reveal reveal-right">
                        <div>
                            <span className="text-brand-gold font-semibold text-sm tracking-wider uppercase">MARINE LUBRICANTS</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-1">SBK MARINE TRUNK PISTON ENGINE OIL</h2>
                            <p className="text-xl font-medium text-slate-500 mt-2">PRODUCT DATA SHEET</p>
                        </div>

                        <p className="text-slate-600 leading-relaxed">
                            SBK Marine Trunk Piston Engine Oil (TPEO) is a premium performance marine diesel engine lubricant specially developed for medium-speed trunk piston engines operating on distillate and residual fuels. Formulated with high-quality base oils and advanced detergent-dispersant additive technology, SBK TPEO provides excellent piston cleanliness, oxidation stability, wear protection, and resistance against sludge and deposit formation under severe marine operating conditions. SBK TPEO is designed to deliver reliable lubrication performance in marine propulsion engines, auxiliary engines, and power generation units operating in coastal, offshore, and deep-sea applications.
                        </p>

                        <div className="flex flex-wrap gap-3 pt-2">
                            <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                                <strong>Quantity:</strong> pail, drum
                            </div>
                            <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                                <strong>SAE Viscosity Grades:</strong> SAE 30, SAE 40
                            </div>
                            <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                                <strong>Base Numbers (BN):</strong> 12, 15, 20, 30, 40, 50
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                            <a href="https://wa.me/971569966391?text=Hello,%20I%20would%20like%20to%20inquire%20about%20SBK%20MARINE%20TRUNK%20PISTON%20ENGINE%20OIL" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-brand-blue hover:bg-opacity-90 text-white font-medium rounded-lg shadow-md transition duration-200 text-sm flex items-center gap-2">
                                <i className="fab fa-whatsapp text-lg"></i> Inquire About This Product
                            </a>
                            <a href="/pdf/24-MARINE OIL TPEO copy.pdf" download className="px-6 py-3 border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium rounded-lg transition duration-200 text-sm flex items-center gap-2">
                                <i className="fas fa-file-pdf text-red-500"></i> Download Product Data Sheet
                            </a>
                        </div>
                    </div>
                </div>

                {/* Features & Benefits Bottom Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 pt-12 border-t border-gray-100">
                    <div className="space-y-6 scroll-reveal">
                        <h2 className="text-2xl font-bold text-slate-800">PERFORMANCE, FEATURES & BENEFITS</h2>
                        <ul className="space-y-3">
                            {[
                                "Excellent piston cleanliness and deposit control",
                                "High resistance to oxidation and thermal degradation",
                                "Superior anti-wear protection for engine components",
                                "Effective neutralization of acidic combustion by-products",
                                "Excellent detergency and sludge control",
                                "Enhanced engine reliability and longer oil service life",
                                "Good water separation characteristics",
                                "Strong corrosion and rust protection"
                            ].map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="text-slate-600 text-sm">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="bg-brand-light bg-opacity-40 p-5 rounded-xl border border-gray-200 mt-6">
                            <h3 className="font-bold text-slate-800 text-sm mb-2">MAIN APPLICATIONS</h3>
                            <ul className="text-slate-600 text-sm space-y-1 list-disc pl-4">
                                <li>Medium-speed marine trunk piston diesel engines</li>
                                <li>Auxiliary marine engines</li>
                                <li>Marine power generation units</li>
                                <li>Coastal and deep-sea vessels</li>
                                <li>Engines operating on low sulfur and residual fuels</li>
                                <li>Marine reduction gears where engine manufacturer permits</li>
                            </ul>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-xl border border-gray-200">
                            <h3 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-2">SPECIFICATIONS & RECOMMENDATIONS</h3>
                            <ul className="text-slate-600 text-sm space-y-1 list-disc pl-4">
                                <li>API CF</li>
                                <li>Medium-speed marine diesel engines & auxiliary engines</li>
                                <li>Marine power generation systems</li>
                                <li>Engines operating on distillate and residual fuels</li>
                                <li>MAN, Energy Solutions | Wartsila Medium-Speed Engines</li>
                                <li>Caterpillar Marine Engines | Daihatsu Diesel Engines</li>
                                <li>Yanmar Marine Engines | Bergen Engines | MAK Marine Engines</li>
                            </ul>
                        </div>
                    </div>

                    <div id="download-tds" className="space-y-4 scroll-reveal reveal-zoom">
                        <h2 className="text-2xl font-bold text-slate-800">PRODUCT SPECIFICATIONS</h2>
                        <div className="overflow-hidden border border-gray-200 rounded-xl shadow-sm overflow-x-auto">
                            <table className="w-full text-left border-collapse bg-white text-sm min-w-[700px]">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-gray-200">
                                        <th className="px-3 py-2 font-semibold text-slate-700">TEST PARAMETER</th>
                                        <th className="px-3 py-2 font-semibold text-slate-700">METHOD</th>
                                        <th colSpan="6" className="px-2 py-2 font-semibold text-slate-700 text-center border-b border-gray-200">SAE 30</th>
                                        <th colSpan="6" className="px-2 py-2 font-semibold text-slate-700 text-center border-b border-gray-200">SAE 40</th>
                                    </tr>
                                    <tr className="bg-slate-100/50 border-b border-gray-200 text-xs text-slate-500">
                                        <th colSpan="2" className="px-3 py-1">BN No</th>
                                        <th className="px-1 py-1 text-center">12</th>
                                        <th className="px-1 py-1 text-center">15</th>
                                        <th className="px-1 py-1 text-center">20</th>
                                        <th className="px-1 py-1 text-center">30</th>
                                        <th className="px-1 py-1 text-center">40</th>
                                        <th className="px-1 py-1 text-center">50</th>
                                        <th className="px-1 py-1 text-center">12</th>
                                        <th className="px-1 py-1 text-center">15</th>
                                        <th className="px-1 py-1 text-center">20</th>
                                        <th className="px-1 py-1 text-center">30</th>
                                        <th className="px-1 py-1 text-center">40</th>
                                        <th className="px-1 py-1 text-center">50</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-slate-600 text-xs">
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-3 py-2 font-medium text-slate-800">Appearance</td>
                                        <td className="px-3 py-2 text-slate-400">Visual</td>
                                        <td className="px-1 py-2 text-center font-mono">C&B</td>
                                        <td className="px-1 py-2 text-center font-mono">C&B</td>
                                        <td className="px-1 py-2 text-center font-mono">C&B</td>
                                        <td className="px-1 py-2 text-center font-mono">C&B</td>
                                        <td className="px-1 py-2 text-center font-mono">C&B</td>
                                        <td className="px-1 py-2 text-center font-mono">C&B</td>
                                        <td className="px-1 py-2 text-center font-mono">C&B</td>
                                        <td className="px-1 py-2 text-center font-mono">C&B</td>
                                        <td className="px-1 py-2 text-center font-mono">C&B</td>
                                        <td className="px-1 py-2 text-center font-mono">C&B</td>
                                        <td className="px-1 py-2 text-center font-mono">C&B</td>
                                        <td className="px-1 py-2 text-center font-mono">C&B</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-3 py-2 font-medium text-slate-800">KV @ 40°C</td>
                                        <td className="px-3 py-2 text-slate-400">ASTM D445</td>
                                        <td className="px-1 py-2 text-center font-mono">TBR</td>
                                        <td className="px-1 py-2 text-center font-mono">TBR</td>
                                        <td className="px-1 py-2 text-center font-mono">TBR</td>
                                        <td className="px-1 py-2 text-center font-mono">TBR</td>
                                        <td className="px-1 py-2 text-center font-mono">TBR</td>
                                        <td className="px-1 py-2 text-center font-mono">TBR</td>
                                        <td className="px-1 py-2 text-center font-mono">TBR</td>
                                        <td className="px-1 py-2 text-center font-mono">TBR</td>
                                        <td className="px-1 py-2 text-center font-mono">TBR</td>
                                        <td className="px-1 py-2 text-center font-mono">TBR</td>
                                        <td className="px-1 py-2 text-center font-mono">TBR</td>
                                        <td className="px-1 py-2 text-center font-mono">TBR</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-3 py-2 font-medium text-slate-800">KV @ 100°C</td>
                                        <td className="px-3 py-2 text-slate-400">ASTM D445</td>
                                        <td className="px-1 py-2 text-center font-mono">10.5</td>
                                        <td className="px-1 py-2 text-center font-mono">10.5</td>
                                        <td className="px-1 py-2 text-center font-mono">10.5</td>
                                        <td className="px-1 py-2 text-center font-mono">10.5</td>
                                        <td className="px-1 py-2 text-center font-mono">10.5</td>
                                        <td className="px-1 py-2 text-center font-mono">10.5</td>
                                        <td className="px-1 py-2 text-center font-mono">14.5</td>
                                        <td className="px-1 py-2 text-center font-mono">14.5</td>
                                        <td className="px-1 py-2 text-center font-mono">14.5</td>
                                        <td className="px-1 py-2 text-center font-mono">14.5</td>
                                        <td className="px-1 py-2 text-center font-mono">14.5</td>
                                        <td className="px-1 py-2 text-center font-mono">14.5</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-3 py-2 font-medium text-slate-800">Viscosity Index</td>
                                        <td className="px-3 py-2 text-slate-400">ASTM D2270</td>
                                        <td className="px-1 py-2 text-center font-mono">290</td>
                                        <td className="px-1 py-2 text-center font-mono">290</td>
                                        <td className="px-1 py-2 text-center font-mono">290</td>
                                        <td className="px-1 py-2 text-center font-mono">290</td>
                                        <td className="px-1 py-2 text-center font-mono">290</td>
                                        <td className="px-1 py-2 text-center font-mono">290</td>
                                        <td className="px-1 py-2 text-center font-mono">290</td>
                                        <td className="px-1 py-2 text-center font-mono">290</td>
                                        <td className="px-1 py-2 text-center font-mono">290</td>
                                        <td className="px-1 py-2 text-center font-mono">290</td>
                                        <td className="px-1 py-2 text-center font-mono">290</td>
                                        <td className="px-1 py-2 text-center font-mono">290</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-3 py-2 font-medium text-slate-800">Density @ 15°C</td>
                                        <td className="px-3 py-2 text-slate-400">ASTM D4052</td>
                                        <td className="px-1 py-2 text-center font-mono">0.8876</td>
                                        <td className="px-1 py-2 text-center font-mono">0.8892</td>
                                        <td className="px-1 py-2 text-center font-mono">0.8920</td>
                                        <td className="px-1 py-2 text-center font-mono">0.8972</td>
                                        <td className="px-1 py-2 text-center font-mono">0.9025</td>
                                        <td className="px-1 py-2 text-center font-mono">0.9076</td>
                                        <td className="px-1 py-2 text-center font-mono">0.8907</td>
                                        <td className="px-1 py-2 text-center font-mono">0.8923</td>
                                        <td className="px-1 py-2 text-center font-mono">0.8923</td>
                                        <td className="px-1 py-2 text-center font-mono">0.8998</td>
                                        <td className="px-1 py-2 text-center font-mono">0.9053</td>
                                        <td className="px-1 py-2 text-center font-mono">0.9107</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-3 py-2 font-medium text-slate-800">Flash Point (°C)</td>
                                        <td className="px-3 py-2 text-slate-400">ASTM D92</td>
                                        <td className="px-1 py-2 text-center font-mono">&ge; 200</td>
                                        <td className="px-1 py-2 text-center font-mono">&ge; 200</td>
                                        <td className="px-1 py-2 text-center font-mono">&ge; 200</td>
                                        <td className="px-1 py-2 text-center font-mono">&ge; 200</td>
                                        <td className="px-1 py-2 text-center font-mono">&ge; 200</td>
                                        <td className="px-1 py-2 text-center font-mono">&ge; 200</td>
                                        <td className="px-1 py-2 text-center font-mono">&ge; 200</td>
                                        <td className="px-1 py-2 text-center font-mono">&ge; 200</td>
                                        <td className="px-1 py-2 text-center font-mono">&ge; 200</td>
                                        <td className="px-1 py-2 text-center font-mono">&ge; 200</td>
                                        <td className="px-1 py-2 text-center font-mono">&ge; 200</td>
                                        <td className="px-1 py-2 text-center font-mono">&ge; 200</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-3 py-2 font-medium text-slate-800">Pour Point (°C)</td>
                                        <td className="px-3 py-2 text-slate-400">ASTM D97</td>
                                        <td className="px-1 py-2 text-center font-mono">-9</td>
                                        <td className="px-1 py-2 text-center font-mono">-9</td>
                                        <td className="px-1 py-2 text-center font-mono">-9</td>
                                        <td className="px-1 py-2 text-center font-mono">-9</td>
                                        <td className="px-1 py-2 text-center font-mono">-9</td>
                                        <td className="px-1 py-2 text-center font-mono">-9</td>
                                        <td className="px-1 py-2 text-center font-mono">-9</td>
                                        <td className="px-1 py-2 text-center font-mono">-9</td>
                                        <td className="px-1 py-2 text-center font-mono">-9</td>
                                        <td className="px-1 py-2 text-center font-mono">-9</td>
                                        <td className="px-1 py-2 text-center font-mono">-9</td>
                                        <td className="px-1 py-2 text-center font-mono">-9</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-3 py-2 font-medium text-slate-800">TBN (mg KOH/g)</td>
                                        <td className="px-3 py-2 text-slate-400">ASTM D2896</td>
                                        <td className="px-1 py-2 text-center font-mono">12</td>
                                        <td className="px-1 py-2 text-center font-mono">15</td>
                                        <td className="px-1 py-2 text-center font-mono">20</td>
                                        <td className="px-1 py-2 text-center font-mono">30</td>
                                        <td className="px-1 py-2 text-center font-mono">40</td>
                                        <td className="px-1 py-2 text-center font-mono">50</td>
                                        <td className="px-1 py-2 text-center font-mono">12</td>
                                        <td className="px-1 py-2 text-center font-mono">15</td>
                                        <td className="px-1 py-2 text-center font-mono">20</td>
                                        <td className="px-1 py-2 text-center font-mono">30</td>
                                        <td className="px-1 py-2 text-center font-mono">40</td>
                                        <td className="px-1 py-2 text-center font-mono">50</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-slate-400 italic">
                            *Note: Typical value may vary slightly. Please contact your SBK representative for the current batch COA (Certificate Of Analysis)
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}