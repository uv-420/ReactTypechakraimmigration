import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({});

const sizes = {
  sm: defineStyle({
    h: "167px",
    fontSize: "16px",
    p: "20px",
  }),
  xs: defineStyle({
    h: "130px",
    fontSize: "16px",
    p: "20px",
  }),
};

const variants = {
  tarOutlineTeal9003f: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      teal_900_3f: {
        borderColor: "#0348333f !important",
        borderWidth: "1px",
        borderStyle: "solid",
      },
    };
    return colorCombinations[colorScheme as keyof typeof colorCombinations] || colorCombinations["teal_900_3f"];
  }),
  tarWhite: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      white_A700: {
        bg: "white.A700",
      },
    };
    return colorCombinations[colorScheme as keyof typeof colorCombinations] || colorCombinations["white_A700"];
  }),
  tarOutlineGray300: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      white_A700: {
        borderColor: "#e3dbd8 !important",
        borderWidth: "1px",
        borderStyle: "solid",
        bg: "white.A700",
      },
    };
    return colorCombinations[colorScheme as keyof typeof colorCombinations] || colorCombinations["white_A700"];
  }),
};

const TextArea = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "tarWhite",
    size: "xs",
  },
});
export default TextArea;
