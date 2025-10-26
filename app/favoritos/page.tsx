"use client"

import { Navigation } from "@/components/navigation"
import { QuoteCard } from "@/components/quote-card"
import { quotes } from "@/lib/quotes"
import { useFavorites } from "@/lib/favorites"

export default function FavoritosPage() {
  const { favorites, isFavorite, toggleFavorite, mounted } = useFavorites()

  const favoriteQuotes = quotes.filter((q) => favorites.includes(q.id))

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen pb-20 md:pb-8 md:pt-20">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Mis Citas Favoritas</h1>

        {favoriteQuotes.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground mb-4">No tienes frases favoritas aún</p>
            <p className="text-muted-foreground">Explora las categorías y guarda tus frases favoritas</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteQuotes.map((quote) => (
              <QuoteCard
                key={quote.id}
                quote={quote}
                isFavorite={isFavorite(quote.id)}
                onToggleFavorite={toggleFavorite}
                showRemoveButton
              />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
