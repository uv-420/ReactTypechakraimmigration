import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const sizes = {
  xs: defineStyle({
    control: {
      h: "12px",
      w: "12px",
    },
    label: {},
  }),
};

const variants = {
  primary: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      control: {
        control: {
          _checked: {},
        },
      },
    };

    return colorCombinations[colorScheme as keyof typeof colorCombinations] || colorCombinations["control"];
  }),
};

const Checkbox = defineStyleConfig({
  variants,
  sizes,
  defaultProps: {
    variant: "primary",
    size: "xs",
  },
});
export default Checkbox;
