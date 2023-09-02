import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#edf2f8",
                secondary: "#313bac",
                black: "#030303",
                "light-grey": "#e4e4e4",
            },
            transitionProperty: {
                width: "width",
                circle: "transform, opacity",
            },
            backgroundImage: {
                sidenav: "url('./src/assets/sidenav-bg.svg')",
            },
        },
    },
    plugins: [],
};
export default config;
