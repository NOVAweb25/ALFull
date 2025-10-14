"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/./public/logo.svg";
import React from "react";

export default function AboutSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-end overflow-hidden">
      {/* خلفية الفيديو */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/about-bg.mp4" type="video/mp4" />
      </video>

      {/* طبقة تظليل خفيفة فوق الفيديو */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

      {/* المحتوى */}
      <div className="relative z-10 w-full md:w-3/4 px-6 md:px-16 flex flex-col items-end text-right ml-auto">

        {/* العنوان + الشعار */}
  <motion.div
    initial={{ opacity: 0, x: 80 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    className="flex items-center gap-4 mb-8 mt-24 justify-end w-full"
  >
    <h2 className="text-gradient text-4xl md:text-5xl font-bold text-right">
      نبذة عنا
    </h2>
    <Image
      src={logo}
      alt="Alfull Logo"
      className="w-16 h-16 object-contain"
    />
  </motion.div>

        {/* الشريط الزجاجي */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="w-full bg-[rgba(255,255,255,0.1)] backdrop-blur-md rounded-2xl border border-[rgba(255,255,255,0.2)] shadow-[0_8px_32px_rgba(0,0,0,0.25)] p-6 md:p-10 text-right"
        >
          <p className="text-white/90 leading-relaxed text-lg md:text-xl">
            تأسست{" "}
            <span className="text-gradient font-semibold">
              شركة الفل للمقاولات والتطوير العقاري
            </span>{" "}
            برؤية طموحة تهدف إلى بناء مستقبل عمراني متكامل يجمع بين الجودة،
            الابتكار، والاستدامة. نلتزم بتقديم مشاريع تواكب روح العصر وتعكس
            قيمنا في التميز والشفافية والالتزام بأعلى معايير الأداء الهندسي.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
