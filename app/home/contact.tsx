"use client";

import Image from "next/image";
import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi"; // أيقونة النسخ التقليدية

export default function Contact() {
  const [showPhonePopup, setShowPhonePopup] = useState(false);
  const [copiedField, setCopiedField] = useState<"phone" | "email" | null>(null);

  const phoneNumber = "+966505304806";
  const email = "office@alful.net";

  const handleMapClick = () => {
    window.open(
      "https://maps.app.goo.gl/DHXkEd3Aq8Nc1ej1A",
      "_blank"
    );
  };

  const copyToClipboard = (text: string, field: "phone" | "email") => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 1500); // تختفي العلامة بعد 1.5 ثانية
  };

  return (
    <>
      <section
        id="contact"
        className="section min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#121921] relative overflow-hidden"
      >
        {/* الخلفية */}
        <div className="absolute inset-0 bg-gradient-main opacity-70"></div>

        {/* الخريطة */}
        <div
          className="relative md:w-1/2 w-full h-80 md:h-screen group cursor-pointer overflow-hidden"
          onClick={handleMapClick}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.1361163582546!2d39.6725916248137!3d24.446062378202193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bd9504b927cddd%3A0x2b01dec9d945df13!2z2YXYpNiz2LPYqSDYp9mE2YHZhCDZhNmE2YXZgtin2YjZhNin2Ko!5e0!3m2!1sar!2ssa!4v1760479893216!5m2!1sar!2ssa"
            width="100%"
            height="100%"
            style={{ border: "none", filter: "grayscale(30%) brightness(0.8)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="absolute inset-0 bg-[#121921]/40 group-hover:bg-[#121921]/20 transition-all duration-500"></div>

          <div className="absolute bottom-6 left-6 right-6 bg-[#1e3a5f]/60 backdrop-blur-md border-b-4 border-gradient-gold rounded-2xl p-5 flex flex-col gap-1 shadow-lg">
            <h3 className="text-lg font-semibold text-[#fdb81c]">موقع الشركة</h3>
            <p className="text-sm text-gray-200">
              المدينة المنورة - حي مذينب - شارع أوس بن مالك بن قيس - مقر شركة الفل للمقاولات و التطوير العقاري
            </p>
            <span className="text-xs text-gray-400 mt-1">
              انقر على الخريطة لمعرفة الاتجاهات →
            </span>
          </div>
        </div>

        {/* بطاقات التواصل */}
        <div className="relative md:w-1/2 w-full flex flex-col items-center justify-center gap-8 py-16 px-8 md:px-16 z-10">
          {/* رقم الهاتف */}
          <div className="w-full md:w-3/4 bg-[#1e3a5f]/40 backdrop-blur-md rounded-2xl border-b-4 border-gradient-gold p-6 flex items-center justify-between gap-4 fade-in shadow-lg">
            <div className="flex items-center gap-4 cursor-pointer" onClick={() => setShowPhonePopup(true)}>
              <div className="w-14 h-14 flex items-center justify-center bg-[#fdb81c]/10 rounded-full">
                <Image src="/phone.svg" alt="Phone Icon" width={32} height={32} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#fdb81c]">رقم التواصل</h3>
                <p className="text-sm md:text-base text-gray-200">{phoneNumber}</p>
              </div>
            </div>
            <button
              className="text-gray-200 hover:text-white text-2xl"
              onClick={() => copyToClipboard(phoneNumber, "phone")}
              title="نسخ الرقم"
            >
              {copiedField === "phone" ? <FiCheck /> : <FiCopy />}
            </button>
          </div>

         {/* البريد الإلكتروني */}
<div className="w-full md:w-3/4 bg-[#1e3a5f]/40 backdrop-blur-md rounded-2xl border-b-4 border-gradient-gold p-6 flex items-center justify-between gap-4 fade-in shadow-lg">
  <a
  href="mailto:office@alful.net"
  className="flex items-center gap-4 w-full"
>
  <div className="w-14 h-14 flex items-center justify-center bg-[#fdb81c]/10 rounded-full">
    <Image src="/mail.svg" alt="Email Icon" width={32} height={32} />
  </div>
  <div>
    <h3 className="text-lg font-semibold text-[#fdb81c]">البريد الإلكتروني</h3>
    <p className="text-sm md:text-base text-gray-200">office@alful.net</p>
  </div>
</a>



  <button
    className="text-gray-200 hover:text-white text-2xl"
    onClick={() => copyToClipboard(email, "email")}
    title="نسخ البريد"
  >
    {copiedField === "email" ? <FiCheck /> : <FiCopy />}
  </button>
</div>

        </div>

        {/* نافذة منبثقة للهاتف */}
        {showPhonePopup && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50"
            onClick={() => setShowPhonePopup(false)}
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>
            <div
              className="bg-[#1e3a5f]/80 backdrop-blur-md rounded-lg p-6 w-80 flex flex-col gap-4 shadow-xl transform transition-all duration-300 scale-95 opacity-0 animate-scaleUp relative z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-semibold text-[#fdb81c] text-center">اختر طريقة التواصل</h3>

              <button
                className="bg-[#fdb81c] text-[#121921] py-2 px-4 font-semibold rounded-none transition-colors duration-300 hover:text-white hover:bg-[var(--color-red)]"
                onClick={() => (window.location.href = `tel:${phoneNumber}`)}
              >
                الاتصال مباشرة
              </button>

              <button
                className="bg-[#fdb81c] text-[#121921] py-2 px-4 font-semibold rounded-none transition-colors duration-300 hover:text-white hover:bg-[var(--color-red)]"
                onClick={() =>
                  window.open(`https://wa.me/${phoneNumber.replace(/\D/g, "")}`, "_blank")
                }
              >
                التواصل عبر WhatsApp
              </button>

              <button
                className="text-gray-200 hover:text-white mt-2 rounded-none transition-colors duration-300 hover:bg-[var(--color-wine)]"
                onClick={() => setShowPhonePopup(false)}
              >
                إلغاء
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
