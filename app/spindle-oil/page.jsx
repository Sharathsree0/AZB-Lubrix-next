'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';

export default function SBKSpindle() {
    // Gallery State
    const [mainImage, setMainImage] = useState('img/Drum-Red-(2).png');
    const [mainLabel, setMainLabel] = useState('SBK SPINDLE OIL');
    const [activeThumb, setActiveThumb] = useState(0);

    // Thumbnails definition
    const thumbnails = [
        { src: 'img/Drum-Red-(2).png', alt: 'SBK SPINDLE OIL 1L', desc: 'SBK SPINDLE OIL - Pail' },
        { src: 'img/Drum-Red-(2).png', alt: 'SBK SPINDLE OIL 4L', desc: 'SBK SPINDLE OIL - Drum' },
        { src: 'img/Drum-Red-(2).png', alt: 'SBK SPINDLE OIL 5L', desc: 'SBK SPINDLE OIL - IBC' }
    ];

    // Intersection Observer for scroll animations
    useEffect(() => {
        const revealElements = document.querySelectorAll('.scroll-animate');
        
        const revealOptions = {
            threshold: 0.05,
            rootMargin: '0px 0px -12% 0px'
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
        <div className="bg-white text-slate-700 antialiased">
            
            {/* Full-Width Premium Product Category Banner */}
            <section 
                className="relative bg-cover bg-center bg-no-repeat text-white py-16 md:py-18 overflow-hidden w-full" 
                style={{ backgroundImage: "url('productbanner/textile.jpg')" }}
            >
                <div className="absolute inset-0"></div>
                
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-green-600 rounded-full blur-3xl opacity-20 z-0"></div>
                <div className="absolute left-10 top-10 w-40 h-40 bg-red-600 rounded-full blur-3xl opacity-10 z-0"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        {/* Breadcrumb Path */}
                        <nav className="hidden md:flex items-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-200 mb-6 space-x-2">
                            <Link href="/" className="hover:text-green-500 transition">Home</Link>
                            <span>/</span>
                            <Link href="/textile-oil" className="hover:text-green-500 transition">TEXTILE OIL</Link>
                            <span>/</span>
                            <Link href="/spindle-oil" className="hover:text-green-500 transition">SPINDLE OIL</Link>
                            <span>/</span>
                            <span className="text-green-400">SBK SPINDLE OIL</span>
                        </nav>

                        <span className="hidden md:inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4 shadow-lg">
                            High Performance SPINDLE OIL
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-md">
                            SPINDLE <span className="text-green-400">OIL</span>
                        </h1>
                        <p className="hidden md:block text-gray-100 text-base md:text-lg leading-relaxed drop-shadow-sm">
                            Formulated for high-speed spindles in textile and precision machine tools. Delivers low-viscosity, friction-free lubrication with excellent oxidation stability and rust protection, preventing thermal expansion and ensuring smooth, vibration-free operation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Workspace Layout Container */}
            <div className="bg-gray-50 min-h-screen py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                        
                        {/* LEFT COLUMN: Sidebar Component */}
                        <Sidebar />

                        {/* RIGHT COLUMN: Product Detail Layout */}
                        <main className="lg:col-span-3">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 gap-4">
                                <div className="border-b border-gray-200 pb-6 mb-8">
                                    <h2 className="text-2xl md:text-3xl font-extrabold text-green-600 tracking-tight">
                                        Spindle Oil
                                    </h2>
                                    <p className="text-sm text-gray-500 mt-2 font-medium">
                                        Showing premium high-performance lubricants from your selection.
                                    </p>
                                </div>
                                <div className="text-xs font-medium text-slate-500 bg-white border border-gray-200 rounded-md px-3 py-1.5 shadow-sm">
                                    Total Items: <span className="text-green-600 font-bold">1</span>
                                </div>
                            </div>

                            {/* Product Detail Section */}
                            <section className="max-w-7xl mx-auto px-0 py-4 font-sans overflow-hidden">
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                                    
                                    {/* Product Gallery Column */}
                                    <div className="lg:col-span-5 space-y-4 scroll-animate reveal-left">
                                        <div className="bg-slate-50 rounded-2xl p-8 border border-gray-100 flex items-center justify-center min-h-[380px] shadow-sm relative overflow-hidden group">
                                            <div className="text-center w-full h-full flex flex-col items-center justify-center">
                                                <img 
                                                    src={mainImage} 
                                                    alt={mainLabel} 
                                                    className="max-h-64 w-auto object-contain mb-4 transition-transform duration-300 group-hover:scale-105" 
                                                />
                                                <p className="text-slate-500 font-medium text-lg">{mainLabel}</p>
                                                <span className="inline-block mt-4 px-4 py-1 bg-brand-light text-brand-blue font-semibold text-xs rounded-full uppercase tracking-wider">TEXTILE OIL</span>
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
                                    <div className="lg:col-span-7 space-y-6 scroll-animate reveal-right">
                                        <div>
                                            <span className="text-brand-gold font-semibold text-sm tracking-wider uppercase">Spindle Oil</span>
                                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-1">SBK SPINDLE OIL</h2>
                                            <p className="text-xl font-medium text-slate-500 mt-2">Precision High-Speed Lubricant</p>
                                        </div>

                                        <p className="text-slate-600 leading-relaxed">
                                            Ultra-light precision lubricant formulated for high-speed spindles and bearings, offering superior heat dissipation, oxidation stability, and vibration-free operation under high RPMs.
                                        </p>

                                        <div className="flex flex-wrap gap-3 pt-2">
                                            <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                                                <strong>Quantity:</strong> Pail, Drum, IBC
                                            </div>
                                            <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                                                <strong>Category:</strong> Textile Lubricants
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                                            <a href="https://wa.me/97167447843?text=Hello,%20I%20would%20like%20to%20inquire%20about%20SBK%20SPINDLE%20OIL" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-brand-blue hover:bg-opacity-90 text-white font-medium rounded-lg shadow-md transition duration-200 text-sm flex items-center gap-2">
                                                <i className="fab fa-whatsapp text-lg"></i> Inquire About This Product
                                            </a>
                                            <a href="pdf/05-SPINDLE-OIL.pdf" download className="px-6 py-3 border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium rounded-lg transition duration-200 text-sm flex items-center gap-2">
                                                <i className="fas fa-file-pdf text-red-500"></i> Download Product Data Sheet
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Features & Specifications Grid */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 pt-12 border-t border-gray-100">
                                    
                                    <div className="space-y-6 scroll-animate">
                                        <h2 className="text-2xl font-bold text-slate-800">PERFORMANCE, FEATURES &amp; BENEFITS</h2>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3">
                                                <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                                </svg>
                                                <span className="text-slate-600 text-sm"><strong>Low viscosity for minimal fluid friction at high speeds</strong></span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                                </svg>
                                                <span className="text-slate-600 text-sm"><strong>Superior heat dissipation to prevent spindle distortion</strong></span>
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
                                        </ul>

                                        <div className="bg-brand-light bg-opacity-40 p-5 rounded-xl border border-gray-200 mt-6">
                                            <h3 className="font-bold text-slate-800 text-sm mb-2">MAIN APPLICATIONS</h3>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Ideal for high-speed textile spinning frames, machine tool spindles, precision grinders, and delicate high-speed mechanism bearings.
                                            </p>
                                        </div>

                                        <div className="bg-slate-50 p-4 rounded-xl border border-gray-200">
                                            <h3 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-2">SPECIFICATIONS & RECOMMENDATIONS</h3>
                                            <ul className="text-slate-600 text-sm space-y-1 list-disc pl-4">
                                                <li>ISO VG 5, 10, 12, 22</li>
                                                <li>Precision Spindle Requirements</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Technical Specifications Table */}
                                    <div id="download-tds" className="space-y-4 scroll-animate reveal-zoom">
                                        <h2 className="text-2xl font-bold text-slate-800">PRODUCT SPECIFICATIONS</h2>
                                        <div className="overflow-hidden border border-gray-200 rounded-xl shadow-sm overflow-x-auto">
                                            <table className="w-full text-left border-collapse bg-white text-sm min-w-[500px]">
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
                                                        <td className="px-4 py-3 text-right font-mono">Clear &amp; Bright</td>
                                                    </tr>
                                                    <tr className="hover:bg-slate-50/50">
                                                        <td className="px-4 py-3 font-medium text-slate-800">KV @ 40°C, cSt</td>
                                                        <td className="px-4 py-3 text-slate-400">ASTM D445</td>
                                                        <td className="px-4 py-3 text-right font-mono">10.2</td>
                                                    </tr>
                                                    <tr className="hover:bg-slate-50/50">
                                                        <td className="px-4 py-3 font-medium text-slate-800">Viscosity Index</td>
                                                        <td className="px-4 py-3 text-slate-400">ASTM D2270</td>
                                                        <td className="px-4 py-3 text-right font-mono">&ge; 95</td>
                                                    </tr>
                                                    <tr className="hover:bg-slate-50/50">
                                                        <td className="px-4 py-3 font-medium text-slate-800">Flash Point, °C</td>
                                                        <td className="px-4 py-3 text-slate-400">ASTM D92</td>
                                                        <td className="px-4 py-3 text-right font-mono">&ge; 160</td>
                                                    </tr>
                                                    <tr className="hover:bg-slate-50/50">
                                                        <td className="px-4 py-3 font-medium text-slate-800">Pour Point, °C</td>
                                                        <td className="px-4 py-3 text-slate-400">ASTM D97</td>
                                                        <td className="px-4 py-3 text-right font-mono">-21</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <p className="text-xs text-slate-400 italic">
                                            * Note: Typical value; may vary slightly. Please contact your SBK representative for the current batch COA (Certificate Of Analysis).
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}