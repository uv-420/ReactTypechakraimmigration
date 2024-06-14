const baseStyle = {
  color: "teal.900",
  fontFamily: "Plus Jakarta Sans",
};
const sizes = {
  "3xl": {
    fontSize: {
      md: "50px",
      base: "40px",
      sm: "46px",
    },
    fontWeight: 700,
  },
  "2xl": {
    fontSize: {
      md: "32px",
      base: "28px",
      sm: "30px",
    },
    fontWeight: 700,
  },
  xl: {
    fontSize: {
      md: "30px",
      base: "26px",
      sm: "28px",
    },
    fontWeight: 600,
  },
  "4xl": {
    fontSize: {
      md: "80px",
      base: "48px",
    },
    fontWeight: 700,
  },
  s: {
    fontSize: "15px",
    fontWeight: 700,
  },
  md: {
    fontSize: "18px",
    fontWeight: 600,
  },
  xs: {
    fontSize: "14px",
    fontWeight: 600,
  },
  lg: {
    fontSize: "22px",
    fontWeight: 700,
  },
};
const defaultProps = {
  size: "lg",
};

const Heading = {
  baseStyle,
  sizes,
  defaultProps,
};
export default Heading;
