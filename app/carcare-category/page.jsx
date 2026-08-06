'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CarCareCategoryPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openNoticeModal = (e) => {
        if (e) e.preventDefault();
        setIsModalOpen(true);
    };
    
    const closeNoticeModal = () => setIsModalOpen(false);

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
            <section className="relative bg-cover bg-center bg-no-repeat text-white py-16 md:py-24 overflow-hidden w-full" 
                     style={{ backgroundImage: "url('/productbanner/car-care.jpeg')" }}>
                
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
                            <span className="hover:text-green-500 transition cursor-default">CAR CARE PRODUCTS</span>
                        </nav>

                        <span className="hidden md:inline-block inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4 shadow-lg">
                            High Performance Lubricants
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-md">
                            CAR CARE <span className="text-green-400">PRODUCTS</span>
                        </h1>
                        <p className="hidden md:block text-gray-100 text-base md:text-lg leading-relaxed drop-shadow-sm">
                            Formulated to maintain, protect, and restore your vehicle&apos;s peak performance. From deep engine cleaning to interior and exterior surface defense, our premium care formulas prevent wear, deposit buildup, and environmental damage.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Workspace Layout Container */}
            <div className="bg-gray-50 min-h-screen py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                        
                        {/* LEFT COLUMN: Specific Car Care Sidebar */}
                        <aside className="hidden lg:flex lg:col-span-1 bg-white rounded-xl shadow-md border border-gray-100 p-5 lg:sticky lg:top-24 flex-col max-h-[calc(100vh-120px)]">
                            <h2 className="text-lg font-bold text-slate-800 border-b border-gray-100 pb-3 mb-4 flex items-center gap-2 flex-shrink-0">
                                <i className="fas fa-layer-group text-green-600"></i> Categories
                            </h2>
                            
                            <div className="space-y-2 overflow-y-auto pr-2 custom-scrollbar flex-grow" id="sidebar-accordion">
                                {/* Only Car Care Products Accordion (Locked & Active) */}
                                <div className="category-accordion border border-gray-100 rounded-lg overflow-hidden active" data-locked="true">
                                    <button className="w-full flex justify-between items-center bg-green-50 text-green-700 px-4 py-3 font-bold text-sm text-left transition-all hover:bg-green-100 cursor-default">
                                        <span>CAR CARE PRODUCTS</span>
                                        <i className="fas fa-chevron-down text-xs text-green-700"></i>
                                    </button>
                                    <div className="accordion-content bg-white border-t border-gray-50 px-2 py-2 space-y-1">
                                        <Link href="/carcare-category/sbk-penetrax" className="block text-xs font-medium text-slate-600 hover:text-green-600 hover:bg-gray-50 px-3 py-2 rounded transition">SBK PenetraX</Link>
                                        <Link href="/carcare-category/sbk-carbclean" className="block text-xs font-medium text-slate-600 hover:text-green-600 hover:bg-gray-50 px-3 py-2 rounded transition">SBK CarbClean Pro</Link>
                                        <Link href="/carcare-category/sbk-breakclean" className="block text-xs font-medium text-slate-600 hover:text-green-600 hover:bg-gray-50 px-3 py-2 rounded transition">SBK BrakeClean Pro</Link>
                                        <Link href="/carcare-category/sbk-degrease" className="block text-xs font-medium text-slate-600 hover:text-green-600 hover:bg-gray-50 px-3 py-2 rounded transition">SBK Degrease Pro</Link>
                                        <Link href="/carcare-category/sbk-chainlube" className="block text-xs font-medium text-slate-600 hover:text-green-600 hover:bg-gray-50 px-3 py-2 rounded transition">SBK Chain Lube pro</Link>
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* RIGHT COLUMN: Responsive 3-In-A-Row Product Card Grid Layout */}
                        <main className="lg:col-span-3">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 gap-4">
                                <div className="border-b border-gray-200 pb-6 mb-8">
                                    <h2 className="text-2xl md:text-3xl font-extrabold text-green-600 tracking-tight">
                                        Car Care Products
                                    </h2>
                                    <p className="text-sm text-gray-500 mt-2 font-medium">
                                        Showing premium high-performance engine lubricants from your selection.
                                    </p>
                                </div>
                                <div className="text-xs font-medium text-slate-500 bg-white border border-gray-200 rounded-md px-3 py-1.5 shadow-sm">
                                    Total Items: <span className="text-green-600 font-bold">5</span>
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
                                <Link href="/carcare-category/sbk-penetrax" className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block">
                                    <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                                        <img src="/productimage/PENETRAX400ML.png" alt="SBK PenetraX" className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md" />
                                    </div>
                                    <div className="p-5 flex flex-col flex-grow">
                                        <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-1 block"></span>
                                        <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">
                                            SBK PenetraX
                                        </h3>
                                        <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">
                                            Advanced formulation engineered to deliver extreme engine protection, superior thermal stability, and maximum fuel economy under severe driving conditions.
                                        </p>
                                        <div className="border-t border-gray-100 pt-4 mt-auto">
                                            <div className="w-full py-2 bg-slate-800 group-hover:bg-green-600 text-white text-xs font-bold rounded-lg transition-colors flex justify-center items-center gap-1.5 shadow-sm">
                                                Specifications <i className="fas fa-arrow-right text-[10px]"></i>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                {/* Product 2 */}
                                <Link href="/carcare-category/sbk-carbclean" className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block">
                                    <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                                        <img src="/productimage/CARBCLEANPRO400ML.png" alt="SBK CarbClean Pro" className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md" />
                                    </div>
                                    <div className="p-5 flex flex-col flex-grow">
                                        <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-1 block"></span>
                                        <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">
                                            SBK CarbClean Pro
                                        </h3>
                                        <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">
                                            Professional-strength solvent formula engineered to instantly dissolve carbon, varnish, sludge, and gum deposits from carburetors, chokes, and throttle components.
                                        </p>
                                        <div className="border-t border-gray-100 pt-4 mt-auto">
                                            <div className="w-full py-2 bg-slate-800 group-hover:bg-green-600 text-white text-xs font-bold rounded-lg transition-colors flex justify-center items-center gap-1.5 shadow-sm">
                                                Specifications <i className="fas fa-arrow-right text-[10px]"></i>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                {/* Product 3 */}
                                <Link href="/carcare-category/sbk-breakclean" className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block">
                                    <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                                        <img src="/productimage/BREAKCLEANPRO400ML.png" alt="SBK BrakeClean Pro" className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md" />
                                    </div>
                                    <div className="p-5 flex flex-col flex-grow">
                                        <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-1 block"></span>
                                        <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">
                                            SBK BrakeClean Pro
                                        </h3>
                                        <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">
                                            Ultra-powerful degreasing formula engineered to instantly flush away brake fluid, grease, oil, and hazardous brake dust from rotors, drums, calipers, and pads.
                                        </p>
                                        <div className="border-t border-gray-100 pt-4 mt-auto">
                                            <div className="w-full py-2 bg-slate-800 group-hover:bg-green-600 text-white text-xs font-bold rounded-lg transition-colors flex justify-center items-center gap-1.5 shadow-sm">
                                                Specifications <i className="fas fa-arrow-right text-[10px]"></i>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                {/* Product 4 */}
                                <Link href="/carcare-category/sbk-degrease" className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block">
                                    <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                                        <img src="/productimage/DEGREASEPRO400ML.png" alt="SBK Degrease Pro" className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md" />
                                    </div>
                                    <div className="p-5 flex flex-col flex-grow">
                                        <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-1 block"></span>
                                        <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">
                                            SBK Degrease Pro
                                        </h3>
                                        <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">
                                            Heavy-duty industrial emulsifying formula engineered to penetrate deep, dissolve, and instantly cut through heavy grease, baked-on oil, grime, and stubborn engine sludge.
                                        </p>
                                        <div className="border-t border-gray-100 pt-4 mt-auto">
                                            <div className="w-full py-2 bg-slate-800 group-hover:bg-green-600 text-white text-xs font-bold rounded-lg transition-colors flex justify-center items-center gap-1.5 shadow-sm">
                                                Specifications <i className="fas fa-arrow-right text-[10px]"></i>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                {/* Product 5 */}
                                <Link href="/carcare-category/sbk-chainlube" className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block">
                                    <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                                        <img src="/productimage/CHAINLUBE400ML.png" alt="SBK Chain Lube pro" className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md" />
                                    </div>
                                    <div className="p-5 flex flex-col flex-grow">
                                        <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-1 block"></span>
                                        <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">
                                           SBK Chain Lube pro
                                        </h3>
                                        <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">
                                            Advanced heavy-duty lubricant engineered to penetrate core chain pins, resist extreme heat and fling-off, and deliver long-lasting protection against severe friction, wear, and corrosion
                                        </p>
                                        <div className="border-t border-gray-100 pt-4 mt-auto">
                                            <div className="w-full py-2 bg-slate-800 group-hover:bg-green-600 text-white text-xs font-bold rounded-lg transition-colors flex justify-center items-center gap-1.5 shadow-sm">
                                                Specifications <i className="fas fa-arrow-right text-[10px]"></i>
                                            </div>
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