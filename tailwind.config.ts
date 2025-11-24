import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['var(--font-instrument-serif)', 'serif'],
        'sans': ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        rayo: {
          DEFAULT: '#FF4F37', // Arancione principale
          dark: '#E63E26',
          light: '#FF7A66',
          bg: '#F9F9F9',      // Sfondo chiaro sezioni
          text: '#1A1A1A',    // Testo scuro principale
          gray: '#666666',    // Testo secondario
        }
      }
    },
  },
  plugins: [],
};
export default config;

