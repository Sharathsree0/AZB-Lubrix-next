'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';

export default function SuperTractorOilUniversalCategory() {
    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openNoticeModal = () => setIsModalOpen(true);
    const closeNoticeModal = () => setIsModalOpen(false);

    const handleCardClick = (event, href) => {
        if (href === '#') {
            event.preventDefault();
            openNoticeModal();
        }
    };

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
                style={{ backgroundImage: "url('/productbanner/agriculture.jpeg')" }}
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
                            <span className="hover:text-green-500 transition">AGRICULTURAL AND OFF-HIGHWAY LUBRICANTS</span>
                            <span>/</span>
                            <span className="text-green-400">SUPER TRACTOR OIL UNIVERSAL</span>
                        </nav>

                        <span className="hidden md:inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4 shadow-lg">
                            High Performance AGRICULTURAL AND OFF-HIGHWAY LUBRICANTS
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-md">
                            SUPER TRACTOR OIL <br/> <span className="text-green-400">UNIVERSAL</span>
                        </h1>
                        <p className="hidden md:block text-gray-100 text-base md:text-lg leading-relaxed drop-shadow-sm">
                            Experience total equipment protection with our premium Super Tractor Oil Universal. Formulated to endure extreme field stresses and heavy loads, our all-in-one lubricant safeguards engines, transmissions, hydraulics, and wet brakes against wear and thermal breakdown, ensuring maximum uptime season after season.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Workspace Layout Container */}
            <div className="bg-gray-50 min-h-screen py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                        
                        {/* LEFT COLUMN: Vertical Accordion Sidebar Menu */}
                        <Sidebar />

                        {/* RIGHT COLUMN: Responsive 3-In-A-Row Product Card Grid Layout */}
                        <main className="lg:col-span-3">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 gap-4">
                                <div className="border-b border-gray-200 pb-6 mb-8">
                                    <h2 className="text-2xl md:text-3xl font-extrabold text-green-600 tracking-tight">
                                        SUPER TRACTOR OIL UNIVERSAL
                                    </h2>
                                    <p className="text-sm text-gray-500 mt-2 font-medium">
                                        Showing premium high-performance engine lubricants from your selection.
                                    </p>
                                </div>
                                <div className="text-xs font-medium text-slate-500 bg-white border border-gray-200 rounded-md px-3 py-1.5 shadow-sm">
                                    Total Items: <span className="text-green-600 font-bold">4</span>
                                </div>
                            </div>

                            {/* Alert Modal Component (React State Controlled) */}
                            {isModalOpen && (
                                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4 transition-opacity duration-300">
                                    <div className="bg-white rounded-2xl p-6 max-w-xs w-full shadow-2xl border border-gray-100 text-center transform transition-transform duration-300 scale-100">
                                        <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                                            <i className="fas fa-info-circle"></i>
                                        </div>
                                        <h3 className="text-slate-800 text-base font-extrabold mb-1">Specifications Coming Soon</h3>
                                        <p className="text-gray-500 text-xs leading-relaxed mb-5">We&apos;re currently updating our product sheet. Complete specifications for this product will be available shortly.</p>
                                        <button 
                                            onClick={closeNoticeModal} 
                                            className="w-full py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                                        >
                                            Got it
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Product Grid Layout Section */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                                {/* Card 1 */}
                                <Link 
                                    href="#" 
                                    onClick={(e) => handleCardClick(e, '#')}
                                    className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block"
                                >
                                    <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                                        <span className="absolute top-3 left-3 bg-green-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow">AGRICULTURAL AND OFF-HIGHWAY LUBRICANTS</span>
                                        <img src="/img/Drum-Red-(2).png" alt="SBK STOU" className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md" />
                                    </div>
                                    <div className="p-5 flex flex-col flex-grow">
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 block">SUPER TRACTOR OIL UNIVERSAL</span>
                                        <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">SBK SUPER TRACTOR OIL UNIVERSAL STOU 10 W40</h3>
                                        <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">A high-performance STOU 10W-40 fluid delivering fast cold-start flow and all-in-one protection for modern agricultural engines, transmissions, hydraulics, and wet brakes.</p>
                                        <div className="border-t border-gray-100 pt-4 mt-auto">
                                            <div className="w-full py-2 bg-slate-800 text-white text-xs font-bold rounded-lg flex justify-center items-center gap-1.5">Specifications <i className="fas fa-arrow-right"></i></div>
                                        </div>
                                    </div>
                                </Link>

                                {/* Card 2 */}
                                <Link 
                                    href="/products/Agricultural-&-off-Highway-Lubrucants/super-tractor-oil-universal/sbk-super-tractor-oil-universal-10w40" 
                                    className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block"
                                >
                                    <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                                        <span className="absolute top-3 left-3 bg-green-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow">AGRICULTURAL AND OFF-HIGHWAY LUBRICANTS</span>
                                        <img src="/img/Drum-Red-(2).png" alt="SBK STOU 10W40" className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md" />
                                    </div>
                                    <div className="p-5 flex flex-col flex-grow">
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 block">SUPER TRACTOR OIL UNIVERSAL</span>
                                        <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">SBK SUPER TRACTOR OIL UNIVERSAL STOU 10 W40</h3>
                                        <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">A high-performance STOU 10W-40 fluid delivering fast cold-start flow and all-in-one protection for modern agricultural engines, transmissions, hydraulics, and wet brakes.</p>
                                        <div className="border-t border-gray-100 pt-4 mt-auto">
                                            <div className="w-full py-2 bg-slate-800 text-white text-xs font-bold rounded-lg flex justify-center items-center gap-1.5">Specifications <i className="fas fa-arrow-right"></i></div>
                                        </div>
                                    </div>
                                </Link>

                                {/* Card 3 */}
                                <Link 
                                    href="/products/Agricultural-&-off-Highway-Lubrucants/super-tractor-oil-universal/sbk-super-tractor-oil-universal-15w40" 
                                    className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block"
                                >
                                    <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                                        <span className="absolute top-3 left-3 bg-green-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow">AGRICULTURAL AND OFF-HIGHWAY LUBRICANTS</span>
                                        <img src="/img/Drum-Red-(2).png" alt="SBK STOU 15W40" className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md" />
                                    </div>
                                    <div className="p-5 flex flex-col flex-grow">
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 block">SUPER TRACTOR OIL UNIVERSAL</span>
                                        <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">SBK SUPER TRACTOR OIL UNIVERSAL STOU 15 W40</h3>
                                        <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">A versatile 15W-40 multi-functional tractor lubricant engineered for heavy field duties, providing robust wear defense, thermal stability, and smooth hydraulic response.</p>
                                        <div className="border-t border-gray-100 pt-4 mt-auto">
                                            <div className="w-full py-2 bg-slate-800 text-white text-xs font-bold rounded-lg flex justify-center items-center gap-1.5">Specifications <i className="fas fa-arrow-right"></i></div>
                                        </div>
                                    </div>
                                </Link>

                                {/* Card 4 */}
                                <Link 
                                    href="/products/Agricultural-&-off-Highway-Lubrucants/super-tractor-oil-universal/sbk-super-tractor-oil-universal-20w40" 
                                    className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block"
                                >
                                    <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                                        <span className="absolute top-3 left-3 bg-green-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow">AGRICULTURAL AND OFF-HIGHWAY LUBRICANTS</span>
                                        <img src="/img/Drum-Red-(2).png" alt="SBK STOU 20W40" className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md" />
                                    </div>
                                    <div className="p-5 flex flex-col flex-grow">
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 block">SUPER TRACTOR OIL UNIVERSAL</span>
                                        <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">SBK SUPER TRACTOR OIL UNIVERSAL STOU 20 W40</h3>
                                        <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">Heavy-duty 20W-40 universal tractor oil formulated for high-temperature and severe load conditions, safeguarding engines, gears, and wet-brake systems from extreme wear.</p>
                                        <div className="border-t border-gray-100 pt-4 mt-auto">
                                            <div className="w-full py-2 bg-slate-800 text-white text-xs font-bold rounded-lg flex justify-center items-center gap-1.5">Specifications <i className="fas fa-arrow-right"></i></div>
                                        </div>
                                    </div>
                                </Link>

                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}