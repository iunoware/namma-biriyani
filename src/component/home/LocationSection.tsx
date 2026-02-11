"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const LocationSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const infoPanelRef = useRef<HTMLDivElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // Opening hours data
  const hours = [
    { days: "Mon - Thu", time: "11:00 AM - 10:30 PM" },
    { days: "Fri - Sun", time: "11:00 AM - 11:30 PM" },
  ];

  useGSAP(
    () => {
      // Entrance animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      tl.from(".info-block", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(mapContainerRef.current, {
        scale: 0.95,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: mapContainerRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative  py-12 lg:py-0 bg-white overflow-hidden"
    >
      <div className="flex items-center justify-center flex-col lg:flex-row w-full min-h-[85vh]">
        {/* Left Column: Sticky Information Panel */}
        <div className="w-full lg:w-[40%] px-4 sm:px-6 py-12 lg:py-24 flex flex-col items-center lg:items-start justify-start relative z-10">
          <div
            ref={infoPanelRef}
            className="static lg:sticky top-12 lg:top-32 w-full max-w-md mx-auto lg:mx-0"
          >
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-zinc-100 backdrop-blur-sm info-block">
              {/* Eyebrow */}
              <span className="inline-block text-xs font-bold tracking-[0.2em] text-brown uppercase mb-4">
                Visit Us
              </span>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-heading font-black text-zinc-900 mb-8 leading-tight">
                Find Us <br />
                <span className="text-dark-brown font-normal italic">Here</span>
              </h2>

              {/* Information Blocks */}
              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-4 info-block">
                  <div className="shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-brown/5 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-brown"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">
                      Location
                    </h4>
                    <p className="text-zinc-700 font-medium text-lg leading-relaxed">
                      Rasi Towers, Bypass Rd, near Aristo Hospital, below
                      Domino's Pizza Madurai,
                      <br />
                      Tamil Nadu 625001.
                    </p>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex gap-4 info-block">
                  <div className="shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-brown/5 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-brown"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">
                      Opening Hours
                    </h4>
                    <div className="space-y-1">
                      {hours.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between gap-8 py-1"
                        >
                          <span className="text-zinc-500 font-medium">
                            {item.days}
                          </span>
                          <span className="text-zinc-900 font-bold">
                            {item.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div className="flex gap-4 info-block">
                  <div className="shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-brown/5 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-brown"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">
                      Contact
                    </h4>
                    <p className="text-zinc-900 font-bold text-xl">
                      +91 98765 43210
                    </p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mt-12 info-block">
                <a
                  href="https://maps.app.goo.gl/7U2HB8BCAqnKdjfA9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-brown text-white font-bold py-4 px-6 rounded-2xl text-center shadow-lg shadow-brown/20 hover:bg-dark-brown transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
                >
                  Get Directions
                </a>
                <a
                  href="tel:+919876543210"
                  className="flex-1 bg-white text-zinc-900 font-bold py-4 px-6 rounded-2xl text-center border-2 border-zinc-100 hover:border-brown/30 transition-all duration-300 active:scale-95"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Google Map */}
        <div
          ref={mapContainerRef}
          className="w-full lg:w-[60%] h-125 min-h-162.5 relative"
        >
          <div className="w-full h-full lg:p-8">
            <div className="w-full h-full rounded-b-[2.5rem] lg:rounded-2xl overflow-hidden shadow-2xl bg-zinc-100 border border-zinc-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125763.90995602818!2d78.00434534335939!3d9.9237808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5004a14ad4b%3A0x78103c6ed126d4fa!2sNamma%20Briyani!5e0!3m2!1sen!2sin!4v1770790123153!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter:
                    "grayscale(1) contrast(1.1) brightness(1.1) opacity(0.9)",
                }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="hover:grayscale-0 transition-all duration-1000 ease-in-out"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
