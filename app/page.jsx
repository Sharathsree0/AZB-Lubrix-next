'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const slides = [
  { img: '/banner/ban1auto3172026.jpeg' },
  { img: '/banner/banhydraulic3172026.jpeg' },
  { img: '/banner/ban44t3172026.jpeg' },
  { img: '/banner/banmetal3172026.jpeg' },
];

const products = [
  { href: '/petrol-engine-pmco', title: 'Automotive', img: '/portfolio/automot_1254x800.jpg', alt: 'SBK Opal heavy duty diesel oil' },
  { href: '/hydraulic-oil', title: 'Industrial Lubricants', img: '/portfolio/indt.jpeg', alt: 'SBK Opal heavy duty diesel oil' },
  { href: '/4t-motorcycle-oil', title: 'Motorcycle Oil & Outboard Oils', img: '/portfolio/motc_1000x800.jpg', alt: 'SBK marine trunk piston oil product' },
  { href: '/universal-tractor-transmission-oil', title: 'Agricultural & Off-Highway Lubricants', img: '/portfolio/agr_1000x800.jpg', alt: 'SBK specialty lubricant pail' },
  { href: '/knitting-oil', title: 'Textile Oils', img: '/portfolio/TEXTILEOIL.png', alt: 'SBK heavy duty grease cartridge' },
  { href: '/rock-drill-oil', title: 'Mining Oils', img: '/portfolio/MINNING.png', alt: 'SBK 4T motorcycle fluid pack' },
  { href: '/trunk-piston-marine-oil', title: 'Marine Oils', img: '/portfolio/marineoil.png', alt: 'SBK transformer and process oil pack' },
  { href: '/transformeroil', title: 'Transformer Oils', img: '/portfolio/transformeroil.png', alt: 'SBK transformer and process oil pack' },
  { href: '/petroleumjelly', title: 'White Oil & Petroleum Jelly', img: '/portfolio/whiteoil.png', alt: 'SBK transformer and process oil pack' },
  { href: '/carcare-category', title: 'Car Care Products', img: '/portfolio/carcareproducts.png', alt: 'SBK premium additive and car care range pack' },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);

  // Ported from "4. HERO BANNER AUTOPLAY SLIDER" in index.php
  useEffect(() => {
    const intervalTime = 5000;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, intervalTime);
    return () => clearInterval(timer);
  }, [currentSlide]);

  // Touch swipe support (ported)
  useEffect(() => {
    const container = document.querySelector('.slider-container');
    if (!container) return;
    let touchStartX = 0;
    let touchEndX = 0;
    const threshold = 50;

    function onTouchStart(e) {
      touchStartX = e.changedTouches[0].screenX;
    }
    function onTouchEnd(e) {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > threshold) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      } else if (touchEndX - touchStartX > threshold) {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      }
    }
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  function goToSlide(i) {
    setCurrentSlide(i);
  }

  return (
    <>
      {/* Hero Showcase */}
      <header id="home" className="slider-container bg-brand-dark relative w-full w-full1">
        {slides.map((s, i) => (
          <div key={i} className={`slide absolute inset-0 w-full h-full flex items-center w-full1 ${i === currentSlide ? 'active' : ''}`}>
            <div className="absolute inset-0 bg-cover bg-center w-full h-full" style={{ backgroundImage: `url('${s.img}')` }}></div>
            <div className="container mx-auto px-4 relative z-10 w-full flex items-center w-full1">
              <div className="max-w-3xl w-full w-full1"></div>
            </div>
          </div>
        ))}

        <button
          onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}
          className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/20 bg-brand-dark/40 hover:bg-[#1FA463] text-white items-center justify-center transition-all focus:outline-none"
          aria-label="Previous slide"
        >
          <i className="fas fa-chevron-left text-lg"></i>
        </button>
        <button
          onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
          className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/20 bg-brand-dark/40 hover:bg-[#1FA463] text-white items-center justify-center transition-all focus:outline-none"
          aria-label="Next slide"
        >
          <i className="fas fa-chevron-right text-lg"></i>
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-3" id="slide-indicators">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-white' : 'bg-white/40'}`}
              data-slide={i}
              aria-label={`Slide ${i + 1}`}
            ></button>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t z-10 pointer-events-none"></div>
      </header>

      {/* Stats */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="scroll-animate">
              <h3 className="text-4xl font-bold text-brand-blue mb-1">15+</h3>
              <p className="text-gray-500 uppercase text-sm tracking-wider">Years Experience</p>
            </div>
            <div className="scroll-animate delay-100">
              <h3 className="text-4xl font-bold text-brand-blue mb-1">50+</h3>
              <p className="text-gray-500 uppercase text-sm tracking-wider">Countries Served</p>
            </div>
            <div className="scroll-animate delay-200">
              <h3 className="text-4xl font-bold text-brand-blue mb-1">200+</h3>
              <p className="text-gray-500 uppercase text-sm tracking-wider">Premium Products</p>
            </div>
            <div className="scroll-animate delay-300">
              <h3 className="text-4xl font-bold text-brand-blue mb-1">100%</h3>
              <p className="text-gray-500 uppercase text-sm tracking-wider">Quality Certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-brand-light overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 flex12">
            <div className="w-full lg:w-1/2 relative scroll-animate">
              <div className="relative rounded-lg shadow-xl overflow-hidden bg-white p-2 aspect-video" id="video-container">
                {!videoPlaying ? (
                  <div className="absolute inset-0 z-0 cursor-pointer group" onClick={() => setVideoPlaying(true)}>
                    <Image src="/banner/youtube.jpeg" alt="AZB Energy Video" fill className="object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all">
                      <div className="bg-red-600/90 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                        <i className="fas fa-play text-2xl ml-1"></i>
                      </div>
                    </div>
                  </div>
                ) : (
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE?autoplay=1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </div>

            <div className="w-full lg:w-1/2 scroll-animate delay-200">
              <h4 className="text-brand-gold font-bold uppercase tracking-wider mb-2">About AZB ENERGY FZC</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">Your Trusted Partner in Energy & Lubrication</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At AZB ENERGY FZC, we understand that the heart of every industry lies in its machinery. We are dedicated to keeping that heart beating stronger and longer. Our state-of-the-art lubricants are formulated using advanced additive technology and high-quality base oils.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-brand-gold mt-1 mr-3"></i>
                  <span className="text-gray-700"><strong>Advanced Formulations:</strong> Engineered to withstand extreme pressure and temperatures.</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-brand-gold mt-1 mr-3"></i>
                  <span className="text-gray-700"><strong>Global Sourcing:</strong> Premium base stocks sourced from the world&apos;s leading refineries.</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-brand-gold mt-1 mr-3"></i>
                  <span className="text-gray-700"><strong>Sustainable Solutions:</strong> Eco-friendly products designed for modern standards.</span>
                </li>
              </ul>
              <a href="#contact" className="text-brand-blue font-bold border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition hover-underline-animation">
                Learn More About Our Vision
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 px-6 lg:px-12 bg-slate-900 overflow-hidden" id="products">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 scroll-animate">
            <h2 className="font-display font-700 text-4xl lg:text-5xl text-white">SBK Lubricant Product Categories</h2>
            <p className="mt-4 font-body font-300 text-base max-w-xl mx-auto" style={{ color: 'rgba(245,245,243,0.55)' }}>
              From passenger cars to heavy industry — precision-formulated lubricants for every application.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {products.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="product-card block rounded-2xl scroll-animate group pad transition-all duration-300 ease-in-out hover:scale-[2] hover:z-50 relative"
              >
                <div className="min-h-[56px] flex items-center justify-center mb-2">
                  <h3 className="font-display font-600 text-lg text-white text-center uppercase">{p.title}</h3>
                </div>
                <div className="rounded-xl bg-transparent mb-5 flex items-center justify-center overflow-hidden relative pad1">
                  <Image src={p.img} alt={p.alt} width={400} height={320} className="w-full object-cover relative" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 scroll-animate">
            <a
              href="/catalogue.pdf"
              target="_blank"
              className="text-white px-8 py-3.5 rounded-full font-bold inline-block hover:bg-white hover:text-[#0B1C39] transition shadow-lg text-sm"
              style={{ backgroundColor: 'var(--logo-secondary)' }}
            >
              Download Full Product Catalogue →
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-brand-blue relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 scroll-animate">
            <h4 className="text-brand-gold font-bold uppercase tracking-wider mb-2">Why Choose Us</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Comprehensive Energy Solutions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:bg-white/10 transition duration-300 scroll-animate">
              <div className="w-14 h-14 bg-[#1FA463] rounded flex items-center justify-center text-brand-blue text-2xl mb-6">
                <i className="fas fa-flask"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Quality Standard</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Every batch is backed by PDS, MSDS, and retention samples, ensuring complete traceability, consistent quality, and customer confidence.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:bg-white/10 transition duration-300 scroll-animate delay-150">
              <div className="w-14 h-14 bg-[#1FA463] rounded flex items-center justify-center text-brand-blue text-2xl mb-6">
                <i className="fas fa-shipping-fast"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Global Logistics</h3>
              <p className="text-gray-300 text-sm leading-relaxed">With a strategic supply chain network, we ensure timely delivery to over 50 countries across the globe.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:bg-white/10 transition duration-300 scroll-animate delay-300">
              <div className="w-14 h-14 bg-[#1FA463] rounded flex items-center justify-center text-brand-blue text-2xl mb-6">
                <i className="fas fa-headset"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Customer Support</h3>
              <p className="text-gray-300 text-sm leading-relaxed">We provide technical documentation, including PDS and MSDS, to assist customers with product selection and application. Users should verify product compatibility and suitability for their specific equipment and operating conditions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Promo banner */}
      <section className="py-16 bg-brand-gold overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #8fa399, #529e79 0%)' }}>
        <div className="container mx-auto px-4 text-center scroll-animate">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">Ready to Upgrade Your Lubricants?</h2>
          <p className="text-brand-blue/80 max-w-2xl mx-auto mb-8 text-lg">Get in touch with our sales team for a personalized quote or to request a sample.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="bg-brand-blue text-white px-8 py-4 rounded font-bold text-lg hover:bg-brand-dark transition-all shadow-lg">
              Request a Quote
            </a>
            <a href="#" className="bg-transparent border-2 border-brand-blue text-brand-blue px-8 py-4 rounded font-bold text-lg hover:bg-brand-blue hover:text-white transition-all">
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row shadow-2xl rounded-2xl overflow-hidden scroll-animate">
            <div className="lg:w-1/3 bg-brand-blue text-white p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
                <p className="text-gray-300 mb-8">Have questions? Fill out the form and our team will get back to you within 24 hours.</p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <i className="fas fa-map-marker-alt mt-1 mr-4 text-brand-gold"></i>
                    <div>
                      <h5 className="font-bold">Headquarters</h5>
                      <p className="text-gray-300 text-sm">P5-ELOB, Office No. E-41F-11,Hamriyah Free Zone, Sharjah, U.A.E.</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <i className="fas fa-mobile-screen-button mr-4 text-brand-gold w-5 text-center"></i>
                      <div>
                        <h5 className="font-bold text-sm">Mobile</h5>
                        <a href="tel:+971569966391" className="text-gray-300 text-sm hover:underline">+971 56 996 6391</a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-phone mr-4 text-brand-gold w-5 text-center"></i>
                      <div>
                        <h5 className="font-bold text-sm">Landline</h5>
                        <a href="tel:+97167447843" className="text-gray-300 text-sm hover:underline">+971 6 744 7843</a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-envelope mt-1 mr-4 text-brand-gold"></i>
                    <div>
                      <h5 className="font-bold">Email</h5>
                      <p className="text-gray-300 text-sm">vikas.js@azbenergy.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <p className="text-sm text-gray-400 mb-4">Follow us:</p>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-blue transition"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-blue transition"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-blue transition"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 bg-white p-10">
              {/* NOTE: form submission is a placeholder — wire up to your Next.js backend/API route */}
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition">
                      <option>Request a Quote</option>
                      <option>Technical Support</option>
                      <option>Become a Distributor</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={4} placeholder="How can we help you?" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition"></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-blue text-white font-bold py-4 rounded-lg hover:bg-brand-dark transition-all shadow-md">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
