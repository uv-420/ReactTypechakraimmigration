import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({ field: { cursor: "text" } });

const sizes = {
  xs: defineStyle({
    field: {
      fontSize: "16px",
      height: "50px",
      px: "20px",
    },
  }),
  sm: defineStyle({
    field: {
      fontSize: "16px",
      height: "58px",
      px: "25px",
    },
  }),
};

const variants = {
  fill: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      light_green_50_01: {
        field: {
          bg: "light_green.50_01",
        },
      },
      white_A700: {
        field: {
          bg: "white.A700",
          color: "teal.900_99",
        },
      },
      gray_900_03: {
        field: {
          bg: "gray.900_03",
          color: "white.A700",
        },
      },
    };
    return colorCombinations[colorScheme as keyof typeof colorCombinations] || colorCombinations["gray_900_03"];
  }),
  outline: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      teal_900_3f: {
        field: {
          borderColor: "teal.900_3f",
          borderWidth: "1px",
          borderStyle: "solid",
          color: "teal.900_99",
        },
      },
    };
    return colorCombinations[colorScheme as keyof typeof colorCombinations] || colorCombinations["teal_900_3f"];
  }),
};

const Input = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "fill",
    size: "sm",
  },
});
export default Input;
