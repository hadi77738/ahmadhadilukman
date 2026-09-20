"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ParticleBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top primary ambient light orb */}
      <div
        className={`absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[500px] rounded-full blur-[140px] transition-all duration-700 pointer-events-none ${
          isDark
            ? "bg-gradient-to-b from-blue-600/15 via-indigo-600/10 to-transparent"
            : "bg-gradient-to-b from-blue-200/50 via-sky-100/40 to-transparent"
        }`}
      />

      {/* Secondary accent orb on right */}
      <div
        className={`absolute top-1/3 -right-40 w-[450px] h-[450px] rounded-full blur-[160px] transition-all duration-700 pointer-events-none ${
          isDark
            ? "bg-cyan-600/10"
            : "bg-blue-100/40"
        }`}
      />

      {/* Subtle geometric dot matrix */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isDark
            ? "opacity-20 [background-image:radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:32px_32px]"
            : "opacity-35 [background-image:radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:32px_32px]"
        }`}
      />
    </div>
  );
}

