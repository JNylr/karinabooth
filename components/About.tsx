
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-32 bg-zinc-50 dark:bg-zinc-900 transition-colors" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5 order-2 md:order-1 relative">
            <div className="absolute -inset-4 border border-accent/20 dark:border-accent/10 pointer-events-none"></div>
            <img
              alt="Detail of professional therapeutic touch"
              className="w-full h-auto shadow-2xl relative z-10 filter dark:brightness-90 grayscale-[0.2]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgPusz9e2KzChcDzMoeWRsGf4C5JonM5beiTp5J1mHuyi5eze6eWl6hEddNQhSBp08MgArXeAp_AH2MOpaIC9LO1JZT9lvt7bv12H2KSzSPH9i6mnpqEwhApLfqoCfwTfQThd2FmA7egX_ErycqX2sw7QN8lPnRgGohnYbUPpTATu9cUwf6ogHENk8iWtVXfahAo7X2-LDWFRtrJ6NiuCCt64dAWttjcSSBqAxM3o45ABNhU4i9vCtedYMAbfMZqEgTDzYQg9Qjg"
            />
          </div>
          <div className="md:col-span-7 order-1 md:order-2 space-y-10">
            <div className="space-y-4">
              <h6 className="text-[10px] uppercase tracking-[0.45em] text-accent font-bold">Expertise & Background</h6>
              <h2 className="font-display text-4xl md:text-6xl text-primary dark:text-white">Meet Karina Booth</h2>
            </div>

            <div className="space-y-6 text-lg text-secondary dark:text-zinc-400 font-light leading-relaxed max-w-2xl">
              <p>
                With over 15 years of specialised experience in musculoskeletal rehabilitation, Karina has dedicated her career to understanding the intricate nuances of human biomechanics. Her practice is built on the philosophy that every patient deserves a bespoke pathway to recovery.
              </p>
              <p>
                Karina's approach is not just about treating symptoms, but identifying the root cause to ensure long-term vitality and performance through science-backed methodologies.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {[
                "Doctor of Physical Therapy (DPT)",
                "Certified Manual Therapist",
                "Sports Injury Specialist",
                "Clinical Pilates Expert"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-4 text-sm tracking-wide text-primary dark:text-zinc-300">
                  <span className="material-symbols-outlined text-accent text-lg">verified</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
