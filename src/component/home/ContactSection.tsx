"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    useGSAP(
        () => {
            // Reveal animations
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
            });

            tl.from(".accent-text", {
                x: -50,
                opacity: 0,
                rotate: -20,
                duration: 1,
                ease: "back.out(1.7)",
            })
                .from(
                    ".contact-heading",
                    {
                        y: 100,
                        opacity: 0,
                        duration: 1.2,
                        ease: "power4.out",
                    },
                    "-=0.6",
                )
                .from(
                    ".contact-subtext",
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.8",
                )
                .from(
                    ".form-container",
                    {
                        scale: 0.9,
                        x: 50,
                        opacity: 0,
                        duration: 1.5,
                        ease: "power2.out",
                    },
                    "-=1",
                )
                .from(
                    ".form-field",
                    {
                        y: 20,
                        opacity: 0,
                        stagger: 0.15,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.5",
                );

            // Subtle parallax on the background elements
            gsap.to(".bg-element", {
                y: -100,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });
        },
        { scope: sectionRef },
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        // Simulate API call
        setTimeout(() => {
            setStatus("success");
        }, 2000);
    };

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="relative w-full min-h-screen flex flex-col md:flex-row bg-[#FAF7F2] overflow-hidden py-20 md:py-20"
        >
            {/* Decorative Background Elements */}
            <div className="bg-element absolute top-[-10%] right-[-5%] w-96 h-96 bg-brown/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="bg-element absolute bottom-[-10%] left-[-5%] w-125 h-125 bg-dark-brown/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Left Side: Typography Driven Content */}
            <div className="md:w-[55%] w-full px-6 md:px-24 flex flex-col justify-center relative z-10">
                <div className="relative mb-6">
                    <span className="accent-text font-accent text-4xl md:text-3xl text-brown mb-4 block origin-left">
                        Vanakkam
                    </span>
                    <h2 className="contact-heading font-heading text-7xl md:text-[5rem] text-dark-brown leading-[0.85] tracking-tighter filter drop-shadow-sm">
                        Let&apos;s Talk Food.
                    </h2>
                </div>

                <p className="contact-subtext mt-10 text-xl text-gray-700 max-w-lg font-body leading-relaxed">
                    From grand celebrations to intimate cravings, we bring the heart of
                    traditional Biryani to your table.
                </p>

                <div className="mt-16 flex flex-col md:flex-row gap-8 md:gap-16 contact-subtext">
                    <div className="group cursor-pointer">
                        <span className="block text-xs uppercase tracking-[0.2em] text-gray-400 mb-2 font-body font-semibold">
                            Bulk Orders & Catering
                        </span>
                        <div className="flex flex-col items-center gap-3">
                            <span className="text-2xl font-heading text-dark-brown group-hover:text-brown transition-colors duration-300 underline underline-offset-8 decoration-gray-200 group-hover:decoration-brown">
                                +91 98765 43210
                            </span>
                        </div>
                    </div>

                    <div className="group cursor-pointer">
                        <span className="block text-xs uppercase tracking-[0.2em] text-gray-400 mb-2 font-body font-semibold">
                            Enquiries
                        </span>
                        <div className="flex items-center gap-3">
                            <span className="text-2xl font-heading text-dark-brown group-hover:text-brown transition-colors duration-300 underline underline-offset-8 decoration-gray-200 group-hover:decoration-brown">
                                hello@nammabiryani.com
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Floating Form */}
            <div className="md:w-[40%] w-full px-6 md:px-12 flex items-center justify-center relative z-20 mt-16 md:mt-0">
                <div className="form-container relative w-full max-w-md p-8 md:p-12 bg-white rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] border border-gray-100/50">
                    {status === "success" ? (
                        <div className="flex flex-col items-center text-center py-12">
                            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                                <svg
                                    className="w-10 h-10 text-green-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2.5}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>
                            <h3 className="font-heading text-4xl text-dark-brown">
                                All Done!
                            </h3>
                            <p className="text-gray-600 mt-4 text-lg font-body">
                                We&apos;ve received your request. Expect a call while the spices
                                are still fresh.
                            </p>
                            <button
                                onClick={() => setStatus("idle")}
                                className="mt-10 px-8 py-3 rounded-full border border-gray-200 text-gray-500 hover:text-dark-brown hover:border-dark-brown transition-all font-body font-medium"
                            >
                                Send another enquiry
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="mb-12">
                                <h3 className="font-heading text-4xl text-dark-brown">
                                    Say Hello
                                </h3>
                                <p className="text-gray-500 font-body mt-2">
                                    Tell us what you have in mind.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                                <div className="form-field group relative">
                                    <input
                                        type="text"
                                        required
                                        placeholder=" "
                                        className="peer block w-full bg-transparent border-b border-gray-200 py-3 text-lg font-body focus:outline-none focus:border-brown transition-all duration-300"
                                    />
                                    <label className="absolute left-0 top-3 text-gray-400 font-body transition-all duration-300 pointer-events-none peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-brown peer-focus:font-semibold peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-400 capitalize">
                                        Your Name
                                    </label>
                                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-brown transition-all duration-500 group-focus-within:w-full" />
                                </div>

                                <div className="form-field group relative">
                                    <input
                                        type="tel"
                                        required
                                        placeholder=" "
                                        className="peer block w-full bg-transparent border-b border-gray-200 py-3 text-lg font-body focus:outline-none focus:border-brown transition-all duration-300"
                                    />
                                    <label className="absolute left-0 top-3 text-gray-400 font-body transition-all duration-300 pointer-events-none peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-brown peer-focus:font-semibold peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-400">
                                        Phone Number
                                    </label>
                                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-brown transition-all duration-500 group-focus-within:w-full" />
                                </div>

                                <div className="form-field group relative">
                                    <textarea
                                        rows={3}
                                        required
                                        placeholder=" "
                                        className="peer block w-full bg-transparent border-b border-gray-200 py-3 text-lg font-body focus:outline-none focus:border-brown transition-all duration-300 resize-none"
                                    />
                                    <label className="absolute left-0 top-3 text-gray-400 font-body transition-all duration-300 pointer-events-none peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-brown peer-focus:font-semibold peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-400">
                                        Your Message
                                    </label>
                                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-brown transition-all duration-500 group-focus-within:w-full" />
                                </div>

                                <div className="form-field pt-2">
                                    <button
                                        disabled={status === "loading"}
                                        className="group relative w-full h-16 bg-dark-brown text-white rounded-2xl font-heading text-xl overflow-hidden transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_20px_40px_-10px_rgba(170,5,3,0.3)] hover:shadow-[0_20px_40px_-5px_rgba(170,5,3,0.4)]"
                                    >
                                        <span
                                            className={`flex items-center justify-center gap-3 transition-all duration-500 ${status === "loading"
                                                    ? "-translate-y-full opacity-0"
                                                    : "translate-y-0 opacity-100"
                                                }`}
                                        >
                                            Send Enquiry
                                            <svg
                                                className="w-6 h-6 transform group-hover:translate-x-1 transition-transform"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                />
                                            </svg>
                                        </span>
                                        <span
                                            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${status === "loading"
                                                    ? "translate-y-0 opacity-100"
                                                    : "translate-y-full opacity-0"
                                                }`}
                                        >
                                            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
