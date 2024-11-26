import Box from "./components/Box";
import Hero from "./components/Hero";

export default function App() {
  return (
    <section className="-z-[1000000000000000000] flex flex-col bg-background font-fira font-extrabold text-white">
      <Hero />
      <Box />
    </section>
  );
}
