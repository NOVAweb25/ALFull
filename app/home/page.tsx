//app/home/page.tsx

"use client";
import { useEffect } from "react";
import Lable from "./lable";
import AboutSection from "./about";
import Projects from "./projects";
import Vision from "./Vision";
import Values from "./Values";
import VisionValues from "./VisionValues";
import Contact from "./contact";

export default function HomePage() {
  useEffect(() => {
    // السماح بالتمرير السلس في الصفحة كلها
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <main className="flex flex-col">
      <section id="lable" className="min-h-screen">
        <Lable />
      </section>

      <section id="about" className="min-h-screen">
        <AboutSection />
      </section>

      <section id="projects" className="min-h-screen">
        <Projects />
      </section>

      <section id="vision-values" className="min-h-screen">
  <VisionValues />
</section>

      <section id="contact" className="min-h-screen">
        <Contact />
      </section>
    </main>
  );
}
