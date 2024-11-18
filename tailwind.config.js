/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('~/assets/images/hero1.jpg')",
        'hero1-bg': "url('~/assets/images/civilverse.png')",
        'hero2-bg': "url('~/assets/images/homerenovation.png')",
      },
    },
  },
  plugins: [],
}

