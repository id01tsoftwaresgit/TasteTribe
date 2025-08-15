/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'brand': {
          'primary': '#4F46E5', // A vibrant indigo
          'secondary': '#EC4899', // A warm pink
        },
        'ui': {
          'background': '#F9FAFB', // Very light gray
          'surface': '#FFFFFF',
          'border': '#E5E7EB',
          'hover': '#F3F4F6',
        }
      },
      borderRadius: {
        'xl': '0.75rem', // 12px
        '2xl': '1rem', // 16px
        '3xl': '1.5rem', // 24px
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.07)',
        'soft-lg': '0 10px 15px -3px rgb(0 0 0 / 0.07), 0 4px 6px -4px rgb(0 0 0 / 0.07)',
      }
    },
  },
  plugins: [],
}
