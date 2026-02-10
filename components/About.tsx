
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-zinc-50 dark:bg-zinc-900 transition-colors" id="about">
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
              <h2 className="font-display text-4xl md:text-6xl text-primary dark:text-white">Meet Karina Booth</h2>
              <div className="flex flex-wrap gap-2 text-sm uppercase tracking-[0.2em] text-secondary dark:text-zinc-500 font-medium items-center">
                <span>Chartered Physiotherapist</span>
                <span className="hidden sm:inline">|</span>
                <span>Sport & Exercise Medicine</span>
                <span className="hidden sm:inline">|</span>
                <span>Massage Therapist</span>
              </div>
            </div>

            <div className="space-y-6 text-lg text-secondary dark:text-zinc-400 font-light leading-relaxed max-w-2xl">
              <p>
                Hi, I’m Karina Booth, a Chartered Physiotherapist with a Master’s degree in Physiotherapy (Sport and Exercise Medicine) and a background in massage therapy. I have worked predominantly in the private sector, gaining extensive experience across a wide range of musculoskeletal conditions and patient populations.
              </p>
              <p>
                From recreationally active individuals, athletes, older adults, post-operative patients, and those living with persistent pain, my focus has always been the same:
              </p>
              <p className="font-medium text-primary dark:text-white">
                Help people get back to doing the things they love, and often exceeding what they thought was possible.
              </p>
              <p>
                My approach goes far beyond symptom relief.
              </p>
              <p>
                Rather than simply treating where it hurts, I focus on identifying the root cause of your symptoms, using a whole-system, whole-body approach. This means understanding how movement patterns, strength, mobility, and previous injuries contribute to pain and dysfunction.
              </p>
              <p>
                Every client who walks through my door receives a bespoke pathway to recovery, built around:
              </p>
              <ul className="space-y-3 mt-4">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  Clinical excellence
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  Long-term health and wellness
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  Treating the whole person, not just the injury
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  Progressing you beyond baseline — not just “back to normal”
                </li>
              </ul>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
