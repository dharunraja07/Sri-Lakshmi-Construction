"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-full border border-warm dark:border-darkSurface-border bg-warm-card dark:bg-darkSurface-card flex items-center justify-center opacity-60 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-full border border-warm dark:border-darkSurface-border bg-warm-card dark:bg-darkSurface-card text-warm-primary dark:text-darkSurface-text hover:border-olive hover:text-olive dark:hover:text-olive-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive ${className}`}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform duration-200 rotate-0 scale-100" />
      ) : (
        <Moon className="w-4 h-4 text-warm-muted transition-transform duration-200 rotate-0 scale-100" />
      )}
    </button>
  );
}
