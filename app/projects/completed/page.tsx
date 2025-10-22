"use client";
import { motion } from "framer-motion";

const projects = [
  { name: "تغذية مستودعات الحرس الوطني", image: "/project1.jpg" },
  { name: "تمديدات الالياف البصرية STC", image: "/project2.jpg" },
  { name: "واجهات وحدات سكنية", image: "/project3.jpg" },
   { name: "اعمال سفلتة حفريات الطارئة -القصيم", image: "/project4.jpg" },
];

export default function CurrentProjects() {
  return (
    <section className="min-h-screen bg-[#121921] py-12 md:py-16 px-4 sm:px-6 lg:px-12">
      {/* العنوان بشكل احترافي ومتجاوب */}
      <div className="w-full flex items-center justify-center mb-8 md:mb-12">
        <h2 className="relative text-center font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
          بعض مشاريعنا المنجزة
          <span className="absolute inset-0 bg-gradient-to-r from-[#FFD166] via-[#FF6B6B] to-[#8B1E3F] opacity-20 rounded-xl blur-xl"></span>
        </h2>
      </div>

      {/* شبكة المشاريع */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-2xl cursor-pointer shadow-2xl"
            whileHover="hover"
          >
            {/* صورة المشروع */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
            />

            {/* التدرج والنص للجوال */}
            <div className="absolute inset-0 flex items-end sm:items-center justify-center">
              {/* التدرج على الجوال */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2 sm:hidden bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

              {/* النص للجوال دائم الظهور */}
              <h3 className="sm:hidden absolute bottom-3 left-3 text-white font-bold text-lg px-2">
                {project.name}
              </h3>

              {/* النص على اللاب/تابلت يظهر عند hover */}
              <motion.div
                variants={{ hover: { opacity: 1 } }}
                initial={{ opacity: 0 }}
                className="hidden sm:flex absolute inset-0 bg-black/50 items-center justify-center rounded-2xl"
              >
                <motion.h3
                  variants={{ hover: { y: 0, opacity: 1 } }}
                  initial={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-white text-2xl md:text-3xl font-bold text-center px-4"
                >
                  {project.name}
                </motion.h3>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
