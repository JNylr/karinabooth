
import React from 'react';

const Philosophy: React.FC = () => {
  const reasons = [
    "Every client receives individualised, high-quality care",
    "Rehabilitation is progressive, empowering, and results-driven",
    "Recovery doesn't stop at pain-free — the goal is to make you strong, confident, and capable",
  ];

  return (
    <section className="relative py-20 md:py-28 bg-black text-white overflow-hidden" id="philosophy">
      <div className="absolute inset-0 opacity-40 pointer-events-none scale-110">
        <img
          alt="Tranquil Yoga Pose"
          className="w-full h-full object-cover grayscale brightness-50"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu5-G4tGG0c_Faq5PPH9OiKKEgF3BVIuMgjsm36Gu1mFS-Z0Khi9SIH_BUWSwrBU50MFSmzGTHhr6JodDoOl4EU6ELaJcHH1YkWHYYxf00-_mrfKLrEStG3wDXc4mxHnxIQQfpKvljDo2teRcVC0ylsc2Gcj1OkUCEHe5zOxnt4HzAGTUt9XZ-rJyhqkTJHHuEyP7SY37yj8aj94E32huDIQ474u848-pF-apaeaqfo_P5XSmcEdeubgTfJdFUAtsAupqZRdwrdg"
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h6 className="text-[10px] uppercase tracking-[0.5em] text-accent font-bold mb-8">Why Choose Karina Booth</h6>
        <h2 className="font-display text-4xl md:text-6xl mb-16 italic leading-tight">
          Step beyond standard physiotherapy care.
        </h2>

        <div className="max-w-3xl mx-auto space-y-6 mb-12">
          {reasons.map((reason, idx) => (
            <div key={idx} className="flex items-start space-x-4 text-left">
              <span className="material-symbols-outlined text-accent text-xl mt-1 shrink-0">verified</span>
              <p className="text-zinc-300 font-light text-lg leading-relaxed">{reason}</p>
            </div>
          ))}
        </div>

        <p className="text-zinc-400 font-light tracking-wide max-w-2xl mx-auto text-lg leading-relaxed mb-16">
          My mission is to level up rehabilitation, elevate standards of care, and help clients excel in their recovery and exceed their expectations.
        </p>


      </div>
    </section>
  );
};

export default Philosophy;
