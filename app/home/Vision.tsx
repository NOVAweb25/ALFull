"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section
      id="vision"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#121921] overflow-hidden"
    >
      {/* القسم الأيسر (الصورة) */}
      <div className="flex justify-center items-center w-full md:w-1/2 py-6 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-[85%] md:w-auto"
        >
          <Image
            src="/vision.svg"
            alt="رؤيتنا"
            width={600}   // على اللاب
            height={400}
            className="object-contain brightness-90 w-full h-auto"
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
          رؤيتنا
        </motion.h2>

        {/* المربع الزجاجي */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl 
                     p-6 md:p-10 max-w-xl fade-in"
        >
          <p className="text-base md:text-lg leading-relaxed text-white/90 mb-4">
            نسعى لأن نكون روادًا في تقديم الحلول الرقمية التي تعيد تعريف
            تجربة المستخدم وتفتح آفاقًا جديدة في عالم التقنية.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-white/80">
            رؤيتنا تتمحور حول الابتكار، الجودة، والاستدامة — نطمح إلى بناء
            مستقبل يعتمد على الذكاء، الجمال، والتكامل التقني في كل مشروع ننجزه.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
