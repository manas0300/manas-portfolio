(function() {
  'use strict';

  // ---- Navigation ----
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const navLinks = document.querySelectorAll('.nav__link');

  // Sticky nav - add scrolled class
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
    lastScroll = currentScroll;
  }, { passive: true });

  // Mobile menu toggle
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('nav__hamburger--active');
      mobileMenu.classList.toggle('nav__mobile-menu--active');
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('nav__hamburger--active');
        mobileMenu.classList.remove('nav__mobile-menu--active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // ── Active nav link — scroll-based section tracking ──────────────────────
  // Accurately tracks which nav section is in view, handles tall sections
  // (like Work), prevents getting stuck, and properly activates Contact at page bottom.

  const NAV_HEIGHT = 72; // matches --nav-height CSS variable
  const navSectionIds = Array.from(navLinks).map(link => 
    link.getAttribute('data-section') || (link.getAttribute('href') || '').replace('#', '')
  ).filter(id => id && id !== 'hero');

  const navSections = navSectionIds
    .map(id => document.getElementById(id))
    .filter(Boolean);

  function updateActiveNav() {
    const scrollY = window.pageYOffset;
    const isAtBottom = (window.innerHeight + scrollY) >= (document.documentElement.scrollHeight - 60);

    let currentId = '';

    if (scrollY < 180) {
      // In hero area: no section link is highlighted
      currentId = '';
    } else if (isAtBottom) {
      // At bottom of page: Contact is active
      currentId = 'contact';
    } else {
      // Find the last nav section whose top has scrolled past the nav bar
      const navOffset = NAV_HEIGHT + 60;
      for (let i = navSections.length - 1; i >= 0; i--) {
        const sec = navSections[i];
        const rect = sec.getBoundingClientRect();
        if (rect.top <= navOffset) {
          currentId = sec.id;
          break;
        }
      }
    }

    navLinks.forEach(link => {
      const linkSection = link.getAttribute('data-section') ||
                          (link.getAttribute('href') || '').replace('#', '');
      link.classList.toggle('nav__link--active', Boolean(currentId && linkSection === currentId));
    });
  }

  // Run on load, scroll, and resize
  updateActiveNav();
  window.addEventListener('scroll', updateActiveNav, { passive: true });
  window.addEventListener('resize', updateActiveNav, { passive: true });

  // Smooth scroll for nav links (as a fallback/enhancement)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ---- Back to Top ----
  const backToTop = document.querySelector('.footer__back-top');
  if (backToTop) {
    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

})();
