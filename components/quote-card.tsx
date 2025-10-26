"use client"

import Image from "next/image"
import { Heart } from "lucide-react"
import type { Quote } from "@/lib/quotes"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type QuoteCardProps = {
  quote: Quote
  isFavorite: boolean
  onToggleFavorite: (id: number) => void
  showRemoveButton?: boolean
}

export function QuoteCard({ quote, isFavorite, onToggleFavorite, showRemoveButton }: QuoteCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full">
        <Image src={quote.image || "/placeholder.svg"} alt={quote.author} fill className="object-cover" />
        <button
          onClick={() => onToggleFavorite(quote.id)}
          className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
          aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
        >
          <Heart className={`w-5 h-5 ${isFavorite ? "fill-primary text-primary" : "text-muted-foreground"}`} />
        </button>
      </div>
      <CardContent className="p-6">
        <p className="text-base leading-relaxed mb-4 text-pretty">{quote.text}</p>
        <p className="text-sm font-semibold text-primary">{quote.author}</p>
        {showRemoveButton && (
          <Button variant="outline" size="sm" onClick={() => onToggleFavorite(quote.id)} className="mt-4 w-full">
            Eliminar de Favoritos
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
