export type Quote = {
  id: number
  text: string
  author: string
  category: string
  image: string
}

export const quotes: Quote[] = [
  {
    id: 1,
    text: "El único modo de hacer un gran trabajo es amar lo que haces.",
    author: "Steve Jobs",
    category: "Éxito",
    image: "/person-working-passionately-sunset.jpg",
  },
  {
    id: 2,
    text: "Tu tiempo es limitado, no lo desperdicies viviendo la vida de alguien más.",
    author: "Steve Jobs",
    category: "Éxito",
    image: "/hourglass-time-sand.jpg",
  },
  {
    id: 3,
    text: "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que haces, tendrás éxito.",
    author: "Albert Schweitzer",
    category: "Éxito",
    image: "/happy-person-jumping-field.jpg",
  },
  {
    id: 4,
    text: "No intentes ser un hombre de éxito, sino un hombre de valor.",
    author: "Albert Einstein",
    category: "Éxito",
    image: "/person-standing-mountain-peak.jpg",
  },
  {
    id: 5,
    text: "La vida es aquello que te va sucediendo mientras te empeñas en hacer otros planes.",
    author: "John Lennon",
    category: "Éxito",
    image: "/winding-road-journey.jpg",
  },
  {
    id: 6,
    text: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    author: "Robert Collier",
    category: "Éxito",
    image: "/mountain-path-steps.jpg",
  },
  {
    id: 7,
    text: "La mejor venganza es un éxito masivo.",
    author: "Frank Sinatra",
    category: "Éxito",
    image: "/concert-crowd-celebration.jpg",
  },
  {
    id: 8,
    text: "El fracaso es el condimento que da sabor al éxito.",
    author: "Truman Capote",
    category: "Éxito",
    image: "/cooking-seasoning-food.jpg",
  },
  {
    id: 9,
    text: "No puedes resolver un problema en el mismo nivel de pensamiento en el que fue creado.",
    author: "Albert Einstein",
    category: "Sabiduría",
    image: "/gears-lightbulb-innovation.jpg",
  },
  {
    id: 10,
    text: "La vida es un 10% lo que te pasa y un 90% cómo reaccionas a ello.",
    author: "Charles R. Swindoll",
    category: "Motivación",
    image: "/balance-scales-equilibrium.jpg",
  },
  {
    id: 11,
    text: "Cree que puedes y ya estarás a medio camino.",
    author: "Theodore Roosevelt",
    category: "Motivación",
    image: "/mountain-climbing-achievement.jpg",
  },
  {
    id: 12,
    text: "La motivación nos impulsa a empezar y el hábito nos permite continuar.",
    author: "Jim Ryun",
    category: "Motivación",
    image: "/autumn-forest-path.png",
  },
  {
    id: 13,
    text: "Siempre parece imposible hasta que se hace.",
    author: "Nelson Mandela",
    category: "Motivación",
    image: "/crescent-moon-night-sky.jpg",
  },
  {
    id: 14,
    text: "No cuentes los días, haz que los días cuenten.",
    author: "Muhammad Ali",
    category: "Motivación",
    image: "/calendar-date-planning.jpg",
  },
]

export const categories = Array.from(new Set(quotes.map((q) => q.category)))
