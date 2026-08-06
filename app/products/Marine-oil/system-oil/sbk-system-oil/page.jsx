'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SbkMarineSystemOilPage() {
    // State to handle the interactive image gallery
    const [galleryState, setGalleryState] = useState({
        img: '/img/Drum-Red-(2).png',
        text: 'SBK MARINE SYSTEM OIL',
        activeIndex: 0
    });

    const thumbnails = [
        { img: '/img/Drum-Red-(2).png', text: 'SBK MARINE SYSTEM OIL - pail' },
        { img: '/img/Drum-Red-(2).png', text: 'SBK MARINE SYSTEM OIL - drum' },
        { img: '/img/Drum-Red-(2).png', text: 'SBK MARINE SYSTEM OIL - IBC' }
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
                        <Link href="/marine-oil" className="hover:text-white transition">MARINE OIL</Link>
                        <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
                        <span className="text-white font-medium">MARINE SYSTEM OIL</span>
                    </nav>

                    <div className="mb-4 scroll-reveal delay-200">
                        <span className="inline-block bg-[#10b981] text-white text-[11px] md:text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded">
                            MARINE OIL
                        </span>
                    </div>

                    <div className="max-w-4xl space-y-4">
                        <h1 className="text-white font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-tight md:leading-none scroll-reveal delay-300">
                            SBK MARINE SYSTEM OIL <br className="hidden md:block" />
                            <span> </span>
                        </h1>
                        
                        <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-light pt-1 scroll-reveal delay-400">
                            SBK Marine System Oil is a premium quality marine lubricating oil specially developed for use in marine diesel engine systems, stern tubes, reduction gears, and auxiliary onboard machinery requiring excellent oxidation stability, anti-wear protection, rust prevention, and water separation characteristics. It is formulated using highly refined mineral base oils and advanced additive technology to provide reliable performance under severe marine operating conditions. Marine system oils are commonly used in medium-speed marine engines and auxiliary systems requiring high thermal stability and corrosion protection.
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
                            <span className="absolute top-4 left-4 bg-brand-blue text-white font-bold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded">
                            </span>
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
                            <span className="text-brand-gold font-semibold text-sm tracking-wider uppercase"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-1">SBK MARINE SYSTEM OIL</h2>
                            <p className="text-xl font-medium text-slate-500 mt-2"></p>
                        </div>

                        <p className="text-slate-600 leading-relaxed">
                            SBK Marine System Oil is a premium quality marine lubricating oil specially developed for use in marine diesel engine systems, stern tubes, reduction gears, and auxiliary onboard machinery requiring excellent oxidation stability, anti-wear protection, rust prevention, and water separation characteristics. It is formulated using highly refined mineral base oils and advanced additive technology to provide reliable performance under severe marine operating conditions. Marine system oils are commonly used in medium-speed marine engines and auxiliary systems requiring high thermal stability and corrosion protection.
                        </p>

                        <div className="flex flex-wrap gap-3 pt-2">
                            <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                                <strong>Quantity:</strong> pail, drum
                            </div>
                            <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                                <strong>SAE Grades:</strong> SAE 20, SAE 30, SAE 40
                            </div>
                            <div className="bg-slate-100 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200">
                                <strong>BN No:</strong> 5, 6, 7, 8
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                            <a href="https://wa.me/971569966391?text=Hello,%20I%20would%20like%20to%20inquire%20about%20SBK%20MARINE%20SYSTEM%20OIL" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-brand-blue hover:bg-opacity-90 text-white font-medium rounded-lg shadow-md transition duration-200 text-sm flex items-center gap-2">
                                <i className="fab fa-whatsapp text-lg"></i> Inquire About This Product
                            </a>
                            <a href="/pdf/23-MARINE SO OIL.pdf" download className="px-6 py-3 border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium rounded-lg transition duration-200 text-sm flex items-center gap-2">
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
                                "Excellent oxidation and thermal stability",
                                "Superior anti-wear protection",
                                "Outstanding rust and corrosion protection",
                                "Excellent water separation properties",
                                "Reduces sludge and varnish formation",
                                "Long service life under marine operating conditions",
                                "Good foam resistance and air release properties",
                                "Protects bearings and gears under heavy load conditions"
                            ].map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="text-slate-600 text-sm"><strong>{feature}</strong></span>
                                </li>
                            ))}
                        </ul>

                        <div className="bg-brand-light bg-opacity-40 p-5 rounded-xl border border-gray-200 mt-6">
                            <h3 className="font-bold text-slate-800 text-sm mb-2">MAIN APPLICATIONS</h3>
                            <ul className="text-slate-600 text-sm space-y-2 list-disc pl-4">
                                <li><strong>Marine diesel engine lubrication systems</strong></li>
                                <li><strong>Stern tube lubrication</strong></li>
                                <li><strong>Marine reduction gears</strong></li>
                                <li><strong>Hydraulic and circulating systems onboard vessels</strong></li>
                                <li><strong>Auxiliary marine equipment</strong></li>
                                <li><strong>Industrial circulating oil systems</strong></li>
                            </ul>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-xl border border-gray-200">
                            <h3 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-2">SPECIFICATIONS & RECOMMENDATIONS</h3>
                            <ul className="text-slate-600 text-sm space-y-2 list-disc pl-4">
                                <li>Main engine circulating systems</li>
                                <li>Auxiliary marine engines</li>
                                <li>Marine gear systems</li>
                                <li>Hydraulic and deck machinery systems</li>
                                <li>Bearings and circulating oil systems onboard vessels</li>
                                <li>Industrial heavy-duty circulating systems</li>
                                <li>API CF</li>
                                <li>MAN</li>
                                <li>Wartsila</li>
                                <li>Caterpillar Marine</li>
                                <li>Daihatsu Diesel</li>
                                <li>Yanmar</li>
                            </ul>
                        </div>
                    </div>

                    <div id="download-tds" className="space-y-4 scroll-reveal reveal-zoom">
                        <h2 className="text-2xl font-bold text-slate-800">PRODUCT SPECIFICATIONS</h2>
                        <div className="overflow-hidden border border-gray-200 rounded-xl shadow-sm overflow-x-auto">
                            <table className="w-full text-left border-collapse bg-white text-xs min-w-[700px]">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-gray-200">
                                        <th rowSpan="2" className="px-3 py-2 font-semibold text-slate-700 border-r">TEST PARAMETER</th>
                                        <th rowSpan="2" className="px-3 py-2 font-semibold text-slate-700 border-r">TEST METHOD</th>
                                        <th colSpan="12" className="px-3 py-2 font-semibold text-slate-700 text-center">TYPICAL VALUE</th>
                                    </tr>
                                    <tr className="bg-slate-100 border-b border-gray-200">
                                        <th colSpan="4" className="px-2 py-1.5 text-center font-bold border-r">SAE 20</th>
                                        <th colSpan="4" className="px-2 py-1.5 text-center font-bold border-r">SAE 30</th>
                                        <th colSpan="4" className="px-2 py-1.5 text-center font-bold">SAE 40</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-slate-600">
                                    <tr className="hover:bg-slate-50/50 bg-slate-50/30">
                                        <td className="px-3 py-2 font-semibold text-slate-800 border-r">BN No</td>
                                        <td className="px-3 py-2 text-slate-400 border-r">-</td>
                                        <td className="px-2 py-2 text-center font-mono">5</td>
                                        <td className="px-2 py-2 text-center font-mono">6</td>
                                        <td className="px-2 py-2 text-center font-mono">7</td>
                                        <td className="px-2 py-2 text-center font-mono border-r">8</td>
                                        <td className="px-2 py-2 text-center font-mono">5</td>
                                        <td className="px-2 py-2 text-center font-mono">6</td>
                                        <td className="px-2 py-2 text-center font-mono">7</td>
                                        <td className="px-2 py-2 text-center font-mono border-r">8</td>
                                        <td className="px-2 py-2 text-center font-mono">5</td>
                                        <td className="px-2 py-2 text-center font-mono">6</td>
                                        <td className="px-2 py-2 text-center font-mono">7</td>
                                        <td className="px-2 py-2 text-center font-mono">8</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-3 py-2 font-medium text-slate-800 border-r">Appearance</td>
                                        <td className="px-3 py-2 text-slate-400 border-r">Visual</td>
                                        <td className="px-2 py-2 text-center font-mono">C&B</td>
                                        <td className="px-2 py-2 text-center font-mono">C&B</td>
                                        <td className="px-2 py-2 text-center font-mono">C&B</td>
                                        <td className="px-2 py-2 text-center font-mono border-r">C&B</td>
                                        <td className="px-2 py-2 text-center font-mono">C&B</td>
                                        <td className="px-2 py-2 text-center font-mono">C&B</td>
                                        <td className="px-2 py-2 text-center font-mono">C&B</td>
                                        <td className="px-2 py-2 text-center font-mono border-r">C&B</td>
                                        <td className="px-2 py-2 text-center font-mono">C&B</td>
                                        <td className="px-2 py-2 text-center font-mono">C&B</td>
                                        <td className="px-2 py-2 text-center font-mono">C&B</td>
                                        <td className="px-2 py-2 text-center font-mono">C&B</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-3 py-2 font-medium text-slate-800 border-r">KV @ 40°C</td>
                                        <td className="px-3 py-2 text-slate-400 border-r">ASTM D445</td>
                                        <td className="px-2 py-2 text-center font-mono">TBR</td>
                                        <td className="px-2 py-2 text-center font-mono">TBR</td>
                                        <td className="px-2 py-2 text-center font-mono">TBR</td>
                                        <td className="px-2 py-2 text-center font-mono border-r">TBR</td>
                                        <td className="px-2 py-2 text-center font-mono">TBR</td>
                                        <td className="px-2 py-2 text-center font-mono">TBR</td>
                                        <td className="px-2 py-2 text-center font-mono">TBR</td>
                                        <td className="px-2 py-2 text-center font-mono border-r">TBR</td>
                                        <td className="px-2 py-2 text-center font-mono">TBR</td>
                                        <td className="px-2 py-2 text-center font-mono">TBR</td>
                                        <td className="px-2 py-2 text-center font-mono">TBR</td>
                                        <td className="px-2 py-2 text-center font-mono">TBR</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-3 py-2 font-medium text-slate-800 border-r">KV @ 100°C</td>
                                        <td className="px-3 py-2 text-slate-400 border-r">ASTM D445</td>
                                        <td className="px-2 py-2 text-center font-mono">8.5</td>
                                        <td className="px-2 py-2 text-center font-mono">8.5</td>
                                        <td className="px-2 py-2 text-center font-mono">8.5</td>
                                        <td className="px-2 py-2 text-center font-mono border-r">8.5</td>
                                        <td className="px-2 py-2 text-center font-mono">11</td>
                                        <td className="px-2 py-2 text-center font-mono">11</td>
                                        <td className="px-2 py-2 text-center font-mono">11</td>
                                        <td className="px-2 py-2 text-center font-mono border-r">11</td>
                                        <td className="px-2 py-2 text-center font-mono">14.5</td>
                                        <td className="px-2 py-2 text-center font-mono">14.5</td>
                                        <td className="px-2 py-2 text-center font-mono">14.5</td>
                                        <td className="px-2 py-2 text-center font-mono">14.5</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-3 py-2 font-medium text-slate-800 border-r">Viscosity Index</td>
                                        <td className="px-3 py-2 text-slate-400 border-r">ASTM D2270</td>
                                        <td className="px-2 py-2 text-center font-mono">&ge;90</td>
                                        <td className="px-2 py-2 text-center font-mono">&ge;90</td>
                                        <td className="px-2 py-2 text-center font-mono">&ge;90</td>
                                        <td className="px-2 py-2 text-center font-mono border-r">&ge;90</td>
                                        <td className="px-2 py-2 text-center font-mono">&ge;90</td>
                                        <td className="px-2 py-2 text-center font-mono">&ge;90</td>
                                        <td className="px-2 py-2 text-center font-mono">&ge;90</td>
                                        <td className="px-2 py-2 text-center font-mono border-r">&ge;90</td>
                                        <td className="px-2 py-2 text-center font-mono">&ge;90</td>
                                        <td className="px-2 py-2 text-center font-mono">&ge;90</td>
                                        <td className="px-2 py-2 text-center font-mono">&ge;90</td>
                                        <td className="px-2 py-2 text-center font-mono">&ge;90</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-3 py-2 font-medium text-slate-800 border-r">Density @ 15°C</td>
                                        <td className="px-3 py-2 text-slate-400 border-r">ASTM D4052</td>
                                        <td className="px-2 py-2 text-center font-mono">0.8809</td>
                                        <td className="px-2 py-2 text-center font-mono">0.8816</td>
                                        <td className="px-2 py-2 text-center font-mono">0.8823</td>
                                        <td className="px-2 py-2 text-center font-mono border-r">0.8831</td>
                                        <td className="px-2 py-2 text-center font-mono">0.8838</td>
                                        <td className="px-2 py-2 text-center font-mono">0.8845</td>
                                        <td className="px-2 py-2 text-center font-mono">0.8852</td>
                                        <td className="px-2 py-2 text-center font-mono border-r">0.8861</td>
                                        <td className="px-2 py-2 text-center font-mono">0.8875</td>
                                        <td className="px-2 py-2 text-center font-mono">0.8883</td>
                                        <td className="px-2 py-2 text-center font-mono">0.8889</td>
                                        <td className="px-2 py-2 text-center font-mono">0.8892</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-3 py-2 font-medium text-slate-800 border-r">Flash Point (°C)</td>
                                        <td className="px-3 py-2 text-slate-400 border-r">ASTM D92</td>
                                        <td className="px-2 py-2 text-center font-mono">&ge;200</td>
                                        <td className="px-2 py-2 text-center font-mono">&ge;200</td>
                                        <td className="px-2 py-2 text-center font-mono">&ge;200</td>
                                        <td className="px-2 py-2 text-center font-mono border-r">&ge;200</td>
                                        <td className="px-2 py-2 text-center font-mono">&ge;200</td>
                                        <td className="px-2 py-2 text-center font-mono">&ge;200</td>
                                        <td className="px-2 py-2 text-center font-mono">&ge;200</td>
                                        <td className="px-2 py-2 text-center font-mono border-r">&ge;200</td>
                                        <td className="px-2 py-2 text-center font-mono">&ge;200</td>
                                        <td className="px-2 py-2 text-center font-mono">&ge;200</td>
                                        <td className="px-2 py-2 text-center font-mono">&ge;200</td>
                                        <td className="px-2 py-2 text-center font-mono">&ge;200</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-3 py-2 font-medium text-slate-800 border-r">Pour Point (°C)</td>
                                        <td className="px-3 py-2 text-slate-400 border-r">ASTM D97</td>
                                        <td className="px-2 py-2 text-center font-mono">-9</td>
                                        <td className="px-2 py-2 text-center font-mono">-9</td>
                                        <td className="px-2 py-2 text-center font-mono">-9</td>
                                        <td className="px-2 py-2 text-center font-mono border-r">-9</td>
                                        <td className="px-2 py-2 text-center font-mono">-9</td>
                                        <td className="px-2 py-2 text-center font-mono">-9</td>
                                        <td className="px-2 py-2 text-center font-mono">-9</td>
                                        <td className="px-2 py-2 text-center font-mono border-r">-9</td>
                                        <td className="px-2 py-2 text-center font-mono">-9</td>
                                        <td className="px-2 py-2 text-center font-mono">-9</td>
                                        <td className="px-2 py-2 text-center font-mono">-9</td>
                                        <td className="px-2 py-2 text-center font-mono">-9</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50">
                                        <td className="px-3 py-2 font-medium text-slate-800 border-r">TBN</td>
                                        <td className="px-3 py-2 text-slate-400 border-r">ASTM D2896</td>
                                        <td className="px-2 py-2 text-center font-mono">5</td>
                                        <td className="px-2 py-2 text-center font-mono">6</td>
                                        <td className="px-2 py-2 text-center font-mono">7</td>
                                        <td className="px-2 py-2 text-center font-mono border-r">8</td>
                                        <td className="px-2 py-2 text-center font-mono">5</td>
                                        <td className="px-2 py-2 text-center font-mono">6</td>
                                        <td className="px-2 py-2 text-center font-mono">7</td>
                                        <td className="px-2 py-2 text-center font-mono border-r">8</td>
                                        <td className="px-2 py-2 text-center font-mono">5</td>
                                        <td className="px-2 py-2 text-center font-mono">6</td>
                                        <td className="px-2 py-2 text-center font-mono">7</td>
                                        <td className="px-2 py-2 text-center font-mono">8</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-slate-400 italic">
                            * Note: Typical value may vary slightly. Please contact your SBK representative for the current batch COA (Certificate Of Analysis)
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}