"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import OrderModal from "@/component/shared/OrderModal";

const navLinks = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Menu", href: "menu" },
  { name: "Contact", href: "contact" },
];

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileLinksRef = useRef<(HTMLElement | null)[]>([]);
  const [open, setOpen] = useState(false);

  function smoothScroll(href: string) {
    const section = document.getElementById(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const ternary =
        currentScrollY > lastScrollY && currentScrollY > 80
          ? setShowNavbar(false)
          : setShowNavbar(true);

      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1.2 },
    });

    tl.fromTo(
      navRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1 },
    ).fromTo(
      [logoRef.current, linksRef.current, ctaRef.current, burgerRef.current],
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, stagger: 0.1 },
      "-=0.8",
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Background transformation threshold
      setIsScrolled(currentScrollY > 50);

      // Hide/Show logic with threshold
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
      } else {
        // Always show at top
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      gsap.set(mobileMenuRef.current, { display: "flex", opacity: 0 });

      gsap.to(mobileMenuRef.current, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.fromTo(
        mobileLinksRef.current,
        { y: 12, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          delay: 0.2,
          ease: "power3.out",
          duration: 0.8,
        },
      );
    } else {
      document.body.style.overflow = "auto";
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(mobileMenuRef.current, { display: "none" });
        },
      });
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav
        ref={navRef}
        className={`${showNavbar ? "translate-y-0" : "-translate-y-full!"
          } fixed top-0 z-50 w-full h-16 md:h-22 transition-all duration-300 ${isScrolled ? "bg-white shadow-sm" : "bg-transparent"}`}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 md:px-10">
          {/* Left: Brand Name */}
          <div ref={logoRef} className="shrink-0">
            <Link href="/">
              <Image
                src="/images/pot-1.png"
                alt="Ambience and table setting at Chopstix"
                width={140}
                height={60}
                className="w-auto md:h-15 h-6"
              />
            </Link>
          </div>

          {/* Center/Right: Navigation Links (Desktop) */}
          <div
            ref={linksRef}
            className="hidden items-center space-x-12 md:flex"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <div
                  key={link.name}
                  // href={link.href}
                  onClick={() => smoothScroll(link.href)}
                  className={`group cursor-pointer relative font-sans text-[15px] font-medium tracking-wide  ${isScrolled
                      ? "text-zinc-950"
                      : "text-white/90 hover:text-zinc-300"
                    }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-[1.5px] bg-brown transition-all duration-300 ease-out ${isActive ? "w-full" : "w-0 group-hover:w-full"
                      } `}
                  />
                </div>
              );
            })}
          </div>

          {/* Far Right: CTA (Desktop) */}
          <div ref={ctaRef} className="hidden md:block">
            <button
              // href="https://maps.app.goo.gl/jBX9HGtHyhLxGoj28"
              // target="_blank"
              onClick={() => setOpen(true)}
              className={`group relative cursor-pointer font-sans text-[15px] font-medium tracking-wide ${isScrolled
                  ? "text-white/90 hover:text-zinc-300 bg-brown p-3 rounded-full "
                  : "text-white/90 hover:text-zinc-300 bg-brown p-3 rounded-full"
                }`}
            >
              Order Now &rarr;
              <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-brand-red transition-all duration-300 ease-out group-hover:w-full" />
            </button>
          </div>

          {/* Mobile Menu Button - Hamburger + Label */}
          <button
            ref={burgerRef}
            onClick={toggleMenu}
            className="relative z-999 flex items-center space-x-3 focus:outline-none md:hidden"
            aria-label="Toggle Menu"
          >
            <span className="font-sans text-[11px] font-medium tracking-[0.2em] text-black uppercase transition-all duration-300">
              {isOpen ? "Close" : "Menu"}
            </span>
            <div className="flex flex-col items-end space-y-1.5">
              <span
                className={`h-px bg-black transition-all duration-300 ${isOpen ? "w-6 translate-y-1.75 rotate-45" : "w-6"
                  }`}
              />
              <span
                className={`h-px bg-black transition-all duration-300 ${isOpen ? "opacity-0" : "w-4"
                  }`}
              />
              <span
                className={`h-px bg-black transition-all duration-300 ${isOpen ? "w-6 -translate-y-1.75 -rotate-45" : "w-5"
                  }`}
              />
            </div>
          </button>
        </div>
      </nav>
      <OrderModal isOpen={open} onClose={() => setOpen(false)} />

      {/* Mobile Menu Overlay - */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 z-55 mt-16 hidden h-screen w-full flex-col items-center justify-center bg-white"
        style={{ opacity: 0 }}
      >
        <div className="flex flex-col -mt-20 items-center space-y-8 px-6 text-center">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <div key={link.name} className="overflow-hidden">
                <div
                  // href={link.href}
                  onClick={() => {
                    toggleMenu();
                    smoothScroll(link.href);
                  }}
                  // onClick={}
                  ref={(el) => {
                    mobileLinksRef.current[index] = el;
                  }}
                  className="group cursor-pointer relative block font-serif text-3xl font-medium tracking-tight text-black sm:text-4xl"
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-2 left-1/2 h-px -translate-x-1/2 bg-brand-red transition-all duration-500 ease-out ${isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  />
                </div>
              </div>
            );
          })}

          <div
            className="pt-10"
            ref={(el) => {
              mobileLinksRef.current[navLinks.length] = el;
            }}
          >
            <a
              // href="https://maps.app.goo.gl/jBX9HGtHyhLxGoj28"
              // target="_blank"
              onClick={() => setOpen(true)}
              className="group relative font-sans text-sm font-medium tracking-[0.2em] text-black uppercase"
            >
              Visit Us &rarr;
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-brand-red transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
