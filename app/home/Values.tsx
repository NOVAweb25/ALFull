"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Values() {
  const values = [
    {
      icon: "/excellence.svg",
      title: "التميز",
      text: "نسعى لتقديم أعلى مستويات الجودة في كل ما نقوم به.",
      delay: 0.4,
    },
    {
      icon: "/commitment.svg",
      title: "الالتزام",
      text: "ننجز مشاريعنا وفق الجداول الزمنية والمعايير المعتمدة.",
      delay: 0.5,
    },
    {
      icon: "/values.svg",
      title: "الاستدامة",
      text: "نؤمن ببناء مستقبل يوازن بين التطور والبيئة.",
      delay: 0.6,
    },
    {
      icon: "/innovation.svg",
      title: "الابتكار",
      text: "نعمل على دمج التقنيات الحديثة والذكاء الاصطناعي في مشاريعنا.",
      delay: 0.7,
    },
    {
      icon: "/trust.svg",
      title: "الثقة والمصداقية",
      text: "نحرص على بناء علاقات طويلة الأمد مع عملائنا وشركائنا.",
      delay: 0.8,
    },
    {
      icon: "/quality.svg",
      title: "الكفاءة",
      text: "نعتمد على كوادر بشرية محترفة قادرة على تحقيق نتائج متميزة.",
      delay: 0.9,
    },
  ];

  return (
    <section
      id="values"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#121921] overflow-hidden"
    >
      {/* القسم الأيسر (الصورة الكبيرة) */}
      <div className="flex justify-center items-center w-full md:w-1/2 py-6 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-[85%] md:w-[70%] lg:w-[60%]"
        >
          <Image
            src="/values.svg"
            alt="قيمنا"
            width={500}
            height={350}
            className="object-contain w-full h-auto brightness-90"
            priority
          />
        </motion.div>
      </div>

      {/* القسم الأيمن (النص والمربع الزجاجي) */}
      <div className="relative w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-6 md:px-20 py-12 md:py-16">
        {/* العنوان */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="section-title text-center md:text-left text-gradient mb-6 md:mb-10 fade-in"
        >
          قيمنا
        </motion.h2>

        {/* المربع الزجاجي */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl 
                     p-6 md:p-10 max-w-xl fade-in"
        >
          <p className="text-base md:text-lg leading-relaxed text-white/90 mb-6">
            نؤمن بأن النجاح الحقيقي ينبع من قيم راسخة توجه قراراتنا وأعمالنا كل يوم.
          </p>

          {/* قائمة القيم */}
          <ul className="space-y-6 text-white/85 text-base md:text-lg leading-relaxed">
            {values.map((value, index) => (
              <li
                key={index}
                className="relative pl-16 md:pl-20" // مساحة لظهور الأيقونة خارج الصندوق
              >
                {/* الأيقونة المتحركة خارج المربع */}
                <motion.div
  initial={{ x: 100, opacity: 0, scale: 0.8 }}
  animate={{ x: 0, opacity: 1, scale: 1 }}
  transition={{
    duration: 0.7,
    delay: value.delay,
    type: "spring",
    stiffness: 80,
  }}
  className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 
             w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#F5F5F5] flex items-center justify-center 
             shadow-lg shadow-white/20"
>
  <Image
    src={value.icon}
    alt={value.title}
    width={40}
    height={40}
    className="object-contain"
  />
</motion.div>

                <p>
                  <span className="text-[#fdb81c] font-semibold">
                    {value.title}:
                  </span>{" "}
                  {value.text}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
