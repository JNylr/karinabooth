
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-32 bg-zinc-50 dark:bg-zinc-900 transition-colors" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5 order-2 md:order-1 relative">
            <div className="absolute -inset-4 border border-accent/20 dark:border-accent/10 pointer-events-none"></div>
            <img
              alt="Karina Booth — Chartered Physiotherapist"
              className="w-full h-auto shadow-2xl relative z-10 filter dark:brightness-90 grayscale-[0.2]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgPusz9e2KzChcDzMoeWRsGf4C5JonM5beiTp5J1mHuyi5eze6eWl6hEddNQhSBp08MgArXeAp_AH2MOpaIC9LO1JZT9lvt7bv12H2KSzSPH9i6mnpqEwhApLfqoCfwTfQThd2FmA7egX_ErycqX2sw7QN8lPnRgGohnYbUPpTATu9cUwf6ogHENk8iWtVXfahAo7X2-LDWFRtrJ6NiuCCt64dAWttjcSSBqAxM3o45ABNhU4i9vCtedYMAbfMZqEgTDzYQg9Qjg"
            />
          </div>
          <div className="md:col-span-7 order-1 md:order-2 space-y-10">
            <div className="space-y-4">
              <h6 className="text-[10px] uppercase tracking-[0.45em] text-accent font-bold">Expertise &amp; Background</h6>
              <h2 className="font-display text-4xl md:text-6xl text-primary dark:text-white">Meet Karina Booth</h2>
              <p className="text-sm uppercase tracking-[0.3em] text-secondary dark:text-zinc-500 font-medium">
                Chartered Physiotherapist · Sport &amp; Exercise Medicine · Massage Therapist
              </p>
            </div>

            <div className="space-y-6 text-lg text-secondary dark:text-zinc-400 font-light leading-relaxed max-w-2xl">
              <p>
                Hi, I'm Karina Booth. I help athletes, active adults, older adults, and post-operative patients regain function, reduce pain, and return to the activities they love.
              </p>
              <p>
                I go beyond symptom relief, identifying the root cause of dysfunction with a whole-system approach. Every client receives a bespoke recovery pathway, designed to exceed expectations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#book"
                className="px-8 py-4 bg-primary text-white dark:bg-white dark:text-primary text-center tracking-[0.2em] text-[10px] uppercase font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-sm"
              >
                Book Your Free Discovery Call
                <span className="block text-[9px] tracking-[0.15em] font-normal opacity-70 mt-1 normal-case">
                  Let's discuss your goals before your first appointment
                </span>
              </a>
              <a
                href="#book"
                className="px-8 py-4 border border-zinc-300 dark:border-zinc-700 text-primary dark:text-white text-center tracking-[0.2em] text-[10px] uppercase font-semibold hover:border-primary dark:hover:border-white transition-all"
              >
                Book Your Initial Assessment
                <span className="block text-[9px] tracking-[0.15em] font-normal opacity-70 mt-1 normal-case">
                  Secure your one-to-one physiotherapy session
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
