/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "sayohat": "url('../../public/sayohat.jpg')",
        "ishonch": "url('../../public/ishonch.jpg')",
        "madad": "url('../../public/madad.jpg')",
        "omad": "url('../../public/omad.jpg')",
        "talim": "url('../../public/talim.jpg')",
        "tezpul": "url('../../public/tezpul.jpg')"
      }
     },
  },
  plugins: [],
}