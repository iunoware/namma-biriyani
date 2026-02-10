"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const EnnaiKari = () => {
  const containerRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        ".cuisine-reveal",
        {
          opacity: 0,
          y: 60,
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
          duration: 0.5,
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
      className="py-20 flex items-center justify-center overflow-hidden"
    >
      <div className="bg-brown/50 max-w-375 p-5  grid md:grid-cols-2 grid-cols-1 w-[90vw] md:h-110 rounded-2xl overflow-hidden relative">
        <div className="flex flex-col space-y-2  md:translate-x-30 items-start justify-center">
          <p className="text-lg font-bold  font-accent">Signature Starter</p>
          <h1 className="text-4xl cuisine-reveal font-bold text-dark-brown">
            Usilampatti Ennai Kari
          </h1>
          <p className="text-lg cuisine-reveal max-w-lg pt-5">
            A fiery Usilampatti classic cooked in pure gingelly oil with
            hand-ground spices and bold Tamil Nadu flavors. Rich, aromatic, and
            unforgettable — our top-selling starter for a reason.
          </p>
          <button className="group cuisine-reveal mt-5 cursor-pointer relative overflow-hidden rounded-full bg-dark-brown px-8 py-4 transition-all hover:pr-12 md:p-4">
            <span className="relative  z-10 font-body text-base font-semibold tracking-wide text-white md:text-lg">
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
        <div className="relative flex items-center justify-center">
          <img
            ref={imageContainerRef}
            src="/images/yennai-kaari.png"
            alt="Best Hotel in Madurai"
            className="md:h-70 md:mt-0 mt-20 h-50 w-auto z-10 hover:scale-110 transition-all duration-500"
          />
          <div className="absolute w-fit -top-5 -right-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="md:h-70  w-fit "
              viewBox="0 0 609 398"
              fill="none"
            >
              <path
                d="M341.809 0H207.292L14.5616 273.493C-22.32 325.829 15.1117 398 79.138 398H621.821V294.125H151.692L341.809 0Z"
                fill="#aa0503"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnnaiKari;
