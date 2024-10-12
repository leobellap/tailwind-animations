/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      animation: {
        sphereA: "sphereA 10s ease-in-out infinite",
        sphereB: "sphereB 12s ease-in-out infinite",
      },
    },
    keyframes: {
      sphereA: {
        "0%": {
          transform: "translate(0px, 0px) scale(1)",
        },
        "33%": {
          transform: "translate(20px, 20px) scale(1.3)",
        },
        "66%": {
          transform: "translate(-20px, -20px) scale(0.7)",
        },
        "100%": {
          transform: "translate(0px, 0px) scale(1)",
        },
      },
      sphereB: {
        "0%": {
          transform: "translate(0px, 0px) scale(1)",
        },
        "33%": {
          transform: "translate(-30px, -20px) scale(0.8)",
        },
        "66%": {
          transform: "translate(30px, 20px) scale(1.2)",
        },
        "100%": {
          transform: "translate(0px, 0px) scale(1)",
        },
      },
    },
    plugins: [],
  },
};
