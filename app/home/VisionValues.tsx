"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";
import Vision from "./Vision";
import Values from "./Values";

export default function VisionValues() {
  const [activeSlide, setActiveSlide] = useState(0); // 0 = Vision, 1 = Values
  const slides = [<Vision key="vision" />, <Values key="values" />];

  // التحكم في التنقل بالسحب أو السكرول
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0 && activeSlide < slides.length - 1) {
        setActiveSlide((prev) => prev + 1);
        e.preventDefault();
      } else if (e.deltaY < 0 && activeSlide > 0) {
        setActiveSlide((prev) => prev - 1);
        e.preventDefault();
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activeSlide]);

  // حركات السلايدات
  const variants = {
    enter: { opacity: 0, y: 100 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* ✅ السلايدات */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8 }}
          className="h-full w-full"
        >
          {slides[activeSlide]}
        </motion.div>
      </AnimatePresence>

      {/* ✅ الأسهم للتنقل */}
      <div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
        <button
          onClick={() => setActiveSlide(Math.max(0, activeSlide - 1))}
          className={`p-2 rounded-full transition-all ${
            activeSlide === 0 ? "opacity-30 cursor-default" : "hover:scale-110"
          } bg-gradient-to-r from-[#1e3a5f] to-[#8b1e3f]`}
        >
          <ChevronUp className="text-[#ffd166]" />
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
          <ChevronDown className="text-[#ffd166]" />
        </button>
      </div>
    </div>
  );
}
