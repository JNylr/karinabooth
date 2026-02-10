
import React from 'react';

interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

const services: ServiceItem[] = [
  {
    title: "Musculoskeletal Physiotherapy & Rehabilitation",
    description: "Comprehensive assessment and tailored rehabilitation for muscle, joint, and movement-related conditions, designed to restore function and reduce the risk of recurrence.",
    icon: "directions_run",
  },
  {
    title: "Sports Physiotherapy",
    description: "Assessment and treatment of acute and overuse sports injuries, focusing on performance, injury prevention, and a confident return to sport.",
    icon: "sprint",
  },
  {
    title: "Pre & Post-Operative Assessment and Rehabilitation",
    description: "Structured rehabilitation before and after orthopaedic surgery to optimise recovery, improve outcomes, and rebuild strength and confidence.",
    icon: "healing",
  },
  {
    title: "Chronic Pain Assessment & Management",
    description: "Individualised support for long-standing pain conditions using education, movement strategies, and graded rehabilitation to regain control and improve quality of life.",
    icon: "psychology",
  },
  {
    title: "Massage Therapy",
    description: "Hands-on treatments tailored to your needs, including:\n• Sports massage\n• Soft tissue massage\n• Deep tissue massage\n• Cupping therapy\n• Instrument-assisted soft tissue therapy\n• Joint mobilisation techniques",
    icon: "spa",
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-[#0a0a0a]" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-20">
        <h2 className="font-display text-4xl md:text-6xl text-primary dark:text-white">Services</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <div key={index} className="group p-8 bg-[#fcfbf9] dark:bg-[#111] border border-stone-100 dark:border-zinc-800 hover:border-accent/40 transition-all duration-300 w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.75rem)] shadow-sm">
            <span className="material-symbols-outlined text-accent text-4xl mb-6 block group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </span>
            <h3 className="font-display text-xl md:text-2xl mb-4 italic text-primary dark:text-white leading-snug">{service.title}</h3>
            <div className="text-secondary dark:text-zinc-400 font-light leading-relaxed text-sm whitespace-pre-line">
              {service.description}
            </div>
          </div>
        ))}
      </div>

      {/* CTAs */}

    </section>
  );
};

export default Services;
