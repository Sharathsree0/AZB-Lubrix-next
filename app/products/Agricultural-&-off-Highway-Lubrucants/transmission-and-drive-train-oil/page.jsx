'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';

export default function TransmissionAndDriveTrainOil() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openNoticeModal = () => setIsModalOpen(true);
    const closeNoticeModal = () => setIsModalOpen(false);

    const handleCardClick = (event, element) => {
        if (element.getAttribute('href') === '#') {
            event.preventDefault();
            openNoticeModal();
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
                     style={{ backgroundImage: "url('/productbanner/agriculture.jpeg')" }}>
                
                <div className="absolute inset-0 "></div>
                
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-green-600 rounded-full blur-3xl opacity-20 z-0"></div>
                <div className="absolute left-10 top-10 w-40 h-40 bg-red-600 rounded-full blur-3xl opacity-10 z-0"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <nav className="hidden md:flex items-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-200 mb-6 space-x-2">
                            <Link href="/" className="hover:text-green-500 transition">Home</Link>
                            <span>/</span>
                            <Link href="#" className="hover:text-green-500 transition">AGRICULTRAL AND OFF-HIGHWAY LUBRICANTS </Link>
                            <span>/</span>
                            <span className="text-green-400">TRANSMISSION AND DRIVE TRAIN OIL</span>
                        </nav>

                        <span className="hidden md:inline-block inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4 shadow-lg">
                            High Performance AGRICULTRAL AND OFF-HIGHWAY LUBRICANTS
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-md">
                           TRANSMISSION AND <span className="text-green-400">DRIVE TRAIN OIL</span>
                        </h1>
                        <p className="hidden md:block text-gray-100 text-base md:text-lg leading-relaxed drop-shadow-sm">
                           Maximize machinery reliability with our premium transmission and drive train oil. Engineered to withstand high-torque loads and severe operational stresses, our lubricant delivers superior gear protection, optimal thermal stability, and smooth power transfer to keep your heavy-duty fleet performing at its peak.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Workspace Layout Container */}
            <div className="bg-gray-50 min-h-screen py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                        
                        <Sidebar />

                        <main className="lg:col-span-3">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center  pb-4  gap-4">
                                <div className="border-b border-gray-200 pb-6 mb-8">
                                    <h2 className="text-2xl md:text-3xl font-extrabold text-green-600 tracking-tight">
                                       TRANSMISSION AND DRIVE TRAIN OIL
                                    </h2>
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

                                {isModalOpen && (
                                    <div id="alertModal" className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4 transition-opacity duration-300">
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

                                <Link href="/products/Agricultural-&-off-Highway-Lubrucants/transmission-and-drive-train-oil/sbk-transmission-and-drive-train-oil-sae-10w" className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block">
                                    <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                                        <span className="absolute top-3 left-3 bg-green-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow">AGRICULTRAL AND OFF-HIGHWAY LUBRICANTS</span>
                                        <img src="/img/Drum-Red-(2).png" alt="SBK 4T" className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md"/>
                                    </div>
                                    <div className="p-5 flex flex-col flex-grow">
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 block">TRANSMISSION AND DRIVE TRAIN OIL</span>
                                        <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">SBK TRANSMISSION AND DRIVE TRAIN OIL TDTO SAE 10W</h3>
                                        <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">A low-viscosity TDTO SAE 10W fluid engineered for exceptional cold-weather hydraulic response, fast pumpability, and power-shift transmission protection.</p>
                                        <div className="border-t border-gray-100 pt-4 mt-auto">
                                            <div className="w-full py-2 bg-slate-800 text-white text-xs font-bold rounded-lg flex justify-center items-center gap-1.5">Specifications <i className="fas fa-arrow-right"></i></div>
                                        </div>
                                    </div>
                                </Link>

                                <a href="#" onClick={(e) => handleCardClick(e, e.currentTarget)} className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block">
                                    <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                                        <span className="absolute top-3 left-3 bg-green-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow">AGRICULTRAL AND OFF-HIGHWAY LUBRICANTS</span>
                                        <img src="/img/Drum-Red-(2).png" alt="SBK 4T" className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md"/>
                                    </div>
                                    <div className="p-5 flex flex-col flex-grow">
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 block">TRANSMISSION AND DRIVE TRAIN OIL</span>
                                        <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">SBK TRANSMISSION AND DRIVE TRAIN OIL TDTO SAE 30</h3>
                                        <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">Formulated for heavy-duty power-shift transmissions and torque converters, providing precise clutch friction control and optimum gear wear defense under high load.</p>
                                        <div className="border-t border-gray-100 pt-4 mt-auto">
                                            <div className="w-full py-2 bg-slate-800 text-white text-xs font-bold rounded-lg flex justify-center items-center gap-1.5">Specifications <i className="fas fa-arrow-right"></i></div>
                                        </div>
                                    </div>
                                </a>

                                <a href="#" onClick={(e) => handleCardClick(e, e.currentTarget)} className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block">
                                    <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                                        <span className="absolute top-3 left-3 bg-green-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow">AGRICULTRAL AND OFF-HIGHWAY LUBRICANTS</span>
                                        <img src="/img/Drum-Red-(2).png" alt="SBK 4T" className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md"/>
                                    </div>
                                    <div className="p-5 flex flex-col flex-grow">
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 block">TRANSMISSION AND DRIVE TRAIN OIL</span>
                                        <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">SBK TRANSMISSION AND DRIVE TRAIN OIL TDTO SAE 40</h3>
                                        <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">Engineered for heavy equipment transmissions and final drives operating in warm conditions, offering superior film strength, anti-wear action, and oxidation resistance.</p>
                                        <div className="border-t border-gray-100 pt-4 mt-auto">
                                            <div className="w-full py-2 bg-slate-800 text-white text-xs font-bold rounded-lg flex justify-center items-center gap-1.5">Specifications <i className="fas fa-arrow-right"></i></div>
                                        </div>
                                    </div>
                                </a>

                                <a href="#" onClick={(e) => handleCardClick(e, e.currentTarget)} className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block">
                                    <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                                        <span className="absolute top-3 left-3 bg-green-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow">AGRICULTRAL AND OFF-HIGHWAY LUBRICANTS</span>
                                        <img src="/img/Drum-Red-(2).png" alt="SBK 4T" className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md"/>
                                    </div>
                                    <div className="p-5 flex flex-col flex-grow">
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 block">TRANSMISSION AND DRIVE TRAIN OIL</span>
                                        <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">SBK TRANSMISSION AND DRIVE TRAIN OIL TDTO SAE 50</h3>
                                        <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">Heavy-duty TDTO SAE 50 lubricant built for extreme-stress final drives and differentials, delivering maximum extreme-pressure gear protection in high ambient temperatures.</p>
                                        <div className="border-t border-gray-100 pt-4 mt-auto">
                                            <div className="w-full py-2 bg-slate-800 text-white text-xs font-bold rounded-lg flex justify-center items-center gap-1.5">Specifications <i className="fas fa-arrow-right"></i></div>
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