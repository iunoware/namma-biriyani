"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Menu = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      ScrollTrigger.refresh();

      gsap.fromTo(
        imgRef.current,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="py-10">
      <div>
        <a
          ref={imgRef}
          href="/images/menu.pdf"
          target="_blank"
          className="flex items-center justify-center"
        >
          <img
            src="/images/menu.png"
            alt="menu"
            className="object-center md:h-150 h-100 w-auto object-cover"
          />
        </a>
      </div>
    </section>
  );
};

export default Menu;
