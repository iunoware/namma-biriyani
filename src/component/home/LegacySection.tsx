"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const LegacySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      tl.fromTo(
        leftPanelRef.current,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
      ).fromTo(
        rightPanelRef.current,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.4, ease: "power3.out" },
        "-=0.8",
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 bg-[#FAF9F6] overflow-hidden"
    >
      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

      <div className="max-w-7xl mx-auto px-6 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10  h-full">
          {/* Left Panel: Content */}
          <div
            ref={leftPanelRef}
            className="w-full lg:w-1/2 flex flex-col items-center text-left"
          >
            <div className="space-y-6 lg:space-y-8">
              <span className="inline-block text-[10px] md:text-xs font-bold tracking-[0.4em] text-zinc-400 uppercase">
                From the House of
              </span>

              <h2 className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold text-zinc-900 tracking-tight leading-[0.9]">
                JKans, <br />
                Madurai
              </h2>

              <div className="w-12 h-px bg-zinc-200" />

              <p className="font-body text-zinc-600 text-lg md:text-xl leading-relaxed max-w-md font-medium">
                Built on years of real kitchen experience, Namma Biryani carries
                forward the same commitment to quality, now with a clear focus
                on honest food and consistency.
              </p>
            </div>
          </div>

          {/* Right Panel: Visual Balance */}
          <div
            ref={rightPanelRef}
            className="w-full lg:w-1/2 flex items-center justify-center "
          >
            <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
              {/* Optional background decorative element */}
              <div className="absolute inset-0 rounded-full border border-zinc-100 scale-125 lg:scale-150 opacity-50" />

              <div className="relative">
                <Image
                  src="/images/logo-2.png"
                  alt="JKans Heritage Logo"
                  width={300}
                  height={150}
                  className="w-auto h-36 md:h-44 object-contain"
                />
              </div>

              {/* Minimal geometric accent */}
              <div className="absolute top-0 right-0 w-8 h-px bg-zinc-200" />
              <div className="absolute top-0 right-0 w-px h-8 bg-zinc-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegacySection;
