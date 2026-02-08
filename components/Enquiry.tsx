
import React, { useState } from 'react';

const Enquiry: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        description: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Visual form only for now
        setSubmitted(true);
    };

    return (
        <section className="py-20 md:py-32 bg-zinc-50 dark:bg-zinc-900 transition-colors" id="enquiry">
            <div className="max-w-5xl mx-auto px-6 lg:px-12">
                <div className="grid md:grid-cols-2 gap-16 md:gap-24">
                    {/* Left — Info */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <h6 className="text-[10px] uppercase tracking-[0.5em] text-accent font-bold">Get in Touch</h6>
                            <h2 className="font-display text-4xl md:text-5xl text-primary dark:text-white leading-tight">Start Your Recovery</h2>
                        </div>
                        <p className="text-secondary dark:text-zinc-400 font-light text-lg leading-relaxed">
                            If you're dealing with pain, injury, or ongoing discomfort, get in touch to discuss a tailored physiotherapy plan — all clients are offered a free discovery call.
                        </p>

                        <div className="space-y-6">
                            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary dark:text-white">What happens next</h4>
                            {[
                                "Your enquiry is reviewed personally by Karina",
                                "You'll be contacted to discuss your concerns and goals",
                                "Together, we'll decide the most appropriate next step for your recovery",
                            ].map((step, idx) => (
                                <div key={idx} className="flex items-start space-x-4">
                                    <span className="w-7 h-7 shrink-0 flex items-center justify-center bg-accent/10 text-accent text-xs font-bold rounded-full mt-0.5">
                                        {idx + 1}
                                    </span>
                                    <p className="text-secondary dark:text-zinc-400 font-light leading-relaxed">{step}</p>
                                </div>
                            ))}
                        </div>

                        {/* Supporting microcopy */}
                        <div className="space-y-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                            {[
                                "Free discovery call available for all new clients",
                                "Appointments take place in a calm, private home clinic",
                                "No referral required — everyone is welcome",
                            ].map((note, idx) => (
                                <div key={idx} className="flex items-center space-x-3 text-sm text-secondary dark:text-zinc-500">
                                    <span className="material-symbols-outlined text-accent text-base">check_circle</span>
                                    <span className="font-light">{note}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col gap-3 pt-2">
                            <a
                                href="#book"
                                className="px-8 py-4 bg-primary text-white dark:bg-white dark:text-primary text-center tracking-[0.2em] text-[10px] uppercase font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-sm"
                            >
                                Book Your Free Discovery Call
                                <span className="block text-[9px] tracking-[0.15em] font-normal opacity-70 mt-1 normal-case">
                                    Speak with Karina directly to discuss your goals
                                </span>
                            </a>
                            <a
                                href="#book"
                                className="px-8 py-4 border border-zinc-300 dark:border-zinc-700 text-primary dark:text-white text-center tracking-[0.2em] text-[10px] uppercase font-semibold hover:border-primary dark:hover:border-white transition-all"
                            >
                                Book Your Initial Assessment
                                <span className="block text-[9px] tracking-[0.15em] font-normal opacity-70 mt-1 normal-case">
                                    Secure your first one-to-one session now
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Right — Form */}
                    <div className="bg-white dark:bg-[#111] border border-zinc-100 dark:border-zinc-800 p-8 md:p-10 shadow-sm">
                        {submitted ? (
                            <div className="flex flex-col items-center justify-center h-full text-center space-y-6 py-12">
                                <span className="material-symbols-outlined text-accent text-5xl">task_alt</span>
                                <h3 className="font-display text-2xl italic text-primary dark:text-white">Enquiry Received</h3>
                                <p className="text-secondary dark:text-zinc-400 font-light max-w-sm leading-relaxed">
                                    We'll get back to you personally to plan your recovery.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <h3 className="font-display text-2xl italic text-primary dark:text-white mb-2">Send an Enquiry</h3>
                                <p className="text-secondary dark:text-zinc-500 text-sm font-light mb-6">
                                    We'll get back to you personally to plan your recovery.
                                </p>

                                <div className="space-y-5">
                                    <div>
                                        <label htmlFor="name" className="block text-[10px] uppercase tracking-[0.3em] text-primary dark:text-zinc-300 font-semibold mb-2">Full Name</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full border border-zinc-200 dark:border-zinc-700 bg-transparent px-4 py-3 text-primary dark:text-white text-sm font-light focus:border-accent focus:ring-0 focus:outline-none transition-colors"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-[10px] uppercase tracking-[0.3em] text-primary dark:text-zinc-300 font-semibold mb-2">Email Address</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full border border-zinc-200 dark:border-zinc-700 bg-transparent px-4 py-3 text-primary dark:text-white text-sm font-light focus:border-accent focus:ring-0 focus:outline-none transition-colors"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-[10px] uppercase tracking-[0.3em] text-primary dark:text-zinc-300 font-semibold mb-2">Phone Number</label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full border border-zinc-200 dark:border-zinc-700 bg-transparent px-4 py-3 text-primary dark:text-white text-sm font-light focus:border-accent focus:ring-0 focus:outline-none transition-colors"
                                            placeholder="07XXX XXXXXX"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="description" className="block text-[10px] uppercase tracking-[0.3em] text-primary dark:text-zinc-300 font-semibold mb-2">Brief Description of Your Issue</label>
                                        <textarea
                                            id="description"
                                            name="description"
                                            required
                                            rows={4}
                                            value={formData.description}
                                            onChange={handleChange}
                                            className="w-full border border-zinc-200 dark:border-zinc-700 bg-transparent px-4 py-3 text-primary dark:text-white text-sm font-light focus:border-accent focus:ring-0 focus:outline-none transition-colors resize-none"
                                            placeholder="Tell us briefly about your pain, injury, or concern..."
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-primary text-white dark:bg-white dark:text-primary text-[10px] uppercase tracking-[0.25em] font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-sm"
                                >
                                    Submit Enquiry
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Enquiry;
