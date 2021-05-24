// theme.js

// 1. import `extendTheme` function
import { extendTheme, useColorModeValue } from "@chakra-ui/react";

const color = useColorModeValue("white", "gray.800");

// 2. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const layerStyles = {
  h1: {
    color: color,
  },
  h2: {
    color: color,
  },
};
const textStyles = {
  h1: {
    // you can also use responsive styles
    fontSize: "14px",
    fontWeight: "black",
    lineHeight: "110%",
    letterSpacing: "-2%",
  },
  h2: {
    fontSize: "14px",
    fontWeight: "light",
    lineHeight: "110%",
    letterSpacing: "-1%",
  },
};

// 3. extend the theme
const theme = extendTheme({ config, textStyles, layerStyles });

export default theme;
