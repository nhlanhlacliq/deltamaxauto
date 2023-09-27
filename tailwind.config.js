/* eslint-disable @typescript-eslint/no-unused-vars */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      l: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#8FA1B3",
        "primary-300": "#003366",
        "primary-500": "#0066CC",
        "black-100": "#0C0C0C",
        "black-200": "#000D1A",
        "black-500": "#001F3D"
      },
      backgroundImage: (theme) => ({
        // "gradient-yellowred":
        //   "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "home": "url('./assets/Home.png')",
        "rover": "url('./assets/rover.jpeg')",
        "about": "url('./assets/Headlight.jpeg')",
        "services": "url('./assets/engine.jpeg')",
        "contact": "url('./assets/jag.jpeg')",
      }),
      top: (theme) => ({
        neg: "-24px"
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        gillsans: ["Gill Sans", "sans-serif"],
        //TODO: 
        // univers: ["Univers", "univers"],
      },
      content: {
        bmw: "url('./assets/Logo_bmw.svg')",
        landrover: "url('./assets/Logo_landrover.svg')",
        jaguar: "url('./assets/Logo_jaguar.svg')",
        arrow: "url('./assets/Menu_arrow.svg')",
        menuClose: "url('./assets/Menu_close.svg')",
        menu: "url('./assets/Menu.svg')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      lg: "1280px",
      xl: "1440px",
    },
  },
  // eslint-disable-next-line no-undef
  // plugins: [require('@tailwindcss/aspect-ratio')],
}

