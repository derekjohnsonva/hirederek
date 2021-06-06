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
    linkDark: "hsla(330, 37%, 25%, 1)",
    linkLight: "hsla(152, 41%, 52%, 1)",
    primaryLight: "hsla(52, 50%, 91%, 1)",
    secondaryLight: "hsla(152, 32%, 92%, 1)",
    primaryDark: "hsla(151, 24%, 60%, 1)",
    secondaryDark: "hsla(13, 68%, 63%, 1)",
    darkText: "hsla(234, 20%, 30%, 1)",
    lightText: "hsla(52, 50%, 91%, 1)",
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
