"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Vision from "./Vision";
import Values from "./Values";

export default function VisionValues() {
  const slides = [<Vision key="vision" />, <Values key="values" />];
  const [activeSlide, setActiveSlide] = useState(0);

  // كشف حجم الشاشة للتأقلم
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // التحكم بالاسكرول والـ touchpad على اللاب
  useEffect(() => {
    if (isMobile) return;
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 50 && activeSlide < slides.length - 1) {
        setActiveSlide((prev) => prev + 1);
      } else if (e.deltaY < -50 && activeSlide > 0) {
        setActiveSlide((prev) => prev - 1);
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activeSlide, isMobile]);

  const variants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  if (isMobile) {
    // سلايدات الجوال أفقي
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

  // سلايدات اللاب
  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8 }}
          className="h-full w-full flex items-center justify-center"
        >
          <div className="w-[100%] h-[100%]">{slides[activeSlide]}</div>
        </motion.div>
      </AnimatePresence>

      {/* الأسهم مثل نيوم */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
        {activeSlide > 0 && (
          <button
            onClick={() => setActiveSlide(activeSlide - 1)}
            className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-2xl font-bold text-white transition"
          >
            ↑
          </button>
        )}
        {activeSlide < slides.length - 1 && (
          <button
            onClick={() => setActiveSlide(activeSlide + 1)}
            className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-2xl font-bold text-white transition"
          >
            ↓
          </button>
        )}
      </div>
    </div>
  );
}
