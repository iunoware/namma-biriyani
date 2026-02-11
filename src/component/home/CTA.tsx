"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
          ".form-container",
          {
            scale: 0.9,
            x: 50,
            opacity: 0,
            duration: 1.5,
            ease: "power2.out",
          },
          "-=1",
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
  return (
    <div
      ref={sectionRef}
      className="min-h-screen pb-20 bg-element relative bg-[url(/images/cta-bg.jpeg)] bg-cover bg-center w-full flex flex-col items-center justify-center bg-dark-brown overflow-hidden"
    >
      <div className="pt-20 flex flex-col items-center justify-center">
        <p className="text-center accent-text text-3xl font-accent text-dark-brown font-bold">
          Bulk Orders
        </p>
        <h3 className="md:text-8xl contact-heading text-5xl  tracking-tighter text-white text-center font-bold">
          Food For <br />
          Every <span className="italic text-dark-brown"> Occasions</span>
        </h3>
      </div>
      <div className="flex justify-center">
        <img
          src="/images/biryani-1.png"
          alt=""
          className="md:-translate-y-12 form-container md:h-90 w-auto object-center object-cover"
        />
      </div>
      <div className="flex justify-center">
        <button className="group relative -mt-15 cursor-pointer overflow-hidden rounded-full bg-dark-brown px-8 py-4 transition-all hover:pr-12 md:p-4 shadow-2xl">
          <span className="relative z-10 font-heading  font-semibold tracking-wide text-white md:text-lg">
            Get a Quote
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
  );
};

export default CTA;
