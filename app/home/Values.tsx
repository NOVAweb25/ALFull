//app/home/Values.tsx

"use client";
import Image from "next/image";

export default function Values() {
  return (
    <section
      id="values"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#121921] overflow-hidden"
    >
      {/* القسم الأيسر (الصورة الكبيرة) */}
      <div className="flex justify-center items-center w-full md:w-1/2 py-4 md:py-0">
  <Image
    src="/values.svg"
    alt="قيمنا"
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
          قيمنا
        </h2>

        {/* المربع الزجاجي */}
        <div
          className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl 
                     p-8 md:p-10 max-w-xl fade-in md:-ml-24"
        >
          <p className="text-lg leading-relaxed text-white/90 mb-6">
            نؤمن بأن النجاح الحقيقي ينبع من قيم راسخة توجه قراراتنا وأعمالنا كل يوم.
          </p>

          {/* قائمة القيم مع الصور */}
          <ul className="space-y-5 text-white/85 text-lg leading-relaxed">
            {/* 🔶 الشفافية */}
            <li className="flex items-center gap-4">
              <Image
                src="/icons/transparent.png" // ← ضع الأيقونة في public/icons
                alt="الشفافية"
                width={40}
                height={40}
                className="object-contain"
              />
              <p>
                <span className="text-[#fdb81c] font-semibold">الشفافية:</span>{" "}
                نسعى لبناء الثقة من خلال الوضوح والمصداقية في تعاملاتنا.
              </p>
            </li>

            {/* 🔶 الابتكار */}
            <li className="flex items-center gap-4">
              <Image
                src="/icons/innovation.png"
                alt="الابتكار"
                width={40}
                height={40}
                className="object-contain"
              />
              <p>
                <span className="text-[#fdb81c] font-semibold">الابتكار:</span>{" "}
                نؤمن بأن الإبداع هو المحرك الأساسي للتطور والاستدامة.
              </p>
            </li>

            {/* 🔶 الجودة */}
            <li className="flex items-center gap-4">
              <Image
                src="/icons/quality.png"
                alt="الجودة"
                width={40}
                height={40}
                className="object-contain"
              />
              <p>
                <span className="text-[#fdb81c] font-semibold">الجودة:</span>{" "}
                نحرص على تقديم أعلى معايير الجودة في كل تفاصيل مشاريعنا.
              </p>
            </li>

            {/* 🔶 الاحترام */}
            <li className="flex items-center gap-4">
              <Image
                src="/icons/respect.png"
                alt="الاحترام"
                width={40}
                height={40}
                className="object-contain"
              />
              <p>
                <span className="text-[#fdb81c] font-semibold">الاحترام:</span>{" "}
                نقدر الإنسان، ونعامل الجميع بعدل وإنصاف.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
