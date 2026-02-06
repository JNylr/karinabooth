
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section className="relative py-48 bg-black text-white overflow-hidden" id="philosophy">
      <div className="absolute inset-0 opacity-40 pointer-events-none scale-110">
        <img 
          alt="Tranquil Yoga Pose" 
          className="w-full h-full object-cover grayscale brightness-50" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu5-G4tGG0c_Faq5PPH9OiKKEgF3BVIuMgjsm36Gu1mFS-Z0Khi9SIH_BUWSwrBU50MFSmzGTHhr6JodDoOl4EU6ELaJcHH1YkWHYYxf00-_mrfKLrEStG3wDXc4mxHnxIQQfpKvljDo2teRcVC0ylsc2Gcj1OkUCEHe5zOxnt4HzAGTUt9XZ-rJyhqkTJHHuEyP7SY37yj8aj94E32huDIQ474u848-pF-apaeaqfo_P5XSmcEdeubgTfJdFUAtsAupqZRdwrdg" 
        />
      </div>
      
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-7xl mb-16 italic leading-tight animate-fade-in">
          "Health is the quiet rhythm of movement and stillness in harmony."
        </h2>
        
        <div className="flex flex-col items-center space-y-12">
          <p className="text-zinc-400 font-light tracking-wide max-w-2xl mx-auto text-lg leading-relaxed">
            Experience a different standard of care. Our studio is designed to be a sanctuary where science meets serenity, ensuring your path to wellness is as restorative as it is effective.
          </p>
          
          <a 
            href="#" 
            className="group flex items-center space-x-6 border border-white/20 hover:border-white px-12 py-6 transition-all duration-500 hover:bg-white hover:text-black shadow-2xl"
          >
            <span className="text-xs uppercase tracking-[0.4em] font-semibold">Schedule Your Initial Visit</span>
            <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform duration-300">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
