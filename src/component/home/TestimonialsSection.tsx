"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
    {
        rating: 5,
        text: "The biriyani is absolutely outstanding — rich, aromatic, and full of flavour. Easily one of the best in town.",
        author: "Arun K",
    },
    {
        rating: 5,
        text: "Loved the variety here. From biriyani to tandoori and Chinese, everything tasted fresh and perfectly cooked.",
        author: "Priya S",
    },
    {
        rating: 5,
        text: "Great food, generous portions, and authentic flavours. The seeraga samba biriyani is a must-try.",
        author: "Rahman M",
    },
];

const TestimonialsSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!containerRef.current) return;

            const elements = Array.from(containerRef.current.children);

            gsap.fromTo(
                elements,
                {
                    y: 40,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );
        },
        { scope: sectionRef }
    );

    return (
        <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-zinc-900 leading-tight">
                        What Our <span className="text-brown">Customers Say</span>
                    </h2>
                    <div className="mt-6 h-1 w-20 bg-brown/20 mx-auto rounded-full"></div>
                </div>

                {/* Testimonials Grid */}
                <div
                    ref={containerRef}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
                >
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-zinc-50/50 p-8 rounded-3xl border border-zinc-100 shadow-sm flex flex-col justify-between"
                        >
                            <div>
                                {/* Stars */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="w-5 h-5 text-brown fill-current"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Text */}
                                <p className="text-zinc-700 text-lg leading-relaxed italic font-body mb-8">
                                    “{item.text}”
                                </p>
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="h-0.5 w-6 bg-brown/30"></div>
                                <span className="font-heading font-semibold text-zinc-900 tracking-wide">
                                    {item.author}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
