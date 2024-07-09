import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const filledStyle = defineStyle((props) => {
  const { colorScheme } = props;
  const fillColor = { light_green_A700: { bg: "light_green.A700" } };
  return fillColor[colorScheme as keyof typeof fillColor];
});

const baseStyle = defineStyle((props) => ({
  filledTrack: filledStyle(props),
}));

const ProgressBar = defineStyleConfig({
  baseStyle,
  defaultProps: { colorScheme: "light_green_A700" },
});
export default ProgressBar;
