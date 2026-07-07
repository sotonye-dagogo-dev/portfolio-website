/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,scss}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#ff6b6b",
          dark: "#ff8787",
          hover: "#daa520",
        },
        surface: {
          light: "#ffffff",
          dark: "#374151",
          hover: {
            light: "#f0f0f0",
            dark: "#4b5563",
          },
        },
        background: {
          light: "#f3f4f6",
          dark: "#1f2937",
          card: {
            light: "#ffffff",
            dark: "#374151",
          },
        },
        text: {
          light: "#111827",
          dark: "#f9fafb",
          muted: {
            light: "#6b7280",
            dark: "#9ca3af",
          },
        },
        accent: {
          DEFAULT: "#daa520",
          hover: "#b8860b",
          "dark-hover": "#e6b800",
        },
        border: {
          light: "#e5e7eb",
          dark: "#4b5563",
        },
      },
      fontFamily: {
        primary: ["Roboto", "system-ui", "sans-serif"],
        heading: ["Roboto", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Courier New", "monospace"],
      },
      fontSize: {
        xs: [".7rem", { lineHeight: "1rem" }],
        sm: [".8rem", { lineHeight: "1.25rem" }],
        base: [".95rem", { lineHeight: "1.5rem" }],
        body: ["1rem", { lineHeight: "1.6rem" }],
        lg: ["1.25rem", { lineHeight: "1.75rem" }],
        xl: ["1.5rem", { lineHeight: "2rem" }],
        "2xl": ["2rem", { lineHeight: "2.5rem", fontWeight: "800" }],
        "3xl": ["clamp(2.5rem, 6vw, 4.5rem)", { lineHeight: "1.1", fontWeight: "900" }],
        "heading-1": ["2.5rem", { lineHeight: "3rem", fontWeight: "800" }],
        "heading-2": ["2rem", { lineHeight: "2.5rem", fontWeight: "700" }],
        "heading-3": ["1.5rem", { lineHeight: "2rem", fontWeight: "600" }],
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
        "3xl": "64px",
      },
      borderRadius: {
        DEFAULT: "8px",
        lg: "12px",
        xl: "16px",
      },
      boxShadow: {
        sm: "0 1px 3px rgba(0,0,0,.08)",
        md: "0 4px 12px rgba(0,0,0,.1)",
        lg: "0 8px 30px rgba(0,0,0,.12)",
        "dark-sm": "0 1px 3px rgba(0,0,0,.3)",
        "dark-md": "0 4px 12px rgba(0,0,0,.35)",
        "dark-lg": "0 8px 30px rgba(0,0,0,.4)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "fade-in-left": "fadeInLeft 0.5s ease-out",
        "fade-in-right": "fadeInRight 0.5s ease-out",
        "fade-in-up": "fadeInUp 0.5s ease-out",
        "slide-in": "slideIn 0.3s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "marquee": "marquee-scroll 30s linear infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "border-spin": "border-spin 3s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "marquee-scroll": {
          to: { transform: "translateX(-50%)" },
        },
        "pulse-dot": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(34, 197, 94, .6)" },
          "50%": { boxShadow: "0 0 0 8px rgba(34, 197, 94, 0)" },
        },
        "border-spin": {
          to: { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
