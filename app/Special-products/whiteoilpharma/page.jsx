'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function WhiteOilPharmaPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openNoticeModal = (e) => {
        if (e) e.preventDefault();
        setIsModalOpen(true);
    };
    
    const closeNoticeModal = () => setIsModalOpen(false);

    // Sidebar Accordion Logic for this specific page
    const toggleAccordion = (e) => {
        const button = e.currentTarget;
        const accordion = button.closest('.category-accordion');
        const content = accordion.querySelector('.accordion-content');
        const icon = button.querySelector('i');
        const isLocked = accordion.getAttribute("data-locked") === "true";

        if (isLocked) return;

        const isHidden = content.classList.contains('hidden');
        
        // Close all other accordions
        document.querySelectorAll('.category-accordion').forEach((acc) => {
            if (acc !== accordion && acc.getAttribute("data-locked") !== "true") {
                acc.querySelector('.accordion-content')?.classList.add('hidden');
                const otherIcon = acc.querySelector('i');
                if (otherIcon) {
                    otherIcon.classList.remove('fa-chevron-down');
                    otherIcon.classList.add('fa-chevron-right');
                }
            }
        });

        // Toggle current
        content.classList.toggle('hidden');
        if (icon) {
            icon.classList.toggle('fa-chevron-right', !isHidden);
            icon.classList.toggle('fa-chevron-down', isHidden);
        }
    };

    // Intersection Observer for scroll animations
    useEffect(() => {
        const revealElements = document.querySelectorAll('.scroll-animate');
        
        const revealOptions = {
            root: null,
            rootMargin: '0px 0px -12% 0px',
            threshold: 0.05
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

            {/* Full-Width Premium Product Category Banner */}
            <section className="relative bg-cover bg-center bg-no-repeat text-white py-16 md:py-18 overflow-hidden w-full" 
                     style={{ backgroundImage: "url('/productbanner/white-oil-pharma.jpeg')" }}>
                
                {/* Dark overlay to ensure text readability over the image */}
                <div className="absolute inset-0 bg-black/40"></div>
                
                {/* Decorative blurs */}
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-green-600 rounded-full blur-3xl opacity-20 z-0"></div>
                <div className="absolute left-10 top-10 w-40 h-40 bg-red-600 rounded-full blur-3xl opacity-10 z-0"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        {/* Breadcrumb Path */}
                        <nav className="hidden md:flex items-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-200 mb-6 space-x-2">
                            <Link href="/" className="hover:text-green-500 transition">Home</Link>
                            <span>/</span>
                            <span className="hover:text-green-500 transition cursor-default">SPECIALITY PRODUCTS</span>
                            <span>/</span>
                            <span className="text-green-400">WHITE OIL PHARMA</span>
                        </nav>

                        <span className="hidden md:inline-block inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4 shadow-lg">
                            High Performance WHITE OIL PHARMA
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-md">
                            WHITE OIL <span className="text-green-400">PHARMA</span>
                        </h1>
                        <p className="hidden md:block text-gray-100 text-base md:text-lg leading-relaxed drop-shadow-sm">
                            Engineered for medical-grade safety, our pharmaceutical white oils offer exceptional chemical inertness and completely odorless performance.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Workspace Layout Container */}
            <div className="bg-gray-50 min-h-screen py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                        
                        {/* LEFT COLUMN: Custom Speciality Sidebar */}
                        <aside className="hidden lg:flex lg:col-span-1 bg-white rounded-xl shadow-md border border-gray-100 p-5 lg:sticky lg:top-24 flex-col max-h-[calc(100vh-120px)]">
                            <h2 className="text-lg font-bold text-slate-800 border-b border-gray-100 pb-3 mb-4 flex items-center gap-2 flex-shrink-0">
                                <i className="fas fa-layer-group text-green-600"></i> Categories
                            </h2>
                            
                            <div className="space-y-2 overflow-y-auto pr-2 custom-scrollbar flex-grow">
                                
                                {/* Transformer Oil */}
                                <div className="category-accordion border border-gray-100 rounded-lg overflow-hidden">
                                    <button onClick={toggleAccordion} className="accordion-toggle w-full flex justify-between items-center text-slate-700 hover:bg-gray-50 px-4 py-3 font-semibold text-sm text-left transition-all">
                                        <span>TRANSFORMER OIL</span>
                                        <i className="fas fa-chevron-right text-xs text-gray-400 transition-transform duration-200"></i>
                                    </button>
                                    <div className="accordion-content hidden bg-white border-t border-gray-50 px-2 py-2 space-y-1">
                                        <Link href="/Special-products/transformeroil" className="block text-xs font-medium text-slate-600 hover:text-green-600 hover:bg-gray-50 px-3 py-2 rounded transition">SBK BS-148</Link>
                                        <Link href="/Special-products/transformeroil" className="block text-xs font-medium text-slate-600 hover:text-green-600 hover:bg-gray-50 px-3 py-2 rounded transition">SBK IEC 296</Link>
                                        <Link href="/Special-products/transformeroil" className="block text-xs font-medium text-slate-600 hover:text-green-600 hover:bg-gray-50 px-3 py-2 rounded transition">SBK IEC 60296 UNINHIBITED</Link>
                                        <Link href="/Special-products/transformeroil" className="block text-xs font-medium text-slate-600 hover:text-green-600 hover:bg-gray-50 px-3 py-2 rounded transition">SBK IEC 60296 INHIBITED</Link>
                                    </div>
                                </div>

                                {/* White Oil Technical */}
                                <div className="category-accordion border border-gray-100 rounded-lg overflow-hidden">
                                    <button onClick={toggleAccordion} className="accordion-toggle w-full flex justify-between items-center text-slate-700 hover:bg-gray-50 px-4 py-3 font-semibold text-sm text-left transition-all">
                                        <span>WHITE OIL TECHNICAL</span>
                                        <i className="fas fa-chevron-right text-xs text-gray-400 transition-transform duration-200"></i>
                                    </button>
                                    <div className="accordion-content hidden bg-white border-t border-gray-50 px-2 py-2 space-y-1">
                                        <Link href="/Special-products/whiteoil" className="block text-xs font-medium text-slate-600 hover:text-green-600 hover:bg-gray-50 px-3 py-2 rounded transition">SBK OMINI WHITE - LIGHT</Link>
                                        <Link href="/Special-products/whiteoil" className="block text-xs font-medium text-slate-600 hover:text-green-600 hover:bg-gray-50 px-3 py-2 rounded transition">SBK OMINI WHITE - MEDIUM</Link>
                                        <Link href="/Special-products/whiteoil" className="block text-xs font-medium text-slate-600 hover:text-green-600 hover:bg-gray-50 px-3 py-2 rounded transition">SBK OMINI WHITE - HEAVY</Link>
                                    </div>
                                </div>

                                {/* White Oil Pharma (Active) */}
                                <div className="category-accordion border border-gray-100 rounded-lg overflow-hidden active" data-locked="true">
                                    <button className="w-full flex justify-between items-center bg-green-50 text-green-700 px-4 py-3 font-bold text-sm text-left transition-all hover:bg-green-100 cursor-default">
                                        <span>WHITE OIL PHARMA</span>
                                        <i className="fas fa-chevron-down text-xs text-green-700"></i>
                                    </button>
                                    <div className="accordion-content bg-white border-t border-gray-50 px-2 py-2 space-y-1">
                                        <Link href="/Special-products/whiteoilpharma" className="block text-xs font-bold text-red-600 bg-red-50/50 px-3 py-2 rounded transition"><i className="fas fa-caret-right mr-1.5"></i>SBK VITA WHITE - LIGHT</Link>
                                        <Link href="/Special-products/whiteoilpharma" className="block text-xs font-medium text-slate-600 hover:text-green-600 hover:bg-gray-50 px-3 py-2 rounded transition">SBK VITA WHITE - MEDIUM</Link>
                                        <Link href="/Special-products/whiteoilpharma" className="block text-xs font-medium text-slate-600 hover:text-green-600 hover:bg-gray-50 px-3 py-2 rounded transition">SBK VITA WHITE - HEAVY</Link>
                                    </div>
                                </div>

                                {/* Petroleum Jelly */}
                                <div className="category-accordion border border-gray-100 rounded-lg overflow-hidden">
                                    <button onClick={toggleAccordion} className="accordion-toggle w-full flex justify-between items-center text-slate-700 hover:bg-gray-50 px-4 py-3 font-semibold text-sm text-left transition-all">
                                        <span>PETROLEUM JELLY</span>
                                        <i className="fas fa-chevron-right text-xs text-gray-400 transition-transform duration-200"></i>
                                    </button>
                                    <div className="accordion-content hidden bg-white border-t border-gray-50 px-2 py-2 space-y-1">
                                        <Link href="/Special-products/petroleumjelly" className="block text-xs font-medium text-slate-600 hover:text-green-600 hover:bg-gray-50 px-3 py-2 rounded transition">SBK WHITE PETROLEUM JELLY</Link>
                                        <Link href="/Special-products/petroleumjelly" className="block text-xs font-medium text-slate-600 hover:text-green-600 hover:bg-gray-50 px-3 py-2 rounded transition">SBK SNOW WHITE PETROLEUM JELLY</Link>
                                        <Link href="/Special-products/petroleumjelly" className="block text-xs font-medium text-slate-600 hover:text-green-600 hover:bg-gray-50 px-3 py-2 rounded transition">SBK YELLOW PETROLEUM JELLY</Link>
                                    </div>
                                </div>

                                {/* Base Oil */}
                                <div className="category-accordion border border-gray-100 rounded-lg overflow-hidden">
                                    <button onClick={toggleAccordion} className="accordion-toggle w-full flex justify-between items-center text-slate-700 hover:bg-gray-50 px-4 py-3 font-semibold text-sm text-left transition-all">
                                        <span>BASE OIL</span>
                                        <i className="fas fa-chevron-right text-xs text-gray-400 transition-transform duration-200"></i>
                                    </button>
                                    <div className="accordion-content hidden bg-white border-t border-gray-50 px-2 py-2 space-y-1">
                                        <Link href="/Special-products/baseoil" className="block text-xs font-medium text-slate-600 hover:text-green-600 hover:bg-gray-50 px-3 py-2 rounded transition">SBK BASE OIL SN 150</Link>
                                        <Link href="/Special-products/baseoil" className="block text-xs font-medium text-slate-600 hover:text-green-600 hover:bg-gray-50 px-3 py-2 rounded transition">SBK BASE OIL SN 500</Link>
                                    </div>
                                </div>

                            </div>
                        </aside>

                        {/* RIGHT COLUMN: Responsive 3-In-A-Row Product Card Grid Layout */}
                        <main className="lg:col-span-3">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 gap-4">
                                <div className="border-b border-gray-200 pb-6 mb-8">
                                    <h2 className="text-2xl md:text-3xl font-extrabold text-green-600 tracking-tight">
                                        WHITE OIL PHARMA
                                    </h2>
                                    <p className="text-sm text-gray-500 mt-2 font-medium">
                                        Showing premium high-performance engine lubricants from your selection.
                                    </p>
                                </div>
                                <div className="text-xs font-medium text-slate-500 bg-white border border-gray-200 rounded-md px-3 py-1.5 shadow-sm">
                                    Total Items: <span className="text-green-600 font-bold">3</span>
                                </div>
                            </div>

                            {/* Product Grid Layout Section */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                                {/* Global Modal Alert for "Coming Soon" */}
                                {isModalOpen && (
                                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4 transition-opacity duration-300">
                                        <div className="bg-white rounded-2xl p-6 max-w-xs w-full shadow-2xl border border-gray-100 text-center transform transition-transform duration-300 scale-100">
                                            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                                                <i className="fas fa-info-circle"></i>
                                            </div>
                                            <h3 className="text-slate-800 text-base font-extrabold mb-1">Specifications Coming Soon</h3>
                                            <p className="text-gray-500 text-xs leading-relaxed mb-5">We&apos;re currently updating our product sheet. Complete specifications for this product will be available shortly.</p>
                                            <button onClick={closeNoticeModal} className="w-full py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer">
                                                Got it
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* Product 1 */}
                                <a href="#" onClick={openNoticeModal} className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block">
                                    <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                                        <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow">Specialty Products</span>
                                        <img src="/productimage/HDPE.png" alt="SBT VITA WHITE LIGHT" className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md" />
                                    </div>
                                    <div className="p-5 flex flex-col flex-grow">
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 block">White Oil Pharma</span>
                                        <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-red-600 transition tracking-tight mb-2 line-clamp-2">SBT VITA WHITE LIGHT</h3>
                                        <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">Highly refined, low-viscosity technical white oil. Formulated for applications requiring exceptional purity, excellent color stability, and chemically inert performance properties.</p>
                                        <div className="border-t border-gray-100 pt-4 mt-auto">
                                            <div className="w-full py-2 bg-slate-800 text-white text-xs font-bold rounded-lg flex justify-center items-center gap-1.5 group-hover:bg-red-600 transition-colors">
                                                Specifications <i className="fas fa-arrow-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                {/* Product 2 */}
                                <a href="#" onClick={openNoticeModal} className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block">
                                    <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                                        <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow">Specialty Products</span>
                                        <img src="/productimage/HDPE.png" alt="SBT VITA WHITE MEDIUM" className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md" />
                                    </div>
                                    <div className="p-5 flex flex-col flex-grow">
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 block">White Oil Pharma</span>
                                        <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-red-600 transition tracking-tight mb-2 line-clamp-2">SBT VITA WHITE MEDIUM</h3>
                                        <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">Premium-grade medium viscosity technical mineral oil. Offers perfect balance, high stability, non-staining qualities, and structural moisture resistance across diverse industrial uses.</p>
                                        <div className="border-t border-gray-100 pt-4 mt-auto">
                                            <div className="w-full py-2 bg-slate-800 text-white text-xs font-bold rounded-lg flex justify-center items-center gap-1.5 group-hover:bg-red-600 transition-colors">
                                                Specifications <i className="fas fa-arrow-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                {/* Product 3 */}
                                <a href="#" onClick={openNoticeModal} className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block">
                                    <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                                        <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow">Specialty Products</span>
                                        <img src="/productimage/HDPE.png" alt="SBT VITA WHITE HEAVY" className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md" />
                                    </div>
                                    <div className="p-5 flex flex-col flex-grow">
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 block">White Oil Pharma</span>
                                        <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-red-600 transition tracking-tight mb-2 line-clamp-2">SBT VITA WHITE HEAVY</h3>
                                        <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">High-viscosity technical white mineral oil engineered for intense processing demands. Delivers reliable lubrication film strength, peak chemical inertness, and superior resistance to oxidation.</p>
                                        <div className="border-t border-gray-100 pt-4 mt-auto">
                                            <div className="w-full py-2 bg-slate-800 text-white text-xs font-bold rounded-lg flex justify-center items-center gap-1.5 group-hover:bg-red-600 transition-colors">
                                                Specifications <i className="fas fa-arrow-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}