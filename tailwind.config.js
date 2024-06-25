/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          lg: "1330px",
        },
      },
      colors: {
        text: "#242424",
        primary: "#3f51b5",
        secondary: "#ff7f4d",
        primaryvariant: "#3748a6",
        tertiary: "#64c962",
        stroke: "#ededed",
        negative: "#ff5247",
        disabled: "#cdcdcd",
        links: "#20afff",
        bgondark: "#0a0c1e",
        grayondark: "#10182c",
        darkprimary: "#131c4b",
        darkgrayondark: "#8e9bdf",
        primarysoft: "#eef4ff",
      },
      fontFamily: {
        fontfamily: ["Cairo"],
        secondfamily: ["Open Sans"],
        thirdfamily: ["Poppins"],
        font3: ["Roboto"],
        demo: ["Calligraffitti"],
      },
    },
  },
  plugins: [],
};
