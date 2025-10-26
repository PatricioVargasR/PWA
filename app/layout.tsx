import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import { PWARegister } from "@/components/pwa-register"
import { WindowOverlayListener } from "@/components/WindowOverlayListener"
import { SettingsMenu } from "@/components/settingsMenu"

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Inspirate - Frases Inspiradoras",
  description: "Descubre frases inspiradoras que transformarán tu día",
  generator: "v0.app",
  manifest: "/manifest.json",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fef3e2" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Inspirate",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "Inspirate",
    title: "Inspirate - Frases Inspiradoras",
    description: "Descubre frases inspiradoras que transformarán tu día",
  },
  twitter: {
    card: "summary",
    title: "Inspirate - Frases Inspiradoras",
    description: "Descubre frases inspiradoras que transformarán tu día",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icon-192.jpg" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${poppins.variable} antialiased`}>
        <Suspense fallback={null}>
          {/* CAMBIOS */}
          {/* Barra de título personalizada para Window Controls Overlay */}
          <div
            id="titlebar"
            className="fixed z-50 flex items-center justify-between bg-[var(--titlebar-bg,#fef3e2)] text-black px-4"
            style={
              {
                left: "env(titlebar-area-x, 0)",
                top: "env(titlebar-area-y, 0)",
                width: "env(titlebar-area-width, 100%)",
                height: "env(titlebar-area-height, 40px)",
                ["WebkitAppRegion" as any]: "drag",
              } as React.CSSProperties
            }
          >
            <span className="font-semibold">✨ Inspirate</span>
            <div
              style={{ ["WebkitAppRegion" as any]: "no-drag" }}
              className="flex items-center gap-3"
            >
              <SettingsMenu />
            </div>
          </div>

          <ThemeProvider>{children}</ThemeProvider>
          <PWARegister />
          <WindowOverlayListener />
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
