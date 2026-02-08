
import React, { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "What conditions do you treat?",
        answer: "I treat a wide range of musculoskeletal issues including sports injuries, neck, back, and knee pain, post-operative rehabilitation, chronic pain, and movement-related dysfunctions across all ages.",
    },
    {
        question: "Do I need a referral?",
        answer: "No referral is required. You can book directly for assessment and treatment.",
    },
    {
        question: "What should I expect at my first appointment?",
        answer: "Your first session includes a detailed assessment to identify the root cause of your problem. Together, we'll create a bespoke recovery plan tailored to your goals and needs.",
    },
    {
        question: "How long is each appointment?",
        answer: "Most sessions last between 45–60 minutes, giving enough time for assessment, treatment, and guidance.",
    },
    {
        question: "Is this suitable for athletes?",
        answer: "Yes. I work with athletes of all levels as well as active adults and older adults, helping you recover safely and return to your activities stronger and more confident.",
    },
    {
        question: "Do you offer massage therapy?",
        answer: "Yes — including sports massage, soft and deep tissue massage, cupping, instrument-assisted therapy, and joint mobilisation techniques.",
    },
    {
        question: "Can I have ongoing treatment if needed?",
        answer: "Absolutely. Your recovery plan may include multiple sessions, tailored to your progress, to help you exceed your goals.",
    },
    {
        question: "Where are the appointments held?",
        answer: "All sessions take place in my private home clinic, providing a calm, focused environment with one-to-one attention.",
    },
    {
        question: "How do I make an enquiry or book?",
        answer: "You can complete the enquiry form on the website, email, or call directly. I'll respond personally to discuss the best next steps for your recovery.",
    },
    {
        question: "Is my information confidential?",
        answer: "Yes. All enquiries, assessments, and treatments are handled with strict confidentiality and professionalism.",
    },
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-12 md:py-20 bg-white dark:bg-[#0a0a0a] transition-colors" id="faqs">
            <div className="max-w-4xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-14 md:mb-20 space-y-4">
                    <h6 className="text-[10px] uppercase tracking-[0.5em] text-accent font-bold">Common Questions</h6>
                    <h2 className="font-display text-4xl md:text-6xl text-primary dark:text-white">FAQs</h2>
                </div>

                <div className="divide-y divide-zinc-100 dark:divide-zinc-800 border-y border-zinc-100 dark:border-zinc-800">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index}>
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full text-left py-6 flex items-center justify-between gap-4 group"
                                    aria-expanded={isOpen}
                                >
                                    <span className="font-display text-lg md:text-xl text-primary dark:text-white group-hover:text-accent transition-colors leading-snug">
                                        {faq.question}
                                    </span>
                                    <span className={`material-symbols-outlined text-zinc-400 text-xl shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                        expand_more
                                    </span>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
                                >
                                    <p className="text-secondary dark:text-zinc-400 font-light leading-relaxed text-base pr-8">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTAs */}
                <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="#book"
                        className="px-8 py-5 bg-primary text-white dark:bg-white dark:text-primary text-center tracking-[0.2em] text-[10px] uppercase font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-sm"
                    >
                        Book Your Free Discovery Call
                        <span className="block text-[9px] tracking-[0.15em] font-normal opacity-70 mt-1 normal-case">
                            Not sure which service is right? Let's chat first
                        </span>
                    </a>
                    <a
                        href="#book"
                        className="px-8 py-5 border border-zinc-300 dark:border-zinc-700 text-primary dark:text-white text-center tracking-[0.2em] text-[10px] uppercase font-semibold hover:border-primary dark:hover:border-white transition-all"
                    >
                        Book Your Initial Assessment
                        <span className="block text-[9px] tracking-[0.15em] font-normal opacity-70 mt-1 normal-case">
                            Ready to start your tailored recovery plan?
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
