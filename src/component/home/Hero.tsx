"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OrderModal from "@/component/shared/OrderModal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headRef = useRef<HTMLHeadingElement>(null);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useGSAP(
    () => {
      gsap.from(eyebrowRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
      gsap.from(headRef.current, {
        y: 60,
        opacity: 0,
        duration: 2,
        ease: "power2.out",
      });
    },
    { scope: containerRef },
  );

  // Robust device detection for UX stability
  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  // DESKTOP ONLY: GSAP Scroll-Controlled Video
  useGSAP(
    () => {
      const video = videoRef.current;
      const container = containerRef.current;
      if (!video || !container) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const initScrollVideo = () => {
          const duration = video.duration;
          if (!duration || isNaN(duration)) return;

          video.currentTime = 0;
          video.pause();

          const videoProxy = { currentTime: 0 };

          const scrubTl = gsap.timeline({
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: "+=300%",
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              refreshPriority: 1, // CRITICAL: Ensures Hero pinning is calculated FIRST
            },
          });

          scrubTl.to(videoProxy, {
            currentTime: duration - 0.02,
            ease: "none",
            onUpdate: () => {
              if (!video.seeking) {
                video.currentTime = videoProxy.currentTime;
              }
            },
          });

          // Force a sort and refresh to update subsequent section trigger positions
          ScrollTrigger.sort();
          ScrollTrigger.refresh();
        };

        if (video.readyState >= 1) {
          initScrollVideo();
        } else {
          video.addEventListener("loadedmetadata", initScrollVideo);
        }

        return () => {
          video.removeEventListener("loadedmetadata", initScrollVideo);
        };
      });

      return () => mm.revert();
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full overflow-x-clip min-h-screen overflow-hidden bg-black"
    >
      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className={`hidden lg:block relative w-full h-screen`}>
        <video
          ref={videoRef}
          src="/videos/hero-1.mp4"
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover pointer-events-none select-none"
          style={{ willChange: "transform, contents" }}
        />

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/80 pointer-events-none" />

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none">
          <p
            ref={eyebrowRef}
            className="text-xl overflow-hidden font-accent text-white mb-4"
          >
            Authentic Traditional Biryani
          </p>
          <h1
            ref={headRef}
            className="text-[6rem] text-center z-10 tracking-tighter font-bold text-white leading-none"
          >
            Namma <span className="text-dark-brown"> Biryani</span>
          </h1>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-linear-to-b from-white to-transparent" />
          <span className="text-[10px] text-white uppercase tracking-[0.4em] rotate-180 [writing-mode:vertical-lr]">
            Scroll
          </span>
        </div>
      </div>

      <div className="lg:hidden relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-20">
        {/* Mobile Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/biryani-1.png"
            alt="Authentic Namma Biryani"
            fill
            className="object-cover opacity-60"
            priority
          />
          {/* Mobile Overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/50 to-black/90" />
        </div>

        {/* Mobile Text Content */}
        <div className="relative z-10 max-w-sm flex flex-col items-center">
          <span className="text-brown font-bold text-xs tracking-[0.3em] uppercase mb-4">
            House of Legacy
          </span>

          <h1 className="font-heading text-5xl xs:text-6xl font-black text-white tracking-tighter leading-[0.9] mb-6">
            Namma <br />
            <span className="text-brown">Biryani</span>
          </h1>

          <p className="font-body text-zinc-300 text-base leading-relaxed mb-10">
            A focused expression of everything we’ve learned — dedicated
            entirely to biryani. Crafted with passion, rooted in tradition.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-white text-black px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest shadow-2xl active:scale-95 transition-transform flex items-center justify-center gap-3"
          >
            Order Online
            <svg
              className="w-4 h-4 translate-y-px"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M14 5l7 7-7 7M5 12h16"
              />
            </svg>
          </button>
        </div>

        {/* Hint to Scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-30">
          <div className="w-px h-10 bg-white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
