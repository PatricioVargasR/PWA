"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen pb-20 md:pb-8 md:pt-[calc(env(titlebar-area-height,40px)+1rem)]">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-5xl">✨</span>
              <h1 className="text-4xl md:text-5xl font-bold text-primary">Inspirate</h1>
            </div>

            <blockquote className="space-y-4">
              <p className="text-2xl md:text-3xl font-medium leading-relaxed text-balance px-4">
                "La única manera de hacer un gran trabajo es amar lo que haces."
              </p>
              <footer className="text-lg md:text-xl text-muted-foreground">- Steve Jobs</footer>
            </blockquote>
          </div>

          <div className="pt-8">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/categorias">Explorar Frases</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
