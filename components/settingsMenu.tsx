"use client"

import { useState, useRef, useEffect } from "react"

export function SettingsMenu() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Cerrar menú al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const options = [
    "Perfil",
    "Tema",
    "Notificaciones",
    "Idioma",
    "Acerca de",
  ]

  return (
    <div className="relative" ref={menuRef}>
      <button
        className="rounded p-1 hover:bg-gray-300"
        title="Configuración"
        onClick={() => setOpen(!open)}
      >
        ⚙️
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg z-50">
          {options.map((opt, i) => (
            <button
              key={i}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => {
                console.log(opt)
                setOpen(false)
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
