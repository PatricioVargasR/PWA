"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Grid3x3, Heart, Settings } from "lucide-react"

const navItems = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "/categorias", label: "Categorías", icon: Grid3x3 },
  { href: "/favoritos", label: "Favoritos", icon: Heart },
  { href: "/ajustes", label: "Ajustes", icon: Settings },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border md:top-0 md:bottom-auto md:border-b md:border-t-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between md:justify-start md:gap-8 h-16">
          <Link href="/" className="hidden md:flex items-center gap-2 font-bold text-xl text-primary">
            <span className="text-2xl">✨</span>
            Inspirate
          </Link>

          <div className="flex items-center justify-around w-full md:w-auto md:gap-6">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex flex-col md:flex-row items-center gap-1 md:gap-2 py-2 px-3 rounded-lg transition-colors ${
                    isActive ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs md:text-sm">{item.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
