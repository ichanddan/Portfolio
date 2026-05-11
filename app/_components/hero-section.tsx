"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import WavingHand from "./waving-hand";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export default function HeroSection() {
  return (
    <section id="home" className="py-16">
      <div className="max-w-[768px] mx-auto px-4">
        <motion.div variants={stagger} initial="initial" animate="animate">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-8">
            <div className="flex-1">
              <motion.p
                variants={fadeUp}
                className="text-sm font-medium text-muted-foreground mb-2 tracking-wide uppercase"
              >
                Software Engineer · Full Stack Developer
              </motion.p>
              <motion.h1 variants={fadeUp} className="text-5xl font-bold mb-4 leading-tight">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                  Chandan
                </span>{" "}
                <WavingHand />
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-base text-muted-foreground mb-6 max-w-[480px] leading-relaxed"
              >
                Results-driven Software Engineer with 2+ years of experience building scalable
                web and mobile applications using the MERN stack, TypeScript, Next.js, and React
                Native. Focused on clean architecture, performant UIs, and collaborative agile
                delivery.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
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
                <Button
                  asChild
                  className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white hover:opacity-90 border-0"
                >
                  <Link href="/Chandan_Kumar_Maurya_Resume.pdf" target="_blank" download>
                    Download CV
                  </Link>
                </Button>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="shrink-0 self-center md:self-start mt-2">
              <div className="relative w-40 h-40">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-600 to-cyan-500 p-[3px]">
                  <div className="w-full h-full rounded-full bg-background" />
                </div>
                <Image
                  src="https://avatars.githubusercontent.com/u/131549483?v=4"
                  alt="Chandan Kumar Maurya"
                  fill
                  className="rounded-full object-cover p-[3px]"
                />
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-8 pt-6 border-t">
            {[
              { value: "2+", label: "Years experience" },
              { value: "8+", label: "Projects shipped" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
