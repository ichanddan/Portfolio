import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedProject() {
  return (
    <section className="py-10">
      <div className="max-w-[768px] mx-auto px-4">
        <div className="p-[2px] rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500">
          <div className="bg-card rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-semibold bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-3 py-1 rounded-full">
                ✦ Featured
              </span>
              <span className="text-xs font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                Currently Building
              </span>
            </div>

            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-2xl font-bold">Imeld AI</h3>
              <Link
                href="https://www.imeld.ai/"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors mt-1"
              >
                <ExternalLink className="h-5 w-5" />
              </Link>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-[580px]">
              Enterprise AI platform integrating Azure OpenAI, Google Gemini, and Anam.ai with
              a real-time WebSocket backend and a Python/FastAPI service layer. Joined as
              Frontend Developer and transitioned to Full Stack ownership — responsible for UI,
              backend APIs, and PostgreSQL data architecture.
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              <span className="text-xs font-semibold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 px-3 py-1 rounded-full">
                ✓ VAPT Passed
              </span>
              <span className="text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 px-3 py-1 rounded-full">
                ◑ SOC2 Certification In Progress
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {[
                { name: "Next.js", logo: "/logos/nextjs.svg", invert: true },
                { name: "Python", logo: "/logos/python.svg", invert: false },
                { name: "FastAPI", logo: "/logos/fastapi.svg", invert: false },
                { name: "PostgreSQL", logo: "/logos/postgresql.svg", invert: false },
                { name: "Redis", logo: "/logos/redis.svg", invert: true },
                { name: "WebSocket", logo: "/logos/websocket.svg", invert: true },
                { name: "Azure OpenAI", logo: "/logos/azure.svg", invert: true },
                { name: "Google Gemini", logo: "/logos/Google_Gemini_logo.svg", invert: false },
                { name: "Anam.ai", logo: null, invert: false },
              ].map((tech) => (
                <Badge key={tech.name} variant="secondary" className="flex items-center gap-1">
                  {tech.logo && (
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={14}
                      height={14}
                      className={`shrink-0${tech.invert ? " dark:invert" : ""}`}
                    />
                  )}
                  {tech.name}
                </Badge>
              ))}
            </div>

            <p className="text-xs text-muted-foreground">
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent font-semibold">
                Aiqwip Technology Pvt. Ltd.
              </span>
              {" · "}December 2025 – Present
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
