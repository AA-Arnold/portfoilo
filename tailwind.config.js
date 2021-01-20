module.exports = {
  purge: ["./src/components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'purple-pry': '#150321',
        'purple-sec': '#260B37',
        'purple-high': '#C306F1',
        'purple-txt': '#AF97BF',
        'green-high': '#0EB108',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
