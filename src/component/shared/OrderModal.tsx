"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Set mounted state for portal
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Handle opening animation state
  useEffect(() => {
    if (isOpen) {
      // Small delay to allow DOM to render before animating in
      const timer = setTimeout(() => setIsAnimating(true), 10);
      return () => clearTimeout(timer);
    } else {
      setIsAnimating(false);
    }
  }, [isOpen]);

  // Accessibility: Focus Trap and Escape Key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[
          focusableElements.length - 1
        ] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      // Focus the first element in the modal
      setTimeout(() => {
        const firstFocusable = modalRef.current?.querySelector(
          "button, [href]",
        ) as HTMLElement;
        firstFocusable?.focus();
      }, 100);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!mounted || (!isOpen && !isAnimating)) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-100 flex items-center justify-center p-4 transition-all duration-500 ease-out ${
        isAnimating
          ? "bg-black/60 backdrop-blur-sm opacity-100"
          : "bg-black/0 backdrop-blur-0 opacity-0"
      }`}
      // onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
    >
      <div
        ref={modalRef}
        className={`w-full max-w-md bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 ease-out ${
          isAnimating
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 translate-y-4"
        }`}
      >
        <div className="p-8 md:p-10 space-y-10">
          <div className="text-center space-y-3">
            <h2
              id="order-modal-title"
              className="text-3xl md:text-4xl font-serif text-zinc-900"
            >
              Order Online
            </h2>
            <div className="space-y-1">
              <p className="text-zinc-600 font-sans text-sm md:text-base leading-relaxed">
                We’re available for online ordering on the following platforms.
              </p>
              <p className="text-zinc-400 font-sans text-[11px] md:text-xs uppercase tracking-widest">
                Choose your preferred platform to place your order.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {/* Swiggy Button */}
            <a
              href="https://www.swiggy.com/city/madurai/the-irish-cafe-alavandan-kk-nagar-rest790606"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-6 md:p-8 rounded-2xl border border-zinc-100 bg-white/30 backdrop-blur-3xl hover:bg-zinc-50 hover:border-orange-500/20 hover:shadow-lg transition-all duration-500 animate-fade-in"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 124 124"
                  className="w-full h-full"
                >
                  <path
                    fill="#F0851D"
                    d="M23.1,41.5c0.2-1.2,0.2-2.5,0.4-3.7c1-4.3,2.7-8.4,5.5-11.9c2-2.5,4-5.1,6.4-7.1c2.9-2.3,6.2-4.2,9.4-6 c4.5-2.6,9.7-3,14.7-3.3c2.6-0.1,5.2,0.6,7.8,1.1c6.2,1.1,11.6,3.9,16.2,8.1c5.7,5.1,9.4,11.6,11.3,19c1,3.5,0.2,5.7-2.7,6.5 c-3.1,0.8-6.3,1.3-9.5,1.7c-2.6,0.3-5.2,0.3-7.8,0.4c-0.6,0-1.3-0.1-2-0.2c-0.9-0.1-1.9-0.3-2.8-0.3c-1.1-0.1-2.2,0-3.7,0 c-0.1-3-0.2-5.5-0.3-8.1c0-2,0.2-4-0.1-5.9c-0.1-0.9-1.2-2.2-1.9-2.3c-1.3-0.2-2.2,0.9-2.2,2.4c0,0.2,0,0.4,0,0.5 c0,4.8,0.1,9.6,0,14.4c-0.1,3.7,0.9,3.9,4.1,4.2c4.2,0.4,8.4,0,12.6,0.1c3.3,0.1,6.6,0.1,9.8,0.7c3,0.6,5.6,3,5.2,5.7 c-0.3,2.1-0.5,4.2-1.1,6.1c-1,3.1-2.1,6.2-3.5,9.1c-1.7,3.8-3.4,7.7-5.7,11.3c-4.8,7.5-9.8,14.8-15,22c-2.4,3.4-5.4,6.5-8.1,9.7 c-0.7,0.8-1.2,0.8-1.9-0.2c-3.1-4.4-6.3-8.7-9.6-13c-3.8-5-7.2-10.4-10-16c-1-2.1-0.8-2.5,1.4-3c1.6-0.4,3.3-0.7,5-0.7 c3.7-0.1,7.4-0.1,11.1,0c1.5,0,2,1,1.9,2.4c-0.1,2-0.1,4.1,0,6.1c0.1,1.3,0.6,2.5,2.1,2.8c1.6,0.3,2.2-0.8,2.6-2.1 c0.2-0.6,0.3-1.3,0.3-1.9c0-3.1,0-6.1,0-9.2c0-3.3-1-4.3-4.3-4.2c-3.6,0.1-7.1,0.4-10.7,0.5c-3.2,0.1-6.4,0.1-9.5,0 c-1.5-0.1-3.3-0.3-4.5-1.1c-1.7-1.2-3.3-2.9-4.2-4.8c-4.2-8.1-6.3-16.8-6.8-26"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium text-zinc-800 group-hover:text-orange-600 transition-colors tracking-wide">
                Swiggy
              </span>
            </a>

            {/* Zomato Button */}
            <a
              href="https://www.zomato.com/madurai/the-irish-cafe-kk-nagar"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-6 md:p-8 rounded-2xl border border-zinc-100 bg-white hover:bg-zinc-50 hover:border-red-500/20 hover:shadow-lg transition-all duration-500 animate-fade-in animation-delay-100"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1000 1000"
                  className="w-full h-full"
                >
                  <path
                    fill="#E23744"
                    d="M24.66 0h950.68C988.96 0 1000 11.04 1000 24.66v950.67c0 13.62-11.04 24.66-24.66 24.66H24.66C11.04 1000 0 988.96 0 975.34V24.66C0 11.04 11.04 0 24.66 0z"
                  />
                  <path
                    fill="#FFF"
                    d="m195.21 450.86-.8 25.37-66.15 71.92c27.63 0 45.17-.28 55.26-.84-2.92 13.66-5.31 24.81-7.7 41.53-13.28-1.11-34.01-1.39-54.73-1.39-23.11 0-43.31.28-59.52 1.39l.53-25.64 66.16-71.64c-28.96 0-39.59.28-51.55.56 2.66-12.82 4.52-27.04 6.38-41.26 20.99.84 29.23 1.11 56.59 1.11 25.24.01 39.59-.27 55.53-1.11zm47.03 79.55c0 17.01 5.58 25.65 15.14 25.65 12.76 0 22.85-20.62 22.85-45.71 0-17.28-5.58-25.64-14.88-25.64-12.75-.01-23.11 20.33-23.11 45.7zm86.88-22.11c0 46.27-32.68 84.74-75.99 84.74-38.79 0-58.72-26.48-58.72-61.04 0-45.99 32.95-84.46 75.99-84.46 39.32-.01 58.72 26.47 58.72 60.76zm520.66 22.11c0 17.01 5.58 25.65 15.14 25.65 12.76 0 22.85-20.62 22.85-45.71 0-17.28-5.58-25.64-14.88-25.64-12.74-.01-23.11 20.33-23.11 45.7zm88.66-23.09c0 46.88-33.11 85.85-76.99 85.85-39.3 0-59.49-26.83-59.49-61.85 0-46.59 33.38-85.57 76.99-85.57 39.83.01 59.49 26.84 59.49 61.57zM552.56 492.4c3.46-23.7 1.59-45.16-24.71-45.16-19.13 0-39.85 16.17-54.47 43.2 3.19-22.3 1.33-43.2-24.71-43.2-19.66 0-40.92 17-55.53 45.16 3.72-18.4 2.92-39.3 1.86-43.77-15.14 2.51-28.43 3.9-47.03 4.46.53 12.82-.27 29.55-2.66 45.43l-6.11 41.81c-2.39 16.44-5.05 35.41-7.7 47.39h49.42c.26-7.25 2.12-18.68 3.45-28.72l4.25-28.71c3.45-18.68 18.33-40.7 29.76-40.7 6.64 0 6.38 6.41 4.52 18.4l-4.78 32.33c-2.39 16.44-5.05 35.41-7.7 47.39h49.95c.27-7.25 1.86-18.68 3.19-28.72l4.25-28.71c3.45-18.68 18.33-40.7 29.76-40.7 6.65 0 6.38 6.13 5.31 14.49l-11.93 83.62h45.58l16.03-95.29zm238.68 56.02-5.31 32.9c-8.24 4.46-23.65 10.87-41.45 10.87-30.29 0-36.4-16.16-31.62-50.45l7.7-55.19h-14.9l4.22-35.72 16.27-.79 6.11-25.93 45.96-17.28-5.84 43.21H804c-1.07 4.46-4.78 28.99-5.85 36.51h-30.82l-6.91 51.01c-1.86 13.1-.79 17.84 8.24 17.84 6.64-.01 16.47-3.91 22.58-6.98zm-174.32 15.65c16.72-2.05 28.23-18.18 31-34.27l.47-4.31c-7.19-1.62-17.57-2.84-27.65-1.6-9.59 1.18-17.58 5.16-21.87 10.94-3.23 4.14-4.87 9.1-4.15 15 1.09 8.86 10.89 15.62 22.2 14.24zm-14.25 25.49c-23.6 2.9-39.15-6.47-43.82-27.79-2.94-13.41 1.13-28.68 8.25-37.8 9.52-11.92 25.05-19.58 43.98-21.9 15.24-1.87 28.08-.95 40.09 1.33l.5-2.06c.34-3.29.68-6.58.2-10.53-1.24-10.09-9.22-16.12-28.88-13.7-13.28 1.63-25.91 6.43-35.72 11.89l-9.53-28.83c13.28-7.63 30.04-13.44 49.22-15.79 36.63-4.5 62.36 7.19 65.66 34.03.88 7.14.98 14.72.08 21.58-4.71 33.2-7.72 58.18-9.04 74.94-.2 2.58-.19 7.03.05 13.36l-45.45-.04c.96-2.63 1.83-6.16 2.6-10.61.51-2.93.87-6.63 1.11-11.1-9.64 13.16-22.83 21-39.3 23.02z"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium text-zinc-800 group-hover:text-red-600 transition-colors tracking-wide">
                Zomato
              </span>
            </a>
          </div>

          <div className="text-center space-y-8">
            <p className="text-[10px] md:text-xs text-zinc-400 uppercase tracking-[0.2em] font-sans">
              Delivery availability may vary by location
            </p>

            <button
              onClick={onClose}
              className="group relative inline-flex items-center justify-center text-[11px] md:text-xs text-zinc-500 hover:text-zinc-900 transition-colors font-sans uppercase tracking-[0.3em] overflow-hidden py-2"
            >
              <span className="relative z-10">Maybe later</span>
              <span className="absolute bottom-0 left-0 w-full h-px bg-zinc-200 transform origin-left transition-transform duration-500 group-hover:scale-x-100 scale-x-0 group-hover:bg-zinc-900" />
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default OrderModal;
