import Hero from "@/components/Hero";
import ReflectionLibrary from "@/components/ReflectionLibrary";
import WhyIWrite from "@/components/WhyIWrite";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[var(--background)]">
      {/* Cinematic Hero */}
      <Hero />

      {/* Reflection Library */}
      <ReflectionLibrary />

      {/* Why I Write */}
      <WhyIWrite />
    </main>
  );
}