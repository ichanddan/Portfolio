"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import EducationTimeline from "./components/education-timeline";
import ProjectCard from "./components/project-card";
import SkillsSection from "./components/skills-section";
import WavingHand from "./components/waving-hand";
import WorkTimeline from "./components/work-timeline";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 bg-background/80 backdrop-blur-sm z-50">
        <div className="max-w-[768px] mx-auto px-4 py-4 flex items-center justify-between">
          <nav className="flex gap-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium hover:text-primary"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm font-medium hover:text-primary"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-sm font-medium hover:text-primary"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium hover:text-primary"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-primary"
            >
              Contact
            </button>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </header>

      <main className="max-w-[768px] mx-auto px-4 py-12">
        <section id="home" className="flex flex-col gap-8 mb-20">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-2 tracking-wide uppercase">
              Software Engineer · Full Stack Developer
            </p>
            <h1 className="text-4xl font-bold mb-4">
              Hi, I&apos;m Chandan <WavingHand />
            </h1>
            <p className="text-base text-muted-foreground mb-6 max-w-[560px] leading-relaxed">
              Results-driven Software Engineer with 2+ years of experience building scalable web and
              mobile applications using the MERN stack, TypeScript, Next.js, and React Native.
              Focused on clean architecture, performant UIs, and collaborative agile delivery.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <Link href="https://github.com/ichanddan" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://www.linkedin.com/in/ichanddan" target="_blank">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="mailto:code.us.cm@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </Link>
              </Button>
              <Button asChild>
                <Link href="/Chandan_Kumar_Maurya_Resume.pdf" target="_blank" download>
                  Download CV
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 pt-4 border-t">
            <div>
              <p className="text-2xl font-bold">2+</p>
              <p className="text-sm text-muted-foreground">Years experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold">8+</p>
              <p className="text-sm text-muted-foreground">Projects shipped</p>
            </div>
            <div>
              <p className="text-2xl font-bold">10k+</p>
              <p className="text-sm text-muted-foreground">Users served</p>
            </div>
          </div>
        </section>

        <section id="skills" className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Skills</h2>
          <SkillsSection />
        </section>

        <section id="experience" className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Experience</h2>
          <Tabs defaultValue="work" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="work">Work</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>
            <TabsContent value="work">
              <WorkTimeline />
            </TabsContent>
            <TabsContent value="education">
              <EducationTimeline />
            </TabsContent>
          </Tabs>
        </section>

        <section id="projects" className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Featured projects</h2>
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="personal">Personal</TabsTrigger>
              <TabsTrigger value="organizational">Organizational</TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="space-y-6">
              <ProjectCard
                title="eSportsPedia"
                description="Full-stack esports wiki platform covering Indian gaming — player profiles, team pages, tournaments, and news articles. SEO-optimized with Next.js SSR/SSG and Server Actions for backend logic, eliminating a separate API layer."
                link="https://esportspedia.org"
                technologies={["TypeScript", "Next.js", "Tailwind", "Shadcn UI"]}
              />
              <ProjectCard
                title="Dummy API"
                description="Customizable dummy API platform — sign up, create projects, define endpoints, configure response data, and test seamlessly all in one place."
                link="https://dmy-api.vercel.app/"
                technologies={["TypeScript", "Next.js", "MongoDB", "Tailwind"]}
              />
              <ProjectCard
                title="URL Shortener"
                description="Modern URL shortener that lets users create concise, shareable links. Built with performance and user experience in mind."
                link="https://ijkl.vercel.app/"
                technologies={["TypeScript", "Next.js", "Vercel", "Tailwind"]}
              />
            </TabsContent>

            <TabsContent value="organizational" className="space-y-6">
              <ProjectCard
                title="School Spares"
                description="Full-stack e-commerce platform with secure JWT authentication, RESTful APIs, and role-based access control for admin and customer workflows. Optimized MongoDB queries reduced average API response time by ~35%."
                technologies={["React", "Node", "Express", "MongoDB", "Ant Design", "Prisma ORM"]}
                organization="Aasa Technology"
              />
              <ProjectCard
                title="ShamRock India"
                description="Lead-generation admin dashboard with modular, component-based widgets, drag-and-drop layouts, and real-time notifications via WebSocket for live data streams and operational visibility."
                link="https://keyshell.net/"
                technologies={["React", "Node", "Express", "MySQL", "Ant Design", "WebSocket", "Prisma ORM"]}
                organization="Aasa Technology"
              />
              <ProjectCard
                title="Nutri Value"
                description="Cross-platform nutrition tracking app (iOS, Android, Web) with secure authentication, REST APIs, offline support, and daily analytics for goal tracking. Seamless sync between mobile and web via Prisma ORM and MySQL."
                technologies={["React Native", "Node", "Express", "MySQL", "Prisma ORM"]}
                organization="Aasa Technology"
              />
            </TabsContent>
          </Tabs>
        </section>
        <section id="contact" className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Get in touch</h2>
          <p className="text-lg text-muted-foreground mb-6">
            I&apos;m always interested in hearing about new projects and
            opportunities.
          </p>
          <Button asChild>
            <Link href="mailto:code.us.cm@gmail.com">Send me an email</Link>
          </Button>
        </section>
      </main>

      <footer className="border-t py-6">
        <div className="max-w-[768px] mx-auto px-4 text-center text-sm text-muted-foreground">
          © 2025 Chandan Kumar Maurya. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
