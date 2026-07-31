'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// Ported from nav.php
// PHP had: $current_page = basename($_SERVER['PHP_SELF']);  ->  replaced by usePathname()
// PHP had: <?php echo ($current_page == 'index.php') ? '...' : ''; ?>  ->  replaced by JS ternary below

export default function Navbar() {
  const pathname = usePathname(); // e.g. "/" or "/contact"

  const isActive = (path) => pathname === path;

  return (
    <>
      <div className="bg-brand-dark text-white text-xs py-2 border-b border-gray-800">
        <div className="topbar-inner container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span><i className="fas fa-envelope mr-2 text-brand-gold"></i> vikas.js@azbenergy.com</span>
            <span><i className="fas fa-phone mr-2 text-brand-gold"></i> +971 6 744 7843</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-brand-gold transition">Distributors</a>
            <a href="#" className="hover:text-brand-gold transition">Careers</a>
            <div className="flex space-x-2 ml-2">
              <a href="#" className="hover:text-brand-gold"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="hover:text-brand-gold"><i className="fab fa-facebook"></i></a>
              <a href="#" className="hover:text-brand-gold"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>

      <nav id="navbar" className="sticky top-0 z-50 bg-white shadow-md transition-all duration-300">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <Link href="/" className="flex items-center" aria-label="AZB ENERGY FZC">
            <Image src="/logonew-1.png" alt="AZB ENERGY FZC logo" width={220} height={56} className="header-logo-img" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium ${isActive('/') ? ' text-green-600 underline decoration-red-600 decoration-2' : ''} underline-offset-4 transition`}
            >
              Home
            </Link>

            <div className="relative group">
              <a href="#" className="inline-flex items-center gap-1 font-medium hover:text-green-600 transition py-3">
                About Us
                <i className="fas fa-chevron-down text-[10px] transition-transform duration-200 group-hover:rotate-180"></i>
              </a>
              <div className="absolute left-0 top-full w-52 bg-white shadow-xl rounded-md border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 py-2 z-50">
                <Link href="/our-team" className="flex justify-between items-center px-4 py-3 hover:bg-green-600 hover:text-white transition font-medium">Our Team</Link>
                <a href="#certifications" className="flex justify-between items-center px-4 py-3 hover:bg-green-600 hover:text-white transition font-medium">Certifications</a>
              </div>
            </div>

            <div className="relative group">
              <button className="font-medium hover:text-green-600 transition flex items-center py-2">
                Products <i className="fas fa-chevron-down ml-1 text-xs"></i>
              </button>
              <div className="absolute left-0 mt-1 w-56 bg-white shadow-xl rounded-md border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 py-1">

                <div className="relative group/sub">
                  <Link href="/petrol-engine-pmco" className="flex justify-between items-center px-4 py-3 hover:bg-green-600 hover:text-white transition font-medium group/link">
                    Automotive Oil <i className="fas fa-chevron-right text-xs ml-2 text-gray-400 group-hover/link:text-white"></i>
                  </Link>
                  <div className="absolute left-[calc(100%+6px)] top-0 w-56 bg-white shadow-xl rounded-md border border-gray-100 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform translate-x-2 group-hover/sub:translate-x-0 py-2">
                    <Link href="/petrol-engine-pmco" className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-green-600 hover:text-white transition">Petrol Engine PMCO</Link>
                    <Link href="/diesel-engine-hddo" className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-green-600 hover:text-white transition">Diesel Engine HDDO</Link>
                    <Link href="/gear-oil" className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-green-600 hover:text-white transition">Gear Oil</Link>
                    <Link href="/transmission-fluids" className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-green-600 hover:text-white transition">Transmission Fluids</Link>
                    <Link href="/coolants" className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-green-600 hover:text-white transition">Coolants</Link>
                    <Link href="/brakefluids" className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-green-600 hover:text-white transition">Brake Fluids</Link>
                  </div>
                </div>

                <div className="relative group/sub">
                  <Link href="/hydraulic-oil" className="flex justify-between items-center px-4 py-3 hover:bg-green-600 hover:text-white transition font-medium group/link">
                    Industrial Lubricants <i className="fas fa-chevron-right text-xs ml-2 text-gray-400 group-hover/link:text-white"></i>
                  </Link>
                  <div className="absolute left-[calc(100%+6px)] top-0 w-60 bg-white shadow-xl rounded-md border border-gray-100 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform translate-x-2 group-hover/sub:translate-x-0 py-2">
                    <Link href="/hydraulic-oil" className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-green-600 hover:text-white transition">Hydraulic Oil</Link>
                    <Link href="/turbineoil" className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-green-600 hover:text-white transition">Turbine Oil</Link>
                    <Link href="/compressoroil" className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-green-600 hover:text-white transition">Compressor Oil</Link>
                    <Link href="/industrialgear" className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-green-600 hover:text-white transition">Industrial Gear Oil</Link>
                    <Link href="/cuttingoil" className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-green-600 hover:text-white transition">Metal Working Fluid</Link>
                    <Link href="/generalpurpose" className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-green-600 hover:text-white transition">General Purpose Oil</Link>
                    <Link href="/flushingoil" className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-green-600 hover:text-white transition">Flushing Oil</Link>
                    <Link href="/concreteoil" className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-green-600 hover:text-white transition">Concrete Mould Release</Link>
                    <Link href="/diesel-exhaust-fluid" className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-green-600 hover:text-white transition">Diesel Exhaust Fluid</Link>
                  </div>
                </div>

                <div className="relative group/sub">
                  <Link href="/4t-motorcycle-oil" className="flex justify-between items-center px-4 py-3 hover:bg-green-600 hover:text-white transition font-medium group/link">
                    Motorcycle Oils & Outboard Oils <i className="fas fa-chevron-right text-xs ml-2 text-gray-400 group-hover/link:text-white"></i>
                  </Link>
                  <div className="absolute left-[calc(100%+6px)] top-0 w-60 bg-white shadow-xl rounded-md border border-gray-100 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform translate-x-2 group-hover/sub:translate-x-0 py-2">
                    <Link href="/4t-motorcycle-oil" className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-green-600 hover:text-white transition">4-T Motor Cycle Oil</Link>
                    <Link href="/outboard" className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-green-600 hover:text-white transition">Outboard</Link>
                  </div>
                </div>

                <div className="relative group/sub">
                  <Link href="/universal-tractor-transmission-oil" className="flex justify-between items-center px-4 py-3 hover:bg-green-600 hover:text-white transition font-medium group/link">
                    Agricultural & Off Highway Lubricants <i className="fas fa-chevron-right text-xs ml-2 text-gray-400 group-hover/link:text-white"></i>
                  </Link>
                  <div className="absolute left-[calc(100%+6px)] top-0 w-60 bg-white shadow-xl rounded-md border border-gray-100 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform translate-x-2 group-hover/sub:translate-x-0 py-2">
                    <Link href="/universal-tractor-transmission-oil" className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-green-600 hover:text-white transition">Universal Tractor Transmission Oil</Link>
                    <Link href="/super-tractor-oil-universal" className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-green-600 hover:text-white transition">Super Tractor Transmission Oil</Link>
                    <Link href="/transmission-and-drive-train-oil" className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-green-600 hover:text-white transition">Transmission & Drive Train Oil</Link>
                  </div>
                </div>

                <div className="relative group/sub">
                  <Link href="/knitting-oil" className="flex justify-between items-center px-4 py-3 hover:bg-green-600 hover:text-white transition font-medium group/link">
                    Textile Oil <i className="fas fa-chevron-right text-xs ml-2 text-gray-400 group-hover/link:text-white"></i>
                  </Link>
                  <div className="absolute left-[calc(100%+6px)] top-0 w-60 bg-white shadow-xl rounded-md border border-gray-100 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform translate-x-2 group-hover/sub:translate-x-0 py-2">
                    <Link href="/knitting-oil" className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-green-600 hover:text-white transition">Knitting Oil</Link>
                    <Link href="/sewing-oil" className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-green-600 hover:text-white transition">Sewing Oil</Link>
                    <Link href="/spindle-oil" className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-green-600 hover:text-white transition">Spindle Oil</Link>
                    <Link href="/machine-oil" className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-green-600 hover:text-white transition">Machine Oil</Link>
                  </div>
                </div>

                <div className="relative group/sub">
                  <Link href="/rock-drill-oil" className="flex justify-between items-center px-4 py-3 hover:bg-green-600 hover:text-white transition font-medium group/link">
                    Mining Oil <i className="fas fa-chevron-right text-xs ml-2 text-gray-400 group-hover/link:text-white"></i>
                  </Link>
                  <div className="absolute left-[calc(100%+6px)] top-0 w-60 bg-white shadow-xl rounded-md border border-gray-100 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform translate-x-2 group-hover/sub:translate-x-0 py-2">
                    <Link href="/rock-drill-oil" className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-green-600 hover:text-white transition">Rock Drill Oil</Link>
                    <Link href="/air-compressor-oil" className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-green-600 hover:text-white transition">Air Compressor Oil</Link>
                    <Link href="/hydraulic-oil-hvi" className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-green-600 hover:text-white transition">Hydraulic Oil HVI</Link>
                  </div>
                </div>

                <div className="relative group/sub">
                  <Link href="/trunk-piston-marine-oil" className="flex justify-between items-center px-4 py-3 hover:bg-green-600 hover:text-white transition font-medium group/link">
                    Marine Oil <i className="fas fa-chevron-right text-xs ml-2 text-gray-400 group-hover/link:text-white"></i>
                  </Link>
                  <div className="absolute left-[calc(100%+6px)] top-0 w-60 bg-white shadow-xl rounded-md border border-gray-100 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform translate-x-2 group-hover/sub:translate-x-0 py-2">
                    <Link href="/trunk-piston-marine-oil" className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-green-600 hover:text-white transition">Trunk Piston Marine Oil</Link>
                    <Link href="/system-oil" className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-green-600 hover:text-white transition">System Oil</Link>
                    <Link href="/marine-cylinder-oil" className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-green-600 hover:text-white transition">Marine Cylinder Oil</Link>
                  </div>
                </div>

                <div className="relative group/sub">
                  <Link href="/trunk-piston-marine-oil" className="flex justify-between items-center px-4 py-3 hover:bg-green-600 hover:text-white transition font-medium group/link">
                    Grease <i className="fas fa-chevron-right text-xs ml-2 text-gray-400 group-hover/link:text-white"></i>
                  </Link>
                  <div className="absolute left-[calc(100%+6px)] top-0 w-60 bg-white shadow-xl rounded-md border border-gray-100 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform translate-x-2 group-hover/sub:translate-x-0 py-2">
                    <Link href="/automotivegreases" className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-green-600 hover:text-white transition">Automotive Greases</Link>
                  </div>
                </div>

              </div>
            </div>

            <div className="relative group">
              <Link href="/transformeroil" className="inline-flex items-center gap-1 font-medium hover:text-green-600 transition py-3">
                Speciality Products
                <i className="fas fa-chevron-down text-[10px] transition-transform duration-200 group-hover:rotate-180"></i>
              </Link>
              <div className="absolute left-0 top-full w-52 bg-white shadow-xl rounded-md border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 py-2 z-50">
                <Link href="/transformeroil" className="flex justify-between items-center px-4 py-3 hover:bg-green-600 hover:text-white transition font-medium">Transformer Oil</Link>
                <Link href="/whiteoil" className="flex justify-between items-center px-4 py-3 hover:bg-green-600 hover:text-white transition font-medium">White Oil Technical</Link>
                <Link href="/whiteoilpharma" className="flex justify-between items-center px-4 py-3 hover:bg-green-600 hover:text-white transition font-medium">White Oil Pharma</Link>
                <Link href="/petroleumjelly" className="flex justify-between items-center px-4 py-3 hover:bg-green-600 hover:text-white transition font-medium">Petroleum Jelly</Link>
                <Link href="/baseoil" className="flex justify-between items-center px-4 py-3 hover:bg-green-600 hover:text-white transition font-medium">Base Oil</Link>
              </div>
            </div>

            <div className="relative group">
              <Link href="/carcare-category" className="inline-flex items-center gap-1 font-medium hover:text-green-600 transition py-3">
                Car Care Products
                <i className="fas fa-chevron-down text-[10px] transition-transform duration-200 group-hover:rotate-180"></i>
              </Link>
              <div className="absolute left-0 top-full w-52 bg-white shadow-xl rounded-md border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 py-2 z-50">
                <Link href="/sbk-penetrax" className="flex justify-between items-center px-4 py-3 hover:bg-green-600 hover:text-white transition font-medium">SBK PenetraX</Link>
                <Link href="/sbk-carbclean" className="flex justify-between items-center px-4 py-3 hover:bg-green-600 hover:text-white transition font-medium">SBK CarbClean Pro</Link>
                <Link href="/sbk-breakclean" className="flex justify-between items-center px-4 py-3 hover:bg-green-600 hover:text-white transition font-medium">SBK BrakeClean Pro</Link>
                <Link href="/sbk-degrease" className="flex justify-between items-center px-4 py-3 hover:bg-green-600 hover:text-white transition font-medium">SBK Degrease Pro</Link>
                <Link href="/sbk-chainlube" className="flex justify-between items-center px-4 py-3 hover:bg-green-600 hover:text-white transition font-medium">SBK Chain Lube Pro</Link>
              </div>
            </div>

            <a href="#Blogs" className="font-medium hover:text-green-600 transition">Blogs</a>
            <Link
              href="/contact"
              className={`font-medium hover:text-green-600 transition ${isActive('/contact') ? ' text-green-600 underline decoration-red-600 decoration-2' : ''}`}
            >
              Contact
            </Link>
            <a href="#" className="bg-brand-blue text-white px-6 py-2.5 rounded-full font-medium hover:bg-green-600 transition-all shadow-lg hover:shadow-xl">
              Get a Quote
            </a>
          </div>

          <button id="mobile-menu-btn" className="md:hidden text-brand-blue text-2xl focus:outline-none">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {/* Mobile Main Menu container — kept id-based, driven by useEffect in page.jsx (same logic as original PHP inline <script>) */}
        <div id="mobile-menu" className="hidden md:hidden bg-white border-t border-gray-100 p-4 absolute w-full shadow-lg z-50">
          <div className="flex flex-col space-y-3">
            <Link href="/" className="inline-block w-fit text-green-600 font-medium underline decoration-red-600 decoration-2 underline-offset-4 py-1">Home</Link>

            <div>
              <button data-toggle="mobile-about-menu" className="mobile-l3-trigger w-full flex justify-between items-center text-slate-600 text-sm py-1.5 font-medium focus:outline-none">
                <span>About Us</span>
                <i className="fas fa-chevron-down text-[10px] transition-transform duration-200"></i>
              </button>
              <div id="mobile-about-menu" className="mobile-l3-container hidden pl-3 mt-1 space-y-1 text-xs text-slate-500">
                <Link href="/our-team" className="block py-1.5 px-2 hover:bg-green-600 hover:text-white rounded transition">Our Team</Link>
                <a href="#certifications" className="block py-1.5 px-2 hover:bg-green-600 hover:text-white rounded transition">Certifications</a>
              </div>
            </div>

            <div>
              <button data-toggle-l2="mobile-products-menu" className="w-full flex justify-between items-center text-gray-700 font-medium hover:text-green-600 py-1 focus:outline-none">
                <span>Products</span>
                <i className="fas fa-chevron-down text-xs transition-transform duration-200"></i>
              </button>

              <div id="mobile-products-menu" className="hidden pl-4 mt-2 space-y-2 border-l-2 border-slate-100">
                <div>
                  <button data-toggle="mobile-automotive-menu" className="mobile-l3-trigger w-full flex justify-between items-center text-slate-600 text-sm py-1.5 font-medium focus:outline-none">
                    <span>Automotive Oil</span>
                    <i className="fas fa-chevron-down text-[10px] transition-transform duration-200"></i>
                  </button>
                  <div id="mobile-automotive-menu" className="mobile-l3-container hidden pl-3 mt-1 space-y-1 text-xs text-slate-500">
                    <Link href="/petrol-engine-pmco" className="block py-1.5 hover:bg-green-600 hover:text-white">Petrol Engine PCMO</Link>
                    <Link href="/diesel-engine-hddo" className="block py-1.5 hover:bg-green-600 hover:text-white">Diesel Engine HDDO</Link>
                    <Link href="/gear-oil" className="block py-1.5 hover:bg-green-600 hover:text-white">Gear Oil</Link>
                    <Link href="/transmission-fluids" className="block py-1.5 hover:bg-green-600 hover:text-white">Transmission Fluids</Link>
                    <Link href="/coolants" className="block py-1.5 hover:bg-green-600 hover:text-white">Coolants</Link>
                    <Link href="/brakefluids" className="block py-1.5 hover:bg-green-600 hover:text-white">Brake Fluids</Link>
                  </div>
                </div>

                <div>
                  <button data-toggle="mobile-industrial-menu" className="mobile-l3-trigger w-full flex justify-between items-center text-slate-600 text-sm py-1.5 font-medium focus:outline-none">
                    <span>Industrial Lubricants</span>
                    <i className="fas fa-chevron-down text-[10px] transition-transform duration-200"></i>
                  </button>
                  <div id="mobile-industrial-menu" className="mobile-l3-container hidden pl-3 mt-1 space-y-1 text-xs text-slate-500">
                    <Link href="/hydraulic-oil" className="block py-1.5 hover:bg-green-600 hover:text-white">Hydraulic Oil</Link>
                    <Link href="/turbineoil" className="block py-1.5 hover:bg-green-600 hover:text-white">Turbine Oil</Link>
                    <Link href="/compressoroil" className="block py-1.5 hover:bg-green-600 hover:text-white">Compressor Oil</Link>
                    <Link href="/industrialgear" className="block py-1.5 hover:bg-green-600 hover:text-white">Industrial Gear Oil</Link>
                    <Link href="/cuttingoil" className="block py-1.5 hover:bg-green-600 hover:text-white">Metal Working Fluid</Link>
                    <Link href="/generalpurpose" className="block py-1.5 hover:bg-green-600 hover:text-white">General Purpose Oil</Link>
                    <Link href="/flushingoil" className="block py-1.5 hover:bg-green-600 hover:text-white">Flushing Oil</Link>
                    <Link href="/concreteoil" className="block py-1.5 hover:bg-green-600 hover:text-white">Concrete Mould Release</Link>
                    <Link href="/diesel-exhaust-fluid" className="block py-1.5 hover:bg-green-600 hover:text-white">Diesel Exhaust Fluid</Link>
                  </div>
                </div>

                <div>
                  <button data-toggle="mobile-motorcycle-menu" className="mobile-l3-trigger w-full flex justify-between items-center text-slate-600 text-sm py-1.5 font-medium focus:outline-none">
                    <span>Motorcycle Oil & Outboard Oils</span>
                    <i className="fas fa-chevron-down text-[10px] transition-transform duration-200"></i>
                  </button>
                  <div id="mobile-motorcycle-menu" className="mobile-l3-container hidden pl-3 mt-1 space-y-1 text-xs text-slate-500">
                    <Link href="/4t-motorcycle-oil" className="block py-1.5 hover:bg-green-600 hover:text-white">4-T Motor Cycle Oil</Link>
                    <Link href="/outboard" className="block py-1.5 hover:bg-green-600 hover:text-white">Outboard</Link>
                  </div>
                </div>

                <div>
                  <button data-toggle="mobile-agricultural-menu" className="mobile-l3-trigger w-full flex justify-between items-center text-slate-600 text-sm py-1.5 font-medium focus:outline-none">
                    <span>Agricultural and Off-Highway Lubricants</span>
                    <i className="fas fa-chevron-down text-[10px] transition-transform duration-200"></i>
                  </button>
                  <div id="mobile-agricultural-menu" className="mobile-l3-container hidden pl-3 mt-1 space-y-1 text-xs text-slate-500">
                    <Link href="/universal-tractor-transmission-oil" className="block py-1.5 hover:bg-green-600 hover:text-white">Universal Tractor Transmission Oil</Link>
                    <Link href="/super-tractor-oil-universal" className="block py-1.5 hover:bg-green-600 hover:text-white">Super Tractor Oil Universal</Link>
                    <Link href="/transmission-and-drive-train-oil" className="block py-1.5 hover:bg-green-600 hover:text-white">Transmission and Drive Train Oil</Link>
                  </div>
                </div>

                <div>
                  <button data-toggle="mobile-textile-menu" className="mobile-l3-trigger w-full flex justify-between items-center text-slate-600 text-sm py-1.5 font-medium focus:outline-none">
                    <span>Textile Oil</span>
                    <i className="fas fa-chevron-down text-[10px] transition-transform duration-200"></i>
                  </button>
                  <div id="mobile-textile-menu" className="mobile-l3-container hidden pl-3 mt-1 space-y-1 text-xs text-slate-500">
                    <Link href="/knitting-oil" className="block py-1.5 hover:bg-green-600 hover:text-white">Knitting Oil</Link>
                    <Link href="/sewing-oil" className="block py-1.5 hover:bg-green-600 hover:text-white">Sewing Oil</Link>
                    <Link href="/spindle-oil" className="block py-1.5 hover:bg-green-600 hover:text-white">Spindle Oil</Link>
                    <Link href="/machine-oil" className="block py-1.5 hover:bg-green-600 hover:text-white">Machine Oil</Link>
                  </div>
                </div>

                <div>
                  <button data-toggle="mobile-mining-menu" className="mobile-l3-trigger w-full flex justify-between items-center text-slate-600 text-sm py-1.5 font-medium focus:outline-none">
                    <span>Mining Oil</span>
                    <i className="fas fa-chevron-down text-[10px] transition-transform duration-200"></i>
                  </button>
                  <div id="mobile-mining-menu" className="mobile-l3-container hidden pl-3 mt-1 space-y-1 text-xs text-slate-500">
                    <Link href="/rock-drill-oil" className="block py-1.5 hover:bg-green-600 hover:text-white">Rock Drill Oil</Link>
                    <Link href="/air-compressor-oil" className="block py-1.5 hover:bg-green-600 hover:text-white">Air Compressor Oil</Link>
                    <Link href="/hydraulic-oil-hvi" className="block py-1.5 hover:bg-green-600 hover:text-white">Hydraulic Oil HVI</Link>
                  </div>
                </div>

                <div>
                  <button data-toggle="mobile-marine-menu" className="mobile-l3-trigger w-full flex justify-between items-center text-slate-600 text-sm py-1.5 font-medium focus:outline-none">
                    <span>Marine Oil</span>
                    <i className="fas fa-chevron-down text-[10px] transition-transform duration-200"></i>
                  </button>
                  <div id="mobile-marine-menu" className="mobile-l3-container hidden pl-3 mt-1 space-y-1 text-xs text-slate-500">
                    <Link href="/trunk-piston-marine-oil" className="block py-1.5 hover:bg-green-600 hover:text-white">Trunk Piston Marine Oil</Link>
                    <Link href="/system-oil" className="block py-1.5 hover:bg-green-600 hover:text-white">System Oil</Link>
                    <Link href="/marine-cylinder-oil" className="block py-1.5 hover:bg-green-600 hover:text-white">Marine Cylinder Oil</Link>
                  </div>
                </div>

                <div>
                  <button data-toggle="mobile-grease-menu" className="mobile-l3-trigger w-full flex justify-between items-center text-slate-600 text-sm py-1.5 font-medium focus:outline-none">
                    <span> Grease</span>
                    <i className="fas fa-chevron-down text-[10px] transition-transform duration-200"></i>
                  </button>
                  <div id="mobile-grease-menu" className="mobile-l3-container hidden pl-3 mt-1 space-y-1 text-xs text-slate-500">
                    <Link href="/automotivegreases" className="block py-1.5 hover:bg-green-600 hover:text-white">Automotive Greases</Link>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button data-toggle="mobile-speciality-menu" className="mobile-l3-trigger w-full flex justify-between items-center text-gray-700 text-base py-1 font-medium focus:outline-none hover:text-green-600">
                <span>Speciality Products</span>
                <i className="fas fa-chevron-down text-[10px] transition-transform duration-200"></i>
              </button>
              <div id="mobile-speciality-menu" className="mobile-l3-container hidden pl-3 mt-1 space-y-1 text-xs text-slate-500">
                <Link href="/transformeroil" className="block py-1.5 px-2 hover:bg-green-600 hover:text-white rounded transition">Transformer Oil</Link>
                <Link href="/whiteoil" className="block py-1.5 px-2 hover:bg-green-600 hover:text-white rounded transition">White Oil Technical</Link>
                <Link href="/whiteoilpharma" className="block py-1.5 px-2 hover:bg-green-600 hover:text-white rounded transition">White Oil Pharma</Link>
                <Link href="/petroleumjelly" className="block py-1.5 px-2 hover:bg-green-600 hover:text-white rounded transition">Petroleum Jelly</Link>
                <Link href="/baseoil" className="block py-1.5 px-2 hover:bg-green-600 hover:text-white rounded transition">Base Oil</Link>
              </div>
            </div>

            <div>
              <button data-toggle="mobile-car-menu" className="mobile-l3-trigger w-full flex justify-between items-center text-gray-700 text-base py-1 font-medium focus:outline-none hover:text-green-600">
                <span>Car Care Products</span>
                <i className="fas fa-chevron-down text-[10px] transition-transform duration-200"></i>
              </button>
              <div id="mobile-car-menu" className="mobile-l3-container hidden pl-3 mt-1 space-y-1 text-xs text-slate-500">
                <Link href="/sbk-penetrax" className="block py-1.5 px-2 hover:bg-green-600 hover:text-white rounded transition">SBK PenetraX</Link>
                <Link href="/sbk-carbclean" className="block py-1.5 px-2 hover:bg-green-600 hover:text-white rounded transition">SBK CarbClean Pro</Link>
                <Link href="/sbk-breakclean" className="block py-1.5 px-2 hover:bg-green-600 hover:text-white rounded transition">SBK BrakeClean Pro</Link>
                <Link href="/sbk-degrease" className="block py-1.5 px-2 hover:bg-green-600 hover:text-white rounded transition">SBK Degrease Pro</Link>
                <Link href="/sbk-chainlube" className="block py-1.5 px-2 hover:bg-green-600 hover:text-white rounded transition">SBK Chain Lube Pro</Link>
              </div>
            </div>

            <a href="#blogs" className="block text-gray-700 font-medium hover:text-green-600 py-1">Blogs</a>
            <Link href="/contact" className="block text-gray-700 font-medium hover:text-green-600 py-1">Contact</Link>
            <a href="#" className="bg-brand-blue text-white px-6 py-2.5 rounded font-medium text-center block shadow-md hover:bg-green-600 transition">Get Quote</a>
          </div>
        </div>
      </nav>
    </>
  );
}
