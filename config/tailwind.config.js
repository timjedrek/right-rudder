const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./public/*.html",
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js",
    "./app/views/**/*.{erb,haml,html,slim}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-950": "#172554",
        rrm: "#3771c8",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        //mobile
        wiggle: {
          "0%": {
            transform: "translateX(-10rem) translateY(8rem) scale(.6)",
            opacity: "0",
          },
          "10%": {
            transform: "rotate(0deg) translateY(0rem) scale(1)",
            opacity: "1",
          },
          "25%": { transform: "rotate(7deg)" },
          "40%": { transform: "rotate(5deg)" },
          "55%": { transform: "rotate(7deg)" },
          "70%": { transform: "rotate(0deg) translateY(0rem)", opacity: "1" },
          "100%": {
            transform:
              "rotate(-30deg) translateX(25rem) translateY(-8rem) scale(.5)",
            opacity: "0",
          },
        },
        //desktop
        wiggle2: {
          "0%": {
            transform: "translateX(-10rem) translateY(8rem) scale(.6)",
            opacity: "0",
          },
          "10%": {
            transform: "rotate(0deg) translateY(0rem) scale(1)",
            opacity: "1",
          },
          "25%": { transform: "rotate(7deg)" },
          "40%": { transform: "rotate(5deg)" },
          "55%": { transform: "rotate(7deg)" },
          "70%": { transform: "rotate(0deg) translateY(0rem)", opacity: "1" },
          "100%": {
            transform:
              "rotate(-20deg) translateX(40rem) translateY(-3rem) scale(.7)",
            opacity: "0",
          },
        },
      },
      backgroundImage: {
        head: "url('cessnamountain.webp')",
        //'head' : "url('cessnalake.webp')",
        headsys: "url('cockpitblue2.webp')",
        headsys2: "url('dave.webp')",
        sop: "url('SOP.webp')",
        "featured-notam": "url('computer.webp')",
        videothumb: "url('youtubethumbrrmintro.webp')",
        "farm-selfie": "url('tim-flying-smiling.webp')",
        "fly-mesa": "url('tim-jedrek-flying-at-simplifly.webp')",
        "tim-cessna": "url('tim-jedrek-in-front-of-cessna.webp')",
      },
      height: (theme) => ({
        "screen-1/2": "50vh",
        "screen-2/3": "75vh",
        "screen-1/3": "calc(100vh / 3)",
        "screen-80": "80vh",
        "screen-phone": "91vh",
      }),
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
