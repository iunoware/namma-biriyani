"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    let scrubTl: gsap.core.Timeline | null = null;
    let rafId: number;

    const initScrollVideo = () => {
      const duration = video.duration;
      if (!duration || isNaN(duration)) return;

      // Prime the video decoder
      video.currentTime = 0;
      video.pause();

      const videoProxy = { currentTime: 0 };

      // Tighter scrub (0.7) for more responsive stops
      // Numeric value creates that smooth 'gliding' stop without overstaying its welcome
      scrubTl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: 0.7,
          invalidateOnRefresh: true,
        },
      });

      scrubTl.to(videoProxy, {
        currentTime: duration - 0.05,
        ease: "none",
      });

      // SYNC LOOP: Advanced check for render states
      const syncVideo = () => {
        const diff = Math.abs(video.currentTime - videoProxy.currentTime);

        // Only seek if we have a meaningful difference (> 16ms or ~1 frame)
        // This prevents the 'micro-stutter' when the user stops scrolling
        if (!video.seeking && diff > 0.03) {
          video.currentTime = videoProxy.currentTime;
        }

        rafId = requestAnimationFrame(syncVideo);
      };

      rafId = requestAnimationFrame(syncVideo);
    };

    const handleLoadedMetadata = () => {
      initScrollVideo();
    };

    if (video.readyState >= 1) {
      handleLoadedMetadata();
    } else {
      video.addEventListener("loadedmetadata", handleLoadedMetadata);
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      cancelAnimationFrame(rafId);
      if (scrubTl) {
        if (scrubTl.scrollTrigger) scrubTl.scrollTrigger.kill();
        scrubTl.kill();
      }
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === container) st.kill();
      });
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-black overflow-hidden flex items-center justify-center"
    >
      <div className="relative w-full h-screen">
        <video
          ref={videoRef}
          src="/videos/hero.mp4"
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover pointer-events-none select-none"
          style={{ willChange: "transform, contents" }}
        />

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/80 pointer-events-none" />

        {/* Content Layer */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/10">
          <div className="space-y-4">
            {/* <span className="text-amber-200/80 tracking-[0.3em] text-sm uppercase font-medium animate-pulse">
              Authentic Madurai Taste
            </span> */}
            {/* <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none drop-shadow-2xl">
              NAMMA <br />
              <span className="text-brown">BIRIYANI</span>
            </h1> */}
            <div className="relative w-full h-full">
              <Image
                src="/images/Namma.svg"
                alt="Best Biriyani in Madurai"
                fill
                className="h-30! w-auto!"
              />
            </div>
            <div className="relative -translate-x-6 -translate-y-7 flex items-center justify-center w-full h-full">
              <Image
                src="/images/Briyani.svg"
                alt="Best Biriyani in Madurai"
                fill
                className="h-30! w-100"
              />
            </div>
            <p className="text-white/80 pt-10 max-w-lg mx-auto text-lg font-light tracking-widest uppercase">
              Authentic Traditional Biriyani
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-linear-to-b from-white to-transparent" />
          <span className="text-[10px] text-white uppercase tracking-[0.4em] rotate-180 [writing-mode:vertical-lr]">
            Scroll
          </span>
        </div>
      </div>
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/images/Namma.svg"
          alt="Best Biriyani in Madurai"
          fill
          className="h-30! w-auto!"
        />
      </div> */}
    </section>
  );
};

export default Hero;
