// app/layout.tsx
"use client";

import React, { useEffect, useState, useRef  } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import Image from "next/image";
import { getCookie, setCookie } from "cookies-next";
import "./globals.css";

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
export function Navbar({
  lang,
  setLang,
}: {
  lang: "ar" | "en";
  setLang: (l: "ar" | "en") => void;
}) {
  const pathname = usePathname() || "/";
  const isRTL = lang === "ar";
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // 🔹 إغلاق القائمة عند النقر خارجها
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // 🔹 انميشن للقائمة
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: easeOut } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.25, ease: easeOut } },
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-lg bg-[rgba(30,58,95,0.25)] border-b border-[rgba(255,255,255,0.08)] shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
      <nav
        className={`max-w-7xl mx-auto px-4 md:px-10 h-20 flex items-center justify-between ${
          isRTL ? "flex-row-reverse" : ""
        }`}
      >
        {/* روابط التنقل */}
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

        {/* الشعار */}
        <div className="flex-1 flex items-center justify-center pointer-events-none md:pointer-events-auto">
          <Image 
  src="/logo.png" 
  alt="Alfull logo" 
  width={56} 
  height={56} 
  className="w-12 h-12 md:w-14 md:h-14 object-contain" 
/>
        </div>

        {/* زر اللغة + قائمة الجوال */}
        <div className="flex items-center gap-4">
          <button
            aria-label="toggle-language"
            onClick={() => {
              const newLang = lang === "ar" ? "en" : "ar";
              const googtrans = newLang === "ar" ? "/auto/ar" : "/auto/en";
              setCookie("googtrans", googtrans, { maxAge: 60 * 60 * 24 * 365 });
              setLang(newLang);
              setTimeout(() => window.location.reload(), 50);
            }}
            className="px-3 py-1 rounded-full border border-white/10 bg-[rgba(255,255,255,0.03)] text-white/80 hover:bg-[rgba(255,255,255,0.06)] transition"
          >
            {lang === "ar" ? "AR" : "EN"}
          </button>

          {/* زر قائمة الجوال */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* القائمة المنسدلة بانميشن */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="md:hidden absolute top-20 inset-x-0 bg-[#1e3a5f]/95 backdrop-blur-md border-t border-white/10 flex flex-col items-center py-6 space-y-4"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-white/90 text-lg hover:text-[#fdb81c] transition"
                onClick={() => setMenuOpen(false)}
              >
                {isRTL ? item.ar : item.en}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
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

        <div className="flex flex-col items-center md:items-end md:text-right">
         <Image
  src="/logo.png"
  alt="Alfull logo"
  width={80}
  height={80}
  className="w-20 h-20 object-contain"
/>
          <p className="max-w-sm text-sm text-white/70">{lang === 'ar' ? 'معتمدة بالتصنيف الرابع ومطوّر عقاري رسمي من وزارة الإسكان، بخبرة تفوق 30 عاماً في مشاريع المقاولات والبنية التحتية والتطوير العقاري.' : 'A contracting and real estate development company experienced in residential and commercial projects.'}</p>
          <div className="w-20 h-[2px] bg-gradient-to-r from-[#FDB81C] to-[#FFD166] my-4" />
          <div className="text-xs text-white/50">{lang === 'ar' ? 'الرقم الضريبي: 314157857600003' : 'Tax ID: 314157857600003'}</div>
        </div>
      </div>
    </footer>
  );
}

// -----------------------------
// FloatingLogo Component
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
          key={`float-${lang}`} 
          layout
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 25 }}
        >
          <div className="relative flex flex-col items-center">
            <button
              onClick={() => setOpen(!open)}
              aria-label="floating-logo"
              className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-transform ${
                open ? "rotate-45" : ""
              }`}
            >
              <span
                className="absolute inset-0 rounded-full shadow-lg"
                style={{
                  background: "rgba(255, 209, 102, 0.25)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                }}
              ></span>

              {!open ? (
                <Image
  src="/logo.png"
  alt="Alfull logo"
  width={40}
  height={40}
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

            <AnimatePresence mode="wait">
              {open && (
                <motion.div 
                  key={`social-${lang}`} 
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute bottom-24 flex flex-col items-center gap-4"
                >
                  {[
  { href: "tel:+966505304806", src: "/phone.svg", alt: "Call" },
  { href: "mailto:office@alful.net", src: "/mail.svg", alt: "Email" },
  { href: "https://wa.me/966505304806", src: "/whatsapp.svg", alt: "WhatsApp" },
].map((icon, i) => (
  
                    <motion.a
                      key={`icon-${i}-${lang}`}
                      href={icon.href}
                      target={icon.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      custom={i}
                      variants={itemVariants}
                      className="transition hover:-translate-y-1"
                    >
                      
   <Image
      src={icon.src}
      alt={icon.alt}
      width={44}
      height={44}
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

  useEffect(() => {
    // Google Translate script
    if (!(window as any).googleTranslateElementInit) {
      const addScript = document.createElement("script");
      addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(addScript);
      (window as any).googleTranslateElementInit = () => {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: "ar",
            includedLanguages: "ar,en",
            layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      };
    }

    // تحديد اللغة من الكوكيز
    const cookieValue = getCookie("googtrans");
    let googtrans = "";
    if (typeof cookieValue === "string") googtrans = cookieValue;
    if (googtrans.includes("en")) setLang("en");
    else setLang("ar");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "ar" ? "ar" : "en";
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <html>
      <body className="bg-[#121921] text-white min-h-[100vh] h-auto overflow-y-auto antialiased">
        <div id="google_translate_element" style={{ display: "none" }}></div>
        <Navbar lang={lang} setLang={setLang} />
        <main className="pt-20 relative">
          {children}
          <Footer lang={lang} />
        </main>
        <FloatingLogo lang={lang} />
      </body>
    </html>
  );
}
