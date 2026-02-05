"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SignatureBiriyaniReveal = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        defaults: {
          ease: "power2.out",
          duration: 1.4,
        },
      });

      tl.fromTo(
        [labelRef.current, headingRef.current],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2 },
      )
        .fromTo(
          imageRef.current,
          { scale: 0.95, opacity: 0 },
          { scale: 1, opacity: 1 },
          "-=0.8",
        )
        .fromTo(
          paragraphRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1 },
          "-=1",
        )
        .fromTo(
          buttonRef.current,
          { y: 10, opacity: 0 },
          { y: 0, opacity: 1 },
          "-=1",
        );

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#fdfcfb] py-24 md:py-32 lg:py-48 flex flex-col items-center text-center overflow-hidden"
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        {/* Label */}
        <span
          ref={labelRef}
          className="font-body text-sm font-bold tracking-[0.3em] text-brown uppercase mb-4 block"
        >
          Our Signature
        </span>

        {/* Heading */}
        <h2
          ref={headingRef}
          className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] text-zinc-900 mb-12 lg:mb-20 tracking-tight"
        >
          The Biriyani We’re{" "}
          <span className="text-brown italic">Known For</span>
        </h2>

        {/* Biriyani Image */}
        <div
          ref={imageRef}
          className="relative w-full aspect-video mb-12 lg:mb-20 rounded-2xl overflow-hidden shadow-2xl shadow-black/5"
        >
          <Image
            src="/images/biryani-1.png"
            alt="Signature Seeraga Samba Biriyani"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1200px"
          />
          {/* Subtle light overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/10 pointer-events-none" />
        </div>

        {/* Paragraph */}
        <div className="max-w-2xl mx-auto mb-12">
          <p
            ref={paragraphRef}
            className="font-body text-lg md:text-xl leading-relaxed text-zinc-600 md:leading-loose"
          >
            Slow-cooked with fragrant seeraga samba rice, layered spices, and
            traditional techniques, our biriyani is rich, aromatic, and deeply
            satisfying. Cooked in classic copper vessels and served hot — this
            is the dish that keeps our tables full.
          </p>
        </div>

        {/* CTA Button */}
        <div ref={buttonRef}>
          <button className="group relative overflow-hidden rounded-full border border-brown px-8 py-4 transition-all hover:bg-brown md:px-10 md:py-5">
            <span className="relative z-10 font-body text-base font-semibold tracking-wide text-brown transition-colors group-hover:text-white md:text-lg">
              View Biriyani Menu
            </span>
          </button>
        </div>
      </div>

      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-[100vw] bg-brown/2 rounded-full blur-3xl pointer-events-none -z-10" />
    </section>
  );
};

export default SignatureBiriyaniReveal;
