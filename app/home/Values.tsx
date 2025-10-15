"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Values() {
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
          className="w-[85%] md:w-auto" // على الجوال تاخذ 85% من العرض، على اللاب auto
        >
          <Image
            src="/values.svg"
            alt="قيمنا"
            width={600}       // حجم اللاب
            height={400}
            className="object-contain w-full h-auto brightness-90"
            priority
          />
        </motion.div>
      </div>

      {/* القسم الأيمن (النص) */}
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
          className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl 
                     p-6 md:p-10 max-w-xl fade-in"
        >
          <p className="text-base md:text-lg leading-relaxed text-white/90 mb-6">
            نؤمن بأن النجاح الحقيقي ينبع من قيم راسخة توجه قراراتنا وأعمالنا كل يوم.
          </p>

          {/* قائمة القيم مع الصور */}
          <ul className="space-y-4 md:space-y-5 text-white/85 text-base md:text-lg leading-relaxed">
            {/* 🔶 الشفافية */}
            <li className="flex items-center gap-3 md:gap-4">
              <Image
                src="/icons/transparent.png"
                alt="الشفافية"
                width={35}
                height={35}
                className="object-contain"
              />
              <p>
                <span className="text-[#fdb81c] font-semibold">الشفافية:</span>{" "}
                نسعى لبناء الثقة من خلال الوضوح والمصداقية في تعاملاتنا.
              </p>
            </li>

            {/* 🔶 الابتكار */}
            <li className="flex items-center gap-3 md:gap-4">
              <Image
                src="/icons/innovation.png"
                alt="الابتكار"
                width={35}
                height={35}
                className="object-contain"
              />
              <p>
                <span className="text-[#fdb81c] font-semibold">الابتكار:</span>{" "}
                نؤمن بأن الإبداع هو المحرك الأساسي للتطور والاستدامة.
              </p>
            </li>

            {/* 🔶 الجودة */}
            <li className="flex items-center gap-3 md:gap-4">
              <Image
                src="/icons/quality.png"
                alt="الجودة"
                width={35}
                height={35}
                className="object-contain"
              />
              <p>
                <span className="text-[#fdb81c] font-semibold">الجودة:</span>{" "}
                نحرص على تقديم أعلى معايير الجودة في كل تفاصيل مشاريعنا.
              </p>
            </li>

            {/* 🔶 الاحترام */}
            <li className="flex items-center gap-3 md:gap-4">
              <Image
                src="/icons/respect.png"
                alt="الاحترام"
                width={35}
                height={35}
                className="object-contain"
              />
              <p>
                <span className="text-[#fdb81c] font-semibold">الاحترام:</span>{" "}
                نقدر الإنسان، ونعامل الجميع بعدل وإنصاف.
              </p>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
