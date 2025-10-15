"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

export default function LablePage() {
  const slides = ["/slide1.png", "/slide2.png"];

  return (
    <div className="relative w-screen h-[100dvh] overflow-hidden">
      {/* ✅ السلايدر */}
      <div className="flex w-screen h-[100dvh] overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
        {slides.map((src, i) => (
          <motion.div
            key={i}
            className="flex-shrink-0 w-screen h-[100dvh] relative snap-center"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: i * 0.2 }}
          >
            <Image
              src={src}
              alt={`slide-${i}`}
              fill
              className="object-cover md:object-center"
              priority={i === 0}
            />
            {/* طبقة تظليل خفيفة */}
            <div className="absolute inset-0 bg-black/30 md:bg-black/20" />
            
            {/* محتوى السلايد */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
              <motion.h1
                className="text-3xl md:text-5xl font-bold drop-shadow-lg"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                {i === 0 ? "نص ترحيبي أو عنوان رئيسي" : "عنوان سلايد ثاني"}
              </motion.h1>
              <motion.p
                className="mt-4 text-sm md:text-lg text-white/80 max-w-lg leading-relaxed"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {i === 0
                  ? "يمكنك إضافة وصف قصير هنا يعرض فكرة المشروع أو الشركة بشكل بسيط."
                  : "مثال لنص وصفي آخر يظهر عند التبديل بين السلايدات."}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ✅ النقاط السفلية */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <span
            key={i}
            className="w-3 h-3 rounded-full bg-white/50 hover:bg-[#ffd166] transition"
          ></span>
        ))}
      </div>
    </div>
  );
}
