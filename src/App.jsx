import Box from "./components/Box";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function App() {
  return (
    <section className="flex flex-col bg-background font-fira font-extrabold text-white">
      <Hero />
      <Box />
      <Features />
      <Faq />
      <Footer />
    </section>
  );
}
