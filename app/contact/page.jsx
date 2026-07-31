'use client';

import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
      {/* Full-Width Premium Product Category Banner */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-16 md:py-24 overflow-hidden w-full"
        style={{ backgroundImage: "url('/banner/contactbanner.jpeg')" }}
      >
        <div className="absolute inset-0"></div>
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-green-600 rounded-full blur-3xl opacity-20 z-0"></div>
        <div className="absolute left-10 top-10 w-40 h-40 bg-red-600 rounded-full blur-3xl opacity-10 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <nav className="flex items-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-200 mb-6 space-x-2">
              <Link href="/" className="hover:text-green-500 transition"></Link>
              <a href="#" className="hover:text-green-500 transition"></a>
              <span className="mb-4"></span>
            </nav>

            <span className="px-3 py-1 rounded mb-6 shadow-lg"></span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-md"></h1>
            <div className="w-24 mb-20"></div>
            <p className="text-gray-100 text-base md:text-lg leading-relaxed drop-shadow-sm"></p>
          </div>
        </div>
      </section>

      {/* Main Workspace Layout Container */}
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
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input type="text" placeholder="" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input type="email" placeholder="" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" placeholder="" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition" />
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