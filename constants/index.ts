import { Home, Settings, OctagonAlert, ShieldCheck } from "lucide-react";

export const tabs = [
  {
    label: "Home",
    icon: Home,
    textColor: "text-white",
    bgColor: "bg-zinc-400/20",
  },
  {
    label: "Settings",
    icon: Settings,
    textColor: "text-white",
    bgColor: "bg-zinc-400/20",
  },
  {
    label: "Security",
    icon: ShieldCheck,
    textColor: "text-green-500",
    bgColor: "bg-green-300/20",
  },
  {
    label: "Danger Zone",
    icon: OctagonAlert,
    textColor: "text-red-500",
    bgColor: "bg-red-300/20",
  },
];

export const APPS = [
  {
    title: "Duolingo",
    description: "Language Lessons.",
    longDescription:
      "Learn a new language with the world’s most-downloaded education app! Duolingo is the fun, free app for learning 40+ languages through quick, bite-sized lessons. Practice speaking, reading, listening, and writing to build your vocabulary and grammar skills.",
    image: "/duolingo.jpg",
  },
  {
    title: "Memrise",
    description: "Languages for life.",
    longDescription:
      "Over 75 million people have already chosen Memrise to achieve their language goals— make it your resolution this year! Whether it’s finally speaking Spanish, brushing up on French, or mastering Japanese, Memrise makes learning authentic, engaging, and unforgettable.",
    image: "/memrise.jpg",
  },
  {
    title: "Amazon Kindle",
    description: "Read Anytime, Anywhere.",
    longDescription:
      "READ ANYTIME, ANYWHERE On the bus, on your break, in your bed—never be without something to read. The Kindle app puts millions of books, magazines, newspapers, comics, and manga at your fingertips.",
    image: "/kindle.jpg",
  },
  {
    title: "Audible",
    description: "Audio Entertainment.",
    longDescription:
      "Listen and experience new escapes with the latest audiobooks, podcasts & Originals. Dive into a world of audio entertainment with Audible. Whether you're exploring new audio worlds or revisiting old favorites, you'll find a vast array of genres to match every taste and mood. There’s always more to imagine with Audible.",
    image: "/audible.jpg",
  },

  {
    title: "Crunchyroll",
    description: "Anime shows.",
    longDescription:
      "Stream the world's largest dedicated anime collection. Watch over 1,300 titles—from past seasons to new episodes fresh from Japan, including critically acclaimed Crunchyroll Originals.",
    image: "/crunchyroll.jpg",
  },
];
