"use client";

import React from "react";
import Link from "next/link";

const categories = [
  {
    title: "Biriyanis",
    hint: "Signature seeraga samba & basmati specials",
    href: "/menu#biriyanis",
    isPrimary: true,
  },
  {
    title: "Chinese",
    hint: "Wok-fried classics & appetizers",
    href: "/menu#chinese",
    isPrimary: true,
  },
  {
    title: "Tandoori & Tikkas",
    hint: "Clay-oven roasted smoky delights",
    href: "/menu#tandoori",
    isPrimary: true,
  },
  {
    title: "Parottas & South Indian",
    hint: "Flaky parottas & regional favorites",
    href: "/menu#south-indian",
    isPrimary: true,
  },
  {
    title: "North Indian Curries",
    hint: "Rich gravies & slow-cooked gems",
    href: "/menu#north-indian",
    isPrimary: true,
  },
  {
    title: "Bucket Biriyanis",
    hint: "Perfect for family gatherings",
    href: "/menu#buckets",
    isPrimary: true,
  },
];

const MenuCategoriesSection = () => {
  return (
    <section className="relative w-full bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Heading */}
        <div className="mb-12 lg:mb-20 text-center lg:text-left">
          <h2 className="font-heading text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">
            Explore <span className="text-brown">Our Menu</span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-brown/20 mx-auto lg:mx-0 rounded-full"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4 lg:grid-rows-2">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className={`group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-zinc-100 bg-[#FAFAFA] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brown/30 hover:shadow-xl hover:shadow-brown/5 focus:outline-none focus:ring-2 focus:ring-brown/50 ${
                category.isPrimary
                  ? "col-span-2 row-span-1 lg:row-span-2 min-h-[160px] lg:min-h-full bg-linear-to-br from-[#FFF9F5] to-white"
                  : "aspect-square lg:aspect-auto min-h-[140px]"
              }`}
            >
              {/* Subtle background decoration for primary tile */}
              {category.isPrimary && (
                <div className="absolute top-0 right-0 h-32 w-32 translate-x-1/4 -translate-y-1/4 rounded-full bg-brown/5 transition-transform duration-700 group-hover:scale-150" />
              )}

              <div className="relative z-10">
                <h3
                  className={`font-heading text-xl font-bold text-zinc-900 transition-colors duration-300 group-hover:text-brown md:text-2xl ${category.isPrimary ? "lg:text-4xl" : ""}`}
                >
                  {category.title}
                </h3>
                <p className="font-body mt-2 text-xs font-medium uppercase tracking-widest text-zinc-500 md:text-sm">
                  {category.hint}
                </p>
              </div>

              {/* Action Indicator */}
              <div className="absolute right-6 bottom-6 translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-brown"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuCategoriesSection;
