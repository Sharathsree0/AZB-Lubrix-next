import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'
import SiteScripts from '@/components/SiteScripts';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'AZB ENERGY FZC | Premium Lubricants & Industrial Solutions',
  description: 'AZB ENERGY FZC provides world-class lubricant solutions for automotive, industrial, and marine applications.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Playfair+Display:ital,wght@0,700;0,800;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="bg-white text-slate-700 antialiased">
        <Navbar />

        {children}

        {/* Global Corporate Footer — was duplicated in every .php file, now lives once in layout */}
        <Footer />
        <button id="back-to-top" className="back-to-top rounded-full shadow-xl hover:bg-brand-blue hover:text-white transition" aria-label="Back to top">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 19V5"></path>
            <path d="M5 12l7-7 7 7"></path>
          </svg>
        </button>

        <a
          href="https://wa.me/+971569966391"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-20 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full shadow-xl transition-transform hover:scale-110 active:scale-95"
          aria-label="Contact us on WhatsApp"
        >
          <Image src="/img/whatsapp1.jpeg" alt="WhatsApp" width={51} height={51} className="w-full h-full object-cover rounded-full" />
        </a>

        <SiteScripts />
      </body>
    </html>
  );
}
