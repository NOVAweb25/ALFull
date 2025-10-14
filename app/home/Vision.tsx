//app/home/Vision.tsx

"use client";
import Image from "next/image";

export default function Vision() {
  return (
    <section
      id="vision"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#121921] overflow-hidden"
    >
      {/* القسم الأيسر (الصورة) */}
      <div className="flex justify-center items-center w-full md:w-1/2 py-4 md:py-0">
  <Image
    src="/vision.svg"
    alt="رؤيتنا"
    width={400}       // حجم الصورة على الموبايل
    height={300}      // ارتفاع الصورة مع الحفاظ على النسبة
    className="object-contain brightness-90"
    priority
  />
</div>


      {/* القسم الأيمن */}
      <div className="relative w-full md:w-1/2 flex flex-col justify-center items-end md:items-start px-6 md:px-20 py-16">
        {/* العنوان */}
        <h2 className="section-title text-right md:text-left text-gradient mb-6 md:mb-10 fade-in">
          رؤيتنا
        </h2>

        {/* المربع الزجاجي */}
        <div
          className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl 
                     p-8 md:p-10 max-w-xl fade-in md:-ml-24"
        >
          <p className="text-lg leading-relaxed text-white/90 mb-4">
            نسعى لأن نكون روادًا في تقديم الحلول الرقمية التي تعيد تعريف
            تجربة المستخدم وتفتح آفاقًا جديدة في عالم التقنية.
          </p>
          <p className="text-lg leading-relaxed text-white/80">
            رؤيتنا تتمحور حول الابتكار، الجودة، والاستدامة — نطمح إلى بناء
            مستقبل يعتمد على الذكاء، الجمال، والتكامل التقني في كل مشروع ننجزه.
          </p>
        </div>
      </div>
    </section>
  );
}
