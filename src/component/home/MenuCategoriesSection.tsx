"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const categories = [
  {
    title: "Biriyanis",
    hint: "Signature seeraga samba & basmati specials",
    href: "/menu#biriyanis",
    image: "/images/cuisine_spread_1770293825629.png",
  },
  {
    title: "Chinese",
    hint: "Wok-fried classics & appetizers",
    href: "/menu#chinese",
    image: "/images/cuisine_montage_premium_1770293849118.png",
  },
  {
    title: "Tandoori & Tikkas",
    hint: "Clay-oven roasted smoky delights",
    href: "/menu#tandoori",
    image: "/images/indian_cuisine_spread_1770293924843.png",
  },
  {
    title: "Parottas & South Indian",
    hint: "Flaky parottas & regional favorites",
    href: "/menu#south-indian",
    image: "/images/indian_food_spread_premium_1770293876752.png",
  },
  {
    title: "Bucket Biriyanis",
    hint: "Perfect for family gatherings",
    href: "/menu#buckets",
    image: "/images/restaurant_spread_premium_1770293901185.png",
  },
];

const MenuCategoriesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-10">
      <div
        id="menu"
        className="mx-auto flex items-center justify-center max-w-7xl px-6 lg:px-10"
      >
        <div className="mb-12 lg:mb-20 flex items-center justify-center flex-col text-center lg:text-left">
          <h2 className="font-heading text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">
            Explore <span className="text-brown">Our Menu</span>
          </h2>
          <div className="mt-4 h-1 w-40 bg-brown/20 mx-auto lg:mx-0 rounded-full"></div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col gap-4 w-full px-6">
        {categories.map((category, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(0)}
              style={{
                backgroundImage: `url(${category.image})`,
                flex: isActive ? 3 : 1,
              }}
              className={`
                relative group h-125 overflow-hidden
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
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MenuCategoriesSection;
