import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React.js", logo: "/logos/react.svg" },
      { name: "Next.js", logo: "/logos/nextjs.svg" },
      { name: "TypeScript", logo: "/logos/typescript.svg" },
      { name: "Tailwind CSS", logo: "/logos/tailwind.svg" },
      { name: "Redux Toolkit", logo: null },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", logo: "/logos/nodejs.svg" },
      { name: "Express.js", logo: "/logos/express.svg" },
      { name: "Prisma ORM", logo: "/logos/prisma.svg" },
      { name: "JWT Auth", logo: null },
      { name: "WebSocket", logo: null },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "MongoDB", logo: "/logos/mongodb.svg" },
      { name: "MySQL", logo: "/logos/mysql.svg" },
      { name: "Mongoose", logo: "/logos/mongodb.svg" },
    ],
  },
  {
    name: "Mobile",
    skills: [
      { name: "React Native", logo: "/logos/react.svg" },
      { name: "Expo", logo: "/logos/expo.svg" },
    ],
  },
  {
    name: "UI Libraries",
    skills: [
      { name: "shadcn/ui", logo: "/logos/shadcn.svg" },
      { name: "Ant Design", logo: "/logos/antd.svg" },
      { name: "NextUI", logo: "/logos/nextui.svg" },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Git / GitHub", logo: null },
      { name: "Vercel", logo: "/logos/vercel.svg" },
      { name: "Postman", logo: null },
      { name: "Figma", logo: null },
      { name: "JIRA", logo: null },
    ],
  },
];

export default function SkillsSection() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {skillCategories.map((category, index) => (
        <Card key={index}>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {category.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="flex items-center gap-1.5 text-sm"
                >
                  {skill.logo && (
                    <Image
                      src={skill.logo}
                      alt={skill.name}
                      width={16}
                      height={16}
                      className="shrink-0"
                    />
                  )}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
