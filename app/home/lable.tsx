//app/home/lable.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

export default function LablePage() {
  const slides = ["/slide1.png", "/slide2.png"]; // ✅ روابط مباشرة من مجلد public

  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      style={{ scrollSnapType: "x mandatory" }}
    >
      {/* ✅ السلايدر */}
      <div className="flex w-screen h-screen overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
        {slides.map((src, i) => (
          <motion.div
            key={i}
            className="flex-shrink-0 w-screen h-screen relative snap-center"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: i * 0.2 }}
          >
            <Image
              src={src}
              alt={`slide-${i}`}
              fill
              className="object-cover"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        ))}
      </div>

      {/* ✅ النقاط السفلية */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <span
            key={i}
            className="w-3 h-3 rounded-full bg-white/40 hover:bg-[#ffd166] transition"
          ></span>
        ))}
      </div>

      
    </div>
  );
}
