'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const categories = [
  {
    label: 'AUTOMOTIVE OILS',
    links: [
      { href: '/products/Automotive-oil/petrol-engine-pmco', text: 'Petrol Engine PCMO' },
      { href: '/products/Automotive-oil/diesel-engine-hddo', text: 'Diesel Engine HDDO' },
      { href: '/products/Automotive-oil/gear-oil', text: 'Gear Oil' },
      { href: '/products/Automotive-oil/transmission-fluids', text: 'Transmission Fluids' },
      { href: '/products/Automotive-oil/coolants', text: 'Coolants' },
      { href: '/products/Automotive-oil/brakefluids', text: 'Brake Fluids' },
    ],
  },
  {
    label: 'INDUSTRIAL LUBRICANTS',
    links: [
      { href: '/products/Industrial-Lubricants/hydraulic-oil', text: 'Hydraulic Oil' },
      { href: '/products/Industrial-Lubricants/turbineoil', text: 'Turbine Oil' },
      { href: '/products/Industrial-Lubricants/compressoroil', text: 'Compressor Oil' },
      { href: '/products/Industrial-Lubricants/industrialgear', text: 'Industrial Gear Oil' },
      { href: '/products/cuttingoil', text: 'Metal Working Fluid' },
      { href: '/products/Industrial-Lubricants/generalpurpose', text: 'General Purpose Oil' },
      { href: '/products/Industrial-Lubricants/heat-transfer-fluid', text: 'Heat Transfer Fluid' },
      { href: '/products/Industrial-Lubricants/flushingoil', text: 'Flushing Oil' },
      { href: '/products/Industrial-Lubricants/concreteoil', text: 'Concrete Mould Release' },
      // { href: '/products/Industrial-Lubricants/diesel-exhaust-fluid', text: 'Diesel Exhaust Fluid' },
    ],
  },
  {
    label: 'MOTORCYCLE OILS & OUTBOARD',
    links: [
      { href: '/products/Motorcycle-oils-&-Outboard-oils/4t-motorcycle-oil', text: '4-T Motor Cycle Oil' },
      { href: '/products/Motorcycle-oils-&-Outboard-oils/outboard', text: 'Outboard' },
    ],
  },
  {
    label: 'AGRICULTURAL & OFF-HIGHWAY',
    links: [
      { href: '/products/Agricultural-&-off-Highway-Lubrucants/universal-tractor-transmission-oil', text: 'Universal Tractor Transmission Oil' },
      { href: '/products/Agricultural-&-off-Highway-Lubrucants/super-tractor-oil-universal', text: 'Super Tractor Oil Universal' },
      { href: '/products/Agricultural-&-off-Highway-Lubrucants/transmission-and-drive-train-oil', text: 'Transmission & Drive Train Oil' },
    ],
  },
  {
    label: 'TEXTILE OIL',
    links: [
      { href: '/products/Textile-oil/knitting-oil', text: 'Knitting Oil' },
      { href: '/products/Textile-oil/sewing-oil', text: 'Sewing Oil' },
      { href: '/products/Textile-oil/spindle-oil', text: 'Spindle Oil' },
      { href: '/products/Textile-oil/machine-oil', text: 'Machine Oil' },
    ],
  },
  {
    label: 'MINING OIL',
    links: [
      { href: '/products/Mining-oil/rock-drill-oil', text: 'Rock Drill Oil' },
      { href: '/products/Mining-oil/air-compressor-oil', text: 'Air Compressor Oil' },
      { href: '/products/Mining-oil/hydraulic-oil-hvi', text: 'Hydraulic Oil HVI' },
    ],
  },
  {
    label: 'MARINE OIL',
    links: [
      { href: '/products/Marine-oil/trunk-piston-marine-oil', text: 'Trunk Piston Marine Oil' },
      { href: '/products/Marine-oil/system-oil', text: 'System Oil' },
      { href: '/products/Marine-oil/marine-cylinder-oil', text: 'Marine Cylinder Oil' },
    ],
  },
  {
    label: 'GREASE',
    links: [
      { href: '/products/Grease/automotive-greases', text: 'Automotive Greases' }
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  // Accordion open/close click behavior
  useEffect(() => {
    const buttons = document.querySelectorAll('.accordion-toggle');
    function handleToggle(e) {
      const button = e.currentTarget;
      const accordion = button.closest('.category-accordion');
      const content = accordion.querySelector('.accordion-content');
      const icon = button.querySelector('i');
      const isHidden = content.classList.contains('hidden');
      content.classList.toggle('hidden');
      if (icon) {
        icon.classList.toggle('fa-chevron-right', !isHidden);
        icon.classList.toggle('fa-chevron-down', isHidden);
      }
    }
    buttons.forEach((btn) => btn.addEventListener('click', handleToggle));
    return () => buttons.forEach((btn) => btn.removeEventListener('click', handleToggle));
  }, []);

  return (
    <aside className="hidden lg:flex lg:col-span-1 bg-white rounded-xl shadow-md border border-gray-100 p-5 lg:sticky lg:top-24 flex-col max-h-[calc(100vh-120px)]">
      <h2 className="text-lg font-bold text-slate-800 border-b border-gray-100 pb-3 mb-4 flex items-center gap-2 flex-shrink-0">
        <i className="fas fa-layer-group text-green-600"></i> Categories
      </h2>

      <div className="space-y-2 overflow-y-auto pr-2 custom-scrollbar flex-grow" id="sidebar-accordion">
        {categories.map((cat) => {
          const isActiveCategory = cat.links.some((l) => pathname?.startsWith(l.href));
          return (
            <div
              key={cat.label}
              className={`category-accordion border border-gray-100 rounded-lg overflow-hidden ${isActiveCategory ? 'active' : ''}`}
            >
              <button
                type="button"
                className={
                  isActiveCategory
                    ? 'accordion-toggle w-full flex justify-between items-center bg-green-50 text-green-700 px-4 py-3 font-bold text-sm text-left transition-all cursor-default'
                    : 'accordion-toggle w-full flex justify-between items-center text-slate-700 hover:bg-gray-50 px-4 py-3 font-semibold text-sm text-left transition-all'
                }
              >
                <span>{cat.label}</span>
                <i className={isActiveCategory ? 'fas fa-chevron-down text-xs text-green-700' : 'fas fa-chevron-right text-xs text-gray-400 transition-transform duration-200'}></i>
              </button>
              <div className={`accordion-content bg-white border-t border-gray-50 px-2 py-2 space-y-1 ${isActiveCategory ? '' : 'hidden'}`}>
                {cat.links.map((link) => {
                  const isActiveLink = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={
                        isActiveLink
                          ? 'sidebar-link flex items-center block text-xs font-bold text-red-600 bg-red-50/50 px-3 py-2 rounded transition'
                          : 'sidebar-link block text-xs font-medium text-slate-600 hover:text-green-600 hover:bg-gray-50 px-3 py-2 rounded transition'
                      }
                    >
                      {isActiveLink && <i className="fas fa-caret-right mr-1.5"></i>}
                      {link.text}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}