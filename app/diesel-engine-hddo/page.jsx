import Link from 'next/link';
import Sidebar from '@/components/Sidebar';

export default function DieselEngineHddoPage() {
  return (
    <>
      {/* Full-Width Premium Product Category Banner */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-16 md:py-24 overflow-hidden"
        style={{ backgroundImage: "url('/banner/automotivebanner.jpeg')" }}
      >
        {/* Dark overlay to ensure text readability over the image */}
        <div className="absolute inset-0"></div>

        {/* Decorative blurs */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-green-600 rounded-full blur-3xl opacity-20 z-0"></div>
        <div className="absolute left-10 top-10 w-40 h-40 bg-red-600 rounded-full blur-3xl opacity-10 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            {/* Breadcrumb Path */}
            <nav className="flex items-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-200 mb-6 space-x-2">
              <Link href="/" className="hover:text-green-500 transition">
                Home
              </Link>
              <span>/</span>
              <span className="hover:text-green-500 transition cursor-default">
                Automotive Oils
              </span>
              <span>/</span>
              <span className="text-green-400">Diesel Engine HDDO</span>
            </nav>

            <span className="inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4 shadow-lg">
              High Performance Lubricants
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-md">
              AUTOMOTIVE <span className="text-green-400">OILS</span>
            </h1>
            <div className="w-24 h-1 bg-green-500 mb-6"></div>
            <p className="text-gray-100 text-base md:text-lg leading-relaxed drop-shadow-sm">
              Explore our elite spectrum of premium synthetic motor oils, engineered to optimize fuel efficiency, maximize engine longevity, and safeguard powertrain internal systems under intense thermal stress.
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
                    Diesel Engine HDDO
                  </h2>
                  <p className="text-sm text-gray-500 mt-2 font-medium">
                    Showing premium high-performance engine lubricants from your selection.
                  </p>
                </div>
                <div className="text-xs font-medium text-slate-500 bg-white border border-gray-200 rounded-md px-3 py-1.5 shadow-sm">
                  Total Items: <span className="text-green-600 font-bold">13</span>
                </div>
              </div>

              {/* Product Grid Layout Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* 1. SAE 15W-40 API CK-4 */}
                <Link
                  href="/sbkdieselopalmis9400sae15w-40ck-4"
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block"
                >
                  <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                    <img 
                      src="/productimage/5L_OPAL-MIS-9400-SAE-15W-40-API--CK-4-Can.png" 
                      alt="SBK Motor Oil" 
                      className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md" 
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-1 block">API CK-4</span>
                    <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">
                      SBK DIESEL ENGINE OIL OPAL MIS 9400 SAE15W-40 API CK-4
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">
                      Advanced low-viscosity resource conserving formula designed to boost fuel efficiency in modern engines.
                    </p>
                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      <div className="w-full py-2 bg-slate-800 group-hover:bg-green-600 text-white text-xs font-bold rounded-lg transition-colors flex justify-center items-center gap-1.5 shadow-sm">
                        Specifications <i className="fas fa-arrow-right text-[10px]"></i>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* 2. SAE 15W-40 API CJ-4 */}
                <Link
                  href="/sbkdieselopalmis9400sae15w-40cj-4"
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block"
                >
                  <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                    <img 
                      src="/productimage/5L_OPAL-MIS-9400-SAE-15W-40-API--CJ-4-Can.png" 
                      alt="SBK Motor Oil" 
                      className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md" 
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-1 block">API CJ-4</span>
                    <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">
                      SBK DIESEL ENGINE OIL OPAL MIS 9400 SAE15W-40 API CJ-4
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">
                      Engineered to deliver exceptional thermal protection and sludge resistance for downsized turbocharged platforms.
                    </p>
                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      <div className="w-full py-2 bg-slate-800 group-hover:bg-green-600 text-white text-xs font-bold rounded-lg transition-colors flex justify-center items-center gap-1.5 shadow-sm">
                        Specifications <i className="fas fa-arrow-right text-[10px]"></i>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* 3. SAE 15W-40 API CI-4 */}
                <Link
                  href="/sbkdieselopalmis4700sae15w-40ci-4"
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block"
                >
                  <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                    <img 
                      src="/productimage/5L_OPAL-MIS-4700-SAE-15W-40-API--CI-4-Can.png" 
                      alt="SBK Motor Oil" 
                      className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md" 
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-1 block">API CI-4</span>
                    <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">
                      SBK DIESEL ENGINE OIL OPAL MIS 4700 SAE15W-40
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">
                      Next-generation API SP technology providing mitigation against Low-Speed Pre-Ignition (LSPI) in modern TGDI layouts.
                    </p>
                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      <div className="w-full py-2 bg-slate-800 group-hover:bg-green-600 text-white text-xs font-bold rounded-lg transition-colors flex justify-center items-center gap-1.5 shadow-sm">
                        Specifications <i className="fas fa-arrow-right text-[10px]"></i>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* 4. SAE 15W-40 API CF-4 */}
                <Link
                  href="/sbkdieselopaltxsae15w-40cf-4"
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block"
                >
                  <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                    <img 
                      src="/productimage/5L_OPAL-TX--SAE-15W-40-API-CF-4-Can.png" 
                      alt="SBK Motor Oil" 
                      className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md" 
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-1 block">API CF-4</span>
                    <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">
                      SBK DIESEL ENGINE OIL OPAL TX SAE  15W-40
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">
                      Formulated with high shear stability base stocks to keep active engine architectures cleaner under everyday commuting stresses.
                    </p>
                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      <div className="w-full py-2 bg-slate-800 group-hover:bg-green-600 text-white text-xs font-bold rounded-lg transition-colors flex justify-center items-center gap-1.5 shadow-sm">
                        Specifications <i className="fas fa-arrow-right text-[10px]"></i>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* 5. OPAL S SAE 20W-50 */}
                <Link
                  href="/sbkopalssae20w-50"
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block"
                >
                  <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                    <img 
                      src="/img/Drum-Red-(2).png" 
                      alt="SBK Motor Oil" 
                      className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md" 
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-1 block">API CF</span>
                    <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">
                      SBK DIESEL ENGINE OIL OPAL S SAE20W- 50
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">
                      Delivers highly reinforced oil film thickness parameter control along with extended anti-oxidation capabilities.
                    </p>
                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      <div className="w-full py-2 bg-slate-800 group-hover:bg-green-600 text-white text-xs font-bold rounded-lg transition-colors flex justify-center items-center gap-1.5 shadow-sm">
                        Specifications <i className="fas fa-arrow-right text-[10px]"></i>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* 6. OPAL TX SAE 20W-50 */}
                <Link
                  href="/sbkopaltxsae20w-50"
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block"
                >
                  <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                    <img 
                      src="/img/Drum-Red-(2).png" 
                      alt="SBK Motor Oil" 
                      className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md" 
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-1 block">API CH-4</span>
                    <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">
                      SBK DIESEL ENGINE OIL OPAL TX SAE 20W-50
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">
                      Top-tier synthetic technology ensuring superior hardware deposit control and responsive internal pumpability flow rates.
                    </p>
                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      <div className="w-full py-2 bg-slate-800 group-hover:bg-green-600 text-white text-xs font-bold rounded-lg transition-colors flex justify-center items-center gap-1.5 shadow-sm">
                        Specifications <i className="fas fa-arrow-right text-[10px]"></i>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* 7. OPAL S SAE 50 */}
                <Link
                  href="/sbkopalssae-50"
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block"
                >
                  <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                    <img 
                      src="/img/Drum-Red-(2).png" 
                      alt="SBK Motor Oil" 
                      className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md" 
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-1 block">API CF</span>
                    <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">
                      SBK DIESEL ENGINE OIL OPAL S SAE 50
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">
                      Provides balanced viscosity configuration across wide operating temperatures for continuous daily operations.
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
    </>
  );
}