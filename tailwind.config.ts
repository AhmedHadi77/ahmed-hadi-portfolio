import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // Core palette
        ink: "#0F1D2A", // deep navy: headings, dark surfaces
        navy: {
          900: "#0A1520",
          800: "#0F1D2A",
          700: "#16293A",
          600: "#1F3A50"
        },
        graphite: "#44566A", // body text on light
        mist: "#F3F6F4", // paper background
        paper: "#F3F6F4",
        aqua: "#00A99A", // brand signal teal
        reef: "#19C7B2",
        signal: "#2EE6C9", // bright teal for dark surfaces
        amber: "#F2A93B", // live / telemetry accent
        coral: "#FF5D5D", // alerts only
        gold: "#F4C542",
        leaf: "#A9D94F"
      },
      boxShadow: {
        premium: "0 30px 80px -20px rgba(15, 29, 42, 0.28)",
        soft: "0 14px 40px -12px rgba(15, 29, 42, 0.16)",
        glow: "0 0 0 1px rgba(46, 230, 201, 0.25), 0 20px 60px -10px rgba(0, 169, 154, 0.45)"
      },
      backgroundImage: {
        "section-mesh":
          "radial-gradient(60% 50% at 0% 0%, rgba(0, 169, 154, 0.10) 0%, transparent 60%), radial-gradient(50% 40% at 100% 10%, rgba(242, 169, 59, 0.10) 0%, transparent 60%)"
      },
      fontFamily: {
        display: [
          "'Bricolage Grotesque Variable'",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ],
        sans: [
          "'IBM Plex Sans'",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ]
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" }
        },
        "dash-flow": {
          to: { strokeDashoffset: "-200" }
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.7" },
          "100%": { transform: "scale(2.4)", opacity: "0" }
        },
        shimmer: {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" }
        }
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        "dash-flow": "dash-flow 6s linear infinite",
        "pulse-ring": "pulse-ring 2.2s cubic-bezier(0.22, 1, 0.36, 1) infinite",
        shimmer: "shimmer 3.2s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
