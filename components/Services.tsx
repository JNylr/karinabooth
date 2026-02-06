
import React from 'react';

interface ServiceItem {
  title: string;
  description: string;
  image: string;
  href: string;
}

const services: ServiceItem[] = [
  {
    title: "Manual Therapy",
    description: "Hands-on techniques including joint mobilization and soft tissue manipulation to improve tissue extensibility and reduce pain.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwpVZB4d8TF4NK4F8fhrhsMHNyy8MuvWhbA7EQMtkMNlpu2_hEMcWewC7IpTB6b3d6v1UxT_IUxAscEvIFsoAscVLHWqNFsm2BsXtQHpgxb5daUZQtqKIto4sTC1PnBfqYPszz2pEAZNOBpwQ3wTomTdUcGe4E-JyngJH0qAZtd8GrDpekARy1-rC4XxDWhQ9j9cP0RXoB3D1o7ujecsF6v7ss6rDdUMGGkqR4PSymh-3tSWG1tsj85F9p7Js2KwS3fNTuya--ig",
    href: "#"
  },
  {
    title: "Post-Op Recovery",
    description: "Comprehensive rehabilitation programmes designed to safely guide you back to full function following orthopaedic surgery.",
    image: "/post_op_recovery.png",
    href: "#"
  },
  {
    title: "Sports Performance",
    description: "Tailored assessment and corrective exercise plans to enhance athletic movement and prevent future injury for all levels.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeJ5t9SydxzM9pMPiKAQBOM2WiX13kLhB3PfbUits8PnwqTXCOlLaUutzYCnSQOzpGyMPehlKcoiGCjg40-GLN_eeOTQ3LaSuyU0BspwJXFYxLsgajqgeJweAhkk6eTSPdnW1XL1v8-CU3c62NyvgmACdsecOMHZzg_1l1XJaxm209TDBFWYRF0Qr01H_ESm3JD_hWTfupi4WLE2c1yfH4kq_sQs_8ucivQLht3KGpMpVIAfQ1cjkgbtEld_5b27ozgXmsRXN6KA",
    href: "#"
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-32 bg-white dark:bg-[#0a0a0a]" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-24">
        <h6 className="text-[10px] uppercase tracking-[0.5em] text-secondary dark:text-zinc-500 mb-6 font-semibold">Therapeutic Offerings</h6>
        <h2 className="font-display text-4xl md:text-6xl text-primary dark:text-white">Specialised Services</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {services.map((service, index) => (
          <div key={index} className="group border-b border-zinc-100 dark:border-zinc-800 pb-16">
            <div className="mb-8 overflow-hidden aspect-[16/10]">
              <img
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-90 dark:brightness-75"
                src={service.image}
              />
            </div>
            <h3 className="font-display text-3xl mb-5 italic text-primary dark:text-white">{service.title}</h3>
            <p className="text-secondary dark:text-zinc-400 font-light leading-relaxed mb-8 h-20 overflow-hidden">
              {service.description}
            </p>
            <a
              href={service.href}
              className="inline-flex items-center text-[10px] uppercase tracking-[0.3em] border-b-2 border-primary/20 dark:border-white/20 pb-1 font-bold group-hover:border-accent group-hover:text-accent transition-all"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
