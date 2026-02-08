
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
        setSubmitted(true);
    };

    return (
        <section className="py-12 md:py-20 bg-zinc-50 dark:bg-zinc-900 transition-colors" id="enquiry">
            <div className="max-w-5xl mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="text-center mb-10 md:mb-14 space-y-4">
                    <h6 className="text-[10px] uppercase tracking-[0.5em] text-accent font-bold">Get in Touch</h6>
                    <h2 className="font-display text-4xl md:text-5xl text-primary dark:text-white">Start Your Recovery</h2>
                    <p className="text-secondary dark:text-zinc-400 font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        If you're dealing with pain, injury, or ongoing discomfort, get in touch to discuss a tailored physiotherapy plan — all clients are offered a free discovery call.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
                    {/* Left — Form */}
                    <div className="bg-white dark:bg-[#111] border border-zinc-100 dark:border-zinc-800 p-6 md:p-8 shadow-sm">
                        {submitted ? (
                            <div className="flex flex-col items-center justify-center text-center space-y-5 py-10">
                                <span className="material-symbols-outlined text-accent text-4xl">task_alt</span>
                                <h3 className="font-display text-xl italic text-primary dark:text-white">Enquiry Received</h3>
                                <p className="text-secondary dark:text-zinc-400 font-light text-sm max-w-xs leading-relaxed">
                                    We'll get back to you personally to plan your recovery.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <h3 className="font-display text-xl italic text-primary dark:text-white mb-1">Send an Enquiry</h3>
                                <p className="text-secondary dark:text-zinc-500 text-xs font-light">
                                    We'll get back to you personally to plan your recovery.
                                </p>

                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-[10px] uppercase tracking-[0.3em] text-primary dark:text-zinc-300 font-semibold mb-1.5">Full Name</label>
                                        <input
                                            id="name" name="name" type="text" required
                                            value={formData.name} onChange={handleChange}
                                            className="w-full border border-zinc-200 dark:border-zinc-700 bg-transparent px-4 py-2.5 text-primary dark:text-white text-sm font-light focus:border-accent focus:ring-0 focus:outline-none transition-colors"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-[10px] uppercase tracking-[0.3em] text-primary dark:text-zinc-300 font-semibold mb-1.5">Email Address</label>
                                        <input
                                            id="email" name="email" type="email" required
                                            value={formData.email} onChange={handleChange}
                                            className="w-full border border-zinc-200 dark:border-zinc-700 bg-transparent px-4 py-2.5 text-primary dark:text-white text-sm font-light focus:border-accent focus:ring-0 focus:outline-none transition-colors"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-[10px] uppercase tracking-[0.3em] text-primary dark:text-zinc-300 font-semibold mb-1.5">Phone Number</label>
                                        <input
                                            id="phone" name="phone" type="tel"
                                            value={formData.phone} onChange={handleChange}
                                            className="w-full border border-zinc-200 dark:border-zinc-700 bg-transparent px-4 py-2.5 text-primary dark:text-white text-sm font-light focus:border-accent focus:ring-0 focus:outline-none transition-colors"
                                            placeholder="07XXX XXXXXX"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="description" className="block text-[10px] uppercase tracking-[0.3em] text-primary dark:text-zinc-300 font-semibold mb-1.5">Brief Description</label>
                                        <textarea
                                            id="description" name="description" required rows={3}
                                            value={formData.description} onChange={handleChange}
                                            className="w-full border border-zinc-200 dark:border-zinc-700 bg-transparent px-4 py-2.5 text-primary dark:text-white text-sm font-light focus:border-accent focus:ring-0 focus:outline-none transition-colors resize-none"
                                            placeholder="Tell us briefly about your concern..."
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3.5 bg-primary text-white dark:bg-white dark:text-primary text-[10px] uppercase tracking-[0.25em] font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-sm"
                                >
                                    Submit Enquiry
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Right — Info */}
                    <div className="space-y-8">
                        <div className="space-y-5">
                            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary dark:text-white">What happens next</h4>
                            {[
                                "Your enquiry is reviewed personally by Karina",
                                "You'll be contacted to discuss your concerns and goals",
                                "Together, we'll decide the most appropriate next step",
                            ].map((step, idx) => (
                                <div key={idx} className="flex items-start space-x-3">
                                    <span className="w-6 h-6 shrink-0 flex items-center justify-center bg-accent/10 text-accent text-[10px] font-bold rounded-full mt-0.5">
                                        {idx + 1}
                                    </span>
                                    <p className="text-secondary dark:text-zinc-400 font-light text-sm leading-relaxed">{step}</p>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-2.5 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                            {[
                                "Free discovery call available for all new clients",
                                "Appointments in a calm, private home clinic",
                                "No referral required — everyone is welcome",
                            ].map((note, idx) => (
                                <div key={idx} className="flex items-center space-x-2.5 text-xs text-secondary dark:text-zinc-500">
                                    <span className="material-symbols-outlined text-accent text-sm">check_circle</span>
                                    <span className="font-light">{note}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col gap-3">
                            <a
                                href="#book"
                                className="px-6 py-3.5 bg-primary text-white dark:bg-white dark:text-primary text-center tracking-[0.2em] text-[10px] uppercase font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-sm"
                            >
                                Book Your Free Discovery Call
                            </a>
                            <a
                                href="#book"
                                className="px-6 py-3.5 border border-zinc-300 dark:border-zinc-700 text-primary dark:text-white text-center tracking-[0.2em] text-[10px] uppercase font-semibold hover:border-primary dark:hover:border-white transition-all"
                            >
                                Book Your Initial Assessment
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Enquiry;
