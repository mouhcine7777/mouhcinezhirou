"use client";
import HeroSection from "./components/HeroSection";
import WorkSection from "./components/WorkSection";
import TrustedBy from "./components/TrustedBy";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WorkSection />
      <TrustedBy />
      <ContactSection />
    </main>
  );
}