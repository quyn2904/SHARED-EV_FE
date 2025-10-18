export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--primary), <alpha-value>)",
        accent: "rgba(var(--accent), <alpha-value>)",
        danger: "rgba(var(--danger), <alpha-value>)",
        button: {
          DEFAULT: "rgba(var(--button), <alpha-value>)",
          text: "rgba(var(--button-text), <alpha-value>)",
          hover: "rgba(var(--button-hover), <alpha-value>)",
          active: "rgba(var(--button-active), <alpha-value>)",
          disabled: {
            bg: "rgba(var(--button-disabled-bg), <alpha-value>)",
            text: "rgba(var(--button-disabled-text), <alpha-value>)",
          },
        },
        background: {
          primary: "rgba(var(--background-primary), <alpha-value>)",
          secondary: "rgba(var(--background-secondary), <alpha-value>)",
        },
        text: {
          primary: "rgba(var(--text-primary), <alpha-value>)",
          secondary: "rgba(var(--text-secondary), <alpha-value>)",
        },
        border: "rgba(var(--border), <alpha-value>)",
      },
    },
  },
  plugins: [],
};
