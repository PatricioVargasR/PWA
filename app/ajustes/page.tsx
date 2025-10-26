"use client"

import { Navigation } from "@/components/navigation"
import { useTheme } from "@/components/theme-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Sun, Moon, Palette } from "lucide-react"

export default function AjustesPage() {
  const { theme, colorTheme, toggleTheme, setColorTheme } = useTheme()

  const colorThemes = [
    { id: "default", name: "Ámbar", color: "bg-[oklch(0.65_0.19_65)]" },
    { id: "blue", name: "Azul", color: "bg-[oklch(0.55_0.18_240)]" },
    { id: "green", name: "Verde", color: "bg-[oklch(0.55_0.15_150)]" },
    { id: "purple", name: "Púrpura", color: "bg-[oklch(0.60_0.20_300)]" },
  ]

  return (
    <div className="min-h-screen pb-20 md:pb-8 md:pt-20">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Ajustes</h1>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {theme === "dark" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                Apariencia
              </CardTitle>
              <CardDescription>Personaliza cómo se ve en tu dispositivo.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Modo Oscuro</p>
                  <p className="text-sm text-muted-foreground">Activa o desactiva el tema oscuro.</p>
                </div>
                <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Tema de Colores
              </CardTitle>
              <CardDescription>Elige entre diferentes paletas de colores.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {colorThemes.map((ct) => (
                  <Button
                    key={ct.id}
                    variant={colorTheme === ct.id ? "default" : "outline"}
                    onClick={() => setColorTheme(ct.id as any)}
                    className="flex flex-col items-center gap-2 h-auto py-4"
                  >
                    <div className={`w-8 h-8 rounded-full ${ct.color}`} />
                    <span>{ct.name}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
