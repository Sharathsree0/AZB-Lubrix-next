'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function DistributorsPage() {

    // Intersection Observer for slide animations
    useEffect(() => {
        const animatedElements = document.querySelectorAll('.slide-from-left');

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const scrollObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animatedElements.forEach(element => {
            scrollObserver.observe(element);
        });

        return () => {
            animatedElements.forEach(element => scrollObserver.unobserve(element));
            scrollObserver.disconnect();
        };
    }, []);

    return (
        <div className="bg-white text-slate-700 antialiased flex flex-col min-h-screen">
            
            {/* Hero Showcase Area */}
            <section 
                className="bg-[#030712] text-white py-12 md:py-16 font-sans border-b border-slate-900 bg-cover bg-center bg-no-repeat" 
                style={{ backgroundImage: "url('/img/distributors.jpeg')" }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Breadcrumbs Navigation Track */}
                    <nav 
                        className="flex items-center space-x-2 text-xs md:text-sm text-slate-400 mb-6" 
                        style={{ marginTop: '104px', fontSize: '20px', fontWeight: 600 }}
                    >
                        <Link href="/" className="hover:text-black transition" style={{ color: 'black' }}>Home</Link>
                        <i className="fas fa-chevron-right text-[10px] text-slate-500"></i>
                        <span className="hover:text-black transition" style={{ color: 'black' }}>Distributors</span>
                    </nav>

                    <div className="mb-30"></div>
                    <div className="mb-30"></div>

                    <br /><br /><br /><br /><br /><br /><br />
                </div>
            </section>

            {/* Distributor Application Form Section */}
            <section className="max-w-4xl mx-auto px-4 py-12 w-full flex-grow">
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-10">
                    
                    <form action="#" method="POST" className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        
                        <div className="border-b border-slate-100 pb-4">
                            <h2 className="text-xl font-bold text-slate-800">Distributor Application Form</h2>
                            <p className="text-xs text-slate-500 mt-1">Fields marked with <span className="text-red-500">*</span> are required.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            
                            {/* Name Field */}
                            <div>
                                <label htmlFor="full_name" className="block text-sm font-semibold text-slate-700 mb-2">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                                        <i className="fas fa-user"></i>
                                    </span>
                                    <input 
                                        type="text" 
                                        id="full_name" 
                                        name="full_name" 
                                        required 
                                        placeholder="" 
                                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1FA463] focus:bg-white transition"
                                    />
                                </div>
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        required 
                                        placeholder="" 
                                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1FA463] focus:bg-white transition"
                                    />
                                </div>
                            </div>

                            {/* Phone Number Field */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                                    Phone / WhatsApp Number <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                                        <i className="fas fa-phone"></i>
                                    </span>
                                    <input 
                                        type="tel" 
                                        id="phone" 
                                        name="phone" 
                                        required 
                                        placeholder="" 
                                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1FA463] focus:bg-white transition"
                                    />
                                </div>
                            </div>

                            {/* Company Name Field */}
                            <div>
                                <label htmlFor="company_name" className="block text-sm font-semibold text-slate-700 mb-2">
                                    Company Name
                                </label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                                        <i className="fas fa-building"></i>
                                    </span>
                                    <input 
                                        type="text" 
                                        id="company_name" 
                                        name="company_name" 
                                        placeholder="Your Business Ltd." 
                                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1FA463] focus:bg-white transition"
                                    />
                                </div>
                            </div>

                            {/* Country / Region Field */}
                            <div className="md:col-span-2">
                                <label htmlFor="country" className="block text-sm font-semibold text-slate-700 mb-2">
                                    Target Country / Region for Distribution <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                                        <i className="fas fa-globe"></i>
                                    </span>
                                    <input 
                                        type="text" 
                                        id="country" 
                                        name="country" 
                                        required 
                                        placeholder="e.g. United Arab Emirates, Saudi Arabia, Kenya..." 
                                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1FA463] focus:bg-white transition"
                                    />
                                </div>
                            </div>

                            {/* Message Field */}
                            <div className="md:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                                    Additional Details / Message
                                </label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows="4" 
                                    placeholder="Tell us about your current business and distribution requirements..." 
                                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1FA463] focus:bg-white transition"
                                ></textarea>
                            </div>

                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                            <button 
                                type="submit" 
                                className="w-full py-4 bg-[#1FA463] hover:bg-emerald-600 text-white font-bold text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <i className="fas fa-paper-plane"></i>
                                <span>Submit Application</span>
                            </button>
                        </div>

                    </form>
                </div>
            </section>

        </div>
    );
}