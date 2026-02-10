"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const images = [
  {
    src: "/images/DSC01788.JPG",
    alt: "Namma Biriyani Cuisine Spread",
    className: "col-span-12 md:col-span-6 md:row-span-2 h-[400px] md:h-full",
  },
  {
    src: "/images/kola.JPG",
    alt: "Premium Food Montage",
    className: "col-span-12 md:col-span-6 h-[300px] md:h-full",
  },
  {
    src: "/images/indian_cuisine_spread_1770293924843.png",
    alt: "Authentic Indian Flavours",
    className: "col-span-6 md:col-span-3 h-[250px] md:h-full",
  },
  {
    src: "/images/dish-1.JPG",
    alt: "Restaurant Atmosphere",
    className: "col-span-6 md:col-span-3 h-[250px] md:h-full",
  },
];

const Gallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Force a refresh to catch accurate positions after Hero pinning
      ScrollTrigger.refresh();

      // Reveal Heading
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 90%",
          },
        },
      );

      // Staggered reveal for gallery cards
      gsap.fromTo(
        ".gallery-card",
        {
          opacity: 0,
          scale: 0.9,
          y: 40,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".gallery-grid",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div ref={headingRef} className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-zinc-900 leading-tight">
            A Glimpse <span className="text-brown">From Our Kitchen</span>
          </h2>
          <div className="mt-6 h-1 w-20 bg-brown/30 rounded-full"></div>
        </div>

        {/* Editorial Grid */}
        <div className="gallery-grid grid grid-cols-12 gap-4 md:grid-rows-[400px_350px]">
          {images.map((img, index) => (
            <div
              key={index}
              className={`
                  gallery-card relative overflow-hidden rounded-2xl shadow-sm group
                  transition-all duration-500 ease-out
                  hover:shadow-xl hover:-translate-y-1
                  ${img.className}
                `}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
