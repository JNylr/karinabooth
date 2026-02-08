
import React, { useEffect } from 'react';

const Booking: React.FC = () => {
    useEffect(() => {
        const handleMessage = (e: MessageEvent) => {
            if (typeof e.data !== 'string') return;

            if (e.data.includes('cliniko-bookings-resize')) {
                const height = Number(e.data.split(':')[1]);
                const initialFrame = document.getElementById('cliniko-initial');
                const discoveryFrame = document.getElementById('cliniko-discovery');
                // Resize whichever frame sent the message
                if (initialFrame) initialFrame.style.height = height + 'px';
                if (discoveryFrame) discoveryFrame.style.height = height + 'px';
            }

            if (e.data.includes('cliniko-bookings-page')) {
                const section = document.getElementById('book');
                section?.scrollIntoView({ behavior: 'smooth' });
            }
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    return (
        <section className="py-32 bg-zinc-50 dark:bg-zinc-900 transition-colors" id="book">
            <div className="max-w-5xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-20 space-y-4">
                    <h6 className="text-[10px] uppercase tracking-[0.5em] text-accent font-bold">
                        Begin Your Journey
                    </h6>
                    <h2 className="font-display text-4xl md:text-6xl text-primary dark:text-white">
                        Book an Appointment
                    </h2>
                    <p className="text-secondary dark:text-zinc-400 font-light text-lg max-w-xl mx-auto leading-relaxed">
                        Select from an initial assessment or a complimentary discovery call to discuss how we can help you.
                    </p>
                </div>

                {/* Booking Options */}
                <div className="space-y-20">
                    {/* Initial Assessment */}
                    <div className="bg-white dark:bg-[#111] border border-zinc-100 dark:border-zinc-800 shadow-sm overflow-hidden">
                        <div className="px-8 py-6 border-b border-zinc-100 dark:border-zinc-800">
                            <div className="flex items-center space-x-4">
                                <span className="material-symbols-outlined text-accent text-2xl">clinical_notes</span>
                                <div>
                                    <h3 className="font-display text-2xl italic text-primary dark:text-white">Initial Assessment</h3>
                                    <p className="text-secondary dark:text-zinc-500 text-sm font-light mt-1">
                                        A comprehensive evaluation to understand your needs and create a bespoke treatment plan.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:p-8">
                            <iframe
                                id="cliniko-initial"
                                src="https://kb-physiotherapy.uk2.cliniko.com/bookings?appointment_type_id=1627486285037839102&embedded=true"
                                frameBorder="0"
                                scrolling="auto"
                                width="100%"
                                height="700"
                                style={{ pointerEvents: 'auto', border: 'none' }}
                                title="Book Initial Assessment"
                            />
                        </div>
                    </div>

                    {/* Free Discovery Call */}
                    <div className="bg-white dark:bg-[#111] border border-zinc-100 dark:border-zinc-800 shadow-sm overflow-hidden">
                        <div className="px-8 py-6 border-b border-zinc-100 dark:border-zinc-800">
                            <div className="flex items-center space-x-4">
                                <span className="material-symbols-outlined text-accent text-2xl">call</span>
                                <div>
                                    <h3 className="font-display text-2xl italic text-primary dark:text-white">Free Discovery Call</h3>
                                    <p className="text-secondary dark:text-zinc-500 text-sm font-light mt-1">
                                        A no-obligation conversation to learn about your concerns and how physiotherapy can help.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:p-8">
                            <iframe
                                id="cliniko-discovery"
                                src="https://kb-physiotherapy.uk2.cliniko.com/bookings?appointment_type_id=1880725928154243861&embedded=true"
                                frameBorder="0"
                                scrolling="auto"
                                width="100%"
                                height="700"
                                style={{ pointerEvents: 'auto', border: 'none' }}
                                title="Book Free Discovery Call"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Booking;
