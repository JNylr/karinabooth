
import React, { useEffect, useState } from 'react';

const INITIAL_URL = 'https://kb-physiotherapy.uk2.cliniko.com/bookings?appointment_type_id=1627486285037839102';
const DISCOVERY_URL = 'https://kb-physiotherapy.uk2.cliniko.com/bookings?appointment_type_id=1880725928154243861';

const bookingOptions = [
    {
        id: 'cliniko-initial',
        icon: 'clinical_notes',
        title: 'Initial Assessment',
        description: 'A comprehensive evaluation to understand your needs and create a bespoke treatment plan.',
        embedUrl: `${INITIAL_URL}&embedded=true`,
    },
    {
        id: 'cliniko-discovery',
        icon: 'call',
        title: 'Free Discovery Call',
        description: 'A no-obligation conversation to learn about your concerns and how physiotherapy can help.',
        embedUrl: `${DISCOVERY_URL}&embedded=true`,
    },
];

const Booking: React.FC = () => {
    const [openPanel, setOpenPanel] = useState<string | null>(null);

    useEffect(() => {
        const handleMessage = (e: MessageEvent) => {
            if (typeof e.data !== 'string') return;

            if (e.data.includes('cliniko-bookings-resize')) {
                const height = Number(e.data.split(':')[1]);
                for (const opt of bookingOptions) {
                    const frame = document.getElementById(opt.id) as HTMLIFrameElement | null;
                    if (frame) {
                        frame.style.height = Math.max(height, 400) + 'px';
                    }
                }
            }

            if (e.data.includes('cliniko-bookings-page')) {
                const section = document.getElementById('book');
                section?.scrollIntoView({ behavior: 'smooth' });
            }
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    const togglePanel = (id: string) => {
        setOpenPanel(prev => prev === id ? null : id);
    };

    return (
        <section className="py-12 md:py-20 bg-zinc-50 dark:bg-zinc-900 transition-colors" id="book">
            <div className="max-w-5xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-14 md:mb-20 space-y-4">
                    <h6 className="text-[10px] uppercase tracking-[0.5em] text-accent font-bold">
                        Begin Your Journey
                    </h6>
                    <h2 className="font-display text-4xl md:text-6xl text-primary dark:text-white">
                        Book an Appointment
                    </h2>
                    <p className="text-secondary dark:text-zinc-400 font-light text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                        Select from an initial assessment or a complimentary discovery call to discuss how we can help you.
                    </p>
                </div>

                <div className="space-y-6 md:space-y-20">
                    {bookingOptions.map((opt) => {
                        const isOpen = openPanel === opt.id;

                        return (
                            <div
                                key={opt.id}
                                className="bg-white dark:bg-[#111] border border-zinc-100 dark:border-zinc-800 shadow-sm overflow-hidden"
                            >
                                {/* Header — clickable on mobile to toggle */}
                                <button
                                    onClick={() => togglePanel(opt.id)}
                                    className="w-full text-left px-6 md:px-8 py-5 md:py-6 border-b border-zinc-100 dark:border-zinc-800 md:cursor-default"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <span className="material-symbols-outlined text-accent text-2xl">{opt.icon}</span>
                                            <div>
                                                <h3 className="font-display text-xl md:text-2xl italic text-primary dark:text-white">{opt.title}</h3>
                                                <p className="text-secondary dark:text-zinc-500 text-sm font-light mt-1 hidden sm:block">{opt.description}</p>
                                            </div>
                                        </div>
                                        {/* Mobile expand/collapse indicator */}
                                        <span className={`material-symbols-outlined text-zinc-400 text-2xl md:hidden transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                            expand_more
                                        </span>
                                    </div>

                                    {/* Mobile tap hint when closed */}
                                    {!isOpen && (
                                        <div className="mt-3 md:hidden flex items-center justify-center gap-2 py-3 bg-zinc-50 dark:bg-zinc-800/50 text-xs uppercase tracking-[0.2em] font-semibold text-primary dark:text-white">
                                            <span className="material-symbols-outlined text-base">touch_app</span>
                                            Tap to Book
                                        </div>
                                    )}
                                </button>

                                {/* Desktop: always show iframe */}
                                <div className="hidden md:block p-8">
                                    <iframe
                                        id={`${opt.id}-desktop`}
                                        src={opt.embedUrl}
                                        frameBorder="0"
                                        scrolling="auto"
                                        width="100%"
                                        height="700"
                                        style={{
                                            pointerEvents: 'auto',
                                            border: 'none',
                                            width: '100%',
                                            display: 'block',
                                        }}
                                        title={`Book ${opt.title}`}
                                    />
                                </div>

                                {/* Mobile: collapsible iframe */}
                                <div
                                    className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="p-2">
                                        {isOpen && (
                                            <iframe
                                                id={opt.id}
                                                src={opt.embedUrl}
                                                frameBorder="0"
                                                scrolling="auto"
                                                width="100%"
                                                height="700"
                                                style={{
                                                    pointerEvents: 'auto',
                                                    border: 'none',
                                                    width: '100%',
                                                    display: 'block',
                                                }}
                                                title={`Book ${opt.title}`}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Booking;
