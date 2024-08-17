import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[26px]",
};
const variants = {
  fill: {
    dark_0: "bg-dark-0 text-white-0",
    white_0: "bg-white-0 text-grey",
    light_base: "bg-light_base",
    accent_black: "bg-accent-black",
  },
  outline: {
    white_0: "border-white-0 border border-solid text-white-0",
    accent_dark_blue:
      "border-accent-dark_blue border border-solid text-accent-dark_blue",
    dark_0: "border-dark-0 border border-solid text-dark-0",
  },
  gradient: {
    blue_700_blue_800_02: "bg-gradient8 text-white-0",
  },
};
const sizes = {
  lg: "h-[52px] px-5",
  xs: "h-[36px] px-2",
  "2xl": "h-[56px] px-3.5",
  md: "h-[44px] px-[34px] text-[16px]",
  "3xl": "h-[108px] px-[34px] text-[52px]",
  sm: "h-[36px] px-4 text-[16px]",
  xl: "h-[52px] pl-8 pr-2 text-[18px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "outline",
  size = "xl",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${
        (shape && shapes[shape]) || ""
      } ${(size && sizes[size]) || ""} ${
        (variant && variants[variant]?.[color]) || ""
      }`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["lg", "xs", "2xl", "md", "3xl", "sm", "xl"]),
  variant: PropTypes.oneOf(["fill", "outline", "gradient"]),
  color: PropTypes.oneOf([
    "dark_0",
    "white_0",
    "light_base",
    "accent_black",
    "accent_dark_blue",
    "blue_700_blue_800_02",
  ]),
};

export { Button };
