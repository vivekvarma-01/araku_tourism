"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()

  // Ensure correct theme when running on server (SSR)
  const isDark = (theme === "dark") || (theme === "system" && resolvedTheme === "dark")

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
      {/* Show Sun in light mode, Moon in dark mode */}
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all ${isDark ? "scale-0 rotate-90" : "scale-100 rotate-0"}`}
      />
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${isDark ? "scale-100 rotate-0" : "scale-0 -rotate-90"}`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
