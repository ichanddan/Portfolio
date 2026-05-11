import { Button } from "@/components/ui/button";
import Link from "next/link";
import SectionHeading from "./section-heading";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-[768px] mx-auto px-4">
        <div className="rounded-2xl bg-gradient-to-br from-indigo-600/10 to-cyan-500/10 border border-indigo-200/50 dark:border-indigo-800/50 p-10">
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
        </div>
      </div>
    </section>
  );
}
