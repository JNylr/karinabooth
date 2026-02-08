
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Meet Karina', href: '#about' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Book', href: '#book' },
    { name: 'Contact', href: '#enquiry' },
  ];

  return (
    <>
      <nav className={`fixed w-full transition-all duration-500 ${isMobileMenuOpen ? 'z-[60]' : 'z-50'} ${isScrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md h-20 shadow-sm' : 'bg-transparent h-24'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
          <div className="flex items-center z-[60]">
            <img
              alt="Karina Booth Physiotherapy Logo"
              className="h-12 w-auto dark:invert transition-all duration-300"
              src="/krlogo.png"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="uppercase text-[11px] tracking-[0.25em] font-medium text-primary dark:text-zinc-300 hover:text-secondary dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#book"
              className="px-6 py-3 bg-primary text-white dark:bg-white dark:text-primary text-[11px] uppercase tracking-[0.2em] font-medium hover:opacity-90 transition-opacity"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-primary dark:text-white z-[60] relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="material-symbols-outlined text-3xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white dark:bg-black z-[55] transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-display text-3xl sm:text-4xl italic text-primary dark:text-white hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 px-10 py-5 bg-primary text-white dark:bg-white dark:text-primary text-xs uppercase tracking-[0.3em] font-medium hover:opacity-90 transition-opacity"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
