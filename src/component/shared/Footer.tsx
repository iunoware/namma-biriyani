"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const footerLinks = {
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Menu", href: "/menu" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ],
  contact: {
    address: "Plot No. 45, Bye Pass Road, Madurai - 625016",
    phone: "+91 98765 43210",
    email: "hello@nammabiriyani.com",
    hours: "Open Daily: 11:00 AM - 11:00 PM",
  },
  socials: [
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.324-1.325z" />
        </svg>
      ),
    },
    {
      name: "Google",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.96 3.4-2.12 4.52-1.48 1.48-3.76 3.08-7.84 3.08-6.4 0-11.64-5.2-11.64-11.6s5.24-11.6 11.64-11.6c3.48 0 6.04 1.36 7.92 3.16l2.32-2.32c-2.6-2.42-6.04-3.84-10.24-3.84-8.8 0-16 7.2-16 16s7.2 16 16 16c4.76 0 8.24-1.56 11.04-4.48 2.88-2.88 3.72-6.92 3.72-10.4 0-.68-.04-1.32-.12-1.92h-14.64z" />
        </svg>
      ),
    },
  ],
};

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.fromTo(
        containerRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          },
        },
      );
    },
    { scope: footerRef },
  );

  return (
    <footer
      ref={footerRef}
      className="bg-dark-brown text-zinc-400 font-body relative pt-20"
    >
      {/* Top Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent"></div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-6 lg:px-10 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="flex flex-col space-y-6">
            <Link
              href="/"
              className="inline-block transform transition-transform hover:scale-105 duration-300"
            >
              <Image
                src="/images/pot-1.png"
                alt="Namma Biriyani Logo"
                width={160}
                height={70}
                className="w-auto h-12 brightness-110"
              />
            </Link>
            <p className="text-zinc-500 text-lg leading-relaxed font-medium tracking-tight">
              Savour the{" "}
              <span className="text-zinc-300 italic">authentic essence</span> of
              tradition in every grain. Authentic Madurai flavours, crafted with
              passion.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-zinc-100 font-heading text-xs tracking-[0.3em] uppercase font-bold">
              Quick Links
            </h4>
            <ul className="flex flex-col space-y-4">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group relative inline-block transition-colors duration-300 hover:text-brown"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brown transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-zinc-100 font-heading text-xs tracking-[0.3em] uppercase font-bold">
              Contact Info
            </h4>
            <div className="flex flex-col space-y-5">
              <div className="group cursor-default">
                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1 group-hover:text-brown transition-colors">
                  Address
                </p>
                <p className="text-zinc-400 group-hover:text-zinc-200 transition-colors">
                  {footerLinks.contact.address}
                </p>
              </div>
              <div className="group cursor-default">
                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1 group-hover:text-brown transition-colors">
                  Call Us
                </p>
                <p className="text-zinc-400 group-hover:text-zinc-200 transition-colors">
                  {footerLinks.contact.phone}
                </p>
              </div>
              <div className="group cursor-default">
                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1 group-hover:text-brown transition-colors">
                  Opening Hours
                </p>
                <p className="text-zinc-400 group-hover:text-zinc-200 transition-colors">
                  {footerLinks.contact.hours}
                </p>
              </div>
            </div>
          </div>

          {/* Social & CTA */}
          <div className="flex flex-col space-y-8">
            <div>
              <h4 className="text-zinc-100 font-heading text-xs tracking-[0.3em] uppercase font-bold mb-6">
                Follow Our Journey
              </h4>
              <div className="flex space-x-5">
                {footerLinks.socials.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 transition-all duration-300 hover:bg-brown hover:border-brown hover:text-white hover:-translate-y-1 shadow-sm"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/menu"
                className="inline-flex items-center space-x-2 bg-brown hover:bg-dark-brown text-white px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-brown/20 active:scale-95"
              >
                <span>Order Online</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7-7 7M5 12h16"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-zinc-600 text-[13px] font-medium tracking-wide">
          <div>
            &copy; {new Date().getFullYear()} Namma Biriyani. All rights
            reserved.
          </div>
          <div className="flex overflow-hidden group">
            <span className="translate-y-0 group-hover:-translate-y-full transition-transform duration-500">
              Designed with <span className="text-red-600">♥</span> in Madurai
            </span>
            <span className="absolute translate-y-full group-hover:translate-y-0 transition-transform duration-500 text-brown">
              Crafting Culinary Excellence
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
