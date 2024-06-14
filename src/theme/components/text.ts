const baseStyle = {
  color: "teal.900",
  fontFamily: "Plus Jakarta Sans",
};
const sizes = {
  xs: {
    fontSize: "11px",
    fontWeight: 400,
  },
  lg: {
    fontSize: {
      md: "30px",
      base: "26px",
      sm: "28px",
    },
    fontWeight: 400,
  },
  s: {
    fontSize: "16px",
    fontWeight: 400,
  },
  md: {
    fontSize: "20px",
    fontWeight: 400,
  },
};
const defaultProps = {
  size: "s",
};

const Text = {
  baseStyle,
  sizes,
  defaultProps,
};
export default Text;
