/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bannerBg': "url('./assets/images/banner_bg.png')",
        'bannerBG_With_Overlay':'linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(./assets/images/banner_bg.png)'
      }
    },
  },
  plugins: [],
}

