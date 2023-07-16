const twScrollbar = require("tailwind-scrollbar");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            screens: {
                sm: "576px",
            },
            animation: {
                "spin-slow": "spin 3s linear infinite",
            },
            container: {
                center: true,
                screens: {
                    xs: "100%",
                    sm: "100%",
                    md: "768px",
                    lg: "1024px",
                    xl: "1180px",
                },
            },
            colors: {
                "theme-pink": "#FFA9D8",
                "theme-yellow": "#FCDFA1",
                "theme-black": "#0A0A0A",
            },
        },
    },
    plugins: [twScrollbar],
};
