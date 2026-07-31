'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function SiteScripts() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. MOBILE MAIN HAMBURGER TOGGLE
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    function handleHamburgerClick(e) {
      e.preventDefault();
      e.stopPropagation();
      mobileMenu.classList.toggle('hidden');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        icon.className = mobileMenu.classList.contains('hidden') ? 'fas fa-bars' : 'fas fa-times';
      }
    }

    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', handleHamburgerClick);
    }

    // Close mobile menu when a leaf link is clicked
    const mobileLeafLinks = document.querySelectorAll('#mobile-menu a');
    function closeMobileMenu() {
      if (mobileMenu) mobileMenu.classList.add('hidden');
      const icon = mobileMenuBtn ? mobileMenuBtn.querySelector('i') : null;
      if (icon) icon.className = 'fas fa-bars';
    }
    mobileLeafLinks.forEach((link) => {
      if (link.closest('.mobile-l3-container')) {
        link.addEventListener('click', closeMobileMenu);
      }
    });

    // 2. SCROLL UTILITIES (sticky header shadow + back to top)
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('back-to-top');

    function handleScroll() {
      if (navbar) {
        navbar.classList.toggle('shadow-md', window.scrollY > 10);
      }
      if (backToTop) {
        backToTop.classList.toggle('show', window.scrollY > 350);
      }
    }
    window.addEventListener('scroll', handleScroll);

    function handleBackToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (backToTop) backToTop.addEventListener('click', handleBackToTop);

    // 3. SCROLL-DRIVEN VIEWPORT ANIMATION
    const animOptions = { root: null, rootMargin: '0px 0px -12% 0px', threshold: 0.05 };
    const animObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, animOptions);
    const animatedEls = document.querySelectorAll('.scroll-animate');
    animatedEls.forEach((el) => {
      el.classList.remove('animated'); // reset so newly-mounted page elements re-trigger
      animObserver.observe(el);
    });

    // 5. MOBILE ACCORDION HANDLERS (data-toggle / data-toggle-l2 attrs replace inline onclick=)
    function toggleLevel2(e) {
      const btn = e.currentTarget;
      const targetMenu = document.getElementById(btn.dataset.toggleL2);
      const chevronIcon = btn.querySelector('.fa-chevron-down');
      if (targetMenu) {
        const nowHidden = !targetMenu.classList.contains('hidden');
        targetMenu.classList.toggle('hidden');
        if (chevronIcon) chevronIcon.classList.toggle('rotate-180', !nowHidden);
      }
    }
    function toggleLevel3(e) {
      const btn = e.currentTarget;
      const targetMenu = document.getElementById(btn.dataset.toggle);
      const isCurrentlyHidden = targetMenu.classList.contains('hidden');

      document.querySelectorAll('.mobile-l3-container').forEach((menu) => menu.classList.add('hidden'));
      document.querySelectorAll('.mobile-l3-trigger').forEach((trigger) => {
        const icon = trigger.querySelector('.fa-chevron-down');
        if (icon) icon.classList.remove('rotate-180');
      });

      if (isCurrentlyHidden) {
        targetMenu.classList.remove('hidden');
        const activeChevron = btn.querySelector('.fa-chevron-down');
        if (activeChevron) activeChevron.classList.add('rotate-180');
      }
    }
    const l2Buttons = document.querySelectorAll('[data-toggle-l2]');
    const l3Buttons = document.querySelectorAll('[data-toggle]');
    l2Buttons.forEach((btn) => btn.addEventListener('click', toggleLevel2));
    l3Buttons.forEach((btn) => btn.addEventListener('click', toggleLevel3));

    // ACTIVE NAV TAB TRACKING (highlights desktop nav link matching visible section id)
    const sections = document.querySelectorAll('header[id], section[id]');
    const navLinks = document.querySelectorAll(
      '.hidden.md\\:flex.items-center.space-x-8 > a, .hidden.md\\:flex.items-center.space-x-8 > div > a'
    );
    const sectionObserverOptions = { root: null, rootMargin: '-30% 0px -60% 0px', threshold: 0 };
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.toggle('nav-link-active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, sectionObserverOptions);
    sections.forEach((section) => sectionObserver.observe(section));

    // Cleanup on unmount
    return () => {
      if (mobileMenuBtn) mobileMenuBtn.removeEventListener('click', handleHamburgerClick);
      mobileLeafLinks.forEach((link) => link.removeEventListener('click', closeMobileMenu));
      window.removeEventListener('scroll', handleScroll);
      if (backToTop) backToTop.removeEventListener('click', handleBackToTop);
      animObserver.disconnect();
      sectionObserver.disconnect();
      l2Buttons.forEach((btn) => btn.removeEventListener('click', toggleLevel2));
      l3Buttons.forEach((btn) => btn.removeEventListener('click', toggleLevel3));
    };
  }, [pathname]);

  return null; // renders nothing, just wires up behavior
}