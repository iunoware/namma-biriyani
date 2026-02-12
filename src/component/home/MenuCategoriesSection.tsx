"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const categories = [
  {
    title: "Biriyanis",
    hint: "Best chicken biryani in Madurai with signature seeraga samba & basmati specials",
    href: "/menu#biriyanis",
    image: "/images/DSC01788.JPG",
  },
  {
    title: "Chinese",
    hint: "Wok-fried classics & appetizers",
    href: "/menu#chinese",
    image: "/images/chinese.jpg",
  },
  {
    title: "Tandoori & Tikkas",
    hint: "Clay-oven roasted smoky delights",
    href: "/menu#tandoori",
    image: "/images/tandooro.jpg",
  },
  {
    title: "Parottas & South Indian",
    hint: "Flaky parottas & regional favorites",
    href: "/menu#south-indian",
    image: "/images/parota.jfif",
  },
  {
    title: "Bucket Biryani's",
    hint: "Perfect for family gatherings",
    href: "/menu#buckets",
    image: "/images/bucket.png",
  },
];

const MenuCategoriesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const headingRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Force refresh for accurate positioning
      ScrollTrigger.refresh();

      // Heading Reveal
      gsap.fromTo(
        headingRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 90%",
          },
        },
      );

      // Staggered Cards Reveal
      gsap.fromTo(
        ".menu-card",
        {
          y: 60,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="py-20 overflow-hidden">
      <div
        id="menu"
        className="mx-auto flex items-center justify-center max-w-7xl px-6 lg:px-10"
      >
        <div
          ref={headingRef}
          className="mb-12 lg:mb-20 flex items-center justify-center flex-col text-center lg:text-left"
        >
          <h2 className="font-heading text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">
            Explore <span className="text-brown">Our Menu</span>
          </h2>
          <div className="mt-4 h-1 w-40 bg-brown/20 mx-auto lg:mx-0 rounded-full"></div>
        </div>
      </div>

      <div
        ref={cardsRef}
        className="flex md:flex-row flex-col gap-4 w-full px-6"
      >
        {categories.map((category, index) => {
          const isActive = activeIndex === index;

          return (
            <a
              href="/images/menu.pdf"
              target="_blank"
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(0)}
              style={{
                backgroundImage: `url(${category.image})`,
                flex: isActive ? 3 : 1,
              }}
              className={`
                  menu-card relative group h-125 overflow-hidden
                  transition-all duration-700 ease-in-out
                  bg-cover bg-center rounded-2xl
                  flex flex-col justify-end p-6 cursor-pointer
                `}
            >
              {/* overlay */}
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-500" />

              {/* content */}
              <h2
                className={`relative z-10 text-white font-semibold transition-all duration-500
                ${isActive ? "text-4xl" : "text-2xl"}
              `}
              >
                {category.title}
              </h2>

              <p
                className={`relative z-10 mt-2 max-w-sm text-white/80 transition-all duration-500
                ${isActive ? "opacity-100 text-lg" : "opacity-0 text-sm"}
              `}
              >
                {category.hint}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default MenuCategoriesSection;
