import Box from "./components/Box";
import Hero from "./components/Hero";

export default function App() {
  return (
    <section className="flex flex-col bg-background font-fira font-extrabold text-white">
      <Hero />
      <Box />
    </section>
  );
}
