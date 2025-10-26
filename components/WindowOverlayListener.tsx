"use client"

import { useEffect } from "react"

export function WindowOverlayListener() {
  useEffect(() => {
    if ("windowControlsOverlay" in navigator) {
      const overlay = (navigator as any).windowControlsOverlay

      const update = (e: any) => {
        const { visible, titlebarAreaRect } = overlay
        console.log("Overlay visible:", visible)
        console.log("Titlebar area:", titlebarAreaRect)
      }

      overlay.addEventListener("geometrychange", update)
      return () => overlay.removeEventListener("geometrychange", update)
    }
  }, [])

  return null
}
