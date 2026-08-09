/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          900: "#060810",
          800: "#0A0E17",
          700: "#0F1524",
          600: "#151C2E",
        },
        accent: {
          indigo: "#6366F1",
          violet: "#8B5CF6",
          cyan: "#22D3EE",
          lilac: "#C4B5FD",
        },
        ink: {
          100: "#F1F3F9",
          300: "#C7CCDB",
          500: "#94A3B8",
          700: "#5B6478",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(600px circle at 15% 20%, rgba(99,102,241,0.18), transparent 60%), radial-gradient(500px circle at 85% 75%, rgba(34,211,238,0.13), transparent 60%)",
      },
      backgroundSize: {
        grid: "36px 36px",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(139,92,246,0.45)",
        "glow-cyan": "0 0 40px -10px rgba(34,211,238,0.4)",
      },
    },
  },
  plugins: [],
};
