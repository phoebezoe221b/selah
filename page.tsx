import Hero from "@/components/Hero";
import SelahRibbon from "@/components/SelahRibbon";
import FeaturedReflection from "@/components/FeaturedReflection";
import ReflectionLibrary from "@/components/ReflectionLibrary";
import WhyIWrite from "@/components/WhyIWrite";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[var(--background)]">
      <Hero />
      <SelahRibbon />
      <FeaturedReflection />
      <ReflectionLibrary />
      <WhyIWrite />
    </main>
  );
}