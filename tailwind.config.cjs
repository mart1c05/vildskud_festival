

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      hvid: "#FFFFFF",
      sort: "#000000",
      beige: "#EBE1CE",
      orange: "#FF7556",
      lysegron: "#C8DEA4",
      morkegron: "#92A377",
      graagron: "#D3D9C8",
      baggrund: "FAF9F8",
    },
    fontSize: {
      h1_mobil: "3rem",
      h2_mobil: "2rem",
      h3_mobil: "1.5rem",
      h4_mobil: "1.3rem",
      h5_mobil: "1.2rem",
      brodtekst_mobil: "1rem",
      footer_mobil: "0.8rem",
      footer_mobil_links: "0.5rem",
      h1_web: "5rem",
      h2_web: "3.6rem",
      h3_web: "2.5rem",
      h4_web: "2rem",
      h5_web: "1.5rem",
      brodtekst_web: "1.3rem",
      hero_h1: "7rem",
      footer_web: "1rem",
      footer_web_links: "0.8rem",
    },

    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
  daisyui: {
    styled: false,
    
  },
};


