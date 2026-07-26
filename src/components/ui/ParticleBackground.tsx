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
      {/* Soft Ambient Radial Light */}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] rounded-full blur-[140px] transition-all duration-700 ${
          isDark
            ? "bg-blue-950/20"
            : "bg-blue-100/50"
        }`}
      />

      {/* Geometric Soft Grid Lines */}
      <div
        className={`absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] ${
          isDark ? "opacity-30" : "opacity-40"
        }`}
      />
    </div>
  );
}
