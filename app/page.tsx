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
        <section
          id="home"
          className="flex flex-col md:flex-row items-start justify-between gap-12 mb-20"
        >
          <div>
            <h1 className="text-4xl font-bold mb-4">
              Hi chandan here <WavingHand />
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-[480px]">
              MERN Stack Developer with expertise in building dynamic, scalable, and high-performance web applications, delivering seamless user experiences through modern technologies.
            </p>
            <div className="flex gap-4">
              <Button asChild variant="outline">
                <Link href="https://github.com/ichanddan" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  Github
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link
                  href="https://www.linkedin.com/in/ichanddan"
                  target="_blank"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="mailto:code.use.cm@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative w-48 h-48 rounded-full overflow-hidden shrink-0">
            {            // eslint-disable-next-line @next/next/no-img-element
            }            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQFT3-6ZLcJklA/profile-displayphoto-shrink_800_800/B56Zd0t4IUG0Ac-/0/1750009876246?e=1760572800&v=beta&t=kjYN2V3xyEaoqIM6kYpLYzkmo03JImHGASyBZcqCaPM"
              alt="Profile"
              className="object-cover"
              width={192}
              height={192}
            />
          </div>
        </section>

        <section id="skills" className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Skills</h2>
          <SkillsSection />
        </section>

        <section className="mb-20">
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
                title="Dummy API"
                description="Revolutionize your development workflow with our customizable dummy API. Sign up, create projects, define endpoints, configure data, and test seamlessly all in one platform."
                link="https://dmy-api.vercel.app/"
                technologies={["TypeScript", "Next.js", "MongoDB", "Tailwind"]}
              />
              <ProjectCard
                title="URL Shortener"
                description="A modern URL shortener service that allows users to create concise and shareable links. Built with performance and user experience in mind."
                link="https://ijkl.vercel.app/"
                technologies={["TypeScript", "Next.js", "Vercel", "Tailwind"]}
              />
            </TabsContent>

            <TabsContent value="organizational" className="space-y-6">
              <ProjectCard
                title="Nutri Value"
                description="It is nutrition based application , real-time track nutation and planing food dairy date wage."
                technologies={["React Native", "React", "Node", "Express", "Prisma ORM"]}
                organization="Aasa Technology"
              />
              <ProjectCard
                title="Sham Rock india"
                description="Lead generation admin panel to track all live leads from applications, initiate forms, and enable real-time chat between admins and enquired users."
                link="https://keyshell.net/"
                technologies={["React", "WebSocket", "Node", "Express", "MySQL", "Prisma ORM"]}
                organization="Aasa Technology"
              />

              <ProjectCard
                title="School Sphere"
                description="A school management platform that enables parents and teacher track student performance, as well as attendance."
                link="https://sphere-school-admin.in1.apiqcloud.com/"
                technologies={["React", "Tailwind", "Node", "Express", "Prisma ORM"]}
                organization="Aasa Technology"
              />

              <ProjectCard
                title="Remedies Pharma"
                description="E-commerce-like platform specialized for medicine with advanced search and listing features."
                technologies={["Next.js", 'Tailwind', "Prisma ORM", "Mysql"]}
                organization="Aasa Technology"
              />
              <ProjectCard
                title="Infinity Motors"
                description="Comprehensive vehicle and finance management platform with features for inventory tracking, customer management, and financial operations."
                technologies={["React", "Tailwind", "Node", "Express", "Sequelize ORM", "MySQL"]}
                organization="Daps Software"
              />

            </TabsContent>
          </Tabs>
        </section>
        <section id="contact" className="mb-20">
          <h2 className="text-2xl font-bold mb-8">get in touch</h2>
          <p className="text-lg text-muted-foreground mb-6">
            I&apos;m always interested in hearing about new projects and
            opportunities.
          </p>
          <Button asChild>
            <Link href="mailto:code.use.cm@gmail.com">Send me an email</Link>
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
