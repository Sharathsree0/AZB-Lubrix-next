import Link from 'next/link';
import Sidebar from '@/components/Sidebar';

export default function PetrolEnginePcmoPage() {
  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-16 md:py-18 overflow-hidden w-full"
        style={{ backgroundImage: "url('/productbanner/petrol-and-diesel.jpg')" }}
      >
        <div className="absolute inset-0"></div>
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-green-600 rounded-full blur-3xl opacity-20 z-0"></div>
        <div className="absolute left-10 top-10 w-40 h-40 bg-red-600 rounded-full blur-3xl opacity-10 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <nav className="hidden md:flex items-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-200 mb-6 space-x-2">
              <Link href="/" className="hover:text-green-500 transition">Home</Link>
              <span>/</span>
              <span className="hover:text-green-500 transition cursor-default">Automotive Oils</span>
              <span>/</span>
              <span className="text-green-400">Petrol Engine PCMO</span>
            </nav>

            <span className="hidden md:inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4 shadow-lg">
              High Performance Lubricants
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-md">
              Petrol Engine <span className="text-green-400">PCMO</span>
            </h1>
            <p className="hidden md:block text-gray-100 text-base md:text-lg leading-relaxed drop-shadow-sm">
              Explore our elite spectrum of premium synthetic passenger car motor oils, engineered to optimize gasoline fuel efficiency, maximize engine longevity, and safeguard internal combustion systems under intense thermal stress.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            <Sidebar />

            <main className="lg:col-span-3">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 gap-4">
                <div className="border-b border-gray-200 pb-6 mb-8">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-green-600 tracking-tight">
                    Petrol Engine PCMO
                  </h2>
                  <p className="text-sm text-gray-500 mt-2 font-medium">
                    Showing premium high-performance engine lubricants from your selection.
                  </p>
                </div>
                <div className="text-xs font-medium text-slate-500 bg-white border border-gray-200 rounded-md px-3 py-1.5 shadow-sm">
                  Total Items: <span className="text-green-600 font-bold">13</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* 1. SAE 0W-16 API SP */}
                <Link href="/sbksaeow-16" className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block">
                  <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                    <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow">Fully Synthetic</span>
                    <img src="/productimage/SBK-EVERA-SAE-0W-16-5L.png" alt="SBK Motor Oil" className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-1 block">API SP</span>
                    <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">SBK PETROL ENGINE OIL SAE 0W-16</h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">Advanced low-viscosity resource conserving formula designed to boost fuel efficiency in modern engines.</p>
                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      <div className="w-full py-2 bg-slate-800 group-hover:bg-green-600 text-white text-xs font-bold rounded-lg transition-colors flex justify-center items-center gap-1.5 shadow-sm">Specifications <i className="fas fa-arrow-right text-[10px]"></i></div>
                    </div>
                  </div>
                </Link>

                {/* 2. SAE 0W-20 API SN */}
                <Link href="/sbksaeow-20" className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block">
                  <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                    <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow">Fully Synthetic</span>
                    <img src="/productimage/SBK-EVERA-SAE-0W-20-5L.png" alt="SBK Motor Oil" className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-1 block">API SN</span>
                    <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">SBK PETROL ENGINE OIL SAE 0W-20</h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">Engineered to deliver exceptional thermal protection and sludge resistance for downsized turbocharged platforms.</p>
                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      <div className="w-full py-2 bg-slate-800 group-hover:bg-green-600 text-white text-xs font-bold rounded-lg transition-colors flex justify-center items-center gap-1.5 shadow-sm">Specifications <i className="fas fa-arrow-right text-[10px]"></i></div>
                    </div>
                  </div>
                </Link>

                {/* 3. SAE 0W-20 API SP */}
                <Link href="/sbksaeow-20apisp" className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block">
                  <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                    <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow">Fully Synthetic</span>
                    <img src="/productimage/SBK-EVERA-SAE-0W-20-5L-sp.png" alt="SBK Motor Oil" className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-1 block">API SP</span>
                    <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">SBK PETROL ENGINE OIL SAE 0W-20</h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">Next-generation API SP technology providing mitigation against Low-Speed Pre-Ignition (LSPI) in modern TGDI layouts.</p>
                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      <div className="w-full py-2 bg-slate-800 group-hover:bg-green-600 text-white text-xs font-bold rounded-lg transition-colors flex justify-center items-center gap-1.5 shadow-sm">Specifications <i className="fas fa-arrow-right text-[10px]"></i></div>
                    </div>
                  </div>
                </Link>

                {/* 5. DIAMOND 7000 SAE 5W-30 API SM */}
                <Link href="/sbkdiamond70005w-30" className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block">
                  <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                    <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow">Fully Synthetic</span>
                    <img src="/productimage/5L_DIAMOND-7000-SAE-5W-30,-API-SM---Can.png" alt="SBK Motor Oil" className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-1 block">DIAMOND 7000 / API SM</span>
                    <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">SBK DIAMOND 7000 SAE 5W-30</h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">Delivers highly reinforced oil film thickness parameter control along with extended anti-oxidation capabilities.</p>
                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      <div className="w-full py-2 bg-slate-800 group-hover:bg-green-600 text-white text-xs font-bold rounded-lg transition-colors flex justify-center items-center gap-1.5 shadow-sm">Specifications <i class="fas fa-arrow-right text-[10px]"></i></div>
                    </div>
                  </div>
                </Link>

                {/* 6. DIAMOND 9000 SAE 5W-30 API SN */}
                <Link href="/sbkdiamond9000sae5w-30" className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block">
                  <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                    <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow">Fully Synthetic</span>
                    <img src="/productimage/5L_DIAMOND-9000-SAE-5W-30,-API-SN---Can.png" alt="SBK Motor Oil" className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-1 block">DIAMOND 9000 / API SN</span>
                    <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">SBK DIAMOND 9000 SAE 5W-30</h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">Top-tier synthetic technology ensuring superior hardware deposit control and responsive internal pumpability flow rates.</p>
                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      <div className="w-full py-2 bg-slate-800 group-hover:bg-green-600 text-white text-xs font-bold rounded-lg transition-colors flex justify-center items-center gap-1.5 shadow-sm">Specifications <i className="fas fa-arrow-right text-[10px]"></i></div>
                    </div>
                  </div>
                </Link>

                {/* 8. DIAMOND 7000 SAE 5W-40 API SM */}
                <Link href="/sbkdiamond7000sw-40" className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block">
                  <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                    <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow">Fully Synthetic</span>
                    <img src="/productimage/5L_DIAMOND-7000-SAE-5W-40-API-SM---Can.png" alt="SBK Motor Oil" className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-1 block">DIAMOND 7000 / API SM</span>
                    <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">SBK DIAMOND 7000 SAE 5W-40</h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">Delivers enhanced volatility defense preventing oil consumption across fluctuating thermal operating limits.</p>
                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      <div className="w-full py-2 bg-slate-800 group-hover:bg-green-600 text-white text-xs font-bold rounded-lg transition-colors flex justify-center items-center gap-1.5 shadow-sm">Specifications <i className="fas fa-arrow-right text-[10px]"></i></div>
                    </div>
                  </div>
                </Link>

                {/* 9. DIAMOND 9000 SAE 5W-40 API SN */}
                <Link href="/sbkdiamond9000sae5w-40" className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block">
                  <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                    <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow">Fully Synthetic</span>
                    <img src="/productimage/5L_DIAMOND-9000-SAE-5W-40,-API-SN---Can.png" alt="SBK Motor Oil" className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-1 block">DIAMOND 9000 / API SN</span>
                    <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">SBK DIAMOND 9000 SAE 5W-40</h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">Engineered to provide utmost protection against wear, soot displacement, and cold start friction parameters.</p>
                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      <div className="w-full py-2 bg-slate-800 group-hover:bg-green-600 text-white text-xs font-bold rounded-lg transition-colors flex justify-center items-center gap-1.5 shadow-sm">Specifications <i className="fas fa-arrow-right text-[10px]"></i></div>
                    </div>
                  </div>
                </Link>

                {/* 10. DIAMOND 5000 SAE 10W-40 API SL */}
                <Link href="/sbkdiamond500010w-40" className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block">
                  <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow">Synthetic</span>
                    <img src="/productimage/5L_DIAMOND-5000-SAE-10W-40-API-SL---Can.png" alt="SBK Motor Oil" className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-1 block">DIAMOND 5000 / API SL</span>
                    <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">SBK DIAMOND 5000 SAE 10W-40</h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">Optimized multi-grade lubricant providing year-round reliability and effective anti-friction surface plating.</p>
                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      <div className="w-full py-2 bg-slate-800 group-hover:bg-green-600 text-white text-xs font-bold rounded-lg transition-colors flex justify-center items-center gap-1.5 shadow-sm">Specifications <i className="fas fa-arrow-right text-[10px]"></i></div>
                    </div>
                  </div>
                </Link>

                {/* 11. DIAMOND 7000 SAE 10W-40 API SM */}
                <Link href="/sbkdiamond700010w-40" className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block">
                  <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow">Synthetic</span>
                    <img src="/productimage/5L_DIAMOND-7000-SAE-10W-40-API-SM---Can.png" alt="SBK Motor Oil" className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-1 block">DIAMOND 7000 / API SM</span>
                    <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">SBK DIAMOND 7000 SAE 10W-40</h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">Engineered with premium base structures to prevent high-temperature varnish accumulation inside valves.</p>
                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      <div className="w-full py-2 bg-slate-800 group-hover:bg-green-600 text-white text-xs font-bold rounded-lg transition-colors flex justify-center items-center gap-1.5 shadow-sm">Specifications <i className="fas fa-arrow-right text-[10px]"></i></div>
                    </div>
                  </div>
                </Link>

                {/* 12. DIAMOND 3000 SAE 20W-50 API SF */}
                <Link href="/sbkdiamond3000sae20w-50" className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block">
                  <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                    <span className="absolute top-3 left-3 bg-amber-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow">Mineral</span>
                    <img src="/productimage/5L_DIAMOND-3000-SAE-20W-50-API-SF--Can.png" alt="SBK Motor Oil" className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-1 block">DIAMOND 3000 / API SF</span>
                    <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">SBK DIAMOND 3000 SAE 20W-50</h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">High-viscosity formulation ideal for older powertrains or highly loaded configurations requiring thick hydrodynamic seal preservation.</p>
                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      <div className="w-full py-2 bg-slate-800 group-hover:bg-green-600 text-white text-xs font-bold rounded-lg transition-colors flex justify-center items-center gap-1.5 shadow-sm">Specifications <i className="fas fa-arrow-right text-[10px]"></i></div>
                    </div>
                  </div>
                </Link>

                {/* 13. DIAMOND 5000 SAE 20W-50 API SL */}
                <Link href="/sbkdiamond500020w-50" className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block">
                  <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                    <span className="absolute top-3 left-3 bg-amber-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow">Mineral</span>
                    <img src="/productimage/5L_DIAMOND-5000-SAE-20W-50-API-SL---Can.png" alt="SBK Motor Oil" className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-1 block">DIAMOND 5000 / API SL</span>
                    <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">SBK DIAMOND 5000 SAE 20W-50</h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">Heavy-duty protective mineral formulation minimizing component wear and structural blow-by conditions under demanding ambient weather.</p>
                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      <div className="w-full py-2 bg-slate-800 group-hover:bg-green-600 text-white text-xs font-bold rounded-lg transition-colors flex justify-center items-center gap-1.5 shadow-sm">Specifications <i className="fas fa-arrow-right text-[10px]"></i></div>
                    </div>
                  </div>
                </Link>
                
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}