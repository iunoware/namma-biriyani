"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  {
    title: "Rooted in Tradition",
    description:
      "From seeraga samba biriyanis to classic curries, every dish is made with time-honoured recipes and bold, honest spices.",
    icon: (
      <svg
        className="w-10 h-10 text-brown"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    title: "Fresh, Every Single Day",
    description:
      "No shortcuts, no reheating. Everything is prepared fresh every day to deliver flavour you can taste.",
    icon: (
      <svg
        className="w-10 h-10 text-brown"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.728 0A9 9 0 115.636 5.636m12.728 12.728A9 9 0 115.636 17.656"
        />
      </svg>
    ),
  },
  {
    title: "One Place, Many Cravings",
    description:
      "Biriyanis, Chinese, tandoori, parottas, North Indian favourites — there’s something here for every mood and moment.",
    icon: (
      <svg
        className="w-10 h-10 text-brown"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
];

const WhyChooseUsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const elements = containerRef.current.children;

      gsap.from(elements, {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-zinc-900 mb-6">
            Why <span className="text-brown">Choose Us</span>
          </h2>
          <p className="max-w-xl mx-auto text-lg md:text-xl text-zinc-600 font-body">
            Because great food starts with doing things the right way.
          </p>
          <div className="mt-8 h-1 w-24 bg-brown/20 mx-auto rounded-full"></div>
        </div>

        {/* Feature Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col transition-all duration-200 hover:bg-brown/10 rounded-2xl p-10 h-fit items-center text-center ${index == 1 ? "md:translate-y-30!" : ""}`}
            >
              <div className="mb-8 mt-10 p-4 rounded-2xl bg-dark-brown/15">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-heading font-bold text-zinc-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-zinc-600 leading-relaxed font-body text-balance">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
