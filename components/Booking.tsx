
import React, { useEffect, useRef } from 'react';

const BOOKING_URL = 'https://kb-physiotherapy.uk2.cliniko.com/bookings?business_id=1627486285331439892&practitioner_id=1627486282781303651&embedded=true';

const Booking: React.FC = () => {
    const frameRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        const handleMessage = (e: MessageEvent) => {
            if (typeof e.data !== 'string') return;

            if (e.data.includes('cliniko-bookings-resize')) {
                const height = Number(e.data.split(':')[1]);
                if (frameRef.current && Number.isFinite(height)) {
                    frameRef.current.style.height = Math.max(height, 600) + 'px';
                }
            }

            if (e.data.includes('cliniko-bookings-page')) {
                frameRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

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
                        Choose the appointment that suits you — from a complimentary discovery call to an initial
                        assessment, follow-up treatment, or sports massage. Available to book 24 hours a day, 7 days a week.
                    </p>
                </div>

                <div className="bg-white dark:bg-[#111] border border-zinc-100 dark:border-zinc-800 shadow-sm overflow-hidden">
                    <div className="p-2 md:p-8">
                        <iframe
                            ref={frameRef}
                            id="cliniko-bookings"
                            src={BOOKING_URL}
                            frameBorder="0"
                            scrolling="auto"
                            width="100%"
                            height="1000"
                            allow="payment"
                            style={{
                                pointerEvents: 'auto',
                                border: 'none',
                                width: '100%',
                                display: 'block',
                            }}
                            title="Book an appointment with KB Physiotherapy"
                        />
                    </div>
                </div>

                <p className="text-center text-secondary dark:text-zinc-500 text-xs font-light mt-6">
                    Booking not loading?{' '}
                    <a
                        href="https://kb-physiotherapy.uk2.cliniko.com/bookings"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                    >
                        Open the booking page in a new tab
                    </a>
                    .
                </p>
            </div>
        </section>
    );
};

export default Booking;
