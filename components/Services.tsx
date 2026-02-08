
import React from 'react';

interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

const services: ServiceItem[] = [
  {
    title: "Musculoskeletal Physiotherapy & Rehabilitation",
    description: "Restore function, reduce recurrence, and improve movement quality.",
    icon: "directions_run",
  },
  {
    title: "Sports Physiotherapy",
    description: "Recover safely from acute or overuse injuries and optimise performance.",
    icon: "sprint",
  },
  {
    title: "Pre & Post-Operative Rehabilitation",
    description: "Support surgical recovery, rebuild strength, and regain confidence.",
    icon: "healing",
  },
  {
    title: "Chronic Pain Assessment & Management",
    description: "Regain control and improve quality of life with tailored strategies.",
    icon: "psychology",
  },
  {
    title: "Massage Therapy",
    description: "Hands-on treatments including sports, soft and deep tissue massage, cupping, instrument-assisted therapy, and joint mobilisation.",
    icon: "spa",
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-[#0a0a0a]" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-20">
        <h6 className="text-[10px] uppercase tracking-[0.5em] text-secondary dark:text-zinc-500 mb-6 font-semibold">Therapeutic Offerings</h6>
        <h2 className="font-display text-4xl md:text-6xl text-primary dark:text-white">Specialised Services</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <div key={index} className="group p-8 border border-zinc-100 dark:border-zinc-800 hover:border-accent/40 transition-all duration-300 w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.75rem)]">
            <span className="material-symbols-outlined text-accent text-4xl mb-6 block group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </span>
            <h3 className="font-display text-xl md:text-2xl mb-4 italic text-primary dark:text-white leading-snug">{service.title}</h3>
            <p className="text-secondary dark:text-zinc-400 font-light leading-relaxed text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTAs */}
      <div className="max-w-3xl mx-auto px-6 lg:px-12 mt-20 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#book"
          className="px-8 py-5 bg-primary text-white dark:bg-white dark:text-primary text-center tracking-[0.2em] text-[10px] uppercase font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-sm"
        >
          Book Your Free Discovery Call
          <span className="block text-[9px] tracking-[0.15em] font-normal opacity-70 mt-1 normal-case">
            Discuss which service is right for you
          </span>
        </a>
        <a
          href="#book"
          className="px-8 py-5 border border-zinc-300 dark:border-zinc-700 text-primary dark:text-white text-center tracking-[0.2em] text-[10px] uppercase font-semibold hover:border-primary dark:hover:border-white transition-all"
        >
          Book Your Initial Assessment
          <span className="block text-[9px] tracking-[0.15em] font-normal opacity-70 mt-1 normal-case">
            Book your first personalised session now
          </span>
        </a>
      </div>
    </section>
  );
};

export default Services;
