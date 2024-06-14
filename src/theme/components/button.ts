import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({ borderRadius: "0px", outlineOffset: "0", cursor: "pointer", flexDirection: "row" });

const sizes = {
  "2xl": defineStyle({
    h: "51px",
    px: "14px",
  }),
  "8xl": defineStyle({
    h: "96px",
    fontSize: "30px",
    px: "35px",
  }),
  lg: defineStyle({
    h: "44px",
    fontSize: "16px",
    px: "23px",
  }),
  xl: defineStyle({
    h: "50px",
    fontSize: "14px",
    px: "35px",
  }),
  "3xl": defineStyle({
    h: "54px",
    px: "7px",
  }),
  xs: defineStyle({
    h: "30px",
    px: "7px",
  }),
  "7xl": defineStyle({
    h: "70px",
    fontSize: "22px",
    px: "20px",
  }),
  "5xl": defineStyle({
    h: "60px",
    fontSize: "22px",
    px: "25px",
  }),
  sm: defineStyle({
    h: "40px",
    px: "11px",
  }),
  md: defineStyle({
    h: "40px",
    fontSize: "16px",
    px: "9px",
  }),
  "4xl": defineStyle({
    h: "60px",
    px: "17px",
  }),
  "6xl": defineStyle({
    h: "60px",
    fontSize: "14px",
    px: "29px",
  }),
};

const variants = {
  fill: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      white_A700_19: {
        bg: "white.A700_19",
      },
      white_A700: {
        bg: "white.A700",
        color: "teal.900",
      },
      light_green_50_01: {
        bg: "light_green.50_01",
        color: "gray.600",
      },
      light_green_A700: {
        bg: "light_green.A700",
        color: "white.A700",
      },
    };
    return colorCombinations[colorScheme as keyof typeof colorCombinations] || colorCombinations["light_green_A700"];
  }),
  outline: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      white_A700: {
        borderColor: "white.A700",
        borderWidth: "1px",
        borderStyle: "solid",
        color: "white.A700",
      },
      light_green_A700: {
        borderColor: "light_green.A700",
        borderWidth: "1px",
        borderStyle: "solid",
        color: "teal.900",
      },
      gray_300: {
        borderColor: "gray.300",
        borderWidth: "1px",
        borderStyle: "solid",
        color: "gray.600",
      },
    };
    return colorCombinations[colorScheme as keyof typeof colorCombinations] || colorCombinations["light_green_A700"];
  }),
};

const Button = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "fill",
    size: "6xl",
  },
});
export default Button;
