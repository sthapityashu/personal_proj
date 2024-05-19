import type { Config } from "tailwindcss";

const fontSize = {
  h1: "2.986rem",
  h2: "2.488rem",
  h3: "2.074rem",
  h4: "1.728rem",
  h5: "1.44rem",
  h6: "1.2rem",
  p: "1rem",
  small: "0.833rem",
  extra_small: "0.694rem",
};

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize,
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
