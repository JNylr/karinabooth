
import React from 'react';

const quickLinks = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#services' },
  { name: 'Meet Karina', href: '#about' },
  { name: 'FAQs', href: '#faqs' },
  { name: 'Contact', href: '#enquiry' },
];

const Footer: React.FC = () => {
  return (
    <footer className="py-12 md:py-20 bg-white dark:bg-[#0a0a0a] border-t border-zinc-100 dark:border-zinc-900 transition-colors" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20">
          <div className="sm:col-span-2 space-y-6 md:space-y-10">
            <img
              alt="Karina Booth Physiotherapy Logo"
              className="h-12 md:h-16 w-auto dark:invert opacity-90"
              src="/krlogo.png"
            />

          </div>

          <div className="space-y-6 md:space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary dark:text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-secondary dark:text-zinc-400 font-light text-sm hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-6 md:space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary dark:text-white">Contact</h4>
            <address className="not-italic text-secondary dark:text-zinc-400 space-y-4 md:space-y-6 font-light text-sm md:text-base">
              <p className="leading-relaxed">
                Nunthorpe Close<br />
                Hatfield<br />
                Doncaster<br />
                DN7 6JF
              </p>
              <a href="mailto:Karinaboothphysio@gmail.com" className="block hover:text-accent transition-colors break-all">Karinaboothphysio@gmail.com</a>
            </address>
          </div>
        </div>

        {/* Accreditations */}
        <div className="mt-16 md:mt-24 pt-8 md:pt-10 border-t border-zinc-100 dark:border-zinc-900">
          <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary dark:text-white mb-6 text-center">Accredited &amp; Registered</h4>
          <div className="flex items-center justify-center gap-10 md:gap-16 flex-wrap">
            <img
              alt="Chartered Society of Physiotherapy"
              className="h-12 md:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity dark:brightness-0 dark:invert"
              src="/chartso.png"
            />
            <img
              alt="Health &amp; Care Professions Council"
              className="h-12 md:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity dark:brightness-0 dark:invert"
              src="/healthc.png"
            />
          </div>
        </div>

        <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-zinc-100 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-medium gap-6">
          <p className="text-center md:text-left">© 2025 Karina Booth Physiotherapy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
