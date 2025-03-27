// tailwind.config.js
module.exports = {
    darkMode: 'class', // Enables toggling via a CSS class
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Adjust based on your project structure
    ],
    theme: {
      extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
      themes: ["light", "dark"],
    },
  };
  