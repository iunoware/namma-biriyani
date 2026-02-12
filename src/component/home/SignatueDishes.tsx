"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Interiors() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Left Image Animation
      gsap.fromTo(
        leftImageRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftImageRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Right Image Animation
      gsap.fromTo(
        rightImageRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightImageRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Center Content Animation
      gsap.fromTo(
        textContentRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textContentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-24 lg:py-10 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
          {/* Left Image - Sited lower for asymmetry */}
          <div
            ref={leftImageRef}
            className="w-full rounded-2xl lg:w-1/4 h-100 lg:h-110 relative order-2 lg:order-1 lg:mt-24 shadow-2xl overflow-hidden group"
          >
            <Image
              src="/images/biryani-2.jpg"
              alt="Best Chicken Biryani in Madurai"
              fill
              className="object-cover rounded-2xl grayscale-0 hover:grayscale transition-all duration-1000 scale-105 group-hover:scale-100"
            />
          </div>

          {/* Center Text Block */}
          <div
            ref={textContentRef}
            className="w-full lg:w-2/5 text-center order-1 lg:order-2 z-10 px-4"
          >
            <span className="block font-sans text-xs md:text-sm uppercase tracking-[0.4em] font-bold text-red mb-8">
              Our Signature
            </span>

            <div className="w-12 h-px bg-brand-red mx-auto mb-8"></div>

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading text-black leading-tight mb-10">
              The Biriyani We’re <br />
              <span className="italic text-dark-brown">Known For</span>
            </h2>

            <p className="font-body text-black/60 text-lg md:text-xl leading-relaxed max-w-lg mx-auto mb-12">
              Slow-cooked with fragrant seeraga samba rice, layered spices, and
              traditional techniques, our biryani is rich, aromatic, and deeply
              satisfying. Cooked in classic copper vessels and served hot — this
              is the best biryani in Madurai for lunch or dinner.
            </p>

            <div className="relative group inline-block">
              <a
                href="/images/menu.pdf"
                target="_blank"
                className=" font-heading cursor-pointer text-[13px] font-semibold tracking-widest uppercase text-black group-hover:text-brown transition-colors duration-300"
              >
                View Biryani Menu
              </a>
              <div className="absolute -bottom-1 left-0 w-full h-px bg-brown group-hover:bg-dark-brown scale-x-100 group-hover:scale-x-110 transition-all duration-300"></div>
            </div>
          </div>

          {/* Right Image - Sited higher for asymmetry */}
          <div
            ref={rightImageRef}
            className="w-full rounded-2xl lg:w-1/4 h-100 lg:h-110 relative order-3 lg:mb-24 shadow-2xl overflow-hidden group"
          >
            <Image
              src="/images/bucket.png"
              alt="Best Bucket Biryani Madurai"
              fill
              className="object-cover rounded-2xl object-left grayscale-0 hover:grayscale transition-all duration-1000 scale-105 group-hover:scale-100"
            />
          </div>
        </div>
      </div>

      {/* Decorative vertical line accent */}
      <div className="absolute hidden lg:block left-1/2 bottom-0 -translate-x-1/2 h-24 w-px bg-brand-red/20"></div>
    </section>
  );
}
