'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeatTransferOilPage() {
    // State to handle the interactive image gallery
    const [galleryState, setGalleryState] = useState({
        img: '/img/Drum-Red-(2).png',
        text: 'SBK Heat Transfer Oil',
        activeIndex: 0
    });

    const thumbnails = [
        { img: '/img/Drum-Red-(2).png', text: 'SBK Heat Transfer Oil Drum' },
        { img: '/img/Drum-Red-(2).png', text: 'SBK Heat Transfer Oil Drum' },
        { img: '/img/Drum-Red-(2).png', text: 'SBK Heat Transfer Oil Drum' }
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
            
            {/* Hero Banner Section with Industrial Background Image */}
            <section 
                className="relative bg-cover bg-center bg-no-repeat text-white py-16 md:py-24 overflow-hidden w-full" 
                style={{ backgroundImage: "url('/productbanner/industrial.jpg')" }}
            >
                {/* Dark overlay to ensure text readability over the image */}
                <div className="absolute inset-0 bg-black/50"></div>
                
                {/* Decorative blurs */}
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-green-600 rounded-full blur-3xl opacity-20 z-0"></div>
                <div className="absolute left-10 top-10 w-40 h-40 bg-red-600 rounded-full blur-3xl opacity-10 z-0"></div>

                <div className="container mx-auto px-4 relative z-10">
                    
                    <nav className="hidden md:flex items-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-200 mb-6 space-x-2 scroll-reveal delay-100">
                        <Link href="/" className="hover:text-white transition">Home</Link>
                        <span>/</span>
                        <Link href="/products/Industrial-Lubricants/heat-transfer-fluid" className="hover:text-white transition">Industrial Lubricants</Link>
                        <span>/</span>
                        <span className="text-green-400">SBK HEAT TRANSFER OIL</span>
                    </nav>

                    <div className="mb-4 scroll-reveal delay-200">
                        <span className="inline-block bg-[#10b981] text-white text-[11px] md:text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded">
                            HEAT TRANSFER OIL
                        </span>
                    </div>

                    <div className="max-w-4xl space-y-4">
                        <h1 className="text-white font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-tight md:leading-none scroll-reveal delay-300">
                            SBK HEAT TRANSFER OIL <br className="hidden md:block" />
                            <span></span>
                        </h1>
                        
                        <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-light pt-1 scroll-reveal delay-400">
                            SBK Heat Transfer Oil is a premium quality thermal fluid formulated from highly refined mineral base oils and advanced oxidation inhibitors. It is designed for use in closed heat transfer systems operating at high temperatures, offering high thermal stability, low volatility, and extended service life.
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
                            <i className="fas fa-info-circle mr-1 text-brand-gold"></i> Premium Quality Thermal Fluid
                        </p>
                    </div>

                    {/* Right Column: Product Details */}
                    <div className="lg:col-span-7 space-y-6 scroll-reveal reveal-right">
                        <div>
                            <span className="text-brand-gold font-semibold text-sm tracking-wider uppercase">INDUSTRIAL LUBRICANTS</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-1">SBK HEAT TRANSFER OIL</h2>
                            <p className="text-xl font-medium text-slate-500 mt-2">THERMAL FLUID</p>
                        </div>

                        <p className="text-slate-600 leading-relaxed">
                            SBK Heat Transfer Oil is a premium quality thermal fluid formulated from highly refined mineral base oils and advanced oxidation inhibitors. It is designed for use in closed heat transfer systems operating at high temperatures. The oil provides excellent thermal stability, efficient heat transfer, low volatility, and extended service life while minimizing sludge and deposit formation.
                        </p>

                        <div className="flex flex-wrap gap-3 pt-2">
                            <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                                <strong>Quantity:</strong> pail, drum, IBC
                            </div>
                            <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                                <strong>Available Grades:</strong> ISO VG 22, 32, 46, 68, 100, 150, 220
                            </div>
                            <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                                <strong>Category:</strong> Heat Transfer Oil
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                            <a href="https://wa.me/971569966391?text=Hello,%20I%20would%20like%20to%20inquire%20about%20SBK%20Heat%20Transfer%20Oil" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-brand-blue hover:bg-opacity-90 text-white font-medium rounded-lg shadow-md transition duration-200 text-sm flex items-center gap-2">
                                <i className="fab fa-whatsapp text-lg"></i> Inquire About This Product
                            </a>
                            <a href="/pdf/05-SBK HEAT TRANSFER OIL copy.pdf" download className="px-6 py-3 border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium rounded-lg transition duration-200 text-sm flex items-center gap-2">
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
                                "Excellent thermal and oxidation stability",
                                "High heat transfer efficiency",
                                "Reduced sludge and carbon deposits",
                                "Long service life",
                                "Low evaporation losses",
                                "Superior corrosion protection",
                                "Reliable operation at elevated temperatures"
                            ].map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <i className="fas fa-check-circle text-emerald-500 mt-1 flex-shrink-0"></i>
                                    <span className="text-slate-600 text-sm"><strong>{feature}</strong></span>
                                </li>
                            ))}
                        </ul>

                        <div className="bg-brand-light bg-opacity-40 p-5 rounded-xl border border-gray-200 mt-6">
                            <h3 className="font-bold text-slate-800 text-sm mb-2">MAIN APPLICATIONS</h3>
                            <ul className="text-slate-600 text-sm space-y-2 list-disc pl-4">
                                <li>Industrial heat transfer systems</li>
                                <li>Chemical and petrochemical plants</li>
                                <li>Textile and dyeing machinery</li>
                                <li>Asphalt and bitumen heating units</li>
                                <li>Plastic and rubber processing equipment</li>
                                <li>Heat exchangers and thermal oil heaters</li>
                                <li>Food processing and manufacturing industries</li>
                            </ul>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-xl border border-gray-200">
                            <h3 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-2">SPECIFICATIONS & RECOMMENDATIONS</h3>
                            <p className="text-slate-600 text-sm">
                                SBK Heat Transfer Oil is recommended for closed-loop heat transfer systems, heat exchangers, reactors, and industrial heating equipment in chemical, textile, and process industries operating up to <strong>320°C</strong>.
                            </p>
                        </div>
                    </div>

                    <div id="download-tds" className="space-y-4 scroll-reveal reveal-zoom">
                        <h2 className="text-2xl font-bold text-slate-800">PRODUCT SPECIFICATIONS</h2>
                        <div className="overflow-hidden border border-gray-200 rounded-xl shadow-sm overflow-x-auto">
                            <table className="w-full text-left border-collapse bg-white text-sm min-w-[600px]">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-gray-200 text-xs uppercase tracking-wider">
                                        <th className="px-3 py-3 font-semibold text-slate-700">Test Parameter</th>
                                        <th className="px-2 py-3 font-semibold text-slate-700 text-center">Test Method</th>
                                        <th colSpan="7" className="px-2 py-3 font-semibold text-slate-700 text-center">TYPICAL VALUE</th>
                                    </tr>
                                    <tr className="bg-slate-100/50 border-b border-gray-200 text-xs text-slate-500">
                                        <th colSpan="2" className="px-3 py-2 text-left font-semibold">Grade</th>
                                        <th className="px-2 py-2 text-center font-semibold">22</th>
                                        <th className="px-2 py-2 text-center font-semibold">32</th>
                                        <th className="px-2 py-2 text-center font-semibold">46</th>
                                        <th className="px-2 py-2 text-center font-semibold">68</th>
                                        <th className="px-2 py-2 text-center font-semibold">100</th>
                                        <th className="px-2 py-2 text-center font-semibold">150</th>
                                        <th className="px-2 py-2 text-center font-semibold">220</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-slate-600 text-xs">
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-3 py-3 font-medium text-slate-800">Appearance</td>
                                        <td className="px-2 py-3 text-center font-mono">Visual</td>
                                        <td className="px-2 py-3 text-center font-mono">C&B</td>
                                        <td className="px-2 py-3 text-center font-mono">C&B</td>
                                        <td className="px-2 py-3 text-center font-mono">C&B</td>
                                        <td className="px-2 py-3 text-center font-mono">C&B</td>
                                        <td className="px-2 py-3 text-center font-mono">C&B</td>
                                        <td className="px-2 py-3 text-center font-mono">C&B</td>
                                        <td className="px-2 py-3 text-center font-mono">C&B</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-3 py-3 font-medium text-slate-800">KV @ 40°C (cSt)</td>
                                        <td className="px-2 py-3 text-center font-mono">ASTM D445</td>
                                        <td className="px-2 py-3 text-center font-mono">22</td>
                                        <td className="px-2 py-3 text-center font-mono">32</td>
                                        <td className="px-2 py-3 text-center font-mono">46</td>
                                        <td className="px-2 py-3 text-center font-mono">68</td>
                                        <td className="px-2 py-3 text-center font-mono">100</td>
                                        <td className="px-2 py-3 text-center font-mono">150</td>
                                        <td className="px-2 py-3 text-center font-mono">220</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-3 py-3 font-medium text-slate-800">KV @ 100°C (cSt)</td>
                                        <td className="px-2 py-3 text-center font-mono">ASTM D445</td>
                                        <td className="px-2 py-3 text-center font-mono">4.3</td>
                                        <td className="px-2 py-3 text-center font-mono">5.3</td>
                                        <td className="px-2 py-3 text-center font-mono">6.7</td>
                                        <td className="px-2 py-3 text-center font-mono">8.6</td>
                                        <td className="px-2 py-3 text-center font-mono">11.1</td>
                                        <td className="px-2 py-3 text-center font-mono">14.6</td>
                                        <td className="px-2 py-3 text-center font-mono">19</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-3 py-3 font-medium text-slate-800">Viscosity Index</td>
                                        <td className="px-2 py-3 text-center font-mono">ASTM D2270</td>
                                        <td className="px-2 py-3 text-center font-mono">&ge; 95</td>
                                        <td className="px-2 py-3 text-center font-mono">&ge; 95</td>
                                        <td className="px-2 py-3 text-center font-mono">&ge; 95</td>
                                        <td className="px-2 py-3 text-center font-mono">&ge; 95</td>
                                        <td className="px-2 py-3 text-center font-mono">&ge; 95</td>
                                        <td className="px-2 py-3 text-center font-mono">&ge; 95</td>
                                        <td className="px-2 py-3 text-center font-mono">&ge; 95</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-3 py-3 font-medium text-slate-800">Density @ 15°C (g/cm³)</td>
                                        <td className="px-2 py-3 text-center font-mono">ASTM D4052</td>
                                        <td className="px-2 py-3 text-center font-mono">0.8545</td>
                                        <td className="px-2 py-3 text-center font-mono">0.8715</td>
                                        <td className="px-2 py-3 text-center font-mono">0.8753</td>
                                        <td className="px-2 py-3 text-center font-mono">0.8784</td>
                                        <td className="px-2 py-3 text-center font-mono">0.8811</td>
                                        <td className="px-2 py-3 text-center font-mono">0.8844</td>
                                        <td className="px-2 py-3 text-center font-mono">0.8868</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-3 py-3 font-medium text-slate-800">Flash Point (°C)</td>
                                        <td className="px-2 py-3 text-center font-mono">ASTM D92</td>
                                        <td className="px-2 py-3 text-center font-mono">200</td>
                                        <td className="px-2 py-3 text-center font-mono">200</td>
                                        <td className="px-2 py-3 text-center font-mono">210</td>
                                        <td className="px-2 py-3 text-center font-mono">220</td>
                                        <td className="px-2 py-3 text-center font-mono">220</td>
                                        <td className="px-2 py-3 text-center font-mono">230</td>
                                        <td className="px-2 py-3 text-center font-mono">&gt; 230</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-3 py-3 font-medium text-slate-800">Pour Point (°C)</td>
                                        <td className="px-2 py-3 text-center font-mono">ASTM D97</td>
                                        <td className="px-2 py-3 text-center font-mono">-12</td>
                                        <td className="px-2 py-3 text-center font-mono">-9</td>
                                        <td className="px-2 py-3 text-center font-mono">-9</td>
                                        <td className="px-2 py-3 text-center font-mono">-9</td>
                                        <td className="px-2 py-3 text-center font-mono">-9</td>
                                        <td className="px-2 py-3 text-center font-mono">-9</td>
                                        <td className="px-2 py-3 text-center font-mono">-9</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-slate-400 italic mt-3">
                            * Note: Typical value; may vary slightly. Please contact your SBK representative for the current batch COA (Certificate Of Analysis).
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}