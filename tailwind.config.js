/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}", // Includes all HTML and JS/TS files in the src folder
    ],
    theme: {
      extend: {
        colors: {
         'custom-bg': 'rgb(239, 235, 227)',
        },
      }, // This is the fix! An empty object tells Tailwind to use its defaults
    },
    plugins: [], // Add plugins if needed
  }