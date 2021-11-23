module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    animation: {
      show: "show 0.4s ease-in-out forwards",
      showOpacity: "showOpacity 0.3s linear forwards",
    },
    keyframes: {
      show: {
        "0%": { transform: "translate(-600px,0)" },
        "100%": { transform: "translate(0px,0)" },
      },
      showOpacity: {
        "0%": { transform: "translate(100px,0)", opacity: 0 },
        "100%": { transform: "translate(0px,0)", opacity: 1 },
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover", "focus"],
      borderBottom: ["hover"],
      display: ["focus"],
      padding: ["hover"],
    },
  },
  plugins: [],
};
