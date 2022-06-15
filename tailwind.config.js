// tailwind.config.js
module.exports = {
  mode: "jit",
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    container: {
      center: true,
      padding: {
        default: "15px",
        xl: "0",
      },
    },
    extend: {
      fontSize: {
        "10xl": "10rem",
      },
      backgroundColor: {
        yellow: "#F4C544",
      },
      textColor: {
        yellow: "#F4C544",
      },
      fill: {
        yellow: "#F4C544",
        none: "none",
      },
      stroke: {
        yellow: "#F4C544",
        none: "none",
      },
    },
    fontFamily: {
      CeraRoundPro: ["CeraRoundPro", "sans-serif"],
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: ["src/html/**/*.html", "src/js/**/*.js"],
  },
};
