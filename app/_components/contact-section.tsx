"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SectionHeading from "./section-heading";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-16">
      <div className="max-w-[768px] mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-gradient-to-br from-indigo-600/10 to-cyan-500/10 border border-indigo-200/50 dark:border-indigo-800/50 p-10"
        >
          <SectionHeading>Get in touch</SectionHeading>
          <p className="text-base text-muted-foreground mb-6 max-w-[480px]">
            I&apos;m always interested in hearing about new projects and opportunities.
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white hover:opacity-90 border-0"
          >
            <Link href="mailto:code.us.cm@gmail.com">Send me an email</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
