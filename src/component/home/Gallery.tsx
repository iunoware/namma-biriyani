"use client";
import React from "react";
import Image from "next/image";

const images = [
  {
    src: "/images/cuisine_spread_1770293825629.png",
    alt: "Namma Biriyani Cuisine Spread",
    className: "col-span-12 md:col-span-6 md:row-span-2 h-[400px] md:h-full",
  },
  {
    src: "/images/cuisine_montage_premium_1770293849118.png",
    alt: "Premium Food Montage",
    className: "col-span-12 md:col-span-6 h-[300px] md:h-full",
  },
  {
    src: "/images/indian_cuisine_spread_1770293924843.png",
    alt: "Authentic Indian Flavours",
    className: "col-span-6 md:col-span-3 h-[250px] md:h-full",
  },
  {
    src: "/images/restaurant_spread_premium_1770293901185.png",
    alt: "Restaurant Atmosphere",
    className: "col-span-6 md:col-span-3 h-[250px] md:h-full",
  },
];

const Gallery = () => {
  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-zinc-900 leading-tight">
            A Glimpse <span className="text-brown">From Our Kitchen</span>
          </h2>
          <div className="mt-6 h-1 w-20 bg-brown/30 rounded-full"></div>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-12 gap-4 md:grid-rows-[400px_350px]">
          {images.map((img, index) => (
            <div
              key={index}
              className={`
                relative overflow-hidden rounded-2xl shadow-sm group
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
                sizes="(max-w-768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
