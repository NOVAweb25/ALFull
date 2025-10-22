"use client";
import { motion } from "framer-motion";

const projects = [
  {
    name: "تطوير واجهة الوكالة الذهبية العالمية",
    image: "/project-1.png",
    locationText: "المدينة المنورة - شارع الهجرة الفرعي",
    embedLink:
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.1596363624803!2d39.6477833!3d24.4452462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbfd08c6794f1%3A0x8973c5d7f49238dc!2z2KfZhNmI2YPYp9mE2Kkg2KfZhNiw2YfYqNmK2Kkg2KfZhNi52KfZhNmF2YrYqQ!5e0!3m2!1sar!2ssa!4v1761128929487!5m2!1sar!2ssa",
  },
  {
    name: "تطوير عماير وقف البري",
    image: "/project-3.jpg",
    locationText: "المدينة المنورة - دوار القبلتين",
    embedLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.094712536387!2d39.5853107!3d24.482174999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbf3df63aa71d%3A0xc495c9cc7035cb81!2z2LnZhdin2LHZhyDYp9mE2YLYqNmE2KrZitmGINmI2YLZgSDYp9mE2KjYsdmK!5e0!3m2!1sar!2ssa!4v1761126130470!5m2!1sar!2ssa",
  },
  {
    name: "تطوير واجهة فندق ليفينج",
    image: "/project-2.jpg",
    locationText: "المدينة المنورة - دوار القبلتين",
    embedLink:
     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.117307731444!2d39.58498439999999!3d24.481392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbf007fd0258f%3A0xa9e2531001f154de!2z2KfYs9iq2K_ZitmIINmE2YrZgdmK2YbYrCDZhNmE2LTZgtmCINin2YTYrtin2LXYqQ!5e0!3m2!1sar!2ssa!4v1761126165390!5m2!1sar!2ssa",
  },
];

export default function CurrentProjects() {
  const handleMapClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section className="min-h-screen bg-[#121921] py-12 md:py-16 px-4 sm:px-6 lg:px-12">
      {/* العنوان */}
      <div className="w-full flex items-center justify-center mb-8 md:mb-12">
        <h2 className="relative text-center font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
          المشاريع الحالية
          <span className="absolute inset-0 bg-gradient-to-r from-[#FFD166] via-[#FF6B6B] to-[#8B1E3F] opacity-20 rounded-xl blur-xl"></span>
        </h2>
      </div>

      {/* شبكة المشاريع */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <motion.div
  key={index}
  className="relative overflow-hidden rounded-2xl cursor-pointer shadow-2xl group"
>
  {/* صورة المشروع */}
  <img
    src={project.image}
    alt={project.name}
    className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
  />

  {/* اسم المشروع + overlay للاب/تابلت */}
  <div className="absolute inset-0 flex items-start justify-center">
    {/* التدرج للجوال */}
    <div className="absolute top-0 left-0 right-0 h-1/3 sm:hidden bg-gradient-to-b from-black/60 via-black/20 to-transparent"></div>

    {/* اسم المشروع للجوال */}
    <motion.h3
      className="sm:hidden text-white font-bold text-lg px-4 text-center z-10 mt-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {project.name}
    </motion.h3>

    {/* اسم المشروع للاب/تابلت مع overlay عند hover */}
    <div className="hidden sm:flex absolute inset-0 items-start justify-center">
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      {/* الاسم */}
      <h3 className="absolute top-4 text-white text-2xl md:text-3xl font-bold text-center px-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
        {project.name}
      </h3>
    </div>
  </div>

  {/* الخريطة */}
  <div
    className="relative w-full h-80 mt-4 cursor-pointer overflow-hidden rounded-2xl"
    onClick={() => handleMapClick(project.embedLink)}
  >
    <iframe
      src={project.embedLink}
      width="100%"
      height="100%"
      style={{ border: "none", filter: "grayscale(30%) brightness(0.8)" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>

    {/* النص فوق الخريطة */}
    <div className="absolute top-6 left-6 right-6 z-20 bg-[#1e3a5f]/60 backdrop-blur-md border-b-4 border-gradient-gold rounded-2xl p-5 flex flex-col gap-1 shadow-lg">
      <h3 className="text-lg font-semibold text-[#fdb81c]">موقع المشروع</h3>
      <p className="text-sm text-gray-200">{project.locationText}</p>
      <span className="text-xs text-gray-400 mt-1">
        انقر على الخريطة لمعرفة الاتجاهات →
      </span>
    </div>

    {/* تظليل على الخريطة */}
    <div className="absolute inset-0 bg-[#121921]/30 transition-all duration-500"></div>
  </div>
</motion.div>

        ))}
      </div>
    </section>
  );
}
