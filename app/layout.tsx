/*
  File: Next_app_layout_and_components.tsx
  Purpose: A single-file React + Tailwind implementation you can split into app/layout.tsx and components.
  Instructions:
    - Install dependencies: framer-motion (npm i framer-motion) + cookies-next (npm i cookies-next)
    - This file contains: RootLayout (use as app/layout.tsx), Navbar, Footer, FloatingLogo
    - It reads colors from your globals.css (we use Tailwind classes and CSS variables defined there)
    - Place your Splash page at app/page.tsx (you already did)
    - The Home pages live in app/home/*.tsx as you planned.

  Notes about Next.js app router:
    - app/layout.tsx normally is a Server Component; for interactive navbar and floating logo we mark it as a Client Component with "use client".
    - If you prefer to keep layout server, extract Navbar, FloatingLogo into client components and import them.
  */

//app/layout.tsx

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { getCookie, setCookie } from "cookies-next";  // إضافة للكوكيز
import "./globals.css";
import { easeOut } from "framer-motion";

// 🖼️ استيراد الصور من public
import logo from "@/./public/logo.svg"; 
import iconMail from "@/./public/mail.svg"; 
import iconPhone from "@/./public/phone.svg"; 
import iconWhatsapp from "@/./public/whatsapp.svg"; 

// -----------------------------
// Helper: navigation labels (AR + EN)
// -----------------------------
const NAV_ITEMS = [
  { key: "home", ar: "الرئيسية", en: "Home", href: "/home" },
  { key: "about", ar: "من نحن", en: "About", href: "/about" },
  { key: "projects", ar: "مشاريعنا", en: "Projects", href: "/home#projects" },
  { key: "contact", ar: "تواصل معنا", en: "Contact", href: "/home#contact" },
];

// -----------------------------
// Navbar Component
// -----------------------------
export function Navbar({ lang, setLang }: { lang: "ar" | "en"; setLang: (l: "ar" | "en") => void }) {
  const pathname = usePathname() || "/";
  const isRTL = lang === "ar";

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-lg bg-[rgba(30,58,95,0.25)] border-b border-[rgba(255,255,255,0.08)] shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
      <nav className={`max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
        {/* Right side (for AR) - navigation links */}
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.key} className="relative">
                <Link
                  href={item.href}
                  className="px-3 py-2 rounded-full transition-all duration-200 text-white/90 hover:text-gradient"
                >
                  <span className="relative group">
                    {isRTL ? item.ar : item.en}
                    <span className="absolute left-0 right-0 -bottom-3 h-[2px] bg-gradient-to-r from-[#FDB81C] to-[#FFD166] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Center: Logo */}
        <div className="flex-1 flex items-center justify-center pointer-events-none md:pointer-events-auto">
          <motion.div 
            key={`logo-${lang}`}  // key أكثر تحديدًا لتجنب re-mount
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="pointer-events-auto"
          >
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                alt="Alfull logo"
                className="w-14 h-14 object-contain"
              />
              <div className="hidden md:block text-white/90">
                <div className="text-sm font-medium">{lang === 'ar' ? 'الفل للمقاولات' : 'Alfull Contracting'}</div>
                <div className="text-xs text-white/40">{lang === 'ar' ? 'والتطوير العقاري' : 'and Real Estate Development'}</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Left side (for AR) - language toggle */}
        <div className="flex items-center gap-4">
          <button
            aria-label="toggle-language"
            onClick={() => {
              const newLang = lang === "ar" ? "en" : "ar";
              const googtrans = newLang === "ar" ? "/auto/ar" : "/auto/en";
              setCookie("googtrans", googtrans, { maxAge: 60 * 60 * 24 * 365 });  // حفظ لسنة
              setLang(newLang);
              // تأخير بسيط قبل reload عشان الـ setLang يطبق (اختياري، بس يقلل الأخطاء)
              setTimeout(() => window.location.reload(), 50);
            }}
            className="px-3 py-1 rounded-full border border-white/6 bg-[rgba(255,255,255,0.02)] text-white/80 hover:bg-[rgba(255,255,255,0.04)] transition"
          >
            {lang === "ar" ? "AR" : "EN"}
          </button>
        </div>
      </nav>
    </header>
  );
}

// -----------------------------
// Footer Component
// -----------------------------
export function Footer({ lang }: { lang: "ar" | "en" }) {
  const isRTL = lang === "ar";
  return (
    <footer className="mt-24 backdrop-blur-lg bg-[rgba(30,58,95,0.25)] text-white/90 border-t border-[rgba(253,184,28,0.12)] shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left column: links */}
        <div className={`${isRTL ? 'text-left' : 'text-left'}`}>
          <h4 className="text-lg font-semibold mb-4">{lang === 'ar' ? 'روابط تهمك' : 'Useful Links'}</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <a className="transition bg-gradient-to-r from-[#FDB81C] to-[#FFD166] bg-[length:0%_2px] bg-left-bottom bg-no-repeat hover:bg-[length:100%_2px] hover:text-gradient transition-all duration-300" href="#">
                {lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
              </a>
            </li>
            <li>
              <a className="transition bg-gradient-to-r from-[#FDB81C] to-[#FFD166] bg-[length:0%_2px] bg-left-bottom bg-no-repeat hover:bg-[length:100%_2px] hover:text-gradient transition-all duration-300" href="#">
                {lang === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions'}
              </a>
            </li>
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <a className="hover:text-gradient transition" href={item.href}>{lang === 'ar' ? item.ar : item.en}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column: logo + about + tax */}
        <div className="flex flex-col items-center md:items-end md:text-right">
          <Image
            src={logo}
            alt="Alfull logo"
            className="w-20 h-20 object-contain"
          />
          <p className="max-w-sm text-sm text-white/70">{lang === 'ar' ? 'شركة متخصصة في أعمال المقاولات والتطوير العقاري مع خبرة في المشاريع السكنية والتجارية.' : 'A contracting and real estate development company experienced in residential and commercial projects.'}</p>
          <div className="w-20 h-[2px] bg-gradient-to-r from-[#FDB81C] to-[#FFD166] my-4" />
          <div className="text-xs text-white/50">{lang === 'ar' ? 'الرقم الضريبي: 1234567890' : 'Tax ID: 1234567890'}</div>
        </div>
      </div>
    </footer>
  );
}

// -----------------------------
// FloatingLogo Component (modern with animation like AlAjlanInvest)
// -----------------------------
export function FloatingLogo({ lang }: { lang: "ar" | "en" }) {
  const [open, setOpen] = useState(false);

 const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: custom * 0.08, duration: 0.4, ease: easeOut },
  }),
  exit: { opacity: 0, y: 20, scale: 0.9, transition: { duration: 0.2 } },
};

  return (
    <div className="fixed bottom-6 right-6 z-60">
      <AnimatePresence>
        <motion.div 
          key={`float-${lang}`}  // key أكثر تحديدًا
          layout
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 25 }}
        >
          <div className="relative flex flex-col items-center">
            {/* الزر الرئيسي */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="floating-logo"
              className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-transform ${
                open ? "rotate-45" : ""
              }`}
            >
              {/* دائرة خلفية بتأثير الزجاج وظل */}
              <span
                className="absolute inset-0 rounded-full shadow-lg"
                style={{
                  background: "rgba(255, 209, 102, 0.25)", // اللون مع شفافية
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                }}
              ></span>

              {/* الشعار بدون خلفية */}
              {!open ? (
                <Image
                  src={logo}
                  alt="Alfull logo"
                  className="w-10 h-10 object-contain relative z-10"
                />
              ) : (
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative z-10"
                >
                  <path
                    d="M6 6L18 18M6 18L18 6"
                    stroke="var(--color-red)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>

            {/* أيقونات التواصل */}
            <AnimatePresence mode="wait">  {/* إضافة mode="wait" لمنع تداخل الـ exit/enter */}
              {open && (
                <motion.div 
                  key={`social-${lang}`}  // key للداخلية كمان
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute bottom-24 flex flex-col items-center gap-4"
                >
                  {[
                    { href: "tel:+966500000000", src: iconPhone, alt: "Phone" },
                    { href: "mailto:info@example.com", src: iconMail, alt: "Email" },
                    { href: "https://wa.me/966500000000", src: iconWhatsapp, alt: "WhatsApp" },
                  ].map((icon, i) => (
                    <motion.a
  key={`icon-${i}-${lang}`}
  href={icon.href}
  target={icon.href.startsWith("http") ? "_blank" : undefined}
  rel="noreferrer"
  custom={i} // ← هذا ضروري
  variants={itemVariants}
  className="transition hover:-translate-y-1"
>

                      <Image
                        src={icon.src}
                        alt={icon.alt}
                        className="w-11 h-11 object-contain"
                      />
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// -----------------------------
// RootLayout (use as app/layout.tsx)
// -----------------------------
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<"ar" | "en">("ar");

  // useEffect الأول: للـ script و الكوكيز (مرة واحدة فقط، بدون loop)
  useEffect(() => {
    // تحميل سكريبت Google Translate إذا ما كان محمل
    if (!window.googleTranslateElementInit) {
      const addScript = document.createElement("script");
      addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(addScript);
      window.googleTranslateElementInit = () => {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: "ar",  // اللغة الأصلية عربي
            includedLanguages: "ar,en",  // دعم عربي وإنجليزي فقط
            layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      };
    }

    // تحديد اللغة من الكوكيز عند التحميل (مرة واحدة)
    const googtrans = getCookie("googtrans");
    if (googtrans && googtrans.includes("en")) {
      setLang("en");
    } else {
      setLang("ar");
    }
  }, []);  // dependency فارغة: يشتغل مرة واحدة فقط

  // useEffect الثاني: للـ direction فقط (بدون setLang)
  useEffect(() => {
    // set direction when lang changes
    document.documentElement.lang = lang === "ar" ? "ar" : "en";
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <html>
      <body className="bg-[#121921] text-white min-h-[100vh] h-auto overflow-y-auto antialiased">
        {/* div مخفي لـ Google Translate */}
        <div id="google_translate_element" style={{ display: "none" }}></div>

        {/* Navbar */}
        <Navbar lang={lang} setLang={setLang} />

        {/* content wrapper with top offset because navbar is fixed height 80px */}
        <main className="pt-20 relative">
          {children}
          <Footer lang={lang} />
        </main>

        {/* Floating logo */}
        <FloatingLogo lang={lang} />
      </body>
    </html>
  );
}