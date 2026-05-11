"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const education = [
  {
    school: "Manipal University Jaipur",
    degree: "Master of Computer Applications (MCA)",
    field: "Distance Learning",
    period: "2023 – 2025",
    grade: "SGPA: 9.57 / 10",
    description: [
      "Specialized in advanced software development, system design, and database management.",
      "Completed full-stack development projects applying modern software engineering principles.",
    ],
  },
  {
    school: "Mahatma Gandhi Kashi Vidyapith University",
    degree: "Bachelor of Computer Applications (BCA)",
    field: "Computer Science",
    period: "2018 – 2021",
    grade: "Percentage: 61%",
    description: [
      "Built a strong foundation in core computer science concepts, algorithms, and programming.",
      "Gained hands-on experience with web development and relational databases.",
    ],
  },
  {
    school: "National Institute of Electronics & Information Technology (NIELIT)",
    degree: "O Level Certification",
    field: "Computer Software & Media Applications",
    period: "2021 – 2023",
    grade: "Grade: A+",
    description: [
      "Completed government-certified IT program covering programming, networking, and web development.",
      "Maintained excellent academic performance throughout the program.",
    ],
  },
];

function AnimatedCard({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      {children}
    </motion.div>
  );
}

export default function EducationTimeline() {
  return (
    <div className="space-y-6">
      {education.map((edu, index) => (
        <AnimatedCard key={index} index={index}>
          <Card className="transition-all duration-200 hover:shadow-md hover:shadow-indigo-100 dark:hover:shadow-indigo-900/30 hover:border-indigo-200 dark:hover:border-indigo-800">
            <CardHeader>
              <CardTitle className="text-base">{edu.school}</CardTitle>
              <p className="text-sm font-semibold text-primary">{edu.degree}</p>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <p className="text-sm text-muted-foreground">{edu.field} · {edu.period}</p>
                <span className="text-xs font-medium bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300 px-2 py-0.5 rounded-full">
                  {edu.grade}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {edu.description.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-muted-foreground/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </AnimatedCard>
      ))}
    </div>
  );
}
