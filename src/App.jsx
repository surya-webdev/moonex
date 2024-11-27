import { useEffect } from "react";
import Box from "./components/Box";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Footers from "./components/Footers";
import Hero from "./components/Hero";

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (entry.isIntersecting) {
            entry.target.classList.remove("section--hidden");
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      },
    );

    const section = document.querySelectorAll(".section");

    section.forEach((entries) => {
      observer.observe(entries), entries.classList.add("section--hidden");
    });
  }, []);

  return (
    <section className="flex flex-col bg-background font-fira text-white">
      <Hero />
      <Box />
      <Features />
      <Faq />
      <Footers />
    </section>
  );
}
