"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Vision from "./Vision";
import Values from "./Values";

export default function VisionValues() {
  const slides = [<Vision key="vision" />, <Values key="values" />];
  const [activeSlide, setActiveSlide] = useState(0);

  // ✅ كشف حجم الشاشة للتأقلم
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    // على الجوال: سلايدات أفقي، عرض كامل، نقاط تنقل
    return (
      <div className="relative w-full overflow-hidden">
        <div
          className="flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth"
          onScroll={(e) => {
            const scrollLeft = (e.target as HTMLDivElement).scrollLeft;
            const width = (e.target as HTMLDivElement).offsetWidth;
            const index = Math.round(scrollLeft / width);
            setActiveSlide(index);
          }}
        >
          {slides.map((slide, idx) => (
            <motion.div
              key={idx}
              className="snap-start flex-shrink-0 w-screen h-screen"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {slide}
            </motion.div>
          ))}
        </div>

        {/* نقاط التنقل */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full transition-colors ${
                idx === activeSlide ? "bg-[#ffd166]" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    );
  }

  // على اللاب، نظام السلايدات + أسهم عمودية
  return (
    <div className="relative h-screen overflow-hidden">
      <motion.div
        key={activeSlide}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="h-full w-full"
      >
        {slides[activeSlide]}
      </motion.div>

      {/* الأسهم للتنقل */}
      <div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
        <button
          onClick={() => setActiveSlide(Math.max(0, activeSlide - 1))}
          className={`p-2 rounded-full transition-all ${
            activeSlide === 0 ? "opacity-30 cursor-default" : "hover:scale-110"
          } bg-gradient-to-r from-[#1e3a5f] to-[#8b1e3f]`}
        >
          ↑
        </button>
        <button
          onClick={() =>
            setActiveSlide(Math.min(slides.length - 1, activeSlide + 1))
          }
          className={`p-2 rounded-full transition-all ${
            activeSlide === slides.length - 1
              ? "opacity-30 cursor-default"
              : "hover:scale-110"
          } bg-gradient-to-r from-[#1e3a5f] to-[#8b1e3f]`}
        >
          ↓
        </button>
      </div>
    </div>
  );
}
