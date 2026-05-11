"use client";

import { Briefcase, Code2, FolderOpen, Home, Mail } from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function FloatingNav() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop — fixed left side, vertical pill */}
      <div className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-50 flex-col gap-1 bg-background/80 backdrop-blur-sm border rounded-full px-2 py-3 shadow-lg shadow-indigo-100/50 dark:shadow-indigo-900/20">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            title={label}
            className="group relative w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-white hover:bg-gradient-to-b hover:from-indigo-600 hover:to-cyan-500 transition-all duration-200"
          >
            <Icon className="h-4 w-4" />
            <span className="absolute left-12 bg-background border text-foreground text-xs px-2 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-sm">
              {label}
            </span>
          </button>
        ))}
      </div>

      {/* Mobile — fixed bottom center, horizontal pill */}
      <div className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex gap-1 bg-background/90 backdrop-blur-md border rounded-full px-3 py-2 shadow-lg shadow-indigo-100/50 dark:shadow-indigo-900/20">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            title={label}
            className="w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-white hover:bg-gradient-to-b hover:from-indigo-600 hover:to-cyan-500 transition-all duration-200"
          >
            <Icon className="h-4 w-4" />
          </button>
        ))}
      </div>
    </>
  );
}
