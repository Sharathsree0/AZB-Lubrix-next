'use client';

import { useState } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';

export default function BrakeFluidsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Full-Width Premium Product Category Banner */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-16 md:py-24 overflow-hidden w-full"
        style={{ backgroundImage: "url('/productbanner/brakefluids.jpeg')" }}
      >
        {/* Dark overlay to ensure text readability over the image */}
        <div className="absolute inset-0"></div>

        {/* Decorative blurs */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-green-600 rounded-full blur-3xl opacity-20 z-0"></div>
        <div className="absolute left-10 top-10 w-40 h-40 bg-red-600 rounded-full blur-3xl opacity-10 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            {/* Breadcrumb Path */}
            <nav className="hidden md:flex items-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-200 mb-6 space-x-2">
              <Link href="/" className="hover:text-green-500 transition">Home</Link>
              <span>/</span>
              <span className="hover:text-green-500 transition cursor-default">Automotive Oils</span>
              <span>/</span>
              <span className="text-green-400">Brake Fluids</span>
            </nav>

            <span className="hidden md:inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4 shadow-lg">
              High Performance Lubricants
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-md">
              Brake <span className="text-green-400">Fluids</span>
            </h1>
            <p className="hidden md:block text-gray-100 text-base md:text-lg leading-relaxed drop-shadow-sm">
              Explore our elite spectrum of premium synthetic brake fluids, engineered to prevent vapor lock, maintain precise pedal feel, and shield critical brake hydraulics against high-temperature degradation and corrosion.
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

            {/* RIGHT COLUMN: Product Grid Layout */}
            <main className="lg:col-span-3">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 gap-4">
                <div className="border-b border-gray-200 pb-6 mb-8">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-green-600 tracking-tight">
                    Brake Fluids
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

                {/* Notice Modal - React Conditional Render */}
                {isModalOpen && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4 transition-opacity duration-300">
                    <div className="bg-white rounded-2xl p-6 max-w-xs w-full shadow-2xl border border-gray-100 text-center transform transition-transform duration-300 scale-100">
                      <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                        <i className="fas fa-info-circle"></i>
                      </div>
                      <h3 className="text-slate-800 text-base font-extrabold mb-1">Specifications Coming Soon</h3>
                      <p className="text-gray-500 text-xs leading-relaxed mb-5">We're currently updating our product sheet. Complete specifications for this product will be available shortly.</p>
                      <button onClick={() => setIsModalOpen(false)} className="w-full py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer">
                        Got it
                      </button>
                    </div>
                  </div>
                )}

                {/* 1. SBK DOT 3 */}
                <a href="#" onClick={handleCardClick} className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block">
                  <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                    <img src="/productimage/SBK-DOT -3-Can.png" alt="SBK DOT 3 Brake Fluid" className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-1 block">DOT 3</span>
                    <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">
                      SBK DOT 3
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">
                      Reliable heavy-duty hydraulic brake fluid designed to maintain consistent pedal response, protect against vapor lock, and prevent corrosion in standard braking systems.
                    </p>
                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      <div className="w-full py-2 bg-slate-800 group-hover:bg-green-600 text-white text-xs font-bold rounded-lg transition-colors flex justify-center items-center gap-1.5 shadow-sm">
                        Specifications <i className="fas fa-arrow-right text-[10px]"></i>
                      </div>
                    </div>
                  </div>
                </a>

                {/* 2. SBK DOT 4 */}
                <a href="#" onClick={handleCardClick} className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block">
                  <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                    <img src="/productimage/SBK-DOT -4-Can.png" alt="SBK DOT 4 Brake Fluid" className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-1 block">DOT 4</span>
                    <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">
                      SBK DOT 4
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">
                      High-boiling-point synthetic brake fluid engineered for modern vehicles, delivering superior anti-vapor lock performance and maximum hydraulic safety under higher thermal loads.
                    </p>
                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      <div className="w-full py-2 bg-slate-800 group-hover:bg-green-600 text-white text-xs font-bold rounded-lg transition-colors flex justify-center items-center gap-1.5 shadow-sm">
                        Specifications <i className="fas fa-arrow-right text-[10px]"></i>
                      </div>
                    </div>
                  </div>
                </a>

                {/* 3. SBK DOT 5.1 */}
                <a href="#" onClick={handleCardClick} className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block">
                  <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                    <img src="/productimage/SBK-DOT 5.1-Can.png" alt="SBK DOT 5.1 Brake Fluid" className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-1 block">DOT 5.1</span>
                    <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">
                      SBK DOT 5.1
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">
                      Ultra-high performance, low-viscosity brake fluid formulated for advanced ABS and ESP systems, offering exceptional fluidity in extreme cold and maximum thermal resistance under severe braking.
                    </p>
                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      <div className="w-full py-2 bg-slate-800 group-hover:bg-green-600 text-white text-xs font-bold rounded-lg transition-colors flex justify-center items-center gap-1.5 shadow-sm">
                        Specifications <i className="fas fa-arrow-right text-[10px]"></i>
                      </div>
                    </div>
                  </div>
                </a>

              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}