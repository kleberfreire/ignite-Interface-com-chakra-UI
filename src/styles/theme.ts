import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    light: {
      white: "#ffffff",
      text: "#F5F8FA",
      info: "#DADADA",
    },
    dark: {
      black: "#000000",
      text: "#47585B",
      info: "#999999",
      info50: "rgba(153, 153, 153, .5)",
    },
    highlight: {
      100: "#FFBA08",
      50: "rgba(255, 186, 8, .5)",
    },
  },
  fonts: {
    body: "Poppins",
    heading: "Poppins",
    text: "Poppins",
  },
});
