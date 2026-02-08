
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 md:py-32 bg-white dark:bg-[#0a0a0a] border-t border-zinc-100 dark:border-zinc-900 transition-colors" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20">
          <div className="sm:col-span-2 space-y-6 md:space-y-10">
            <img
              alt="Karina Booth Physiotherapy Logo"
              className="h-12 md:h-16 w-auto dark:invert opacity-90"
              src="/krlogo.png"
            />
            <p className="text-secondary dark:text-zinc-500 max-w-xs font-light text-base md:text-lg leading-relaxed">
              Modern physiotherapy for the discerning individual. Dedicated to excellence in motion and the preservation of vitality.
            </p>
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

          <div className="space-y-6 md:space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary dark:text-white">Hours</h4>
            <div className="text-secondary dark:text-zinc-400 space-y-3 md:space-y-4 font-light text-sm">
              {[
                { label: 'Mon — Fri', time: '08:00 - 19:00' },
                { label: 'Sat', time: '09:00 - 14:00' },
                { label: 'Sun', time: 'Closed' }
              ].map((row, idx) => (
                <div key={idx} className="flex justify-between border-b border-zinc-50 dark:border-zinc-800 pb-2">
                  <span>{row.label}</span>
                  <span className="font-medium">{row.time}</span>
                </div>
              ))}
            </div>
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
          <p className="text-center md:text-left">© 2024 Karina Booth Physiotherapy. All Rights Reserved.</p>
          <div className="flex space-x-8 md:space-x-12">
            {['Privacy', 'Terms', 'Instagram'].map(item => (
              <a key={item} href="#" className="hover:text-primary dark:hover:text-white transition-all underline-offset-4 hover:underline">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

