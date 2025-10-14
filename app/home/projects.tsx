//app/home/projects.tsx

"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Projects() {
  const router = useRouter();

  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 🎥 خلفية الفيديو */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        autoPlay
        muted
        loop
        playsInline
        src="/projects-bg.mp4" // ← اسم الفيديو داخل مجلد public
      ></video>

      {/* طبقة شفافة داكنة لتوضيح النص */}
      <div className="absolute inset-0 bg-[#121921]/60"></div>

      {/* 🔳 المربعات */}
      <div className="relative z-10 flex flex-col md:flex-row gap-10 px-8 md:px-20 fade-in">
        {/* مربع المشاريع الحالية */}
        <motion.div
          whileHover={{ scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          onClick={() => router.push("/projects/current")}
          className="flex-1 cursor-pointer backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl 
                     p-10 flex flex-col items-center justify-center text-center hover:shadow-[#fdb81c]/40 transition-all duration-300"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            مشاريعنا الحالية
          </h2>
          <p className="text-lg text-white/80 max-w-md">
            تعرف على أبرز المشاريع التي نعمل عليها حاليًا، والمراحل التي وصلت إليها فرقنا.
          </p>
        </motion.div>

        {/* مربع المشاريع المنجزة */}
        <motion.div
          whileHover={{ scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          onClick={() => router.push("/projects/completed")}
          className="flex-1 cursor-pointer backdrop-blur-lg bg-[#1e3a5f]/30 border border-white/20 rounded-2xl shadow-2xl 
                     p-10 flex flex-col items-center justify-center text-center hover:shadow-[#fdb81c]/40 transition-all duration-300"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            مشاريعنا المنجزة
          </h2>
          <p className="text-lg text-white/80 max-w-md">
            استعرض مجموعة المشاريع التي أنجزناها بفخر، والتي تشهد على التزامنا بالجودة والابتكار.
          </p>
        </motion.div>
      </div>
    </section>
  );
}