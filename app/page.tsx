"use client";
import HeroSection from "./components/HeroSection";
import WorkSection from "./components/WorkSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WorkSection />
      <ContactSection />
    </main>
  );
}