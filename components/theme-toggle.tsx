"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="h-10 w-10 rounded-xl border-2 border-[#eaf197]/40 hover:border-[#d0c922] hover:shadow-gold transition-all"
      >
        <Sun className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="h-10 w-10 rounded-xl border-2 border-[#b6eeff]/40 hover:border-[#21b9ff] hover:shadow-gold transition-all group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#d6f4ff] to-[#b6eeff] dark:from-[#0f5999] dark:to-[#0f355c] opacity-0 group-hover:opacity-20 transition-opacity"></div>
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-[#21b9ff]" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-[#4bd4ff]" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

