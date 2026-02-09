"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CuisineIntroSplit = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
        },
      });

      tl.fromTo(
        textContentRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
      ).fromTo(
        imageContainerRef.current,
        { x: 50, opacity: 0, scale: 0.95 },
        { x: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" },
        "-=1",
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-white py-20 lg:py-32"
    >
      <div id="about" className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column: Text Content */}
          <div ref={textContentRef} className="flex flex-col items-start">
            <div className="mb-6 flex items-center space-x-4">
              <div className="h-px w-8 bg-brown md:w-12"></div>
              <span className="font-body text-sm font-bold tracking-[0.2em] text-brown uppercase">
                Taste of Tradition
              </span>
            </div>

            <h2 className="font-heading! text-4xl font-bold leading-[1.1] text-zinc-900 md:text-5xl lg:text-6xl">
              One Kitchen. <br />
              <span className="text-brown italic">Many Flavours.</span>
            </h2>

            <p className="font-body mt-8 text-lg leading-relaxed text-zinc-600 md:text-xl md:leading-loose">
              From iconic biriyanis layered with bold spices to sizzling
              tandoors fresh off the grill, our kitchen is all about flavour
              that hits right. Every dish is crafted with care, rich aromas, and
              the comfort you keep coming back for.
            </p>
            <p className="font-body mt-8 text-lg leading-relaxed text-zinc-600 md:text-xl md:leading-loose">
              From comforting Chinese favourites and flaky parottas to hearty
              North Indian curries, everything is cooked fresh every day — hot,
              generous, and full of character.
            </p>

            <div className="mt-10 md:mt-12">
              <button className="group relative overflow-hidden rounded-full bg-brown px-8 py-4 transition-all hover:pr-12 md:p-5">
                <span className="relative z-10 font-body text-base font-semibold tracking-wide text-white md:text-lg">
                  Explore Our Menu
                </span>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 transition-all group-hover:opacity-100 group-hover:right-6">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div
            ref={imageContainerRef}
            className="relative order-first lg:order-last"
          >
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl shadow-2xl shadow-brown/10 lg:aspect-3/4">
              {/* Fallback image if dynamic one fails, though we aim for high quality */}
              <Image
                src="/images/restaurant_cuisine_spread_1770293763835.png"
                alt="Assorted Indian Cuisine Platter"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />

              {/* Subtle Overlay for Premium Feel */}
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 -z-10 h-32 w-32 rounded-2xl bg-brown/10 lg:-bottom-10 lg:-left-10 lg:h-48 lg:w-48"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuisineIntroSplit;
