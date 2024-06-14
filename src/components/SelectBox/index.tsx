import React from "react";
import { Select, Props } from "chakra-react-select";
import PropTypes from "prop-types";

const shapes = {
  round: {
    borderRadius: "30px",
  },
} as const;
const variants = {
  outline: {
    teal_900_3f: {
      borderColor: "teal.900_3f",
      borderWidth: "1px",
      borderStyle: "solid",
      color: "teal.900_99",
    },
  },
} as const;
const sizes = {
  xs: {
    h: "60px",
    pl: "20px",
    pr: "35px",
    fontSize: "16px",
  },
} as const;

type VariantType = typeof variants;
type VariantKey = keyof VariantType;
type ColorKey = keyof VariantType[keyof VariantType];

type selectOptionType = { value: string; label: string };
type SelectProps = Omit<Props, "getOptionLabel"> &
  Partial<{
    options: selectOptionType[];
    isSearchable: boolean;
    isMulti: boolean;
    onChange: (option: any) => void;
    value: string;
    indicator: React.ReactElement;
    getOptionLabel: (e: any) => string;
    styles: any;
    [x: string]: any;
    shape: keyof typeof shapes;
    variant: VariantKey;
    size: keyof typeof sizes;
    color: ColorKey;
  }>;

const SelectBox = React.forwardRef<any, SelectProps>(
  (
    {
      options = [],
      isSearchable = false,
      isMulti = false,
      indicator,
      style,
      shape = "",
      size = "xs",
      variant = "outline",
      color = "teal_900_3f",
      ...restProps
    },
    ref,
  ) => {
    return (
      <>
        <Select
          ref={ref}
          options={options}
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          chakraStyles={{
            container: (provided) => ({
              ...provided,
              ...sizes[size as keyof typeof sizes],
              ...shapes[shape as keyof typeof shapes],
              ...(variants[variant as VariantKey][color as ColorKey] as Object),
              ...style,
              zIndex: 0,
              display: "flex",
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",
              boxShadow: "0 !important",
              minHeight: "auto",
              width: "100%",
              color: "inherit !important",
              "&:hover": {
                border: "0 !important",
              },
              "&>div": {
                padding: "0 !important",
              },
            }),
            option: (provided, state) => ({
              ...provided,
              color: "#000",
            }),
          }}
          menuPortalTarget={document.body}
          closeMenuOnScroll={(event: any) => {
            return event.target.id === "scrollContainer";
          }}
          {...restProps}
        />
      </>
    );
  },
);

SelectBox.propTypes = {
  options: PropTypes.array,
  isSearchable: PropTypes.bool,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["outline"]),
  color: PropTypes.oneOf(["teal_900_3f"]),
};

export { SelectBox };
