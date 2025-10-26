"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark"
type ColorTheme = "default" | "blue" | "green" | "purple"

type ThemeContextType = {
  theme: Theme
  colorTheme: ColorTheme
  toggleTheme: () => void
  setColorTheme: (theme: ColorTheme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light")
  const [colorTheme, setColorThemeState] = useState<ColorTheme>("default")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") as Theme | null
    const savedColorTheme = localStorage.getItem("colorTheme") as ColorTheme | null

    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    }

    if (savedColorTheme) {
      setColorThemeState(savedColorTheme)
      document.documentElement.className = document.documentElement.className.replace(/theme-\w+/g, "")
      if (savedColorTheme !== "default") {
        document.documentElement.classList.add(`theme-${savedColorTheme}`)
      }
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  const setColorTheme = (newColorTheme: ColorTheme) => {
    setColorThemeState(newColorTheme)
    localStorage.setItem("colorTheme", newColorTheme)
    document.documentElement.className = document.documentElement.className.replace(/theme-\w+/g, "")
    if (newColorTheme !== "default") {
      document.documentElement.classList.add(`theme-${newColorTheme}`)
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <ThemeContext.Provider value={{ theme, colorTheme, toggleTheme, setColorTheme }}>{children}</ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
