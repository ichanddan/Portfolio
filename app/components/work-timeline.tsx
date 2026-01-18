import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function WorkTimeline() {
  const experiences = [
    {
      company: "AiQwip",
      roles: [
        {
          title: "Software Engineer",
          period: "Dec 2025 - Now",
          description: [
            "Implemented advanced state management with Redux and Context API",
            "Led code reviews and mentored junior developers",
            "Integrated third-party APIs and services to expand functionality",
          ],
        },
      ],
    },
    {
      company: "Aasa Technology",
      roles: [
        {
          title: "Junior Full Stack Developer",
          period: "Dec 2024 - Dec 2025",
          description: [
            "Architected and developed full-stack applications using MERN stack",
            "Improved system performance by 40% through optimization techniques",
            "Implemented advanced state management with Redux and Context API",
            "Led code reviews and mentored junior developers",
            "Integrated third-party APIs and services to expand functionality",
          ],
        },
      ],
    },
    {
      company: "Daps Software",
      roles: [
        {
          title: "Frontend Developer",
          period: "May 2024 - 16 Dec 2025",
          description: [
            "Developed and maintained MERN stack applications",
            "Increased user engagement by 30% through UI/UX improvements",
            "Collaborated with design team to implement pixel-perfect interfaces",
            "Participated in Agile ceremonies and sprint planning",
          ],
        },
        {
          title: "Frontend Developer Intern",
          period: "Feb 2024 - May 2024",
          description: [
            "Built responsive user interfaces using React.js and Tailwind CSS",
            "Improved page load times by 10% through optimization",
            "Collaborated with backend team for API integration",
            "Created reusable component libraries",
          ],
        },
      ],
    },
  ]

  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{exp.company}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative border-l border-muted-foreground/20 pl-6 ml-2">
              {exp.roles.map((role, roleIndex) => (
                <div key={roleIndex} className="mb-8 last:mb-0">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] mt-1.5"></div>
                  <h3 className="text-lg font-semibold">{role.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{role.period}</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {role.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

