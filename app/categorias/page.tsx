"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { QuoteCard } from "@/components/quote-card"
import { quotes, categories } from "@/lib/quotes"
import { useFavorites } from "@/lib/favorites"
import { Button } from "@/components/ui/button"

export default function CategoriasPage() {
  const [selectedCategory, setSelectedCategory] = useState("Éxito")
  const { isFavorite, toggleFavorite, mounted } = useFavorites()

  const filteredQuotes = quotes.filter((q) => q.category === selectedCategory)

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen pb-20 md:pb-8 md:pt-20">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Categorías</h1>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-muted-foreground">Categoría: {selectedCategory}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuotes.map((quote) => (
            <QuoteCard
              key={quote.id}
              quote={quote}
              isFavorite={isFavorite(quote.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
