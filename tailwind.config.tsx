// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Use CSS variable from next/font
        poppins: ['var(--font-poppins)', 'sans-serif'],
        script: ['var(--font-great-vibes)', 'cursive'],
      },
    },
  },
  plugins: [],
};

export default config;
