"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function SplashPage() {
  const [show, setShow] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const totalDuration = 2500; // المدة الكلية بالميلي ثانية
    const timer = setTimeout(() => {
      setShow(false);
      router.push("/home");
    }, totalDuration);
    return () => clearTimeout(timer);
  }, [router]);

  // Variants
  const logoVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 70,
        damping: 12,
      },
    },
  };

  const lineVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-[#121921] z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          <motion.div className="flex flex-col items-center space-y-4">
            {/* الشعار */}
            <motion.div
              variants={logoVariants}
              initial="hidden"
              animate="visible"
              className="relative w-28 h-28 mb-4"
            >
              <Image
                src="/logo.png"
                alt="Alfull logo"
                fill
                className="object-contain drop-shadow-[0_0_20px_#FDB81C]"
              />
            </motion.div>

            {/* الخط المتدرج */}
            <motion.div
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="h-[2px] w-48 mb-2 origin-left
                       bg-gradient-to-r from-[#1e3a5f] via-[#8b1e3f] to-[#ffd166]
                       bg-[length:200%_100%] animate-gradient-move"
            />

            <style jsx>{`
              @keyframes gradientMove {
                0% {
                  background-position: 0% 0%;
                }
                100% {
                  background-position: -100% 0%;
                }
              }
              .animate-gradient-move {
                animation: gradientMove 2s linear infinite;
              }
            `}</style>

            {/* النصوص */}
            <motion.div
              className="flex flex-col items-center space-y-2"
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.25, delayChildren: 0.8 }}
            >
              <motion.p
                variants={textVariants}
                className="text-[#FFD166] text-xl md:text-2xl font-medium tracking-wide text-right"
              >
                الفل للمقاولات و التطوير العقاري
              </motion.p>
              <motion.p
                variants={textVariants}
                className="text-[#FFD166] text-lg md:text-xl font-medium tracking-wide text-left"
              >
                Alfull Contracting & Real Estate Dev.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
