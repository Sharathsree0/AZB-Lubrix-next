'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Image src="/logo4.png" alt="AZB ENERGY FZC logo" width={140} height={40} />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A leading manufacturer and supplier of high-quality lubricants and greases, serving the automotive, industrial, and marine sectors worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-gold transition"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-brand-gold transition">Home</Link></li>
              <li><a href="#about" className="hover:text-brand-gold transition">About Us</a></li>
              <li><a href="#products" className="hover:text-brand-gold transition">Products</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition">Services</a></li>
              <li><a href="#contact" className="hover:text-brand-gold transition">Contact</a></li>
              <li><a href="#" className="hover:text-brand-gold transition">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Our Products</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-gold transition">Automotive Oils</a></li>
              <li><a href="#" className="hover:text-brand-gold transition">Industrial Lubricants</a></li>
              <li><a href="#" className="hover:text-brand-gold transition">Marine Oils</a></li>
              <li><a href="#" className="hover:text-brand-gold transition">Metalworking Fluids</a></li>
              <li><a href="#" className="hover:text-brand-gold transition">Greases</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to get the latest news and product updates.</p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" className="bg-white/10 border border-white/20 px-4 py-3 rounded text-white focus:outline-none focus:border-brand-gold" />
              <button className="bg-[#1FA463] text-brand-blue font-bold px-4 py-3 rounded hover:bg-white transition">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2026 AZB ENERGY FZC. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <span><i className="fas fa-globe mr-2"></i>English (US)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}