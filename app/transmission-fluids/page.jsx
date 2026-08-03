'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';

export default function TransmissionFluid() {
    // Accordion Logic
    useEffect(() => {
        const accordions = document.querySelectorAll(".category-accordion");

        accordions.forEach((acc) => {
            const toggleBtn = acc.querySelector(".accordion-toggle");
            const content = acc.querySelector(".accordion-content");
            const icon = acc.querySelector(".accordion-toggle i");
            const isLocked = acc.getAttribute("data-locked") === "true";

            const clickHandler = function (e) {
                e.preventDefault();
                
                if (isLocked) return;

                const isCurrentlyActive = acc.classList.contains("active");

                accordions.forEach((otherAcc) => {
                    if (otherAcc !== acc && otherAcc.getAttribute("data-locked") !== "true") {
                        otherAcc.classList.remove("active");
                        const otherContent = otherAcc.querySelector(".accordion-content");
                        const otherIcon = otherAcc.querySelector(".accordion-toggle i");
                        const otherBtn = otherAcc.querySelector(".accordion-toggle");
                        
                        if (otherContent) otherContent.classList.add("hidden");
                        if (otherIcon) {
                            otherIcon.className = "fas fa-chevron-right text-xs text-gray-400 transition-transform duration-200";
                        }
                        if (otherBtn) {
                            otherBtn.className = "accordion-toggle w-full flex justify-between items-center text-slate-700 hover:bg-gray-50 px-4 py-3 font-semibold text-sm text-left transition-all";
                        }
                    }
                });

                if (isCurrentlyActive) {
                    acc.classList.remove("active");
                    content.classList.add("hidden");
                    toggleBtn.className = "accordion-toggle w-full flex justify-between items-center text-slate-700 hover:bg-gray-50 px-4 py-3 font-semibold text-sm text-left transition-all";
                    icon.className = "fas fa-chevron-right text-xs text-gray-400 transition-transform duration-200";
                } else {
                    acc.classList.add("active");
                    content.classList.remove("hidden");
                    toggleBtn.className = "accordion-toggle w-full flex justify-between items-center bg-green-50 text-green-700 px-4 py-3 font-bold text-sm text-left transition-all";
                    icon.className = "fas fa-chevron-down text-xs text-green-700 transition-transform duration-200";
                }
            };

            if (toggleBtn) {
                toggleBtn.addEventListener("click", clickHandler);
            }
        });
    }, []);

    return (
        <div className="bg-white text-slate-700 antialiased">
            
            {/* Full-Width Premium Product Category Banner */}
            <section className="relative bg-cover bg-center bg-no-repeat text-white py-16 md:py-18 overflow-hidden w-full" 
                     style={{ backgroundImage: "url('/productbanner/transmission-fluid.jpeg')" }}>
                
                {/* Dark overlay to ensure text readability over the image */}
                <div className="absolute inset-0 "></div>
                
                {/* Decorative blurs */}
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-green-600 rounded-full blur-3xl opacity-20 z-0"></div>
                <div className="absolute left-10 top-10 w-40 h-40 bg-red-600 rounded-full blur-3xl opacity-10 z-0"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        {/* Breadcrumb Path */}
                        <nav className="hidden md:flex items-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-200 mb-6 space-x-2">
                            <Link href="/" className="hover:text-green-500 transition">Home</Link>
                            <span>/</span>
                            <Link href="#" className="hover:text-green-500 transition">Automotive Oils</Link>
                            <span>/</span>
                            <span className="text-green-400">TRANSMISSION FLUIDS </span>
                        </nav>

                        <span className="hidden md:inline-block inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4 shadow-lg">
                            High Performance Lubricants
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-md">
                            Transmission <span className="text-green-400">Fluids</span>
                        </h1>
                        <p className="hidden md:block text-gray-100 text-base md:text-lg leading-relaxed drop-shadow-sm">
                            Explore our elite spectrum of premium synthetic transmission fluids, engineered to ensure seamless gear transitions, prevent clutch slippage, and protect sensitive hydraulic circuits against severe heat breakdown.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Workspace Layout Container */}
            <div className="bg-gray-50 min-h-screen py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                        
                        {/* LEFT COLUMN: Accurate Vertical Accordion Dropdown Menu */}
                        <Sidebar />

                        {/* RIGHT COLUMN: Responsive 3-In-A-Row Product Card Grid Layout */}
                        <main className="lg:col-span-3">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center  pb-4  gap-4">
                                <div className="border-b border-gray-200 pb-6 mb-8">
                                    {/* Title: Increased size to 2xl, bolded, and colored Green */}
                                    <h2 className="text-2xl md:text-3xl font-extrabold text-green-600 tracking-tight">
                                        Transmission Fluids
                                    </h2>
                                    
                                    {/* Subtitle: Slightly larger and more readable */}
                                    <p className="text-sm text-gray-500 mt-2 font-medium">
                                        Showing premium high-performance engine lubricants from your selection.
                                    </p>
                                </div>
                                <div className="text-xs font-medium text-slate-500 bg-white border border-gray-200 rounded-md px-3 py-1.5 shadow-sm">
                                    Total Items: <span className="text-green-600 font-bold">4</span>
                                </div>
                            </div>

                            {/* Product Grid Layout Section */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                
                                <Link href="/sbkatfdexron11" className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block">
                                    <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                                        <img src="/productimage/5L-atf-dexron-II.png" alt="SBK Motor Oil" className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md"/>
                                    </div>

                                    <div className="p-5 flex flex-col flex-grow">
                                        <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-1 block">DEXRON II</span>
                                        <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">
                                            SBK AUTOMATIC TRANSMISSION FLUID DEXRON II
                                        </h3>
                                        <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">
                                            High-quality automatic transmission fluid engineered to ensure smooth shifting, reliable wear protection, and thermal stability in older passenger vehicles and light trucks.
                                        </p>
                                        
                                        <div className="border-t border-gray-100 pt-4 mt-auto">
                                            <div className="w-full py-2 bg-slate-800 group-hover:bg-green-600 text-white text-xs font-bold rounded-lg transition-colors flex justify-center items-center gap-1.5 shadow-sm">
                                                Specifications <i className="fas fa-arrow-right text-[10px]"></i>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                <Link href="/sbkatfdexron111" className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block">
                                    <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                                        <img src="/productimage/5L-atf-dexron-III.png" alt="SBK Motor Oil" className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md"/>
                                    </div>

                                    <div className="p-5 flex flex-col flex-grow">
                                        <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-1 block">DEXRON III</span>
                                        <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">
                                            SBK AUTOMATIC TRANSMISSION FLUID DEXRON III
                                        </h3>
                                        <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">
                                            Multi-purpose transmission fluid formulated with enhanced oxidation resistance and friction durability to prevent clutch slippage and maintain smooth gear shifts.
                                        </p>

                                        <div className="border-t border-gray-100 pt-4 mt-auto">
                                            <div className="w-full py-2 bg-slate-800 group-hover:bg-green-600 text-white text-xs font-bold rounded-lg transition-colors flex justify-center items-center gap-1.5 shadow-sm">
                                                Specifications <i className="fas fa-arrow-right text-[10px]"></i>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                <Link href="/sbkatfdexronVI" className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block">
                                    <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                                        <img src="/productimage/5L-atf-dexron-IV.png" alt="SBK Motor Oil" className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md"/>
                                    </div>

                                    <div className="p-5 flex flex-col flex-grow">
                                        <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-1 block">DEXRON VI</span>
                                        <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">
                                            SBK AUTOMATIC TRANSMISSION FLUID DEXRON VI
                                        </h3>
                                        <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">
                                            Advanced low-viscosity synthetic formula designed for modern multi-speed automatic transmissions, delivering exceptional shear stability and anti-shudder protection.
                                        </p>
                                        
                                        <div className="border-t border-gray-100 pt-4 mt-auto">
                                            <div className="w-full py-2 bg-slate-800 group-hover:bg-green-600 text-white text-xs font-bold rounded-lg transition-colors flex justify-center items-center gap-1.5 shadow-sm">
                                                Specifications <i className="fas fa-arrow-right text-[10px]"></i>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                <Link href="/sbkatfdexrondct" className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block">
                                    <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                                        <img src="/productimage/5L-atf-dct.png" alt="SBK Motor Oil" className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md"/>
                                    </div>

                                    <div className="p-5 flex flex-col flex-grow">
                                        <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-1 block">DCT SPECIALIST</span>
                                        <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">
                                            SBK AUTOMATIC TRANSMISSION FLUID DCT
                                        </h3>
                                        <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">
                                            Specialized high-performance synthetic fluid engineered for dual-clutch transmissions, providing rapid gear engagement, synchronizer protection, and extreme thermal resistance.
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