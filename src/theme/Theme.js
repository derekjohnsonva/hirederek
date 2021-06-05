const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const Theme =  {
  colors: {
    maroon: "hsla(330, 37%, 25%, 1)",
    darkgreen: "hsla(151, 29%, 40%, 1)",
    green: "hsla(152, 41%, 52%, 1)",
    lightgreen: "hsla(106, 33%, 74%, 1)",
    yellow: "hsla(53, 66%, 79%, 1)",
    lightblue: "hsla(152, 32%, 92%, 1)",
    black: "hsla(0, 0%, 0%, 1)",

    primaryLight: "",
    secondaryLight: "",
    primaryDark: "",
    secondaryDark: "",
  },
  fonts: ["Arial", "Helvetica", "sans-serif"],

  device: {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`,
  },
};

export default Theme;
