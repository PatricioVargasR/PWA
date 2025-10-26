import { Navigation } from "@/components/navigation"
import { WifiOff } from "lucide-react"

export default function OfflinePage() {
  return (
    <div className="min-h-screen pb-20 md:pb-8 md:pt-20">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center space-y-6">
          <WifiOff className="w-20 h-20 mx-auto text-muted-foreground" />
          <h1 className="text-3xl font-bold">Sin conexión</h1>
          <p className="text-lg text-muted-foreground">
            Parece que no tienes conexión a internet. Algunas funciones pueden no estar disponibles.
          </p>
        </div>
      </main>
    </div>
  )
}
