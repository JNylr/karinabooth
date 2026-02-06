
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-10 animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-primary dark:text-white">
            Restoring <br />
            <span className="italic text-zinc-400 dark:text-zinc-500">Balance</span> & <br />
            Movement.
          </h1>
          <p className="text-lg md:text-xl text-secondary dark:text-zinc-400 max-w-md font-light leading-relaxed">
            A refined approach to physiotherapy, combining clinical excellence with a tranquil, patient-centered environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <a 
              href="#services" 
              className="px-10 py-5 bg-primary text-white dark:bg-white dark:text-primary text-center tracking-[0.25em] text-[10px] uppercase font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-sm"
            >
              Explore Services
            </a>
            <a 
              href="#contact" 
              className="px-10 py-5 border border-zinc-300 dark:border-zinc-700 text-primary dark:text-white text-center tracking-[0.25em] text-[10px] uppercase font-semibold hover:border-primary dark:hover:border-white transition-all"
            >
              Consultation
            </a>
          </div>
        </div>

        <div className="relative group animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
          <div className="aspect-[4/5] bg-zinc-100 dark:bg-zinc-900 overflow-hidden shadow-2xl">
            <img 
              alt="Sophisticated clinic space" 
              className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-[2000ms] ease-out" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4kCx-Dinv2LyTOZAgoBmOleih5vb2vziIjHJzE3FWdM-AOLMuWty9koSft-Zu0ABlZneGt7ed_IQWxhG8sNo0NZf9EUS2_CYYzyrqV6JzlnQravEYI7TTrXsAiowQlwFqaf0RCpZPaJYIm8ME4nGPjILMv86CoWvEExxo6KAu50wfs5TYlZcJ8O749GUMmzJAEdzL86-pK95-mc5wbEiG3NPm7HnNEvNGBQ3kwkl4Jv-2EpN-d7cYJXpBBTDTqUuaIIaNylZsaQ" 
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
