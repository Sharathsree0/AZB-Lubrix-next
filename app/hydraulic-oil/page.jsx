'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';

// href present -> real product-detail page (Link). href omitted -> "Specifications Coming Soon" modal.
const products = [
  {
    image: '/productimage/5Lsbkpesadohydraulicoilaw.png',
    badgeCategory: 'Anti-Wear (AW) Series',
    name: 'SBK PESADO Hydraulic Oil AW',
    description: 'Premium high-performance hydraulic fluid featuring advanced anti-wear additives to provide superior protection against wear and corrosion in high-pressure industrial systems.',
    href: '/sbk-pesado-hydraulic-oil-aw',
  },
  {
    image: '/img/Drum-Red-(2).png',
    badgeCategory: '',
    name: 'SBK PESADO Hydraulic Oil WW',
    description: 'Shear-stable, high-viscosity index oil engineered for equipment operating under wide temperature fluctuations, ensuring consistent performance and fluidity in extreme environments.',
    href: null,
  },
];

function ProductCard({ product, onLocked }) {
  const inner = (
    <>
      <div className="relative bg-gradient-to-b from-gray-50 to-slate-100 p-6 flex justify-center items-center h-56 shrink-0">
        <span className="absolute top-3 left-3 bg-slate-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow">Industrial</span>
        <img
          src={product.image}
          alt={product.name}
          className="h-44 object-contain group-hover:scale-105 transition duration-300 drop-shadow-md"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-1 block">{product.badgeCategory}</span>
        <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-green-600 transition tracking-tight mb-2 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 flex-grow">
          {product.description}
        </p>
        <div className="border-t border-gray-100 pt-4 mt-auto">
          <div className="w-full py-2 bg-slate-800 group-hover:bg-green-600 text-white text-xs font-bold rounded-lg transition-colors flex justify-center items-center gap-1.5 shadow-sm">
            Specifications <i className="fas fa-arrow-right text-[10px]"></i>
          </div>
        </div>
      </div>
    </>
  );

  const className = 'group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full text-left';

  if (product.href) {
    return (
      <Link href={product.href} className={className}>
        {inner}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onLocked} className={className}>
      {inner}
    </button>
  );
}

export default function HydraulicOilPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      const t = setTimeout(() => setModalVisible(true), 10);
      return () => clearTimeout(t);
    }
  }, [modalOpen]);

  function openNoticeModal() {
    setModalOpen(true);
  }

  function closeNoticeModal() {
    setModalVisible(false);
    setTimeout(() => setModalOpen(false), 300);
  }

  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-16 md:py-18 overflow-hidden w-full"
        style={{ backgroundImage: "url('/productbanner/industrial.jpg')" }}
      >
        <div className="absolute inset-0"></div>
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-green-600 rounded-full blur-3xl opacity-20 z-0"></div>
        <div className="absolute left-10 top-10 w-40 h-40 bg-red-600 rounded-full blur-3xl opacity-10 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <nav className="hidden md:flex items-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-200 mb-6 space-x-2">
              <Link href="/" className="hover:text-green-500 transition">Home</Link>
              <span>/</span>
              <a href="#" className="hover:text-green-500 transition">Industrial Lubricants</a>
              <span>/</span>
              <span className="text-green-400">Hydraulic Oil</span>
            </nav>

            <span className="hidden md:inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4 shadow-lg">
              High Performance Industrial Solutions
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-md">
              Hydraulic <span className="text-green-400">Oil</span>
            </h1>
            <p className="hidden md:block text-gray-100 text-base md:text-lg leading-relaxed drop-shadow-sm">
              Discover our comprehensive range of specialized hydraulic oils. Engineered for peak performance, our fluids maximize equipment uptime, ensure superior anti-wear protection, and maintain optimal thermal stability under the most demanding system pressures.
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
                    Hydraulic Oil
                  </h2>
                  <p className="text-sm text-gray-500 mt-2 font-medium">
                    Showing premium high-performance engine lubricants from your selection.
                  </p>
                </div>
                <div className="text-xs font-medium text-slate-500 bg-white border border-gray-200 rounded-md px-3 py-1.5 shadow-sm">
                  Total Items: <span className="text-green-600 font-bold">{products.length}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.name} product={product} onLocked={openNoticeModal} />
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4 transition-opacity duration-300 ${modalVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className={`bg-white rounded-2xl p-6 max-w-xs w-full shadow-2xl border border-gray-100 text-center transform transition-transform duration-300 ${modalVisible ? 'scale-100' : 'scale-95'}`}>
            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
              <i className="fas fa-info-circle"></i>
            </div>
            <h3 className="text-slate-800 text-base font-extrabold mb-1">Specifications Coming Soon</h3>
            <p className="text-gray-500 text-xs leading-relaxed mb-5">We&apos;re currently updating our product sheet. Complete specifications for this product will be available shortly.</p>
            <button
              onClick={closeNoticeModal}
              className="w-full py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
}