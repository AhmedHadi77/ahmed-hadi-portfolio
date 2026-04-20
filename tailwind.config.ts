import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17202A",
        graphite: "#32414F",
        mist: "#F6FBFA",
        aqua: "#00A99A",
        reef: "#19C7B2",
        coral: "#FF5D5D",
        gold: "#F4C542",
        leaf: "#A9D94F"
      },
      boxShadow: {
        premium: "0 24px 70px rgba(23, 32, 42, 0.12)",
        soft: "0 14px 40px rgba(23, 32, 42, 0.08)"
      },
      backgroundImage: {
        "section-mesh":
          "linear-gradient(135deg, rgba(25, 199, 178, 0.14) 0%, rgba(255, 255, 255, 0) 38%), linear-gradient(220deg, rgba(255, 93, 93, 0.10) 0%, rgba(255, 255, 255, 0) 35%), linear-gradient(180deg, rgba(244, 197, 66, 0.10) 0%, rgba(246, 251, 250, 0.95) 72%)",
        "engineered-lines":
          "linear-gradient(90deg, rgba(23, 32, 42, 0.07) 1px, transparent 1px), linear-gradient(180deg, rgba(23, 32, 42, 0.07) 1px, transparent 1px)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};

export default config;
