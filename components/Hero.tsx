
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-10 animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-primary dark:text-white">
            Physiotherapy <br />
            <span className="italic text-zinc-400 dark:text-zinc-500">built around</span> <br />
            you.
          </h1>
          <div className="space-y-3">
            <p className="text-lg md:text-xl text-secondary dark:text-zinc-400 max-w-md font-light leading-relaxed">
              Better musculoskeletal care to help you move well, recover fully, and return to the activities you love.
            </p>
            <p className="text-sm md:text-base text-accent font-medium tracking-wide">
              Private, one-to-one physiotherapy in a calm home clinic setting.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#book"
              className="group px-8 py-5 bg-primary text-white dark:bg-white dark:text-primary text-center tracking-[0.2em] text-[10px] uppercase font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-sm"
            >
              Book Your Free Discovery Call
              <span className="block text-[9px] tracking-[0.15em] font-normal opacity-70 mt-1 normal-case">
                Take the first step toward pain-free movement
              </span>
            </a>
            <a
              href="#book"
              className="group px-8 py-5 border border-zinc-300 dark:border-zinc-700 text-primary dark:text-white text-center tracking-[0.2em] text-[10px] uppercase font-semibold hover:border-primary dark:hover:border-white transition-all"
            >
              Book Your Initial Assessment
              <span className="block text-[9px] tracking-[0.15em] font-normal opacity-70 mt-1 normal-case">
                Start your personalised recovery plan today
              </span>
            </a>
          </div>
        </div>

        <div className="relative group animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
          <div className="aspect-[4/5] bg-zinc-100 dark:bg-zinc-900 overflow-hidden shadow-2xl">
            <img
              alt="KB Physiotherapy Clinic"
              className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
              src="/clinic.png"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-white dark:bg-zinc-900 p-10 shadow-2xl hidden lg:block border border-zinc-100 dark:border-zinc-800">
            <span className="block font-display text-3xl italic text-primary dark:text-white">"Healing begins with precision."</span>
            <span className="block mt-4 text-[10px] uppercase tracking-[0.3em] text-secondary">— Karina Booth</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
