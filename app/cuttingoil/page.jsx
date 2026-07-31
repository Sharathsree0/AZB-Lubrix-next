import Link from 'next/link';
import Sidebar from '@/components/Sidebar';

export default function MetalWorkingFluidPage() {
  return (
    <>
      {/* Full-Width Premium Product Category Banner */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-16 md:py-24 overflow-hidden w-full"
        style={{ backgroundImage: "url('/productbanner/cuttingoil.jpeg')" }}
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
              <Link href="/" className="hover:text-green-500 transition">
                Home
              </Link>
              <span>/</span>
              <span className="hover:text-green-500 transition cursor-default">
                Industrial Lubricants
              </span>
              <span>/</span>
              <span className="text-green-400">Metal Working Fluid</span>
            </nav>

            <span className="hidden md:inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4 shadow-lg">
              High Performance Industrial Solutions
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-md">
              Metal Working <span className="text-green-400">Fluid</span>
            </h1>
            <p className="hidden md:block text-gray-100 text-base md:text-lg leading-relaxed drop-shadow-sm">
              Discover our comprehensive range of high-performance cutting oils—engineered to dissipate extreme heat, extend Metal Working Fluid life, and deliver flawless surface finishes across heavy-duty machining and metal removal operations
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
                    Metal Working Fluid
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

                {/* 1. SBK SOLUBLE CUTTING OIL */}
                <Link
                  href="/sbk-soluble-cutting-oil"
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block"
                >
                  <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                    <span className="absolute top-3 left-3 bg-slate-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow">Industrial</span>
                    <img src="/img/Drum-Red-(2).png" alt="SBK Soluble Cutting Oil" className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-1 block">WATER-SOLUBLE COOLANT</span>
                    <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">
                      SBK SOLUBLE CUTTING OIL
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">
                      Water-emulsifiable metalworking fluid engineered for superior cooling, excellent corrosion protection, and extended sump life in general machining and grinding operations.
                    </p>
                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      <div className="w-full py-2 bg-slate-800 group-hover:bg-green-600 text-white text-xs font-bold rounded-lg transition-colors flex justify-center items-center gap-1.5 shadow-sm">
                        Specifications <i className="fas fa-arrow-right text-[10px]"></i>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* 2. SBK NEAT CUTTING OIL */}
                <Link
                  href="/sbk-neat-cutting-oil"
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block"
                >
                  <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                    <span className="absolute top-3 left-3 bg-slate-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow">Industrial</span>
                    <img src="/img/Drum-Red-(2).png" alt="SBK Neat Cutting Oil" className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-1 block">HIGH-PERFORMANCE STRAIGHT OIL</span>
                    <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">
                      SBK NEAT CUTTING OIL
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">
                      Non-emulsifiable straight cutting oil enriched with extreme-pressure additives to deliver outstanding lubricity, superior surface finish, and maximum tool life in heavy-duty machining.
                    </p>
                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      <div className="w-full py-2 bg-slate-800 group-hover:bg-green-600 text-white text-xs font-bold rounded-lg transition-colors flex justify-center items-center gap-1.5 shadow-sm">
                        Specifications <i className="fas fa-arrow-right text-[10px]"></i>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* 3. SBK SLIDEWAY OIL */}
                <Link
                  href="/sbk-slideway-oil"
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full block"
                >
                  <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
                    <span className="absolute top-3 left-3 bg-slate-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow">Industrial</span>
                    <img src="/img/Drum-Red-(2).png" alt="SBK Slideway Oil" className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-1 block">MACHINE TOOL LUBRICANT</span>
                    <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">
                      SBK SLIDEWAY OIL
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">
                      Specialized machine tool lubricant formulated with anti-stick-slip technology to ensure smooth table motion, precise machining accuracy, and excellent separation from water-based coolants.
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