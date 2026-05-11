"use client";

import { useEffect, useState } from "react";
import FloatingNav from "./_components/floating-nav";
import ThemeToggle from "./_components/theme-toggle";
import HeroSection from "./_components/hero-section";
import FeaturedProject from "./_components/featured-project";
import SkillsSection from "./_components/skills-section";
import ExperienceSection from "./_components/experience-section";
import ProjectsSection from "./_components/projects-section";
import ContactSection from "./_components/contact-section";
import SiteFooter from "./_components/site-footer";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background">
      <FloatingNav />
      <ThemeToggle />
      <HeroSection />
      <FeaturedProject />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <SiteFooter />
    </div>
  );
}
