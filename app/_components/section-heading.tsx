import type React from "react";

export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="w-1 h-8 rounded-full bg-gradient-to-b from-indigo-600 to-cyan-500 shrink-0" />
      <h2 className="text-3xl font-bold">{children}</h2>
    </div>
  );
}
