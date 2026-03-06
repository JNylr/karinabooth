
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-900 transition-colors" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Mobile View - Preserved exactly as requested */}
        <div className="grid md:hidden gap-16 items-center">
          <div className="order-1 space-y-10">
            <div className="space-y-4">
              <h2 className="font-display text-4xl text-primary dark:text-white">Meet Karina Booth</h2>
              <div className="flex flex-wrap gap-2 text-sm uppercase tracking-[0.2em] text-secondary dark:text-zinc-500 font-medium items-center">
                <span>Chartered Physiotherapist</span>
                <span>|</span>
                <span>Sport & Exercise Medicine</span>
                <span>|</span>
                <span>Massage Therapist</span>
              </div>
            </div>

            <div className="space-y-6 text-lg text-secondary dark:text-zinc-400 font-light leading-relaxed">
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
          <div className="order-2 relative">
            <div className="absolute -inset-4 border border-accent/20 dark:border-accent/10 pointer-events-none"></div>
            <img
              alt="Karina Booth — Chartered Physiotherapist"
              className="w-full h-auto shadow-2xl relative z-10 filter dark:brightness-90 grayscale-[0.2]"
              src="/karina.jpg"
            />
          </div>
        </div>

        {/* Desktop View - Advanced Editorial Layout */}
        <div className="hidden md:flex flex-col gap-16">
          <div className="flex flex-col space-y-4">
            <h2 className="font-display text-5xl lg:text-7xl text-primary dark:text-white">Meet Karina Booth</h2>
            <div className="flex gap-4 text-sm uppercase tracking-[0.2em] text-secondary dark:text-zinc-500 font-medium items-center">
              <span>Chartered Physiotherapist</span>
              <span className="w-1 h-1 bg-accent/50 rounded-full"></span>
              <span>Sport & Exercise Medicine</span>
              <span className="w-1 h-1 bg-accent/50 rounded-full"></span>
              <span>Massage Therapist</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center mt-8">
            {/* Left Column (Now Image) */}
            <div className="order-1 relative w-full max-w-lg mx-auto md:ml-0 md:mr-auto">
              <div className="absolute -inset-4 border border-accent/20 dark:border-accent/10 pointer-events-none"></div>
              <img
                alt="Karina Booth — Chartered Physiotherapist"
                className="w-full h-auto shadow-2xl relative z-10 filter dark:brightness-90 grayscale-[0.2] object-cover aspect-[4/5]"
                src="/karina.jpg"
              />
            </div>

            {/* Right Column (Now All Text Content) */}
            <div className="order-2 space-y-8">
              <div className="space-y-6 text-lg text-secondary dark:text-zinc-400 font-light leading-relaxed">
                <p className="first-letter:text-7xl first-letter:font-display first-letter:text-primary dark:first-letter:text-white first-letter:mr-2 first-letter:float-left first-letter:leading-none first-letter:-mt-2">
                  Hi, I’m Karina Booth, a Chartered Physiotherapist with a Master’s degree in Physiotherapy (Sport and Exercise Medicine) and a background in massage therapy. I have worked predominantly in the private sector, gaining extensive experience across a wide range of musculoskeletal conditions and patient populations.
                </p>
                <p>
                  From recreationally active individuals, athletes, older adults, post-operative patients, and those living with persistent pain, my focus has always been the same:
                </p>
                <blockquote className="my-8 p-6 lg:p-8 border-l-2 border-accent bg-white dark:bg-black/5 text-primary dark:text-white font-medium italic text-xl shadow-sm rounded-r-md">
                  "Help people get back to doing the things they love, and often exceeding what they thought was possible."
                </blockquote>
                <p>
                  My approach goes far beyond symptom relief. Rather than simply treating where it hurts, I focus on identifying the root cause of your symptoms, using a whole-system, whole-body approach.
                </p>
                <p>
                  This means understanding how movement patterns, strength, mobility, and previous injuries contribute to pain and dysfunction.
                </p>
              </div>

              <div className="pt-8 border-t border-black/10 dark:border-white/10 mt-8">
                <p className="font-medium text-primary dark:text-white mb-6 uppercase text-sm tracking-widest">
                  Your Bespoke Pathway
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base text-secondary dark:text-zinc-400">
                  <li className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                    <span>Clinical excellence</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                    <span>Long-term health and wellness</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                    <span className="max-w-[16rem]">Treating the whole person, not just the injury</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                    <span>Progressing you beyond baseline</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
