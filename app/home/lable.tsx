"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";

interface Slide {
  desktop: string;
  mobile: string;
}

export default function LablePage() {
  const slides: Slide[] = [
    { desktop: "/slide1-desktop.png", mobile: "/slide1-mobile.png" },
    { desktop: "/slide2-desktop.png", mobile: "/slide2-mobile.png" },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // ✅ كشف حجم الشاشة
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ تحديد الشريحة النشطة عند scroll
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const onScroll = () => {
      const scrollLeft = slider.scrollLeft;
      const width = slider.clientWidth;
      const index = Math.round(scrollLeft / width);
      setActiveSlide(index);
    };

    slider.addEventListener("scroll", onScroll, { passive: true });
    return () => slider.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative w-screen h-[100dvh] overflow-hidden">
      {/* السلايدر */}
      <div
        ref={sliderRef}
        className="flex w-screen h-[100dvh] overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
      >
        {slides.map((slide, i) => (
          <motion.div
            key={i}
            className="flex-shrink-0 w-screen h-[100dvh] relative snap-center"
            initial={{ opacity: 0.7, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          >
            <Image
              src={isMobile ? slide.mobile : slide.desktop}
              alt={`slide-${i}`}
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority={i === 0}
            />
            {/* طبقة تظليل */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
          </motion.div>
        ))}
      </div>

      {/* النقاط السفلية */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <motion.span
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSlide === i ? "bg-[#ffd166]" : "bg-white/50"
            }`}
            layout
          />
        ))}
      </div>
    </div>
  );
}
