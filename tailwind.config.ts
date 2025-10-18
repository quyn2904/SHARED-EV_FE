import { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--primary), <alpha-value>)",
        accent: "rgba(var(--accent), <alpha-value>)",
        danger: "rgba(var(--danger), <alpha-value>)",
        warning: "rgba(var(--warning), <alpha-value>)",
        info: "rgba(var(--info), <alpha-value>)",
        background: {
          primary: "rgba(var(--bg-body), <alpha-value>)",
          secondary: "rgba(var(--bg-widget), <alpha-value>)",
          header: "rgba(var(--bg-header), <alpha-value>)",
        },
        text: {
          primary: "rgba(var(--text-primary), <alpha-value>)",
          secondary: "rgba(var(--text-secondary), <alpha-value>)",
          muted: "rgba(var(--text-muted), <alpha-value>)",
          "on-color": "rgba(var(--text-on-color), <alpha-value>)",
        },
        border: {
          DEFAULT: "rgba(var(--border-light), <alpha-value>)",

          input: "rgba(var(--input-border), <alpha-value>)",
          "input-focus": "rgba(var(--input-border-focus), <alpha-value>)",
        },
        "button-primary": {
          DEFAULT: "rgba(var(--btn-primary-bg), <alpha-value>)",
          text: "rgba(var(--text-on-color), <alpha-value>)",
        },
        "button-secondary": {
          DEFAULT: "rgba(var(--btn-secondary-bg), <alpha-value>)",
          text: "rgba(var(--btn-secondary-text), <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};

export default config;
