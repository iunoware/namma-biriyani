"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HtmlContext } from "next/dist/server/route-modules/pages/vendored/contexts/entrypoints";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CuisineIntroSplit = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const summaRef = useRef<HTMLDivElement>(null);

  function smoothScroll(href: string) {
    const section = document.getElementById(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        ".cuisine-reveal",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        },
      ).fromTo(
        imageContainerRef.current,
        {
          opacity: 0,
          x: 40,
          scale: 0.95,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.6",
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-x-clip overflow-hidden bg-white py-20 lg:py-32"
    >
      <div id="about" className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start relative z-10">
            <div className="cuisine-reveal mb-6 flex items-center space-x-4">
              <div className="h-px w-8 bg-brown md:w-12"></div>
              <span className="font-body text-sm font-bold tracking-[0.2em] text-brown uppercase">
                Taste of Tradition
              </span>
            </div>

            <h2 className="cuisine-reveal font-heading text-4xl font-bold leading-[1.1] text-zinc-900 md:text-5xl lg:text-6xl text-pretty">
              One Kitchen. <br />
              <span className="text-brown italic">Many Flavours.</span>
            </h2>

            <p className="cuisine-reveal font-body mt-8 text-lg leading-relaxed text-zinc-600 md:text-xl md:leading-loose text-balance">
              From iconic biriyanis layered with bold spices to sizzling
              tandoors fresh off the grill, our kitchen is all about flavour
              that hits right. Every dish is crafted with care, rich aromas, and
              the comfort you keep coming back for.
            </p>
            <p className="cuisine-reveal font-body mt-8 text-lg leading-relaxed text-zinc-600 md:text-xl md:leading-loose text-balance">
              From comforting Chinese favourites and flaky parottas to hearty
              North Indian curries, everything is cooked fresh every day — hot,
              generous, and full of character.
            </p>

            <div className="cuisine-reveal mt-10 md:mt-12">
              <button
                onClick={() => smoothScroll("menu")}
                className="group cursor-pointer relative overflow-hidden rounded-full bg-brown px-8 py-4 transition-all hover:pr-12 md:p-3"
              >
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
            className="relative order-first lg:order-last z-10"
          >
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl shadow-2xl shadow-brown/10 lg:aspect-3/4">
              <Image
                src="/images/restaurant_cuisine_spread_1770293763835.png"
                alt="Hyderabadi Chicken Biryani Near Me - Signature Flavors"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
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
